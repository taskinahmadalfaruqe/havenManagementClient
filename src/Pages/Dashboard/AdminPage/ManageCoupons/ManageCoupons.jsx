import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useCupon from "../../../../Hooks/useCupon";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const ManageCoupons = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    const [cupon] = useCupon();




    const handelCupon = (e) => {
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

        axiosSecure.post('/cupon', cuponInfo)
            .then(res => {
                navigate('/dasboard');
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "SuccessFully Login",
                    text: `${res.data?.message}`,
                    showConfirmButton: true,
                    timer: 2000,
                });

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

    const handelUpdate = (id) => {
        navigate(`/dasboard/updatecupon/${id}`)
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
                axiosSecure.delete(`/cupon/${id}`)
                    .then(response => {
                        if (response.data.deletedCount === 1) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
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
            }
        });

    }


    return (
        <Box display={"flex"}
            gap={5}
            flexDirection={"column"}>
            <Box component="form"
                sx={{ maxWidth: '100%', mx: 'auto' }}
                noValidate
                autoComplete="off"
                onSubmit={handelCupon}
            >
                <h2>Update Cupon Or Delete Cupon</h2>
                <Box border={'1px solid #42a5f5'}
                    borderRadius={1}
                    padding={1}
                    textAlign={'center'}>
                    <Typography mb={5} fontSize={30}>Active Cupon:</Typography>
                    {
                        cupon?.map(data => <Grid container spacing={2} justifyContent={"center"} alignItems={'center'} textAlign={'center'} gap={3} mb={5} pt={5} position={'relative'}
                            key={data._id}
                        >
                            <Box position={"absolute"} top={0} right={0} display={'flex'} gap={1} sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
                                <Typography onClick={() => handelUpdate(data._id)} sx={{ background: "#ade8f4", padding: '2px', margin: '0', width: '30px', display: "flex", justifyContent: 'center', cursor:'pointer', alignItems: 'center', color: '#42a5f5', border: '1px solid', borderRadius: '5px', }}><EditIcon></EditIcon></Typography>
                                <Typography onClick={() => handelDelete(data._id)} sx={{ background: "#ade8f4", padding: '2px', margin: '0', width: '30px', display: "flex", justifyContent: 'center', cursor:'pointer', alignItems: 'center', color: '#42a5f5', border: '1px solid', borderRadius: '5px', }}><DeleteIcon></DeleteIcon></Typography>
                            </Box>
                            <Grid item xs={12} md={2} lg={2}>Title: {data.cuponTitle}</Grid>
                            <Grid item xs={12} md={4} lg={4} >Discription: {data.CuponDescription}</Grid>
                            <Grid sx={{ color: '#42a5f5' }} item xs={12} md={2} lg={2}>Code: {data.cuponCard}</Grid>
                            <Grid item xs={12} md={2} lg={2}>Percentage: {data.percentage}%</Grid>
                        </Grid>)
                    }
                </Box>

            </Box>
            <Box
                border={'1px solid #42a5f5'}
                borderRadius={1}
                padding={3}
                component="form"
                sx={{ mx: 'auto' }}
                noValidate
                autoComplete="off"
                onSubmit={handelCupon}
            >
                <h2>Add A New Cupon</h2>
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
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="primary" fullWidth>
                            Submit Cupon
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default ManageCoupons;