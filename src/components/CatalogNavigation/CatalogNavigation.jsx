import React from 'react';
import './CatalogNavigation.scss';

function CatalogNavigation({ direction, onClick }) {
  return (
    <div className={`catalog-navigation ${direction}`} onClick={onClick}>
      {direction === 'left' ? '<' : '>'}
    </div>
  );
}

export default CatalogNavigation;
