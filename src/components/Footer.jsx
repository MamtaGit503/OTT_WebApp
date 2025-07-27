import {
  FaXTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";
import logo from "../assets/images/ott_logo.png";

const Footer = ({ handleMenuClick }) => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "Screenshots", href: "#screenshots" },
    { name: "Demo", href: "#demo" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  const companyLinks = [
    { name: "About Us", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Press", href: "#" },
    { name: "Partners", href: "#" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
  ];

  return (
    <footer className="bg-[#171a1f] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <a
              href="#home"
              onClick={() => handleMenuClick?.("home")}
              className="flex items-center hover:opacity-90 transition mb-[14px] duration-200"
            >
              <img src={logo} alt="logo" className="h-10 w-auto mr-2" />
              <span className="text-2xl font-bold text-white">Vidflix</span>
            </a>
            <p className="text-gray-400">
              The ultimate OTT and live broadcasting experience in your pocket.
            </p>
            <div className="mt-10">
              <h4 className="font-semibold text-white mb-4 text-center py-1 px-9 w-fit rounded-full bg-[#ff0065]">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-white hover:text-[#ff0066be] transition-colors duration-300"
                >
                  <FaXTwitter size={24} />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-[#ff0066be] transition-colors duration-300"
                >
                  <FaFacebook size={24} />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-[#ff0066be] transition-colors duration-300"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-[#ff0066be] transition-colors duration-300"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#ff0065]"></span>
                  <a
                    href={link.href}
                    onClick={() => handleMenuClick(link.name.toLowerCase())}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#ff0065]"></span>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#ff0065]"></span>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-400 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Vidflix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
