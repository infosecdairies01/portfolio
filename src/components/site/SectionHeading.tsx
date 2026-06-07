import { motion } from "framer-motion";

const easeOut = [0.22, 1, 0.36, 1] as const;

export function SectionHeading({
  eyebrow,
  title,
  align = "left",
  largeTitle = false,
}: {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
  largeTitle?: boolean;
}) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: easeOut }}
        className={`inline-flex items-center gap-3 ${align === "center" ? "mx-auto" : ""}`}
      >
        <span className="h-px w-10 bg-foreground/60" />
        <span className="text-[10px] font-medium tracking-[0.32em] text-muted-foreground">{eyebrow}</span>
        <span className="h-px w-10 bg-foreground/60" />
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: easeOut, delay: 0.1 }}
        className={
          largeTitle
            ? "mt-8 text-display text-[clamp(2.4rem,7.8vw,7.2rem)] text-foreground"
            : "mt-6 whitespace-pre-line text-display text-[clamp(2rem,5.1vw,4.7rem)] text-foreground"
        }
      >
        {title}
      </motion.h2>
    </div>
  );
}
