
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PropTypes from 'prop-types'
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect, useState } from 'react';
import useAdmin from '../../Hooks/useAdmin';
import Aos from 'aos';
import 'aos/dist/aos.css'

const LodeApartmentPage = ({ ApartmentPageData }) => {
    const navigate = useNavigate();
    const axsiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const [isAdmin] = useAdmin();

    const { apartment_image, apartment_no, block_name, floor_no, rent, total_rooms, wash_room, kitchen_room, drawing_room, status, _id } = ApartmentPageData;
    const [formattedDate, setFormattedDate] = useState('');

    useEffect(() => {
        const today = new Date();
        const date = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
        setFormattedDate(date);
    }, []);

    useEffect(() => {
        Aos.init();
    }, [])

    const handelAgrement = () => {
        if (user) {
            const requestDataSend = {
                userName: user?.displayName,
                userEmail: user?.email,
                floor_no,
                block_name,
                apartment_no,
                rent,
                userRequest: 'pending',
                apartment_image,
                total_rooms,
                wash_room,
                kitchen_room,
                drawing_room,
                requestDate: formattedDate

            }
            axsiosSecure.post('/memberRequest', requestDataSend)
                .then(res => {
                    if (res.data.acknowledged) {
                        Swal.fire({
                            title: "Agrement Request Send!",
                            text: "Send Your Request Successfully. It's On Progress",
                            icon: "success",
                            timer: 2000
                        });
                        navigate('/')
                    }
                })
                .catch(error => {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!",
                        footer: `${error}`
                    });
                });
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "You Must Be Login First !",
            });
        }


    }

    const handelUpdate = (id) => {
        navigate(`/dasboard/UpdateApeartment/${id}`)
    }

    const handelDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axsiosSecure.delete(`/apartmentData/${id}`)
                    .then(response => {
                        if (response.data.deletedCount === 1) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success",
                                timer: 2000
                            });
                            navigate('/')
                        }

                    })
                    .catch(error => {
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: "Something went wrong!",
                            footer: `${error}`
                        });
                    });
            }
        });

    }

    return (
        <Grid item xs={12} md={6} padding={2} data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
            <Box position={'relative'}>
                <Card>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="300"
                            image={apartment_image}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" color={'#2196f3'}>
                                Apartment Name: {block_name}
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={6} variant="body2" color="text.secondary">
                                    Apartment No: {apartment_no}
                                </Grid>
                                <Grid item xs={6} variant="body2" color="text.secondary">
                                    Floor No: {floor_no}
                                </Grid>
                                <Grid item xs={6} variant="body2" color="text.secondary">
                                    Rent: {rent} TK
                                </Grid>
                                <Grid item xs={6} variant="body2" color="text.secondary">
                                    Total Room: {total_rooms}
                                </Grid>
                                <Grid item xs={6} variant="body2" color="text.secondary">
                                    Wash Room: {wash_room}
                                </Grid>
                                <Grid item xs={6} variant="body2" color="text.secondary">
                                    Kitchen Room: {kitchen_room}
                                </Grid>
                                <Grid item xs={6} variant="body2" color="text.secondary">
                                    Drawing  Room: {drawing_room}
                                </Grid>
                                <Grid item xs={6} variant="body2" color="text.secondary">
                                    Status: {status}
                                </Grid>
                            </Grid>

                        </CardContent>

                    </CardActionArea>
                    <CardActions>
                        {
                             status === "Available" ? <Button
                                sx={{
                                    backgroundColor: '#2196f3',
                                    color: '#fff',
                                    '&:hover': {
                                        backgroundColor: '#386641',
                                    },
                                }}
                                size="large"
                                color="primary"
                                onClick={() => handelAgrement()}
                            >
                                Agreement <ArrowForwardIcon />
                            </Button>
                                : <Button variant="contained" disabled size='large'>Alrady Booked</Button>
                        }
                    </CardActions>
                </Card>
                <Box>
                    {
                        isAdmin && user ?
                            <Box position={"absolute"} top={5} right={5} display={'flex'} gap={1} sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
                                <Typography onClick={() => handelUpdate(_id)} sx={{ cursor: 'pointer', background: "#ade8f4", padding: '2px', margin: '0', width: '30px', display: "flex", justifyContent: 'center', alignItems: 'center', color: '#42a5f5', border: '1px solid', borderRadius: '5px', }}><EditIcon></EditIcon></Typography>
                                <Typography onClick={() => handelDelete(_id)} sx={{ cursor: 'pointer', background: "#ade8f4", padding: '2px', margin: '0', width: '30px', display: "flex", justifyContent: 'center', alignItems: 'center', color: '#42a5f5', border: '1px solid', borderRadius: '5px', }}><DeleteIcon></DeleteIcon></Typography>
                            </Box>
                            :
                            ''
                    }
                </Box>
            </Box>

        </Grid>
    )
}

LodeApartmentPage.propTypes = {
    ApartmentPageData: PropTypes.object.isRequired,
}

export default LodeApartmentPage
