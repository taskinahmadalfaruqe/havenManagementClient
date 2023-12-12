import { useState } from "react";
import useAxios from "./useAxios";
import { useQuery } from "@tanstack/react-query";

const useApartment = () => {
    const axiosPublic = useAxios();
    const [page, setPage] = useState(1);
    const { data: apartment = [], isPending, refetch } = useQuery({
        queryKey: ['apartment'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/apartmentData?page=${page}&limit=6`);
            return res.data;
        }
    });

    const setApartmentPage = async (pageNumber) => {
        setPage(pageNumber);
         await refetch();

    };

    return [apartment, isPending, setPage, refetch, setApartmentPage];
};

export default useApartment;
