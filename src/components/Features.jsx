import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaHighlighter,
  FaVideo,
  FaBroadcastTower,
  FaUserCog,
  FaLanguage,
  FaDownload,
  FaMobileAlt,
  FaLock,
  FaBell,
  FaHeart,
  FaHistory,
  FaCogs,
  FaCloud,
  FaGift,
} from "react-icons/fa";

const Features = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const allFeatures = [
    {
      icon: <FaHighlighter className="text-4xl text-primary" />,
      title: "High-definition Streaming",
      description: "Enjoy 4K content with advanced streaming.",
    },
    {
      icon: <FaVideo className="text-4xl text-primary" />,
      title: "On-demand Video Content",
      description: "Access movies, shows anytime.",
    },
    {
      icon: <FaBroadcastTower className="text-4xl text-primary" />,
      title: "Live Broadcasting",
      description: "Watch live events with low latency.",
    },
    {
      icon: <FaUserCog className="text-4xl text-primary" />,
      title: "User Profiles",
      description: "Personalized experience for every user.",
    },
    {
      icon: <FaLanguage className="text-4xl text-primary" />,
      title: "Multi-language Support",
      description: "Interface and content in your language.",
    },
    {
      icon: <FaDownload className="text-4xl text-primary" />,
      title: "Offline Downloads",
      description: "Watch later without internet.",
    },
    {
      icon: <FaMobileAlt className="text-4xl text-primary" />,
      title: "Cross-Platform Support",
      description: "Use on mobile, TV, and desktop.",
    },
    {
      icon: <FaLock className="text-4xl text-primary" />,
      title: "Secure Streaming",
      description: "Encrypted and safe viewing.",
    },
    {
      icon: <FaBell className="text-4xl text-primary" />,
      title: "Instant Alerts",
      description: "Get notified for live shows and updates.",
    },
    {
      icon: <FaHeart className="text-4xl text-primary" />,
      title: "Favorites",
      description: "Bookmark what you love.",
    },
    {
      icon: <FaHistory className="text-4xl text-primary" />,
      title: "Watch History",
      description: "Continue from where you left off.",
    },
    {
      icon: <FaCogs className="text-4xl text-primary" />,
      title: "Adaptive Streaming",
      description: "Auto adjust quality with internet speed.",
    },
  ];

  const handleLoadMore = () => {
    setVisibleCount(allFeatures.length);
    setTimeout(() => {
      AOS.refresh();
    }, 100);
  };

  return (
    <section className="py-20 bg-light" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Amazing Features
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Discover what makes Vidflix the best OTT platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allFeatures.slice(0, visibleCount).map((feature, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 border border-gray-200 bottom-1"
            >
              <div className="mb-4 text-[#ff0065]">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-dark">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {visibleCount < allFeatures.length && (
          <div className="text-center mt-10" data-aos="fade-up">
            <button
              onClick={handleLoadMore}
              className="bg-gray-100 text-black px-6 py-3 rounded-full hover:bg-[#ff0065] hover:text-white transition-all duration-300"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Features;
