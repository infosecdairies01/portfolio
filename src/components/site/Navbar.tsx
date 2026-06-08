import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";

const links = [
  { label: "HOME", href: "/", internal: true },
  { label: "ABOUT", href: "/about", internal: true },
  { label: "VENTURES", href: "/#ventures", internal: true },
  { label: "EXPERTISE", href: "/#expertise", internal: true },
  { label: "CONTACT", href: "/#contact", internal: true },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 1.4 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-xl bg-background/70" : "bg-transparent"
      }`}
    >
      <nav className="relative mx-auto flex max-w-[1400px] items-center px-6 py-5 md:px-12 md:py-6">
        <Link to="/" className="text-base font-medium tracking-[-0.02em] text-foreground">
          KENNY
        </Link>
        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                to={l.href}
                className="group relative text-[12px] font-medium tracking-[0.12em] text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-foreground transition-all duration-500 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-foreground/20" />
    </motion.header>
  );
}
