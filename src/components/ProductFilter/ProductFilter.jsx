import React, { useState, useRef } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import styles from './ProductFilter.module.scss';

const ProductFilter = ({ priceRange, setPriceRange, availability, setAvailability }) => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(true);
  const [isPriceOpen, setIsPriceOpen] = useState(true);
  const [isAvailabilityOpen, setIsAvailabilityOpen] = useState(true);

  const filterHeaderRef = useRef(null);

  const toggleFilters = () => {
    setIsFiltersOpen(!isFiltersOpen);
    addClickAnimation(filterHeaderRef.current);
  };

  const togglePriceFilter = () => setIsPriceOpen(!isPriceOpen);
  const toggleAvailabilityFilter = () => setIsAvailabilityOpen(!isAvailabilityOpen);

  const addClickAnimation = (element) => {
    element.classList.add(styles.clicked);
    setTimeout(() => element.classList.remove(styles.clicked), 300);
  };

  return (
    <div className={styles.filterContainer}>
      <div className={styles.filterHeader} onClick={toggleFilters} ref={filterHeaderRef}>
        <span>Фильтры</span>
        <span className={`${styles.arrow} ${isFiltersOpen ? styles.open : ''}`}>&#9660;</span>
      </div>
      <div
        className={styles.filterContent}
        style={{
          maxHeight: isFiltersOpen ? '1000px' : '0',
          opacity: isFiltersOpen ? 1 : 0,
          visibility: isFiltersOpen ? 'visible' : 'hidden',
        }}
      >
        <div className={styles.filterSection}>
          <div className={styles.sectionHeader} onClick={togglePriceFilter}>
            <span>Цена</span>
            <span className={`${styles.arrow} ${isPriceOpen ? styles.open : ''}`}>&#9660;</span>
          </div>
          <div
            className={styles.sectionContent}
            style={{
              maxHeight: isPriceOpen ? '1000px' : '0',
              opacity: isPriceOpen ? 1 : 0,
              visibility: isPriceOpen ? 'visible' : 'hidden',
            }}
          >
            <div className={styles.priceInputs}>
              <label>
                <input
                  type="number"
                  value={priceRange[0]}
                  onChange={(e) => {
                    const value = parseInt(e.target.value, 10);
                    setPriceRange([value, priceRange[1]]);
                  }}
                  className={styles.priceInputs_from}
                />
              </label>
              <label>
                <input
                  type="number"
                  value={priceRange[1]}
                  onChange={(e) => {
                    const value = parseInt(e.target.value, 10);
                    setPriceRange([priceRange[0], value]);
                  }}
                  className={styles.priceInputs_to}
                />
              </label>
            </div>
            <Slider
              range
              min={0}
              max={5000}
              value={priceRange}
              onChange={(value) => setPriceRange(value)}
              trackStyle={[{ backgroundColor: '#FE8B1E' }]}
              handleStyle={[
                { borderColor: '#FE8B1E', backgroundColor: '#FE8B1E' },
                { borderColor: '#FE8B1E', backgroundColor: '#FE8B1E' },
              ]}
              railStyle={{ backgroundColor: '#ddd' }}
            />
          </div>
        </div>

        <div className={styles.filterSection}>
          <div className={styles.sectionHeader} onClick={toggleAvailabilityFilter}>
            <span>Доступность</span>
            <span className={`${styles.arrow} ${isAvailabilityOpen ? styles.open : ''}`}>&#9660;</span>
          </div>
          <div
            className={styles.sectionContent}
            style={{
              maxHeight: isAvailabilityOpen ? '1000px' : '0',
              opacity: isAvailabilityOpen ? 1 : 0,
              visibility: isAvailabilityOpen ? 'visible' : 'hidden',
            }}
          >
            <label>
              <input
                type="checkbox"
                checked={availability.inStock}
                onChange={() => setAvailability({ ...availability, inStock: !availability.inStock })}
              />
              В наличии
            </label>
            <label>
              <input
                type="checkbox"
                checked={availability.onOrder}
                onChange={() => setAvailability({ ...availability, onOrder: !availability.onOrder })}
              />
              Под заказ
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;