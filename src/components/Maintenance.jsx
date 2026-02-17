import { useEffect, useState } from "react";

export default function Maintenance({ onFinish }) {

  const targetDate = new Date("2026-02-17T19:40:00").getTime();

  const calculateTime = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return null;
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTime());

  useEffect(() => {
    const interval = setInterval(() => {
      const remaining = calculateTime();

      if (!remaining) {
        clearInterval(interval);
        onFinish(); // 🔥 clean switch
      } else {
        setTimeLeft(remaining);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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
        We are upgrading our website to serve you better.
        <br className="hidden sm:block" />
        We'll be back very soon!
      </p>

      {/* Countdown */}
      {timeLeft && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">

          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Minutes", value: timeLeft.minutes },
            { label: "Seconds", value: timeLeft.seconds },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/20 rounded-xl p-4 sm:p-5"
            >
              <p className="text-2xl sm:text-3xl font-bold">
                {item.value}
              </p>
              <span className="text-xs sm:text-sm text-slate-300 uppercase tracking-wider">
                {item.label}
              </span>
            </div>
          ))}

        </div>
      )}

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
