import { Box, Button, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate()
    return (
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} height={'70vh'} flexDirection={'column'} gap={3}>
            <Helmet>
                <title>Haven || Error</title>
            </Helmet>
            <Box textAlign={'center'}>
                <Typography color={'red'} fontSize={50} fontWeight={'bold'}>404</Typography>
                <Typography fontWeight={600}>Something Is Wrong....</Typography>
                <Typography>Go Back Home Page Safly</Typography>
            </Box>
            <Button onClick={() => navigate('/')} variant="contained" sx={{fontWeight:'bold'}}>Go to Home</Button>
        </Box>
    );
};

export default ErrorPage;