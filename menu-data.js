const MENU_CATEGORIES = [
  {
    id: 'entrantes',
    title: 'Entrantes',
    coverPhoto: 'assets/food/hero-entrantes.jpg',
    coverLabel: 'Ensaladilla rusa, marineras y tapas de barra',
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
    id: 'mini-bocatas',
    title: 'Mini bocatas',
    coverPhoto: 'assets/food/hero-minibocatas.jpg',
    coverLabel: 'Mini bocatas variados recién hechos',
    items: [
      { name: 'Ratonero', price: '1,80 €', desc: 'Roquefort, anchoa y tomate.' },
      { name: 'Colorín Salao', price: '1,80 €', desc: 'Sobrasada, anchoa y tomate.' },
      { name: 'Mar y Tierra', price: '1,80 €', desc: 'Atún, huevo duro, lechuga y mayonesa.' },
      { name: 'Calorina', price: '1,80 €', desc: 'Bacon, salsa picante y tomate.' },
      { name: 'Casablanca', price: '1,80 €', desc: 'Lomo, queso fundido, tomate y salsa picante.' },
      { name: 'Variante', price: '1,80 €', desc: 'Ensaladilla rusa y anchoas.' },
      { name: 'Madrileña', price: '1,80 €', desc: 'Jamón serrano, tomate y salsa picante.' },
      { name: 'Combi', price: '1,80 €', desc: 'Sobrasada, roquefort y tomate.' },
      { name: 'Mercenario', price: '1,80 €', desc: 'Jamón york y salsa brava (todo frito).' },
      { name: 'Noruego', price: '2,20 €', desc: 'Queso de untar y salmón.' },
      { name: 'Escocés', price: '2,20 €', desc: 'Salmón ahumado, tomate y tápenas.' },
      { name: 'Hípico', price: '1,80 €', desc: 'Tomate y filete de caballa.' }
    ]
  },
  {
    id: 'tostas-montaditos',
    title: 'Tostas y montaditos',
    coverPhoto: 'assets/food/hero-tostas.jpg',
    coverLabel: 'Catalana de jamón serrano y montaditos al momento',
    items: [
      { name: 'Catalana', price: '5,00 €', desc: 'Jamón serrano, aceite y tomate.' },
      { name: 'Catalana + Queso (Fresco / Fundido)', price: '6,00 €' },
      { name: 'Catalana + Queso Curado', price: '6,20 €' },
      { name: 'Rojilla', price: '6,00 €', desc: 'Jamón serrano, aceite, tomate y sobrasada.' },
      { name: 'Rojilla + Queso (Fresco o Fundido)', price: '7,00 €' },
      { name: 'Montadito Lomo', price: '2,00 €' },
      { name: 'Montadito Lomo Roquefort', price: '2,50 €' },
      { name: 'Montadito Lomo Queso Fresco o Fundido', price: '2,50 €' },
      { name: 'Bocadito Queso Fresco y Tomate', price: '2,00 €' },
      { name: 'Bocadito Queso Fresco y Sobrasada', price: '2,50 €' },
      { name: 'Bocadito Queso Fresco, Anchoa y Piquillo', price: '2,80 €' },
      { name: 'Montadito Pechuga', price: '2,00 €' },
      { name: 'Montadito Pechuga Queso Fundido o Fresco', price: '2,60 €' }
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
    id: 'bocatas',
    title: 'Bocatas',
    coverPhoto: 'assets/food/hero-bocata.jpg',
    coverLabel: 'Bocadillos en pan crujiente recién hecho',
    items: [
      { name: 'Especial de la Casa', price: '6,00 €', desc: 'Lomo, bacon, queso fundido, tomate y mayonesa.' },
      { name: 'Sandra', price: '5,00 €', desc: 'Sobrasada, queso, anchoas, tomate y pepinillos.' },
      { name: 'Perico', price: '5,70 €', desc: 'Jamón york, queso, huevo duro, anchoas, tomate y pepinillos.' },
      { name: 'Sabrosón', price: '5,70 €', desc: 'Jamón york, queso, huevo duro, anchoas, lechuga y mayonesa.' },
      { name: 'Clásico', price: '5,00 €', desc: 'Bacon y queso.' },
      { name: 'Marino', price: '5,50 €', desc: 'Atún, tomate, lechuga y mayonesa.' },
      { name: 'Pica-pica', price: '5,20 €', desc: 'Magreta de cerdo, chorizo picante, tabasco y tomate.' },
      { name: 'Dinosaurio', price: '5,00 €', desc: 'Magreta de cerdo, sobrasada, jamón york, cebolla, pepinillo, tomate, lechuga y salsa picante.' },
      { name: 'Tara', price: '6,00 €', desc: 'Bacon, lomo adobado, tomate y salsa picante.' },
      { name: 'Jabugeño', price: '6,30 €', desc: 'Jamón serrano, tocino, chorizo, tomate y aceite.' },
      { name: 'Cantábrico', price: '5,90 €', desc: 'Filete de caballa, queso fresco y pimiento de piquillo.' },
      { name: 'Huertano', price: '6,00 €', desc: 'Lomo plancha, queso fundido y pimiento verde frito.' },
      { name: 'Fragata', price: '5,20 €', desc: 'Atún, anchoa, tomate y pepinillo.' },
      { name: 'Vaquero', price: '5,00 €', desc: 'Sobrasada, queso fresco y anchoa.' },
      { name: 'Serranito', price: '6,50 €', desc: 'Lomo plancha, pimiento verde frito y jamón serrano.' },
      { name: 'Tapioca', price: '6,00 €', desc: 'Pechuga pollo plancha, lechuga, tomate y cebolla (salsa yogurt).' },
      { name: 'Empanado', price: '7,00 €', desc: 'Pechuga empanada, queso curado, salsa picante, mahonesa, lechuga y tomate.' }
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
      { name: 'Atún - Bacon', price: '10,40 €', desc: 'Base, tomate, cebolla, atún, bacon, mozzarella y orégano.' },
      { name: 'Carbonara', price: '10,50 €', desc: 'Base, nata, bacon, champiñón y cebolla.' },
      { name: 'Atún - Piquillo', price: '10,60 €', desc: 'Base, tomate, atún, cebolla, tápenas y pimiento de piquillo.' },
      { name: 'Vegetal', price: '9,80 €', desc: 'Base, tomate, verduras, mozzarella y orégano.' },
      { name: 'Pescata', price: '10,80 €', desc: 'Base, tomate, verduras, atún, mozzarella y orégano.' },
      { name: 'Kebab', price: '10,60 €', desc: 'Base, tomate, carne kebab mixta, salsa kebab y mozzarella.' },
      { name: 'Speed', price: '11,00 €', desc: 'Base, salsa brava, carne picada, huevo frito, mozzarella y orégano.' },
      { name: 'Vivaldi', price: '11,00 €', desc: 'Base, tomate, york, espárragos, champiñón, huevo duro, alcachofas, mozzarella y orégano.' },
      { name: 'Salatta', price: '9,00 €', desc: 'Base, tomate, anchoas, olivas, mozzarella y orégano.' },
      { name: 'Mangui', price: '9,00 €', desc: 'Base, tomate, chorizo ibérico, mozzarella y orégano.' },
      { name: 'Cinco quesos', price: '11,20 €', desc: 'Base, tomate, surtido de quesos, roquefort, mozzarella y orégano.' },
      { name: 'Caribe', price: '10,30 €', desc: 'Base, tomate, york, piña, maíz, mozzarella y orégano.' },
      { name: 'Barbacoa', price: '11,20 €', desc: 'Base, salsa barbacoa, bacon, carne picada y mozzarella.' },
      { name: 'Filandesa', price: '12,00 €', desc: 'Base, tomate, salmón ahumado, anchoas, tápenas, mozzarella y orégano.' },
      { name: 'Cabresa', price: '10,00 €', desc: 'Base, tomate natural, queso de cabra, mozzarella, cebolla y orégano.' }
    ],
    extras: [
      { name: 'Pizza al gusto (ingrediente opcional)', price: '0,80 €', desc: 'Excepto atún, carne picada, salmón y gambas según cantidad.' }
    ]
  },
  {
    id: 'hamburguesas',
    title: 'Hamburguesas',
    coverPhoto: 'assets/food/hero-burger.jpg',
    coverLabel: 'Hamburguesas recién hechas a la plancha',
    items: [
      { name: 'Normal', price: '4,50 €', desc: 'Tomate, cebolla y lechuga.' },
      { name: 'Con Queso', price: '5,00 €', desc: 'Tomate, cebolla, lechuga y queso.' },
      { name: 'Tropical', price: '5,50 €', desc: 'Queso, bacon, tomate, pepinillo, cebolla y lechuga.' },
      { name: 'Especial', price: '5,50 €', desc: 'Queso, huevo duro, tomate, cebolla, lechuga y mayonesa.' },
      { name: 'Americana', price: '5,50 €', desc: 'Queso, bacon, pepinillo, maíz, tomate, cebolla y lechuga.' },
      { name: 'Cálida', price: '5,70 €', desc: 'Queso, jamón york, huevo frito, tomate, cebolla y lechuga.' },
      { name: 'Tejana', price: '8,00 €', desc: 'Hamburguesa de ternera, bacon, queso, tomate, lechuga y cebolla.' },
      { name: 'Crispy', price: '5,50 €', desc: 'Hamburguesa crujiente de pollo, queso, tomate, cebolla y lechuga.' }
    ],
    extras: [
      { name: 'Extra de huevo', price: '1,00 €' },
      { name: 'Ingrediente Extra', price: '0,50 €' },
      { name: 'Cambio de carne de pollo por ternera', price: '3,00 €' }
    ]
  },
  {
    id: 'perritos',
    title: 'Perritos',
    coverPhoto: 'assets/food/hero-perritos.jpg',
    coverLabel: 'Perritos calientes recién hechos',
    items: [
      { name: 'Perrito', price: '3,00 €' },
      { name: 'Perrito Queso Fundido', price: '4,00 €' },
      { name: 'Perrito Bacon', price: '4,00 €' },
      { name: 'Perrito Queso Fundido y Bacon', price: '4,60 €' },
      { name: 'Perrito Guay', price: '5,10 €', desc: 'Salchicha, cebolla plancha, bacon y queso fundido (más picante).' }
    ]
  },
  {
    id: 'sartenes',
    title: 'Sartenes y combinados',
    coverPhoto: 'assets/food/hero-sartenes.jpg',
    coverLabel: 'Sartenes de patatas, huevo y jamón o bacon',
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
    coverLabel: 'Cerveza fría, sangría, vinos y refrescos',
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
      { name: 'Fanta (Lata)', price: '2,50 €' },
      { name: 'Aquarius (Lata)', price: '2,60 €' },
      { name: 'Nestea (Lata)', price: '2,60 €' },
      { name: 'Tónica', price: '2,50 €' },
      { name: 'Zumo', price: '2,00 €' },
      { name: 'Casera 1/2 litro', price: '2,80 €' },
      { name: 'Botella de agua 1,5 l.', price: '2,00 €' },
      { name: 'Vino tinto de la casa (1/2 litro)', price: '4,00 €' },
      { name: 'Vino tinto Ribera de Duero (Botella)', price: '10,00 €' },
      { name: 'Vino tinto Ribera de Duero (Copa)', price: '2,50 €' },
      { name: 'Vino rosado (Botella)', price: '9,50 €' },
      { name: 'Vino rosado (Copa)', price: '2,50 €' },
      { name: 'Vino rosado Peñascal', price: '9,00 €' },
      { name: 'Lambrusco dell Emilia', price: '7,00 €' }
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
