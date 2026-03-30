import Link from 'next/link';
import { ArrowRight, Award, Tv, MapPin } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import ServiceCard from '@/components/ServiceCard';
import PortfolioCard from '@/components/PortfolioCard';
import JsonLd from '@/components/JsonLd';
import { services } from '@/data/services';
import { portfolioItems } from '@/data/portfolio';

const featured = portfolioItems.slice(0, 6);

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'VideoProductionCompany',
          name: 'All is Well Entertainment',
          url: 'https://alliswellent.com',
          founder: {
            '@type': 'Person',
            name: 'Hayden Mauk',
            url: 'https://alliswellent.com/team/hayden-mauk',
          },
          description:
            'Emmy award-winning video production company specializing in commercial, documentary, and non-profit storytelling.',
          email: 'hayden.mauk@alliswellent.com',
          telephone: '+1-323-205-6447',
        }}
      />

      <HeroSection />

      {/* Stats strip */}
      <section className="bg-brand-charcoal py-12 border-y border-brand-gray/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center gap-2">
            <Award className="text-brand-red" size={32} />
            <p className="text-3xl font-display font-bold">Emmy Winner</p>
            <p className="text-brand-silver text-sm">Award-Winning Production</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Tv className="text-brand-red" size={32} />
            <p className="text-3xl font-display font-bold">25+ Years</p>
            <p className="text-brand-silver text-sm">Television & Film Experience</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <MapPin className="text-brand-red" size={32} />
            <p className="text-3xl font-display font-bold">All 50 States</p>
            <p className="text-brand-silver text-sm">Nationwide Production</p>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              What We <span className="text-brand-red">Do</span>
            </h2>
            <p className="text-brand-silver text-lg max-w-2xl mx-auto">
              From concept to final cut, we deliver cinematic storytelling that
              moves audiences and drives results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured work */}
      <section className="py-24 bg-brand-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Featured <span className="text-brand-red">Work</span>
            </h2>
            <p className="text-brand-silver text-lg max-w-2xl mx-auto">
              A selection of our work for Netflix, NBC, MSNBC, and more.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featured.map((item) => (
              <PortfolioCard key={item.id} item={item} />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 bg-brand-red text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-600 transition-colors"
            >
              View All Work <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Ready to Tell Your <span className="text-brand-red">Story</span>?
          </h2>
          <p className="text-brand-silver text-lg mb-10 max-w-2xl mx-auto">
            Whether it&apos;s a commercial, documentary, or non-profit film,
            we&apos;d love to hear about your project.
          </p>
          <Link
            href="/contact"
            className="bg-brand-red text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-red-600 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
