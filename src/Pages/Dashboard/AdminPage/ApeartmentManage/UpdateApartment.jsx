import { Helmet } from "react-helmet-async";
import { Box, Button, CircularProgress, FormControl, Grid, InputLabel, MenuItem, Select, Stack, TextField } from "@mui/material";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const UpdateApartment = () => {
    // eslint-disable-next-line no-unused-vars
    const { user } = useAuth();
    const { id } = useParams();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    const [value, setValue] = useState({});
    const [loading, setLoading] = useState(true);
    const [availability, setAvailability] = useState('');



    useEffect(() => {
        axiosSecure.get(`/apartmentData/${id}`)
            .then(res => {
                if (res.data) {
                    setValue(res.data);
                    setLoading(false);
                }
            })
    }, [id, axiosSecure])

    const handleChange = (event) => {
        setAvailability(event.target.value);
    };


    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '80vw', height: '80vh' }}>
                <Stack sx={{ color: '#42a5f5' }}>
                    <CircularProgress color="success" />
                </Stack>
            </Box>
        )
    }

    const handelUpdateApartment = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const apartment_image = formData.get('apartment_image');
        const floor_no = formData.get('floor_no');
        const block_name = formData.get('block_name');
        const apartment_no = formData.get('apartment_no');
        const rent = formData.get('rent');
        const total_rooms = formData.get('total_rooms');
        const wash_room = formData.get('wash_room');
        const kitchen_room = formData.get('kitchen_room');
        const drawing_room = formData.get('drawing_room');

        const addApartmentInfo = {
            apartment_image: apartment_image,
            floor_no: floor_no,
            block_name: block_name,
            apartment_no: apartment_no,
            rent: rent,
            total_rooms: total_rooms,
            wash_room: wash_room,
            kitchen_room: kitchen_room,
            drawing_room: drawing_room,
            status: availability,
        }
        axiosSecure.patch(`/apartmentData/${id}`, addApartmentInfo)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount === 1) {
                    navigate('/');
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "SuccessFully Post",
                        text: `'Post ID Status Is:'${res.data?.acknowledged}`,
                        showConfirmButton: true,
                        timer: 2000,
                    });
                }

            })
            .catch((err) => {
                Swal.fire({
                    icon: "error",
                    title: "Something went wrong!",
                    text: `${err}`,
                    showConfirmButton: true,
                    timer: 5000,
                });
            });
    };


    return (
        <Box>
            <Helmet>
                <title>Haven || Update Apartment</title>
            </Helmet>
            <Box display={"flex"}
                gap={5}
                flexDirection={"column"}
                mt={2}>
                <Box
                    border={'1px solid #42a5f5'}
                    borderRadius={1}
                    padding={3}
                    component="form"
                    sx={{ mx: 'auto' }}
                    noValidate
                    autoComplete="off"
                    onSubmit={handelUpdateApartment}
                >
                    <h2>Update An Apeatment</h2>
                    <Grid container spacing={1} alignItems="center" justifyContent="center">
                        <Grid item xs={12}>
                            <TextField
                                label="Enter Your Apartment Image"
                                variant="outlined"
                                name="apartment_image"
                                type="text"
                                required
                                fullWidth
                                margin="normal"
                                defaultValue={value.apartment_image || ''}

                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Enter Your Apartment Name"
                                variant="outlined"
                                name="block_name"
                                type="text"
                                required
                                fullWidth
                                margin="normal"
                                defaultValue={value.block_name || ''}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Enter Your Apartment Floor Number"
                                variant="outlined"
                                name="floor_no"
                                type="number"
                                required
                                fullWidth
                                margin="normal"
                                defaultValue={value.floor_no || ''}

                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Enter Your Apartment Number"
                                variant="outlined"
                                name="apartment_no"
                                type="text"
                                required
                                fullWidth
                                margin="normal"
                                defaultValue={value.apartment_no || ''}

                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Enter Your Apartment Rent"
                                variant="outlined"
                                name="rent"
                                type="number"
                                required
                                fullWidth
                                margin="normal"
                                defaultValue={value.rent || ''}

                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Enter Your Apartment Total Room"
                                variant="outlined"
                                name="total_rooms"
                                type="number"
                                required
                                fullWidth
                                margin="normal"
                                defaultValue={value.total_rooms || ''}

                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Apartment Total Washroom"
                                variant="outlined"
                                name="wash_room"
                                type="number"
                                required
                                fullWidth
                                margin="normal"
                                defaultValue={value.wash_room || ''}

                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Number Of Kitchen Room"
                                variant="outlined"
                                name="kitchen_room"
                                type="number"
                                required
                                fullWidth
                                margin="normal"
                                defaultValue={value.kitchen_room || ''}

                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Number Of Drawing Room "
                                variant="outlined"
                                name="drawing_room"
                                type="number"
                                required
                                fullWidth
                                margin="normal"
                                defaultValue={value.drawing_room || ''}

                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel id="availability-label">Apartment Status</InputLabel>
                                <Select
                                    labelId="availability-label"
                                    id="availability-select"
                                    value={availability}
                                    onChange={handleChange}
                                    label="Availability"
                                    required
                                >
                                    <MenuItem value="">Select Availability</MenuItem>
                                    <MenuItem value="Available">Available</MenuItem>
                                    <MenuItem value="Booked">Alrady Booked</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <Button type="submit" variant="contained" color="primary" fullWidth>
                                UPdate An Apeartment
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
};

export default UpdateApartment;