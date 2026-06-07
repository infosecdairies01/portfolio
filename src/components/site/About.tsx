import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const easeOut = [0.22, 1, 0.36, 1] as const;

export function About() {
  return (
    <section id="about" className="relative py-[4.5rem] md:py-[6.25rem]">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <SectionHeading eyebrow="ABOUT" title={"WHO\nI AM"} />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: easeOut }}
            className="md:col-span-7 md:pt-12"
          >
            <p className="max-w-xl text-lg font-light leading-relaxed text-muted-foreground md:text-xl">
              I am a cybersecurity entrepreneur and product builder focused on creating
              impactful businesses and software solutions that simplify security and drive innovation.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
