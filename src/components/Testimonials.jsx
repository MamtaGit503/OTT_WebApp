import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

import user1 from "../assets/images/user1.jpg";
import user2 from "../assets/images/user2.jpg";
import user3 from "../assets/images/user3.jpg";
import user4 from "../assets/images/user4.jpg";
import user5 from "../assets/images/user5.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Movie Enthusiast",
      content:
        "Vidflix has completely changed how I watch content. The quality is amazing and the recommendations are always spot on!",
      rating: 5,
      tag: "Premium User",
      image: user1,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Sports Fan",
      content:
        "The live broadcasting feature is incredible. I never miss a game and the streaming is smooth even during peak times.",
      rating: 4,
      tag: "Verified User",
      image: user2,
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "TV Series Binger",
      content:
        "I love the multi-language support and user profiles. My whole family can use the same account with personalized experiences.",
      rating: 5,
      tag: "Family Plan",
      image: user3,
    },
    {
      id: 4,
      name: "David Wilson",
      role: "Tech Reviewer",
      content:
        "As someone who reviews many streaming apps, Vidflix stands out with its intuitive interface and reliable performance.",
      rating: 5,
      tag: "Pro Reviewer",
      image: user4,
    },
    {
      id: 5,
      name: "Emily Rodriguez",
      role: "Fitness Trainer",
      content:
        "The offline download feature is a lifesaver. Works even with low connectivity. The user experience is simply outstanding.",
      rating: 5,
      tag: "Premium User",
      image: user5,
    },
  ];

  const renderStars = (rating) => (
    <div className="flex items-center">
      {Array(rating)
        .fill(0)
        .map((_, i) => (
          <FaStar key={i} className="text-yellow-400 text-sm" />
        ))}
      <span className="text-sm text-gray-500 ml-2">({rating.toFixed(1)})</span>
    </div>
  );

  return (
    <section className="py-20 bg-[#fff7fa]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Testimonials
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied users
          </p>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{ 768: { slidesPerView: 2 } }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 h-full flex flex-col justify-between">
                <div className="flex justify-start mb-4">
                  <div className="w-10 h-10 bg-[#f5dde5c1] text-[#ff0065] rounded-full flex items-center justify-center text-xl">
                    <FaQuoteLeft />
                  </div>
                </div>

                <div className="mb-3">{renderStars(t.rating)}</div>
                <p className="text-gray-700 text-base leading-relaxed mb-6 line-clamp-3">
                  "{t.content}"
                </p>

                <div className="flex items-center gap-4 mt-auto">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-dark text-base">{t.name}</h4>
                    <p className="text-sm text-gray-500 line-clamp-1">
                      {t.role}
                    </p>
                  </div>
                  <span className="ml-auto text-xs text-white bg-[#ff0065] px-3 py-1 rounded-full">
                    {t.tag}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
