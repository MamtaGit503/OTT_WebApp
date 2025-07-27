import { FaApple, FaGooglePlay } from "react-icons/fa";
import logo from "../assets/images/ott_logo.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-[#fff7fa] bg-gradient-to-r from-primary to-secondary py-10 md:py-20 lg:py-28 text-white"
    >
      <div className="container mx-auto px-4 flex flex-col items-center md:flex-row space-y-10 md:space-y-0">
        <div className="md:w-1/2 mb-10 md:mb-0 ">
          <h1 className="main_heading lg:text-[40px] sm:text-[30px] text-[25px]">
            Stream Your Favorite Content Anywhere
          </h1>

          <p className="text-xl text-black mb-8">
            The ultimate OTT and live broadcasting experience in your pocket
          </p>

          <div className="flex flex-col xl:flex-row gap-4">
            <a
              href="#"
              className="hover:bg-[#ff0065] transition duration-300 hover:text-white shadow-md overflow-hidden font-semibold bg-black text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2"
            >
              <FaApple size={20} />
              <span>Download on App Store</span>
            </a>
            <a
              href="#"
              className="bg-gray-100 border transition duration-300 shadow-md overflow-hidden border-gray-200 hover:bg-black hover:text-white font-semibold text-black px-6 py-3 rounded-lg flex items-center justify-center gap-2"
            >
              <FaGooglePlay size={20} />
              <span>Get it on Google Play</span>
            </a>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="relative animate-float-smooth flex justify-center lg:justify-end">
            <div className="relative">
              <div className="relative mx-auto w-[250px] sm:w-[260px] lg:w-[270px] h-[480px] sm:h-[495px] lg:h-[500px] bg-gradient-to-b from-gray-400 to-gray-400 rounded-[2.5rem] lg:rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-black to-black rounded-[2rem] lg:rounded-[2.5rem] p-1 lg:p-2">
                  <div className="w-full h-full bg-white rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden relative">
                    <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100">
                      <div className="bg-[#ff006662] text-black p-3 lg:p-4">
                        <div className="flex items-center">
                          <img
                            src={logo}
                            alt="logo"
                            className="h-10 w-auto mr-2"
                          />
                          <h3 className="font-[800] text-xl">Vidflix</h3>
                        </div>
                      </div>

                      <div className="p-3 lg:p-4 space-y-3 lg:space-y-4">
                        <div className="bg-gray-200 rounded-lg h-24 lg:h-32"></div>
                        <div className="space-y-2">
                          <div className="bg-gray-200 rounded h-3 lg:h-4 w-3/4"></div>
                          <div className="bg-gray-200 rounded h-3 lg:h-4 w-1/2"></div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-gray-200 rounded-lg h-16 lg:h-20"></div>
                          <div className="bg-gray-200 rounded-lg h-16 lg:h-20"></div>
                        </div>
                        <div className="space-y-2">
                          <div className="bg-gray-200 rounded h-3 lg:h-4 w-3/4"></div>
                          <div className="bg-gray-200 rounded h-3 lg:h-4 w-1/2"></div>
                        </div>
                        <div className="bg-gray-200 rounded-lg h-24 lg:h-32"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
