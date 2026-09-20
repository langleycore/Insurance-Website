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
// General insurance concepts applicable to Virginia and all states
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
    title: 'Homeowners Policy Coverage Explained',
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
    title: 'Automobile Insurance for P&C Exam',
    description: 'Complete guide to auto insurance including liability, collision, comprehensive, uninsured motorist, and personal injury protection.',
    youtubeId: 'SQbko4xZp0M',
    category: 'Auto Insurance',
    duration: '22:15',
    channel: 'Insurance Education'
  },
  {
    id: 'v5',
    title: 'Commercial Auto Policies Explained',
    description: 'Overview of commercial auto policies including liability, physical damage, and coverage symbols for business vehicles.',
    youtubeId: 'O9azQDrd6u4',
    category: 'Auto Insurance',
    duration: '45:30',
    channel: 'Insurance Exam Queen'
  },
  
  // General Insurance Concepts
  {
    id: 'v6',
    title: 'Property & Casualty Exam - 25 Must-Know Questions',
    description: 'Practice test covering deductibles, coinsurance, auto policy structure, homeowners forms, and key insurance concepts.',
    youtubeId: 'oJn-fU_9z3A',
    category: 'General Insurance',
    duration: '18:45',
    channel: 'Insurance Test Prep'
  },
  {
    id: 'v7',
    title: 'Full P&C Exam Prep Course Sample',
    description: 'Complete sample from Property & Casualty course covering insurance terms, concepts, dwelling policies, and exam strategies.',
    youtubeId: 'c1m549POA5U',
    category: 'General Insurance',
    duration: '29:33',
    channel: 'Pass Masters'
  },
  {
    id: 'v8',
    title: 'Commercial General Liability (CGL) Overview',
    description: 'Understanding CGL coverage A, B, and C - bodily injury, personal injury, medical payments, and occurrence-based policies.',
    youtubeId: '010XB7f2mgo',
    category: 'Other Coverage',
    duration: '6:45',
    channel: 'Open Exam Prep'
  },
  {
    id: 'v9',
    title: 'Introduction to Commercial Insurance',
    description: 'Overview of commercial insurance including business property, liability, auto, and workers compensation coverage.',
    youtubeId: 'b3wqxlu5hEg',
    category: 'Other Coverage',
    duration: '42:15',
    channel: 'Insurance Exam Queen'
  }
];

export const videoCategories = [
  'All Videos',
  'General Insurance',
  'Homeowners',
  'Auto Insurance',
  'Other Coverage'
];
