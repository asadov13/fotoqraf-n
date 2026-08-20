import { motion, AnimatePresence } from "framer-motion";

export default function Preloader({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1], delay: 0.15 } }}
        >
          <motion.div
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: "inset(0 0% 0 0)" }}
            exit={{ clipPath: "inset(0 0 0 100%)" }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          >
            <span>[Fotoqrafın Adı]</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
