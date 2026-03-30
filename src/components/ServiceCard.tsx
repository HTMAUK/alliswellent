import Link from 'next/link';
import {
  Video,
  Film,
  Building2,
  Heart,
  UtensilsCrossed,
  Check,
  ArrowRight,
} from 'lucide-react';
import type { Service } from '@/data/services';

const iconMap: Record<string, React.ElementType> = {
  Video,
  Film,
  Building2,
  Heart,
  UtensilsCrossed,
};

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = iconMap[service.icon] ?? Video;

  return (
    <div
      className={`service-card p-8 rounded-2xl border relative ${
        service.comingSoon
          ? 'bg-gradient-to-br from-brand-red/20 to-brand-charcoal border-brand-red/50 hover:border-brand-red shadow-lg shadow-brand-red/20'
          : 'bg-brand-charcoal border-brand-gray/20 hover:border-brand-red/50'
      }`}
    >
      {service.comingSoon && (
        <span className="absolute -top-3 -right-3 bg-brand-red text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
          COMING SOON
        </span>
      )}

      <Icon className="text-brand-red mb-6" size={40} />

      <h3
        className={`text-2xl font-display font-bold mb-4 ${
          service.comingSoon ? 'text-white' : 'text-brand-red'
        }`}
      >
        {service.title}
      </h3>

      <ul className="space-y-3 text-gray-300 mb-6">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <Check className="text-brand-red mt-1 flex-shrink-0" size={14} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        href="/contact"
        className="text-brand-red hover:text-red-400 font-semibold inline-flex items-center gap-2"
      >
        Learn More <ArrowRight size={16} />
      </Link>
    </div>
  );
}
