const MENU_CATEGORIES = [
  {
    id: 'hamburguesas',
    title: 'Hamburguesas',
    coverPhoto: 'assets/food/hero-burger.jpg',
    coverLabel: 'Hamburguesas recién hechas a la plancha',
    items: [
      { name: 'Normal', price: '4,50 €', desc: 'Tomate, cebolla y lechuga.' },
      { name: 'Con Queso', price: '5,00 €', desc: 'Tomate, cebolla, lechuga y queso.' },
      { name: 'Tropical', price: '5,50 €', desc: 'Queso, bacon, tomate, pepinillo, cebolla y lechuga.' },
      { name: 'Especial', price: '5,50 €', desc: 'Queso, huevo duro, tomate, cebolla, lechuga y mayonesa.', tag: 'Especial' },
      { name: 'Americana', price: '5,50 €', desc: 'Queso, bacon, pepinillo, maíz, tomate, cebolla y lechuga.' },
      { name: 'Cálida', price: '5,70 €', desc: 'Queso, jamón york, huevo frito, tomate, cebolla y lechuga.' },
      { name: 'Tejana', price: '8,00 €', desc: 'Hamburguesa de ternera, bacon, queso, tomate, lechuga y cebolla.' },
      { name: 'Crispy', price: '5,50 €', desc: 'Hamburguesa crujiente de pollo, queso, tomate, cebolla y lechuga.' }
    ]
  },
  {
    id: 'perritos',
    title: 'Perritos calientes',
    items: [
      { name: 'Perrito', price: '3,00 €' },
      { name: 'Perrito Queso Fundido', price: '4,00 €' },
      { name: 'Perrito Bacon', price: '4,00 €' },
      { name: 'Perrito Queso Fundido y Bacon', price: '4,60 €' },
      { name: 'Perrito Guay', price: '5,10 €', desc: 'Salchicha, cebolla plancha, bacon y queso fundido (más picante).' }
    ]
  },
  {
    id: 'sandwich',
    title: 'Sandwich',
    coverPhoto: 'assets/food/hero-sandwich.jpg',
    coverLabel: 'Sándwiches tostados al momento',
    items: [
      { name: 'Mixto', price: '3,50 €', desc: 'Jamón york y queso.' },
      { name: 'Blood', price: '5,00 €', desc: 'Jamón york, queso, sobrasada, tomate y lechuga.' },
      { name: 'Vegetal', price: '5,20 €', desc: 'Atún, cebolla, tomate, pepinillo, lechuga, espárragos y mayonesa.' },
      { name: 'Bandera', price: '4,60 €', desc: 'Bacon, tomate y huevo frito.' },
      { name: 'Light', price: '3,60 €', desc: 'Huevo duro, tomate, lechuga y mayonesa.' },
      { name: 'Españolito', price: '5,00 €', desc: 'Sobrasada, bacon y queso fundido.' },
      { name: 'Campero', price: '5,00 €', desc: 'Pechuga de pollo plancha, tomate, lechuga y cebolla.' }
    ]
  },
  {
    id: 'entrantes',
    title: 'Entrantes',
    items: [
      { name: 'Aceitunas Rellenas', price: '2,50 €' },
      { name: 'Marinera', price: '2,60 €' },
      { name: 'Marinero', price: '2,60 €' },
      { name: 'Casamiento', price: '3,00 €', desc: 'Marinera + Boquerón.' },
      { name: 'Bicicleta', price: '2,20 €' },
      { name: 'Ensaladilla Rusa', price: '3,00 €', desc: 'Ración.' },
      { name: 'Ensaladilla Rusa', price: '5,00 €', desc: '2 Personas.' }
    ]
  },
  {
    id: 'patatas',
    title: 'Patatas',
    coverPhoto: 'assets/food/hero-bravas.jpg',
    coverLabel: 'Patatas bravas, alitas y picoteo',
    items: [
      { name: 'Bravas Grandes', price: '5,20 €', tag: 'Muy pedidas' },
      { name: 'Bravas Pequeñas', price: '4,00 €' },
      { name: 'Fritas', price: '3,50 €' },
      { name: 'Fritas Dobles', price: '4,80 €' },
      { name: 'Nuggets (6 Udes)', price: '4,80 €' },
      { name: 'Aros de Cebolla', price: '4,50 €' },
      { name: 'Alitas Barbacoa (6 Udes)', price: '4,80 €' },
      { name: 'Alitas Bravas (6 Udes)', price: '4,80 €' }
    ]
  },
  {
    id: 'mini-bocatas',
    title: 'Mini bocatas',
    items: [
      { name: 'Ratonero', price: '1,80 €', desc: 'Roquefort, anchoa y tomate.' },
      { name: 'Colorín Salao', price: '1,80 €', desc: 'Sobrasada, anchoa y tomate.' },
      { name: 'Mar y Tierra', price: '1,80 €', desc: 'Atún, huevo duro, lechuga y mayonesa.' },
      { name: 'Calorina', price: '1,80 €', desc: 'Bacon, salsa picante y tomate.' },
      { name: 'Casablanca', price: '1,80 €', desc: 'Lomo, queso fundido, tomate y salsa picante.' },
      { name: 'Variante', price: '1,80 €', desc: 'Ensaladilla rusa y anchoas.' },
      { name: 'Madrileña', price: '1,80 €', desc: 'Jamón serrano, tomate y salsa picante.' },
      { name: 'Combi', price: '1,80 €', desc: 'Sobrasada, roquefort y tomate.' },
      { name: 'Mercenario', price: '1,80 €' }
    ]
  },
  {
    id: 'tostas-montaditos',
    title: 'Tostas y montaditos',
    items: [
      { name: 'Catalana', price: '5,00 €', desc: 'Jamón serrano, aceite y tomate.' },
      { name: 'Catalana + Queso', price: '6,00 €', desc: 'Fresco / Fundido.' },
      { name: 'Catalana + Queso', price: '6,20 €', desc: 'Curado.' },
      { name: 'Rojilla', price: '6,00 €', desc: 'Jamón serrano, aceite, tomate y sobrasada.' },
      { name: 'Rojilla + Queso', price: '7,00 €', desc: 'Fresco o Fundido.' },
      { name: 'Montadito Lomo', price: '2,00 €' },
      { name: 'Montadito Lomo Roquefort', price: '2,50 €' }
    ]
  },
  {
    id: 'bocatas',
    title: 'Bocatas',
    coverPhoto: 'assets/food/hero-bocata.jpg',
    coverLabel: 'Bocadillos en pan crujiente recién hecho',
    items: [
      { name: 'Especial de la Casa', price: '6,00 €', desc: 'Lomo, bacon, queso fundido, tomate y mayonesa.', tag: 'De la casa' },
      { name: 'Sandra', price: '5,00 €', desc: 'Sobrasada, queso, anchoas, tomate y pepinillos.' },
      { name: 'Perico', price: '5,70 €', desc: 'Jamón york, queso, huevo duro, anchoas, tomate y pepinillos.' },
      { name: 'Sabrosón', price: '5,70 €', desc: 'Jamón york, queso, huevo duro, anchoas, lechuga y mayonesa.' },
      { name: 'Clásico', price: '5,00 €', desc: 'Bacon y queso.', tag: 'Clásico' },
      { name: 'Marino', price: '5,50 €', desc: 'Atún, tomate, lechuga y mayonesa.' },
      { name: 'Pica-pica', price: '5,20 €', desc: 'Magreta de cerdo, chorizo picante, tabasco y tomate.' },
      { name: 'Dinosaurio', price: '5,00 €', desc: 'Magreta de cerdo, sobrasada, jamón york, cebolla, pepinillo, tomate, lechuga y salsa picante.' }
    ]
  },
  {
    id: 'pan-casero',
    title: 'Pan casero',
    items: [
      { name: 'Sobrasada', price: '3,00 €' },
      { name: 'Sobrasada Queso Fresco', price: '4,00 €' },
      { name: 'Sobrasada Queso Fundido', price: '4,00 €' },
      { name: 'Sobrasada Queso Cabra y miel', price: '5,20 €' },
      { name: 'Tosta Atún', price: '6,00 €', desc: 'Atún, salsa rosa y tapenas.' },
      { name: 'Tosta Salmón', price: '8,00 €', desc: 'Salmón, salsa rosa y tapenas.' }
    ]
  },
  {
    id: 'pizzas',
    title: 'Pizzas',
    coverPhoto: 'assets/food/hero-pizza.jpg',
    coverLabel: 'Pizzas al horno y pan de ajo',
    items: [
      { name: 'Pan de ajo', price: '7,00 €', desc: 'Base, ajo, aceite y orégano.' },
      { name: 'Pan de ajo y queso', price: '8,00 €', desc: 'Base, ajo, aceite, mozzarella y orégano.' },
      { name: 'Margarita', price: '7,20 €', desc: 'Base, tomate, mozzarella y orégano.' },
      { name: 'York', price: '8,50 €', desc: 'Base, tomate, york, mozzarella y orégano.' },
      { name: 'Bacon', price: '8,50 €', desc: 'Base, tomate, bacon, mozzarella y orégano.' },
      { name: 'York - Bacon', price: '9,50 €', desc: 'Base, tomate, york, bacon, mozzarella y orégano.' },
      { name: 'Atún', price: '9,80 €', desc: 'Base, tomate, atún, cebolla, mozzarella y orégano.' },
      { name: 'Atún - Bacon', price: '10,40 €', desc: 'Base, tomate, cebolla, atún, bacon, mozzarella y orégano.' }
    ]
  },
  {
    id: 'sartenes',
    title: 'Sartenes y combinados',
    items: [
      { name: 'Bacon', price: '9,00 €', desc: 'Patatas, bacon, huevos revueltos y salsa ranchera.' },
      { name: 'Chorizo', price: '9,00 €', desc: 'Patatas, chorizo, huevos revueltos y salsa ranchera.' },
      { name: 'Jamón Serrano', price: '9,50 €', desc: 'Patatas, jamón serrano, huevos revueltos y salsa ranchera.' },
      { name: 'Bacon - Queso (grande)', price: '9,00 €', desc: 'Patatas, bacon, queso y salsa ranchera (al horno).' },
      { name: 'Bacon - Queso (pequeña)', price: '5,00 €', desc: 'Patatas, bacon, queso y salsa ranchera (al horno).' },
      { name: 'Kebab', price: '9,00 €', desc: 'Patatas, carne kebab mixta, salsa kebab y mozzarella.' }
    ]
  },
  {
    id: 'ensaladas',
    title: 'Ensaladas',
    items: [
      { name: 'De la Casa', price: '7,50 €', desc: 'Lechuga, tomate, maíz, pimiento verde, cebolla, atún, huevo duro y aceitunas. 2 pers.' },
      { name: 'Tropical', price: '9,50 €', desc: 'Piña, jamón york, queso fresco, tomate, lechuga, zanahoria y salsa rosa. 2 pers.' },
      { name: 'Imperial', price: '10,00 €', desc: 'Lechuga, tomate, queso curado, pechuga empanada, zanahoria, salsa césar y frutos secos. 2 pers.' },
      { name: 'Rulera', price: '10,00 €', desc: 'Lechuga, tomate cherry, rulo de cabra, salsa P.X. y mix de frutos secos. 2 pers.' }
    ],
    extras: [
      { name: 'Tarrinas de salsa extra', price: '0,60 €' },
      { name: 'Sobres extra (ketchup, mostaza, mayonesa)', price: '0,10 €' }
    ]
  },
  {
    id: 'bebidas',
    title: 'Bebidas',
    coverPhoto: 'assets/food/hero-cerveza.jpg',
    coverLabel: 'Cerveza fría, sangría y refrescos',
    items: [
      { name: 'Vaso de cerveza', price: '2,30 €' },
      { name: 'Tercio', price: '2,60 €' },
      { name: 'Tercio Especial', price: '2,80 €' },
      { name: 'Tercio Sin Alcohol', price: '2,60 €' },
      { name: 'Tanque 500 cl.', price: '3,60 €' },
      { name: 'Jarra de cerveza', price: '7,20 €' },
      { name: 'Jarra de sangría', price: '7,50 €' },
      { name: 'Tanque sangría 500 cl', price: '3,80 €' },
      { name: 'Botellín Tinto de verano', price: '2,60 €' },
      { name: 'Coca Cola (Lata)', price: '2,50 €' },
      { name: 'Fanta (Lata)', price: '2,50 €' }
    ]
  },
  {
    id: 'postres',
    title: 'Postres',
    coverPhoto: 'assets/food/hero-postre.jpg',
    coverLabel: 'Tartas y postres de la casa',
    items: [
      { name: 'Tarta de Whisky', price: '6,00 €' },
      { name: 'Contesa', price: '4,50 €' },
      { name: 'Tarta de la Abuela', price: '4,00 €' },
      { name: 'Tarta del Abuelo', price: '4,00 €' },
      { name: 'Tarta de Queso', price: '4,00 €' }
    ]
  }
];
