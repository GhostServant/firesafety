import ProductGrid from "./../components/ProductGrid/ProductGrid";
import Catalog from "./../components/Catalog/Catalog";
import About from "./../components/About/About";
import YandexMap from "../components/YandexMap/YandexMap";


const Main = () => {
  const mapCenter = [44.044521, 42.858761];
  const mapZoom = 9;

  // Массив с адресами и типами для меток
  const locations = [
    { coordinates: [44.191635, 43.133156], type: "office", label: "Главный офис" },
    { coordinates: [44.044521, 42.858761], type: "pickup", label: "Пункт выдачи г. Ессентуки, ул. Советская, 67А" },
    { coordinates: [44.044422, 43.040459], type: "pickup", label: "Пункт выдачи Пятигорск, Украинская 34" },
  ];
    return <>
        <ProductGrid />
        <About />
        <YandexMap center={mapCenter} zoom={mapZoom} locations={locations} />
        <Catalog />
    </>
}

export default Main;