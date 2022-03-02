import { ButtonTextEnum } from '../enums/buttonTextEnum';
import { NameCategoryEnum } from '../enums/nameCategoryEnum';
import { Product } from '../interfases/product';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    idCategory: 1,
    name: 'Удочка с кольцами Libao Snow Wolf 6 м',
    img: 'https://karas.by/image/cache/catalog/Libao/wolf-750x750.jpg',
    description:
      'Удочка с кольцами Libao Wolf универсальная для всех видов поплавочной ловли. Бланк удочки обладает повышенной прочностью.',
    price: 28.34,
    rating: 1,
    isBasket: false,
    buttonText: ButtonTextEnum.BUTTON_ADD_TO_BASKET,
  },
  {
    id: 2,
    idCategory: 1,
    name: 'Спиннинг Samurai Shock Leader 9, углеволокно',
    img: 'https://karas.by/image/cache/catalog/demo/samurai-red-750x750.jpg',
    description:
      'Универсальный сверхлегкий спиннинг, изготовленный из высококачественного углеволокна. Легкий и жесткий, с быстрым строем и небольшим прогибом',
    price: 49,
    rating: 5,
    isBasket: false,
    buttonText: ButtonTextEnum.BUTTON_ADD_TO_BASKET,
  },
  {
    id: 3,
    idCategory: 1,
    name: 'Катушка мультипликаторная Xing Sheg ME-103',
    img: 'https://karas.by/image/cache/catalog/demo/products/12334/xing-sheg-750x750.jpeg',
    description:
      'Небольшая мультипликаторная катушка. Корпус выполнен из ударопрочного пластика. Может быть использоваться для зимних удочек, бортовых удилищ.',
    price: 17.37,
    rating: 7,
    isBasket: false,
    buttonText: ButtonTextEnum.BUTTON_ADD_TO_BASKET,
  },
  {
    id: 4,
    idCategory: 2,
    name: 'Ледобур Ленинград 130 двуручный',
    img: 'https://karas.by/image/cache/catalog/Leningrad/leningradskiy-bur-1-750x750.jpg',
    description:
      'Обновленная версия широко известного Ленинградского ледобура. Ледобуры  имеют цельнотянутый шнек из 4-5 витков.',
    price: 72,
    rating: 2,
    isBasket: false,
    buttonText: ButtonTextEnum.BUTTON_ADD_TO_BASKET,
  },
  {
    id: 5,
    idCategory: 2,
    name: 'Палатка зимняя Следопыт Куб 3 бело-синяя',
    img: 'https://karas.by/image/cache/catalog/Sledopit/palatka-sledopyt-kub-3-210d-750x750.jpg',
    description:
      'Зимняя палатка «Следопыт «Куб» обеспечивает комфорт для рыбалки в зимнее время года. Благодаря системе крепления дуг, «хабы» палатки очень быстро переводятся из транспортного положения в рабочее состояние. Размеры 1.8х1.8х2.0 м.',
    price: 290,
    rating: 12,
    isBasket: false,
    buttonText: ButtonTextEnum.BUTTON_ADD_TO_BASKET,
  },
  {
    id: 6,
    idCategory: 2,
    name: 'Удочка зимняя ПИРС 50 С',
    img: 'https://karas.by/image/cache/catalog/Pirs/pirs-50-c-750x750.jpg',
    description:
      'Удочки зимние ПИРС: многофункциональные, лёгкие, надёжные, удобные, "тёплые" в руке.',
    price: 4,
    rating: 10,
    isBasket: false,
    buttonText: ButtonTextEnum.BUTTON_ADD_TO_BASKET,
  },
  {
    id: 7,
    idCategory: 3,
    name: 'Электромотор Wahoo GJ-32lb (до 1050кг)',
    img: 'https://karas.by/image/cache/catalog/Wahoo/wahoo-1-500x500-750x750.jpg',
    description:
      'Электромоторы работают с минимальным уровнем шума и создают идеальные условия для тролллинга.',
    price: 430,
    rating: 4,
    isBasket: false,
    buttonText: ButtonTextEnum.BUTTON_ADD_TO_BASKET,
  },
  {
    id: 8,
    idCategory: 3,
    name: 'Подвесной 2-х тактный бензиновый лодочный мотор HDX T 2.6 CBMS',
    img: 'https://karas.by/image/cache/catalog/HDX/T-2-3-750x750.jpg',
    description:
      'Лодочный мотор HDX T 2.6 CBMS – это мощность в 2.6 лошадиных сил в компактной оболочке двухтактного двигателя с объемом 50 куб.см.',
    price: 820,
    rating: 0,
    isBasket: false,
    buttonText: ButtonTextEnum.BUTTON_ADD_TO_BASKET,
  },
  {
    id: 9,
    idCategory: 3,
    name: 'Подвесной 2-х тактный бензиновый лодочный мотор Tarpon OTH 9.9S (Sea-Pro)',
    img: 'https://karas.by/image/cache/catalog/Sea-Pro/tarpon/tarpon-oth9-750x750.jpg',
    description:
      'Лодочный мотор Tarpon OTH 9.9S (Sea-Pro) – лодочный двигатель с традиционной для этого класса двухтактной компоновкой. Мотор оснащен двумя цилиндрами, что позволило значительно повысить мощность по сравнению с 1-цилиндровыми предшественниками.',
    price: 2800,
    rating: 3,
    isBasket: false,
    buttonText: ButtonTextEnum.BUTTON_ADD_TO_BASKET,
  },
  {
    id: 10,
    idCategory: 4,
    name: 'Костюм влагозащитный Vabik Waterstop',
    img: 'https://karas.by/image/cache/catalog/Vabik/Odezhda/kostyum-vlagozaschitnyj-vabik-waterstop-750x750.jpg',
    description:
      'Классический костюм для защиты от дождя и ветра. Изготовлен из непромокаемого материала. ',
    price: 76,
    rating: 6,
    isBasket: false,
    buttonText: ButtonTextEnum.BUTTON_ADD_TO_BASKET,
  },
  {
    id: 11,
    idCategory: 4,
    name: 'Сапоги забродные NordMan Expert с нейлоновым верхом (ЭВА, ТЭП)',
    img: 'https://karas.by/image/cache/catalog/NordMan/PE22_RN/sapogi-zabrodnye-nordman-expert-pe22-rn-750x750.jpg',
    description:
      'Сапоги забродные NordMan ПЕ-22 (ТЭП) РН для демисезонной и летней рыбалки. Базовый сапог из ЭВА с усиленной ТЭП подошвой для антипрокола и антискольжения. ',
    price: 79,
    rating: 8,
    isBasket: false,
    buttonText: ButtonTextEnum.BUTTON_ADD_TO_BASKET,
  },
  {
    id: 12,
    idCategory: 4,
    name: 'Полукомбинезон забродный Norfin RAPID',
    img: 'https://karas.by/image/cache/catalog/Norfin/zabrodniki-norfin-rapid-750x750.jpg',
    description:
      'Верхняя часть забродного полукомбинезона сделана из высококачественного трехслойного "дышащего" материала. Сапоги изготовлены из легкого и прочного ПВХ.',
    price: 380,
    rating: 1,
    isBasket: false,
    buttonText: ButtonTextEnum.BUTTON_ADD_TO_BASKET,
  },
  {
    id: 13,
    idCategory: 5,
    name: 'Эхолот Lucky Fish Finder FF168D',
    img: 'https://karas.by/image/cache/catalog/Lucky/FF168D/FF168D-750x750.jpg',
    description:
      'Портативный эхолот Lucky FF168D - это портативный двухлучевой эхолот с проводным датчиком, который прекрасно подойдет для поиска рыбы как для любителей подледной рыбалки, так и при использовании с лодки.',
    price: 250,
    rating: 8,
    isBasket: false,
    buttonText: ButtonTextEnum.BUTTON_ADD_TO_BASKET,
  },
  {
    id: 14,
    idCategory: 5,
    name: 'Эхолот Garmin Striker Vivid 7sv, 7 дюймов (сканер ClearVü, сканер SideVü, GPS)',
    img: 'https://karas.by/image/cache/catalog/Garmin/vivid/vivid72sv-1-750x750.jpg',
    description:
      'С эхолотом STRIKER Vivid 7sv с трансдьюсером GT52HW-TM вы сможете увидеть рыбу и ее структуру с максимальной детализацией, выбрав цвет дисплея, свое местоположение на воде и гидролокатор для дня.',
    price: 1734,
    rating: 6,
    isBasket: false,
    buttonText: ButtonTextEnum.BUTTON_ADD_TO_BASKET,
  },
  {
    id: 15,
    idCategory: 5,
    name: 'Автоматическое зарядное устройство Вымпел 20',
    img: 'https://karas.by/image/cache/catalog/demo/vimpel-20-750x750.jpg',
    description:
      'Зарядное устройство предназначено для заряда 12В автомобильных аккумуляторных батарей любой емкости в автоматическом режиме (автоматическое уменьшение тока в конце заряда).',
    price: 89,
    rating: 17,
    isBasket: false,
    buttonText: ButtonTextEnum.BUTTON_ADD_TO_BASKET,
  },
];
// === NameCategoryEnum.all_products
