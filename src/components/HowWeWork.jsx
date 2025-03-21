const HowWeWork = () => {
  return (
    <div className="h-auto md:h-[90vh] overflow-hidden flex flex-col md:flex-row text-center md:text-left">
      {/* Left Image */}
      <div className="w-full md:w-[30%]">
        <img
          src="https://cdn.prod.website-files.com/632ae9e32fb1911d980d3b01/632f7e2ebf79cbb6f9f548b8_3T2A6302-2.jpg"
          alt="first"
          className="object-contain w-full h-auto"
        />
      </div>

      {/* Content Section */}
      <div className="w-full md:w-[40%] flex flex-col justify-center items-center p-6 md:p-0">
        <div className="w-full md:w-[70%]">
          <h2 className="text-4xl md:text-[8vh] font-semibold leading-tight mb-6">
            Delivering for <br /> the trade time <br /> and time again
          </h2>
          <p className="text-gray-700 text-lg md:text-xl mb-4">
            We work closely with our customers to make sure we offer the best
            solution for them and their clients' needs.
          </p>
          <p className="text-gray-700 text-lg md:text-xl mb-6">
            Our friendly and professional way of working is often described as
            'refreshing' by our customers, click below to see why.
          </p>
          <a
            href="/company/how-we-work"
            className="inline-block bg-transparent  py-3 px-6 rounded-[3rem] border-2 border-[#D0E89B] text-xl transition"
          >
            See how we work
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-[30%]">
        <img
          src="https://cdn.prod.website-files.com/632ae9e32fb1911d980d3b01/632f7fdc81e513d016ada8e5_3T2A6235.jpg"
          alt="second"
          className="object-cover w-full h-auto"
        />
      </div>
    </div>
  );
};

export default HowWeWork;
