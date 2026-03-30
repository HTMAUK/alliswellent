import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Img from '@/components/Img';
import JsonLd from '@/components/JsonLd';
import { teamMembers } from '@/data/team';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return teamMembers.map((m) => ({ slug: m.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const member = teamMembers.find((m) => m.slug === params.slug);
  if (!member) return {};
  return {
    title: `${member.name} — ${member.role}`,
    description: member.bio[0],
  };
}

export default function TeamMemberPage({ params }: Props) {
  const member = teamMembers.find((m) => m.slug === params.slug);
  if (!member) notFound();

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: member.name,
          jobTitle: member.role,
          worksFor: {
            '@type': 'Organization',
            name: 'All is Well Entertainment',
          },
          image: `https://alliswellent.com${member.image}`,
          sameAs: member.sameAs,
        }}
      />

      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-brand-silver hover:text-brand-red transition-colors mb-12"
          >
            <ArrowLeft size={16} /> Back to About
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Photo */}
            <div className="rounded-2xl overflow-hidden sticky top-24">
              <Img
                src={member.image}
                alt={member.name}
                aspectRatio="4/5"
                className="w-full"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Bio */}
            <div>
              <p className="text-brand-red font-semibold mb-2 uppercase tracking-wider text-sm">
                {member.role}
              </p>
              <h1 className="text-5xl font-display font-bold mb-8">
                {member.name}
              </h1>

              {member.bio.map((paragraph, i) => (
                <p key={i} className="text-gray-300 leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}

              {member.quote && (
                <blockquote className="border-l-4 border-brand-red pl-6 my-10">
                  <p className="text-gray-300 italic leading-relaxed">
                    &ldquo;{member.quote.text}&rdquo;
                  </p>
                  <cite className="text-brand-silver text-sm mt-2 block not-italic">
                    — {member.quote.attribution}
                  </cite>
                </blockquote>
              )}

              {member.credits.length > 0 && (
                <div className="mt-10">
                  <h2 className="text-2xl font-display font-bold mb-6">
                    Notable <span className="text-brand-red">Credits</span>
                  </h2>
                  <ul className="space-y-3">
                    {member.credits.map((credit) => (
                      <li
                        key={credit}
                        className="flex items-center gap-3 text-gray-300"
                      >
                        <span className="w-2 h-2 rounded-full bg-brand-red flex-shrink-0" />
                        {credit}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {member.sameAs.length > 0 && (
                <div className="mt-10 flex flex-wrap gap-4">
                  {member.sameAs.map((url) => {
                    const label = url.includes('linkedin')
                      ? 'LinkedIn'
                      : url.includes('imdb')
                        ? 'IMDb'
                        : url.includes('vimeo')
                          ? 'Vimeo'
                          : url.includes('x.com') || url.includes('twitter')
                            ? 'Twitter / X'
                            : 'Link';
                    return (
                      <a
                        key={url}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-brand-gray/40 px-4 py-2 rounded-lg text-sm text-brand-silver hover:border-brand-red hover:text-brand-red transition-colors"
                      >
                        {label}
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
