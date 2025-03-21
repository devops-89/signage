import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const SignageLighting = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      disable: function () {
        return window.innerWidth < 768; 
      }
    });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 text-white">
      <div className="text-center space-y-6 pt-10 sm:pt-16">
        {/* First Line */}
        <div
          className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 md:space-x-3"
          data-aos="fade-right"
        >
          <img
            src="https://cdn.prod.website-files.com/632ae9e32fb1911d980d3b01/632c7b25d4855d7056eb32f3_starman.png"
            alt="starman"
            className="w-auto h-[4vh] sm:h-[10vh] md:h-[13vh]"
          />
          <h1 className="text-[4vh] sm:text-[10vh] md:text-[13vh] font-semibold uppercase">
            Signage
          </h1>
          <img
            src="https://cdn.prod.website-files.com/632ae9e32fb1911d980d3b01/632c7af126040b018704aba7_aster.svg"
            alt="aster"
            className="w-auto h-[4vh] sm:h-[10vh] md:h-[13vh] animate-[spin_3s_linear_infinite]"
          />
          <img
            src="https://cdn.prod.website-files.com/632ae9e32fb1911d980d3b01/632c947e92ef495f12a1cd3f_LED.svg"
            alt="LED"
            className="w-auto h-[4vh] sm:h-[10vh] md:h-[13vh]"
          />
          <img
            src="https://cdn.prod.website-files.com/632ae9e32fb1911d980d3b01/632c94946041d653547a3460_hello.png"
            alt="hello"
            className="w-auto h-[4vh] sm:h-[10vh] md:h-[13vh]"
          />
        </div>

        {/* Second Line */}
        <div
          className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 md:space-x-3"
          data-aos="fade-left"
        >
          <img
            src="https://cdn.prod.website-files.com/632ae9e32fb1911d980d3b01/632c7cb158b6af9a9045b47f_neonp.png"
            alt="neonp"
            className="w-20 md:w-auto h-[4vh] sm:h-[10vh] md:h-[13vh]"
          />
          <h1 className="text-[4vh] sm:text-[10vh] md:text-[13vh] font-semibold uppercase">
            And
          </h1>
          <h1 className="text-[4vh] sm:text-[10vh] md:text-[13vh] font-semibold uppercase">
            Lighting
          </h1>
          <img
            src="https://cdn.prod.website-files.com/632ae9e32fb1911d980d3b01/632c7cbd0643ed7e4a890673_left-arrows.svg"
            alt="arrows"
            className="w-auto h-[4vh] sm:h-[10vh] md:h-[13vh]"
          />
          <img
            src="https://cdn.prod.website-files.com/632ae9e32fb1911d980d3b01/632c7cc5cf9b39011312aa0a_np.png"
            alt="np"
            className="w-auto h-[4vh] sm:h-[10vh] md:h-[13vh]"
          />
        </div>

        {/* Third Line */}
        <div
          className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 md:space-x-3"
          data-aos="fade-right"
        >
          <img
            src="https://cdn.prod.website-files.com/632ae9e32fb1911d980d3b01/632c94d5b291932d0c70eac1_flash.svg"
            alt="flash"
            className="w-auto h-[4vh] sm:h-[10vh] md:h-[13vh]"
          />
          <h1 className="text-[4vh] sm:text-[10vh] md:text-[13vh] font-semibold uppercase">
            For
          </h1>
          <h1 className="text-[4vh] sm:text-[10vh] md:text-[13vh] font-semibold uppercase">
            The
          </h1>
          <img
            src="https://cdn.prod.website-files.com/632ae9e32fb1911d980d3b01/632c94dd5ae0db6debe26842_Mask%20Group%202.png"
            alt="mask group 2"
            className="w-auto h-[4vh] sm:h-[10vh] md:h-[13vh]"
          />
          <h1 className="text-[4vh] sm:text-[10vh] md:text-[13vh] font-semibold uppercase">
            Trade
          </h1>
          <img
            src="https://cdn.prod.website-files.com/632ae9e32fb1911d980d3b01/632c94e492ef4954d0a1d023_Mask%20Group%203.png"
            alt="mask group 3"
            className="w-auto h-[4vh] sm:h-[10vh] md:h-[13vh]"
          />
        </div>
        <div className="flex justify-center items-center gap-[100px] mt-4 ">
          <div className="rounded-[40px] p-3 w-[200px] border-2">
            <p className="font-bold">BRITISH COLUMBIA</p>
          </div>
          <div className="rounded-[40px] p-3 w-[200px] border-2">
            <p className="font-bold">ALBERTA</p>
          </div>
        </div>

        {/* Description */}
        {/* <div className="flex justify-center md:justify-end md:pr-14">
          <p className="w-full sm:w-3/4 md:w-80 text-lg sm:text-xl text-center md:text-right px-4">
            Get High-Quality Signs That Look Great and Help You Generate Leads
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default SignageLighting;
