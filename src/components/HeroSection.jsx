import React from "react";
import Navbar from "./Navbar";
import SignageLighting from "./SignageLighting";

const HeloSection = () => {
  return (
    <div className="bg-black text-white h-[100vh] sm:h-[110vh] flex items-center ">
      {/* signage box */}
      <SignageLighting />
      {/* bottom text */}
    </div>
  );
};

export default HeloSection;
