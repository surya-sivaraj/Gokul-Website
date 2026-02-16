const Services = () => {
  return (
    <section id="services" className="relative py-28 bg-gradient-to-b from-white to-slate-100 overflow-hidden">

      {/* Decorative Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-100 blur-3xl opacity-30 rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
            Our Professional Services
          </h2>
          <p className="mt-5 text-lg text-slate-600 max-w-2xl mx-auto">
            Trusted technology solutions for homes and businesses.
            Quality service. Affordable pricing. Guaranteed satisfaction.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

          {/* CARD 1 */}
          <div className="group relative bg-white/70 backdrop-blur-md p-8 rounded-3xl 
                          border border-slate-200 shadow-lg hover:shadow-2xl 
                          transition-all duration-300 hover:-translate-y-2">

            <div className="w-16 h-16 flex items-center justify-center 
                            bg-gradient-to-r from-blue-500 to-blue-600 
                            text-white rounded-2xl mb-6 shadow-lg 
                            group-hover:scale-110 transition">
              <span className="material-symbols-outlined text-3xl">
                smartphone
              </span>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Mobile Sales & Service
            </h3>

            <p className="text-slate-600 leading-relaxed">
              Expert screen replacement, battery repair, software updates,
              and complete hardware service for all major brands.
            </p>

            <div className="mt-6 h-1 w-12 bg-blue-500 rounded-full group-hover:w-24 transition-all duration-300"></div>
          </div>

          {/* CARD 2 */}
          <div className="group relative bg-white/70 backdrop-blur-md p-8 rounded-3xl 
                          border border-slate-200 shadow-lg hover:shadow-2xl 
                          transition-all duration-300 hover:-translate-y-2">

            <div className="w-16 h-16 flex items-center justify-center 
                            bg-gradient-to-r from-emerald-500 to-green-600 
                            text-white rounded-2xl mb-6 shadow-lg 
                            group-hover:scale-110 transition">
              <span className="material-symbols-outlined text-3xl">
                videocam
              </span>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              CCTV Installation & Service
            </h3>

            <p className="text-slate-600 leading-relaxed">
              HD camera installation, DVR setup, remote monitoring,
              and annual maintenance services for complete security.
            </p>

            <div className="mt-6 h-1 w-12 bg-emerald-500 rounded-full group-hover:w-24 transition-all duration-300"></div>
          </div>

          {/* CARD 3 */}
          <div className="group relative bg-white/70 backdrop-blur-md p-8 rounded-3xl 
                          border border-slate-200 shadow-lg hover:shadow-2xl 
                          transition-all duration-300 hover:-translate-y-2">

            <div className="w-16 h-16 flex items-center justify-center 
                            bg-gradient-to-r from-purple-500 to-indigo-600 
                            text-white rounded-2xl mb-6 shadow-lg 
                            group-hover:scale-110 transition">
              <span className="material-symbols-outlined text-3xl">
                tv
              </span>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              LED TV Repair
            </h3>

            <p className="text-slate-600 leading-relaxed">
              Panel replacement, backlight repair, motherboard troubleshooting
              and complete smart TV servicing.
            </p>

            <div className="mt-6 h-1 w-12 bg-purple-500 rounded-full group-hover:w-24 transition-all duration-300"></div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Services;
