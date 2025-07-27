import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/images/ott_logo.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("home");

  const menuItems = [
    "home",
    "features",
    "screenshots",
    "demo",
    "pricing",
    "contact",
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveMenu(visible.target.id);
      },
      { threshold: 0.6 }
    );

    menuItems.forEach((item) => {
      const section = document.getElementById(item);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a
          href="#home"
          onClick={() => handleMenuClick("home")}
          className="flex items-center hover:opacity-90 transition duration-200"
        >
          <img src={logo} alt="logo" className="h-10 w-auto mr-2" />
          <span className="text-2xl font-bold">Vidflix</span>
        </a>

        <div className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => handleMenuClick(item)}
              className={`capitalize text-base transition-all duration-300 pb-1 ${
                activeMenu === item
                  ? "text-[#ff0065] border-b-2 border-[#ff0065]"
                  : "text-gray-800 hover:text-[#ff0065]"
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-dark focus:outline-none">
            <FiMenu size={24} />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
        />
      )}

      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu}>
            <FiX size={20} className="text-gray-700" />
          </button>
        </div>

        <div className="flex flex-col px-6 space-y-1">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => handleMenuClick(item)}
              className={`capitalize text-base py-3 border-b border-gray-200 transition-colors duration-300 ${
                activeMenu === item
                  ? "text-[#ff0065] border-b-2 border-[#ff0065]"
                  : "text-gray-800 hover:text-[#ff0065]"
              }`}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
