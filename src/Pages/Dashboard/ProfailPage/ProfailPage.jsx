import { Box, Card, CardMedia, CircularProgress, Typography } from "@mui/material";
import useAuth from "../../../Hooks/useAuth";
import { Helmet } from "react-helmet-async";
import useSingelUser from "../../../Hooks/useSingelUser";

const ProfailPage = () => {
    const { user, loading } = useAuth();
    const [singleUser, singleUserLoading] = useSingelUser();





    if (loading || singleUserLoading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50vw', height: '80vh' }}>
                <CircularProgress color="success" />
            </Box>
        );
    }


    return (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
            <Helmet>
                <title>Haven || Profile</title>
            </Helmet>
            <div style={{ padding: '10px' }}>
                <Box overflow="hidden" display="flex" justifyContent="center" alignItems="center" textAlign="center" sx={{ mt: { xs: 3, md: 1 } }}>

                    <Card style={{ border: '1px solid #42a5f5', padding: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                        <CardMedia
                            component="img"
                            image={user?.photoURL}
                            alt="Your image"
                            style={{ width: '150px', height: '150px', border: '1px solid #42a5f5', borderRadius: '50%' }}
                        />
                        <Box>
                            <h2 style={{ color: "#42a5f5" }}>{user?.displayName}</h2>
                            <Typography>{user?.email}</Typography>
                        </Box>
                        <Box display={'flex'} flexDirection={'column'} gap={1} justifyContent={'start'} textAlign={'start'} alignItems={'start'} mt={2}>
                            <Typography>
                                Member Request Accpet Date:
                                {singleUser?.accpetDate ?
                                    <Typography
                                        fontWeight={700}
                                        fontSize={'20px'}
                                        textTransform={'uppercase'}
                                        component="span">
                                        {singleUser?.accpetDate}
                                    </Typography>
                                    :
                                    "N/A"}
                            </Typography>

                            <Typography>
                                Member Request Status::
                                {singleUser?.userRequest ?
                                    <Typography
                                        fontWeight={700}
                                        fontSize={'20px'}
                                        textTransform={'uppercase'}
                                        component="span">
                                        {singleUser?.userRequest}
                                    </Typography>
                                    :
                                    "N/A"}
                            </Typography>

                            <Typography>
                                Appeartment Number:
                                {singleUser?.apartment_no ?
                                    <Typography
                                        fontWeight={700}
                                        fontSize={'20px'}
                                        textTransform={'uppercase'}
                                        component="span">
                                        {singleUser?.apartment_no}
                                    </Typography>
                                    :
                                    "N/A"}
                            </Typography>

                            <Typography>
                                User Status:
                                {singleUser?.userStatus ?
                                    <Typography
                                        fontWeight={700}
                                        fontSize={'20px'}
                                        textTransform={'uppercase'}
                                        component="span">
                                        {singleUser?.userStatus}
                                    </Typography>
                                    :
                                    "N/A"}
                            </Typography>

                            <Typography>
                                Block Name:
                                {singleUser?.block_name ?
                                    <Typography
                                        fontWeight={700}
                                        fontSize={'20px'}
                                        textTransform={'uppercase'}
                                        component="span">
                                        {singleUser?.block_name}
                                    </Typography>
                                    :
                                    "N/A"}
                            </Typography>
                            
                            <Typography>
                                Rent:
                                {singleUser?.rent ?
                                    <Typography
                                        fontWeight={700}
                                        fontSize={'20px'}
                                        textTransform={'uppercase'}
                                        component="span">
                                        {singleUser?.rent}
                                    </Typography>
                                    :
                                    "N/A"}
                            </Typography>
                        </Box>
                    </Card>
                </Box>
            </div>
        </div>
    );
};

export default ProfailPage;
