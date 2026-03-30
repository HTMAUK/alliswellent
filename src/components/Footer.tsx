import Link from 'next/link';

const serviceLinks = [
  { label: 'Commercial Production', href: '/services' },
  { label: 'Documentary Production', href: '/services' },
  { label: 'Corporate Video', href: '/services' },
  { label: 'Non-Profit Productions', href: '/services' },
];

const quickLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Our Work', href: '/work' },
  { label: 'Contact', href: '/contact' },
  { label: 'Meet the Team', href: '/team/hayden-mauk' },
];

const socialLinks = [
  { label: 'Twitter / X', href: 'https://x.com/alliswellent' },
  { label: 'Instagram', href: 'https://instagram.com/alliswellent' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/haydenmauk/' },
  { label: 'YouTube', href: 'https://www.youtube.com/@AllisWellEntertainmentUSA' },
  { label: 'Vimeo', href: 'https://vimeo.com/haydenmauk' },
  { label: 'IMDB', href: 'https://www.imdb.com/name/nm1342953/' },
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-brand-gray/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <p className="font-display text-lg font-bold text-white mb-3">
              All is Well Entertainment
            </p>
            <p className="text-brand-silver text-sm mb-4">
              Award-winning video production company crafting cinematic,
              story-driven films for brands, non-profits, and television.
            </p>
            <p className="text-sm text-neutral-500">
              Founded by Hayden Mauk
              <br />
              25+ Years of Storytelling Excellence
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-brand-silver text-sm hover:text-brand-red transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-brand-silver text-sm hover:text-brand-red transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Follow Us
            </h4>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-silver text-sm hover:text-brand-red transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-gray/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-sm">
            &copy; {new Date().getFullYear()} All is Well Entertainment. All
            rights reserved.
          </p>
          <p className="text-neutral-500 text-sm">
            <a
              href="mailto:hayden.mauk@alliswellent.com"
              className="hover:text-brand-red transition-colors"
            >
              hayden.mauk@alliswellent.com
            </a>
            {' · '}
            <a
              href="tel:+13232056447"
              className="hover:text-brand-red transition-colors"
            >
              (323) 205-6447
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
