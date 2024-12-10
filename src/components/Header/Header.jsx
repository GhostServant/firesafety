import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import Modal from './../Modal/Modal';
import OrderForm from '../OrderForm/OrderForm';
import FileListModal from './../FileListModal/FileListModal';
import './Header.scss';
import { useRecoilValue } from 'recoil';
import { cartState } from '../../recoil/atoms';
import HeaderLogo from './../../images/bg/logo.jpg';
import { FaFileAlt } from 'react-icons/fa'; // Иконка для файлов

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isFileListModalOpen, setIsFileListModalOpen] = useState(false); // Новое состояние для модального окна со списком файлов

  const cart = useRecoilValue(cartState);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const windowHeight = window.innerHeight;

      let scrollPercent = 0;
      if (docHeight > 0) {
        scrollPercent = (scrollTop / docHeight) * 100;
      } else {
        scrollPercent = (scrollTop / windowHeight) * 100;
      }

      setIsScrolled(scrollTop > 0);
      setScrollProgress(scrollPercent > 100 ? 100 : scrollPercent);
    };

    if (location.pathname !== '/basket') {
      window.addEventListener('scroll', handleScroll);
      handleScroll();
    } else {
      setIsScrolled(false);
      setScrollProgress(0);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleCallButtonClick = () => {
    setIsCallModalOpen(true);
  };

  const handleOrderButtonClick = () => {
    setIsOrderModalOpen(true);
  };

  const handleFileListButtonClick = () => {
    setIsFileListModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsCallModalOpen(false);
    setIsOrderModalOpen(false);
    setIsFileListModalOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-top">
        <div className="logo">
          <img src={HeaderLogo} alt="Магазин 01" />
        </div>
        <nav className="top-nav">
          <ul>
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/catalog">Каталог</Link></li>
            <li><Link to="/services">Услуги</Link></li>
            <li><Link to="/contacts">Контакты</Link></li>
          </ul>
        </nav>
        <div className="action-buttons">
          <button className="order-button" onClick={handleOrderButtonClick}>Оставить заявку</button>
          <button className="call-button" onClick={handleCallButtonClick}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
              <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 00-1.02.24l-2.2 2.2a15.045 15.045 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1A11.36 11.36 0 018.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 12h2a9 9 0 00-9-9v2c3.87 0 7 3.13 7 7zm-4 0h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3z"/>
            </svg>
          </button>
          <button className="file-list-button" onClick={handleFileListButtonClick}>
            <FaFileAlt className="icon" />
            <span>Формы заявок</span>
          </button>
          <Link to="/basket" className="cart">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
              <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0020 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
            </svg>
            <span className="cart-count">{cart.length}</span>
          </Link>
        </div>
      </div>

      {location.pathname !== '/basket' && (
        <div className="scroll-progress" style={{ width: `${scrollProgress}%` }}></div>
      )}

      <Modal isOpen={isCallModalOpen} onClose={handleCloseModal}>
        <OrderForm
          title={'Заказать звонок'}
          showEmail={false}
          showMessage={false}
          showFileUpload={false}
          showQuantity={false}
          scenario={2}
        />
      </Modal>
      <Modal isOpen={isOrderModalOpen} onClose={handleCloseModal}>
        <OrderForm
          title={'Оставить заявку'}
          showEmail={false}
          showName={false}
          showMessage={false}
          showQuantity={false}
          showInn={true}
          showServiceSelect={true}
          scenario={1}
        />
      </Modal>
      <FileListModal isOpen={isFileListModalOpen} onClose={handleCloseModal} /> {/* Новый компонент */}
    </header>
  );
}

export default Header;
