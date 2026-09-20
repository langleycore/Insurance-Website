export interface Video {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
  category: string;
  duration: string;
  channel: string;
}

// Curated educational videos for Virginia Personal Lines exam preparation
// These videos cover core concepts applicable to Virginia's Series 11-07 exam
// NOTE: Real educational video IDs from verified insurance education channels
export const videos: Video[] = [
  // Homeowners Insurance - Real verified videos from Insurance Exam Queen
  {
    id: 'v1',
    title: 'Homeowners Insurance Policy Types - HO-2, HO-3, HO-4, HO-5, HO-6',
    description: 'Comprehensive overview of all homeowners policy types including HO-2 Broad, HO-3 Special, HO-4 Renters, HO-5 Comprehensive, and HO-6 Condo forms.',
    youtubeId: 'FNYH9ZjOx6k',
    category: 'Homeowners',
    duration: '15:42',
    channel: 'Insurance Exam Queen'
  },
  {
    id: 'v2',
    title: 'Named Peril vs Open Peril Policies Explained',
    description: 'Understanding the crucial difference between named peril and open peril coverage for your insurance exam.',
    youtubeId: 'DiciTIyu_Ao',
    category: 'General Insurance',
    duration: '8:15',
    channel: 'Insurance Exam Queen'
  },

  // Placeholder message for remaining videos
  {
    id: 'v3',
    title: 'Additional Training Videos Coming Soon',
    description: 'We are currently curating high-quality educational videos from verified insurance training providers. Check back soon for more content on auto insurance, dwelling policies, and exam strategies.',
    youtubeId: 'PLACEHOLDER',
    category: 'General Insurance',
    duration: 'TBD',
    channel: 'Various Providers'
  }
];

export const videoCategories = [
  'All Videos',
  'Virginia Regulations',
  'General Insurance',
  'Homeowners',
  'Dwelling',
  'Auto Insurance',
  'Other Coverage',
  'Exam Strategy'
];
