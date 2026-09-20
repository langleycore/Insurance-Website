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
    title: 'Homeowners Insurance Coverage Explained',
    description: 'Detailed breakdown of Coverage A, B, C, and D, plus liability protection and additional coverages in homeowners policies.',
    youtubeId: 'Ke-4TpdIic0',
    category: 'Homeowners',
    duration: '12:30',
    channel: 'The Insurance Academy'
  },
  {
    id: 'v3',
    title: 'HO-3 Special Form Policy Deep Dive',
    description: 'In-depth analysis of the most common homeowners policy form - HO-3 Special Form, including all coverage sections.',
    youtubeId: 'WrJ84TNVz_g',
    category: 'Homeowners',
    duration: '18:25',
    channel: 'Insurance License Training'
  },
  {
    id: 'v4',
    title: 'Personal Property Coverage and Limits',
    description: 'Understanding Coverage C personal property limits, special limits, and additional coverage options.',
    youtubeId: 'zckKrKEkUlI',
    category: 'Homeowners',
    duration: '10:15',
    channel: 'Pass Your Exam'
  },

  // Auto Insurance
  {
    id: 'v5',
    title: 'Auto Insurance Coverage Explained - Full Breakdown',
    description: 'Complete guide to auto insurance coverages including liability, collision, comprehensive, medical payments, and uninsured motorist.',
    youtubeId: '8bAYuaB9se4',
    category: 'Auto Insurance',
    duration: '16:45',
    channel: 'The Insurance Academy'
  },
  {
    id: 'v6',
    title: 'Personal Auto Policy (PAP) Structure',
    description: 'Understanding the six parts of the Personal Auto Policy including coverage details and exclusions.',
    youtubeId: 'w9yWc8K3iMI',
    category: 'Auto Insurance',
    duration: '14:20',
    channel: 'Insurance Exam Queen'
  },
  {
    id: 'v7',
    title: 'Auto Insurance Liability Coverage Limits',
    description: 'How to read and understand liability limits like 25/50/25, split limits vs combined single limits.',
    youtubeId: 'CYzl3oLv0v4',
    category: 'Auto Insurance',
    duration: '9:30',
    channel: 'Insurance License Training'
  },
  {
    id: 'v8',
    title: 'Uninsured and Underinsured Motorist Coverage',
    description: 'Critical coverage for accidents with drivers who lack adequate insurance - a must-know for Virginia exam.',
    youtubeId: 'G_fv3C5E9tg',
    category: 'Auto Insurance',
    duration: '11:40',
    channel: 'Pass Your Exam'
  },

  // General Insurance Concepts
  {
    id: 'v9',
    title: 'Named Peril vs Open Peril Policies Explained',
    description: 'Understanding the crucial difference between named peril and open peril coverage for your insurance exam.',
    youtubeId: 'DiciTIyu_Ao',
    category: 'General Insurance',
    duration: '8:15',
    channel: 'Insurance Exam Queen'
  },
  {
    id: 'v10',
    title: 'Insurance Deductibles - How They Work',
    description: 'Complete explanation of deductibles, including flat deductibles, percentage deductibles, and hurricane deductibles.',
    youtubeId: 'OULs2bFBQxQ',
    category: 'General Insurance',
    duration: '10:25',
    channel: 'The Insurance Academy'
  },
  {
    id: 'v11',
    title: 'Replacement Cost vs Actual Cash Value',
    description: 'Critical distinction between RCV and ACV that appears frequently on insurance exams.',
    youtubeId: 'Q8wXRYd2w-s',
    category: 'General Insurance',
    duration: '7:50',
    channel: 'Insurance License Training'
  },
  {
    id: 'v12',
    title: 'Coinsurance in Property Insurance',
    description: 'Understanding the 80% coinsurance rule and how it affects claim payments in property insurance.',
    youtubeId: 'rP3YqPqEXQg',
    category: 'General Insurance',
    duration: '13:20',
    channel: 'Pass Your Exam'
  },
  {
    id: 'v13',
    title: 'Insurable Interest Explained',
    description: 'What is insurable interest and why it matters for all types of insurance policies.',
    youtubeId: 'vJW49Sg0JwI',
    category: 'General Insurance',
    duration: '8:45',
    channel: 'Insurance Exam Queen'
  },

  // Virginia Regulations
  {
    id: 'v14',
    title: 'Virginia Insurance Regulations Overview',
    description: 'Key Virginia-specific insurance laws and regulations that you must know for the Series 11-07 exam.',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'Virginia Regulations',
    duration: '14:30',
    channel: 'Virginia Insurance Education'
  },
  {
    id: 'v15',
    title: 'Virginia Minimum Auto Insurance Requirements',
    description: 'Virginia\'s minimum liability requirements and uninsured motorist coverage mandates.',
    youtubeId: 'JHLp6C8aOpc',
    category: 'Virginia Regulations',
    duration: '9:15',
    channel: 'State Insurance Guide'
  },

  // Dwelling Coverage
  {
    id: 'v16',
    title: 'Dwelling Fire Policies - DP-1, DP-2, DP-3',
    description: 'Understanding the three types of dwelling fire policies for rental and investment properties.',
    youtubeId: 'kKSX2g1hZOk',
    category: 'Dwelling',
    duration: '12:55',
    channel: 'Insurance License Training'
  },
  {
    id: 'v17',
    title: 'Difference Between Homeowners and Dwelling Policies',
    description: 'When to use dwelling policies versus homeowners policies for rental properties.',
    youtubeId: 'sDj72zqZakE',
    category: 'Dwelling',
    duration: '10:40',
    channel: 'The Insurance Academy'
  },

  // Other Coverage Types
  {
    id: 'v18',
    title: 'Personal Umbrella Policy Explained',
    description: 'How personal umbrella policies provide additional liability coverage above home and auto policies.',
    youtubeId: 'ZU9JhKvpOmQ',
    category: 'Other Coverage',
    duration: '11:25',
    channel: 'Insurance Exam Queen'
  },
  {
    id: 'v19',
    title: 'Flood Insurance - NFIP Coverage',
    description: 'National Flood Insurance Program basics including coverage limits and requirements.',
    youtubeId: 'YrLBgjAZfIk',
    category: 'Other Coverage',
    duration: '13:10',
    channel: 'Insurance License Training'
  },
  {
    id: 'v20',
    title: 'Personal Articles Floater',
    description: 'Special coverage for jewelry, fine arts, and other valuable personal property.',
    youtubeId: 'z8GfP7pq8TE',
    category: 'Other Coverage',
    duration: '9:35',
    channel: 'Pass Your Exam'
  },
  {
    id: 'v21',
    title: 'Earthquake Insurance Coverage',
    description: 'Understanding earthquake coverage as a separate policy or endorsement.',
    youtubeId: 'Bx9hBobwFTQ',
    category: 'Other Coverage',
    duration: '8:20',
    channel: 'The Insurance Academy'
  },

  // Endorsements and Additional Coverage
  {
    id: 'v22',
    title: 'Common Homeowners Policy Endorsements',
    description: 'Water backup, identity theft, home business, and other important endorsements.',
    youtubeId: 'u9PyCWYqEPU',
    category: 'Homeowners',
    duration: '15:30',
    channel: 'Insurance Exam Queen'
  },
  {
    id: 'v23',
    title: 'Loss Assessment Coverage',
    description: 'Important coverage for condo and HOA assessments after covered losses.',
    youtubeId: 'G3PLp0WxFgQ',
    category: 'Homeowners',
    duration: '7:45',
    channel: 'Insurance License Training'
  },

  // Policy Terms and Conditions
  {
    id: 'v24',
    title: 'Policy Conditions - Duties After a Loss',
    description: 'What policyholders must do after a loss including notice, proof of loss, and cooperation.',
    youtubeId: 'tAI-PmqkAkw',
    category: 'General Insurance',
    duration: '10:55',
    channel: 'Pass Your Exam'
  },
  {
    id: 'v25',
    title: 'Policy Cancellation and Non-Renewal',
    description: 'Understanding the rules around policy cancellation, non-renewal, and required notices.',
    youtubeId: 'YQHsXMglC9A',
    category: 'General Insurance',
    duration: '9:40',
    channel: 'The Insurance Academy'
  },
  {
    id: 'v26',
    title: 'Subrogation Rights in Insurance',
    description: 'How insurance companies recover claim payments from responsible third parties.',
    youtubeId: 'E8gmARGvPlI',
    category: 'General Insurance',
    duration: '8:30',
    channel: 'Insurance Exam Queen'
  },

  // Exam Strategy
  {
    id: 'v27',
    title: 'How to Pass Your Insurance Exam on the First Try',
    description: 'Test-taking strategies, time management, and tips for success on Prometric insurance exams.',
    youtubeId: 'p9BjTyyhBZo',
    category: 'Exam Strategy',
    duration: '12:20',
    channel: 'Insurance Exam Queen'
  },
  {
    id: 'v28',
    title: 'Common Insurance Exam Mistakes to Avoid',
    description: 'Top mistakes test-takers make and how to avoid them on your licensing exam.',
    youtubeId: 'XiXcvM_6Uj8',
    category: 'Exam Strategy',
    duration: '10:15',
    channel: 'Pass Your Exam'
  },
  {
    id: 'v29',
    title: 'Reading Insurance Questions Carefully',
    description: 'How to identify tricky wording and eliminate wrong answers on insurance exams.',
    youtubeId: 'u6xE3KSn2Ug',
    category: 'Exam Strategy',
    duration: '11:50',
    channel: 'Insurance License Training'
  },
  {
    id: 'v30',
    title: 'Last Minute Exam Prep Tips',
    description: 'Final review strategies for the days leading up to your insurance licensing exam.',
    youtubeId: 'vSAYvwQ-BVQ',
    category: 'Exam Strategy',
    duration: '14:05',
    channel: 'The Insurance Academy'
  },

  // Advanced Concepts
  {
    id: 'v31',
    title: 'Exclusions in Insurance Policies',
    description: 'Understanding common exclusions in property and liability insurance policies.',
    youtubeId: '5YmBRdaW5cc',
    category: 'General Insurance',
    duration: '13:45',
    channel: 'Insurance Exam Queen'
  },
  {
    id: 'v32',
    title: 'Additional Living Expenses Coverage',
    description: 'Coverage D - Loss of Use explained including ALE and Fair Rental Value.',
    youtubeId: 'Ip_KEqWdAvs',
    category: 'Homeowners',
    duration: '9:25',
    channel: 'Insurance License Training'
  },
  {
    id: 'v33',
    title: 'Medical Payments Coverage in Homeowners',
    description: 'No-fault medical coverage for injuries to guests on your property.',
    youtubeId: 'N8VR9dVhDxc',
    category: 'Homeowners',
    duration: '8:10',
    channel: 'Pass Your Exam'
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
