import Link from 'next/link';
import Img from '@/components/Img';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Img
        src="/images/hero-bg.jpg"
        alt=""
        aspectRatio="auto"
        className="absolute inset-0 w-full h-full"
        sizes="100vw"
        priority
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Film strip pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 h-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-r border-white/10" />
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in">
        <div className="flex justify-center mb-8">
          <Img
            src="/images/logo-white.jpg"
            alt="All is Well Entertainment Logo"
            aspectRatio="3/1"
            className="h-16 md:h-20 lg:h-24 w-auto rounded-lg"
            sizes="200px"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
          Everyone has a<span className="text-brand-red"> story</span> to tell.
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Our goal is to help you tell it with heart, cinematic craft, and
          award-winning expertise.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-brand-red text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-600 transition-colors"
          >
            Start Your Story
          </Link>
          <Link
            href="/work"
            className="border-2 border-brand-red text-brand-red px-8 py-4 rounded-lg font-semibold text-lg hover:bg-brand-red hover:text-white transition-all"
          >
            View Our Work
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-brand-red rounded-full flex justify-center">
          <div className="w-1 h-3 bg-brand-red rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
