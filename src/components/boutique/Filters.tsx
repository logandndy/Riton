'use client';

import { useState } from 'react';

export interface FilterOptions {
  priceMin: number;
  priceMax: number | null;   // null = pas de max
  sortBy: 'name' | 'price-asc' | 'price-desc' | null;   // null = aucun tri
}

export const DEFAULT_FILTERS: FilterOptions = {
  priceMin: 0,
  priceMax: null,
  sortBy: null,
};

interface FiltersProps {
  onFilterChange: (filters: FilterOptions) => void;
}

const SORT_OPTIONS = [
  { value: 'name' as const,       label: 'A – Z' },
  { value: 'price-asc' as const,  label: 'Prix ↑' },
  { value: 'price-desc' as const, label: 'Prix ↓' },
];

export default function Filters({ onFilterChange }: FiltersProps) {
  const [filters, setFilters] = useState<FilterOptions>(DEFAULT_FILTERS);

  // Separate string state for inputs — évite le problème du "0 bloqué"
  const [minStr, setMinStr] = useState('');
  const [maxStr, setMaxStr] = useState('');

  const update = (patch: Partial<FilterOptions>) => {
    const next = { ...filters, ...patch };
    setFilters(next);
    onFilterChange(next);
  };

  const handleMin = (raw: string) => {
    const clean = raw.replace(/[^0-9]/g, '');
    setMinStr(clean);
    update({ priceMin: clean === '' ? 0 : Number(clean) });
  };

  const handleMax = (raw: string) => {
    const clean = raw.replace(/[^0-9]/g, '');
    setMaxStr(clean);
    update({ priceMax: clean === '' ? null : Number(clean) });
  };

  const toggleSort = (val: FilterOptions['sortBy']) => {
    update({ sortBy: filters.sortBy === val ? null : val });
  };

  const reset = () => {
    setFilters(DEFAULT_FILTERS);
    setMinStr('');
    setMaxStr('');
    onFilterChange(DEFAULT_FILTERS);
  };

  // Compte les filtres actifs
  const activeCount =
    (filters.priceMin > 0 ? 1 : 0) +
    (filters.priceMax !== null ? 1 : 0) +
    (filters.sortBy !== null ? 1 : 0);

  return (
    <div className="boutique-filters-bar" role="search" aria-label="Filtrer les produits">

      {/* ── Tri ── */}
      <div className="filters-group">
        <span className="filters-label">Trier</span>
        <div className="filters-sort-pills">
          {SORT_OPTIONS.map(({ value, label }) => (
            <button
              key={value}
              type="button"
              className={`filter-pill${filters.sortBy === value ? ' is-active' : ''}`}
              onClick={() => toggleSort(value)}
              aria-pressed={filters.sortBy === value}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Séparateur vertical ── */}
      <span className="filters-sep" aria-hidden="true" />

      {/* ── Prix ── */}
      <div className="filters-group">
        <span className="filters-label">Prix</span>
        <div className="filters-price-range">
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            className="filter-price-input"
            placeholder="Min"
            value={minStr}
            onChange={e => handleMin(e.target.value)}
            aria-label="Prix minimum"
          />
          <span className="filters-price-dash">—</span>
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            className="filter-price-input"
            placeholder="Max"
            value={maxStr}
            onChange={e => handleMax(e.target.value)}
            aria-label="Prix maximum"
          />
          <span className="filters-price-unit">€</span>
        </div>
      </div>

      {/* ── Effacer (seulement si filtres actifs) ── */}
      {activeCount > 0 && (
        <button type="button" className="filters-reset" onClick={reset} aria-label="Réinitialiser les filtres">
          <span>Effacer</span>
          <span className="filters-active-badge" aria-label={`${activeCount} filtre${activeCount > 1 ? 's' : ''} actif${activeCount > 1 ? 's' : ''}`}>
            {activeCount}
          </span>
        </button>
      )}
    </div>
  );
}
