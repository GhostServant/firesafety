import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import ProductCard from '../ProductCard/ProductCard';
import { services } from '../../data/servicesList';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './ProductGrid.scss';

function ProductGrid() {
  return (
    <div className="product-grid-container">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={15} 
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            400: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4, 
            },
            1440: {
              slidesPerView: 5, 
            },
          }}
          className="product-grid-swiper"
        >
        {services.map((category) => (
          <SwiperSlide key={category.id}>
            <ProductCard
              image={category.imageSrc}
              title={category.name}
              link={category.linkTo}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ProductGrid;