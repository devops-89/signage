import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import client1 from "@/homepage/projects/client-1.png";
import client2 from "@/homepage/projects/client-2.png";
import client3 from "@/homepage/projects/client-3.png";
const SignageBrands = () => {
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

  return (
    <div className="h-auto md:[w-70%] md:h-[100vh] flex flex-col  md:flex-row  md:items-start bg-black  text-white px-6 py-5 md:py-20 md:px-40">
      {/* Left Content */}
      <div className="md:w-1/2  md:text-left md:pr-8 ">
        <h2 className="text-4xl md:text-[8vh] font-semibold mb-4">
          All your signage needs covered
        </h2>
        <p className="text-gray-400 mb-4 font-bold text-base md:text-[20px]">
          Using sophisticated equipment and manufacturing techniques, we are
          able to create brand-accurate and innovative signs that capture the
          eye and the imagination.
        </p>
        <a
          href="#"
          className="inline-block bg-transparent text-white py-3 px-6 rounded-[3rem] border-2 border-[#5C631F] shadow-md text-2xl  transition"
        >
          About us
        </a>
      </div>

      {/* Right Content - Logos */}
      <div
        className="md:w-1/2 h-80  flex flex-col items-center justify-center space-y-6 md:h-full mt-8 my-30 md:my-0 md:mt-0"
        style={{
          backgroundImage:
            "url('https://cdn.prod.website-files.com/632ae9e32fb1911d980d3b01/632f03fbd726c746b6bb30dc_logomark-outline.svg')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div
          className="flex flex-col  items-center justify-center gap-4 md:gap-6 "
          data-aos="fade-up"
        >
          {/* Main Logo */}
          <img
            src={client1.src}
            alt="The Sign Group"
            className="w-40 md:w-60 opacity-100 transform transition duration-300"
          />

          {/* Sub Logos */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <img
              src={client2.src}
              alt="Neonplus"
              className="w-40 md:w-60 opacity-100 transform transition duration-300"
            />
            <img
              src={client3.src}
              alt="We Love LEDs"
              className="w-40 md:w-60 opacity-100 transform transition duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignageBrands;
