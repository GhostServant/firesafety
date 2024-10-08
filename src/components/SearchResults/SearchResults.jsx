import React from 'react';
import { Link } from 'react-router-dom';
import './SearchResults.scss';

function SearchResults({ results, onResultClick }) {
  return (
    <div className="search-results">
      {results.map((result, index) => (
        <div key={`${result.id}-${index}`} className="search-result-category">
          <Link 
            to={result.linkTo} 
            className="search-result-item"
            onClick={() => onResultClick()}
          >
            <img src={result.imageSrc} alt={result.category || result.name} className="result-image" />
            <div className="result-info">
              <h3>{result.category || result.name}</h3>
              {result.type === 'service' && <p>{result.shortDescription}</p>}
            </div>
          </Link>
          {result.type === 'product' && result.items && result.items.length > 0 && (
            <div className="search-result-items">
              {result.items.map((item, itemIndex) => (
                <div key={`${item.id}-${itemIndex}`} className="search-result-subitem">
                  <p>{item.name}</p>
                  <p className="price">
                    {item.retailPrice ? `${item.retailPrice} руб.` : 'Под заказ'}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default SearchResults;