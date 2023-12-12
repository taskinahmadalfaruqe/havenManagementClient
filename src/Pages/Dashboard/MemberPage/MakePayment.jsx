import { Box, CircularProgress, Stack } from "@mui/material";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Helmet } from "react-helmet-async";
import ChakeOutForm from "./ChakeOutForm";
import useAuth from "../../../Hooks/useAuth";

const stripePromise = loadStripe(import.meta.env.VITE_CLIENT_SECRET);

const MakePayment = () => {
    const { loading } = useAuth();

    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
                <Stack sx={{ color: '#42a5f5' }}>
                    <CircularProgress color="success" />
                </Stack>
            </Box>
        )
    }

    return (
        <Box mt={3}>
            <Helmet>
                <title>
                    Haven || Payment
                </title>
            </Helmet>
            <Elements stripe={stripePromise}>
                <ChakeOutForm></ChakeOutForm>
            </Elements>
        </Box>
    );
};

export default MakePayment;


