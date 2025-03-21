import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const DemoSection = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0.2, 0.3], [0.8, 1.2]);

  // State for cursor position
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const cursorSize = 160;

  // Detect if the user is on mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Function to update cursor position
  const handleMouseMove = (e) => {
    if (isMobile) return; // Disable effect on mobile
    const rect = e.currentTarget.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    // Ensure cursor stays within video bounds
    x = Math.max(cursorSize / 2, Math.min(x, rect.width - cursorSize / 2));
    y = Math.max(cursorSize / 2, Math.min(y, rect.height - cursorSize / 2));

    setCursorPos({ x, y });
  };

  return (
    <div className="h-[60vh] md:h-[150vh]  bg-black px-6  py-8 md:py-48 flex flex-col justify-center">
      {/* Header */}
      <div className="w-[200px] flex items-center text-lg md:text-[20px] gap-3 text-white  md:mx-30 my-1 md:my-2">
        <div className="w-5 md:w-5 text-green-500 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            viewBox="0 0 64 58.691"
          >
            <path
              id="Path_53"
              data-name="Path 53"
              d="M994.095,29.345a7.464,7.464,0,1,0-7.464,7.464A7.464,7.464,0,0,0,994.095,29.345Zm-7.464,14.733a14.733,14.733,0,1,1,14.733-14.733,14.733,14.733,0,0,1-14.733,14.733Zm0,7.264a21.986,21.986,0,1,1,21.986-21.986,21.986,21.986,0,0,1-21.986,21.986ZM986.545,0h0c-5.954,0-20.707,1.718-34.645,17.521h7.795A29.345,29.345,0,1,0,986.545,0Z"
              transform="translate(-951.9)"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        Take a look around
      </div>

      {/* Video Section */}
      <motion.div
        style={{ scale }}
        className="w-[80%] md:w-[70%] flex justify-center items-center  relative my-3 md:my-14  mx-auto"
      >
        <div
          className="relative w-full overflow-hidden cursor-pointer"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => !isMobile && setIsHovering(true)}
          onMouseLeave={() => !isMobile && setIsHovering(false)}
        >
          {/* Video */}
          <video
            src="https://cdn.prod.website-files.com/632ae9e32fb1911d980d3b01/632daf629f24b5c1277cf5c6_signgroup-loop-transcode.mp4"
            autoPlay
            loop
            muted
            className="w-full h-[200px] md:h-auto shadow-lg"
          />

          {/* Custom Cursor (Hidden on Mobile) */}
          {!isMobile && isHovering && (
            <motion.div
              className="absolute flex items-center justify-center text-white text-xl md:text-4xl font-semibold uppercase pointer-events-none"
              style={{
                width: `${cursorSize}px`,
                height: `${cursorSize}px`,
                borderRadius: "50%",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(5px)",
                top: cursorPos.y - cursorSize / 2,
                left: cursorPos.x - cursorSize / 2,
              }}
              animate={{
                x: cursorPos.x - cursorSize / 2,
                y: cursorPos.y - cursorSize / 2,
              }}
              transition={{
                type: "tween",
                ease: "easeOut",
                duration: 0.1,
              }}
            >
              Watch
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default DemoSection;
