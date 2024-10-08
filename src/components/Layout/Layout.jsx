import { useCallback } from 'react';
import { Outlet } from "react-router-dom";
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import SearchBar from './../SearchBar/SearchBar';
import priceList from './../../data/priceList';
import { services } from '../../data/servicesList';

const Layout = () => {
  const handleSearch = useCallback((searchTerm) => {
    const filteredPriceList = priceList.flatMap(category => {
      const matchingItems = category.items.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      
      if (matchingItems.length > 0 || category.category.toLowerCase().includes(searchTerm.toLowerCase())) {
        return [{
          ...category,
          type: 'product',
          items: matchingItems
        }];
      }
      
      return [];
    });

    const filteredServices = services.filter(item =>
      (item.name && item.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (item.shortDescription && item.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()))
    ).map(item => ({
      ...item,
      type: 'service'
    }));

    return [...filteredPriceList, ...filteredServices];
  }, []);

  return (
    <>
      <Header />
      <main className='main'>
        <SearchBar onSearch={handleSearch} />
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;