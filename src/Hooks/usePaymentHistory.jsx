import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const usePaymentHistory = () => {
    const axiosSecure = useAxiosSecure();
    const { data: paymentHistory, isPending: HistoryLoading, refetch: historyRefetch } = useQuery({
        queryKey: ['paymentHistory'],
        queryFn: async () => {
            const res = await axiosSecure.get('/paymentsInfo')
            return res.data;
        }
    })

    return [paymentHistory, HistoryLoading, historyRefetch]
};

export default usePaymentHistory;