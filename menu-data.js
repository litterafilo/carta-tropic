const MENU_CATEGORIES = [
  {
    id: 'hamburguesas',
    title: 'Hamburguesas',
    coverPhoto: 'assets/food/hero-burger.jpg',
    coverLabel: 'Hamburguesas recién hechas a la plancha',
    items: [
      { name: 'Normal', price: '3,60 €' },
      { name: 'Con queso', price: '4,10 €' },
      { name: 'Tropical', price: '4,10 €' },
      { name: 'Especial', price: '4,50 €', tag: 'Especial' },
      { name: 'Americana', price: '4,50 €' },
      { name: 'Celia', price: '4,70 €' },
      { name: 'Tejana', price: '4,70 €' },
      { name: 'Chivito', price: '5,50 €', tag: 'Clásico' }
    ],
    extras: [
      { name: 'Ingrediente extra', price: '0,90 €' },
      { name: 'Carne extra pollo por ternera', price: '2,50 €' },
      { name: 'Extra de huevo frito', price: '0,90 €' }
    ]
  },
  {
    id: 'perritos',
    title: 'Perritos calientes',
    items: [
      { name: 'Perritos', price: '2,60 €' },
      { name: 'Perrito con queso fundido', price: '3,50 €' },
      { name: 'Perrito con bacon', price: '3,50 €' },
      { name: 'Perrito con bacon y queso fundido', price: '4,10 €' },
      { name: 'Perrito Guay', price: '4,60 €' }
    ]
  },
  {
    id: 'sandwich',
    title: 'Sandwich',
    coverPhoto: 'assets/food/hero-sandwich.jpg',
    coverLabel: 'Sándwiches tostados al momento',
    items: [
      { name: 'Mixto', price: '3,20 €' },
      { name: 'Bikoto', price: '3,40 €' },
      { name: 'Vegetal', price: '3,40 €' },
      { name: 'Sabinera', price: '3,40 €' },
      { name: 'Light', price: '3,40 €' },
      { name: 'Bikoto especial', price: '4,10 €' },
      { name: 'Completo', price: '4,60 €' }
    ]
  },
  {
    id: 'entrantes',
    title: 'Entrantes',
    items: [
      { name: 'Aceitunas rellenas', price: '2,00 €' },
      { name: 'Aceitunas aliñadas', price: '1,80 €' },
      { name: 'Matrimonios', price: '2,50 €' },
      { name: 'Boquerones en vinagre', price: '2,50 €' },
      { name: 'Cazuelita de chorizo', price: '2,50 €' },
      { name: 'Cazuelita de morcilla', price: '2,50 €' },
      { name: 'Cazuelita de lomo', price: '2,50 €' },
      { name: 'Cazuelita de callos', price: '2,50 €' },
      { name: 'Cazuelita de setas', price: '2,50 €' }
    ]
  },
  {
    id: 'patatas',
    title: 'Patatas y picoteo',
    coverPhoto: 'assets/food/hero-bravas.jpg',
    coverLabel: 'Fritas bravas, mixtas, alitas y picoteo',
    items: [
      { name: 'Fritas bravas (normales)', price: '2,70 €', tag: 'Muy pedidas' },
      { name: 'Fritas bravas (pequeñas)', price: '2,40 €' },
      { name: 'Fritas mixtas (normales)', price: '2,80 €' },
      { name: 'Fritas mixtas (pequeñas)', price: '2,50 €' },
      { name: 'Nuggets de pollo (6 unidades)', price: '4,00 €' },
      { name: 'Aros de cebolla', price: '4,00 €' },
      { name: 'Alitas barbacoa (6 unidades)', price: '4,00 €' },
      { name: 'Alitas bravas (6 unidades)', price: '4,00 €' },
      { name: 'Alitas fritas (6 unidades)', price: '4,00 €' }
    ]
  },
  {
    id: 'mini-bocatas',
    title: 'Mini bocatas',
    items: [
      { name: 'Kalamero', price: '1,70 €' },
      { name: 'Sofrito', price: '1,70 €' },
      { name: 'Calamares', price: '1,70 €' },
      { name: 'Mantequilla', price: '1,70 €' },
      { name: 'Corral', price: '1,70 €' },
      { name: 'Noruego', price: '2,10 €' },
      { name: 'Noruega', price: '2,10 €' },
      { name: 'Morcilla', price: '1,70 €' },
      { name: 'Trujas', price: '1,70 €' }
    ]
  },
  {
    id: 'tostas-montaditos',
    title: 'Tostas y montaditos',
    items: [
      { name: 'Catalana', price: '4,00 €' },
      { name: 'Catalana queso', price: '4,50 €' },
      { name: 'Catalana queso curado', price: '4,50 €' },
      { name: 'Rollito', price: '1,90 €' },
      { name: 'Hojita ibérico fresco y fundido', price: '2,20 €' },
      { name: 'Montado de lomo', price: '2,20 €' },
      { name: 'Montado de lomo roquefort', price: '2,50 €' },
      { name: 'Montado de lomo queso fresco', price: '2,50 €' },
      { name: 'Montado de lomo queso fundido', price: '2,50 €' },
      { name: 'Montado de queso fresco', price: '2,50 €' },
      { name: 'Bocadillo queso fresco y sobrasada', price: '2,50 €' },
      { name: 'Bocadillo queso fresco anchoa y piquillo', price: '2,50 €' },
      { name: 'Montado de pechuga', price: '2,50 €' },
      { name: 'Montado de pechuga queso fundido', price: '2,50 €' },
      { name: 'Montado de pechuga queso fresco', price: '2,40 €' }
    ]
  },
  {
    id: 'bocatas',
    title: 'Bocatas',
    coverPhoto: 'assets/food/hero-bocata.jpg',
    coverLabel: 'Bocadillos en pan crujiente recién hecho',
    items: [
      { name: 'Especial de la casa', price: '5,00 €', tag: 'De la casa' },
      { name: 'Serrano', price: '4,70 €' },
      { name: 'Jamón', price: '4,70 €' },
      { name: 'Pollo', price: '4,70 €' },
      { name: 'Pechuga', price: '4,70 €' },
      { name: 'Lomo', price: '4,70 €' },
      { name: 'Bacon', price: '4,70 €' },
      { name: 'Chorizo', price: '4,70 €' },
      { name: 'Morcilla', price: '4,70 €' },
      { name: 'Calamares', price: '4,70 €' },
      { name: 'Serranito', price: '4,90 €' },
      { name: 'Serranito especial', price: '5,00 €' }
    ]
  },
  {
    id: 'pan-casero',
    title: 'Pan casero',
    items: [
      { name: 'Serranada', price: '2,60 €' },
      { name: 'Serranada (queso fundido)', price: '3,00 €' },
      { name: 'Serranada (queso cabra y miel)', price: '3,60 €' },
      { name: 'Tosta ali-oli con tomate y piparras', price: '4,00 €' },
      { name: 'Tosta de salmón con nata rosa y piparras', price: '7,00 €' }
    ]
  },
  {
    id: 'pizzas',
    title: 'Pizzas',
    coverPhoto: 'assets/food/hero-pizza.jpg',
    coverLabel: 'Pizzas al horno y pan de ajo',
    items: [
      { name: 'Pan de ajo', price: '4,00 €' },
      { name: 'Pan de ajo y queso', price: '5,00 €' },
      { name: 'Margarita', price: '7,50 €' },
      { name: 'York', price: '7,50 €' },
      { name: 'York bacon', price: '8,50 €' },
      { name: 'York bacon huevo', price: '9,00 €' },
      { name: 'York bacon huevo cebolla', price: '9,50 €' },
      { name: 'Atún bacon', price: '9,00 €' },
      { name: 'Carbonara', price: '9,00 €' },
      { name: '4 quesos', price: '9,00 €' },
      { name: 'Vegetal', price: '9,00 €' },
      { name: 'Peperoni', price: '9,50 €' },
      { name: 'Peperoni york', price: '9,50 €' },
      { name: 'Peperoni york bacon', price: '10,00 €' },
      { name: 'Peperoni york bacon huevo', price: '10,50 €' },
      { name: 'Barbacoa', price: '10,00 €' },
      { name: 'Barbacoa york', price: '10,50 €' },
      { name: 'Barbacoa york bacon', price: '11,00 €' },
      { name: 'Barbacoa york bacon huevo', price: '11,50 €' },
      { name: 'Barbacoa york bacon huevo cebolla', price: '12,00 €' },
      { name: 'Barbacoa york bacon huevo cebolla champiñón', price: '12,50 €' },
      { name: 'Barbacoa york bacon huevo cebolla champiñón pimiento', price: '13,00 €' },
      { name: 'Barbacoa york bacon huevo cebolla champiñón pimiento aceitunas', price: '13,50 €' }
    ]
  },
  {
    id: 'sartenes',
    title: 'Sartenes y combinados',
    items: [
      { name: 'Bacon', price: '8,00 €' },
      { name: 'Chorizo', price: '8,00 €' },
      { name: 'Jamón', price: '8,00 €' },
      { name: 'Jamón queso (gratinado)', price: '8,50 €' },
      { name: 'Bacon queso (gratinado)', price: '8,50 €' }
    ]
  },
  {
    id: 'ensaladas',
    title: 'Ensaladas',
    items: [
      { name: 'De la casa (2 personas)', price: '6,70 €' },
      { name: 'Tropical (2 personas)', price: '6,70 €' },
      { name: 'Mixta (1/2 ración)', price: '3,50 €' },
      { name: 'Imperial (2 personas)', price: '5,00 €' },
      { name: 'Rusa (1/2 ración)', price: '3,50 €' }
    ],
    extras: [
      { name: 'Tartares de salmón extra', price: '6,10 €' },
      { name: 'Salsas extra (ketchup, mostaza, mayonesa)', price: '0,50 €' }
    ]
  },
  {
    id: 'postres',
    title: 'Postres',
    coverPhoto: 'assets/food/hero-postre.jpg',
    coverLabel: 'Tartas y postres de la casa',
    items: [
      { name: 'Tarta de whisky', price: '5,00 €' },
      { name: 'Contesa', price: '3,00 €' },
      { name: 'Tarta de la abuela', price: '4,00 €' },
      { name: 'Tarta del abuelo', price: '4,00 €' },
      { name: 'Tarta de queso', price: '4,00 €' }
    ]
  },
  {
    id: 'cerveza',
    title: 'Cerveza y bodega',
    coverPhoto: 'assets/food/hero-cerveza.jpg',
    coverLabel: 'Cerveza bien fría, tinto de verano y sangría',
    items: [
      { name: 'Vaso de cerveza', price: '2,00 €' },
      { name: 'Tercio', price: '2,30 €' },
      { name: 'Tercio cerveza especial', price: '2,60 €' },
      { name: 'Tercio de 0,0', price: '2,60 €' },
      { name: 'Jarra de cerveza', price: '3,50 €' },
      { name: 'Tinto de verano', price: '3,00 €' },
      { name: 'Jarra de sangría', price: '7,00 €' },
      { name: 'Botellín tinto de verano', price: '2,00 €' }
    ]
  },
  {
    id: 'refrescos',
    title: 'Refrescos',
    items: [
      { name: 'Coca Cola (lata)', price: '2,00 €' },
      { name: 'Fanta (lata)', price: '2,00 €' }
    ]
  }
];
