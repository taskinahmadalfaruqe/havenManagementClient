import { NavLink, Outlet, useNavigate } from "react-router-dom";
import NavBar from "../../Component/Shared/Navbar/Navbar";
import Footer from "../../Component/Shared/Footer/Footer";
import { Box, Container, } from "@mui/material";
import useAuth from "../../Hooks/useAuth";
import { Helmet } from "react-helmet-async";
import useAdmin from "../../Hooks/useAdmin";
import useMember from "../../Hooks/useMember";
import { Link } from "@mui/material";
import { useScroll, motion } from "framer-motion";
import { useEffect, useState } from "react";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';



const DasboardLayout = () => {
    const { handelLogOut, user } = useAuth();
    const [isAdmin] = useAdmin();
    const [isMember] = useMember();
    const navigate = useNavigate();
    const { scrollYProgress } = useScroll();
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
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
    const logout = () => {
        navigate('/')
        handelLogOut();
    }

    return (
        <Box>
            <NavBar></NavBar>
            <Helmet>
                <title>Haven || Dasboard</title>
            </Helmet>
            <Box sx={{ padding: 0, paddingTop: { xs: '60px', md: '80px' } }}>
                <Container>
                    <Box display={'flex'} gap={5}>
                        <Box minWidth={200} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'start', alignItems: 'center', flexDirection: 'column', gap: '10px', py: '20px', minHeight: '100%' }}>

                            <NavLink
                                to="/dasboard/profile"
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                                style={({ isActive }) =>
                                    isActive ?
                                        { backgroundColor: '#42a5f5', color: 'white', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '90%', padding: '5px' }
                                        :
                                        { color: '#000', background: '#eee', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '90%', padding: '5px' }
                                }
                            >
                                Profile
                            </NavLink>

                            {/* //admin route  */}
                            {
                                isAdmin && user ? <>
                                    <NavLink
                                        to="/dasboard/admin"
                                        className={({ isActive }) =>
                                            isActive ? "active" : ""
                                        }
                                        style={({ isActive }) =>
                                            isActive ?
                                                { backgroundColor: '#42a5f5', color: 'white', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '90%', padding: '5px' }
                                                :
                                                { color: '#000', background: '#eee', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '90%', padding: '5px' }
                                        }
                                    >
                                        Admin Dasbord
                                    </NavLink>

                                    <NavLink
                                        to="/dasboard/cupon"
                                        className={({ isActive }) =>
                                            isActive ? "active" : ""
                                        }
                                        style={({ isActive }) =>
                                            isActive ?
                                                { backgroundColor: '#42a5f5', color: 'white', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '90%', padding: '5px' }
                                                :
                                                { color: '#000', background: '#eee', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '90%', padding: '5px' }
                                        }
                                    >
                                        Manage Cupon
                                    </NavLink>

                                    <NavLink
                                        to="/dasboard/manageMember"
                                        className={({ isActive }) =>
                                            isActive ? "active" : ""
                                        }
                                        style={({ isActive }) =>
                                            isActive ?
                                                { backgroundColor: '#42a5f5', color: 'white', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '90%', padding: '5px' }
                                                :
                                                { color: '#000', background: '#eee', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '90%', padding: '5px' }
                                        }
                                    >
                                        Manage Member
                                    </NavLink>

                                    <NavLink
                                        to="/dasboard/memberRequest"
                                        className={({ isActive }) =>
                                            isActive ? "active" : ""
                                        }
                                        style={({ isActive }) =>
                                            isActive ?
                                                { backgroundColor: '#42a5f5', color: 'white', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '90%', padding: '5px' }
                                                :
                                                { color: '#000', background: '#eee', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '90%', padding: '5px' }
                                        }
                                    >
                                        Member Request
                                    </NavLink>

                                    <NavLink
                                        to="/dasboard/manageAnnoucement"
                                        className={({ isActive }) =>
                                            isActive ? "active" : ""
                                        }
                                        style={({ isActive }) =>
                                            isActive ?
                                                { backgroundColor: '#42a5f5', color: 'white', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '90%', padding: '5px' }
                                                :
                                                { color: '#000', background: '#eee', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '90%', padding: '5px' }
                                        }
                                    >
                                        Make Announcment
                                    </NavLink>

                                    <NavLink
                                        to="/dasboard/addApeartment"
                                        className={({ isActive }) =>
                                            isActive ? "active" : ""
                                        }
                                        style={({ isActive }) =>
                                            isActive ?
                                                { backgroundColor: '#42a5f5', color: 'white', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '90%', padding: '5px' }
                                                :
                                                { color: '#000', background: '#eee', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '90%', padding: '5px' }
                                        }
                                    >
                                        Add Apeartment
                                    </NavLink>

                                    <NavLink
                                        to="/dasboard/allPayments"
                                        className={({ isActive }) =>
                                            isActive ? "active" : ""
                                        }
                                        style={({ isActive }) =>
                                            isActive ?
                                                { backgroundColor: '#42a5f5', color: 'white', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '90%', padding: '5px' }
                                                :
                                                { color: '#000', background: '#eee', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '90%', padding: '5px' }
                                        }
                                    >
                                        Payments
                                    </NavLink>
                                </> :
                                    ""
                            }

                            {
                                user && isMember ?
                                    <>
                                        <NavLink
                                            to="/dasboard/makePayment"
                                            className={({ isActive }) =>
                                                isActive ? "active" : ""
                                            }
                                            style={({ isActive }) =>
                                                isActive ?
                                                    { backgroundColor: '#42a5f5', color: 'white', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '90%', padding: '5px' }
                                                    :
                                                    { color: '#000', background: '#eee', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '90%', padding: '5px' }
                                            }
                                        >
                                            Make Payment
                                        </NavLink>
                                        <NavLink
                                            to="/dasboard/paymentHistory"
                                            className={({ isActive }) =>
                                                isActive ? "active" : ""
                                            }
                                            style={({ isActive }) =>
                                                isActive ?
                                                    { backgroundColor: '#42a5f5', color: 'white', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '90%', padding: '5px' }
                                                    :
                                                    { color: '#000', background: '#eee', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '90%', padding: '5px' }
                                            }
                                        >
                                            Payment History
                                        </NavLink>
                                    </>
                                    :
                                    ''
                            }
                            <NavLink
                                to="/dasboard/annoucement"
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                                style={({ isActive }) =>
                                    isActive ?
                                        { backgroundColor: '#42a5f5', color: 'white', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '90%', padding: '5px' }
                                        :
                                        { color: '#000', background: '#eee', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '90%', padding: '5px' }
                                }
                            >
                                Announcment
                            </NavLink>
                            <NavLink
                                to="/"
                                onClick={logout}
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                                style={({ isActive }) =>
                                    isActive ?
                                        { backgroundColor: '#42a5f5', color: 'white', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '90%', padding: '5px' }
                                        :
                                        { color: '#000', background: '#eee', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '90%', padding: '5px' }
                                }
                            >
                                Logout
                            </NavLink>
                        </Box>
                        <Box flexGrow={1}>
                            <Outlet></Outlet>
                        </Box>
                    </Box>
                </Container>
            </Box>

            <Footer></Footer>
            <motion.div
                className="progress-bar z-[1111111111111111]"
                style={{ scaleX: scrollYProgress }}
            />
            <Box >
                {
                    scrolled ?
                        <Box className="backToTop_Show">
                            <Link
                                onClick={goToTop}>
                                <ExpandLessIcon sx={{ color: 'white' }} ></ExpandLessIcon>
                            </Link>
                        </Box>
                        : <Box className="backToTop">
                            <Link>
                                <ExpandLessIcon sx={{ color: 'white' }} ></ExpandLessIcon>
                            </Link>
                        </Box>
                }

            </Box>
        </Box>
    );
};

export default DasboardLayout;