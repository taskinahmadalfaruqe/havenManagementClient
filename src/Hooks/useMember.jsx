import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useMember = () => {
    const axiosSecure = useAxiosSecure();
    const {user, userLoading}= useAuth();
    const {data: member=[], isPendeing}= useQuery({
        queryKey: [user?.email, 'member'],
        enabled: !userLoading,
        queryFn: async()=>{
            const getMember = await axiosSecure.get(`/users/member/${user.email}`)
            return getMember.data
        }
    })
    return [member, isPendeing]
};

export default useMember;