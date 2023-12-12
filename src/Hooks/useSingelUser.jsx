import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useSingelUser = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const { data: singleUser = [], isLoading: singleUserLoading, refetch } = useQuery({
        queryKey: ['singleUser'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/${user?.email}`);
            return res.data;
        }
    });

    return [singleUser, singleUserLoading, refetch];
};

export default useSingelUser;
