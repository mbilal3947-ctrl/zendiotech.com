
(() => {
  const body = document.body;
  const root = document.documentElement;
  const header = document.querySelector(".site-header");
  const menu = document.querySelector("#menuToggle");
  const nav = document.querySelector("#navLinks");
  const lang = document.querySelector("#languageToggle");

  const sticky = () => header?.classList.toggle("scrolled", window.scrollY > 18);
  sticky();
  window.addEventListener("scroll", sticky, {passive:true});

  if (menu && nav) {
    menu.addEventListener("click", () => {
      const open = menu.classList.toggle("active");
      nav.classList.toggle("active", open);
      menu.setAttribute("aria-expanded", String(open));
      body.classList.toggle("menu-open", open);
    });
    nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
      menu.classList.remove("active");
      nav.classList.remove("active");
      menu.setAttribute("aria-expanded","false");
      body.classList.remove("menu-open");
    }));
  }

  const reveal = document.querySelectorAll(".reveal, .scroll-reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show","is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, {threshold:.12});
    reveal.forEach(el => observer.observe(el));
  } else reveal.forEach(el => el.classList.add("show","is-visible"));

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fine = window.matchMedia("(pointer:fine)").matches;

  if (!reduced && fine) {
    document.querySelectorAll(".card,.service-card,.why-card,.about-capability-card,.about-value-card,.about-why-card,.roadmap-item,.process-list li").forEach(card => {
      card.addEventListener("pointermove", e => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX-r.left)/r.width-.5;
        const y = (e.clientY-r.top)/r.height-.5;
        card.style.transform = `perspective(900px) rotateX(${(-y*4).toFixed(2)}deg) rotateY(${(x*5).toFixed(2)}deg) translateY(-5px)`;
      });
      card.addEventListener("pointerleave", () => card.style.transform = "");
    });

    document.querySelectorAll(".hero-visual .orbital,.tech-visual .orbital,.hero-graphic .orbital").forEach(orb => {
      window.addEventListener("pointermove", e => {
        const x=e.clientX/window.innerWidth-.5;
        const y=e.clientY/window.innerHeight-.5;
        orb.style.transform=`translate3d(${x*9}px,${y*7}px,0) rotateX(${y*-3}deg) rotateY(${x*4}deg)`;
      }, {passive:true});
    });
  }

  // Global Arabic UI toggle for navigation and primary CTA labels.
  const ar = {
    Home:"الرئيسية", About:"من نحن", Services:"الخدمات", Industries:"القطاعات",
    "How We Work":"كيف نعمل", Roadmap:"خارطة الطريق", Contact:"تواصل معنا",
    "Start a Conversation":"ابدأ محادثة", "Start a conversation":"ابدأ محادثة",
    "Explore Services":"استكشف الخدمات", "Explore services":"استكشف الخدمات",
    "Explore Our Process":"استكشف منهجنا", "Explore our process":"استكشف منهجنا"
  };
  let arabic = false;
  if (lang) {
    const items = [...nav.querySelectorAll("a"), ...document.querySelectorAll(".btn")];
    lang.addEventListener("click", () => {
      arabic = !arabic;
      root.lang = arabic ? "ar" : "en";
      root.dir = arabic ? "rtl" : "ltr";
      lang.textContent = arabic ? "English" : "العربية";
      items.forEach(el => {
        const key = el.textContent.trim();
        if (!el.dataset.en) el.dataset.en = key;
        el.textContent = arabic ? (ar[el.dataset.en] || el.dataset.en) : el.dataset.en;
      });
    });
  }

  // Front-end contact form behavior. No data is sent until a secure backend is connected.
  const form = document.querySelector("#contact-form");
  const status = document.querySelector("#form-status") || document.querySelector("#status");
  if (form && status) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      status.textContent = "Thanks — your enquiry is ready to be connected to the secure submission backend.";
      form.reset();
    });
  }

  document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());
})();
