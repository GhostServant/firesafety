import MainExtinguisherImage from '../images/bg/extinguisher/main.png';
import Op2Image from './../images/bg/extinguisher/op-2.png';
import Op3Image from './../images/bg/extinguisher/op-3.png';
import Op4Image from './../images/bg/extinguisher/op-4.png';
import Op5Image from './../images/bg/extinguisher/op-5.png';
import Op8Image from './../images/bg/extinguisher/op-8.png';
import Op35Image from './../images/bg/extinguisher/op-35.jpg';
import Oy1Image from './../images/bg/extinguisher/oy-1.png';
import Oy2Image from './../images/bg/extinguisher/oy-2.png';
import Oy3Image from './../images/bg/extinguisher/oy-3.png';
import Oy5Image from './../images/bg/extinguisher/oy-5.png';
import Oy7Image from './../images/bg/extinguisher/oy-7.png';

import Cabinet01Image from './../images/bg/fireCabinet/0-1.png';
import Cabinet02Image from './../images/bg/fireCabinet/0-2.png';
import Cabinet05Image from './../images/bg/fireCabinet/0-5.png';
import Cabinet1Image from './../images/bg/fireCabinet/1.png';
import Cabinet2Image from './../images/bg/fireCabinet/2.png';
import Cabinet103Image from './../images/bg/fireCabinet/103.png';
import Cabinet310Image from './../images/bg/fireCabinet/310.png';
import Cabinet315Image from './../images/bg/fireCabinet/315.png';

const DEFAULT_IMAGE = 'https://www.magazin01.ru/upload/iblock/f32/qbz4ezesr4dh1pumjaztiv2zq5zir94b/Bezimeni_7.png';


