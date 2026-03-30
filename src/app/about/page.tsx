import type { Metadata } from 'next';
import Link from 'next/link';
import { Award, Film, MapPin, Users } from 'lucide-react';
import Img from '@/components/Img';
import JsonLd from '@/components/JsonLd';
import { teamMembers } from '@/data/team';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about All is Well Entertainment — an Emmy award-winning production company founded by Hayden Mauk with 25+ years of storytelling excellence.',
};

const hayden = teamMembers[0];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          mainEntity: {
            '@type': 'Organization',
            name: 'All is Well Entertainment',
            founder: { '@type': 'Person', name: 'Hayden Mauk' },
          },
        }}
      />

      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-brand-red font-semibold mb-4 uppercase tracking-wider text-sm">
              About Us
            </p>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 leading-tight">
              Everyone has a <span className="text-brand-red">story</span> to
              tell.
            </h1>
            <p className="text-xl text-brand-silver leading-relaxed">
              Our goal is to help you tell it with heart, cinematic craft, and
              award-winning expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-brand-charcoal py-16 border-y border-brand-gray/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { icon: Award, label: 'Emmy Winner', sub: 'Award-Winning' },
            { icon: Film, label: '25+ Years', sub: 'Experience' },
            { icon: MapPin, label: 'All 50 States', sub: 'Nationwide' },
            { icon: Users, label: 'Fortune 500', sub: 'To Grassroots' },
          ].map(({ icon: Icon, label, sub }) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <Icon className="text-brand-red" size={28} />
              <p className="text-2xl font-display font-bold">{label}</p>
              <p className="text-brand-silver text-sm">{sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Founder section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-2xl overflow-hidden">
              <Img
                src={hayden.image}
                alt={hayden.name}
                aspectRatio="4/5"
                className="w-full"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div>
              <p className="text-brand-red font-semibold mb-2 uppercase tracking-wider text-sm">
                Meet the Founder
              </p>
              <h2 className="text-4xl font-display font-bold mb-2">
                {hayden.name}
              </h2>
              <p className="text-brand-silver mb-6">{hayden.role}</p>

              {hayden.bio.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-gray-300 leading-relaxed mb-4"
                >
                  {paragraph}
                </p>
              ))}

              {hayden.quote && (
                <blockquote className="border-l-4 border-brand-red pl-6 my-8">
                  <p className="text-gray-300 italic leading-relaxed">
                    &ldquo;{hayden.quote.text}&rdquo;
                  </p>
                  <cite className="text-brand-silver text-sm mt-2 block not-italic">
                    — {hayden.quote.attribution}
                  </cite>
                </blockquote>
              )}

              <Link
                href="/team/hayden-mauk"
                className="text-brand-red hover:text-red-400 font-semibold inline-flex items-center gap-2"
              >
                Full Bio & Credits →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Team preview */}
      <section className="py-24 bg-brand-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-display font-bold text-center mb-16">
            The <span className="text-brand-red">Team</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Link
                key={member.slug}
                href={`/team/${member.slug}`}
                className="group block rounded-2xl overflow-hidden bg-brand-dark border border-brand-gray/20 hover:border-brand-red/50 transition-colors"
              >
                <Img
                  src={member.image}
                  alt={member.name}
                  aspectRatio="4/5"
                  className="w-full"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold group-hover:text-brand-red transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-brand-silver text-sm">{member.role}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-bold mb-6">
            Let&apos;s Work <span className="text-brand-red">Together</span>
          </h2>
          <p className="text-brand-silver text-lg mb-10">
            We&apos;d love to hear about your next project.
          </p>
          <Link
            href="/contact"
            className="bg-brand-red text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-red-600 transition-colors"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  );
}
