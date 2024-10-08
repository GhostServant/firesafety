import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import styles from './YandexMap.module.scss';

const YandexMap = ({ center, zoom }) => {
  return (
    <YMaps query={{ apikey: '4961f2a2-f768-43ca-8e54-f763bb743ea7' }}>
      <div className={styles.mapContainer}>
        <Map defaultState={{ center, zoom }} width="100%" height="100%">
          <Placemark geometry={center} />
        </Map>
      </div>
    </YMaps>
  );
};

export default YandexMap;