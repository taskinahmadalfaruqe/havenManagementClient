import { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import "./styles.css";
import { Box, Typography } from "@mui/material";

const ClientReview = () => {
  const [client, setClient] = useState([]);
  useEffect(() => {
    fetch("/client.json")
      .then((res) => res.json())
      .then((data) => setClient(data));
  }, []);

  return (
    <Box className="my-5">
      <Box className="text-center  lg:my-10 max-w-2xl mx-auto space-y-5 text-base">
        <Typography variant="h2" className="text-2xl font-bold text-primaryColor font-Oswald">
          Client Feedback
        </Typography>
        <Typography>
          It seems like you want to provide a description of a client. To do
          that effectively, you will need to provide more information about the
          client, their background, and the context in which you want the
          description. Please provide additional details so I can assist you in
          creating an appropriate client description.
        </Typography>
      </Box>

      <Box className="container dark:text-whiteColor">
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
              spaceBetween: 50,
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
            <SwiperSlide key={index}>
              <Box className="flex justify-center items-center flex-col gap-2 p-2  md:p-5 border border-primaryColor  dark:bg-lightdarkbg overflow-hidden">
                <Box className="w-36 h-36 rounded-full overflow-hidden ">
                  <img
                    src={singleClient.client_img}
                    alt=""
                    className="h-full w-full  flex justify-center items-center"
                  />
                </Box>
                <Box className="text-2xl font-bold text-primaryColor font-Oswald">
                  {singleClient.name}
                </Box>
                <Box>
                  {singleClient.rating > 4 ? (
                    <Box className="text-xl text-orange-400 flex gap-3 flex-row">
                      <AiFillStar></AiFillStar>
                      <AiFillStar></AiFillStar>
                      <AiFillStar></AiFillStar>
                      <AiFillStar></AiFillStar>
                      <AiFillStar></AiFillStar>
                    </Box>
                  ) : singleClient.rating > 3 ? (
                    <Box className="text-xl  flex gap-3 flex-row">
                      <AiFillStar className="text-orange-400"></AiFillStar>
                      <AiFillStar className="text-orange-400"></AiFillStar>
                      <AiFillStar className="text-orange-400"></AiFillStar>
                      <AiFillStar className="text-orange-400"></AiFillStar>
                      <AiFillStar className="text-black"></AiFillStar>
                    </Box>
                  ) : singleClient.rating > 2 ? (
                    <Box className="text-xl  flex gap-3 flex-row">
                      <AiFillStar className="text-orange-400"></AiFillStar>
                      <AiFillStar className="text-orange-400"></AiFillStar>
                      <AiFillStar className="text-orange-400"></AiFillStar>
                      <AiFillStar className="text-black"></AiFillStar>
                      <AiFillStar className="text-black"></AiFillStar>
                    </Box>
                  ) : singleClient.rating > 1 ? (
                    <Box className="text-xl  flex gap-3 flex-row">
                      <AiFillStar className="text-orange-400"></AiFillStar>
                      <AiFillStar className="text-orange-400"></AiFillStar>
                      <AiFillStar className="text-black"></AiFillStar>
                      <AiFillStar className="text-black"></AiFillStar>
                      <AiFillStar className="text-black"></AiFillStar>
                    </Box>
                  ) : singleClient.rating == 1 ? (
                    <Box className="text-xl  flex gap-3 flex-row text-black">
                      <AiFillStar className="text-orange-400"></AiFillStar>
                      <AiFillStar></AiFillStar>
                      <AiFillStar></AiFillStar>
                      <AiFillStar></AiFillStar>
                      <AiFillStar></AiFillStar>
                    </Box>
                  ) : (
                    "No Rating Yet"
                  )}
                </Box>
                <Box className="text-lg  font-semibold text-center">
                  {singleClient.client_say}
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default ClientReview;
