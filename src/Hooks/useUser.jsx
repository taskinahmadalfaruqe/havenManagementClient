import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useUser = () => {
    const axiosSecure = useAxiosSecure();
    const { data: member = [], isPending: loading, refetch } = useQuery({
        queryKey: ['member'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })
    return [member, loading, refetch]
};

export default useUser;