import type { Metadata } from 'next';
import Link from 'next/link';
import PortfolioFilter from '@/components/PortfolioFilter';

export const metadata: Metadata = {
  title: 'Our Work',
  description:
    'Browse our portfolio of award-winning productions for Netflix, NBC, MSNBC, Magnolia Channel, Nickelodeon, and more.',
};

export default function WorkPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-brand-red font-semibold mb-4 uppercase tracking-wider text-sm">
              Our Work
            </p>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 leading-tight">
              Stories that <span className="text-brand-red">move</span> people.
            </h1>
            <p className="text-xl text-brand-silver leading-relaxed">
              From Netflix to grassroots non-profits, every project gets the
              same cinematic care.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio grid with client-side filtering */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PortfolioFilter />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brand-charcoal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-bold mb-6">
            Want to See Your Story{' '}
            <span className="text-brand-red">Here</span>?
          </h2>
          <p className="text-brand-silver text-lg mb-10">
            Let&apos;s create something remarkable together.
          </p>
          <Link
            href="/contact"
            className="bg-brand-red text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-red-600 transition-colors"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </>
  );
}
