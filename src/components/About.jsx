import aboutImg from "../assets/expert.png";
import { useEffect, useState } from "react";

const About = () => {
  const [visible, setVisible] = useState(false);

  // Simple fade-in effect
  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section id="about" className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE IMAGE */}
        <div
          className={`relative transition-all duration-1000 ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          <div className="group overflow-hidden rounded-3xl shadow-2xl">
            <img
              src={aboutImg}
              alt="Technician working"
              className="w-full h-[400px] object-cover 
                         transform group-hover:scale-105 
                         transition duration-700 ease-in-out"
            />
          </div>

          {/* Decorative Accent */}
          <div className="absolute -bottom-6 -left-6 w-32 h-32 
                          bg-blue-100 rounded-3xl blur-2xl opacity-60 
                          animate-pulse -z-10">
          </div>
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div
          className={`transition-all duration-1000 delay-300 ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Experience You Can Trust
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            With over a decade of experience in Dharmapuri, 
            GOKUL Mobiles & CCTV has built a strong reputation 
            for professional service, genuine parts, and customer satisfaction.
            We ensure quality repairs and secure installations for every client.
          </p>

          {/* Highlight Box */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 
                          p-6 rounded-2xl shadow-md 
                          hover:shadow-xl hover:-translate-y-1 
                          transition duration-300 cursor-pointer">

            <p className="text-blue-700 font-bold text-xl">
              1 Year Service Warranty
            </p>

            <p className="text-slate-600 mt-2">
              Peace of mind with guaranteed service quality.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
