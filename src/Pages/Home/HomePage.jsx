import { Helmet } from "react-helmet-async";
import Banner from "../../Component/HomePage/Banner/Banner";
import AboutTheBuilding from "../../Component/HomePage/AboutTheBuilding/AboutTheBuilding";
import Mapbox from "../../Component/HomePage/MapBox/Mapbox";
import Cupon from "../../Component/HomePage/Coupon/Cupon";
import useApartment from "../../Hooks/useApartment";
import { Box, Button, Container, Grid} from "@mui/material";
import LodeApartmentPage from "../../Component/ApartmentPage/LodeApartmentPage";
import Title from "../../Component/Shared/Title/Title";
import { useNavigate } from "react-router-dom";





const HomePage = () => {
    const [apartment] = useApartment();
    const navigate = useNavigate();



    return (
        <div className="">
            <Helmet>
                <title>Haven || Home</title>
            </Helmet>
            <Banner></Banner>
            <Box mt={7}>
                <Container>
                    <Title heading="Some Apartment" subheading="Do You Want To Show More Then Flow The Vist All Button. Just click On It,"></Title>
                    <Grid container spacing={2}>
                        {
                            apartment?.allApartments?.map(ApartmentPageData => <LodeApartmentPage
                                key={ApartmentPageData._id}
                                ApartmentPageData={ApartmentPageData}
                            ></LodeApartmentPage>)
                        }
                    </Grid>
                    <Box display={'flex'} justifyContent={'center'} alignItems={'center'} mt={5}>
                        <Button onClick={() => navigate('/apartment')} variant="contained">Show All Data</Button>
                    </Box>
                </Container>
            </Box>
            <AboutTheBuilding></AboutTheBuilding>
            <Mapbox></Mapbox>
            <Cupon></Cupon>
        </div>
    );
};

export default HomePage;