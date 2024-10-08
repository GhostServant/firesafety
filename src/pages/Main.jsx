import ProductGrid from "./../components/ProductGrid/ProductGrid";
import Catalog from "./../components/Catalog/Catalog";
import About from "./../components/About/About";
import YandexMap from "../components/YandexMap/YandexMap";


const Main = () => {
    const mapCenter = [44.044521, 42.858761];
    const mapZoom = 16;
    return <>
        <ProductGrid />
        <About />
        <YandexMap center={mapCenter} zoom={mapZoom} />
        <Catalog />
    </>
}

export default Main;