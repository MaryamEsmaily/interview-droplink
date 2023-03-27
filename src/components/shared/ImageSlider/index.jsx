import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Button, Flex, Image } from "@chakra-ui/react";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/navigation";

const ImageSlider = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const swiperRef = useRef(null);
  //
  return (
    <Flex direction="column" justifyContent="center">
      <Swiper
        loop={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        style={{ width: "100%" }}
        modules={[Thumbs]}
        centeredSlides={false}
        spaceBetween={8}
      >
        {images?.map((img) => (
          <SwiperSlide key={img}>
            <Image
              src={img}
              width="100%"
              height={400}
              objectFit="scale-down"
              borderRadius={18}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {images?.length > 1 ? (
        <Flex alignItems="center" mt={4}>
          <Button
            variant="unstyled"
            onClick={() => swiperRef.current.swiper.slidePrev()}
          >
            <ChevronLeftIcon boxSize={10} />
          </Button>
          <Swiper
            ref={swiperRef}
            onSwiper={setThumbsSwiper}
            loop={true}
            slidesPerView={images?.length === 2 ? 2 : 3}
            spaceBetween={5}
            modules={[Thumbs]}
          >
            {images?.map((img) => (
              <SwiperSlide key={img}>
                <Image
                  flexShrink={0}
                  cursor="pointer"
                  src={img}
                  width="100%"
                  height="80px"
                  objectFit="cover"
                  borderRadius={10}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <Button
            variant="unstyled"
            onClick={() => swiperRef.current.swiper.slideNext()}
          >
            <ChevronRightIcon boxSize={10} />
          </Button>
        </Flex>
      ) : null}
    </Flex>
  );
};

export default ImageSlider;
