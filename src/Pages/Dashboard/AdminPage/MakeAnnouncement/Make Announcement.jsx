import { Box, Button, Grid, TextField } from "@mui/material";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const MakeAnnouncement = () => {

    // eslint-disable-next-line no-unused-vars
    const { user } = useAuth();
    
    const axiosSecure = useAxiosSecure();

    const navigate = useNavigate();

    const handelAnnouncment = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const title = formData.get('title');
        const description = formData.get('description');

        const announcementInfo = {
            announcementTitle: title,
            announcementDescription: description,
        }
        axiosSecure.post('/announcement', announcementInfo)
            .then(res => {
                navigate('/dasboard');
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "SuccessFully Post",
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


    return (
        <Box display={"flex"}
            gap={5}
            flexDirection={"column"}
            mt={2}>
                <Helmet>
                    <title>Haven || Create Announcement</title>
                </Helmet>
            <Box
                border={'1px solid #42a5f5'}
                borderRadius={1}
                padding={3}
                component="form"
                sx={{ mx: 'auto' }}
                noValidate
                autoComplete="off"
                onSubmit={handelAnnouncment}
            >
                <h2>Add A New Announcment</h2>
                <Grid container spacing={1} alignItems="center" justifyContent="center">
                    <Grid item xs={12}>
                        <TextField
                            label="Enter Your Announcment Title"
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
                            label="Enter  Announcment Description"
                            variant="outlined"
                            name="description"
                            type="text"
                            fullWidth
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="primary" fullWidth>
                            Post Annoucment
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default MakeAnnouncement;