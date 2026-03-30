export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  image: string;
  bio: string[];
  quote?: { text: string; attribution: string };
  credits: string[];
  sameAs: string[];
}

export const teamMembers: TeamMember[] = [
  {
    slug: 'hayden-mauk',
    name: 'Hayden Mauk',
    role: 'Founder, Producer & Director',
    image: '/images/team/hayden-mauk.jpg',
    bio: [
      'At All is Well Entertainment, we believe everyone has a story to tell, and our goal is to help you tell it. Founded by Emmy award-winning producer and director Hayden Mauk, we bring over 25 years of storytelling experience for national television, brands, and non-profits.',
      'Our approach combines cinematic craft with authentic storytelling, ensuring every project resonates with audiences and drives meaningful results. From Fortune 500 companies to grassroots organizations, we\u2019ve helped countless clients share their most important stories.',
    ],
    quote: {
      text: 'I tell stories rooted in cultural anthropology through the lens of food, but the journey has carried me far beyond the table. Into kitchens alive with tradition, onto racetracks pulsing with grit, and across glaciers where the horizon feels endless. I seek out the people whose work stirs change, inspires hope, and makes their world, and ours, a better place.',
      attribution: 'Hayden Mauk, Founder',
    },
    credits: [
      'Emmy Award Winner',
      "Netflix \u2014 Fresh, Fried & Crispy",
      'NBC \u2014 American Ninja Warrior',
      'MSNBC \u2014 What\u2019s Eating America',
      'Magnolia Channel \u2014 Family Dinner',
      'Outdoor Channel \u2014 Hardcore Carnivore',
      'Outdoor Channel \u2014 Feral with Chef Yia Vang',
      'Nickelodeon \u2014 America\u2019s Most Musical Family',
      'Roku \u2014 Que Delicioso',
    ],
    sameAs: [
      'https://www.linkedin.com/in/haydenmauk/',
      'https://www.imdb.com/name/nm1342953/',
      'https://x.com/alliswellent',
      'https://vimeo.com/haydenmauk',
    ],
  },
  {
    slug: 'maureen-mauk',
    name: 'Maureen Mauk',
    role: 'Producer', // TODO: confirm role
    image: '/images/team/maureen-mauk.jpg',
    bio: [
      // TODO: Add Maureen's full bio — not found in the existing codebase.
      'Bio coming soon.',
    ],
    credits: [
      // TODO: Add Maureen's credits
    ],
    sameAs: [],
  },
  {
    slug: 'sam-johnson',
    name: 'Sam Johnson',
    role: 'Director of Photography', // TODO: confirm role
    image: '/images/team/sam-johnson.jpg',
    bio: [
      // TODO: Add Sam's full bio — not found in the existing codebase.
      'Bio coming soon.',
    ],
    credits: [
      // TODO: Add Sam's credits
    ],
    sameAs: [],
  },
];
