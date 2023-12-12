// UpdateCupon.js
import { useNavigate, useParams } from 'react-router-dom';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { Box, CircularProgress, Container, Grid, Stack, TextField } from '@mui/material';
import { Button } from '@mui/material';
import { useState, useEffect } from 'react';
import useAuth from '../../../../Hooks/useAuth';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const UpdateCupon = () => {
    const { user } = useAuth();
    const { id } = useParams();
    const axiosSecure = useAxiosSecure();
    const [value, setValue] = useState({});
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        axiosSecure.get(`/cupon/${id}`)
            .then(res => {
                if (res.data) {
                    setValue(res.data);
                    setLoading(false);
                }
            })
            .catch(error => {
                console.error('Error fetching cupon data:', error);
                setLoading(false);
            });
    }, [axiosSecure, id]);

    const handleUpdate = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const title = formData.get('title');
        const description = formData.get('description');
        const cupon = formData.get('cupon');
        const percentage = formData.get("percentage");

        const cuponInfo = {
            user: user?.email,
            cuponTitle: title,
            CuponDescription: description,
            cuponCard: cupon,
            percentage: percentage,
        }

        axiosSecure.patch(`/cupon/${id}`, cuponInfo)
            .then(res => {
                if (res.data.modifiedCount === 1) {
                    Swal.fire({
                        title: "Updated Cupon!",
                        text: "Your file has been Updated.",
                        icon: "success",
                        timer: 2000
                    });
                    navigate('/dasboard')
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

    return (
        <Container >
            <Helmet>
                <title>Haven || Manage Cupon</title>
            </Helmet>
            <Box display={"flex"}
                gap={5}
                flexDirection={"column"}>
                <Box
                    border={'1px solid #42a5f5'}
                    borderRadius={1}
                    padding={3}
                    component="form"
                    sx={{ mx: 'auto' }}
                    noValidate
                    autoComplete="off"
                    onSubmit={handleUpdate}
                    mt={5}
                >
                    <h2>Updet The Cupon</h2>
                    <Grid container spacing={1} alignItems="center" justifyContent="center">
                        <Grid item xs={12}>
                            <TextField
                                label="Enter Your Cupon Title"
                                variant="outlined"
                                name="title"
                                type="text"
                                required
                                fullWidth
                                margin="normal"
                                defaultValue={value.cuponTitle || ''}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Enter Your Cupon Description"
                                variant="outlined"
                                name="description"
                                type="text"
                                fullWidth
                                margin="normal"
                                defaultValue={value.CuponDescription || ''}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Enter Your Cupon"
                                variant="outlined"
                                name="cupon"
                                type="text"
                                required
                                fullWidth
                                margin="normal"
                                defaultValue={value.cuponCard || ''}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Discount percentage"
                                variant="outlined"
                                name="percentage"
                                type="number"
                                required
                                fullWidth
                                margin="normal"
                                defaultValue={value.percentage || ''}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button type="submit" variant="contained" color="primary" fullWidth>
                                Update Cupon
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
};

export default UpdateCupon;
