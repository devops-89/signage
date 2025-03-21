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
import project1 from "@/homepage/projects/project-1.jpeg";
import project2 from "@/homepage/projects/project-2.jpeg";
import project3 from "@/homepage/projects/project-3.jpeg";
import project4 from "@/homepage/projects/project-4.jpeg";
import project5 from "@/homepage/projects/project-5.jpeg";
import project6 from "@/homepage/projects/project-6.jpeg";
import project7 from "@/homepage/projects/project-7.jpeg";
import Image from "next/image";
export default function ProjectsSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      image: true,
        disable: function () {
          return window.innerWidth < 768;
        }
    });
  }, []);

  // ref for controlling swiper
  const swiperRef = useRef(null);

  const slides = [
    {
      id: 1,
      title: "Choice of India",
      image: project1,
      // link: "https://www.thesigngroup.co.uk/services/faux-neon-neonplus",
    },
    {
      id: 2,
      title: "Namaste India",
      image: project2,
      // link: "https://www.thesigngroup.co.uk/services/neon-flex/",
    },
    {
      id: 3,
      title: "The Brokin Yolk",
      image: project3,
      // link: "http://www.thesigngroup.co.uk/services/flat-cuts",
    },
    {
      id: 4,
      title: "Tamarak Medical Clinic",
      image: project4,
      // link: "https://www.thesigngroup.co.uk/services/built-ups",
    },
    {
      id: 5,
      title: "Subway",
      image: project5,
      // link: "https://www.thesigngroup.co.uk/services/built-ups",
    },
    {
      id: 6,
      title: "Olympia Liquor",
      image: project6,
      link: "https://www.thesigngroup.co.uk/services/built-ups",
    },
    {
      id: 7,
      title: "Buck Or Two Plus",
      image: project7,
      link: "https://www.thesigngroup.co.uk/services/built-ups",
    },
  ];

  return (
    <div className="bg-white h-[90vh] md:h-[130vh]  py-16 flex flex-col justify-center items-center ">
      <div className="max-w-screen-xl w-full px-6">
        <div className="sm:flex  justify-between items-center">
          <h2 className="text-3xl md:text-[8vh] w-full sm:w-[600px] font-semibold   mb-14">
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
                <Image
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
