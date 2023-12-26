import { useEffect, useState } from "react";
import LodeTeamMember from "./LodeTeamMember";
import Title from "../../Shared/Title/Title";
import { Box, Container } from "@mui/material";

const OurTeam = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    fetch("/team.json")
      .then((res) => res.json())
      .then((data) => setTeamMembers(data));
  }, []);

  return (
    <Container maxWidth={'lg'}>
      <Box sx={{ mt: 2, border: '1px solid red', borderRadius: '10px' }} className=" mt-5 md:p-5 rounded-md">
        <Title heading=" Our Team" subheading="Our team is a dynamic blend of creative minds and skilled
            professionals. Together, we work harmoniously to tackle challenges,
            innovate solutions, and drive success. With diverse expertise and
            unwavering dedication, we are committed to achieving excellence and
            making a positive impact in every endeavor we undertake."></Title>
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
          {" "}
          {teamMembers.map((singleData) => (
            <LodeTeamMember
              key={singleData.id}
              singleData={singleData}
            ></LodeTeamMember>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default OurTeam;
