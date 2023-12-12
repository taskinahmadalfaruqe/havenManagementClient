/* eslint-disable react/no-unescaped-entities */
import { Box, Button, CircularProgress, FormControl, InputLabel, MenuItem, Select, Stack, TextField } from "@mui/material";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import useCupon from "../../../Hooks/useCupon";
import useSingelUser from "../../../Hooks/useSingelUser";
import useAuth from "../../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";


const ChakeOutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const [singleUser, singleUserLoading] = useSingelUser();
    const [cupon] = useCupon();
    const { user, loading } = useAuth();
    const navigate = useNavigate();

    const [newRent, setNewRent] = useState(singleUser?.rent);
    const [couponCode, setCouponCode] = useState('');
    const [code, setCode] = useState('');
    const [discount, setDiscount] = useState('');
    const [getDiscount, setGetDiscount] = useState('');
    const [month, setMonth] = useState('');
    const [formattedDate, setFormattedDate] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const [paymentIsLoading, setPaymentIsLoading] = useState(false);
    useEffect(() => {
        cupon.forEach(data => {
            setCode(data.cuponCard);
            setDiscount(data.percentage);
        });
    }, [cupon]);

    useEffect(() => {
        const today = new Date();
        const date = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
        setFormattedDate(date);
    }, [])

    useEffect(() => {
        axiosSecure.post('/payment', { price: newRent })
            .then(res => setClientSecret(res.data.clientSecret))

    }, [axiosSecure, newRent]);



    if (singleUserLoading || loading) {
        return <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '80vw', height: '80vh' }}>
            <Stack sx={{ color: '#42a5f5' }}>
                <CircularProgress color="success" />
            </Stack>
        </Box>
    }

    const handleCouponApply = () => {
        if (!singleUser) {
            return;
        }

        if (couponCode === code) {
            const calculateDiscount = (parseInt(singleUser.rent) * discount) / 100;
            const updateRent = singleUser.rent - calculateDiscount;
            setNewRent(updateRent);
            setGetDiscount(calculateDiscount);
        } else {
            // Handle invalid coupon code scenario
            // Display an error or handle it as required
        }
    };

    // set month name
    const handleChange = (event) => {
        setMonth(event.target.value);
    };

    const handelSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements || !singleUser) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (!card) {
            return;
        }

        try {
            const { error } = await stripe.createPaymentMethod({
                type: 'card',
                card,
            });

            if (error) {
                Swal.fire({
                    icon: "error",
                    title: "Something went wrong!",
                    text: `${error.message}`,
                    showConfirmButton: true,
                });
                return;
            }
            setPaymentIsLoading(true);

            // Confirm payment
            const { paymentIntent, error: cardError } = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || "Anonymous",
                        name: user?.displayName || 'Anonymous',
                    },
                },
            });

            if (cardError) {
                Swal.fire({
                    icon: "error",
                    title: "Payment failed!",
                    text: `${cardError.message}`,
                    showConfirmButton: true,
                });
            } else {

                const paymentInfo = {
                    email: user?.email || "Anonymous",
                    name: user?.displayName || 'Anonymous',
                    apartment_no: singleUser?.apartment_no,
                    rent: singleUser?.rent,
                    getDiscount: getDiscount,
                    finalRent: newRent || singleUser?.rent,
                    paymentDate: formattedDate,
                    paymentFor: month,
                    transection_ID: paymentIntent.id,
                }


                axiosSecure.post('/paymentsInfo', paymentInfo)
                    .then(res => {
                        if (res.data.acknowledged) {
                            Swal.fire({
                                icon: "success",
                                title: "Payment Succssed!",
                                text: `Status: ${paymentIntent.status}` + '  ' + 'and' + '  ' + `Transection ID: ${paymentIntent.id}`,
                                showConfirmButton: true,
                            });
                            navigate('/dasboard/paymentHistory')
                        }
                    })
                    .catch(err => {
                        Swal.fire({
                            icon: "error",
                            title: "Payment failed!",
                            text: `${err}`,
                            showConfirmButton: true,
                            timer: 3000,
                        });
                    })
            }
        } catch (err) {
            Swal.fire({
                icon: "error",
                title: "Payment failed!",
                text: `${err}`,
                showConfirmButton: true,
                timer: 3000,
            });
        }
        setPaymentIsLoading(false);
    };



    return (
        <Box>
            <Box maxWidth={'500px'} marginX={'auto'} display={"flex"} gap={5} flexDirection={'column'} border={'1px solid #42a5f5'} borderRadius={2} sx={{ p: { xs: 1, md: 3 } }}>
                <Box display={"flex"} flexWrap={'wrap'} gap={1} justifyContent={'start'} flexDirection={'column'} sx={{ fontSize: '20px', fontWeight: 400 }}>
                    <Box >Name: {singleUser?.name}</Box>
                    <Box >Email: {singleUser?.email}</Box>
                    <Box >Apartment Number: {singleUser?.apartment_no}</Box>
                    <Box >Rent: {singleUser?.rent}</Box>
                    <Box >Get Discount: {getDiscount || '00'}</Box>
                    <Box >Final Rent: {newRent || singleUser?.rent}</Box>
                    <Box >Today's Date: {formattedDate}</Box>
                    <Box mt={2}>
                        <FormControl fullWidth>
                            <InputLabel id="month-label">Which Month You Want To Pay</InputLabel>
                            <Select
                                labelId="month-label"
                                id="month-select"
                                value={month}
                                label="month"
                                onChange={handleChange}
                                required
                            >
                                <MenuItem value="">Select month</MenuItem>
                                <MenuItem value="January">January</MenuItem>
                                <MenuItem value="February">February</MenuItem>
                                <MenuItem value="March">March</MenuItem>
                                <MenuItem value="April">April</MenuItem>
                                <MenuItem value="May">May</MenuItem>
                                <MenuItem value="June">June</MenuItem>
                                <MenuItem value="July">July</MenuItem>
                                <MenuItem value="August">August</MenuItem>
                                <MenuItem value="September">September</MenuItem>
                                <MenuItem value="October">October</MenuItem>
                                <MenuItem value="November">November</MenuItem>
                                <MenuItem value="December">December</MenuItem>

                            </Select>
                        </FormControl>
                    </Box>

                    <Box mt={2}>
                        <Box display={'flex'} gap={2}>

                            <TextField
                                style={{ width: '100%' }}
                                label="Enter Coupon Code"
                                variant="outlined"
                                value={couponCode}
                                onChange={(e) => setCouponCode(e.target.value)}
                            />


                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleCouponApply}


                            >
                                Apply
                            </Button>
                        </Box>
                    </Box>

                </Box>

                <form onSubmit={handelSubmit}>
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: '16px',
                                    color: '#424770',
                                    '::placeholder': {
                                        color: '#aab7c4',
                                    },
                                },
                                invalid: {
                                    color: '#9e2146',
                                },
                            },
                        }}
                    />
                    <Box mt={5}>
                        <Button
                            style={{ width: '100%' }}
                            variant="contained" type="submit" disabled={!stripe || !clientSecret || paymentIsLoading}>
                            {
                                paymentIsLoading ?

                                    <Stack sx={{ color: '#42a5f5' }} spacing={2} direction="row">
                                        <CircularProgress color="secondary" />

                                    </Stack>
                                    :
                                    'Pay Now'
                            }
                        </Button>
                    </Box>
                </form>
            </Box>
        </Box>
    );
};

export default ChakeOutForm;