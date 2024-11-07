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

import Sleeves1 from './../images/bg/sleeves/1.png';
import Sleeves2 from './../images/bg/sleeves/2.png';
import Sleeves3 from './../images/bg/sleeves/3.png';
import Sleeves4 from './../images/bg/sleeves/4.png';

import PrintedProducts1 from './../images/bg/printedProducts/PB signs on adhesive backing.png';
import PrintedProducts2 from './../images/bg/printedProducts/Safety signs _No smoking__.png';
import PrintedProducts3 from './../images/bg/printedProducts/Fire safety signs - _Fire hydrant__.png';
import PrintedProducts4 from './../images/bg/printedProducts/PB signs reflective.png';
import PrintedProducts5 from './../images/bg/printedProducts/Poster _using a fire extinguisher_.png';

import inventoryImage from './inventoryImages';

import DefaultMainImage1 from './../images/bg/mainBg/fire extinguisher.png'
import DefaultMainImage2 from './../images/bg/mainBg/Fire shields, cabinets, drawers.png'
import DefaultMainImage3 from './../images/bg/mainBg/Fire hoses for PC with working pressure 1.0 MPa.png'
import DefaultMainImage4 from './../images/bg/mainBg/Printing products.png'
import DefaultMainImage5 from './../images/bg/mainBg/Fire fighting equipment.png'


