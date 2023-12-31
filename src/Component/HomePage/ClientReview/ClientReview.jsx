import { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import "./styles.css";
import { Box, Container } from "@mui/material";
import Title from "../../Shared/Title/Title";

const ClientReview = () => {
  const [client, setClient] = useState([]);
  useEffect(() => {
    fetch("/client.json")
      .then((res) => res.json())
      .then((data) => setClient(data));
  }, []);
  return (
    <Container maxWidth='lg' sx={{ my: '20px', textAlign: 'center', padding:0, zIndex:-1}}  >
      <Title
        heading="Client Feedback"
        subheading="It seems like you want to provide a description of a client. To do that effectively, you will need to provide more information about the client, their background, and the context in which you want the description. Please provide additional details so I can assist you in creating an appropriate client description.">
      </Title>
      <Box padding={1} zIndex={'-1'}>
        <Swiper
          loop={true}
          pagination={{
            clickable: true,
          }}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
          }}
        >
          {client.map((singleClient, index) => (
            <SwiperSlide key={index} style={{ background: 'transparent', }}>
              <Box display={'flex'} justifyItems={'center'} alignItems={'center'} flexDirection={'column'} gap={1} sx={{ padding: 5, overflow: 'hidden', border: '1px solid #2196f3', borderRadius: 3 }}>
                <Box height={'144px'} width={'144px'} borderRadius={'100%'} overflow={'hidden'} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <img
                    src={singleClient.client_img}
                    alt=""
                  />
                </Box>
                <Box >
                  {singleClient.name}
                </Box>
                <Box>
                  {singleClient.rating > 4 ? (
                    <Box display={'flex'} gap={2} fontSize={25} color={'orange'}>
                      <AiFillStar></AiFillStar>
                      <AiFillStar></AiFillStar>
                      <AiFillStar></AiFillStar>
                      <AiFillStar></AiFillStar>
                      <AiFillStar></AiFillStar>
                    </Box>
                  ) : singleClient.rating > 3 ? (
                    <Box display={'flex'} gap={2} fontSize={25} color={'orange'}>
                      <AiFillStar ></AiFillStar>
                      <AiFillStar ></AiFillStar>
                      <AiFillStar ></AiFillStar>
                      <AiFillStar ></AiFillStar>
                      <AiFillStar style={{color:'black'}}></AiFillStar>
                    </Box>
                  ) : singleClient.rating > 2 ? (
                    <Box display={'flex'} gap={2} fontSize={25} color={'orange'}>
                      <AiFillStar ></AiFillStar>
                      <AiFillStar ></AiFillStar>
                      <AiFillStar ></AiFillStar>
                      <AiFillStar style={{color:'black'}}></AiFillStar>
                      <AiFillStar style={{color:'black'}}></AiFillStar>
                    </Box>
                  ) : singleClient.rating > 1 ? (
                    <Box display={'flex'} gap={2} fontSize={25} color={'orange'}>
                      <AiFillStar ></AiFillStar>
                      <AiFillStar ></AiFillStar>
                      <AiFillStar style={{color:'black'}}></AiFillStar>
                      <AiFillStar style={{color:'black'}}></AiFillStar>
                      <AiFillStar style={{color:'black'}}></AiFillStar>
                    </Box>
                  ) : singleClient.rating == 1 ? (
                    <Box display={'flex'} gap={2} fontSize={25} color={'black'}>
                      <AiFillStar style={{color:'orange'}}></AiFillStar>
                      <AiFillStar></AiFillStar>
                      <AiFillStar></AiFillStar>
                      <AiFillStar></AiFillStar>
                      <AiFillStar></AiFillStar>
                    </Box>
                  ) : (
                    "No Rating Yet"
                  )}
                </Box>
                <Box >
                  {singleClient.client_say}
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Container>
  );
};

export default ClientReview;
