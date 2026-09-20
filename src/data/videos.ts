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
export const videos: Video[] = [
  // Virginia Regulations & General Insurance
  {
    id: 'v1',
    title: 'Virginia P&C Insurance Exam Guide 2026',
    description: 'Complete overview of the Virginia Property & Casualty licensing exam, including Personal Lines coverage, exam structure, and key topics.',
    youtubeId: 'GwdqzaXGB-4',
    category: 'Virginia Regulations',
    duration: '12:45',
    channel: 'OpenExamPrep'
  },
  {
    id: 'v2',
    title: 'Insurance Fundamentals - Insurable Interest',
    description: 'Understanding insurable interest, a foundational concept for all insurance policies including personal lines.',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'General Insurance',
    duration: '8:30',
    channel: 'Insurance Exam Queen'
  },
  {
    id: 'v3',
    title: 'Insurance Contract Basics',
    description: 'Learn about contract elements, declarations, conditions, and exclusions that apply to personal insurance policies.',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'General Insurance',
    duration: '11:20',
    channel: 'Insurance Exam Queen'
  },

  // Homeowners Insurance
  {
    id: 'v4',
    title: 'Homeowners Policy Overview - HO-3 Special Form',
    description: 'Comprehensive breakdown of the HO-3 homeowners policy, the most common form. Covers Section I property coverages and Section II liability.',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'Homeowners',
    duration: '15:45',
    channel: 'Insurance Exam Queen'
  },
  {
    id: 'v5',
    title: 'HO-2, HO-3, HO-5 - Which Homeowners Form?',
    description: 'Understand the key differences between homeowners policy forms: HO-2 Broad, HO-3 Special, and HO-5 Comprehensive.',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'Homeowners',
    duration: '10:15',
    channel: 'Insurance Exam Queen'
  },
  {
    id: 'v6',
    title: 'Homeowners Coverage A, B, C, D Explained',
    description: 'Detailed explanation of dwelling, other structures, personal property, and loss of use coverages in homeowners policies.',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'Homeowners',
    duration: '13:30',
    channel: 'Insurance Exam Queen'
  },
  {
    id: 'v7',
    title: 'Homeowners Section II Liability Coverage',
    description: 'Coverage E (personal liability) and Coverage F (medical payments to others) in homeowners insurance.',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'Homeowners',
    duration: '9:45',
    channel: 'Insurance Exam Queen'
  },
  {
    id: 'v8',
    title: 'HO-4 Renters and HO-6 Condo Insurance',
    description: 'Special homeowners forms for renters (HO-4) and condo owners (HO-6) - what they cover and who needs them.',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'Homeowners',
    duration: '8:20',
    channel: 'Insurance Exam Queen'
  },
  {
    id: 'v9',
    title: 'Homeowners Policy Exclusions',
    description: 'Important exclusions in homeowners insurance: flood, earthquake, ordinance or law, intentional loss, and more.',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'Homeowners',
    duration: '12:00',
    channel: 'Insurance Exam Queen'
  },
  {
    id: 'v10',
    title: 'Homeowners Endorsements You Must Know',
    description: 'Common homeowners policy endorsements: scheduled personal property, water backup, identity theft, and earthquake.',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'Homeowners',
    duration: '11:30',
    channel: 'Insurance Exam Queen'
  },

  // Dwelling Policies
  {
    id: 'v11',
    title: 'Dwelling Policy DP-1, DP-2, DP-3 Complete Guide',
    description: 'Everything you need to know about dwelling fire policies: Basic, Broad, and Special forms for rental and investment properties.',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'Dwelling',
    duration: '14:20',
    channel: 'Insurance Exam Queen'
  },
  {
    id: 'v12',
    title: 'DP-3 Special Form vs HO-3 - Key Differences',
    description: 'Understanding when to use a dwelling policy versus a homeowners policy and the coverage differences.',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'Dwelling',
    duration: '9:15',
    channel: 'Insurance Exam Queen'
  },
  {
    id: 'v13',
    title: 'Dwelling Policy Coverages A, B, C',
    description: 'Coverage A (dwelling), Coverage B (other structures), and Coverage C (personal property) in dwelling policies.',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'Dwelling',
    duration: '10:45',
    channel: 'Insurance Exam Queen'
  },
  {
    id: 'v14',
    title: 'ACV vs Replacement Cost in Dwelling Policies',
    description: 'Actual cash value versus replacement cost settlement options and the 80% coinsurance requirement.',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'Dwelling',
    duration: '8:50',
    channel: 'Insurance Exam Queen'
  },

  // Auto Insurance
  {
    id: 'v15',
    title: 'Personal Auto Policy (PAP) Complete Overview',
    description: 'Full breakdown of the Personal Auto Policy structure: Parts A through F and how they work together.',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'Auto Insurance',
    duration: '16:30',
    channel: 'Insurance Exam Queen'
  },
  {
    id: 'v16',
    title: 'PAP Part A - Liability Coverage Explained',
    description: 'Auto liability coverage: bodily injury and property damage liability, split limits, and single limit coverage.',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'Auto Insurance',
    duration: '12:15',
    channel: 'Insurance Exam Queen'
  },
  {
    id: 'v17',
    title: 'Virginia Auto Insurance Minimums 50/100/25',
    description: 'Understanding Virginia\'s mandatory auto insurance requirements: $50k/$100k/$25k liability limits effective 2025.',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'Auto Insurance',
    duration: '7:45',
    channel: 'Insurance Education'
  },
  {
    id: 'v18',
    title: 'PAP Part B - Medical Payments Coverage',
    description: 'Medical payments coverage (Med Pay) in auto insurance: who is covered and when to use it.',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'Auto Insurance',
    duration: '8:30',
    channel: 'Insurance Exam Queen'
  },
  {
    id: 'v19',
    title: 'PAP Part C - UM/UIM Coverage',
    description: 'Uninsured and underinsured motorist coverage: protecting yourself when others don\'t have adequate insurance.',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'Auto Insurance',
    duration: '11:40',
    channel: 'Insurance Exam Queen'
  },
  {
    id: 'v20',
    title: 'PAP Part D - Physical Damage Coverage',
    description: 'Collision and comprehensive (other than collision) coverage for your vehicle, including deductibles.',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'Auto Insurance',
    duration: '13:20',
    channel: 'Insurance Exam Queen'
  },
  {
    id: 'v21',
    title: 'Auto Insurance Exclusions You Must Know',
    description: 'Key exclusions in personal auto policies: intentional damage, racing, livery/ride-share, and more.',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'Auto Insurance',
    duration: '10:15',
    channel: 'Insurance Exam Queen'
  },
  {
    id: 'v22',
    title: 'Who Is Covered Under Your Auto Policy?',
    description: 'Understanding insured persons: you, family members, permissive users, and coverage territory.',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'Auto Insurance',
    duration: '9:30',
    channel: 'Insurance Exam Queen'
  },
  {
    id: 'v23',
    title: 'Auto Insurance Endorsements',
    description: 'Common PAP endorsements: rental reimbursement, towing, gap insurance, and custom equipment coverage.',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'Auto Insurance',
    duration: '11:00',
    channel: 'Insurance Exam Queen'
  },

  // Other Personal Lines
  {
    id: 'v24',
    title: 'Personal Umbrella Policy Explained',
    description: 'How personal umbrella liability policies provide excess coverage over home and auto insurance.',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'Other Coverage',
    duration: '10:45',
    channel: 'Insurance Exam Queen'
  },
  {
    id: 'v25',
    title: 'Personal Articles Floater / Inland Marine',
    description: 'Scheduled personal property coverage for jewelry, fine arts, cameras, and other valuable items.',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'Other Coverage',
    duration: '9:20',
    channel: 'Insurance Exam Queen'
  },
  {
    id: 'v26',
    title: 'Flood Insurance NFIP Overview',
    description: 'National Flood Insurance Program basics: what it covers, limits, and why you need separate flood coverage.',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'Other Coverage',
    duration: '12:30',
    channel: 'Insurance Education'
  },
  {
    id: 'v27',
    title: 'Earthquake Insurance Coverage',
    description: 'Understanding earthquake coverage as an endorsement or separate policy - what is and isn\'t covered.',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'Other Coverage',
    duration: '8:15',
    channel: 'Insurance Education'
  },

  // Advanced Topics & Exam Strategy
  {
    id: 'v28',
    title: 'Insurance Exam Strategy - How to Pass First Try',
    description: 'Proven strategies for passing your insurance licensing exam: study techniques, time management, and test-taking tips.',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'Exam Strategy',
    duration: '14:00',
    channel: 'Insurance Exam Queen'
  },
  {
    id: 'v29',
    title: 'Most Common Exam Mistakes to Avoid',
    description: 'Learn the top mistakes students make on insurance exams and how to avoid them for a passing score.',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'Exam Strategy',
    duration: '11:30',
    channel: 'Insurance Exam Queen'
  },
  {
    id: 'v30',
    title: 'Reading Insurance Exam Questions Correctly',
    description: 'How to interpret tricky exam questions, identify keywords, and eliminate wrong answers effectively.',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'Exam Strategy',
    duration: '10:20',
    channel: 'Insurance Exam Queen'
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
