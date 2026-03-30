export interface PortfolioItem {
  id: number;
  title: string;
  slug: string;
  category: 'commercial' | 'documentary' | 'nonprofit';
  network: string;
  location: string;
  image: string;
  videoUrl: string;
  videoId: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Felicia's Donation Closet",
    slug: 'felicias-donation-closet',
    category: 'nonprofit',
    network: 'Non-Profit',
    location: 'Madison, Wisconsin',
    image: '/images/work/felicias-donation-closet.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=H5KZrsed1SQ',
    videoId: 'H5KZrsed1SQ',
  },
  {
    id: 2,
    title: "Netflix's Fresh, Fried & Crispy",
    slug: 'fresh-fried-crispy',
    category: 'documentary',
    network: 'Netflix',
    location: 'Pursell Farms, Sylacauga, Alabama',
    image: '/images/work/fresh-fried-crispy.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=Cuaz6QaGdoE',
    videoId: 'Cuaz6QaGdoE',
  },
  {
    id: 3,
    title: 'Family Dinner',
    slug: 'family-dinner',
    category: 'documentary',
    network: 'Magnolia Channel',
    location: 'Savannah, Georgia',
    image: '/images/work/family-dinner.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=WUYhqA_jvqU',
    videoId: 'WUYhqA_jvqU',
  },
  {
    id: 4,
    title: 'Hardcore Carnivore',
    slug: 'hardcore-carnivore',
    category: 'documentary',
    network: 'Outdoor Channel',
    location: 'North Star Bison Ranch, Rice Lake, Wisconsin',
    image: '/images/work/hardcore-carnivore.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=V4dZmxJStgs',
    videoId: 'V4dZmxJStgs',
  },
  {
    id: 5,
    title: 'Beyond Concrete',
    slug: 'beyond-concrete',
    category: 'commercial',
    network: 'Beyond Concrete',
    location: 'Madison, Wisconsin',
    image: '/images/work/beyond-concrete.jpg',
    videoUrl: 'https://youtu.be/hdNr600Sooc',
    videoId: 'hdNr600Sooc',
  },
  {
    id: 6,
    title: 'Feral with Chef Yia Vang',
    slug: 'feral-yia-vang',
    category: 'documentary',
    network: 'Outdoor Channel',
    location: "Warren's, Wisconsin",
    image: '/images/work/feral-yia-vang.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=00EYCpiY_uM',
    videoId: '00EYCpiY_uM',
  },
  {
    id: 7,
    title: 'American Ninja Warrior',
    slug: 'american-ninja-warrior',
    category: 'documentary',
    network: 'NBC',
    location: 'Houston, Texas',
    image: '/images/work/american-ninja-warrior.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=alNcc4oWs-4',
    videoId: 'alNcc4oWs-4',
  },
  {
    id: 8,
    title: "What's Eating America",
    slug: 'whats-eating-america',
    category: 'documentary',
    network: 'MSNBC',
    location: "Tohono O'odham Nation, Arizona",
    image: '/images/work/whats-eating-america.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=WreVtrDJeQI',
    videoId: 'WreVtrDJeQI',
  },
  {
    id: 9,
    title: "America's Most Musical Family",
    slug: 'americas-most-musical-family',
    category: 'commercial',
    network: 'Nickelodeon',
    location: 'Nickelodeon Sound Stage, Hollywood, CA',
    image: '/images/work/americas-most-musical-family.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=ZO1nuCNcRYQ',
    videoId: 'ZO1nuCNcRYQ',
  },
];

export const categories = [
  { id: 'all', label: 'All' },
  { id: 'commercial', label: 'Commercial' },
  { id: 'documentary', label: 'Documentary' },
  { id: 'nonprofit', label: 'Non-Profit' },
] as const;
