import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';
import Loader from './../components/Loader/Loader';

const Main = lazy(() => import('./../pages/Main'));
const ServicesPage = lazy(() => import('../pages/ServicesPage'));
const CatalogPage = lazy(() => import('../pages/CatalogPage'));
const CategoryPage = lazy(() => import('../pages/CategoryPage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));
const ServicesItemPage = lazy(() => import('../pages/ServicesItemPage'));
const CartPage = lazy(() => import('../pages/CartPage'));
const Layout = lazy(() => import('./../components/Layout/Layout'));

const AppRoutes = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="services/:name" element={<ServicesItemPage />} />
            <Route path="catalog" element={<CatalogPage />} />
            <Route path="catalog/:categorySlug" element={<CategoryPage />} />
            <Route path="contacts" element={<ContactPage />} />
            <Route path="basket" element={<CartPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default AppRoutes;
