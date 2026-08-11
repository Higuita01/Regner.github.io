/* ══════════════════════════════════════════════════════════════
   LUMA — Interacciones
   ══════════════════════════════════════════════════════════════ */

(function () {
  "use strict";

  /* ─────────── Utilidades ─────────── */

  const $ = (selector, contexto = document) => contexto.querySelector(selector);
  const $$ = (selector, contexto = document) => [...contexto.querySelectorAll(selector)];

  const generarHTMLTarjeta = (producto) => `
    <article class="tarjeta" data-id="${producto.id}">
      <div class="tarjeta__imagen">
        ${producto.nuevo ? '<span class="tarjeta__badge">Nuevo</span>' : ""}
        <img src="${imagenUnsplash(producto.img, 900)}" alt="${producto.nombre}" loading="lazy" decoding="async" />
      </div>
      <p class="tarjeta__categoria">${producto.categoria}</p>
      <h3 class="tarjeta__nombre">${producto.nombre}</h3>
      <p class="tarjeta__precio">${formatearPrecio(producto.precio)}</p>
      <button class="tarjeta__boton" data-ver-producto="${producto.id}">Ver producto</button>
    </article>
  `;

  /* ─────────── Render de grillas por género ─────────── */

  const grillasGenero = {};
  $$(".grid-productos").forEach((grilla) => {
    grillasGenero[grilla.dataset.genero] = grilla;
  });

  function renderizarGrilla(genero, filtro) {
    const grilla = grillasGenero[genero];
    const filtroTodo = genero === "accesorios" ? "Todos" : "Todas";
    if (!filtro) filtro = filtroTodo;

    const productos = PRODUCTOS.filter(
      (p) => p.genero === genero && (filtro === filtroTodo || p.categoria === filtro)
    );

    grilla.innerHTML = productos.map(generarHTMLTarjeta).join("");
  }

  // Render inicial
  Object.keys(grillasGenero).forEach((genero) => renderizarGrilla(genero));

  /* ─────────── Filtros por categoría (pills) ─────────── */

  $$(".pills").forEach((grupo) => {
    const genero = grupo.dataset.pills;
    grupo.addEventListener("click", (evento) => {
      const pill = evento.target.closest(".pill");
      if (!pill) return;

      $$(".pill", grupo).forEach((p) => p.classList.remove("pill--activa"));
      pill.classList.add("pill--activa");
      renderizarGrilla(genero, pill.dataset.filtro);
    });
  });

  /* ─────────── Grilla de la nueva colección ─────────── */

  function renderizarNuevaColeccion() {
    const grilla = $("#grid-nueva");
    const nuevos = PRODUCTOS.filter((p) => p.nuevo);

    const html = nuevos
      .map((producto, indice) => {
        const grande = indice === 0 ? " tarjeta--grande" : "";
        return `
          <article class="tarjeta${grande}" data-id="${producto.id}">
            <div class="tarjeta__imagen">
              <span class="tarjeta__badge">Nuevo</span>
              <img src="${imagenUnsplash(producto.img, grande ? 1400 : 900)}" alt="${producto.nombre}" loading="lazy" decoding="async" />
            </div>
            <h3 class="tarjeta__nombre">${producto.nombre}</h3>
            <button class="tarjeta__boton" data-ver-producto="${producto.id}">Ver producto</button>
          </article>
        `;
      })
      .join("");

    grilla.innerHTML = html;
  }

  renderizarNuevaColeccion();

  /* ─────────── Modal de producto ─────────── */

  const modal = $("#modal-producto");
  const modalDialogo = $(".modal__dialogo");
  const modalImg = $("#modal-img");
  const modalCategoria = $("#modal-categoria");
  const modalTitulo = $("#modal-titulo");
  const modalPrecio = $("#modal-precio");
  const modalDescripcion = $("#modal-descripcion");

  let ultimoFoco = null; // el botón que abrió el modal, para devolverle el foco

  const buscarProducto = (id) => PRODUCTOS.find((p) => p.id === Number(id));

  function abrirModal(id) {
    const producto = buscarProducto(id);
    if (!producto) return;
    ultimoFoco = document.activeElement;

    modalImg.src = imagenUnsplash(producto.img, 1000);
    modalImg.alt = producto.nombre;
    modalCategoria.textContent = `${producto.genero === "mujer" ? "Mujer" : producto.genero === "hombre" ? "Hombre" : "Accesorios"} · ${producto.categoria}`;
    modalTitulo.textContent = producto.nombre;
    modalPrecio.textContent = formatearPrecio(producto.precio);
    modalDescripcion.textContent = producto.descripcion;

    modal.hidden = false;
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => {
      modal.classList.add("modal--abierto");
      modalDialogo.focus(); // lleva el foco al diálogo al abrir
    });
  }

  function cerrarModal() {
    modal.classList.remove("modal--abierto");
    document.body.style.overflow = "";
    // Deja que termine la transición antes de ocultar
    setTimeout(() => {
      modal.hidden = true;
      if (ultimoFoco && typeof ultimoFoco.focus === "function") ultimoFoco.focus();
    }, 350);
  }

  // Delegación: cualquier botón "Ver producto"
  document.addEventListener("click", (evento) => {
    const boton = evento.target.closest("[data-ver-producto]");
    if (boton) abrirModal(boton.dataset.verProducto);
  });

  // Cerrar: fondo, X, ESC, o el botón "Consultar disponibilidad" (ancla al contacto)
  $$("[data-cerrar-modal]").forEach((elemento) => {
    elemento.addEventListener("click", cerrarModal);
  });

  document.addEventListener("keydown", (evento) => {
    if (evento.key !== "Escape") return;
    if (!modal.hidden) {
      cerrarModal();
    } else if (document.body.classList.contains("menu-abierto")) {
      alternarMenu(false);
    }
  });

  /* ─────────── Menú móvil ─────────── */

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

  /* ─────────── Header fijo + link activo ─────────── */

  const header = $("#header");

  function actualizarHeader() {
    header.classList.toggle("header--fijo", window.scrollY > 40);
  }

  window.addEventListener("scroll", actualizarHeader, { passive: true });
  actualizarHeader();

  // Resaltar la sección visible en el menú
  const secciones = $$("main section[id]");
  const enlacesNav = $$(".nav__link");

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

  /* ─────────── Formulario de contacto ─────────── */

  const formulario = $("#formulario");
  const errorFormulario = $("#error-formulario");
  const exitoFormulario = $("#exito-formulario");

  formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nombre = $("#nombre").value.trim();
    const email = $("#email").value.trim();
    const mensaje = $("#mensaje").value.trim();
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (nombre.length < 2) {
      errorFormulario.textContent = "Contanos tu nombre, por favor.";
      errorFormulario.hidden = false;
      return;
    }
    if (!emailValido) {
      errorFormulario.textContent = "El email no parece válido. Revisalo y probá de nuevo.";
      errorFormulario.hidden = false;
      return;
    }
    if (mensaje.length < 10) {
      errorFormulario.textContent = "Tu mensaje es muy corto. Contanos un poquito más.";
      errorFormulario.hidden = false;
      return;
    }

    errorFormulario.hidden = true;
    formulario.hidden = true;
    exitoFormulario.hidden = false;
  });

  // Al volver a editar, ocultamos el error
  $$("input, textarea", formulario).forEach((campo) => {
    campo.addEventListener("input", () => {
      errorFormulario.hidden = true;
    });
  });

  /* ─────────── Año en el footer ─────────── */

  const anio = $("#anio");
  if (anio) anio.textContent = new Date().getFullYear();
})();
