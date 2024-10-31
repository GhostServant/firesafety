import ProductGrid from "./../components/ProductGrid/ProductGrid";
import Catalog from "./../components/Catalog/Catalog";
import About from "./../components/About/About";
import YandexMap from "../components/YandexMap/YandexMap";


const Main = () => {
    const companyDescription = "Мы - ведущая организация в сфере пожарной безопасности, предоставляющая широкий спектр услуг по защите жизни и имущества от огня.";
  const contactInfo = {
    address: "г. Ессентуки, ул. Советская, 67А",
    phones: ["+7 (879) 343-67-34", "+7 (879) 343-67-35"],
    email: "vdpo.kmv@mail.ru"
  };

  const mapCenter = [44.044521, 42.858761];
  const mapZoom = 9;

  // Массив с адресами и типами для меток
  const locations = [
    { coordinates: [44.044521, 42.858761], label: "Главный офис", type: "office" },
    { coordinates: [44.2096, 43.1353], label: "Пункт выдачи Минеральные воды, ул. Новосёлов, 9А", type: "pickup" },
    { coordinates: [44.0486, 43.0583], label: "Пункт выдачи Пятигорск, ул. Украинская, 34", type: "pickup" }
  ];
    return <>
        <ProductGrid />
        <About />
        <YandexMap center={mapCenter} zoom={mapZoom} locations={locations} />
        <Catalog />
    </>
}

export default Main;