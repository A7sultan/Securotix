import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import Logo from "@/assets/Frame 2.svg";

interface IntroLoaderProps {
  onFinish: () => void;
}

export const IntroLoader = ({ onFinish }: IntroLoaderProps) => {
  // 🔒 Lock scroll during intro
  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      onFinish();
    }, 2600);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = ""; // restore scroll
    };
  }, [onFinish]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.img
          src={Logo}
          alt="Securotix Logo"
          className="w-40 md:w-56 lg:w-64"
          initial={{ scale: 0.4, opacity: 0 }}
          animate={{
            scale: [0.4, 1.1, 1.1, 18],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 2.6,
            times: [0, 0.25, 0.55, 1],
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </AnimatePresence>
  );
};
