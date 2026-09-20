export interface Flashcard {
  id: number;
  term: string;
  definition: string;
  category: string;
}

export const flashcards: Flashcard[] = [
  {
    id: 1,
    term: "Actual Cash Value (ACV)",
    definition: "The replacement cost of property minus depreciation. It represents the current value of an item considering its age, condition, and wear.",
    category: "Valuation"
  },
  {
    id: 2,
    term: "Aggregate Limit",
    definition: "The maximum amount an insurance policy will pay for all covered losses during the policy period, regardless of the number of claims.",
    category: "Policy Limits"
  },
  {
    id: 3,
    term: "Binder",
    definition: "A temporary insurance contract that provides evidence of coverage until the formal policy is issued. It is legally binding and contains essential terms of coverage.",
    category: "Policy Documents"
  },
  {
    id: 4,
    term: "Bodily Injury Liability",
    definition: "Coverage that pays for injuries to other people when you are legally liable. It includes medical expenses, lost wages, and pain and suffering.",
    category: "Auto Insurance"
  },
  {
    id: 5,
    term: "Claims-Made Policy",
    definition: "A liability policy that covers claims filed during the policy period, regardless of when the incident occurred (as long as it was after the retroactive date).",
    category: "Policy Types"
  },
  {
    id: 6,
    term: "Coinsurance",
    definition: "A property insurance provision that requires the insured to carry coverage equal to a specified percentage (usually 80%) of the property's value or face a penalty at the time of loss.",
    category: "Policy Provisions"
  },
  {
    id: 7,
    term: "Collision Coverage",
    definition: "Auto insurance coverage that pays for damage to your vehicle from impact with another vehicle or object, or from your vehicle overturning.",
    category: "Auto Insurance"
  },
  {
    id: 8,
    term: "Comprehensive Coverage",
    definition: "Auto insurance coverage for damage to your vehicle from non-collision events such as theft, vandalism, fire, flood, hail, and animal strikes.",
    category: "Auto Insurance"
  },
  {
    id: 9,
    term: "Declarations Page",
    definition: "The front page of an insurance policy that summarizes key information including the insured's name, property covered, policy limits, premium, and policy period.",
    category: "Policy Documents"
  },
  {
    id: 10,
    term: "Deductible",
    definition: "The amount the insured must pay out-of-pocket before the insurance company begins to pay for covered losses. Higher deductibles result in lower premiums.",
    category: "Policy Provisions"
  },
  {
    id: 11,
    term: "Endorsement",
    definition: "A written amendment to an insurance policy that changes the coverage, terms, or conditions. Also called a rider.",
    category: "Policy Documents"
  },
  {
    id: 12,
    term: "Exclusion",
    definition: "A policy provision that eliminates coverage for specified perils, properties, types of losses, or locations. Common exclusions include flood, earthquake, and war.",
    category: "Policy Provisions"
  },
  {
    id: 13,
    term: "Hazard",
    definition: "A condition that increases the likelihood or severity of a loss. Types include physical hazards (tangible), moral hazards (dishonesty), and morale hazards (carelessness).",
    category: "Risk"
  },
  {
    id: 14,
    term: "Indemnify",
    definition: "To restore the insured to the same financial position they were in before the loss—no better, no worse. A fundamental principle preventing profit from insurance.",
    category: "Insurance Principles"
  },
  {
    id: 15,
    term: "Insurable Interest",
    definition: "A financial stake in the person or property insured. The insured must stand to suffer a financial loss if the insured property is damaged or destroyed.",
    category: "Insurance Principles"
  },
  {
    id: 16,
    term: "Liability",
    definition: "Legal responsibility for injury to another person or damage to another person's property. Liability insurance protects against such claims.",
    category: "Legal Terms"
  },
  {
    id: 17,
    term: "Loss of Use",
    definition: "Homeowners insurance coverage (Coverage D) that pays for additional living expenses when your home is uninhabitable due to a covered loss.",
    category: "Homeowners Insurance"
  },
  {
    id: 18,
    term: "Material Misrepresentation",
    definition: "A false statement made during the application process that, if known, would have caused the insurer to decline coverage or charge a different premium. Can void the policy.",
    category: "Underwriting"
  },
  {
    id: 19,
    term: "Named Insured",
    definition: "The person or entity specifically named in the policy declarations as the insured. They have the rights and responsibilities under the policy.",
    category: "Policy Parties"
  },
  {
    id: 20,
    term: "Named Perils",
    definition: "Insurance coverage that protects only against losses from perils specifically listed in the policy (e.g., fire, theft, windstorm).",
    category: "Coverage Types"
  },
  {
    id: 21,
    term: "Negligence",
    definition: "Failure to use reasonable care, resulting in damage or injury to another. The basis for most liability claims.",
    category: "Legal Terms"
  },
  {
    id: 22,
    term: "Occurrence",
    definition: "An accident, including continuous or repeated exposure to substantially the same harmful conditions, that results in injury or damage during the policy period.",
    category: "Policy Provisions"
  },
  {
    id: 23,
    term: "Occurrence Policy",
    definition: "A liability policy that covers incidents that occur during the policy period, regardless of when the claim is filed.",
    category: "Policy Types"
  },
  {
    id: 24,
    term: "Open Perils",
    definition: "Insurance coverage that protects against all causes of loss except those specifically excluded in the policy. Also called 'all-risk' coverage.",
    category: "Coverage Types"
  },
  {
    id: 25,
    term: "Peril",
    definition: "The cause of a loss, such as fire, windstorm, theft, or collision. Insurance policies either specify covered perils or cover all perils except exclusions.",
    category: "Risk"
  },
  {
    id: 26,
    term: "Personal Injury",
    definition: "Non-physical injuries such as libel, slander, defamation, false arrest, wrongful eviction, and invasion of privacy. Different from bodily injury.",
    category: "Liability Insurance"
  },
  {
    id: 27,
    term: "Personal Property",
    definition: "Movable property not permanently attached to land or buildings. Covered under Coverage C in homeowners policies.",
    category: "Property Insurance"
  },
  {
    id: 28,
    term: "Policy Period",
    definition: "The time period during which an insurance policy provides coverage, stated on the declarations page with specific beginning and ending dates.",
    category: "Policy Provisions"
  },
  {
    id: 29,
    term: "Premium",
    definition: "The amount paid to the insurance company for an insurance policy. Can be paid in full or in installments.",
    category: "Financial Terms"
  },
  {
    id: 30,
    term: "Property Damage Liability",
    definition: "Coverage that pays for damage you cause to another person's property. Required as part of auto liability coverage.",
    category: "Auto Insurance"
  },
  {
    id: 31,
    term: "Proof of Loss",
    definition: "A formal, sworn statement by the policyholder documenting the circumstances and amount of loss claimed. Usually required within 60 days after the loss.",
    category: "Claims"
  },
  {
    id: 32,
    term: "Replacement Cost",
    definition: "The cost to replace damaged property with new property of similar kind and quality without deducting for depreciation.",
    category: "Valuation"
  },
  {
    id: 33,
    term: "Rider",
    definition: "An amendment to an insurance policy that modifies coverage. Also called an endorsement.",
    category: "Policy Documents"
  },
  {
    id: 34,
    term: "Risk",
    definition: "The uncertainty of financial loss. Insurance transfers risk from the individual to the insurance company in exchange for a premium.",
    category: "Insurance Principles"
  },
  {
    id: 35,
    term: "Salvage",
    definition: "Damaged property that retains some value after a loss. The insurer may take ownership of salvage when paying a total loss claim.",
    category: "Claims"
  },
  {
    id: 36,
    term: "Subrogation",
    definition: "The right of the insurance company to recover the amount paid to the insured from the party legally responsible for the loss.",
    category: "Claims"
  },
  {
    id: 37,
    term: "Supplementary Payments",
    definition: "Additional amounts an insurer pays beyond policy limits, typically for legal defense costs, bonds, and interest on judgments in liability policies.",
    category: "Policy Limits"
  },
  {
    id: 38,
    term: "Tort",
    definition: "A wrongful act or injury (other than breach of contract) for which civil action can be brought. Forms the basis for liability claims.",
    category: "Legal Terms"
  },
  {
    id: 39,
    term: "Underwriting",
    definition: "The process of evaluating and classifying the risk of potential insureds and determining appropriate premiums and coverage terms.",
    category: "Underwriting"
  },
  {
    id: 40,
    term: "Uninsured Motorist Coverage",
    definition: "Coverage that protects you if you're injured by a driver who has no insurance or insufficient insurance. Covers medical expenses, lost wages, and pain and suffering.",
    category: "Auto Insurance"
  },
  {
    id: 41,
    term: "Utmost Good Faith",
    definition: "A fundamental insurance principle requiring both insured and insurer to act honestly and disclose all material facts. Also called uberrima fides.",
    category: "Insurance Principles"
  },
  {
    id: 42,
    term: "Valued Policy",
    definition: "A policy that pays a specified amount regardless of actual loss. Common in some states for total fire losses to real property.",
    category: "Policy Types"
  },
  {
    id: 43,
    term: "Vicarious Liability",
    definition: "Legal responsibility one party has for the actions of another, such as an employer being liable for an employee's actions during work.",
    category: "Legal Terms"
  },
  {
    id: 44,
    term: "Waiver",
    definition: "The voluntary relinquishment of a known right. For example, an insurer may waive a policy condition.",
    category: "Legal Terms"
  },
  {
    id: 45,
    term: "Warranty",
    definition: "A statement guaranteed by the insured to be true. Breach of warranty can void coverage even if unrelated to the loss.",
    category: "Policy Provisions"
  },
  {
    id: 46,
    term: "Dwelling",
    definition: "The house or structure where the insured lives. Covered under Coverage A in homeowners policies.",
    category: "Homeowners Insurance"
  },
  {
    id: 47,
    term: "Other Structures",
    definition: "Structures on the insured property not attached to the dwelling, such as detached garages, sheds, or fences. Covered under Coverage B in homeowners policies.",
    category: "Homeowners Insurance"
  },
  {
    id: 48,
    term: "Per Occurrence Limit",
    definition: "The maximum amount the policy will pay for all damages arising from a single accident or event, regardless of the number of people injured.",
    category: "Policy Limits"
  },
  {
    id: 49,
    term: "Per Person Limit",
    definition: "The maximum amount the policy will pay for injuries to one person in an accident. Common in auto liability coverage.",
    category: "Policy Limits"
  },
  {
    id: 50,
    term: "Estoppel",
    definition: "A legal principle that prevents someone from denying or asserting something contrary to what they previously stated or did. Protects insureds who relied on an insurer's actions or statements.",
    category: "Legal Terms"
  }
];
