export default function Maintenance() {

  return (
    <div className="min-h-screen flex items-center justify-center 
                    bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4">

      <div className="bg-white/10 backdrop-blur-lg border border-white/20 
                      rounded-2xl shadow-2xl 
                      p-6 sm:p-10 
                      max-w-xl w-full text-center text-white">

        {/* Brand Name */}
        <div className="mb-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
          <span className="material-symbols-outlined text-blue-400 text-3xl">
            router
          </span>

          <h1 className="text-lg sm:text-xl font-semibold tracking-wide text-white">
            GOKUL Mobiles & CCTV
          </h1>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold mb-4 tracking-wide">
          Website Under Maintenance
        </h2>

        <p className="text-slate-300 text-sm sm:text-base mb-8 leading-relaxed">
          We are currently upgrading our website to serve you better.
          <br className="hidden sm:block" />
          Please check back shortly.
        </p>

        <div className="border-t border-white/20 pt-4 text-xs sm:text-sm">
          📞 For Enquiries:
          <span className="font-semibold ml-1">
            +91 76959 48501
          </span>
        </div>

      </div>
    </div>
  );
}