const priceList = [
  {
    id: 1,
    category: "Огнетушители",
    imageSrc: DefaultMainImage1,
    linkTo: '/catalog/fire-extinguishers',
    items: [
      { id: 1, category: "Огнетушители", name: "Огнетушитель ОП-2", retailPrice: 540.00, wholesalePrice: 513.00, availability: "В наличии", productImage: Op2Image },
      { id: 2, category: "Огнетушители", name: "Огнетушитель ОП-3", retailPrice: 690.00, wholesalePrice: 660.00, availability: "В наличии", productImage: Op3Image },
      { id: 3, category: "Огнетушители", name: "Огнетушитель ОП-4", retailPrice: 850.00, wholesalePrice: 808.00, availability: "В наличии", productImage: Op4Image },
      { id: 4, category: "Огнетушители", name: "Огнетушитель ОП-5", retailPrice: 950.00, wholesalePrice: 900.00, availability: "В наличии", productImage: Op5Image },
      { id: 5, category: "Огнетушители", name: "Огнетушитель ОП-8", retailPrice: 1100.00, wholesalePrice: 1045.00, availability: "В наличии", productImage: Op8Image },
      { id: 6, category: "Огнетушители", name: "Огнетушитель ОП-35", retailPrice: null, wholesalePrice: null, availability: "Под заказ", productImage: Op35Image },
      { id: 7, category: "Огнетушители", name: "Огнетушитель ОУ-1", retailPrice: 1520.00, wholesalePrice: null, availability: "В наличии", productImage: Oy1Image },
      { id: 8, category: "Огнетушители", name: "Огнетушитель ОУ-2", retailPrice: 1850.00, wholesalePrice: 1760.00, availability: "В наличии", productImage: Oy2Image },
      { id: 9, category: "Огнетушители", name: "Огнетушитель ОУ-3", retailPrice: null, wholesalePrice: null, availability: "Под заказ", productImage: Oy3Image },
      { id: 10, category: "Огнетушители", name: "Огнетушитель ОУ-5", retailPrice: 3100.00, wholesalePrice: null, availability: "В наличии", productImage: Oy5Image },
      { id: 11, category: "Огнетушители", name: "Огнетушитель ОУ-7", retailPrice: 3850.00, wholesalePrice: null, availability: "В наличии", productImage: Oy7Image }
    ]
  },
  {
    id: 2,
    category: "Пожарные щиты, шкафы, ящики",
    imageSrc: DefaultMainImage2,
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
    imageSrc: DefaultMainImage3,
    linkTo: '/catalog/fire-hoses',
    items: [
      { id: 1, category: "Рукава пожарные для ПК с рабочим давлением 1,0 МПа", name: "Рукав для ПК Ф51мм с ГР-50,раб. давл. 1,0 МПА (Китай)", retailPrice: 2450.00, wholesalePrice: 2350.00, availability: "В наличии", productImage: Sleeves1 },
      { id: 2, category: "Рукава пожарные для ПК с рабочим давлением 1,0 МПа", name: "Рукав для ПК Универсал д.51мм в комплекте с ГР-50 Русарсенал", retailPrice: 2700.00, wholesalePrice: 2570.00, availability: "В наличии", productImage: Sleeves2 },
      { id: 3, category: "Рукава пожарные для ПК с рабочим давлением 1,0 МПа", name: "Рукав для ПК Ф65мм с ГР-70, раб. давл. 1,0 МПА", retailPrice: null, wholesalePrice: null, availability: "Под заказ", productImage: Sleeves3 },
      { id: 4, category: "Рукава пожарные для ПК с рабочим давлением 1,0 МПа", name: "УВКП (Рукав Ф19мм в сумке, для квартир)", retailPrice: null, wholesalePrice: null, availability: "Под заказ", productImage: Sleeves4 }
    ]
  },
  {
    id: 4,
    category: "Противопожарный инвентарь",
    imageSrc: DefaultMainImage4,
    linkTo: '/catalog/fire-fighting-equipment',
    items: [
     {
    id: 1,
    category: "Противопожарный инвентарь",
    name: "Лом пожарный",
    retailPrice: 250.00,
    wholesalePrice: 238.00,
    availability: "В наличии",
    productImage: inventoryImage.crowbar, // Соответствующее изображение для лома пожарного
  },
  {
    id: 2,
    category: "Противопожарный инвентарь",
    name: "Топор",
    retailPrice: 300.00,
    wholesalePrice: 285.00,
    availability: "В наличии",
    productImage: inventoryImage.axe, // Соответствующее изображение для топора
  },
  {
    id: 3,
    category: "Противопожарный инвентарь",
    name: "Бочка для рукава RS-50 алюминиевая",
    retailPrice: 500.00,
    wholesalePrice: 475.00,
    availability: "В наличии",
    productImage: inventoryImage.barrelAluminum, // Соответствующее изображение для алюминиевой бочки
  },
  {
    id: 4,
    category: "Противопожарный инвентарь",
    name: "Бочка для рукава RS-50 пластиковая",
    retailPrice: 450.00,
    wholesalePrice: 428.00,
    availability: "В наличии",
    productImage: inventoryImage.barrelPlastic, // Соответствующее изображение для пластиковой бочки
  },
  {
    id: 5,
    category: "Противопожарный инвентарь",
    name: "Кронштейн T-3 к OP-4 с ремнем",
    retailPrice: 150.00,
    wholesalePrice: 140.00,
    availability: "В наличии",
    productImage: inventoryImage.bracketBelt, // Соответствующее изображение для кронштейна с ремнем
  },
  {
    id: 6,
    category: "Противопожарный инвентарь",
    name: "Кронштейн с металлической защелкой",
    retailPrice: 160.00,
    wholesalePrice: 150.00,
    availability: "В наличии",
    productImage: inventoryImage.bracketLatch, // Соответствующее изображение для кронштейна с защелкой
  },
  {
    id: 7,
    category: "Противопожарный инвентарь",
    name: "Конус-ведро",
    retailPrice: 100.00,
    wholesalePrice: 95.00,
    availability: "В наличии",
    productImage: inventoryImage.bucketCone, // Соответствующее изображение для конуса-ведра
  },
  {
    id: 8,
    category: "Противопожарный инвентарь",
    name: "Соединительная головка 50",
    retailPrice: 75.00,
    wholesalePrice: 70.00,
    availability: "В наличии",
    productImage: inventoryImage.couplingHead50, // Соответствующее изображение для головки 50
  },
  {
    id: 9,
    category: "Противопожарный инвентарь",
    name: "Соединительная головка 70",
    retailPrice: 80.00,
    wholesalePrice: 75.00,
    availability: "В наличии",
    productImage: inventoryImage.couplingHead70, // Соответствующее изображение для головки 70
  },
  {
    id: 10,
    category: "Противопожарный инвентарь",
    name: "Подставка для огнетушителя P-10",
    retailPrice: 200.00,
    wholesalePrice: 190.00,
    availability: "В наличии",
    productImage: inventoryImage.extinguisherStandP10, // Соответствующее изображение для подставки P-10
  },
  {
    id: 11,
    category: "Противопожарный инвентарь",
    name: "Подставка для огнетушителя P-15",
    retailPrice: 220.00,
    wholesalePrice: 210.00,
    availability: "В наличии",
    productImage: inventoryImage.extinguisherStandP15, // Соответствующее изображение для подставки P-15
  },
  {
    id: 12,
    category: "Противопожарный инвентарь",
    name: "Лопата пожарная",
    retailPrice: 120.00,
    wholesalePrice: 115.00,
    availability: "В наличии",
    productImage: inventoryImage.shovel, // Соответствующее изображение для лопаты
  },
  {
    id: 13,
    category: "Противопожарный инвентарь",
    name: "Гаф пожарный",
    retailPrice: 130.00,
    wholesalePrice: 125.00,
    availability: "В наличии",
    productImage: inventoryImage.gaff, // Соответствующее изображение для гафа
  },
  {
    id: 14,
    category: "Противопожарный инвентарь",
    name: "Огнеупорная ткань 1.5x2м (PP-600)",
    retailPrice: 350.00,
    wholesalePrice: 330.00,
    availability: "В наличии",
    productImage: inventoryImage.fireproofFabric, // Соответствующее изображение для огнеупорной ткани
  },
  {
    id: 15,
    category: "Противопожарный инвентарь",
    name: "Головка GR-50",
    retailPrice: 90.00,
    wholesalePrice: 85.00,
    availability: "В наличии",
    productImage: inventoryImage.headGR50, // Соответствующее изображение для головки GR-50
  },
  {
    id: 16,
    category: "Противопожарный инвентарь",
    name: "Вентиль для пожарного гидранта 51мм",
    retailPrice: 110.00,
    wholesalePrice: 105.00,
    availability: "В наличии",
    productImage: inventoryImage.valve, // Соответствующее изображение для вентиля
  }
    ]
  },
  {
    id: 5,
    category: "Полиграфическая продукция",
    imageSrc: DefaultMainImage5,
    linkTo: '/catalog/printed-products',
    items: [
      { id: 1,category: "Полиграфическая продукция", name: "Знаки ПБ на клейкой основе", retailPrice: 40.00, wholesalePrice: 38.00, availability: "В наличии",productImage: PrintedProducts1 },
      { id: 2,category: "Полиграфическая продукция", name: "Знаки ПБ \"Курить запрещается\" (нового образца)", retailPrice: 40.00, wholesalePrice: 38.00, availability: "В наличии",productImage: PrintedProducts2 },
      { id: 3,category: "Полиграфическая продукция", name: "Знаки ПБ - \"Пожарный гидрант\" на металле", retailPrice: 325.00, wholesalePrice: 310.00, availability: "В наличии",productImage: PrintedProducts3 },
      { id: 4,category: "Полиграфическая продукция", name: "Знаки ПБ светоотражающие", retailPrice: 70.00, wholesalePrice: 66.00, availability: "В наличии",productImage: PrintedProducts4 },
      { id: 5 ,category: "Полиграфическая продукция", name: "Плакат \"использование огнетушителя\"", retailPrice: 50.00, wholesalePrice: 47.00, availability: "В наличии",productImage: PrintedProducts5 }
    ]
  }
];

export default priceList; 