const priceList = [
  {
    id: 1,
    category: "Огнетушители",
    imageSrc: DEFAULT_IMAGE,
    linkTo: '/catalog/fire-extinguishers',
    items: [
      { id: 1, category: "Огнетушители", name: "Огнетушитель ОП-2", retailPrice: 540.00, wholesalePrice: 513.00, availability: "В наличии", productImage: Op2Image },
      { id: 2, category: "Огнетушители", name: "Огнетушитель ОП-3", retailPrice: 690.00, wholesalePrice: 660.00, availability: "В наличии", productImage: Op3Image },
      { id: 3, category: "Огнетушители", name: "Огнетушитель ОП-4", retailPrice: 850.00, wholesalePrice: 808.00, availability: "В наличии", productImage: Op4Image },
      { id: 4, category: "Огнетушители", name: "Огнетушитель ОП-5", retailPrice: 950.00, wholesalePrice: 900.00, availability: "В наличии", productImage: Op5Image },
      { id: 5, category: "Огнетушители", name: "Огнетушитель ОП-8", retailPrice: 1100.00, wholesalePrice: 1045.00, availability: "В наличии", productImage: Op8Image },
      { id: 6, category: "Огнетушители", name: "Огнетушитель ОП-35", retailPrice: null, wholesalePrice: null, availability: "Под заказ", productImage: Op35Image },
      { id: 7, category: "Огнетушители", name: "Огнетушитель ОУ-1", retailPrice: 1550.00, wholesalePrice: 1450.00, availability: "В наличии", productImage: Oy1Image },
      { id: 8, category: "Огнетушители", name: "Огнетушитель ОУ-2", retailPrice: 1850.00, wholesalePrice: 1760.00, availability: "В наличии", productImage: Oy2Image },
      { id: 9, category: "Огнетушители", name: "Огнетушитель ОУ-3", retailPrice: null, wholesalePrice: null, availability: "Под заказ", productImage: Oy3Image },
      { id: 10, category: "Огнетушители", name: "Огнетушитель ОУ-5", retailPrice: null, wholesalePrice: null, availability: "Под заказ", productImage: Oy5Image },
      { id: 11, category: "Огнетушители", name: "Огнетушитель ОУ-7", retailPrice: null, wholesalePrice: null, availability: "Под заказ", productImage: Oy7Image }
    ]
  },
  {
    id: 2,
    category: "Пожарные щиты, шкафы, ящики",
    imageSrc: DEFAULT_IMAGE,
    linkTo: '/catalog/fire-shields-cabinets-boxes',
    items: [
      { id: 1, category: "Пожарные щиты, шкафы, ящики", name: "ШПК-310 (шкаф под рукав)", retailPrice: 2200.00, wholesalePrice: 2090.00, availability: "В наличии", productImage: Cabinet310Image },
      { id: 2, category: "Пожарные щиты, шкафы, ящики", name: "ШПК-315 (рукав, огнетушитель)", retailPrice: 3200.00, wholesalePrice: 3040.00, availability: "В наличии", productImage: Cabinet315Image },
      { id: 3, category: "Пожарные щиты, шкафы, ящики", name: "ШПО-103 (шкаф для 1 огнетушителя)", retailPrice: 1900.00, wholesalePrice: 1800.00, availability: "В наличии", productImage: Cabinet103Image },
      { id: 4, category: "Пожарные щиты, шкафы, ящики", name: "Щит пожарный открытый (неукомплектованный)", retailPrice: 1590.00, wholesalePrice: 1510.00, availability: "В наличии", productImage: Cabinet1Image },
      { id: 5, category: "Пожарные щиты, шкафы, ящики", name: "Щит пожарный закрытый (неукомплектованный)", retailPrice: 4290.00, wholesalePrice: 4075.00, availability: "В наличии", productImage: Cabinet2Image },
      { id: 6, category: "Пожарные щиты, шкафы, ящики", name: "Ящик пожарный ЯП-0,1 куб.м", retailPrice: 2700.00, wholesalePrice: 2430.00, availability: "В наличии", productImage: Cabinet01Image },
      { id: 7, category: "Пожарные щиты, шкафы, ящики", name: "Ящик пожарный ЯП-0,2 куб.м", retailPrice: 3770.00, wholesalePrice: 3570.00, availability: "В наличии", productImage: Cabinet02Image },
      { id: 8, category: "Пожарные щиты, шкафы, ящики", name: "Ящик пожарный ЯП-0,5 куб.м", retailPrice: null, wholesalePrice: null, availability: "Под заказ", productImage: Cabinet05Image }
    ]
  },
  {
    id: 3,
    category: "Рукава пожарные для ПК с рабочим давлением 1,0 МПа",
    imageSrc: DEFAULT_IMAGE,
    linkTo: '/catalog/fire-hoses',
    items: [
      { id: 1, category: "Рукава пожарные для ПК с рабочим давлением 1,0 МПа", name: "Рукав для ПК Ф51мм с ГР-50,раб. давл. 1,0 МПА (Китай)", retailPrice: 2450.00, wholesalePrice: 2350.00, availability: "В наличии", productImage: DEFAULT_IMAGE },
      { id: 2, category: "Рукава пожарные для ПК с рабочим давлением 1,0 МПа", name: "Рукав для ПК Универсал д.51мм в комплекте с ГР-50 Русарсенал", retailPrice: 2700.00, wholesalePrice: 2570.00, availability: "В наличии", productImage: DEFAULT_IMAGE },
      { id: 3, category: "Рукава пожарные для ПК с рабочим давлением 1,0 МПа", name: "Рукав для ПК Ф65мм с ГР-70, раб. давл. 1,0 МПА", retailPrice: null, wholesalePrice: null, availability: "Под заказ", productImage: DEFAULT_IMAGE },
      { id: 4, category: "Рукава пожарные для ПК с рабочим давлением 1,0 МПа", name: "УВКП (Рукав Ф19мм в сумке, для квартир)", retailPrice: null, wholesalePrice: null, availability: "Под заказ", productImage: DEFAULT_IMAGE }
    ]
  },
  {
    id: 4,
    category: "Противопожарный инвентарь",
    imageSrc: DEFAULT_IMAGE,
    linkTo: '/catalog/fire-fighting-equipment',
    items: [
      { id: 1, category: "Противопожарный инвентарь", name: "Лом пожарный", retailPrice: 250.00, wholesalePrice: 238.00, availability: "В наличии", productImage: DEFAULT_IMAGE },
      { id: 2, category: "Противопожарный инвентарь", name: "Багор пожарный", retailPrice: 340.00, wholesalePrice: 325.00, availability: "В наличии", productImage: DEFAULT_IMAGE },
      { id: 3, category: "Противопожарный инвентарь", name: "Лопата пожарная", retailPrice: 360.00, wholesalePrice: 342.00, availability: "В наличии", productImage: DEFAULT_IMAGE },
      { id: 4, category: "Противопожарный инвентарь", name: "Топор", retailPrice: 620.00, wholesalePrice: 590.00, availability: "В наличии", productImage: DEFAULT_IMAGE },
      { id: 5, category: "Противопожарный инвентарь", name: "Ведро конусное", retailPrice: 280.00, wholesalePrice: 257.00, availability: "В наличии", productImage: DEFAULT_IMAGE },
      { id: 6, category: "Противопожарный инвентарь", name: "Противопожарное полотно 1,5*2м (ПП-600)", retailPrice: 520.00, wholesalePrice: 495.00, availability: "В наличии", productImage: DEFAULT_IMAGE },
      { id: 7, category: "Противопожарный инвентарь", name: "Вентиль (для пожарного крана) Ф51мм. Латунь (муфта/цапка) 15 БЗР, 1,6 МПА", retailPrice: null, wholesalePrice: null, availability: "Под заказ", productImage: DEFAULT_IMAGE },
      { id: 8, category: "Противопожарный инвентарь", name: "Головка муфтовая/цапковая, Ф70", retailPrice: 200.00, wholesalePrice: 190.00, availability: "В наличии", productImage: DEFAULT_IMAGE },
      { id: 9, category: "Противопожарный инвентарь", name: "Головка муфтовая/цапковая, Ф50", retailPrice: 160.00, wholesalePrice: 152.00, availability: "В наличии", productImage: DEFAULT_IMAGE },
      { id: 10, category: "Противопожарный инвентарь", name: "Головка ГР-50", retailPrice: 170.00, wholesalePrice: 162.00, availability: "В наличии", productImage: DEFAULT_IMAGE },
      { id: 11, category: "Противопожарный инвентарь", name: "Ствол к пож.рукаву РС-50 пласт.", retailPrice: 120.00, wholesalePrice: 114.00, availability: "В наличии", productImage: DEFAULT_IMAGE },
      { id: 12, category: "Противопожарный инвентарь", name: "Ствол к пож.рукаву РС-50 алюм.", retailPrice: 340.00, wholesalePrice: 323.00, availability: "В наличии", productImage: DEFAULT_IMAGE },
      { id: 13, category: "Противопожарный инвентарь", name: "Подставка под огнетушитель П-10", retailPrice: 410.00, wholesalePrice: 390.00, availability: "В наличии", productImage: DEFAULT_IMAGE },
      { id: 14, category: "Противопожарный инвентарь", name: "Подставка под огнетушитель П-15", retailPrice: 450.00, wholesalePrice: 430.00, availability: "В наличии", productImage: DEFAULT_IMAGE },
      { id: 15, category: "Противопожарный инвентарь", name: "Шкаф-костюм к огнетушителю", retailPrice: 100.00, wholesalePrice: 95.00, availability: "В наличии", productImage: DEFAULT_IMAGE },
      { id: 16, category: "Противопожарный инвентарь", name: "Кронштейн с металлической защелкой", retailPrice: 220.00, wholesalePrice: 209.00, availability: "В наличии", productImage: DEFAULT_IMAGE },
      { id: 17, category: "Противопожарный инвентарь", name: "Кронштейн Т-3 к ОП-4 с ремнем", retailPrice: 200.00, wholesalePrice: 190.00, availability: "В наличии", productImage: DEFAULT_IMAGE }
    ]
  },
  {
    id: 5,
    category: "Полиграфическая продукция",
    imageSrc: DEFAULT_IMAGE,
    linkTo: '/catalog/printed-products',
    items: [
      { id: 1,category: "Полиграфическая продукция", name: "Знаки ПБ на клейкой основе", retailPrice: 40.00, wholesalePrice: 38.00, availability: "В наличии",productImage: DEFAULT_IMAGE },
      { id: 2,category: "Полиграфическая продукция", name: "Знаки ПБ \"Курить запрещается\" (нового образца)", retailPrice: 40.00, wholesalePrice: 38.00, availability: "В наличии",productImage: DEFAULT_IMAGE },
      { id: 3,category: "Полиграфическая продукция", name: "Знаки ПБ - \"Пожарный гидрант\" на металле", retailPrice: 325.00, wholesalePrice: 310.00, availability: "В наличии",productImage: DEFAULT_IMAGE },
      { id: 4,category: "Полиграфическая продукция", name: "Знаки ПБ светоотражающие", retailPrice: 70.00, wholesalePrice: 66.00, availability: "В наличии",productImage: DEFAULT_IMAGE },
      { id: 5,category: "Полиграфическая продукция", name: "Журналы эксплуатации систем противопожарной защиты", retailPrice: 100.00, wholesalePrice: 95.00, availability: "В наличии",productImage: DEFAULT_IMAGE },
      { id: 6,category: "Полиграфическая продукция", name: "Журналы в ассортименте", retailPrice: 80.00, wholesalePrice: 76.00, availability: "В наличии",productImage: DEFAULT_IMAGE },
      { id: 7,category: "Полиграфическая продукция", name: "Плакат \"использование огнетушителя\"", retailPrice: 50.00, wholesalePrice: 47.00, availability: "В наличии",productImage: DEFAULT_IMAGE }
    ]
  },
  {
    id: 6,
    category: "Огнезащитная обработка",
    imageSrc: DEFAULT_IMAGE,
    linkTo: '/catalog/fire-retardant-treatment',
    items: [
      { 
        id: 1,
        category: "Огнезащитная обработка",
        name: "Огнезащитная обработка деревянных конструкций, 1 кв.м.", 
        retailPrice: 35.00, 
        wholesalePrice: null,
        productImage: DEFAULT_IMAGE,
        availability: "В наличии" 
      },
      { 
        id: 2,
        category: "Огнезащитная обработка",
        name: "Огнезащитная обработка металлических конструкций огнезащитными, кв.м.", 
        retailPrice: null, 
        wholesalePrice: null,
        productImage: DEFAULT_IMAGE,
        availability: "Под заказ" 
      }
    ]
  }
];

export default priceList; 