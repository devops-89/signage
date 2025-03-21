const SignageBrands = () => {
    return (
      <div className="h-[100vh] flex flex-col md:flex-row items-center md:items-start bg-black text-white p-10 md:p-44">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left md:pr-8">
          <h2 className="text-[8vh] font-semibold mb-4">All your signage needs covered</h2>
          <p className="text-gray-400 mb-4 font-bold text-[20px]">
            Using sophisticated equipment and manufacturing techniques, we are able to create brand-accurate
            and innovative signs that capture the eye and the imagination.
          </p>
          <a href="/about" className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition">
            About us
          </a>
        </div>
  
        {/* Right Content - Logos */}
        <div
          className="md:w-1/2 flex flex-col items-center md:items-center md:justify-center space-y-4 md:space-y-6  h-full "
          style={{
            backgroundImage: "url('https://cdn.prod.website-files.com/632ae9e32fb1911d980d3b01/632f03fbd726c746b6bb30dc_logomark-outline.svg')", 
            backgroundSize: "contain",
            backgroundRepeat:"no-repeat",
            backgroundPosition: "center",
          }}
        >
         
          <div className="flex flex-col flex-wrap justify-center items-center md:justify-end gap-4">
            <img
              src="https://cdn.prod.website-files.com/632ae9e32fb1911d980d3b01/63468b8f27d327d8f31a96df_logo-large.svg"
              alt="The Sign Group"
              className="w-32 md:w-60 opacity-100 transform transition duration-300"
            />
            <div className="flex justify-center items-center gap-10 ">
              <img
                src="https://cdn.prod.website-files.com/632ae9e32fb1911d980d3b01/632b86f5952b60b2a477740d_logo-neonplus.svg"
                alt="Neonplus"
                className="w-32 md:w-60 opacity-100 transform transition duration-300"
              />
              <img
                src="https://cdn.prod.website-files.com/632ae9e32fb1911d980d3b01/632b87414761721a8cfb2832_weloveleds.webp"
                alt="We Love LEDs"
                className="w-32 md:w-60 opacity-100 transform transition duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default SignageBrands;
  