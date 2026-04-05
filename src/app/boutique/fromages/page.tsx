'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getProducts, getProductsByCategory, Product } from '../../../lib/stripe';
import Filters, { FilterOptions } from '../../../components/Filters';

export default function Fromages() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const allProducts = await getProducts();
      const fromagesProducts = getProductsByCategory(allProducts, 'fromages');
      setProducts(fromagesProducts);
      setFilteredProducts(fromagesProducts);
      setCategories(['fromages']);
    };
    fetchProducts();
  }, []);

  const applyFilters = (filters: FilterOptions) => {
    let filtered = products;

    filtered = filtered.filter(p => p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]);

    if (filters.sortBy === 'name') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (filters.sortBy === 'price-asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (filters.sortBy === 'price-desc') {
      filtered.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(filtered);
  };

  return (
    <div className="boutique">
      <h1>Fromages</h1>
      <Filters categories={categories} onFilterChange={applyFilters} />
      <div className="products-grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.images[0]} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="price">{product.price} €</p>
            <Link href={`/boutique/${product.id}`} className="product-link">
              Voir le produit
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}