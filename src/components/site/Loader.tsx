import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => setDone(true), 1400);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, []);
  useEffect(() => {
    if (done) document.body.style.overflow = "";
  }, [done]);
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-background"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-2xl font-extralight tracking-[-0.04em] text-foreground"
          >
            KENNY
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
