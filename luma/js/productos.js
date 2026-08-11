/*
 * LUMA — Catálogo ficticio de productos.
 * Cada producto: id, nombre, categoria, genero, precio (ARS), descripcion,
 * imagen (id de Unsplash) y si pertenece a la nueva colección (nuevo).
 */
const PRODUCTOS = [
  // ────────────────────────── MUJER ──────────────────────────
  {
    id: 1,
    nombre: "Remera Básica de Algodón Peinado",
    categoria: "Remeras y tops",
    genero: "mujer",
    precio: 28900,
    descripcion:
      "Algodón peinado de 240 gr con corte clásico y caída perfecta. La base de todo armario, confeccionada para durar.",
    img: "1521572163474-6864f9cf17ab",
    nuevo: false,
  },
  {
    id: 2,
    nombre: "Top Corset de Lino",
    categoria: "Remeras y tops",
    genero: "mujer",
    precio: 34500,
    descripcion:
      "Lino puro con estructura sutil y espalda abierta. Frescura con actitud, ideal para las tardes de verano.",
    img: "1618932260643-eee4a2f652a6",
    nuevo: false,
  },
  {
    id: 3,
    nombre: "Camisa Oversize de Popelina",
    categoria: "Camisas",
    genero: "mujer",
    precio: 58900,
    descripcion:
      "Popelina de algodón con volumen controlado y caída limpia. Pensada para usarla suelta o anudada a la cintura.",
    img: "1596755094514-f87e34085b2c",
    nuevo: false,
  },
  {
    id: 4,
    nombre: "Camisa de Seda Crepé",
    categoria: "Camisas",
    genero: "mujer",
    precio: 72000,
    descripcion:
      "Seda crepé con caída fluida y brillo discreto. Elegancia que funciona del día a la noche sin escalas.",
    img: "1434389677669-e08b4cac3105",
    nuevo: true,
  },
  {
    id: 5,
    nombre: "Pantalón Palazzo de Lino",
    categoria: "Pantalones",
    genero: "mujer",
    precio: 64500,
    descripcion:
      "Tiro alto, pierna ancha y lino lavado a la piedra. Frescura que camina, con la fluidez de un vestido.",
    img: "1529139574466-a303027c1d8b",
    nuevo: false,
  },
  {
    id: 6,
    nombre: "Pantalón Cargo Satinado",
    categoria: "Pantalones",
    genero: "mujer",
    precio: 69900,
    descripcion:
      "Satinado con caída pesada y bolsillos funcionales. Lo urbano, en su versión más suave y luminosa.",
    img: "1485968579580-b6d095142e6e",
    nuevo: false,
  },
  {
    id: 7,
    nombre: "Jean Mom Fit",
    categoria: "Jeans",
    genero: "mujer",
    precio: 74900,
    descripcion:
      "Denim rígido con tiro alto y pierna recta. El clásico que nunca falla, con el lavado justo.",
    img: "1541099649105-f69ad21f3246",
    nuevo: false,
  },
  {
    id: 8,
    nombre: "Jean Baggy Lavado Ácido",
    categoria: "Jeans",
    genero: "mujer",
    precio: 79900,
    descripcion:
      "Corte holgado, lavado ácido suave y cintura definida. Actitud noventosa revisitada con sastrería contemporánea.",
    img: "1551028719-00167b16eac5",
    nuevo: true,
  },
  {
    id: 9,
    nombre: "Vestido Midi de Seda",
    categoria: "Vestidos",
    genero: "mujer",
    precio: 89900,
    descripcion:
      "Seda lavada con caída líquida y escote drapeado. Un vestido que no necesita más que vos.",
    img: "1595777457583-95e059d581b8",
    nuevo: true,
  },
  {
    id: 10,
    nombre: "Vestido Halter de Algodón",
    categoria: "Vestidos",
    genero: "mujer",
    precio: 68500,
    descripcion:
      "Cuello halter y algodón suave de trama abierta. Simple, fresco y veraniego, como tiene que ser.",
    img: "1572804013309-59a88b7e92f1",
    nuevo: false,
  },
  {
    id: 11,
    nombre: "Falda Midi Plisada",
    categoria: "Faldas",
    genero: "mujer",
    precio: 52900,
    descripcion:
      "Plisado fino que acompaña cada movimiento. De la oficina al after, sin escalas.",
    img: "1583496661160-fb5886a0aaaa",
    nuevo: false,
  },
  {
    id: 12,
    nombre: "Blazer Estructurado",
    categoria: "Abrigos",
    genero: "mujer",
    precio: 98900,
    descripcion:
      "Sastrería ligera con hombros marcados y cintura trabajada. Poder silencioso, en su estado más puro.",
    img: "1591047139829-d91aecb6caea",
    nuevo: false,
  },
  {
    id: 13,
    nombre: "Gabardina Camel",
    categoria: "Abrigos",
    genero: "mujer",
    precio: 119900,
    descripcion:
      "Gabardina clásica con cinturón y solapa generosa. La pieza que termina un look antes de salir.",
    img: "1548883354-7622d03aca27",
    nuevo: false,
  },
  {
    id: 33,
    nombre: "Cardigan de Punto Grueso",
    categoria: "Abrigos",
    genero: "mujer",
    precio: 59900,
    descripcion:
      "Punto grueso de lana reciclada con botones de madera. Abrigo sin esfuerzo, para los días que piden calma.",
    img: "1490114538077-0a7f8cb49891",
    nuevo: true,
  },

  // ────────────────────────── HOMBRE ──────────────────────────
  {
    id: 14,
    nombre: "Remera Clásica de Algodón",
    categoria: "Remeras",
    genero: "hombre",
    precio: 26900,
    descripcion:
      "Algodón peinado de 220 gr con cuello reforzado y costuras dobles. Simple, y para siempre.",
    img: "1576566588028-4147f3842f27",
    nuevo: false,
  },
  {
    id: 15,
    nombre: "Remera Polo Piqué",
    categoria: "Remeras",
    genero: "hombre",
    precio: 38900,
    descripcion:
      "Piqué de algodón con cuello a medida y toque fresco. De la oficina al sábado sin cambiar de plan.",
    img: "1602810318383-e386cc2a3ccf",
    nuevo: true,
  },
  {
    id: 16,
    nombre: "Camisa Oxford",
    categoria: "Camisas",
    genero: "hombre",
    precio: 56900,
    descripcion:
      "Oxford de algodón con botones en el cuello. El básico serio, sin aburrir.",
    img: "1516257984-b1b4d707412e",
    nuevo: false,
  },
  {
    id: 17,
    nombre: "Camisa de Lino Veraniega",
    categoria: "Camisas",
    genero: "hombre",
    precio: 61500,
    descripcion:
      "Lino y algodón en partes iguales. Respira donde vos respirás, y se arruga con gracia.",
    img: "1598033129183-c4f50c736f10",
    nuevo: false,
  },
  {
    id: 18,
    nombre: "Pantalón Chino Slim",
    categoria: "Pantalones",
    genero: "hombre",
    precio: 54900,
    descripcion:
      "Gabarina con elasticidad sutil y corte afilado. Comodidad con forma, todo el día.",
    img: "1524594152303-9fd13543fe6e",
    nuevo: false,
  },
  {
    id: 19,
    nombre: "Jean Skinny Raw",
    categoria: "Jeans",
    genero: "hombre",
    precio: 72900,
    descripcion:
      "Denim crudo que se amolda a tu cuerpo con el uso. Se usa, se vive, se personaliza.",
    img: "1576995853123-5a10305d93c0",
    nuevo: false,
  },
  {
    id: 20,
    nombre: "Jean Recto Lavado Medio",
    categoria: "Jeans",
    genero: "hombre",
    precio: 76900,
    descripcion:
      "Pierna recta y lavado medio parejo. El jean de todos los días, con la carga justa de carácter.",
    img: "1542272604-787c3835535d",
    nuevo: false,
  },
  {
    id: 21,
    nombre: "Buzo Oversize de Felpa",
    categoria: "Buzos",
    genero: "hombre",
    precio: 64900,
    descripcion:
      "Felpa francesa de 400 gr con capucha amplia. El abrazo que se puede usar y llevar puesto.",
    img: "1556821840-3a63f95609a7",
    nuevo: true,
  },
  {
    id: 22,
    nombre: "Campera Trucker Denim",
    categoria: "Camperas",
    genero: "hombre",
    precio: 99900,
    descripcion:
      "Denim de 12 onzas con corte trucker y bolsillos al pecho. Atemporal, por diseño.",
    img: "1564257631407-4deb1f99d992",
    nuevo: false,
  },
  {
    id: 23,
    nombre: "Bermudas Chino",
    categoria: "Bermudas",
    genero: "hombre",
    precio: 42900,
    descripcion:
      "Largo justo por encima de la rodilla y tela fresca. El verano, sin esfuerzo.",
    img: "1591195853828-11db59a44f6b",
    nuevo: false,
  },

  // ───────────────────────── ACCESORIOS ─────────────────────────
  {
    id: 24,
    nombre: "Cartera Estructurada Milano",
    categoria: "Carteras",
    genero: "accesorios",
    precio: 112000,
    descripcion:
      "Cuero de vaca curtido al vegetal con herrajes dorados. La compañera de todos los días, hecha a mano.",
    img: "1584917865442-de89df76afd3",
    nuevo: true,
  },
  {
    id: 25,
    nombre: "Bolso Tote de Lona",
    categoria: "Bolsos",
    genero: "accesorios",
    precio: 68500,
    descripcion:
      "Lona encerada con interior amplio y bolsillos internos. Llevá tu vida sin que se note.",
    img: "1594223274512-ad4803739b7c",
    nuevo: false,
  },
  {
    id: 26,
    nombre: "Mini Bandolera Nube",
    categoria: "Bolsos",
    genero: "accesorios",
    precio: 54900,
    descripcion:
      "Cuero suave, cadena fina y tamaño justo. Para lo esencial, con estilo.",
    img: "1590874103328-eac38a683ce7",
    nuevo: true,
  },
  {
    id: 27,
    nombre: "Gorra Bordada LUMA",
    categoria: "Gorras",
    genero: "accesorios",
    precio: 24900,
    descripcion:
      "Algodón estructurado con bordado de la casa. El detalle que cierra un look.",
    img: "1521369909029-2afed882baee",
    nuevo: false,
  },
  {
    id: 28,
    nombre: "Cinturón de Cuero Trenzado",
    categoria: "Cinturones",
    genero: "accesorios",
    precio: 32900,
    descripcion:
      "Trenzado artesanal con hebilla minimalista. Del denim al vestido, siempre suma.",
    img: "1624222247344-550fb60583dc",
    nuevo: false,
  },
  {
    id: 29,
    nombre: "Anteojos Careta Clásica",
    categoria: "Anteojos",
    genero: "accesorios",
    precio: 45900,
    descripcion:
      "Careta de acetato con lentes de protección UV. El clásico de los noventa, revisitado.",
    img: "1572635196237-14b3f281503f",
    nuevo: true,
  },
  {
    id: 30,
    nombre: "Aros Luna",
    categoria: "Bijouterie",
    genero: "accesorios",
    precio: 18500,
    descripcion:
      "Acero bañado en oro con diseño liviano. Pequeños, pero hacen ruido.",
    img: "1515562141207-7a88fb7ce338",
    nuevo: false,
  },
  {
    id: 31,
    nombre: "Collar Minimalista",
    categoria: "Bijouterie",
    genero: "accesorios",
    precio: 22900,
    descripcion:
      "Cadena fina con dije geométrico. Menos, pero mejor.",
    img: "1599643478518-a784e5dc4c8f",
    nuevo: false,
  },
  {
    id: 32,
    nombre: "Pañuelo de Seda Estampado",
    categoria: "Pañuelos",
    genero: "accesorios",
    precio: 28900,
    descripcion:
      "Seda estampada con diseño exclusivo de la casa. Al cuello, al bolso o al pelo: siempre bien.",
    img: "1520903920243-00d872a2d1c9",
    nuevo: false,
  },
];

// URL estable para servir una imagen de Unsplash por su id.
function imagenUnsplash(id, ancho = 900) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${ancho}&q=80`;
}

// Formatea un precio en pesos argentinos: 28900 → "$28.900"
function formatearPrecio(precio) {
  return "$" + new Intl.NumberFormat("es-AR").format(precio);
}
