import type { Metadata } from 'next';
import Link from 'next/link';
import ServiceCard from '@/components/ServiceCard';
import { services } from '@/data/services';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Commercial production, documentary filmmaking, corporate video, non-profit storytelling, and more from All is Well Entertainment.',
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-brand-red font-semibold mb-4 uppercase tracking-wider text-sm">
              Our Services
            </p>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 leading-tight">
              Cinematic storytelling for every{' '}
              <span className="text-brand-red">medium</span>.
            </h1>
            <p className="text-xl text-brand-silver leading-relaxed">
              From broadcast commercials to feature-length documentaries, we
              bring the same award-winning craft to every project.
            </p>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-brand-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-display font-bold text-center mb-16">
            Our <span className="text-brand-red">Process</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                desc: 'We learn your story, goals, and audience to shape a creative direction.',
              },
              {
                step: '02',
                title: 'Pre-Production',
                desc: 'Script development, location scouting, and production planning.',
              },
              {
                step: '03',
                title: 'Production',
                desc: 'Cinematic filming with experienced crews across all 50 states.',
              },
              {
                step: '04',
                title: 'Post & Delivery',
                desc: 'Editing, color, sound design, and final delivery in any format.',
              },
            ].map(({ step, title, desc }) => (
              <div key={step} className="text-center">
                <span className="text-brand-red font-display text-5xl font-bold">
                  {step}
                </span>
                <h3 className="text-xl font-bold mt-4 mb-2">{title}</h3>
                <p className="text-brand-silver text-sm leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-bold mb-6">
            Have a Project in <span className="text-brand-red">Mind</span>?
          </h2>
          <p className="text-brand-silver text-lg mb-10">
            Tell us about it — we&apos;ll put together a plan tailored to your
            vision and budget.
          </p>
          <Link
            href="/contact"
            className="bg-brand-red text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-red-600 transition-colors"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
