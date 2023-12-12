import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
    // baseURL: 'http://localhost:5000'
    baseURL: 'https://haven-management-server.vercel.app'
    

});

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { handelLogOut } = useAuth();

    // REQUEST INTERCEPTOR for axiosSecure
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    }, function (error) {
        return Promise.reject(error);
    });

    // RESPONSE INTERCEPTOR for axiosSecure
    axiosSecure.interceptors.response.use(function (response) {
        return response;
    }, async (error) => {
        const status = error.response.status;
        if (status === 401 || status === 403 || status === 404) {
            await handelLogOut();
            navigate('/login');
        }
        return Promise.reject(error);
    });


    return axiosSecure;
};

export default useAxiosSecure;
