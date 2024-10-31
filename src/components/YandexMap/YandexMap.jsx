import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import styles from './YandexMap.module.scss';

const YandexMap = ({ center, zoom, locations }) => {
  return (
    <YMaps query={{ apikey: '4961f2a2-f768-43ca-8e54-f763bb743ea7' }}>
      <div className={styles.mapContainer}>
        <Map defaultState={{ center, zoom }} width="100%" height="100%">
          {locations.map((location, index) => (
            <Placemark
              key={index}
              geometry={location.coordinates}
              properties={{
                hintContent: location.type === "office" ? "Главный офис" : "Пункт выдачи",
                balloonContent: `<strong>${location.label}</strong><br>${location.type === "office" ? "Главный офис" : "Пункт выдачи"}`
              }}
              options={{
                preset: location.type === "office" ? 'islands#redDotIcon' : 'islands#blueDotIcon',
              }}
            />
          ))}
        </Map>
      </div>
    </YMaps>
  );
};

export default YandexMap;
