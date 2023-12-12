import { Box, Card, CardContent, CircularProgress, Container, Grid, Stack, Typography } from "@mui/material";
import useUser from "../../../../Hooks/useUser";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";



const ManageMember = () => {
    const navigate = useNavigate();
    const [member, loading] = useUser();

    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
                <Stack sx={{ color: '#42a5f5' }}>
                    <CircularProgress color="success" />
                </Stack>
            </Box>
        )
    }


    const onRemoveUser = (email) => {
        navigate(`/dasboard/updateMamber/${email}`)
    }



    return (
        <Container>
            <Helmet>
                <title>Haven || Members</title>
            </Helmet>
            <Box my={5}>
                <Box my={5}>
                    <Grid container spacing={2}>
                        {member?.map((user) => (
                            <Grid item xs={12} sm={6} key={user._id}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="h6" gutterBottom>
                                            Name: {user.name}
                                        </Typography>
                                        <Typography variant="body1" gutterBottom>
                                            Email: {user.email}
                                        </Typography>
                                        <Typography variant="body2" gutterBottom>
                                            Request Status: {user.userStatus}
                                        </Typography>
                                        <Box style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                                            <IconButton
                                                sx={{ background: "#ade8f4", padding: '5px', margin: '0', width: '30px', display: "flex", justifyContent: 'center', alignItems: 'center', color: '#42a5f5', border: '1px solid', borderRadius: '5px', }}
                                                aria-label="delete"
                                                onClick={() => onRemoveUser(user.email)}
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
            </Box>
        </Container>
    );
};

export default ManageMember;