import {  Box, Container } from '@mui/material';
import banner01 from '../../../assets/image-01.jpg'
import banner02 from '../../../assets/image-02.jpg';
import banner03 from '../../../assets/08.jpg';
import banner04 from '../../../assets/09.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Banner.css'

const Banner = () => {
    
    return (
        <Container maxWidth="xl" >
            <Carousel autoPlay={true} stopOnHover={false} infiniteLoop={true}>
                <Box>
                    <img src={banner01} alt="banner01" style={{maxHeight:'500px', objectFit:'cover'}}/>
                </Box>
                <Box>
                    <img src={banner02} alt="banner02" style={{maxHeight:'500px', objectFit:'cover'}}/>
                </Box>
                <Box>
                    <img src={banner03} alt="banner03" style={{maxHeight:'500px', objectFit:'cover'}}/>
                </Box>
                <Box>
                    <img src={banner04} alt="banner04" style={{maxHeight:'500px', objectFit:'cover'}}/>
                </Box>
            </Carousel>
        </Container>
    );
};

export default Banner;