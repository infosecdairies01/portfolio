import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const easeOut = [0.22, 1, 0.36, 1] as const;
const EMAIL = "Kenny@mysoclabs.com";
const GMAIL_COMPOSE_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(EMAIL)}`;

export function Contact() {
  return (
    <section id="contact" className="relative py-[4.5rem] md:py-[6.75rem]">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading eyebrow="CONTACT" title={"LET'S\nCONNECT"} align="center" largeTitle />

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: easeOut, delay: 0.2 }}
            className="mx-auto mt-10 max-w-md text-base font-light leading-relaxed text-muted-foreground"
          >
            Open to collaborations, partnerships and meaningful conversations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: easeOut, delay: 0.3 }}
            className="mt-14 flex flex-wrap items-center justify-center gap-4"
          >
            <a href={GMAIL_COMPOSE_URL} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 bg-foreground px-8 py-4 text-[11px] font-medium tracking-[0.28em] text-background transition-all duration-300 hover:bg-foreground/90">
              EMAIL ME
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">↗</span>
            </a>
            <a href="https://www.linkedin.com/in/kenny-pothuraju/" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 border border-foreground/70 px-8 py-4 text-[11px] font-medium tracking-[0.28em] text-foreground transition-all duration-300 hover:bg-foreground hover:text-background">
              LINKEDIN
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">↗</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-6 px-6 py-10 md:flex-row md:items-center md:px-12">
        <a href="#top" className="text-base font-medium tracking-[-0.02em] text-foreground">
          KENNY
        </a>
        <p className="text-[11px] tracking-[0.22em] text-muted-foreground">
          © 2026 KENNY POTHURAJU. ALL RIGHTS RESERVED.
        </p>
        <div className="flex items-center gap-6 text-[11px] tracking-[0.22em] text-muted-foreground">
          <a href="https://www.linkedin.com/in/kenny-pothuraju/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">LINKEDIN</a>
          <a href={GMAIL_COMPOSE_URL} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">EMAIL</a>
        </div>
      </div>
    </footer>
  );
}
