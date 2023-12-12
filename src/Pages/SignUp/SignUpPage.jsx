import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Button, Container, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GoogleIcon from '@mui/icons-material/Google';
import { Helmet } from "react-helmet-async";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { GoogleAuthProvider } from "firebase/auth";
import useAxios from "../../Hooks/useAxios";

const SignUpPage = () => {
    const { handelUserCreate, handelUpadate, handelGoogleLogin } = useAuth();
    const axiosPublic = useAxios();
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const isEmail = (input) => {
        // Regular expression pattern for basic email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(input);
    };
    const isStrongPassword = (password) => {
        const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,}$/;
        return passwordPattern.test(password);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get('name');
        const photo = formData.get('photo');
        const email = formData.get('email');
        const isValidEmail = isEmail(email);
        const password = formData.get("password");
        const isValidPassword = isStrongPassword(password);

        if (isValidEmail && isValidPassword) {
            handelUserCreate(email, password)
                .then(res => {
                    if (res) {
                        handelUpadate(name, photo)
                            .then(() => {
                                const userInfo = {
                                    email: res.user?.email,
                                    name: name,
                                    userStatus: 'user',
                                }
                                axiosPublic.post('/users', userInfo)
                                    .then(res => {
                                        navigate(location.state ? location.state : "/");
                                        Swal.fire({
                                            position: "center",
                                            icon: "success",
                                            title: "SuccessFully Login",
                                            text: `${res.data?.message}`,
                                            showConfirmButton: true,
                                            timer: 2000,
                                        });

                                    })
                            })
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
        } else {
            Swal.fire({
                icon: "error",
                title: "Something went wrong!",
                text: "Enter A  Email Address or Password Must Be 8 characters, with minimum 1 uppercase, lowercase, one number & no spaces",
                showConfirmButton: true,
                timer: 5000,
            });

        }

    };

    const googleProvider = new GoogleAuthProvider();
    const googleLogin = () => {
        handelGoogleLogin(googleProvider)
            .then(res => {
                if (res) {
                    const userInfo = {
                        email: res.user?.email,
                        name: res.user?.displayName,
                        userStatus: 'user',
                    }
                    axiosPublic.post('/users', userInfo)
                        .then(res => {
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "SuccessFully Login",
                                text: `${res.data?.message}`,
                                showConfirmButton: true,
                                timer: 2000,
                            });
                        })
                    navigate(location.state ? location.state : "/");

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
    }

    return (
        <Container maxWidth="sm" sx={{ paddingY: 8, textAlign: 'center' }}>
            <Helmet>
                <title>Haven || Register Page</title>
            </Helmet>
            <Typography variant="h2" color="primary" fontWeight={'bold'} mb={2} sx={{ fontSize: { xs: '40px' } }}>Register Here</Typography>
            <Box
                component="form"
                sx={{ width: '100%' }}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <Grid container spacing={2} alignItems="center" justifyContent="center">
                    <Grid item xs={12}>
                        <TextField
                            label="Enter Your Name"
                            variant="outlined"
                            name="name"
                            type="text"
                            required
                            fullWidth
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Enter Your Picture"
                            variant="outlined"
                            name="photo"
                            type="text"
                            fullWidth
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Enter Your Email"
                            variant="outlined"
                            name="email"
                            type="email"
                            required
                            fullWidth
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl variant="outlined" fullWidth>
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="primary" fullWidth>
                            Register
                        </Button>
                    </Grid>
                </Grid>
            </Box>
            <Typography mt={5}>
                Alrady Have An  Account !! <Button
                    variant="contained"
                    onClick={() => navigate('/login')}
                >Login</Button>
            </Typography>
            <Box border={1} borderColor={'#bdbdbd'} padding={2} borderRadius={5} mt={5}>
                <Typography variant="h6" color="primary" mb={2} >Login With</Typography>
                <Box>
                    <Button
                        variant="contained"
                        onClick={googleLogin}
                    >Google
                        <GoogleIcon sx={{ ml: '5px' }} />
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default SignUpPage;
