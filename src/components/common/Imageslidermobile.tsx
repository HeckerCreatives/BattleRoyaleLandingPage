"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Image from "next/image";
import { useState } from "react";

const images = [
  "/investor/assets/sample Gameplay Image.png",
  "/investor/assets/sample Gameplay Image.png",
  "/investor/assets/sample Gameplay Image.png",
  "/investor/assets/sample Gameplay Image.png",
  "/investor/assets/sample Gameplay Image.png",
]

export default function ImageSlidermobile() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full max-w-[1600px] h-auto px-4 mx-auto mt-12">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1} // Adjust for better layout
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 400,
          modifier: 1.5,
          slideShadows: false, 
        }}
     
       
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {images.map((src, index) => (
          <SwiperSlide
            key={index}
            className={`relative overflow-hidden border-2 md:border-4 border-yellow-500 rounded-lg bg-zinc-900 p-2 shadow-2xl transition-all duration-500 ${
              index === activeIndex ? "scale-125 opacity-100" : "scale-"
            }`}
          >
            {index !== activeIndex && (
              <div className="absolute w-full h-full bg-black/60"></div>
            )}
            <div>
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                width={1000} // Increased size
                height={600} // Increased size
                className="w-full h-auto rounded-md"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="custom-pagination mt-4"></div>

    </div>
  );
}
