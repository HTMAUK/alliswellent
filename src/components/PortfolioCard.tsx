import Image from 'next/image';
import YouTubeEmbed from '@/components/YouTubeEmbed';
import type { PortfolioItem } from '@/data/portfolio';

export default function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <div className="portfolio-item group relative overflow-hidden rounded-2xl bg-brand-gray">
      <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Network badge */}
        <div className="absolute top-4 right-4 z-10">
          <span className="bg-brand-red text-white px-3 py-1 rounded-full text-sm font-semibold">
            {item.network}
          </span>
        </div>

        {/* Play overlay */}
        <YouTubeEmbed videoId={item.videoId} title={item.title} />
      </div>

      <div className="p-5">
        <h3 className="text-lg font-display font-bold text-white mb-1">
          {item.title}
        </h3>
        <p className="text-brand-silver text-sm">{item.location}</p>
      </div>
    </div>
  );
}
