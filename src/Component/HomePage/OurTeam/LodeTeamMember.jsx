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

      <Box>

        <Box border={'1px solid red'} borderRadius={'10px '} overflow={'hidden'} sx={{ width: '100%', height: '285px', position: 'relative' }}>
          <img
            src={image}
            style={{ height: '100%', width: '100%', overflow: '', background: 'red', }}
            alt="Team Member"
          />

          <Box sx={{ position: 'absolute', top: 0, right: 0, background: 'red', width: '80px', height: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexDirection: 'column' }}>
            <Box sx={{ cursor: 'pointer', border: '1px solid green', borderRadius: '100%', height: '50px', width: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
              <Link to={facebook}>
                <BsFacebook style={{ fontSize: '30px' }}></BsFacebook>
              </Link>
            </Box>
            <Box sx={{ cursor: 'pointer', border: '1px solid green', borderRadius: '100%', height: '50px', width: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Link to={instagram}>
                <BsInstagram style={{ fontSize: '30px' }}></BsInstagram>
              </Link>
            </Box>
            <Box sx={{ cursor: 'pointer', border: '1px solid green', borderRadius: '100%', height: '50px', width: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Link to={github}>
                <BsGithub style={{ fontSize: '30px' }}></BsGithub>
              </Link>
            </Box>
            <Box sx={{ cursor: 'pointer', border: '1px solid green', borderRadius: '100%', height: '50px', width: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Link to={whatsapp}>
                <BsWhatsapp style={{ fontSize: '30px' }}></BsWhatsapp>
              </Link>
            </Box>
          </Box>

        </Box>
      </Box>

      <Box sx={{ textAlign: 'center', mt: 3 }} >
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