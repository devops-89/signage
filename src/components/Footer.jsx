import styles from "@/styles/Footer.module.css";
import logo from "@/homepage/logo.png";
const Footer = () => {
  return (
    <footer className="bg-black text-white pt-[120px]">
      <div className="container mx-auto flex flex-col justify-center items-center px-5">
        <p className="w-full md:w-[30%] leading-7 text-center text-lg md:text-xl mb-6">
          We’re always looking to work with creative businesses, so if you’re
          looking for a stand-out piece of signage, get in touch!
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-x-2 mb-6">
          <img
            src="https://cdn.prod.website-files.com/632ae9e32fb1911d980d3b01/632b3ff923a3ab07e281543e_pointer.svg"
            alt="Pointer"
            className={`h-10 hidden md:block ${styles.movex} mx-5`}
          />
          <img
            src="https://cdn.prod.website-files.com/632ae9e32fb1911d980d3b01/632b3ff93cf243879e99f624_yellow-arrow.svg"
            alt="Pointer"
            className={`h-8 hidden md:block ${styles.rotate10deg} mx-5`}
          />
          <div className="flex flex-col md:flex-row justify-center items-center text-center gap-2 md:gap-0">
            <div className="text-4xl md:text-[15vh] font-semibold">Work</div>
            <div
              className={`text-2xl md:text-[8vh] flex justify-center items-center font-semibold italic ${styles.rotate10deg} border-2 border-green-500 rounded-[3rem] px-4 py-2 md:px-10`}
            >
              with
            </div>
            <div className="text-4xl md:text-[15vh] font-semibold">Us</div>
            <img
              src="https://cdn.prod.website-files.com/632ae9e32fb1911d980d3b01/632b401d7b08c7087217c905_two-arrows.svg"
              alt="Pointer"
              className={`h-12 md:h-20 hidden md:block ${styles.movex} mx-5`}
            />
          </div>
        </div>
      </div>

      <div
        className="h-auto md:h-[130vh] border-gray-700 mt-10 bg-cover text-center flex flex-col justify-between items-center py-10 px-4 md:px-0"
        style={{
          backgroundImage:
            "url('https://cdn.prod.website-files.com/632ae9e32fb1911d980d3b01/632b73defb9586e6bb732e37_footer-circle-bg.svg')",
        }}
      >
        <a
          href="/contact-us"
          className="bg-white text-gray-900 py-2 px-6 rounded-full font-bold text-lg inline-block mb-6 -translate-y-[40px] md:-translate-y-[57px]"
        >
          Get in touch
        </a>

        <div className="w-full">
          <div className="flex justify-center items-center mb-4">
            <img
              src={logo.src}
              alt="The Sign Group"
              className="w-[70px]  translate-y-[5px] md:-translate-y-[48px]"
            />
          </div>
          <a
            href="/subscribe"
            className="bg-black text-white py-2 px-6 rounded-full font-semibold text-lg inline-block mb-4"
          >
            Subscribe for updates
          </a>
          <p className="text-black text-base md:text-xl mb-4">
            We are the number 1 for bespoke trade signs. <br /> Follow us to
            find out why!
          </p>

          <div className="flex justify-center space-x-4 mb-6">
            <a
              href="https://www.linkedin.com/company/3134578"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn.prod.website-files.com/632ae9e32fb1911d980d3b01/636a880e39b40cb456deed9e_linkedin.svg"
                alt="LinkedIn"
                className="w-8 md:w-10"
              />
            </a>
            <a
              href="https://www.facebook.com/thesigngroup/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn.prod.website-files.com/632ae9e32fb1911d980d3b01/636a8807a7ac13ee24a24ce9_facebook.svg"
                alt="Facebook"
                className="w-8 md:w-10"
              />
            </a>
            <a
              href="https://www.instagram.com/thesigngroup.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn.prod.website-files.com/632ae9e32fb1911d980d3b01/632b3b33870a7a47dad8479a_insta.svg"
                alt="Instagram"
                className="w-8 md:w-10"
              />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mb-10 w-full px-6 md:w-[80%]">
          <p className="text-xs text-black text-center md:text-left mb-4 md:mb-0">
            Ⓒ Jassal Signs |{" "}
            <a href="/terms-conditions" className="underline">
              Terms & Conditions
            </a>{" "}
            |{" "}
            <a href="/privacy-policy" className="underline">
              Privacy Policy
            </a>
          </p>
          <button className="bg-black rounded-[3rem] px-6 py-2 text-white">
            site by DIGIXITO
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
