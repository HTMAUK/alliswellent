import Link from 'next/link';
import Img from '@/components/Img';
import MobileMenu from '@/components/MobileMenu';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/work', label: 'Our Work' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-brand-dark/95 backdrop-blur-sm z-50 border-b border-brand-gray/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex-shrink-0">
            <div className="h-8 w-24 relative">
              <Img
                src="/images/logo-white.jpg"
                alt="All is Well Entertainment"
                aspectRatio="3/1"
                className="rounded"
                sizes="96px"
              />
            </div>
          </Link>

          <nav className="hidden md:flex items-baseline gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white hover:text-brand-red transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
