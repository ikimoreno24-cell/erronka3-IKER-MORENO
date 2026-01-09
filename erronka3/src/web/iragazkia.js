const products = [
    {
    name: "MILAN ",
    price: 14.99,
    img: "https://www.milan.es/cdnassets/productsImages/85a61d7b5d3f00a4ec5c8870a071db4656068d3d_651035b_06_l.webp",
    category: "kamisetak"
  },
   {
    name: "THE GREAT CREW",
    price: 14.99,
    img: "https://statics.pampling.com/imagenes/galerias/imagen_52365.jpg?1767958295",
    category: "kamisetak"
  },
    {
    name: "FULLADDICT FULL GEAR RABBIT",
    price: 38.99,
    img: "https://www.fulladdict.com/pub/media/catalog/product/cache/43b29d64948af0cc128ef4c4fcfd864f/r/a/rabbit-printed-white-t-shirt_4.jpg",
    category: "kamisetak"
  },
    {
    name: "FIBONACHI WAVE",
    price: 14.99,
    img: "https://statics.pampling.com/imagenes/galerias/imagen_48925.jpg?1767958165",
    category: "kamisetak"
  },
   {
    name: "COFFEE CAT IN MT FUJI",
    price: 14.99,
    img: " https://statics.pampling.com/imagenes/galerias/imagen_44097.jpg?1767959446",
    category: "kamisetak"
  },
   {
    name: "PSICOPATO",
    price: 14.99,
    img: "https://statics.pampling.com/imagenes/galerias/imagen_46814.jpg?1767959558",
    category: "kamisetak"
  },
  {
    name: "VINTAGE PRAKAK",
    price: 19.89,
    img: "https://img.kwcdn.com/product/fancy/market/def372436d30ff33cb0edda8e434c451_pjtDeeSU1mpj6.jpg?imageView2/2/w/1300/q/90/format/avif",
    category: "prakak"
  },
   {
    name: "CARGO PRAKAK",
    price: 14.99,
    img: "https://img.kwcdn.com/product/fancy/c57bb8dd-f829-4d42-80e4-764073b1778b.jpg?imageView2/2/w/1300/q/90/format/avif",
    category: "prakak"
  },
   {
    name: "JOGGER PRAKA BERDEAK",
    price: 19.99,
    img: "https://img.kwcdn.com/product/fancy/df39b5db-bf61-42fc-bee9-11e5ef0fdb10.jpg?imageView2/2/w/800/q/70/format/avif",
    category: "prakak"
  },
   {
    name: "JOGGER PRAKA MARROIAK",
    price: 21.99,
    img: "https://img.kwcdn.com/product/fancy/0e3a5e13-fd18-45fd-9258-bb8059a65cc4.jpg?imageView2/2/w/1300/q/90/format/avif",
    category: "prakak"
  },
   {
    name: "PANAKO PRAKA MARROIAK",
    price: 28.99,
    img: "https://img.kwcdn.com/product/fancy/8596e807-2c00-4d20-91b6-bd863c7fde11.jpg?imageView2/2/w/1300/q/90/format/avif",
    category: "prakak"
  },
   {
    name: "PANAKO PRAKA URDINAK",
    price: 14.99,
    img: "https://img.kwcdn.com/product/fancy/market/100276409a8a5dd074fd2dd49c1d251e_F9dYSWNOhVflN.jpg?imageView2/2/w/1300/q/90/format/avif",
    category: "prakak"
  },
    {
    name: "NIKE SPORTSWEAR DARK GREY",
    price: 22.95,
    img: "https://img01.ztat.net/article/spp-media-p1/de62428c07884c7cb25f3e09d1aa9ab5/dde1b890e2934c1984667d721afef05f.jpg?imwidth=1800&filter=packshot",
    category: "txanoak"
  },
  {
    name: "THE NORTH FACE SALTY LINED ",
    price: 25.95,
    img: "https://cdn.deporvillage.com/cdn-cgi/image/h=785,w=628,dpr=2,f=auto,q=75,fit=contain,background=white/product-vertical/tnf-nf0a8cgz56p_001.jpg",
    category: "txanoak"
  },
   {
    name: "THE NORTH FACE BOX CUFFED",
    price: 27.25,
    img: "https://img01.ztat.net/article/spp-media-p1/ee5cd71036d94414af0af86ad1a2c0f8/6c1318282f6741b2bf7b7dc1f688cf9b.jpg?imwidth=1800&filter=packshot",
    category: "txanoak"
  },
   {
    name: "THE NORTH FACE HOODED",
    price: 149.95,
    img: "https://img01.ztat.net/article/spp-media-p1/5aafa61ee481406bbd1038304f25acfd/81dcd4a49a8e46b2a21f21b32cbfc858.jpg?imwidth=1800&filter=packshot",
    category: "jakak"
  },
   {
    name: "W1-W TIGNES",
    price: 159.95,
    img: "https://cdn.siroko.com/products/69159928d184c/1200x/crop_center.webp?v=1763023145&_gl=1*qvhy7k*_up*MQ..*_gs*MQ..&gclid=Cj0KCQiApfjKBhC0ARIsAMiR_IuGGkWIeq229INbt6TZ2nYfe1EOn2cz_mBxV_gKUvGHa3Bzx2CLvvIaArF6EALw_wcB&gbraid=0AAAAA-B9JVgeOYNZWB93bSO83hAwI4Imr",
    category: "jakak"
  },
   {
    name: "THE NORTH FACE TEEN RETRO",
    price: 279.95,
    img: "https://img01.ztat.net/article/spp-media-p1/174ff778a1dc41cfa99a31e93d5eeb5c/43abfac1eaef4e2790f9ff1cd13d7c07.jpg?imwidth=1800&filter=packshot",
    category: "jakak"
  },
    {
    name: "LEAGUE ESSENTIAL 9FORTY",
    price: 29.95,
    img: "https://img01.ztat.net/article/spp-media-p1/f003b08d585343808d2d94c5be421a30/9a347108d40240269a4d38cfcc601a40.jpg?imwidth=1800&filter=packshot",
    category: "biserak"
  },
   {
    name: "FULL INITIALS LOGO",
    price: 29.00,
    img: "https://www.fulladdict.com/pub/media/catalog/product/cache/43b29d64948af0cc128ef4c4fcfd864f/e/m/embroidered-white-cap-initials-logo_3.jpg",
    category: "biserak"
  },
   {
    name: "COLORS BISERA BERDEA",
    price: 25.00,
    img: "https://medusabay.com/cdn/shop/files/WhatsAppImage2024-05-03at10.00.55_6_720x.jpg?v=1756888044",
    category: "biserak"
  },
    {
    name: "FULLADDICT FULL NAME LOGO",
    price: 39.00,
    img: "https://www.fulladdict.com/pub/media/catalog/product/cache/43b29d64948af0cc128ef4c4fcfd864f/p/r/printed-black-t-shirt-brand-name-logo_3.jpg",
    category: "kamisetak"
  },
   {
    name: "INSPIRED OVERSIZE",
    price: 25.00,
    img: "https://medusabay.com/cdn/shop/files/Capturadepantalla2025-08-10alas11.19.04_720x.png?v=1757088252",
    category: "kamisetak"
  },
   {
    name: "FULLADDICT FULL GEAR RABBIT",
    price: 39.00,
    img: "https://www.fulladdict.com/pub/media/catalog/product/cache/43b29d64948af0cc128ef4c4fcfd864f/r/a/rabbit-printed-white-t-shirt_4.jpg",
    category: "kamisetak"
  },
    {
    name: "KIMONO ERAKO KENZO ALKANDORA",
    price: 174.00,
    img: "https://media.kenzo.com/b2cprd/FF65CH1319LI.62A_P_01.jpg?twic=v1/cover=4:5/resize=768",
    category: "alkandorak"
  },
    {
    name: "OXFORD ALKANDORA",
    price: 34.95,
    img: "https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/483601/sub/goods_483601_sub14_3x4.jpg?width=400",
    category: "alkandorak"
  },
    {
    name: "ALKANDORA VINTAGE AMERIKARRA",
    price: 23.99,
    img: "https://img.kwcdn.com/product/fancy/edeca800-714d-4b0c-bd6b-c54831924710.jpg?imageView2/2/w/800/q/70/format/avif",
    category: "alkandorak"
  },
    {
    name: "VANS BLOCKED BOX",
    price: 75,
    img: "https://assets.vans.eu/images/t_img/c_fill,g_center,f_auto,h_815,e_unsharp_mask:100,w_652/dpr_2.0/v1751997389/VN000RATBLK-HERO/Blocked-Box-Crew-Sweatshirt.jpg",
    category: "sudaderak"
  },
   {
    name: "VOLCOM HEATHER GREY",
    price: 85.00,
    img: "https://www.volcom.es/cdn/shop/files/A4132503_HGR_1.jpg?v=1761227371&width=825",
    category: "sudaderak"
  },
   {
    name: "TRASHER FLAME",
    price: 35.99,
    img: "https://cdn.idealo.com/folder/Product/6413/4/6413434/s11_produktbild_gross/thrasher-flame-hoodie-black.jpg",
    category: "sudaderak"
  },
    {
    name: "UMBRO DIAMOND DRILL",
    price: 76.25,
    img: "https://cdn.redbrain.shop/?i=https%3A%2F%2Fcdn.blazimg.com%2F1800%2Fproduct%2Fu%2Fm%2Fumbro_1238000-60-0-83_black-ultimate-gray_1.webp&w=330",
    category: "sudaderak"
  },
   {
    name: "RIPCURL LIGHT NAVI",
    price: 42.00,
    img: "https://img01.ztat.net/article/spp-media-p1/aab303308cb5449185796125dfef0c7d/dac1d02763bc419ea9e89aeb59673eb5.jpg?imwidth=1800",
    category: "sudaderak"
  },
   {
    name: "ADIDAS FIREBIRD",
    price: 55,
    img: "https://i8.amplience.net/i/jpl/jd_763161_c?qlt=92&w=950&h=1212&v=1&fmt=auto",
    category: "sudaderak"
  },
];


// Mostrar productos
function displayProducts(list) {
  const container = document.getElementById("productContainer");
  container.innerHTML = "";

  list.forEach(product => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${product.img}" alt="">
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
    `;

    container.appendChild(card);
  });
}


// Filtro
document.querySelectorAll(".filter-btn").forEach(button => {
  button.addEventListener("click", () => {
    const category = button.dataset.category;

    if (category === "all") {
      displayProducts(products);
    } else {
      const filtered = products.filter(p => p.category === category);
      displayProducts(filtered);
    }
  });
});


// Mostrar todo al inicio
displayProducts(products);