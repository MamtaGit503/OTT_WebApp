import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import screenshot1 from "../assets/images/1.png";
import screenshot2 from "../assets/images/2.png";
import screenshot3 from "../assets/images/3.png";
import screenshot4 from "../assets/images/4.png";
import screenshot5 from "../assets/images/5.png";

const Screenshots = () => {
  const screenshots = [
    { id: 1, alt: "Home Screen", url: screenshot1 },
    { id: 2, alt: "Live TV", url: screenshot2 },
    { id: 3, alt: "Movie Details", url: screenshot3 },
    { id: 4, alt: "User Profile", url: screenshot4 },
    { id: 5, alt: "Search", url: screenshot5 },
  ];

  return (
    <section id="screenshots" className="py-20 bg-[#fff7fa]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            App Screenshots
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take a look at our beautifully designed interface
          </p>
        </div>

        <div className="px-4">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            {screenshots.map((screenshot) => (
              <SwiperSlide key={screenshot.id}>
                <div className="flex justify-center">
                  <img
                    src={screenshot.url}
                    alt={screenshot.alt}
                    className="rounded-lg shadow-md w-full max-w-xs"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Screenshots;
