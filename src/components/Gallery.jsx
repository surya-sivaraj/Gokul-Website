import { useState } from "react";
import g1 from "../assets/work11.jpg";
import g2 from "../assets/work41.jpg";
import g3 from "../assets/work21.jpg";
import g4 from "../assets/work51.jpg";

const Gallery = () => {
  const images = [g1, g2, g3, g4];
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-3">
              Our Work & Gallery
            </h2>
            <p className="text-slate-600">
              A glimpse of our professional repair and installation services.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {images.map((img, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(img)}
                className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer"
              >
                <img
                  src={img}
                  alt="Gallery"
                  className="w-full h-60 object-cover 
                             transform group-hover:scale-110 
                             transition duration-500 ease-in-out"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 
                                opacity-0 group-hover:opacity-100 
                                transition duration-300 
                                flex items-center justify-center">

                  <span className="material-symbols-outlined 
                                   text-white text-3xl">
                    visibility
                  </span>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 🔥 MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm 
                     flex items-center justify-center z-50 
                     animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full px-6"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Under Working"
              className="w-full rounded-2xl shadow-2xl"
            />

            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-4 -right-4 
                         bg-white text-black rounded-full 
                         w-10 h-10 flex items-center justify-center 
                         shadow-lg hover:scale-110 transition"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
