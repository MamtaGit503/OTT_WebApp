import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Screenshots from "./components/Screenshots";
import VideoDemo from "./components/VideoDemo";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Subscribe from "./components/SubscribeSection";

function App() {
  const [activeMenu, setActiveMenu] = useState("home");

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    window.location.hash = menu;
  };

  return (
    <div className="min-h-screen">
      <Header activeMenu={activeMenu} handleMenuClick={handleMenuClick} />
      <main>
        <Hero />
        <Features />
        <Screenshots />
        <VideoDemo />
        <Testimonials />
        <Pricing />
        <Contact />
        <Subscribe />
      </main>
      <Footer handleMenuClick={handleMenuClick} />
    </div>
  );
}

export default App;
