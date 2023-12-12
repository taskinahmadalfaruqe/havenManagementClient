import { Box, CircularProgress, Container, Stack, Grid, Pagination } from "@mui/material";
import useApartment from "../../Hooks/useApartment";
import LodeApartmentPage from "../../Component/ApartmentPage/LodeApartmentPage";
import { Helmet } from "react-helmet-async";


const Apartment = () => {
    const [apartment, isPending, setPage, refetch, setApartmentPage] = useApartment();

    const totaldata = apartment?.total;
    const apartmentData = apartment?.allApartments;

    const pageCountChange = async (event, page) => {
        setPage(page);
        setApartmentPage(page); 
         await refetch()
    };


    if (isPending) {
        refetch();
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '80vh' }}>
                <Stack sx={{ color: '#42a5f5' }}>
                    <CircularProgress color="success" />
                </Stack>
            </Box>
        )

    }
    const neadPage = Math.ceil(totaldata / 6);

    return (
        <Box>
            <Helmet>
                <title>Heven || Apartment Details</title>
            </Helmet>
            <Container sx={{ minHeight: '80vh', my: '30px' }}>
                <Grid container spacing={2} mx={'auto'}>
                    {
                        apartmentData?.map(ApartmentPageData => <LodeApartmentPage
                            key={ApartmentPageData._id}
                            ApartmentPageData={ApartmentPageData}
                        ></LodeApartmentPage>)
                    }
                </Grid>
                <Box display={'flex'} justifyContent={'end'}>
                    <Stack spacing={2}>
                        <Pagination count={neadPage} onChange={pageCountChange} variant="outlined" shape="rounded" />
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
};

export default Apartment;