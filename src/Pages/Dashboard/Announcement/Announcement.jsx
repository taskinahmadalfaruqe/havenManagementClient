import { Box, CircularProgress, Grid, Stack, Typography } from "@mui/material";
import Swal from "sweetalert2";
import useAnnouncement from "../../../Hooks/useAnnouncement";
import DeleteIcon from '@mui/icons-material/Delete';
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useAdmin from "../../../Hooks/useAdmin";
import useAuth from "../../../Hooks/useAuth";



const Announcement = () => {
    const [announcement, anouncementLoading] = useAnnouncement();
    const axioxSecure = useAxiosSecure();
    const navigate = useNavigate();
    const [isAdmin] = useAdmin();
    const { user } = useAuth();



    const handelDelete = (id) => {
        console.log(id)
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
                axioxSecure.delete(`/announcement/${id}`)
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

    if (anouncementLoading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
                <Stack sx={{ color: '#42a5f5' }}>
                    <CircularProgress color="success" />
                </Stack>
            </Box>
        )
    }

    return (
        <div>
            <Helmet>
                <title>Haven || Announcement</title>
            </Helmet>

            <Box component="form"
                sx={{ maxWidth: '100%' }}
                noValidate
                autoComplete="off"
                padding={0}

            >
                <h2>Active Announment And Delete Option</h2>
                <Box border={'1px solid #42a5f5'}
                    borderRadius={1}
                    padding={2}
                    textAlign={'center'}
                    sx={{ background: '#eee', overflow: 'hidden' }}>

                    <Typography mb={5} fontSize={30} >Active Announcement:</Typography>

                    {
                        announcement?.map(data => <Grid
                            gap={1}
                            mb={1}
                            pt={1}
                            key={data._id}
                            border={'1px solid #42a5f5'}
                            borderRadius={2}
                            position={'relative'}
                            padding={1}
                        >
                            <Box position={'absolute'} top={5} right={5} display={'flex'}>
                                {
                                    isAdmin && user ? <Typography onClick={() => handelDelete(data._id)} sx={{ cursor: 'pointer', background: "#ade8f4", padding: '2px', margin: '0', width: '30px', display: "flex", justifyContent: 'center', alignItems: 'center', color: '#42a5f5', border: '1px solid', borderRadius: '5px', }}><DeleteIcon></DeleteIcon></Typography> : ''
                                }
                            </Box>

                            <Grid sx={{ color: '#42a5f5', mb: '10px', fontSize: '30px' }} item xs={12} >Title: {data.announcementTitle}</Grid>
                            <Grid item xs={12} >{data.announcementDescription}</Grid>
                        </Grid>)
                    }
                </Box>

            </Box>
        </div>
    );
};

export default Announcement;