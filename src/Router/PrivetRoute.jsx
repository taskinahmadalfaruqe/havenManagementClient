import { Navigate, useLocation} from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { Box, CircularProgress, Stack } from "@mui/material";
import PropTypes from 'prop-types'


const PrivetRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    if (loading) {
        return <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '80vh' }}>
            <Stack sx={{ color: '#42a5f5' }}>
                <CircularProgress color="success" />
            </Stack>
        </Box>
    }
    if (user) {
        return children;
    }
    return <Navigate  state={location.pathname} to={"/login"}></Navigate>
};

PrivetRoute.propTypes = {
    children: PropTypes.object.isRequired,
}

export default PrivetRoute