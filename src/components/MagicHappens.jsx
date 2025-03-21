import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const MagicHappens = () => {
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
    <section className="bg-black text-white py-16 md:px-[40px] md:py-60 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-col md:flex-row items-start gap-10">
          {/* Left Content */}
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center md:items-start h-auto md:h-60 w-full md:w-[450px]">
              <h2 className="text-4xl md:text-[8vh] font-semibold leading-tight w-full md:w-[80%]">
                Where the
                <br />
                magic happens
              </h2>
              {/* Image */}
              <div className="w-32 md:w-40 mt-4 md:mt-0">
                <img
                  src="https://cdn.prod.website-files.com/632ae9e32fb1911d980d3b01/632f886bfc80c836b307cdf8_magic.png"
                  alt="arrowimage"
                  className="w-full"
                />
              </div>
            </div>
            <p className="text-gray-400 text-lg md:text-xl">
              Our workshop is a hive of activity where we embrace challenges
              and help bring your ideas to life.
            </p>
            <a
              href="/company/our-workshop"
              className="inline-block w-full md:w-[300px]  text-white py-3 px-6 rounded-[3rem] border-2 border-[#5C631F] shadow-md text-2xl transition"
            >
              Explore the workshop
            </a>

            {/* Images Group */}
            <div className="flex justify-center md:justify-start gap-4">
              <img
                src="https://cdn.prod.website-files.com/632ae9e32fb1911d980d3b01/633bf1e3f1f08583c8a8d19a_focus-min.jpg"
                alt="Focus"
                className="w-40 md:w-96 rounded-lg shadow -translate-x-30 translate-y-30"
                data-aos="fade-up"
              />
              <img
                src="https://cdn.prod.website-files.com/632ae9e32fb1911d980d3b01/633bf1e3bf2113a65af35f65_cnc-op-min.jpg"
                alt="CNC"
                className="w-40 md:w-96 rounded-lg shadow -translate-x-25"
                data-aos="fade-up"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="md:w-1/2 flex flex-col space-y-4">
            <div className="flex justify-center md:justify-start gap-4">
              <img
                src="https://cdn.prod.website-files.com/632ae9e32fb1911d980d3b01/633bf1a00c8dbffc74d01d17_neon-heart-min.jpg"
                alt="Neon Heart"
                className="w-40 md:w-80 rounded-lg shadow -translate-x-10"
                data-aos="fade-up"
              />
              <img
                src="https://cdn.prod.website-files.com/632ae9e32fb1911d980d3b01/633bf1a0d99eb02f432c88f4_rolls-min.jpg"
                alt="Rolls"
                className="w-40 md:w-80 rounded-lg shadow translate-x-15 -translate-y-15"
                data-aos="fade-up"
              />
            </div>
            <img
              src="https://cdn.prod.website-files.com/632ae9e32fb1911d980d3b01/633bf1a00c8dbfa917d01d18_sanding-min.jpg"
              alt="Sanding"
              className="w-60 md:w-full rounded-lg shadow translate-x-15"
              data-aos="fade-up"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MagicHappens;
