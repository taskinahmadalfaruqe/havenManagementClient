import { Box, Card, CardContent, Container, Grid, IconButton, Typography } from "@mui/material";
import useMemberRequest from "../../../../Hooks/useMemberRequest";
import DeleteIcon from '@mui/icons-material/Delete';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const PendingRequest = () => {
    const [pendingRequest, refetch] = useMemberRequest();
    const axiosSccure = useAxiosSecure();
    const [formattedDate, setFormattedDate] = useState('');
    const navigate = useNavigate();


    useEffect(() => {
        const today = new Date();
        const date = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
        setFormattedDate(date);
    }, []);


    const addUser = (user) => {
        const newMemberData = {
            userStatus: 'member',
            apartment_image: user.apartment_image,
            apartment_no: user.apartment_no,
            block_name: user.block_name,
            drawing_room: user.drawing_room,
            floor_no: user.floor_no,
            kitchen_room: user.kitchen_room,
            rent: user.rent,
            total_rooms: user.total_rooms,
            userRequest: "Approved",
            wash_room: user.wash_room,
            email: user.userEmail,
            name: user.userName,
            accpetDate: formattedDate

        }
        axiosSccure.patch(`/users/member/${user.userEmail}`, newMemberData)
            .then(res => {
                if (res.data.modifiedCount === 1) {
                    axiosSccure.delete(`/memberRequest/${user.userEmail}`)
                        .then(res => {
                            if (res.data.deletedCount > 0) {
                                refetch();
                            }

                        })
                    Swal.fire({
                        title: "Updated User Status!",
                        text: "Your file has been Updated.",
                        icon: "success",
                        timer: 2000
                    });
                    navigate('/dasboard')
                    refetch;
                }

            })
    }

    const onRemoveUser = (user) => {
        axiosSccure.delete(`/memberRequest/${user.userEmail}`)
            .then(res => {
                if (res.data.deletedCount > 0) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been Deleted.",
                        icon: "success",
                        timer: 2000
                    });
                    navigate('/dasboard')
                    refetch;
                }

            })
    }
    return (
        <Container>
            <Helmet>
                <title>Haven || Mamber Request</title>
            </Helmet>
            <Box my={5}>
                <Grid container spacing={2}>
                    {pendingRequest?.map((user) => (
                        <Grid item xs={12} sm={6} key={user._id}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>
                                        Name: {user.userName}
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        Email: {user.userEmail}
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        Requested Date: {user.requestDate}
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        Apartment No: {user.apartment_no}
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        Block name: {user.block_name}
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        Rent: {user.rent}
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        Request Status: {user.userRequest}
                                    </Typography>
                                    <Box style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                                        <IconButton aria-label="accept" onClick={() => addUser(user)} sx={{ background: "#ade8f4", padding: '5px', margin: '0', width: '30px', display: "flex", justifyContent: 'center', alignItems: 'center', color: '#42a5f5', border: '1px solid', borderRadius: '5px', }}>
                                            <HowToRegIcon />
                                        </IconButton>
                                        <IconButton
                                            sx={{ background: "#ade8f4", padding: '5px', margin: '0', width: '30px', display: "flex", justifyContent: 'center', alignItems: 'center', color: '#42a5f5', border: '1px solid', borderRadius: '5px', }}
                                            aria-label="delete"
                                            onClick={() => onRemoveUser(user)}
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );

};

export default PendingRequest;