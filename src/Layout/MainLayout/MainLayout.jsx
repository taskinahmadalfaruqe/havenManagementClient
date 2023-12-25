import { Box, Link } from "@mui/material";
import { useScroll, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import NavBar from "../../Component/Shared/Navbar/Navbar";
import Footer from "../../Component/Shared/Footer/Footer";
import './styles.css'
// import MessengerCustomerChat from 'react-messenger-customer-chat';

const MainLayout = () => {
    const { scrollYProgress } = useScroll();
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 250) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const goToTop = () => {
        const delay = 500;
        const scrollStep = -window.scrollY / (delay / 15);
        const scrollInterval = setInterval(() => {
            if (window.scrollY !== 0) {
                window.scrollBy(0, scrollStep);
            } else {
                clearInterval(scrollInterval);
            }
        }, 15);
    }
    return (
        <div>
            <div>
                {
                    scrolled ?
                        <div className="">
                            <NavBar></NavBar>
                        </div>
                        :
                        <div className="">
                            <NavBar></NavBar>
                        </div>
                }
            </div>
            <Box sx={{ padding: 0, paddingTop: { xs: '60px', md: '80px' } }}>

                <Outlet></Outlet>
            </Box>
            <Footer></Footer>
            {/* <MessengerCustomerChat
                pageId="104235124306928"
                appId="317420677841540"
            /> */}
            <motion.div
                className="progress-bar z-[1111111111111111]"
                style={{ scaleX: scrollYProgress }}
            />
            <div >
                {
                    scrolled ?
                        <div className="backToTop_Show">
                            <Link
                                onClick={goToTop}>
                                <ExpandLessIcon sx={{ color: 'white' }} ></ExpandLessIcon>
                            </Link>
                        </div>
                        : <div className="backToTop">
                            <Link>
                                <ExpandLessIcon sx={{ color: 'white' }} ></ExpandLessIcon>
                            </Link>
                        </div>
                }

            </div>
        </div>
    );
};

export default MainLayout;