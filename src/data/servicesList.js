import Service1 from './../images/bg/services/Checking fire water sources for water discharge, GDP (internal water supplyfire fighting), NVP.png'
import Service2 from './../images/bg/services/Evacuation plans.png'
import Service3 from './../images/bg/services/Flame retardant treatment.png'
import Service4 from './../images/bg/services/Declarations of fire safety, calculation of fire risk.png'
import Service5 from './../images/bg/services/PS installation, PS repair.png'
import Service6 from './../images/bg/services/Tech.PS service, Video.png'
import Service7 from './../images/bg/services/Reloading fire extinguishers.png'
import Service8 from './../images/bg/services/Testing of fire escapes and roof fences.png'


export const services = [
  {
    id: 1,
    name: "Декларации пожарной безопасности, расчет пожарного риска",
    shortDescription: "Заявка, КП, договор",
    fullDescription: "Подготовка и оформление деклараций пожарной безопасности. Процесс включает анализ объекта, сбор документации и расчет пожарного риска. Мы учитываем все нормы и особенности объекта для составления полной и достоверной декларации.",
    linkTo: "/services/fire-safety-declarations",
    imageSrc: Service4
  },
  {
    id: 2,
    name: "Испытание пожарных лестниц и ограждений кровли",
    shortDescription: "1 раз в 5 лет (Заявка, КП, договор)",
    fullDescription: "Регулярные испытания пожарных лестниц и ограждений кровли для обеспечения их надежности и безопасности. Проводится комплексная проверка, включая визуальный осмотр, проверку прочности и нагрузочные испытания. По результатам испытаний составляется отчет с рекомендациями.",
    linkTo: "/services/ladders-and-roof-guards-testing",
    imageSrc: Service8
  },
  {
    id: 3,
    name: "Монтаж ПС, ремонт ПС",
    shortDescription: "Заявка, КП, договор. Стоимость после заявки",
    fullDescription: "Профессиональный монтаж и ремонт систем пожарной сигнализации (ПС). Услуги начинаются с обследования объекта и разработки проекта ПС. Мы используем современное оборудование и опытные специалисты. После установки производится настройка, программирование и тестирование системы.",
    linkTo: "/services/fire-alarm-system-installation-and-repair",
    imageSrc: Service5
  },
  {
    id: 4,
    name: "Техн.обсл ПС, Видео",
    shortDescription: "Заявка, КП, договор. Стоимость после заявки",
    fullDescription: "Комплексное техническое обслуживание систем противопожарной защиты, включая пожарную сигнализацию, системы видеонаблюдения, внутреннего водяного пожаротушения и наружного водоснабжения. Проводится проверка работоспособности, чистка и настройка оборудования, замена расходных материалов.",
    linkTo: "/services/fire-protection-systems-maintenance",
    imageSrc: Service6
  },
  {
    id: 5,
    name: "Огнезащитная обработка",
    shortDescription: "Заявка, КП, договор. Стоимость после заявки",
    fullDescription: "Профессиональное нанесение огнезащитных составов на различные поверхности и конструкции для повышения их огнестойкости. Процесс включает обследование объекта, подготовку поверхности и нанесение огнезащитного состава.",
    linkTo: "/services/fire-protective-coating",
    imageSrc: Service3
  },
  {
    id: 6,
    name: "Перезарядка огнетушителей",
    shortDescription: "Стоимость по прайсу. (ЛП)",
    fullDescription: "Профессиональное техническое обслуживание и перезарядка огнетушителей. Проводится полная диагностика, разборка, очистка и замена огнетушащего вещества. При необходимости выполняется замена деталей.",
    linkTo: "/services/fire-extinguisher-recharging",
    imageSrc: Service7
  },
  {
    id: 7,
    name: "Планы эвакуации",
    shortDescription: "4300,00 (Формат А2 фотолюминисцентные) (Заявка, КП, договор)",
    fullDescription: "Разработка и изготовление планов эвакуации в соответствии с нормативными требованиями. Процесс включает обследование объекта, создание плана эвакуации, изготовление планов и монтаж в соответствующих местах.",
    linkTo: "/services/evacuation-plans",
    imageSrc: Service2
  },
  {
    id: 8,
    name: "Проверка пожарных водоисточников на водоотдачу, ВВП (внутренее вод.пожаротушение), НВП",
    shortDescription: "ПК-проверка-2 р. в год, перемотка рукавов-1р.год (ПК-550,00 без перемотки, 800-с перемоткой) (ПГ-1р.год -4000,00)",
    fullDescription: "Комплексная проверка работоспособности пожарных кранов и гидрантов. Для пожарных кранов проводится визуальный осмотр, проверка целостности и гибкости рукавов, измерение давления и расхода воды.",
    linkTo: "/services/fire-water-sources-check",
    imageSrc: Service1,
  }
];

export const servicesName = [
  { value: "Декларации пожарной безопасности, расчет пожарного риска", label: "Декларации пожарной безопасности, расчет пожарного риска" },
  { value: "Испытание пожарных лестниц и ограждений кровли", label: "Испытание пожарных лестниц и ограждений кровли" },
  { value: "Монтаж ПС, ремонт ПС", label: "Монтаж ПС, ремонт ПС" },
  { value: "Техн.обсл ПС, Видео, ВВП (внутренее вод.пожаротушение), НВП", label: "Техн.обсл ПС, Видео, ВВП (внутренее вод.пожаротушение), НВП" },
  { value: "Огнезащитная обработка", label: "Огнезащитная обработка" },
  { value: "Перезарядка огнетушителей", label: "Перезарядка огнетушителей" },
  { value: "Планы эвакуации", label: "Планы эвакуации" },
  { value: "Проверка пожарных водоисточников на водоотдачу", label: "Проверка пожарных водоисточников на водоотдачу" },
];