import { useEffect } from "react";
import Lenis from "lenis";

let lenisRef: Lenis | null = null;

export function getLenis() {
  return lenisRef;
}

export function scrollToHash(hash: string, offset = -80) {
  const id = hash.replace(/^#/, "");
  const el = document.getElementById(id);
  if (el && lenisRef) {
    lenisRef.scrollTo(el, { offset });
    return true;
  }
  return false;
}

export function SmoothScroll() {
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      autoRaf: true,
    });
    lenisRef = lenis;

    const onAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      const hashMatch = href.match(/#(.+)$/);
      if (!hashMatch) return;

      const hash = hashMatch[1];
      const path = href.split("#")[0] || window.location.pathname;

      if (path && path !== "/" && path !== window.location.pathname) return;

      e.preventDefault();
      scrollToHash(hash);
    };

    document.addEventListener("click", onAnchorClick);

    return () => {
      document.removeEventListener("click", onAnchorClick);
      lenis.destroy();
      lenisRef = null;
    };
  }, []);

  return null;
}
