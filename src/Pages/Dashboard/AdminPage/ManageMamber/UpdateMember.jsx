import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { Box, Button, CircularProgress, Container, Grid, TextField } from "@mui/material";
import useAuth from "../../../../Hooks/useAuth";
import Swal from "sweetalert2";

const UpdateMember = () => {
    const { loading } = useAuth();
    const { id } = useParams();
    const [value, setValue] = useState({});
    const [loadingData, setLoading] = useState(true);
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        axiosSecure.get(`/users/${id}`) // email address called by id;
            .then(res => {
                if (res.data) {
                    setValue(res.data);
                    setLoading(false);
                }
            })
            .catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                    footer: `${error}`
                });
                setLoading(false);
            });
    }, [id, axiosSecure]);

    if (loadingData || loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50vw', height: '80vh' }}>
                <CircularProgress color="success" />
            </Box>
        );
    }
    const handelUpdate = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get('name')
        const email = formData.get('email')
        const userStatus = formData.get('userStatus')
        const userChange = {
            email,
            name,
            userStatus,
        }
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Update it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/${email}`, userChange)
                    .then(res => {
                        if (res.data.modifiedCount === 1) {
                            Swal.fire({
                                title: "Updated User Status!",
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
            }
        });

    }
    return (
        <Container >
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
                    onSubmit={handelUpdate}
                    mt={5}
                >
                    <h2>Updet The User</h2>
                    <Grid container spacing={1} alignItems="center" justifyContent="center">
                        <Grid item xs={12}>
                            <TextField
                                label="User Email Address"
                                variant="outlined"
                                name="email"
                                type="text"
                                required
                                fullWidth
                                InputProps={{
                                    readOnly: true,
                                }}
                                margin="normal"
                                defaultValue={value?.email || ''}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="User Name"
                                variant="outlined"
                                name="name"
                                type="text"
                                fullWidth
                                InputProps={{
                                    readOnly: true,
                                }}
                                margin="normal"
                                defaultValue={value.name || ''}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="User Status Change Member To user"
                                variant="outlined"
                                name="userStatus"
                                type="text"
                                fullWidth
                                margin="normal"
                                InputProps={{
                                    readOnly: true,
                                }}
                                defaultValue={'user'}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Button type="submit" variant="contained" color="primary" fullWidth>
                                Update User Status
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
};

export default UpdateMember;