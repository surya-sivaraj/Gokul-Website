import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Mobile Service",
    message: "",
    time: new Date().toLocaleString(),
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.message) {
      toast.error("Please fill all required fields");
      return;
    }

    setLoading(true);

    emailjs.send(
      "service_jnr4owm",
      "template_bqdgee3",
      formData,
      "trjXHqDdJY_uCnWDe"
    )
    .then(() => {
      toast.success("Message sent successfully ✅");

      setFormData({
        name: "",
        phone: "",
         email: "",
        service: "Mobile Service",
        message: "",
      });
    })
    .catch(() => {
      toast.error("Failed to send message ❌");
    })
    .finally(() => {
      setLoading(false);
    });
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT INFO */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Get In Touch
            </h2>

            <div className="space-y-6">

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Visit Our Shop</h4>
                  <p className="text-slate-600">
                    Gokul Mobiles & CCTV,<br/>
                    Begarahalli Main Road, Periyampatti,
                     Dharmapuri,<br/>
                    Tamil Nadu - 635305
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Call for Support</h4>
                  <p className="text-slate-600">+91 7695948501</p>
                  <p className="text-slate-600">+91 7449077343</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                  <span className="material-symbols-outlined">schedule</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Business Hours</h4>
                  <p className="text-slate-600">
                    Mon - Sat: 9:30 AM - 8:30 PM<br/>
                    Sun: Closed
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT FORM */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-3xl shadow-xl space-y-6"
          >
            <h3 className="text-xl font-bold text-slate-900">
              For Enquiries, Contact Us
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-slate-300 rounded-xl 
                           focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your mobile number"
                className="w-full px-4 py-3 border border-slate-300 rounded-xl 
                           focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
              <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email Address"
              className="w-full px-4 py-3 border border-slate-300 rounded-xl 
                           focus:outline-none focus:ring-2 focus:ring-blue-500"
            />


            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-slate-300 rounded-xl 
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Mobile Service</option>
              <option>CCTV Installation</option>
              <option>LED TV Repair</option>
              <option>General Inquiry</option>
            </select>

            <textarea
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="How can we help you?"
              className="w-full px-4 py-3 border border-slate-300 rounded-xl 
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 
                         text-white py-3 rounded-xl font-semibold 
                         shadow-md transition duration-300"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* MAP */}
        <div className="mt-12">
          <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-200">
           <iframe
  title="Location Map"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3904.611607246076!2d78.15773157482678!3d12.127065788110038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac17fbbd8c0001%3A0x9c8a2c5e0d8c0001!2sBegarahalli%20Main%20Road%2C%20Periyampatti%2C%20Dharmapuri%2C%20Tamil%20Nadu%20635305!5e0!3m2!1sen!2sin!4v1739980000000!5m2!1sen!2sin"
  className="w-full h-80 rounded-3xl"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
