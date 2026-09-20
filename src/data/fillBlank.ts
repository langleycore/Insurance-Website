export interface FillBlank {
  id: number;
  sentence: string;
  blank: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
}

export const fillBlankExercises: FillBlank[] = [
  {
    id: 1,
    sentence: "Virginia requires _____ hours of continuing education every 2 years for insurance producers.",
    blank: "16",
    options: ["12", "16", "20", "24"],
    correctAnswer: 1,
    explanation: "Virginia requires 16 CE hours biennially, including 3 hours of ethics.",
    category: "Virginia Regulation"
  },
  {
    id: 2,
    sentence: "The Virginia Personal Lines exam has a _____ minute time limit.",
    blank: "120",
    options: ["90", "100", "120", "150"],
    correctAnswer: 2,
    explanation: "The Series 11-07 exam allows 120 minutes (2 hours) to complete 105 questions (100 scored + 5 pretest).",
    category: "Virginia Regulation"
  },
  {
    id: 3,
    sentence: "Virginia's minimum auto liability limits are _____/_____/_____.",
    blank: "25/50/20",
    options: ["15/30/10", "20/40/15", "25/50/20", "50/100/50"],
    correctAnswer: 2,
    explanation: "$25,000 per person BI / $50,000 per accident BI / $20,000 property damage.",
    category: "Virginia Regulation"
  },
  {
    id: 4,
    sentence: "A Virginia producer must notify the Bureau of Insurance within _____ days of an address change.",
    blank: "30",
    options: ["15", "30", "45", "60"],
    correctAnswer: 1,
    explanation: "Address changes (residential or business) must be reported within 30 days.",
    category: "Virginia Regulation"
  },
  {
    id: 5,
    sentence: "If a Virginia license lapses for more than _____ months, the producer must retake the exam.",
    blank: "12",
    options: ["6", "12", "18", "24"],
    correctAnswer: 1,
    explanation: "After 12 months, the exam is required. Within 12 months, reinstatement with fees and CE is possible.",
    category: "Virginia Regulation"
  },
  {
    id: 6,
    sentence: "For non-payment of premium, Virginia requires at least _____ days' notice of cancellation.",
    blank: "15",
    options: ["10", "15", "30", "45"],
    correctAnswer: 1,
    explanation: "Non-payment requires 15 days. Other reasons require 45 days (during or after first policy period).",
    category: "Virginia Regulation"
  },
  {
    id: 7,
    sentence: "Virginia eliminated the Uninsured Motorist Vehicle (UMV) fee effective _____.",
    blank: "July 1, 2024",
    options: ["January 1, 2023", "July 1, 2023", "January 1, 2024", "July 1, 2024"],
    correctAnswer: 3,
    explanation: "The $500 UMV fee was eliminated July 1, 2024, for most vehicles.",
    category: "Virginia Regulation"
  },
  {
    id: 8,
    sentence: "The passing score for the Virginia Personal Lines exam is _____.",
    blank: "70%",
    options: ["60%", "65%", "70%", "75%"],
    correctAnswer: 2,
    explanation: "A scaled score of 70% on the 100 scored questions is required to pass.",
    category: "Virginia Regulation"
  },
  {
    id: 9,
    sentence: "An insured with an 80% coinsurance clause must carry insurance equal to at least _____ of the property's value to avoid a penalty.",
    blank: "80%",
    options: ["50%", "70%", "80%", "100%"],
    correctAnswer: 2,
    explanation: "The coinsurance percentage states the minimum percentage of value that must be insured.",
    category: "Property Basics"
  },
  {
    id: 10,
    sentence: "HO-3 provides _____ coverage on the dwelling and _____ coverage on personal property.",
    blank: "open perils / named perils",
    options: [
      "named perils / named perils",
      "open perils / named perils",
      "open perils / open perils",
      "named perils / open perils"
    ],
    correctAnswer: 1,
    explanation: "HO-3: open perils on dwelling (A & B), broad named perils on contents (C).",
    category: "Homeowners"
  },
  {
    id: 11,
    sentence: "Coverage B (Other Structures) in a homeowners policy is typically _____ of Coverage A.",
    blank: "10%",
    options: ["5%", "10%", "20%", "50%"],
    correctAnswer: 1,
    explanation: "Coverage B is generally 10% of Coverage A.",
    category: "Homeowners"
  },
  {
    id: 12,
    sentence: "Coverage C (Personal Property) in a homeowners policy is typically _____ of Coverage A.",
    blank: "50%",
    options: ["10%", "20%", "40%", "50%"],
    correctAnswer: 3,
    explanation: "Coverage C is generally 50% of Coverage A.",
    category: "Homeowners"
  },
  {
    id: 13,
    sentence: "Coverage D (Additional Living Expense) in a homeowners policy is typically _____ of Coverage A.",
    blank: "20%",
    options: ["10%", "20%", "30%", "50%"],
    correctAnswer: 1,
    explanation: "Coverage D is generally 20% of Coverage A.",
    category: "Homeowners"
  },
  {
    id: 14,
    sentence: "Standard Coverage E (Personal Liability) limits in a homeowners policy are typically $_____.",
    blank: "100,000",
    options: ["25,000", "50,000", "100,000", "300,000"],
    correctAnswer: 2,
    explanation: "Most HO policies include $100,000 Coverage E as standard.",
    category: "Homeowners"
  },
  {
    id: 15,
    sentence: "The special limit for theft of jewelry, watches, and furs is typically $_____.",
    blank: "1,500",
    options: ["500", "1,000", "1,500", "2,500"],
    correctAnswer: 2,
    explanation: "Jewelry, watches, and furs typically have a $1,500 theft limit unless scheduled.",
    category: "Homeowners"
  },
  {
    id: 16,
    sentence: "Trees, shrubs, and plants are covered up to _____ of Coverage A, $_____ per item.",
    blank: "5% / 500",
    options: ["5% / 500", "5% / 1,000", "10% / 500", "10% / 1,000"],
    correctAnswer: 0,
    explanation: "Trees are covered 5% of A, $500 each, for specific perils (not wind or disease).",
    category: "Homeowners"
  },
  {
    id: 17,
    sentence: "Homeowners policies typically suspend certain coverages after _____ consecutive days of vacancy.",
    blank: "60",
    options: ["30", "45", "60", "90"],
    correctAnswer: 2,
    explanation: "After 60 days, coverage for vandalism, theft, water damage, glass, and related fire may be suspended.",
    category: "Homeowners"
  },
  {
    id: 18,
    sentence: "The NFIP provides up to $_____ coverage for residential buildings and $_____ for contents.",
    blank: "250,000 / 100,000",
    options: [
      "100,000 / 50,000",
      "250,000 / 100,000",
      "500,000 / 200,000",
      "1,000,000 / 500,000"
    ],
    correctAnswer: 1,
    explanation: "NFIP maximums: $250,000 building, $100,000 contents.",
    category: "Other Personal Lines"
  },
  {
    id: 19,
    sentence: "Collision coverage pays for _____ with another vehicle or object, or _____.",
    blank: "impact / overturn",
    options: [
      "impact / fire",
      "impact / overturn",
      "theft / overturn",
      "impact / theft"
    ],
    correctAnswer: 1,
    explanation: "Collision covers impact and upset (overturn). All else is Other Than Collision.",
    category: "Auto Insurance"
  },
  {
    id: 20,
    sentence: "Impact with a bird or animal is covered under _____ coverage.",
    blank: "Comprehensive (Other Than Collision)",
    options: [
      "Collision",
      "Comprehensive (Other Than Collision)",
      "Liability",
      "Uninsured Motorist"
    ],
    correctAnswer: 1,
    explanation: "Animal strikes are specifically Other Than Collision, not Collision.",
    category: "Auto Insurance"
  },
  {
    id: 21,
    sentence: "A replacement vehicle has automatic coverage for _____ days if the insurer is notified.",
    blank: "14",
    options: ["4", "7", "14", "30"],
    correctAnswer: 2,
    explanation: "Replacement vehicles have all coverages for 14 days (or policy period) with timely notification.",
    category: "Auto Insurance"
  },
  {
    id: 22,
    sentence: "An additional vehicle has automatic liability coverage for _____ days and physical damage for _____ days.",
    blank: "14 / 4",
    options: ["4 / 4", "7 / 4", "14 / 4", "14 / 14"],
    correctAnswer: 2,
    explanation: "Additional vehicles: 14 days liability, 4 days physical damage (if carried on another vehicle).",
    category: "Auto Insurance"
  },
  {
    id: 23,
    sentence: "The PAP provides coverage in the United States, its territories, and _____.",
    blank: "Canada",
    options: ["Mexico", "Canada", "Central America", "worldwide"],
    correctAnswer: 1,
    explanation: "PAP covers U.S., territories, and Canada. Mexico is NOT covered.",
    category: "Auto Insurance"
  },
  {
    id: 24,
    sentence: "HO-4 is designed for _____ and covers personal property and liability, but not the dwelling.",
    blank: "renters",
    options: ["homeowners", "renters", "condo owners", "mobile home owners"],
    correctAnswer: 1,
    explanation: "HO-4 is the renters/tenants policy.",
    category: "Homeowners"
  },
  {
    id: 25,
    sentence: "HO-6 is designed for _____ unit owners.",
    blank: "condominium",
    options: ["apartment", "condominium", "mobile home", "cooperative"],
    correctAnswer: 1,
    explanation: "HO-6 is the condominium unit owners policy.",
    category: "Homeowners"
  },
  {
    id: 26,
    sentence: "HO-5 provides _____ coverage on both dwelling and personal property.",
    blank: "open perils",
    options: ["basic", "broad", "named perils", "open perils"],
    correctAnswer: 3,
    explanation: "HO-5 is the most comprehensive: open perils on both dwelling and contents.",
    category: "Homeowners"
  },
  {
    id: 27,
    sentence: "DP-3 provides _____ coverage on the dwelling and _____ on personal property if purchased.",
    blank: "open perils / named perils",
    options: [
      "named perils / named perils",
      "open perils / named perils",
      "open perils / open perils",
      "basic / broad"
    ],
    correctAnswer: 1,
    explanation: "DP-3: open perils on dwelling, broad named perils on optional contents.",
    category: "Dwelling Policies"
  },
  {
    id: 28,
    sentence: "DP-1 (Basic Form) covers only _____, _____, and _____.",
    blank: "fire / lightning / internal explosion",
    options: [
      "fire / wind / theft",
      "fire / lightning / internal explosion",
      "fire / theft / vandalism",
      "fire / wind / hail"
    ],
    correctAnswer: 1,
    explanation: "DP-1 base coverage: fire, lightning, internal explosion. Other perils require endorsements.",
    category: "Dwelling Policies"
  },
  {
    id: 29,
    sentence: "Fair Rental Value coverage in dwelling policies is typically _____ of Coverage A.",
    blank: "20%",
    options: ["10%", "20%", "30%", "50%"],
    correctAnswer: 1,
    explanation: "Dwelling policies provide 20% of Coverage A for Fair Rental Value.",
    category: "Dwelling Policies"
  },
  {
    id: 30,
    sentence: "Personal liability coverage pays for _____ bodily injury or property damage the insured is legally liable for.",
    blank: "accidental",
    options: ["any", "accidental", "intentional", "negligent or intentional"],
    correctAnswer: 1,
    explanation: "Liability covers accidental injury or damage. Intentional acts are excluded.",
    category: "Homeowners"
  },
  {
    id: 31,
    sentence: "Medical Payments to Others (Coverage F) pays medical expenses _____ determining fault.",
    blank: "without",
    options: ["after", "before", "without", "while"],
    correctAnswer: 2,
    explanation: "Coverage F is goodwill coverage that pays without determining fault.",
    category: "Homeowners"
  },
  {
    id: 32,
    sentence: "The law of _____ states that as exposure units increase, losses become more predictable.",
    blank: "large numbers",
    options: ["averages", "probability", "large numbers", "diminishing returns"],
    correctAnswer: 2,
    explanation: "The law of large numbers is fundamental to insurance pricing and risk pooling.",
    category: "General Principles"
  },
  {
    id: 33,
    sentence: "_____ allows the insurer to recover from a negligent third party after paying the insured's claim.",
    blank: "Subrogation",
    options: ["Assignment", "Salvage", "Subrogation", "Indemnity"],
    correctAnswer: 2,
    explanation: "Subrogation gives the insurer recovery rights against responsible third parties.",
    category: "General Principles"
  },
  {
    id: 34,
    sentence: "The principle of _____ means restoring the insured to their pre-loss financial position, no better.",
    blank: "indemnity",
    options: ["subrogation", "indemnity", "insurable interest", "utmost good faith"],
    correctAnswer: 1,
    explanation: "Indemnity prevents profit from insurance. The insured is made whole, not enriched.",
    category: "General Principles"
  },
  {
    id: 35,
    sentence: "A _____ is a statement guaranteed to be absolutely true; breach can void the policy.",
    blank: "warranty",
    options: ["representation", "warranty", "concealment", "declaration"],
    correctAnswer: 1,
    explanation: "Warranties must be absolutely true. Representations need only be substantially true.",
    category: "General Principles"
  },
  {
    id: 36,
    sentence: "_____ coverage pays to replace damaged property without deducting depreciation.",
    blank: "Replacement cost",
    options: ["Actual cash value", "Replacement cost", "Agreed value", "Market value"],
    correctAnswer: 1,
    explanation: "Replacement cost pays to replace with like kind and quality, no depreciation.",
    category: "General Principles"
  },
  {
    id: 37,
    sentence: "_____ cash value typically means replacement cost minus depreciation.",
    blank: "Actual",
    options: ["Actual", "Fair", "Real", "True"],
    correctAnswer: 0,
    explanation: "ACV commonly equals replacement cost minus depreciation, though other methods exist.",
    category: "General Principles"
  },
  {
    id: 38,
    sentence: "A _____ provides temporary insurance coverage until the actual policy is issued.",
    blank: "binder",
    options: ["binder", "declaration", "endorsement", "certificate"],
    correctAnswer: 0,
    explanation: "Binders provide immediate temporary coverage, oral or written.",
    category: "General Principles"
  },
  {
    id: 39,
    sentence: "_____ selection occurs when those most likely to have losses are most likely to seek insurance.",
    blank: "Adverse",
    options: ["Positive", "Adverse", "Negative", "Reverse"],
    correctAnswer: 1,
    explanation: "Adverse selection creates a riskier-than-average pool. Underwriting combats it.",
    category: "General Principles"
  },
  {
    id: 40,
    sentence: "_____ risk involves only the chance of loss or no loss, with no possibility of gain.",
    blank: "Pure",
    options: ["Pure", "Speculative", "Dynamic", "Static"],
    correctAnswer: 0,
    explanation: "Pure risk (e.g., fire, theft) is insurable. Speculative risk (gambling, investments) is not.",
    category: "General Principles"
  },
  {
    id: 41,
    sentence: "An _____ in liability coverage includes accidents, plus continuous or repeated exposure to harmful conditions.",
    blank: "occurrence",
    options: ["accident", "occurrence", "event", "incident"],
    correctAnswer: 1,
    explanation: "Occurrence is defined broadly: accidents and repeated exposure to conditions.",
    category: "General Principles"
  },
  {
    id: 42,
    sentence: "_____ is the intentional withholding of material information from the insurer.",
    blank: "Concealment",
    options: ["Misrepresentation", "Concealment", "Fraud", "Nondisclosure"],
    correctAnswer: 1,
    explanation: "Concealment is intentionally failing to disclose material facts.",
    category: "General Principles"
  },
  {
    id: 43,
    sentence: "_____ is insurance purchased by insurers to transfer some of their risk.",
    blank: "Reinsurance",
    options: ["Coinsurance", "Reinsurance", "Excess insurance", "Self-insurance"],
    correctAnswer: 1,
    explanation: "Reinsurance is insurance for insurance companies.",
    category: "General Principles"
  },
  {
    id: 44,
    sentence: "_____ Motorist coverage pays when an at-fault driver has insurance but limits are insufficient.",
    blank: "Underinsured",
    options: ["Uninsured", "Underinsured", "No-fault", "Excess"],
    correctAnswer: 1,
    explanation: "UIM pays when at-fault driver's insurance is inadequate to cover damages.",
    category: "Auto Insurance"
  },
  {
    id: 45,
    sentence: "_____ Motorist coverage pays when an at-fault driver has no insurance or is a hit-and-run.",
    blank: "Uninsured",
    options: ["Uninsured", "Underinsured", "No-fault", "Supplementary"],
    correctAnswer: 0,
    explanation: "UM covers when at-fault driver has no insurance or is unknown (hit-and-run).",
    category: "Auto Insurance"
  },
  {
    id: 46,
    sentence: "_____ limits express three amounts: per person BI / per accident BI / per accident PD.",
    blank: "Split",
    options: ["Combined", "Split", "Single", "Dual"],
    correctAnswer: 1,
    explanation: "Split limits show three separate amounts (e.g., 50/100/50).",
    category: "Auto Insurance"
  },
  {
    id: 47,
    sentence: "_____ single limit provides one total limit for all BI and PD per accident.",
    blank: "Combined",
    options: ["Combined", "Split", "Total", "Unified"],
    correctAnswer: 0,
    explanation: "CSL provides one combined limit (e.g., $300,000) for all BI and PD.",
    category: "Auto Insurance"
  },
  {
    id: 48,
    sentence: "_____ refers to charging for depreciation when replacing old auto parts with new ones.",
    blank: "Betterment",
    options: ["Depreciation", "Betterment", "Obsolescence", "Wear"],
    correctAnswer: 1,
    explanation: "Betterment accounts for improvement when new parts replace old worn parts.",
    category: "Auto Insurance"
  },
  {
    id: 49,
    sentence: "An _____ policy provides excess liability over underlying policies and may cover exposures not in underlying.",
    blank: "umbrella",
    options: ["excess", "umbrella", "surplus", "supplemental"],
    correctAnswer: 1,
    explanation: "Umbrellas provide excess coverage plus may cover some exposures not in underlying policies.",
    category: "Other Personal Lines"
  },
  {
    id: 50,
    sentence: "The _____ in an umbrella acts like a deductible when there's no underlying coverage.",
    blank: "self-insured retention (SIR)",
    options: [
      "deductible",
      "self-insured retention (SIR)",
      "excess amount",
      "premium"
    ],
    correctAnswer: 1,
    explanation: "The SIR applies to losses covered by the umbrella but not underlying policies.",
    category: "Other Personal Lines"
  }
];
