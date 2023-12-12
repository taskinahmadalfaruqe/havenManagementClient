import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";



const useCupon = () => {
    const axiosSecure = useAxiosSecure();
    const { data: cuponData = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['cupon'],
        queryFn: async () => {
            const res = await axiosSecure.get('/cupon');
            
            return res.data
            
        }
    })
    return [cuponData, loading, refetch]
};


export default useCupon;