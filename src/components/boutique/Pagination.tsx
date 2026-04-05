'use client';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

function getPageRange(current: number, total: number): (number | '…')[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);

  const range: (number | '…')[] = [1];

  if (current > 3) range.push('…');

  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);
  for (let i = start; i <= end; i++) range.push(i);

  if (current < total - 2) range.push('…');
  range.push(total);

  return range;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = getPageRange(currentPage, totalPages);

  return (
    <nav className="pagination" aria-label="Navigation des pages">
      <button
        className="pagination-arrow"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Page précédente"
      >
        ←
      </button>

      <div className="pagination-pages">
        {pages.map((page, i) =>
          page === '…' ? (
            <span key={`ellipsis-${i}`} className="pagination-ellipsis" aria-hidden="true">…</span>
          ) : (
            <button
              key={page}
              className={`pagination-page${page === currentPage ? ' is-active' : ''}`}
              onClick={() => onPageChange(page)}
              aria-current={page === currentPage ? 'page' : undefined}
              aria-label={`Page ${page}`}
            >
              {page}
            </button>
          )
        )}
      </div>

      <button
        className="pagination-arrow"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Page suivante"
      >
        →
      </button>
    </nav>
  );
}
