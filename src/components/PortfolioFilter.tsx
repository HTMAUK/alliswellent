'use client';

import { useState } from 'react';
import PortfolioCard from '@/components/PortfolioCard';
import { portfolioItems, categories } from '@/data/portfolio';

export default function PortfolioFilter() {
  const [active, setActive] = useState('all');

  const filtered =
    active === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === active);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActive(cat.id)}
            className={`px-6 py-2 rounded-full font-semibold transition-colors ${
              active === cat.id
                ? 'bg-brand-red text-white'
                : 'bg-brand-gray text-white hover:bg-brand-red'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((item) => (
          <PortfolioCard key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}
