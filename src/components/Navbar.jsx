import React from "react";

const Navbar = () => {
  return (
    <section className="relative">
      <nav className="w-full text-white shadow-md p-4 flex justify-between items-center pt-5 absolute">
        {/* svg start */}
        <div className="flex items-center">
          <a href="/" aria-label="home" className="relative flex items-center w-full">
           Jassal Signs
          </a>
        </div>
        {/* svg end */}

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-[18px]">
          <a href="#">Company</a>
          <a href="#">Inspiration</a>
          <a href="#">Careers</a>
          <a href="#">Blog</a>
          <a href="#">Net-Zero</a>
          <a href="#">Contact</a>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
