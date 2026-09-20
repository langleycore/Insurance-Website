export interface Video {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
  category: string;
  duration: string;
  channel: string;
}

// Educational videos for Virginia Personal Lines exam preparation
// Focus: Personal auto, homeowners, renters - NO commercial insurance
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
    description: 'Learn what a Homeowners Policy Covers including HO-2, HO-3, HO-4, HO-5, HO-6 and HO-8 policy types, replacement cost, and loss valuation for personal property.',
    youtubeId: 'vqkZCgumOcQ',
    category: 'Homeowners',
    duration: '8:30',
    channel: 'Pass Masters'
  },
  {
    id: 'v3',
    title: 'Personal Lines Practice Quiz - Homeowners',
    description: 'Personal Lines practice questions covering homeowners policies, vacancy, coinsurance, loss of use, and rain damage scenarios.',
    youtubeId: '_n7nAdh0DCo',
    category: 'Homeowners',
    duration: '12:45',
    channel: 'Pass Masters'
  },
  
  // Personal Auto Insurance
  {
    id: 'v4',
    title: 'Personal Automobile Insurance for P&C Exam',
    description: 'Complete guide to personal auto insurance including liability, collision, comprehensive, uninsured motorist, and personal injury protection.',
    youtubeId: 'SQbko4xZp0M',
    category: 'Auto Insurance',
    duration: '22:15',
    channel: 'Insurance Education'
  },
  
  // General Personal Lines Concepts
  {
    id: 'v5',
    title: 'Personal Lines Exam - 25 Must-Know Questions',
    description: 'Practice test covering deductibles, coinsurance, personal auto policy structure, homeowners forms, and key personal insurance concepts.',
    youtubeId: 'oJn-fU_9z3A',
    category: 'General Insurance',
    duration: '18:45',
    channel: 'Insurance Test Prep'
  },
  {
    id: 'v6',
    title: 'Personal Lines Exam Prep Course Sample',
    description: 'Sample from Personal Lines course covering insurance terms, concepts, dwelling policies, and exam strategies for personal property and auto.',
    youtubeId: 'c1m549POA5U',
    category: 'General Insurance',
    duration: '29:33',
    channel: 'Pass Masters'
  }
];

export const videoCategories = [
  'All Videos',
  'General Insurance',
  'Homeowners',
  'Auto Insurance'
];
