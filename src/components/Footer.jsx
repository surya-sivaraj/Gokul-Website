import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import toast from "react-hot-toast";

const Footer = () => {

  const handleRedirect = (e, message, link) => {
    e.preventDefault();

    toast(message, {
      duration: 1500,
    });

    setTimeout(() => {
      window.open(link, "_blank");
    }, 1000);
  };

  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Company Info */}
          <div>
            <h4 className="text-xl font-bold mb-6">
              GOKUL Mobiles & CCTV
            </h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Your one-stop destination for mobile repairs,
              CCTV security, and electronics services in Dharmapuri.
              Quality work, guaranteed.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-bold mb-6 text-lg">Quick Links</h5>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#home" className="hover:text-blue-500 transition">Home</a></li>
              <li><a href="#services" className="hover:text-blue-500 transition">Services</a></li>
              <li><a href="#about" className="hover:text-blue-500 transition">About Us</a></li>
              <li><a href="#contact" className="hover:text-blue-500 transition">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="font-bold mb-6 text-lg">Our Services</h5>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li>Mobile Screen Repair</li>
              <li>CCTV AMC Service</li>
              <li>Smart TV Troubleshooting</li>
              <li>New Phone Sales</li>
            </ul>
          </div>

          {/* Contact + Social */}
          <div>
            <h5 className="font-bold mb-6 text-lg">Connect With Us</h5>

            <p className="text-slate-400 text-sm mb-6">
              Have a question or need service? Reach out anytime.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mb-6 text-lg">

              <a
                href="https://www.instagram.com/gokulmobiles_cctv/"
                onClick={(e) =>
                  handleRedirect(
                    e,
                    "📸 Opening Instagram...",
                    "https://www.instagram.com/gokulmobiles_cctv/"
                  )
                }
                className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-slate-700 hover:text-pink-500 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="mailto:gokulmobilescctv@gmail.com"
                onClick={(e) =>
                  handleRedirect(
                    e,
                    "✉ Opening Mail...",
                    "mailto:gokulmobilescctv@gmail.com"
                  )
                }
                className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-slate-700 hover:text-blue-500 transition"
              >
                <MdEmail />
              </a>

              <a
                href="https://wa.me/917695948501"
                onClick={(e) =>
                  handleRedirect(
                    e,
                    "🟢 Opening WhatsApp...",
                    "https://wa.me/917695948501"
                  )
                }
                className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-slate-700 hover:text-green-500 transition"
              >
                <FaWhatsapp />
              </a>

            </div>

            <a
              href="tel:917695948501"
              onClick={(e) =>
                handleRedirect(
                  e,
                  "📞 Calling GOKUL Mobiles...",
                  "tel:+917695948501"
                )
              }
              className="flex items-center gap-3 font-semibold hover:text-blue-500 transition"
            >
              📞 +91 7695948501
            </a>

          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} GOKUL Mobiles & CCTV. All rights reserved.</p>
          <p>Designed By Surya S || 
            <a href="mailto:suryasivaraj27@gmail.com" className="hover:text-blue-500 transition"> ✉ suryasivaraj27@gmail.com</a>
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
