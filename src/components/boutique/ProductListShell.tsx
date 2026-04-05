'use client';

import { useState, useMemo, useEffect } from 'react';
import ProductCard from '../shared/ProductCard';
import Filters, { DEFAULT_FILTERS, type FilterOptions } from './Filters';
import Pagination from './Pagination';
import type { Product } from '../../lib/stripe';

interface ProductListShellProps {
  initialProducts: Product[];
  showFilters?: boolean;
}

const PRODUCTS_PER_PAGE = 12;

function applyFilters(products: Product[], filters: FilterOptions): Product[] {
  let result = products.filter(p => {
    if (p.price < filters.priceMin) return false;
    if (filters.priceMax !== null && p.price > filters.priceMax) return false;
    return true;
  });

  switch (filters.sortBy) {
    case 'name':
      result = [...result].sort((a, b) => a.name.localeCompare(b.name, 'fr'));
      break;
    case 'price-asc':
      result = [...result].sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      result = [...result].sort((a, b) => b.price - a.price);
      break;
    // null = ordre original
  }

  return result;
}

export default function ProductListShell({
  initialProducts,
  showFilters = true,
}: ProductListShellProps) {
  const [filters, setFilters] = useState<FilterOptions>(DEFAULT_FILTERS);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => { setCurrentPage(1); }, [filters]);

  const filteredProducts = useMemo(
    () => applyFilters(initialProducts, filters),
    [initialProducts, filters]
  );

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  return (
    <div className="boutique-container">

      {showFilters && (
        <Filters onFilterChange={setFilters} />
      )}

      <div className="boutique-products">
        <div className="products-top-bar">
          <p className="products-count">
            <span className="products-count-number">{filteredProducts.length}</span>
            {' '}produit{filteredProducts.length !== 1 ? 's' : ''}
            {totalPages > 1 && (
              <span className="products-count-page"> — page {currentPage}/{totalPages}</span>
            )}
          </p>
        </div>

        <div className="products-listing">
          {paginatedProducts.length === 0 ? (
            <div className="products-empty">
              <p className="products-empty-title">Aucun produit trouvé</p>
              <p className="products-empty-message">
                Modifiez vos filtres pour voir plus de produits.
              </p>
            </div>
          ) : (
            paginatedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}
