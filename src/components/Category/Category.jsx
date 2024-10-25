import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductFilter from './../ProductFilter/ProductFilter';
import ItemList from './../ItemList/ItemList';
import ProductCatalog from './../ProductCatalog/ProductCatalog';
//import Pagination from '../Pagination/Pagination';
import styles from './Category.module.scss';
import priceList from '../../data/priceList';

const ITEMS_PER_PAGE = 5;

const Category = () => {
  const { categorySlug } = useParams();
  //const [currentPage, setCurrentPage] = useState(1);
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
    //setCurrentPage(1);
  }, [products, priceRange, availability]);

  //const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  //const displayedProducts = filteredProducts.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);


  // const handlePageChange = (page) => {
  //   setCurrentPage(page);
  // };

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
          {/* <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} /> */}
        </main>
      </div>
    </div>
  );
}

export default Category