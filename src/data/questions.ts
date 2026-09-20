export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
}

export const questions: Question[] = [
  {
    id: 1,
    question: "What is the minimum liability coverage required for auto insurance in Virginia?",
    options: [
      "$25,000/$50,000/$20,000",
      "$30,000/$60,000/$25,000",
      "$25,000/$50,000/$25,000",
      "$50,000/$100,000/$25,000"
    ],
    correctAnswer: 0,
    explanation: "Virginia requires minimum liability coverage of $25,000 for bodily injury per person, $50,000 for bodily injury per accident, and $20,000 for property damage per accident (25/50/20).",
    category: "Auto Insurance"
  },
  {
    id: 2,
    question: "In Virginia, what is an alternative to purchasing auto insurance?",
    options: [
      "Self-insurance certificate",
      "Uninsured motorist fee of $500",
      "Bond posted with DMV",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Virginia allows alternatives to traditional auto insurance including: paying a $500 uninsured motorist fee to DMV, posting a bond, or obtaining a certificate of self-insurance. However, the uninsured motorist fee does NOT provide coverage in case of an accident.",
    category: "Auto Insurance"
  },
  {
    id: 3,
    question: "What does the term 'subrogation' mean in insurance?",
    options: [
      "The process of canceling a policy",
      "The insurer's right to recover payments from the party responsible for the loss",
      "The transfer of risk from insured to insurer",
      "The process of renewing a policy"
    ],
    correctAnswer: 1,
    explanation: "Subrogation is the right of the insurance company to recover the amount of a claim it has paid to its insured from the party legally responsible for the loss. This prevents the insured from collecting twice for the same loss.",
    category: "Insurance Principles"
  },
  {
    id: 4,
    question: "What is a 'deductible' in an insurance policy?",
    options: [
      "The maximum amount the insurer will pay",
      "The amount the insured must pay before the insurer pays",
      "The monthly premium amount",
      "The coverage limit"
    ],
    correctAnswer: 1,
    explanation: "A deductible is the amount of money the insured must pay out-of-pocket before the insurance company begins to pay for covered losses. Higher deductibles typically result in lower premiums.",
    category: "Insurance Principles"
  },
  {
    id: 5,
    question: "Which of the following is NOT covered under a standard homeowners policy (HO-3)?",
    options: [
      "Fire damage",
      "Theft",
      "Flood damage",
      "Wind damage"
    ],
    correctAnswer: 2,
    explanation: "Flood damage is specifically excluded from standard homeowners policies and requires separate flood insurance through the National Flood Insurance Program (NFIP) or private insurers. Fire, theft, and wind damage are typically covered perils.",
    category: "Homeowners Insurance"
  },
  {
    id: 6,
    question: "What does 'actual cash value' (ACV) mean?",
    options: [
      "The cost to replace the item with a new one",
      "Replacement cost minus depreciation",
      "The original purchase price",
      "The market value at time of purchase"
    ],
    correctAnswer: 1,
    explanation: "Actual Cash Value (ACV) is the replacement cost of property minus depreciation. It reflects the current value of the item considering its age, condition, and wear. This is different from replacement cost coverage which pays to replace the item without deducting for depreciation.",
    category: "Insurance Principles"
  },
  {
    id: 7,
    question: "What is the purpose of 'uninsured motorist coverage'?",
    options: [
      "To cover damage you cause to uninsured drivers",
      "To cover your injuries caused by a driver with no insurance",
      "To pay the $500 Virginia uninsured fee",
      "To cover your car if it's stolen"
    ],
    correctAnswer: 1,
    explanation: "Uninsured motorist (UM) coverage protects you if you're injured in an accident caused by a driver who has no insurance or insufficient insurance. It covers your medical expenses, lost wages, and pain and suffering up to your policy limits.",
    category: "Auto Insurance"
  },
  {
    id: 8,
    question: "In property insurance, what does 'coinsurance' refer to?",
    options: [
      "Insurance shared between two companies",
      "A penalty for underinsuring property",
      "The deductible amount",
      "Insurance for two properties"
    ],
    correctAnswer: 1,
    explanation: "Coinsurance is a property insurance provision that penalizes policyholders who insure their property for less than a specified percentage (typically 80%) of its value. If underinsured, the policyholder becomes a 'co-insurer' and bears part of any loss proportionately.",
    category: "Property Insurance"
  },
  {
    id: 9,
    question: "What is 'personal injury' coverage in a liability policy?",
    options: [
      "Coverage for bodily injuries you suffer",
      "Coverage for libel, slander, and false arrest claims",
      "Coverage for injuries to family members",
      "Coverage for emotional distress"
    ],
    correctAnswer: 1,
    explanation: "Personal injury coverage (different from bodily injury) covers non-physical injuries such as libel, slander, defamation of character, false arrest, wrongful eviction, and invasion of privacy. It's typically included in comprehensive liability policies.",
    category: "Liability Insurance"
  },
  {
    id: 10,
    question: "What does 'occurrence' mean in a liability insurance policy?",
    options: [
      "Each separate accident or claim",
      "An accident or continuous exposure resulting in injury or damage",
      "The policy effective date",
      "The number of claims filed"
    ],
    correctAnswer: 1,
    explanation: "An 'occurrence' is defined as an accident, including continuous or repeated exposure to substantially the same general harmful conditions, which results in bodily injury or property damage during the policy period. This differs from 'claims-made' policies.",
    category: "Liability Insurance"
  },
  {
    id: 11,
    question: "In Virginia, how long must an insurance company keep records of insurance transactions?",
    options: [
      "1 year",
      "3 years",
      "5 years",
      "10 years"
    ],
    correctAnswer: 1,
    explanation: "Virginia law requires insurance companies to maintain records of insurance transactions for a minimum of 3 years. This allows for regulatory examination and consumer dispute resolution.",
    category: "Virginia Regulations"
  },
  {
    id: 12,
    question: "What is a 'binder' in insurance?",
    options: [
      "A document that holds all policy papers together",
      "Temporary evidence of coverage until the policy is issued",
      "The insurance contract",
      "A list of coverage exclusions"
    ],
    correctAnswer: 1,
    explanation: "A binder is a temporary insurance contract that provides evidence of coverage until the formal policy is issued. It contains the essential terms of coverage and is legally binding. Binders are commonly used when immediate coverage is needed.",
    category: "Insurance Principles"
  },
  {
    id: 13,
    question: "What does 'vicarious liability' mean?",
    options: [
      "Liability for your own actions",
      "Liability for the actions of another person",
      "Liability that transfers between insurers",
      "Limited liability protection"
    ],
    correctAnswer: 1,
    explanation: "Vicarious liability is the legal responsibility one party has for the actions of another. Common examples include employers being liable for employees' actions during work, or parents being liable for their children's actions in certain circumstances.",
    category: "Liability Insurance"
  },
  {
    id: 14,
    question: "In homeowners insurance, what is 'Coverage A'?",
    options: [
      "Personal property",
      "Dwelling",
      "Liability",
      "Medical payments"
    ],
    correctAnswer: 1,
    explanation: "Coverage A in a homeowners policy covers the dwelling structure itself. The other standard coverages are: Coverage B (other structures), Coverage C (personal property), Coverage D (loss of use), Coverage E (personal liability), and Coverage F (medical payments).",
    category: "Homeowners Insurance"
  },
  {
    id: 15,
    question: "What is the difference between 'named perils' and 'open perils' coverage?",
    options: [
      "Named perils is cheaper but covers more",
      "Named perils covers only listed perils; open perils covers all except excluded perils",
      "They are the same thing",
      "Open perils only covers natural disasters"
    ],
    correctAnswer: 1,
    explanation: "Named perils (or specified perils) coverage only protects against losses specifically listed in the policy. Open perils (or all-risk) coverage protects against all causes of loss except those specifically excluded. Open perils provides broader coverage.",
    category: "Property Insurance"
  },
  {
    id: 16,
    question: "What is 'utmost good faith' in insurance contracts?",
    options: [
      "The insurer must always pay claims",
      "Both parties must be honest and disclose all material facts",
      "The insured must trust the insurer",
      "The policy must be written in simple language"
    ],
    correctAnswer: 1,
    explanation: "Utmost good faith (uberrima fides) is a fundamental principle requiring both the insured and insurer to act honestly and disclose all material facts. Failure to do so can void the contract. This is especially important during the application process.",
    category: "Insurance Principles"
  },
  {
    id: 17,
    question: "In Virginia, within how many days must an insurer notify a policyholder of cancellation?",
    options: [
      "10 days",
      "15 days",
      "30 days",
      "45 days"
    ],
    correctAnswer: 3,
    explanation: "In Virginia, insurance companies must provide at least 45 days' notice for policy cancellation (except for non-payment of premium, which requires shorter notice). This gives policyholders adequate time to secure replacement coverage.",
    category: "Virginia Regulations"
  },
  {
    id: 18,
    question: "What is 'replacement cost' coverage?",
    options: [
      "Coverage that pays the depreciated value",
      "Coverage that pays to replace property without deducting for depreciation",
      "Coverage only for new items",
      "Coverage that requires replacing the item before payment"
    ],
    correctAnswer: 1,
    explanation: "Replacement cost coverage pays the cost to replace damaged property with new property of similar kind and quality without deducting for depreciation. This typically costs more in premiums than actual cash value coverage but provides better protection.",
    category: "Property Insurance"
  },
  {
    id: 19,
    question: "What does 'per occurrence' limit mean in liability insurance?",
    options: [
      "The total the policy will pay during the policy period",
      "The maximum the policy will pay for one accident or event",
      "The amount paid per person injured",
      "The deductible per claim"
    ],
    correctAnswer: 1,
    explanation: "A 'per occurrence' limit is the maximum amount the insurance policy will pay for all damages arising from a single accident or event, regardless of the number of people injured or amount of property damaged. This is different from aggregate limits.",
    category: "Liability Insurance"
  },
  {
    id: 20,
    question: "What is 'loss of use' coverage in homeowners insurance?",
    options: [
      "Coverage for items you can't use after a loss",
      "Coverage for additional living expenses if your home is uninhabitable",
      "Coverage for loss of rental income",
      "Coverage for business interruption"
    ],
    correctAnswer: 1,
    explanation: "Loss of use coverage (Coverage D) pays for additional living expenses when your home is uninhabitable due to a covered loss. This includes hotel costs, restaurant meals, and other expenses above your normal living costs while repairs are made.",
    category: "Homeowners Insurance"
  },
  {
    id: 21,
    question: "What is 'proof of loss'?",
    options: [
      "Evidence that property was damaged",
      "A formal statement documenting the claim and amount of loss",
      "The police report",
      "Photos of the damage"
    ],
    correctAnswer: 1,
    explanation: "Proof of loss is a formal, sworn statement by the policyholder documenting the circumstances and amount of loss claimed. Most policies require this within a specified time period (often 60 days) after the loss. It becomes a legal document in the claims process.",
    category: "Claims"
  },
  {
    id: 22,
    question: "What does 'other insurance' clause do in a policy?",
    options: [
      "Prevents you from buying additional insurance",
      "Determines how coverage applies when multiple policies cover the same loss",
      "Requires you to disclose other insurance policies",
      "Automatically cancels other policies"
    ],
    correctAnswer: 1,
    explanation: "The 'other insurance' clause addresses what happens when multiple policies cover the same loss. It typically uses 'pro rata' (proportional sharing) or 'excess' (one policy pays first) methods to coordinate coverage and prevent overpayment.",
    category: "Insurance Principles"
  },
  {
    id: 23,
    question: "In auto insurance, what is 'comprehensive' coverage?",
    options: [
      "Complete coverage for all losses",
      "Coverage for non-collision losses like theft, vandalism, and weather",
      "Liability and physical damage combined",
      "Maximum coverage available"
    ],
    correctAnswer: 1,
    explanation: "Comprehensive coverage (also called 'other than collision') covers damage to your vehicle from non-collision events such as theft, vandalism, fire, flood, hail, falling objects, and animal strikes. It typically has a deductible and is optional coverage.",
    category: "Auto Insurance"
  },
  {
    id: 24,
    question: "What is 'underwriting' in insurance?",
    options: [
      "Writing policies by hand",
      "The process of evaluating and pricing risk",
      "Signing the policy document",
      "Selling insurance"
    ],
    correctAnswer: 1,
    explanation: "Underwriting is the process by which insurers evaluate risk, decide whether to accept an applicant for coverage, and determine the appropriate premium to charge. Underwriters assess factors like claims history, credit, occupation, and property characteristics.",
    category: "Insurance Principles"
  },
  {
    id: 25,
    question: "What is a 'hazard' in insurance terminology?",
    options: [
      "The same as a peril",
      "A condition that increases the likelihood or severity of a loss",
      "An excluded cause of loss",
      "A type of insurance policy"
    ],
    correctAnswer: 1,
    explanation: "A hazard is a condition that increases the chance of loss or increases the severity of a loss. There are three types: physical hazards (tangible conditions), moral hazards (dishonesty), and morale hazards (carelessness due to having insurance).",
    category: "Insurance Principles"
  },
  {
    id: 26,
    question: "In Virginia, what is the 'free look' period for insurance policies?",
    options: [
      "10 days",
      "15 days",
      "30 days",
      "There is no free look period"
    ],
    correctAnswer: 1,
    explanation: "Virginia requires a 15-day 'free look' period for certain insurance policies (particularly life and health). During this time, policyholders can cancel the policy and receive a full refund of premiums paid. Property and casualty policies may have different provisions.",
    category: "Virginia Regulations"
  },
  {
    id: 27,
    question: "What does 'aggregate limit' mean in liability insurance?",
    options: [
      "The total a policy will pay for all claims during the policy period",
      "The maximum paid per occurrence",
      "The combined limit for property and liability",
      "The deductible amount"
    ],
    correctAnswer: 0,
    explanation: "An aggregate limit is the maximum amount an insurance policy will pay for all covered losses during the policy period (usually one year), regardless of the number of claims. Once the aggregate is exhausted, no further payments are made until the policy renews.",
    category: "Liability Insurance"
  },
  {
    id: 28,
    question: "What is 'salvage' in property insurance?",
    options: [
      "Property saved from a loss",
      "The damaged property that remains after a loss",
      "The scrap value that reduces the claim payment",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Salvage refers to damaged property that retains some value after a loss. When an insurer pays a total loss, it typically takes ownership of the salvage. The salvage value may be deducted from the claim payment, or the insured may keep the salvage for a reduced settlement.",
    category: "Claims"
  },
  {
    id: 29,
    question: "What is 'collision' coverage in auto insurance?",
    options: [
      "Coverage for hitting another car only",
      "Coverage for damage to your car from impact with another object or vehicle",
      "Coverage for injuries from a collision",
      "Liability coverage for collisions"
    ],
    correctAnswer: 1,
    explanation: "Collision coverage pays for damage to your own vehicle resulting from a collision with another vehicle or object (like a tree, pole, or guardrail), or from your vehicle overturning. It's optional coverage that typically includes a deductible.",
    category: "Auto Insurance"
  },
  {
    id: 30,
    question: "What does 'indemnity' mean in insurance?",
    options: [
      "Compensation to restore the insured to their pre-loss financial position",
      "Payment of double the loss amount",
      "Advance payment before a loss",
      "Guaranteed profit from insurance"
    ],
    correctAnswer: 0,
    explanation: "Indemnity is a fundamental insurance principle meaning to restore the insured to the same financial position they were in before the loss—no better, no worse. Insurance should compensate for actual losses but not allow profit from insurance. This prevents moral hazard.",
    category: "Insurance Principles"
  }
];
