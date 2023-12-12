import { Box} from "@mui/material";
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { Link } from "react-router-dom";
import './Footer.css'

const Footer = () => {
    return (
        <Box sx={{ background: '#0096c7', mt: 5 }}>
            <Box sx={{ textAlign: 'center', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center',flexDirection: {xs: 'column', sm: 'row' }, }}>
                <Box paddingY={5} flexGrow={1} backgroundColor={'#ade8f4'} color={'black'} sx={{minWidth:{xs:'100%',sm:'50%'}}} >
                    
                        <h2 >CONTACT US</h2>
                        <p>123 ABS Street, Uni 21, Bangladesh</p>
                        <p>+88 123456789</p>
                        <p>Mon - Fri: 08:00 - 22:00</p>
                        <p>Sat - Sun: 10:00 - 23:00 </p>
                    
                </Box>
                <Box paddingY={5} flexGrow={1}  minHeight={'100%'}>
                    <Box>
                        <h2>Follow US</h2>
                        <p>Join Us With Social Media</p>
                        <div className="socialIcon">
                            <div >
                                <Link
                                className="icon"
                                    to={'/'}>
                                    <FaFacebook></FaFacebook>
                                </Link>
                            </div>
                            <div >
                                <Link
                                className="icon"
                                    to={'/'}>
                                    <FaInstagram></FaInstagram>
                                </Link>
                            </div>
                            <div >
                                <Link
                                className="icon"
                                    to={'/'}>
                                    <FaTwitter></FaTwitter>
                                </Link>
                            </div>
                        </div>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;