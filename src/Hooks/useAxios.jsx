import axios from "axios";

const axisoPublic = axios.create({
    // baseURL: 'http://localhost:5000'
    baseURL: 'https://haven-management-server.vercel.app'


})

const useAxios = () => {
    return axisoPublic;
};

export default useAxios;