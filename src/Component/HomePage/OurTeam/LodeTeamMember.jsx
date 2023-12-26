import PropTypes from "prop-types";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./teamCard.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Box, Typography } from "@mui/material";

const LodeTeamMember = ({ singleData }) => {
  useEffect(() => {
    Aos.init();
  }, []);
  const { name, image, title, social_media } = singleData;
  const { facebook, instagram, github, whatsapp } = social_media;
  return (
    <Box
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="2000"
      className="teamCard"
    >

      <Box sx={{ width: '100%', height: '285px', overflow: 'hidden', position: 'relative' }} >

        <Box border={'1px solid red'} borderRadius={'10px '} overflow={'hidden'}>
          <img
            src={image}
            style={{ height: '100%', width: '100%', overflow: 'hidden', background: 'red', }}

            alt="Team Member"
          />
        </Box>

        <Box style={{ backgroundColor: 'red' }} sx={{
          transition: 'all 500ms', display: 'none', flexDirection: 'column', gap: 5, justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'red', opacity: 0.8, zIndex: 40, position: 'absolute', top: 0, right: 0, width: '33.33%', p: 5, height: '100%', borderRadius: '0 4px 4px 0', fontSize: '30px', '&:hover': { display: 'flex', },
        }}>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 40,
            height: 40,
            borderRadius: '50%',
            border: '2px solid #f50057',
            color: '#f50057',
            fontWeight: 'bold',
            transition: 'color 0.3s, border-color 0.3s',
            bg: 'white',
            '&:hover': {
              color: '#800080',
              borderColor: '#800080',
            },
          }}>
            <Link to={facebook}>
              <BsFacebook></BsFacebook>
            </Link>
          </Box>
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 5,
            borderRadius: 'md',
            '@media (min-width: 768px)': {
              gridTemplateColumns: 'repeat(2, 1fr)',
            },
            '@media (min-width: 1024px)': {
              gridTemplateColumns: 'repeat(3, 1fr)',
            },
            '@media (min-width: 1280px)': {
              gridTemplateColumns: 'repeat(4, 1fr)',
            },
          }}>
            <Link to={instagram}>
              <BsInstagram></BsInstagram>
            </Link>
          </Box>
          <Box className="github instagram border border-pink-500 text-pink-500 font-bold hover:text-purple-800 bg-white w-10 h-10 rounded-full flex justify-center items-center">
            <Link to={github}>
              <BsGithub></BsGithub>
            </Link>
          </Box>
          <Box className="whatsapp instagram border border-pink-500 text-pink-500 font-bold hover:text-purple-800 bg-white w-10 h-10 rounded-full flex justify-center items-center">
            <Link to={whatsapp}>
              <BsWhatsapp></BsWhatsapp>
            </Link>
          </Box>
        </Box>
      </Box>

      <Box className="text-center mt-5">
        <Typography variant="h2" sx={{ textTransform: 'uppercase', fontWeight: 700, fontSize: '25px' }}>{name}</Typography>
        <Typography variant="h4" sx={{ textTransform: 'uppercase', fontWeight: 500, fontSize: '15px' }}>{title}</Typography>
      </Box>
    </Box>
  );
};

LodeTeamMember.propTypes = {
  singleData: PropTypes.object.isRequired,
};

export default LodeTeamMember;
