const MagicHappens = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left Content */}
          <div className="md:w-1/2 space-y-6">
       
               
              <div className="flex items-start h-60 w-[450px]">
              <h2 className="text-[8vh] w-[80%] font-semibold leading-tight  ">
                Where the
                <br />
                magic happens
              </h2>
               {/* image */}
               <div className=" w-40">
                <img
                  src="https://cdn.prod.website-files.com/632ae9e32fb1911d980d3b01/632f886bfc80c836b307cdf8_magic.png"
                  alt="arrowimage"
                />
              </div>
              </div>
              <p className="text-gray-400 text-xl">
                Our workshop is a hive of activity where we embrace challenges
                and help bring your ideas to life.
              </p>
              <a
                href="/company/our-workshop"
                className="inline-block w-[220px] bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition"
              >
                Explore the workshop
              </a>
                    
             
             
         
            {/* Images Group */}
            <div className="flex space-x-4">
              <img
                src="https://cdn.prod.website-files.com/632ae9e32fb1911d980d3b01/633bf1e3f1f08583c8a8d19a_focus-min.jpg"
                alt="Focus"
                className="w-40 md:w-96 rounded-lg shadow"
              />
              <img
                src="https://cdn.prod.website-files.com/632ae9e32fb1911d980d3b01/633bf1e3bf2113a65af35f65_cnc-op-min.jpg"
                alt="CNC"
                className="w-40 md:w-96 rounded-lg shadow"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="md:w-1/2 flex flex-col items-center space-y-4">
            <div className="flex space-x-4">
              <img
                src="https://cdn.prod.website-files.com/632ae9e32fb1911d980d3b01/633bf1a00c8dbffc74d01d17_neon-heart-min.jpg"
                alt="Neon Heart"
                className="w-40 md:w-80 rounded-lg shadow"
              />
              <img
                src="https://cdn.prod.website-files.com/632ae9e32fb1911d980d3b01/633bf1a0d99eb02f432c88f4_rolls-min.jpg"
                alt="Rolls"
                className="w-40 md:w-80 rounded-lg shadow"
              />
            </div>
            <img
              src="https://cdn.prod.website-files.com/632ae9e32fb1911d980d3b01/633bf1a00c8dbfa917d01d18_sanding-min.jpg"
              alt="Sanding"
              className="w-60 md:w-96 rounded-lg shadow"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MagicHappens;
