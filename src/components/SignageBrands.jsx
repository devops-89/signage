import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const SignageBrands = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      image: true,
    });
  }, []);

  return (
    <div className="h-auto md:[w-70%] md:h-[100vh] flex flex-col md:flex-row items-center md:items-start bg-black  text-white px-6 py-5 md:py-20 md:px-40">
      {/* Left Content */}
      <div className="md:w-1/2 text-center md:text-left md:pr-8 ">
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
        className="md:w-1/2 flex flex-col items-center md:justify-center space-y-6 h-full mt-8 md:mt-0"
        style={{
          backgroundImage:
            "url('https://cdn.prod.website-files.com/632ae9e32fb1911d980d3b01/632f03fbd726c746b6bb30dc_logomark-outline.svg')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div
          className="flex flex-col items-center justify-center gap-4 md:gap-6"
          data-aos="fade-up"
        >
          {/* Main Logo */}
          <img
            src="https://cdn.prod.website-files.com/632ae9e32fb1911d980d3b01/63468b8f27d327d8f31a96df_logo-large.svg"
            alt="The Sign Group"
            className="w-24 md:w-60 opacity-100 transform transition duration-300"
          />

          {/* Sub Logos */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <img
              src="https://cdn.prod.website-files.com/632ae9e32fb1911d980d3b01/632b86f5952b60b2a477740d_logo-neonplus.svg"
              alt="Neonplus"
              className="w-24 md:w-60 opacity-100 transform transition duration-300"
            />
            <img
              src="https://cdn.prod.website-files.com/632ae9e32fb1911d980d3b01/632b87414761721a8cfb2832_weloveleds.webp"
              alt="We Love LEDs"
              className="w-24 md:w-60 opacity-100 transform transition duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignageBrands;
