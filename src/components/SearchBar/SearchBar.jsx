import { useState, useEffect } from 'react';
import SearchIcon from './../../images/icon/search-icon.svg';
import SearchResults from './../SearchResults/SearchResults';
import './SearchBar.scss';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (searchTerm.length > 0) {
      const searchResults = onSearch(searchTerm);
      setResults(searchResults);
      setShowResults(searchResults.length > 0);
    } else {
      setResults([]);
      setShowResults(false);
    }
  }, [searchTerm, onSearch]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleResultClick = () => {
    setShowResults(false);
    setSearchTerm('');
  };

  return (
    <div className="search-bar">
      <div className="search-container">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Поиск..."
            value={searchTerm}
            onChange={handleInputChange}
          />
          <button type="submit">
            <img src={SearchIcon} alt="Search" className="search-icon" />
          </button>
        </form>
        {showResults && (
          <SearchResults results={results} onResultClick={handleResultClick} />
        )}
      </div>
    </div>
  );
}

export default SearchBar;