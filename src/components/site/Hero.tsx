import { motion } from "framer-motion";
import portrait from "@/assets/kenny-portrait.png";

const easeOut = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-background pt-28 md:pt-0"
    >
      <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-12 px-6 md:grid-cols-12 md:gap-8 md:px-12">
        {/* Left text */}
        <div className="relative z-10 md:col-span-6">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeOut, delay: 1.4 }}
            className="text-eyebrow text-muted-foreground"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: easeOut, delay: 1.55 }}
            className="mt-6 text-display text-[clamp(2.15rem,6.5vw,6.5rem)] text-foreground"
          >
            <span className="block">KENNY</span>
            <span className="block">POTHURAJU</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: easeOut, delay: 1.95 }}
            className="mt-8 text-[11px] font-medium tracking-[0.3em] text-muted-foreground"
          >
            DIRECTOR · CYBERSECURITY ENTREPRENEUR · PRODUCT BUILDER
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: easeOut, delay: 2.1 }}
            className="mt-8 max-w-lg text-lg font-light leading-[1.7] text-muted-foreground"
          >
            Building cybersecurity businesses and software products that simplify security and drive impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: easeOut, delay: 2.25 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#ventures"
              className="group inline-flex items-center gap-3 border border-foreground/80 px-7 py-4 text-[11px] font-medium tracking-[0.24em] text-foreground transition-all duration-300 hover:bg-foreground hover:text-background"
            >
              EXPLORE
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">↗</span>
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 bg-foreground px-7 py-4 text-[11px] font-medium tracking-[0.24em] text-background transition-all duration-300 hover:bg-foreground/90"
            >
              CONTACT ME
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">↗</span>
            </a>
          </motion.div>
        </div>

        {/* Right portrait — full image, soft edge blend */}
        <div className="relative md:col-span-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4, ease: easeOut, delay: 1.4 }}
            className="relative ml-auto aspect-[4/5] w-full max-w-[720px] -translate-y-8 translate-x-3 overflow-hidden md:-translate-y-10 md:translate-x-6"
          >
            <div className="relative h-full w-full">
              <img
                src={portrait}
                alt="Kenny Pothuraju portrait"
                loading="eager"
                className="absolute inset-0 h-full w-full object-cover grayscale contrast-110 brightness-95"
                style={{
                  objectPosition: "50% 22%",
                  transform: "scale(1.15)",
                  transformOrigin: "50% 30%",
                }}
              />
              {/* Mask */}
              <div
                className="absolute inset-0"
                style={{
                  maskImage: "radial-gradient(ellipse 70% 65% at 50% 38%, black 55%, transparent 100%)",
                  WebkitMaskImage: "radial-gradient(ellipse 70% 65% at 50% 38%, black 55%, transparent 100%)",
                }}
              />
              {/* Soft blend overlays */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse 120% 80% at 55% 40%, transparent 0%, var(--background) 100%)",
                }}
              />
              <div className="pointer-events-none absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-background to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent" />
              <div className="pointer-events-none absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
