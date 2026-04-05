'use client';

import { useState } from 'react';

export interface FilterOptions {
  category: string;
  priceRange: [number, number];
  sortBy: 'name' | 'price-asc' | 'price-desc';
}

interface FiltersProps {
  categories: string[];
  onFilterChange: (filters: FilterOptions) => void;
}

const Filters = ({ categories, onFilterChange }: FiltersProps) => {
  const [category, setCategory] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);
  const [sortBy, setSortBy] = useState<'name' | 'price-asc' | 'price-desc'>('name');

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newCategory = e.target.value;
    setCategory(newCategory);
    onFilterChange({ category: newCategory, priceRange, sortBy });
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>, index: 0 | 1) => {
    const newPriceRange = [...priceRange] as [number, number];
    newPriceRange[index] = Number(e.target.value);
    setPriceRange(newPriceRange);
    onFilterChange({ category, priceRange: newPriceRange, sortBy });
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSortBy = e.target.value as 'name' | 'price-asc' | 'price-desc';
    setSortBy(newSortBy);
    onFilterChange({ category, priceRange, sortBy: newSortBy });
  };

  return (
    <div className="filters">
      <div className="filter-group">
        <label>Catégorie :</label>
        <select value={category} onChange={handleCategoryChange}>
          <option value="">Toutes</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
      <div className="filter-group">
        <label>Prix min :</label>
        <input
          type="number"
          value={priceRange[0]}
          onChange={(e) => handlePriceChange(e, 0)}
          min="0"
        />
        <label>Prix max :</label>
        <input
          type="number"
          value={priceRange[1]}
          onChange={(e) => handlePriceChange(e, 1)}
          min="0"
        />
      </div>
      <div className="filter-group">
        <label>Trier par :</label>
        <select value={sortBy} onChange={handleSortChange}>
          <option value="name">Nom (A-Z)</option>
          <option value="price-asc">Prix croissant</option>
          <option value="price-desc">Prix décroissant</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;