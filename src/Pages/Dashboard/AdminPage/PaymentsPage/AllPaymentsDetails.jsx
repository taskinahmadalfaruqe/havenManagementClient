import { Box, Card, CardContent, CircularProgress, Grid, Stack, Typography } from "@mui/material";
import usePaymentHistory from "../../../../Hooks/usePaymentHistory";
import { Helmet } from "react-helmet-async";


const AllPaymentsDetails = () => {
    const [paymentHistory, HistoryLoading] = usePaymentHistory();
    if (HistoryLoading) {
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
            <Stack sx={{ color: '#42a5f5' }}>
                <CircularProgress color="success" />
            </Stack>
        </Box>
    }
    return (
        <Box>
            <Helmet>
                <title>Haven || Payment History</title>
            </Helmet>
            <Box my={3}>
                <Typography textAlign={'center'} fontSize={25} color={'#42a5f5'} mb={2} variant='h4'> All User Payment History</Typography>
                <Box my={3} >
                    {
                        paymentHistory?.length > 0 ?
                            <Grid container spacing={2}>
                                {paymentHistory?.map((user) => (
                                    <Grid item xs={12} sm={6} key={user._id} >
                                        <Card sx={{ borderTop: '1px solid #42a5f5' }}>
                                            <CardContent>
                                                <Typography variant="h6" gutterBottom>
                                                    Name: {user.name}
                                                </Typography>
                                                <Typography variant="body1" gutterBottom>
                                                    Email: {user.email}
                                                </Typography>
                                                <Typography variant="body2" gutterBottom>
                                                    Payment Date: {user.paymentDate}
                                                </Typography>
                                                <Typography variant="body2" gutterBottom>
                                                    Month For Payment: {user.paymentFor}
                                                </Typography>
                                                <Typography variant="body2" gutterBottom>
                                                    Payment ID: {user.transection_ID}
                                                </Typography>
                                                <Typography variant="body2" gutterBottom>
                                                    Rent: {user.rent} TK
                                                </Typography>
                                                <Typography variant="body2" gutterBottom>
                                                    Discount: {user.getDiscount ? <span>{user.getDiscount}</span> : '00'} TK
                                                </Typography>
                                                <Typography variant="body2" gutterBottom>
                                                    Amount That Payment: {user.finalRent} TK
                                                </Typography>

                                            </CardContent>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                            :
                            <Box display={"flex"} justifyContent={'center'} alignItems={'center'} width={'70vw'} height={'70vh'}>
                                <Typography sx={{ fontSize: '30px', fontWeight: '700', textTransform: 'uppercase' }}> No Data Found</Typography>
                            </Box>
                    }
                </Box>
            </Box>
        </Box>
    );
};

export default AllPaymentsDetails;