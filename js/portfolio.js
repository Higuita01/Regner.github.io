/* ══════════════════════════════════════════════════════════════
   Portfolio — Interacciones
   ══════════════════════════════════════════════════════════════ */

(function () {
  "use strict";

  /* ─────────── Utilidades ─────────── */

  const $ = (selector, contexto = document) => contexto.querySelector(selector);
  const $$ = (selector, contexto = document) => [...contexto.querySelectorAll(selector)];

  /* ─────────── Header fijo al hacer scroll ─────────── */

  const header = $("#header");

  function actualizarHeader() {
    header.classList.toggle("header--fijo", window.scrollY > 40);
  }

  window.addEventListener("scroll", actualizarHeader, { passive: true });
  actualizarHeader();

  /* ─────────── Menú móvil ─────────── */

  const botonMenu = $("#boton-menu");
  const menuMovil = $("#menu-movil");

  function cerrarMenu() {
    document.body.classList.remove("menu-abierto", "sin-scroll");
    botonMenu.setAttribute("aria-expanded", "false");
    menuMovil.setAttribute("aria-hidden", "true");
  }

  botonMenu.addEventListener("click", () => {
    const abierto = document.body.classList.toggle("menu-abierto");
    document.body.classList.toggle("sin-scroll", abierto);
    botonMenu.setAttribute("aria-expanded", String(abierto));
    menuMovil.setAttribute("aria-hidden", String(!abierto));
  });

  // Cerrar el menú al elegir un destino
  $$("a", menuMovil).forEach((enlace) => {
    enlace.addEventListener("click", cerrarMenu);
  });

  // Cerrar con la tecla Escape
  document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape") cerrarMenu();
  });

  /* ─────────── Link activo del nav según la sección ─────────── */

  const enlacesNav = $$(".nav__link");
  const secciones = enlacesNav
    .map((enlace) => $(enlace.getAttribute("href")))
    .filter(Boolean);

  function actualizarLinkActivo() {
    const margen = window.innerHeight * 0.35;
    let seccionActiva = secciones[0];

    secciones.forEach((seccion) => {
      if (seccion.getBoundingClientRect().top <= margen) seccionActiva = seccion;
    });

    enlacesNav.forEach((enlace) => {
      const activo = enlace.getAttribute("href") === `#${seccionActiva.id}`;
      enlace.classList.toggle("nav__link--activo", activo);
    });
  }

  window.addEventListener("scroll", actualizarLinkActivo, { passive: true });
  actualizarLinkActivo();

  /* ─────────── Animaciones de aparición al hacer scroll ─────────── */

  const observador = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("visible");
          observador.unobserve(entrada.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  $$(".reveal").forEach((elemento) => observador.observe(elemento));

  /* ─────────── Formulario de contacto ─────────── */

  const formulario = $("#formulario");
  const errorFormulario = $("#error-formulario");
  const exitoFormulario = $("#exito-formulario");

  // El formulario no tiene servidor: arma un mensaje de WhatsApp con los datos.
  formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nombre = $("#nombre").value.trim();
    const email = $("#email").value.trim();
    const mensaje = $("#mensaje").value.trim();
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (nombre.length < 2) {
      errorFormulario.textContent = "Contame tu nombre, por favor.";
      errorFormulario.hidden = false;
      $("#nombre").focus();
      return;
    }

    if (!emailValido) {
      errorFormulario.textContent = "Ese email no parece válido. Revisalo.";
      errorFormulario.hidden = false;
      $("#email").focus();
      return;
    }

    if (mensaje.length < 10) {
      errorFormulario.textContent = "Contame un poco más: ¿qué necesitás? (mínimo 10 caracteres)";
      errorFormulario.hidden = false;
      $("#mensaje").focus();
      return;
    }

    errorFormulario.hidden = true;

    const texto = encodeURIComponent(
      `Hola Leandro, soy ${nombre} (${email}).\n\n${mensaje}`
    );

    // Abre WhatsApp con el mensaje ya escrito
    window.open(`https://wa.me/543404622589?text=${texto}`, "_blank", "noopener");

    formulario.hidden = true;
    exitoFormulario.hidden = false;
  });

  // Ocultar el error apenas el usuario vuelve a escribir
  ["#nombre", "#email", "#mensaje"].forEach((selector) => {
    $(selector).addEventListener("input", () => {
      errorFormulario.hidden = true;
    });
  });

  /* ─────────── Año en el footer ─────────── */

  const anio = $("#anio");
  if (anio) anio.textContent = new Date().getFullYear();
})();
