import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Shield, Activity, Bug, Code2, Compass, Users } from "lucide-react";

const easeOut = [0.22, 1, 0.36, 1] as const;

const items = [
  { n: "01", t: "SOC Operations", d: "24/7 monitoring, detection and response engineered for clarity and speed.", Icon: Activity },
  { n: "02", t: "Managed Security", d: "End to end security operations delivered as a long term partnership.", Icon: Shield },
  { n: "03", t: "VAPT", d: "Vulnerability assessment and penetration testing rooted in adversarial thinking.", Icon: Bug },
  { n: "04", t: "Product Development", d: "Designing and shipping software that turns security into a product.", Icon: Code2 },
  { n: "05", t: "Security Consulting", d: "Strategy, architecture and program building for resilient organizations.", Icon: Compass },
  { n: "06", t: "Leadership", d: "Building and leading high trust teams across security and engineering.", Icon: Users },
];

export function Expertise() {
  return (
    <section id="expertise" className="relative py-[4.5rem] md:py-[6.75rem]">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow="EXPERTISE" title="WHAT I DO" />
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: easeOut, delay: 0.15 }}
            className="max-w-sm text-base font-light leading-[1.75] text-muted-foreground md:text-right"
          >
            Core capabilities across security operations, consulting and product building.
          </motion.p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-7 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.article
              key={it.n}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={{
                hidden: { opacity: 0, y: 32 },
                visible: (index: number) => ({
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.85,
                    ease: easeOut,
                    delay: index * 0.1,
                  },
                }),
              }}
              whileHover={{
                y: -6,
                transition: { duration: 0.45, ease: easeOut },
              }}
              className="group relative flex min-h-[268px] flex-col overflow-hidden rounded-2xl border border-hairline bg-card p-8 transition-[border-color,box-shadow] duration-500 hover:border-foreground/25 md:min-h-[292px] md:p-10"
            >
              {/* Hover glow */}
              <motion.div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(120% 80% at 50% 0%, rgba(255,255,255,0.06) 0%, transparent 55%)",
                }}
              />
              <motion.div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 shadow-[0_20px_60px_rgba(255,255,255,0.06)] transition-opacity duration-500 group-hover:opacity-100"
              />

              <div className="relative flex items-start justify-between">
                <motion.div
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-hairline bg-background/40 transition-colors duration-500 group-hover:border-foreground/35 group-hover:bg-elevated"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.35, ease: easeOut }}
                >
                  <it.Icon
                    className="h-[18px] w-[18px] text-foreground/75 transition-colors duration-500 group-hover:text-foreground"
                    strokeWidth={1.25}
                  />
                </motion.div>
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: easeOut, delay: 0.2 + i * 0.08 }}
                  className="text-[10px] font-medium tracking-[0.32em] text-muted-foreground transition-colors duration-500 group-hover:text-foreground/70"
                >
                  {it.n}
                </motion.span>
              </div>

              <div className="relative mt-auto pt-10">
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: easeOut, delay: 0.25 + i * 0.08 }}
                  className="text-display text-2xl text-foreground transition-colors duration-500 group-hover:text-foreground md:text-[1.65rem] md:leading-[1.1]"
                >
                  {it.t}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: easeOut, delay: 0.32 + i * 0.08 }}
                  className="mt-4 text-sm font-light leading-[1.8] text-muted-foreground transition-colors duration-500 group-hover:text-muted-foreground/90 md:text-[15px]"
                >
                  {it.d}
                </motion.p>
                <motion.span
                  aria-hidden
                  className="mt-6 block h-px w-0 bg-foreground/40 transition-all duration-500 group-hover:w-10"
                />
              </div>

              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
