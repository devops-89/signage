import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function ProjectsSection() {
  const slides = [
    {
      id: 1,
      title: "Neonplus®",
      image: "https://cdn.prod.website-files.com/632c50bab8d5966c3b4acd07/63766916e8261aa49e2016e9_neonplus-min.jpg",
      link: "https://www.thesigngroup.co.uk/services/faux-neon-neonplus",
    },
    {
      id: 2,
      title: "Neon Flex Signs",
      image: "https://cdn.prod.website-files.com/632c50bab8d5966c3b4acd07/637668e3766d5ea0bb712296_neonflex-min.jpg",
      link: "https://www.thesigngroup.co.uk/services/neon-flex/",
    },
    {
      id: 3,
      title: "Flat Cut Lettering & Shapes",
      image: "https://cdn.prod.website-files.com/632c50bab8d5966c3b4acd07/637668de6beb8c2551a8f218_flatcut-min.jpg",
      link: "http://www.thesigngroup.co.uk/services/flat-cuts",
    },
    {
      id: 4,
      title: "Built Ups",
      image: "https://cdn.prod.website-files.com/632c50bab8d5966c3b4acd07/6376690f49a2488f46f4bbbd_Builtups-min.jpg",
      link: "https://www.thesigngroup.co.uk/services/built-ups",
    },
  ];

  return (
    <div className="bg-white h-[130vh] py-16 flex flex-col justify-center items-end pl-20">
      <div className="max-w-screen-xl w-full px-6">
        <h2 className="text-[8vh] font-semibold   mb-6">
          What do you need for your next project?
        </h2>

        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={3}
          
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          className="w-full overflow-hidden"
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
                  <h3 className="text-lg text-gray-800 font-semibold ">{slide.title}</h3>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
