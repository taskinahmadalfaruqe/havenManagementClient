import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";


const useAdmin = () => {
    const axiosSecure = useAxiosSecure();
    const { user, userLoading } = useAuth();
    const { data: isAdmin, isPending: isAdminPending } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled: !userLoading,
        queryFn: async () => {
            if (user) {
                const result = await axiosSecure.get(`/users/admin/${user.email}`)
                return result.data
            }
        }
    })
    return [isAdmin, isAdminPending]
};

export default useAdmin;