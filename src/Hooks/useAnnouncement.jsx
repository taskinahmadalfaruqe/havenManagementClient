
import useAxios from './useAxios';
import { useQuery } from '@tanstack/react-query';

const useAnnouncement = () => {
    const axioxPublic = useAxios();
    
    const { data: announcement= [], isLoading: anouncementLoading, refetch } = useQuery({
        queryKey: ['cupon'],
        queryFn: async () => {
            const res = await axioxPublic.get('/announcement');
            return res.data
            
        }
    })
    return [announcement, anouncementLoading, refetch]
    
};

export default useAnnouncement;