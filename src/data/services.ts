export interface Service {
  icon: string;
  title: string;
  features: string[];
  comingSoon?: boolean;
}

export const services: Service[] = [
  {
    icon: 'Video',
    title: 'Commercial Production',
    features: [
      'Full creative development & scripting',
      'Broadcast-ready quality',
      'Focused on ROI and engagement',
    ],
  },
  {
    icon: 'Film',
    title: 'Documentary Production',
    features: [
      'Cinematic storytelling approach',
      'Cinematic visuals with heart',
      'Experience filming in all 50 states',
    ],
  },
  {
    icon: 'Building2',
    title: 'Corporate Video',
    features: [
      'Training and educational content',
      'Company culture showcases',
      'Executive messaging',
    ],
  },
  {
    icon: 'Heart',
    title: 'Non-Profit',
    features: [
      'Mission-driven storytelling',
      'Fundraising campaign videos',
      'Community impact stories',
    ],
  },
  {
    icon: 'UtensilsCrossed',
    title: 'Our Food Legacy',
    features: [
      'Preserve family recipes & rituals in heirloom-quality films',
      'Keep culture alive for generations',
      'Revenue share to feed the next generation',
    ],
    comingSoon: true,
  },
];
