/* =====================================================================
   FPV CONSULTORIA — animações vanilla
   Responsabilidades:
   - Ativar entradas progressivas sem dependências externas
   - Respeitar prefers-reduced-motion
   - Manter fallback visível quando JavaScript estiver indisponível
   ===================================================================== */
(function () {
  "use strict";

  function ready(fn) {
    if (document.readyState !== "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn, { once: true });
  }

  ready(function initMotion() {
    const animated = document.querySelectorAll(
      "[data-anim-fade],[data-anim-slide-up],[data-anim-zoom],[data-anim-stagger]"
    );

    if (!animated.length) return;

    document.documentElement.classList.add("js-anim");

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !("IntersectionObserver" in window)) {
      animated.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    animated.forEach((el) => observer.observe(el));
  });
})();
