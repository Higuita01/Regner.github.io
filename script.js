/* ══════════════════════════════════════════════════════════════
   Leandro Regner — Portafolio · Interacciones
   Patrón reveal con IntersectionObserver (igual que EMMA01/js/main.js)
   ══════════════════════════════════════════════════════════════ */

(function () {
  "use strict";

  /* ─────────── Utilidades ─────────── */

  const $ = (selector, contexto = document) => contexto.querySelector(selector);
  const $$ = (selector, contexto = document) => [...contexto.querySelectorAll(selector)];

  /* ─────────── Header fijo al scrollear ─────────── */

  const header = $("#header");

  function actualizarHeader() {
    header.classList.toggle("header--fijo", window.scrollY > 40);
  }

  window.addEventListener("scroll", actualizarHeader, { passive: true });
  actualizarHeader();

  /* ─────────── Menú móvil (hamburguesa) ─────────── */

  const botonMenu = $("#boton-menu");
  const menuMovil = $("#menu-movil");

  function alternarMenu(forzarEstado) {
    const abrir = forzarEstado ?? !document.body.classList.contains("menu-abierto");
    document.body.classList.toggle("menu-abierto", abrir);
    botonMenu.setAttribute("aria-expanded", String(abrir));
    botonMenu.setAttribute("aria-label", abrir ? "Cerrar menú" : "Abrir menú");
    menuMovil.setAttribute("aria-hidden", String(!abrir));
    document.body.style.overflow = abrir ? "hidden" : "";
  }

  botonMenu.addEventListener("click", () => alternarMenu());

  // Al tocar un enlace del menú móvil, se cierra
  $$("a", menuMovil).forEach((enlace) => {
    enlace.addEventListener("click", () => alternarMenu(false));
  });

  // Cerrar con Escape
  document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape" && document.body.classList.contains("menu-abierto")) {
      alternarMenu(false);
    }
  });

  // Cerrar el menú al volver a un ancho de escritorio
  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) alternarMenu(false);
  });

  /* ─────────── Link activo según la sección visible ─────────── */

  const enlacesNav = $$(".nav__link[href^='#']");
  const secciones = $$("main section[id]");

  const observadorSecciones = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        if (!entrada.isIntersecting) return;
        const id = `#${entrada.target.id}`;
        enlacesNav.forEach((enlace) => {
          enlace.classList.toggle("nav__link--activo", enlace.getAttribute("href") === id);
        });
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );

  secciones.forEach((seccion) => observadorSecciones.observe(seccion));

  /* ─────────── Reveal al hacer scroll ─────────── */

  const observadorReveal = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("visible");
          observadorReveal.unobserve(entrada.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  $$(".reveal").forEach((elemento) => observadorReveal.observe(elemento));

  /* ─────────── Año en el footer ─────────── */

  const anio = $("#anio");
  if (anio) anio.textContent = new Date().getFullYear();
})();
