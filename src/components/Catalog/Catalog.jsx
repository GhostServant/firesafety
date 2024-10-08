import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import './Catalog.scss';
import CatalogItem from './../CatalogItem/CatalogItem';

import priceList from '../../data/priceList';


function Catalog() {
  return (
    <div className="catalog">
      <h2>Каталог продукции</h2>
      <div className="catalog-container">
        <Swiper
          navigation={true}
          spaceBetween={30}
          breakpoints={{
            300: {
              slidesPerView: 2,
            },
            400: {
              slidesPerView: 3,
            },
            600: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 5,
          },
          }}
          loop={true}
          modules={[Navigation]}
        >
          {priceList.map((item, index) => (
            <SwiperSlide key={index}>
              <CatalogItem 
                imageSrc={item.imageSrc} 
                title={item.category} 
                description={item.description} 
                linkTo={item.linkTo} 
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Catalog;
