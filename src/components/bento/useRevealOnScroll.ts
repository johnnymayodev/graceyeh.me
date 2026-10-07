import { useEffect, useRef } from "react";

/**
 * Adds .is-visible to .reveal elements inside the returned ref as they
 * scroll into view. Attach the ref to the section containing the reveals.
 */
export function useRevealOnScroll() {
  const observedRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = observedRef.current;
    if (!root) return;
    const els = Array.from(root.querySelectorAll<HTMLElement>(".reveal"));
    if (els.length === 0) return;

    if (!("IntersectionObserver" in window)) {
      els.forEach((el, i) => {
        el.style.transitionDelay = `${i * 90}ms`;
        el.classList.add("is-visible");
      });
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        // Boxes entering in the same batch fade in one by one.
        let i = 0;
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.transitionDelay = `${i * 90}ms`;
            el.classList.add("is-visible");
            io.unobserve(el);
            i++;
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    for (const el of els) io.observe(el);
    return () => io.disconnect();
  }, []);

  return observedRef;
}
