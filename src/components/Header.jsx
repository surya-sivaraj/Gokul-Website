import toast from "react-hot-toast";

const Header = () => {

  const handleCall = (e) => {
    e.preventDefault();

    toast.success("📞 Calling GOKUL Mobiles...", {
      duration: 1800,
    });

    setTimeout(() => {
      window.location.href = "tel:+917695948501";
    }, 1200);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-blue-500 text-3xl leading-none">
              router
            </span>
            <h1 className="text-xl font-bold tracking-tight text-slate-800">
              GOKUL Mobiles & CCTV
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#home"
              className="text-sm font-semibold hover:text-blue-500 transition-colors"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-sm font-semibold hover:text-blue-500 transition-colors"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-sm font-semibold hover:text-blue-500 transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-sm font-semibold hover:text-blue-500 transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Call Button */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+917695948501"
              onClick={handleCall}
              className="bg-emerald-600 hover:bg-emerald-700 active:scale-95 
                         text-white px-6 py-2.5 rounded-lg font-semibold 
                         flex items-center justify-center gap-2 
                         transition-all duration-200 shadow-md"
            >
              <span className="material-symbols-outlined text-lg leading-none">
                call
              </span>
              <span>Call Now</span>
            </a>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
