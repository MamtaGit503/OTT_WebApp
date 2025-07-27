import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import {
  FaXTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";
import { CgPhone } from "react-icons/cg";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-[#fff7fa]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-dark">
              Send us a message
            </h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff00665e] focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff00665e] focus:border-transparent"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-2 resize-none border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff00665e] focus:border-transparent"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="cont">
            <h3 className="text-xl font-semibold mb-6 text-black">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="text-primary mr-4 mt-1">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-dark">Email</h4>
                  <p className="text-gray-600">support@Vidflix.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-primary mr-4 mt-1">
                  <CgPhone size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-dark">Phone</h4>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-primary mr-4 mt-1">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-dark">Address</h4>
                  <p className="text-gray-600">
                    123 Streaming Street, Digital <br />
                    City, DC 10001
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h4 className="font-semibold text-white mb-4 text-center p-1 rounded-full bg-[#ff0065]">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-[#ff0066be] hover:text-primary transition-colors duration-300"
                >
                  <FaXTwitter size={24} />
                </a>
                <a
                  href="#"
                  className="text-[#ff0066be] hover:text-primary transition-colors duration-300"
                >
                  <FaFacebook size={24} />
                </a>
                <a
                  href="#"
                  className="text-[#ff0066be] hover:text-primary transition-colors duration-300"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href="#"
                  className="text-[#ff0066be] hover:text-primary transition-colors duration-300"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
