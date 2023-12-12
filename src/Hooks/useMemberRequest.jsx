
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useMemberRequest = () => {
    const axiosSecure = useAxiosSecure();
    const {data: memberRequest=[], isPending: loading, refetch}= useQuery({
        queryKey: ['memberRequest'],
        queryFn: async ()=>{
            const res = await axiosSecure.get('/memberRequest');
            return res.data;
        }
    })
    return [memberRequest, loading, refetch]
};

export default useMemberRequest;