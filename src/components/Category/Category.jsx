import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductFilter from './../ProductFilter/ProductFilter';
import ItemList from './../ItemList/ItemList';
import ProductCatalog from './../ProductCatalog/ProductCatalog';
import styles from './Category.module.scss';
import priceList from '../../data/priceList';


const Category = () => {
  const { categorySlug } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [availability, setAvailability] = useState({ inStock: false, onOrder: false });

  const category = priceList.find(category => category.linkTo === `/catalog/${categorySlug}`);
  const products = category ? category.items : [];
  const categoryName = category ? category.category : 'Категория не найдена';

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  useEffect(() => {
    const filtered = products.filter((product) => {
      const priceInRange = product.retailPrice === null || 
                           (product.retailPrice !== null && 
                            product.retailPrice >= priceRange[0] && 
                            product.retailPrice <= priceRange[1]);
      const availabilityMatch =
        (!availability.inStock && !availability.onOrder) ||
        (availability.inStock && product.availability === 'В наличии') ||
        (availability.onOrder && (product.availability === 'Под заказ' || product.retailPrice === null));

      return priceInRange && availabilityMatch;
    });

    setFilteredProducts(filtered);
  }, [products, priceRange, availability]);
  
  return (
    <div className={styles.homePage}>
      <h1>{categoryName}</h1>
      <div className={styles.content}>
        <aside className={styles.sidebar}>
          <ProductFilter
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            availability={availability}
            setAvailability={setAvailability}
          />
          <ProductCatalog />
        </aside>
        <main className={styles.main}>
          <ItemList products={filteredProducts} />
        </main>
      </div>
    </div>
  );
}

export default Category