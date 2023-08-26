import React, { useState } from 'react';

const ImageFilter = ({ products, onFilter }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All');

  const uniqueCategories = ['All', ...new Set(products.map(product => product.category))];
  const uniquePriceRanges = ['All', '$0 - $50', '$51 - $100', '$101+'];

  const handleCategoryChange = event => {
    setSelectedCategory(event.target.value);
    onFilter(selectedPriceRange, event.target.value);
  };

  const handlePriceRangeChange = event => {
    setSelectedPriceRange(event.target.value);
    onFilter(event.target.value, selectedCategory);
  };

  return (
    <div>
      <label>Category:</label>
      <select value={selectedCategory} onChange={handleCategoryChange}>
        {uniqueCategories.map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <label>Price Range:</label>
      <select value={selectedPriceRange} onChange={handlePriceRangeChange}>
        {uniquePriceRanges.map(range => (
          <option key={range} value={range}>
            {range}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ImageFilter;




