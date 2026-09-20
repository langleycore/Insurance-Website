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
// All videos verified with working YouTube IDs and real thumbnail images
export const videos: Video[] = [
  // Homeowners Insurance
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
    title: 'Homeowners Policy Coverage Explained with Suzy',
    description: 'Learn what a Homeowners Policy Covers including HO-2, HO-3, HO-4, HO-5, HO-6 and HO-8 policy types, replacement cost, and loss valuation.',
    youtubeId: 'vqkZCgumOcQ',
    category: 'Homeowners',
    duration: '8:30',
    channel: 'Pass Masters'
  },
  {
    id: 'v3',
    title: 'P&C Practice Quiz - Homeowners Insurance',
    description: 'Property & Casualty practice questions covering homeowners policies, vacancy, coinsurance, loss of use, and rain damage scenarios.',
    youtubeId: '_n7nAdh0DCo',
    category: 'Homeowners',
    duration: '12:45',
    channel: 'Pass Masters'
  },
  
  // Auto Insurance
  {
    id: 'v4',
    title: 'Commercial Auto Policies - Insurance Exam Queen',
    description: 'Complete guide to commercial auto policies including liability, physical damage, and coverage symbols for business vehicles.',
    youtubeId: 'O9azQDrd6u4',
    category: 'Auto Insurance',
    duration: '45:30',
    channel: 'Insurance Exam Queen'
  },
  {
    id: 'v5',
    title: 'Introduction to Commercial Insurance',
    description: 'Overview of commercial insurance including business property, liability, auto, and workers compensation coverage.',
    youtubeId: 'b3wqxlu5hEg',
    category: 'Other Coverage',
    duration: '42:15',
    channel: 'Insurance Exam Queen'
  },
  
  // General Insurance & Exam Prep
  {
    id: 'v6',
    title: 'Full P&C Exam Prep Course Sample',
    description: 'Complete sample from Property & Casualty course covering insurance terms, concepts, dwelling policies, and exam strategies.',
    youtubeId: 'c1m549POA5U',
    category: 'General Insurance',
    duration: '29:33',
    channel: 'Pass Masters'
  },
  {
    id: 'v7',
    title: 'Commercial General Liability (CGL) Overview',
    description: 'Understanding CGL coverage A, B, and C - bodily injury, personal injury, medical payments, and occurrence-based policies.',
    youtubeId: '010XB7f2mgo',
    category: 'Other Coverage',
    duration: '6:45',
    channel: 'Open Exam Prep'
  },
  
  // State-Specific Guides
  {
    id: 'v8',
    title: 'California P&C Insurance Exam Guide 2026',
    description: 'Updated guide for California Property & Casualty exam including new 2026 rules, minimum limits, and wildfire coverage.',
    youtubeId: 'spxlkc_qhxU',
    category: 'General Insurance',
    duration: '8:20',
    channel: 'Open Exam Prep'
  },
  {
    id: 'v9',
    title: 'Maryland Property & Casualty Exam 2026 Guide',
    description: 'Complete Maryland P&C exam prep covering minimum limits, PIP requirements, MAIF, and coastal property challenges.',
    youtubeId: 'lfsRYdIQeSA',
    category: 'General Insurance',
    duration: '7:55',
    channel: 'Open Exam Prep'
  },
  {
    id: 'v10',
    title: 'Michigan Property & Casualty Exams 2026',
    description: 'How to pass both Michigan P&C exams including no-fault auto insurance, PIP tiers, and liability requirements.',
    youtubeId: 'GA1eVJ_mXbc',
    category: 'General Insurance',
    duration: '9:15',
    channel: 'Open Exam Prep'
  },
  {
    id: 'v11',
    title: 'Oregon Property & Casualty Exam Guide 2026',
    description: 'Oregon P&C exam breakdown: 150 questions, content distribution, state laws, and key insurance concepts to master.',
    youtubeId: 'tg2oXkdHMUk',
    category: 'General Insurance',
    duration: '6:30',
    channel: 'Open Exam Prep'
  },
  {
    id: 'v12',
    title: 'Montana Property & Casualty Exam Guide 2026',
    description: 'Montana P&C exam prep covering auto minimums, wildfire coverage, farm policies, and the Montana State Fund.',
    youtubeId: 'I-5zGDuA6Eo',
    category: 'General Insurance',
    duration: '5:45',
    channel: 'Open Exam Prep'
  }
];

export const videoCategories = [
  'All Videos',
  'General Insurance',
  'Homeowners',
  'Auto Insurance',
  'Other Coverage'
];
