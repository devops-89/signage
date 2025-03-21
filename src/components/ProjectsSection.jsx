import React, { useRef } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { GrPrevious } from "react-icons/gr";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import { GrNext } from "react-icons/gr";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function ProjectsSection() {

   useEffect(() => {
      AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        image: true,
      });
    }, []);
  

  // ref for controlling swiper
  const swiperRef = useRef(null);

  const slides = [
    {
      id: 1,
      title: "Neonplus®",
      image:
        "https://cdn.prod.website-files.com/632c50bab8d5966c3b4acd07/63766916e8261aa49e2016e9_neonplus-min.jpg",
      link: "https://www.thesigngroup.co.uk/services/faux-neon-neonplus",
    },
    {
      id: 2,
      title: "Neon Flex Signs",
      image:
        "https://cdn.prod.website-files.com/632c50bab8d5966c3b4acd07/637668e3766d5ea0bb712296_neonflex-min.jpg",
      link: "https://www.thesigngroup.co.uk/services/neon-flex/",
    },
    {
      id: 3,
      title: "Flat Cut Lettering & Shapes",
      image:
        "https://cdn.prod.website-files.com/632c50bab8d5966c3b4acd07/637668de6beb8c2551a8f218_flatcut-min.jpg",
      link: "http://www.thesigngroup.co.uk/services/flat-cuts",
    },
    {
      id: 4,
      title: "Built Ups",
      image:
        "https://cdn.prod.website-files.com/632c50bab8d5966c3b4acd07/6376690f49a2488f46f4bbbd_Builtups-min.jpg",
      link: "https://www.thesigngroup.co.uk/services/built-ups",
    },
    {
      id: 5,
      title: "Built Ups",
      image:
        "https://cdn.prod.website-files.com/632c50bab8d5966c3b4acd07/6376690f49a2488f46f4bbbd_Builtups-min.jpg",
      link: "https://www.thesigngroup.co.uk/services/built-ups",
    },
    {
      id: 6,
      title: "Built Ups",
      image:
        "https://cdn.prod.website-files.com/632c50bab8d5966c3b4acd07/6376690f49a2488f46f4bbbd_Builtups-min.jpg",
      link: "https://www.thesigngroup.co.uk/services/built-ups",
    },
    {
      id: 7,
      title: "Built Ups",
      image:
        "https://cdn.prod.website-files.com/632c50bab8d5966c3b4acd07/6376690f49a2488f46f4bbbd_Builtups-min.jpg",
      link: "https://www.thesigngroup.co.uk/services/built-ups",
    },
  ];

  return (
    <div className="bg-white h-[130vh] py-16 flex flex-col justify-center items-center ">
      <div className="max-w-screen-xl w-full px-6">
        <div className="flex  justify-between items-center">
          <h2 className="text-3xl md:text-[6vh] w-[500px] font-semibold  mb-6">
            What do you need for your next project?
          </h2>

          {/* navigation buttons */}
          <div className="flex gap-5">
            <div
              className="border p-6 rounded-full"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <GrPrevious />
            </div>
            <div
              className="border p-6 rounded-full"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <GrNext />
            </div>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          onSwiper={(swiper) => (swiperRef.current = swiper)} // store swiper instance
          spaceBetween={20}
          slidesPerView={1}
        breakpoints={{
            640: {
              slidesPerView: 2, // Tablets
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4, // Desktop
              spaceBetween: 20,
            },
          }}
          className="w-full overflow-hidden"
          data-aos="fade-left"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <a
                href={slide.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block   overflow-hidden shadow-lg"
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-80 object-cover"
                />
                <div className="py-4 px-2">
                  <h3 className="text-lg text-gray-800 font-semibold ">
                    {slide.title}
                  </h3>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
