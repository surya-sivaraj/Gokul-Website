import { useState, useEffect } from "react";
import toast from "react-hot-toast";

import tech1 from "../assets/teach1.jpg";
import tech2 from "../assets/teach2.jpg";
import tech3 from "../assets/teach3.jpg";
import tech4 from "../assets/teach4.jpg";
// import tech5 from "../assets/teach5.jpg";

const Hero = () => {

  // 🔹 Image Slideshow Logic
  const images = [tech1, tech2, tech3, tech4];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, []);

  // 🔹 Call Button
  const handleCall = (e) => {
    e.preventDefault();
    toast.success("📞 Calling GOKUL Mobiles...", { duration: 1500 });

    setTimeout(() => {
      window.location.href = "tel:+917449077343";
    }, 1000);
  };

  // 🔹 WhatsApp Button
  const handleWhatsApp = (e) => {
    e.preventDefault();
    toast("💬 Opening WhatsApp...", { icon: "🟢", duration: 1200 });

    setTimeout(() => {
      window.open("https://wa.me/917695948501", "_blank");
    }, 800);
  };

  return (
    <section className="bg-slate-50" id="home">
      <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-stretch">
         
        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center h-full text-center lg:text-left">

     <div className="flex justify-center lg:justify-start mb-6">
  <div className="inline-flex items-center gap-2 px-4 py-1.5 
                  rounded-full bg-blue-100 text-blue-600 
                  text-xs font-semibold uppercase tracking-wide">
    <span className="material-symbols-outlined text-sm leading-none">
      verified
    </span>
    Expert Service in Dharmapuri
  </div>
</div>


          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
            GOKUL Mobiles & CCTV
            <span className="block text-blue-600 mt-2">
              Sales & Service
            </span>
          </h1>

          <p className="mt-6 text-lg text-slate-600 max-w-lg mx-auto lg:mx-0">
            Trusted Mobile & CCTV Experts in Dharmapuri. We provide
            professional repairs, installations, and reliable service
            for homes and businesses.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">

            <button
              onClick={handleCall}
              className="bg-emerald-600 hover:bg-emerald-700 
                         text-white px-7 py-3 rounded-lg font-semibold 
                         flex items-center justify-center gap-2 shadow-md transition"
            >
              <span className="material-symbols-outlined text-base">
                call
              </span>
              Call Now
            </button>

            <button
              onClick={handleWhatsApp}
              className="bg-green-500 hover:bg-green-600 
                         text-white px-7 py-3 rounded-lg font-semibold 
                         flex items-center justify-center gap-2 shadow-md transition"
            >
              <span className="material-symbols-outlined text-base">
                chat
              </span>
              WhatsApp Us
            </button>

          </div>
        </div>

        {/* RIGHT SIDE IMAGE SLIDESHOW (Desktop Only) */}
        <div className="hidden lg:block h-full relative">
          <img
            src={images[currentIndex]}
            alt="Technician working"
            className="w-full h-full object-cover rounded-2xl shadow-xl 
                       transition-opacity duration-700 ease-in-out"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;  