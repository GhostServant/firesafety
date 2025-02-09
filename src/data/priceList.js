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
      { id: 1, category: "Огнетушители", name: "Огнетушитель ОП-2", retailPrice: 570.00, wholesalePrice: 542.00, availability: "В наличии", productImage: Op2Image },
      { id: 2, category: "Огнетушители", name: "Огнетушитель ОП-3", retailPrice: 730.00, wholesalePrice: 694.00, availability: "В наличии", productImage: Op3Image },
      { id: 3, category: "Огнетушители", name: "Огнетушитель ОП-4", retailPrice: 910.00, wholesalePrice: 905.00, availability: "В наличии", productImage: Op4Image },
      { id: 4, category: "Огнетушители", name: "Огнетушитель ОП-5", retailPrice: 1010.00, wholesalePrice: 960.00, availability: "В наличии", productImage: Op5Image },
      { id: 5, category: "Огнетушители", name: "Огнетушитель ОП-8", retailPrice: 1200.00, wholesalePrice: 1140.00, availability: "В наличии", productImage: Op8Image },
      { id: 6, category: "Огнетушители", name: "Огнетушитель ОП-35", retailPrice: null, wholesalePrice: null, availability: "Под заказ", productImage: Op35Image },
      { id: 7, category: "Огнетушители", name: "Огнетушитель ОУ-1", retailPrice: null, wholesalePrice: null, availability: "Под заказ", productImage: Oy1Image },
      { id: 8, category: "Огнетушители", name: "Огнетушитель ОУ-2", retailPrice: 1650.00, wholesalePrice: 1568.00, availability: "В наличии", productImage: Oy2Image },
      { id: 9, category: "Огнетушители", name: "Огнетушитель ОУ-3", retailPrice: 1950.00, wholesalePrice: 1853.00, availability: "В наличии", productImage: Oy3Image },
      { id: 10, category: "Огнетушители", name: "Огнетушитель ОУ-5", retailPrice: null, wholesalePrice: null, availability: "Под заказ", productImage: Oy5Image },
      { id: 11, category: "Огнетушители", name: "Огнетушитель ОУ-7", retailPrice: null, wholesalePrice: null, availability: "Под заказ", productImage: Oy7Image }
    ]
  },
  {
    id: 2,
    category: "Пожарные щиты, шкафы, ящики",
    imageSrc: DefaultMainImage2,
    linkTo: '/catalog/fire-shields-cabinets-boxes',
    items: [
      { id: 1, category: "Пожарные щиты, шкафы, ящики", name: "ШПК-310 (шкаф под рукав)", retailPrice: 2350.00, wholesalePrice: 2233.00, availability: "В наличии", productImage: Cabinet310Image },
      { id: 2, category: "Пожарные щиты, шкафы, ящики", name: "ШПК-315 (рукав, огнетушитель)", retailPrice: 3400.00, wholesalePrice: 3230.00, availability: "В наличии", productImage: Cabinet315Image },
      { id: 3, category: "Пожарные щиты, шкафы, ящики", name: "ШПО-103 (шкаф для 1 огнетушителя)", retailPrice: 2030.00, wholesalePrice: 1929.00, availability: "В наличии", productImage: Cabinet103Image },
      { id: 4, category: "Пожарные щиты, шкафы, ящики", name: "Щит пожарный открытый (неукомплектованный)", retailPrice: 1700.00, wholesalePrice: 1695.00, availability: "В наличии", productImage: Cabinet2Image },
      { id: 5, category: "Пожарные щиты, шкафы, ящики", name: "Щит пожарный закрытый (неукомплектованный)", retailPrice: 4650.00, wholesalePrice: 4418.00, availability: "В наличии", productImage: Cabinet1Image },
      { id: 6, category: "Пожарные щиты, шкафы, ящики", name: "Ящик пожарный ЯП-0,1 куб.м", retailPrice: 2860.00, wholesalePrice: 2717.00, availability: "В наличии", productImage: Cabinet01Image },
      { id: 7, category: "Пожарные щиты, шкафы, ящики", name: "Ящик пожарный ЯП-0,2 куб.м", retailPrice: 4050.00, wholesalePrice: 3570.00, availability: "В наличии", productImage: Cabinet02Image },
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
      { id: 2, category: "Рукава пожарные для ПК с рабочим давлением 1,0 МПа", name: "Рукав для ПК Универсал д.51мм в комплекте с ГР-50 Русарсенал", retailPrice: 2850.00, wholesalePrice: 2708.00, availability: "В наличии", productImage: Sleeves2 },
      { id: 3, category: "Рукава пожарные для ПК с рабочим давлением 1,0 МПа", name: "Рукав для ПК Ф65мм с ГР-70, раб. давл. 1,0 МПА", retailPrice: null, wholesalePrice: null, availability: "Под заказ", productImage: Sleeves3 },
      { id: 4, category: "Рукава пожарные для ПК с рабочим давлением 1,0 МПа", name: "УВКП (Рукав Ф19мм в сумке, для квартир)", retailPrice: null, wholesalePrice: null, availability: "Под заказ", productImage: Sleeves4 }
    ]
  },
  {
    id: 4,
    category: "Противопожарный инвентарь",
    imageSrc: DefaultMainImage5,
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
        name: "Багор пожарный",
        retailPrice: 340.00,
        wholesalePrice: 325.00,
        availability: "В наличии",
        productImage: inventoryImage.gaff, // Соответствующее изображение для багра
      },
      {
        id: 3,
        category: "Противопожарный инвентарь",
        name: "Лопата пожарная",
        retailPrice: 360.00,
        wholesalePrice: 342.00,
        availability: "В наличии",
        productImage: inventoryImage.shovel, // Соответствующее изображение для лопаты
      },
      {
        id: 4,
        category: "Противопожарный инвентарь",
        name: "Топор",
        retailPrice: 620.00,
        wholesalePrice: 590.00,
        availability: "В наличии",
        productImage: inventoryImage.axe, // Соответствующее изображение для топора
      },
      {
        id: 5,
        category: "Противопожарный инвентарь",
        name: "Ведро конусное",
        retailPrice: 290.00,
        wholesalePrice: 276.00,
        availability: "В наличии",
        productImage: inventoryImage.bucketCone, // Соответствующее изображение для конусного ведра
      },
      {
        id: 6,
        category: "Противопожарный инвентарь",
        name: "Противопожарное полотно 1.6*2м (ШП-600)",
        retailPrice: 550.00,
        wholesalePrice: 523.00,
        availability: "В наличии",
        productImage: inventoryImage.fireproofFabric, // Соответствующее изображение для полотна
      },
      {
        id: 7,
        category: "Противопожарный инвентарь",
        name: "Вентиль для пожарного крана 51мм. Латунь (муфта/накидка) 15 БЗР, 1.6 МПА",
        retailPrice: "под заказ",
        wholesalePrice: "под заказ",
        availability: "Под заказ",
        productImage: inventoryImage.valve, // Соответствующее изображение для вентиля
      },
      {
        id: 8,
        category: "Противопожарный инвентарь",
        name: "Головка муфтовая/накидная, φ70",
        retailPrice: 250.00,
        wholesalePrice: 238.00,
        availability: "В наличии",
        productImage: inventoryImage.couplingHead70, // Соответствующее изображение для головки 70
      },
      {
        id: 9,
        category: "Противопожарный инвентарь",
        name: "Головка муфтовая/накидная, φ50",
        retailPrice: 200.00,
        wholesalePrice: 190.00,
        availability: "В наличии",
        productImage: inventoryImage.couplingHead50, // Соответствующее изображение для головки 50
      },
      {
        id: 10,
        category: "Противопожарный инвентарь",
        name: "Головка ГР-50",
        retailPrice: 240.00,
        wholesalePrice: 228.00,
        availability: "В наличии",
        productImage: inventoryImage.headGR50, // Соответствующее изображение для головки ГР-50
      },
      {
        id: 11,
        category: "Противопожарный инвентарь",
        name: "Ствол к пож. рукаву PC-50 пласт.",
        retailPrice: 120.00,
        wholesalePrice: 114.00,
        availability: "В наличии",
        productImage: inventoryImage.barrelPlastic, // Соответствующее изображение для ствола
      },
      {
        id: 12,
        category: "Противопожарный инвентарь",
        name: "Ствол к пож. рукаву PC-50 алюм.",
        retailPrice: 340.00,
        wholesalePrice: 323.00,
        availability: "В наличии",
        productImage: inventoryImage.barrelAluminum, // Соответствующее изображение для ствола
      },
      {
        id: 13,
        category: "Противопожарный инвентарь",
        name: "Подставка под огнетушитель П-10",
        retailPrice: 450.00,
        wholesalePrice: 428.00,
        availability: "В наличии",
        productImage: inventoryImage.extinguisherStandP10, // Соответствующее изображение для подставки
      },
      {
        id: 14,
        category: "Противопожарный инвентарь",
        name: "Подставка под огнетушитель П-15",
        retailPrice: 460.00,
        wholesalePrice: 437.00,
        availability: "В наличии",
        productImage: inventoryImage.extinguisherStandP15, // Соответствующее изображение для подставки
      },
      {
        id: 15,
        category: "Противопожарный инвентарь",
        name: "Шланг, раструб к огнетушителю",
        retailPrice: 100.00,
        wholesalePrice: 95.00,
        availability: "В наличии",
        productImage: inventoryImage.hoseNozzle, // Соответствующее изображение для шланга
      },
      {
        id: 16,
        category: "Противопожарный инвентарь",
        name: "Кронштейн с металлической защелкой",
        retailPrice: 250.00,
        wholesalePrice: 238.00,
        availability: "В наличии",
        productImage: inventoryImage.bracketLatch, // Соответствующее изображение для кронштейна
      }
    ]
  },
  {
    id: 5,
    category: "Полиграфическая продукция",
    imageSrc: DefaultMainImage4,
    linkTo: '/catalog/printed-products',
    items: [
      { id: 1,category: "Полиграфическая продукция", name: "Знаки ПБ на клейкой основе", retailPrice: 50.00, wholesalePrice: 48.00, availability: "В наличии",productImage: PrintedProducts1 },
      { id: 2,category: "Полиграфическая продукция", name: "Знаки ПБ \"Курить запрещается\" (нового образца)", retailPrice: 50.00, wholesalePrice: 48.00, availability: "В наличии",productImage: PrintedProducts2 },
      { id: 3,category: "Полиграфическая продукция", name: "Знаки ПБ - \"Пожарный гидрант\" на металле", retailPrice: 360.00, wholesalePrice: 342.00, availability: "В наличии",productImage: PrintedProducts3 },
      { id: 4,category: "Полиграфическая продукция", name: "Знаки ПБ светоотражающие", retailPrice: 80.00, wholesalePrice: 76.00, availability: "В наличии",productImage: PrintedProducts4 },
      { id: 5 ,category: "Полиграфическая продукция", name: "Плакат \"использование огнетушителя\"", retailPrice: 50.00, wholesalePrice: 47.00, availability: "В наличии",productImage: PrintedProducts5 }
    ]
  }
];

export default priceList; 