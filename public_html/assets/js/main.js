/* =====================================================================
   FPV CONSULTORIA EMPRESARIAL — JavaScript principal (vanilla)
   Responsabilidades:
   - Header sticky com shadow ao scroll
   - Menu mobile (abertura/fechamento + accessibility)
   - Active nav link via IntersectionObserver
   - FAQ accordion (com transição altura suave)
   - Formulário de leads com envio organizado para WhatsApp
   - Ocultação do WhatsApp flutuante na dobra de contato
   - Reposicionamento inicial de âncoras após layout
   - Reveal-on-scroll
   - Ano dinâmico no rodapé
   ===================================================================== */
(function () {
  "use strict";

  function onReady(fn) {
    if (document.readyState !== "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn, { once: true });
  }

  onReady(function init() {
    const header    = document.getElementById("header");
    const hamburger = document.getElementById("hamburger");
    const mobileNav = document.getElementById("mobileNav");
    const mobileLinks = mobileNav ? mobileNav.querySelectorAll("a") : [];

    /* ---------- Header scroll ---------- */
    const syncHeader = () => {
      if (!header) return;
      header.classList.toggle("scrolled", window.scrollY > 80);
    };
    syncHeader();
    window.addEventListener("scroll", syncHeader, { passive: true });

    /* ---------- Hash inicial pós-layout ---------- */
    if (window.location.hash) {
      const syncInitialHash = () => {
        const targetId = window.location.hash.slice(1);
        const target = targetId ? document.getElementById(targetId) : null;
        if (target) target.scrollIntoView({ block: "start" });
      };
      window.requestAnimationFrame(syncInitialHash);
      window.setTimeout(syncInitialHash, 650);
    }

    /* ---------- Mobile menu ---------- */
    if (hamburger && mobileNav) {
      const closeMenu = () => {
        mobileNav.classList.remove("open");
        hamburger.setAttribute("aria-expanded", "false");
        hamburger.setAttribute("aria-label", "Abrir menu");
        document.body.classList.remove("menu-open");
      };

      hamburger.addEventListener("click", () => {
        const isOpen = mobileNav.classList.toggle("open");
        hamburger.setAttribute("aria-expanded", String(isOpen));
        hamburger.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
        document.body.classList.toggle("menu-open", isOpen);
      });

      mobileLinks.forEach((link) => link.addEventListener("click", closeMenu));

      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && mobileNav.classList.contains("open")) closeMenu();
      });
    }

    /* ---------- FAQ accordion ---------- */
    document.querySelectorAll(".faq-question").forEach((btn) => {
      btn.addEventListener("click", () => {
        const item = btn.closest(".faq-item");
        if (!item) return;
        const isOpen = item.classList.contains("active");

        document.querySelectorAll(".faq-item").forEach((other) => {
          other.classList.remove("active");
          const otherBtn = other.querySelector(".faq-question");
          const otherAnswer = other.querySelector(".faq-answer");
          if (otherBtn) otherBtn.setAttribute("aria-expanded", "false");
          if (otherAnswer) otherAnswer.style.maxHeight = null;
        });

        if (!isOpen) {
          item.classList.add("active");
          btn.setAttribute("aria-expanded", "true");
          const answer = item.querySelector(".faq-answer");
          if (answer) answer.style.maxHeight = answer.scrollHeight + "px";
        }
      });
    });

    /* ---------- Lead form para WhatsApp ---------- */
    const leadForm = document.getElementById("leadForm");
    if (leadForm) {
      const whatsappNumber = "5511997361011";
      const sanitizeValue = (value, maxLength) => String(value || "")
        .replace(/[<>{}[\]`]/g, "")
        .replace(/[\u0000-\u001F\u007F]/g, " ")
        .replace(/\s+/g, " ")
        .trim()
        .slice(0, maxLength);
      const getValue = (name, maxLength = 180) => {
        const field = leadForm.elements[name];
        return field ? sanitizeValue(field.value, maxLength) : "";
      };

      leadForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = getValue("name", 120);
        const email = getValue("email", 140);
        const phone = getValue("phone", 40);
        const company = getValue("company", 140);
        const cnpj = getValue("cnpj", 32) || "Não informado";
        const interest = getValue("interest", 80);
        const message = getValue("message", 500);

        const lines = [
          "Olá, FPV Consultoria. Gostaria de solicitar um orçamento.",
          "",
          "*Dados do lead:*",
          `Nome: ${name}`,
          `E-mail: ${email}`,
          `WhatsApp: ${phone}`,
          `Empresa: ${company}`,
          `CNPJ: ${cnpj}`,
          `Área de interesse: ${interest}`
        ];

        if (message) {
          lines.push("", "*Mensagem:*", message);
        }

        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`;
        window.location.href = whatsappUrl;
      });
    }

    /* ---------- WhatsApp flutuante fora do formulário ---------- */
    const floatingWhatsApp = document.querySelector(".floating-whatsapp");
    const contactSection = document.getElementById("contato");
    if (floatingWhatsApp && contactSection) {
      const syncFloatingWhatsApp = () => {
        const rect = contactSection.getBoundingClientRect();
        const isContactVisible = rect.top < window.innerHeight && rect.bottom > 0;
        floatingWhatsApp.classList.toggle("is-hidden", isContactVisible);
      };
      syncFloatingWhatsApp();
      window.requestAnimationFrame(syncFloatingWhatsApp);
      window.setTimeout(syncFloatingWhatsApp, 350);
      window.addEventListener("scroll", syncFloatingWhatsApp, { passive: true });
      window.addEventListener("resize", syncFloatingWhatsApp);
      window.addEventListener("hashchange", syncFloatingWhatsApp);
    }

    /* ---------- Active nav (IntersectionObserver) ---------- */
    const navLinks = document.querySelectorAll(".desktop-nav .nav-link");
    const sections = Array.from(navLinks)
      .map((link) => {
        const href = link.getAttribute("href") || "";
        return href.startsWith("#") ? document.querySelector(href) : null;
      })
      .filter(Boolean);

    if ("IntersectionObserver" in window && sections.length) {
      const navObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            navLinks.forEach((link) => {
              link.classList.toggle(
                "active",
                link.getAttribute("href") === "#" + entry.target.id
              );
            });
          });
        },
        { rootMargin: "-45% 0px -50% 0px", threshold: 0.01 }
      );
      sections.forEach((section) => navObserver.observe(section));
    }

    /* ---------- Reveal on scroll ---------- */
    const revealEls = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window) {
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("active");
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );
      revealEls.forEach((el) => revealObserver.observe(el));
    } else {
      revealEls.forEach((el) => el.classList.add("active"));
    }

    /* ---------- Year dinâmico ---------- */
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());
  });
})();
