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
// Focus: Personal auto, homeowners, renters, condo, umbrella - NO commercial insurance
// Cache bust: 2026-09-21T02:22:00Z
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
  {
    id: 'v4',
    title: 'Understanding Homeowners Insurance',
    description: 'Ask This Old House guide to homeowners insurance: six standard coverages, dwelling protection, personal property, loss of use, liability, endorsements, and flood exclusions.',
    youtubeId: '8PSJFiVN1O0',
    category: 'Homeowners',
    duration: '10:15',
    channel: 'This Old House'
  },
  {
    id: 'v5',
    title: 'Insurance Made Clear: Residential Insurance 2026',
    description: '2026 consumer guide to residential insurance covering HO policy sections, property coverages A-D, liability coverages E-F, named perils, and FAIR Plan basics.',
    youtubeId: 'HnFKozkX4QY',
    category: 'Homeowners',
    duration: '45:30',
    channel: 'Insurance Education'
  },
  {
    id: 'v6',
    title: 'Dwelling & Homeowners Policies: DP/HO Types Explained',
    description: 'Quick overview of dwelling policies (DP-1, DP-2, DP-3) and homeowners policies (HO-2 through HO-8) with coverage A, B, C, D, E, F breakdown.',
    youtubeId: '_BBYEnObmPs',
    category: 'Dwelling Policies',
    duration: '1:01',
    channel: 'Insurance Exam Queen'
  },
  
  // Personal Auto Insurance
  {
    id: 'v7',
    title: 'Personal Automobile Insurance for P&C Exam',
    description: 'Complete guide to personal auto insurance including liability, collision, comprehensive, uninsured motorist, and personal injury protection.',
    youtubeId: 'SQbko4xZp0M',
    category: 'Auto Insurance',
    duration: '22:15',
    channel: 'Insurance Education'
  },
  {
    id: 'v8',
    title: 'Collision vs Comprehensive vs Liability Insurance',
    description: 'Texas-focused guide explaining liability (covers others), collision (covers your car after crashes), and comprehensive (non-collision damage like theft, hail, vandalism).',
    youtubeId: 'z43R_O-iqp0',
    category: 'Auto Insurance',
    duration: '0:32',
    channel: 'Angel Reyes & Associates'
  },
  
  // Renters & Condo Insurance
  {
    id: 'v9',
    title: 'What is Condo (HO-6) Insurance?',
    description: 'NJM Insurance explains HO-6 condo insurance: interior unit coverage, personal property protection, liability, loss assessment, and how it works with HOA master policies.',
    youtubeId: 'PsiTswzfb3s',
    category: 'Condo Insurance',
    duration: '1:31',
    channel: 'NJM Insurance Group'
  },
  {
    id: 'v10',
    title: 'What is HO-6 Insurance? Condo & Townhome Coverage',
    description: 'HO-6 insurance explained: what it covers, how it coordinates with HOA master policy, walls-in coverage, loss assessment protection, and choosing the right limits.',
    youtubeId: 'd-D7WE9S25c',
    category: 'Condo Insurance',
    duration: '0:59',
    channel: 'Ameriguard Insurance'
  },
  
  // Umbrella & Additional Coverages
  {
    id: 'v11',
    title: 'What Is Umbrella Insurance and Do You Need It?',
    description: 'Western Pacific Insurance guide to personal umbrella coverage: liability protection above auto/home policies, cost analysis, required underlying limits, and real examples.',
    youtubeId: 'eoPWyXf0s6c',
    category: 'Umbrella',
    duration: '10:29',
    channel: 'Western Pacific Insurance'
  },
  
  // Insurance Concepts & Terms
  {
    id: 'v12',
    title: 'ACV vs RCV in Homeowners Claims',
    description: 'Insurance denial and property recovery explained: actual cash value versus replacement cost, how depreciation works, and recoverable depreciation claims.',
    youtubeId: '5OKYQ07igro',
    category: 'Insurance Concepts',
    duration: '8:15',
    channel: 'Property Insurance Guide'
  },
  {
    id: 'v13',
    title: 'How Depreciation Cuts Your Roof Insurance in Half',
    description: 'Understanding how depreciation affects insurance payouts for roofing damage, ACV versus replacement cost coverage, and what homeowners need to know.',
    youtubeId: 'Ewa4PlK-oFo',
    category: 'Insurance Concepts',
    duration: '1:48',
    channel: 'Roofing Insights'
  },
  {
    id: 'v14',
    title: 'The Art of Adjusting Coinsurance',
    description: 'Detailed walkthrough of coinsurance calculations, deductibles, replacement cost, and how underinsurance affects claim payments in property insurance.',
    youtubeId: 'DYBuQHaYg1k',
    category: 'Insurance Concepts',
    duration: '5:45',
    channel: 'Insurance Adjusting'
  },
  {
    id: 'v15',
    title: 'What is Insurable Interest in Insurance?',
    description: 'The #1 problem that can void your policy: insurable interest explained with real-life examples covering property, life, and financial relationships.',
    youtubeId: 'sMIh0EIkuuU',
    category: 'Insurance Concepts',
    duration: '3:12',
    channel: 'Insurance World TV'
  },
  
  // Practice Exams & Test Prep
  {
    id: 'v16',
    title: 'Personal Lines Exam - 25 Must-Know Questions',
    description: 'Practice test covering deductibles, coinsurance, personal auto policy structure, homeowners forms, and key personal insurance concepts.',
    youtubeId: 'oJn-fU_9z3A',
    category: 'Practice Tests',
    duration: '18:45',
    channel: 'Insurance Test Prep'
  },
  {
    id: 'v17',
    title: 'Personal Lines Exam Prep Course Sample',
    description: 'Sample from Personal Lines course covering insurance terms, concepts, dwelling policies, and exam strategies for personal property and auto.',
    youtubeId: 'c1m549POA5U',
    category: 'Practice Tests',
    duration: '29:33',
    channel: 'Pass Masters'
  },
  {
    id: 'v18',
    title: '2026 PSI Personal Lines Practice Exam',
    description: 'Top practice questions to pass your personal lines license exam covering all major topics: auto, homeowners, dwelling, umbrella, and insurance fundamentals.',
    youtubeId: 'oOdVtdZC8FE',
    category: 'Practice Tests',
    duration: '14:25',
    channel: 'Exam Success'
  },
  {
    id: 'v19',
    title: 'Virginia Property & Casualty Insurance Practice Exam',
    description: '20 free Virginia P&C practice questions covering property, liability, auto, homeowners, and state regulations for Series 11-03 exam.',
    youtubeId: 'zV1PEMfNLto',
    category: 'Practice Tests',
    duration: '18:30',
    channel: 'Insurance License Prep'
  }
];

export const videoCategories = [
  'All Videos',
  'Homeowners',
  'Auto Insurance',
  'Condo Insurance',
  'Dwelling Policies',
  'Umbrella',
  'Insurance Concepts',
  'Practice Tests'
];
