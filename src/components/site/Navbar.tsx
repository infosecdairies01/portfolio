import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";

const links = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "VENTURES", href: "/#ventures" },
  { label: "EXPERTISE", href: "/#expertise" },
  { label: "CONTACT", href: "/#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 1.4 }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled || open ? "backdrop-blur-xl bg-background/90" : "bg-transparent"
        }`}
      >
        <nav className="relative mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-12 md:py-6">
          {/* Logo */}
          <Link
            to="/"
            className="text-base font-medium tracking-[-0.02em] text-foreground"
            onClick={() => setOpen(false)}
          >
            KENNY
          </Link>

          {/* Desktop nav */}
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

          {/* Hamburger button — mobile only */}
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="flex h-8 w-8 flex-col items-center justify-center gap-[5px] md:hidden"
          >
            <motion.span
              animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="block h-px w-6 bg-foreground origin-center"
            />
            <motion.span
              animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
              className="block h-px w-6 bg-foreground"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="block h-px w-6 bg-foreground origin-center"
            />
          </button>
        </nav>
        <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-foreground/20" />
      </motion.header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-background md:hidden"
          >
            <ul className="flex flex-col items-center gap-10">
              {links.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: i * 0.07 }}
                >
                  <Link
                    to={l.href}
                    onClick={() => setOpen(false)}
                    className="text-3xl font-light tracking-[0.15em] text-foreground transition-opacity duration-200 hover:opacity-60"
                  >
                    {l.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
