import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import Maintenance from "./components/Maintenance";

function App() {

  const [maintenanceOver, setMaintenanceOver] = useState(false);
  const [showLiveMessage, setShowLiveMessage] = useState(false);

  const isMaintenance =
    import.meta.env.VITE_MAINTENANCE_MODE === "true";

  const handleFinish = () => {
    setMaintenanceOver(true);
    setShowLiveMessage(true);

    setTimeout(() => {
      setShowLiveMessage(false);
    }, 4000);
  };

  return (
    <AnimatePresence mode="wait">

      {isMaintenance && !maintenanceOver ? (

        <motion.div
          key="maintenance"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Maintenance onFinish={handleFinish} />
        </motion.div>

      ) : (

        <motion.div
          key="main"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="bg-background-light text-text-dark font-display relative min-h-screen">
            <Toaster position="top-center" />
            <Header />
            <Hero />
            <Services />
            <About />
            <Gallery />
            <Contact />
            <Footer />

            {/* 🚀 Live Notification */}
            <AnimatePresence>
              {showLiveMessage && (
                <motion.div
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 60 }}
                  transition={{ duration: 0.5 }}
                  className="fixed top-6 right-6 
                             bg-green-600 text-white
                             px-6 py-3 rounded-xl shadow-2xl"
                >
                  🚀 We're Live Now!
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </motion.div>

      )}

    </AnimatePresence>
  );
}

export default App;
