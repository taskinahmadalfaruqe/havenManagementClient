import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

// http://localhost:5000/apartmentData?status=Available

const useAvailableRooms = () => {
    const axioxSccure = useAxiosSecure();
    const { data: availableRooms = [] } = useQuery({
        queryKey: ['availavailRooms'],
        queryFn: async () => {
            const res= await axioxSccure.get('/apartmentData?status=Available')
            return res.data;
        }
    })
    return [availableRooms,]
};

export default useAvailableRooms;