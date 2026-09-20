export interface MatchingSet {
  id: number;
  title: string;
  category: string;
  pairs: {
    term: string;
    definition: string;
  }[];
}

export const matchingSets: MatchingSet[] = [
  {
    id: 1,
    title: "Policy Forms",
    category: "Homeowners",
    pairs: [
      { term: "HO-1", definition: "Basic Form (rarely used)" },
      { term: "HO-2", definition: "Broad Form - named perils on dwelling and contents" },
      { term: "HO-3", definition: "Special Form - open perils on dwelling, named perils on contents" },
      { term: "HO-4", definition: "Renters/Tenants - contents and liability only" },
      { term: "HO-5", definition: "Comprehensive - open perils on dwelling and contents" },
      { term: "HO-6", definition: "Condominium Unit Owners" },
      { term: "HO-8", definition: "Modified Coverage - for older homes" }
    ]
  },
  {
    id: 2,
    title: "Dwelling Policy Forms",
    category: "Dwelling Policies",
    pairs: [
      { term: "DP-1", definition: "Basic Form - fire, lightning, internal explosion" },
      { term: "DP-2", definition: "Broad Form - broad named perils" },
      { term: "DP-3", definition: "Special Form - open perils on dwelling, named perils on contents" }
    ]
  },
  {
    id: 3,
    title: "Coverage Letters - Homeowners",
    category: "Homeowners",
    pairs: [
      { term: "Coverage A", definition: "Dwelling" },
      { term: "Coverage B", definition: "Other Structures" },
      { term: "Coverage C", definition: "Personal Property" },
      { term: "Coverage D", definition: "Loss of Use / Additional Living Expense" },
      { term: "Coverage E", definition: "Personal Liability" },
      { term: "Coverage F", definition: "Medical Payments to Others" }
    ]
  },
  {
    id: 4,
    title: "PAP Parts",
    category: "Auto Insurance",
    pairs: [
      { term: "Part A", definition: "Liability Coverage" },
      { term: "Part B", definition: "Medical Payments" },
      { term: "Part C", definition: "Uninsured Motorists" },
      { term: "Part D", definition: "Coverage for Damage to Your Auto" }
    ]
  },
  {
    id: 5,
    title: "Perils Coverage Types",
    category: "Property Basics",
    pairs: [
      { term: "Named Perils", definition: "Only listed perils are covered" },
      { term: "Open Perils", definition: "All perils except those excluded are covered" },
      { term: "All-Risk", definition: "Another term for open perils" },
      { term: "Broad Named Perils", definition: "Expanded list of named perils" }
    ]
  },
  {
    id: 6,
    title: "Insurance Principles",
    category: "General Principles",
    pairs: [
      { term: "Indemnity", definition: "Restoring insured to pre-loss position, no better" },
      { term: "Subrogation", definition: "Insurer's right to recover from negligent third parties" },
      { term: "Insurable Interest", definition: "Financial loss would occur if property is damaged" },
      { term: "Utmost Good Faith", definition: "Both parties act honestly and disclose material facts" },
      { term: "Law of Large Numbers", definition: "As exposures increase, losses become more predictable" },
      { term: "Proximate Cause", definition: "Direct cause that sets chain of events leading to loss" }
    ]
  },
  {
    id: 7,
    title: "Valuation Methods",
    category: "Property Basics",
    pairs: [
      { term: "Actual Cash Value", definition: "Typically replacement cost minus depreciation" },
      { term: "Replacement Cost", definition: "Cost to replace with like kind and quality, no depreciation" },
      { term: "Agreed Value", definition: "Predetermined amount agreed upon by insurer and insured" },
      { term: "Market Value", definition: "Amount property would sell for in open market" },
      { term: "Functional Replacement Cost", definition: "Cost to replace with functionally equivalent property" }
    ]
  },
  {
    id: 8,
    title: "Types of Insurers",
    category: "General Principles",
    pairs: [
      { term: "Domestic Insurer", definition: "Incorporated in Virginia (for VA purposes)" },
      { term: "Foreign Insurer", definition: "Incorporated in another U.S. state or territory" },
      { term: "Alien Insurer", definition: "Incorporated in another country" },
      { term: "Stock Insurer", definition: "Owned by stockholders, profit-driven" },
      { term: "Mutual Insurer", definition: "Owned by policyholders" },
      { term: "Reciprocal Insurer", definition: "Unincorporated group exchanging insurance" }
    ]
  },
  {
    id: 9,
    title: "Contract Elements",
    category: "General Principles",
    pairs: [
      { term: "Offer and Acceptance", definition: "Agreement between parties" },
      { term: "Consideration", definition: "Something of value exchanged (premium and promises)" },
      { term: "Competent Parties", definition: "Parties must be legally capable" },
      { term: "Legal Purpose", definition: "Contract must be for a lawful objective" }
    ]
  },
  {
    id: 10,
    title: "Contract Characteristics",
    category: "General Principles",
    pairs: [
      { term: "Contract of Adhesion", definition: "Insurer writes it; insured accepts or rejects" },
      { term: "Aleatory Contract", definition: "Unequal exchange - premium vs. potential large payout" },
      { term: "Conditional Contract", definition: "Insurer's obligations depend on insured meeting conditions" },
      { term: "Unilateral Contract", definition: "Only one party (insurer) makes enforceable promise" },
      { term: "Personal Contract", definition: "Between insurer and named insured (not transferable)" }
    ]
  },
  {
    id: 11,
    title: "Liability Terms",
    category: "Homeowners",
    pairs: [
      { term: "Bodily Injury", definition: "Physical injury, sickness, or death" },
      { term: "Property Damage", definition: "Physical injury to or destruction of tangible property" },
      { term: "Personal Injury", definition: "Non-physical injury (libel, slander, false arrest)" },
      { term: "Occurrence", definition: "Accident, including continuous/repeated exposure" },
      { term: "Per Occurrence Limit", definition: "Maximum paid for all claims from one occurrence" }
    ]
  },
  {
    id: 12,
    title: "Auto Coverage Terms",
    category: "Auto Insurance",
    pairs: [
      { term: "Collision", definition: "Impact with object/vehicle or overturn" },
      { term: "Other Than Collision", definition: "All physical damage perils except collision" },
      { term: "Comprehensive", definition: "Another term for Other Than Collision" },
      { term: "Betterment", definition: "Depreciation charge when new parts replace old" },
      { term: "Transportation Expenses", definition: "Pays after 48-hour wait for OTC loss" },
      { term: "Towing and Labor", definition: "Pays for towing and roadside labor" }
    ]
  },
  {
    id: 13,
    title: "UM/UIM Terms",
    category: "Auto Insurance",
    pairs: [
      { term: "Uninsured Motorist", definition: "Covers when at-fault driver has no insurance" },
      { term: "Underinsured Motorist", definition: "Covers when at-fault driver's limits are too low" },
      { term: "UM Bodily Injury", definition: "UM for bodily injuries" },
      { term: "UM Property Damage", definition: "UM for property damage (not required in VA)" },
      { term: "Hit-and-Run", definition: "Unknown driver - treated as uninsured" }
    ]
  },
  {
    id: 14,
    title: "Special Limits - Homeowners",
    category: "Homeowners",
    pairs: [
      { term: "$1,500", definition: "Jewelry, watches, furs - theft" },
      { term: "$2,500", definition: "Firearms - theft" },
      { term: "$2,500", definition: "Silverware - theft" },
      { term: "$1,500", definition: "Securities, cash, coins - theft" },
      { term: "$500", definition: "Trees, shrubs, plants - per item" },
      { term: "5% of Coverage A", definition: "Trees, shrubs, plants - total limit" }
    ]
  },
  {
    id: 15,
    title: "Endorsements & Add-Ons",
    category: "Homeowners",
    pairs: [
      { term: "Ordinance or Law", definition: "Covers increased costs to meet building codes" },
      { term: "Water Backup", definition: "Covers sewer and drain backup" },
      { term: "Earthquake", definition: "Covers earth movement losses" },
      { term: "Inflation Guard", definition: "Automatically increases Coverage A annually" },
      { term: "Scheduled Personal Property", definition: "Agreed value coverage for listed valuable items" },
      { term: "Personal Injury", definition: "Adds coverage for libel, slander, false arrest" }
    ]
  },
  {
    id: 16,
    title: "Property Losses",
    category: "Property Basics",
    pairs: [
      { term: "Direct Loss", definition: "Physical damage to property itself" },
      { term: "Indirect Loss", definition: "Consequential loss resulting from direct damage" },
      { term: "Partial Loss", definition: "Property is damaged but not totally destroyed" },
      { term: "Total Loss", definition: "Property is completely destroyed or beyond repair" },
      { term: "Constructive Total Loss", definition: "Repair cost exceeds property value" }
    ]
  },
  {
    id: 17,
    title: "Coinsurance Penalties",
    category: "Property Basics",
    pairs: [
      { term: "80% Coinsurance", definition: "Must insure to 80% of value to avoid penalty" },
      { term: "90% Coinsurance", definition: "Must insure to 90% of value to avoid penalty" },
      { term: "100% Coinsurance", definition: "Must insure to full value to avoid penalty" },
      { term: "Coinsurance Formula", definition: "(Insurance Carried / Insurance Required) × Loss" }
    ]
  },
  {
    id: 18,
    title: "Virginia Specific Terms",
    category: "Virginia Regulation",
    pairs: [
      { term: "25/50/20", definition: "Virginia's minimum auto liability limits" },
      { term: "Bureau of Insurance", definition: "Part of State Corporation Commission - regulates insurance" },
      { term: "16 hours / 3 ethics", definition: "CE requirement every 2 years" },
      { term: "30 days", definition: "Time to report address change" },
      { term: "70%", definition: "Passing score for Series 11-07 exam" },
      { term: "Biennial", definition: "License renewal frequency (every 2 years)" }
    ]
  },
  {
    id: 19,
    title: "Exclusions - Common",
    category: "Property Basics",
    pairs: [
      { term: "Flood", definition: "Surface water, overflow of water bodies" },
      { term: "Earth Movement", definition: "Earthquake, landslide, sinkhole, settling" },
      { term: "War", definition: "War, civil war, insurrection, rebellion" },
      { term: "Nuclear Hazard", definition: "Nuclear reaction, radiation, contamination" },
      { term: "Intentional Loss", definition: "Loss caused intentionally by insured" },
      { term: "Neglect", definition: "Failure to protect property after a loss" }
    ]
  },
  {
    id: 20,
    title: "Producer Violations",
    category: "Virginia Regulation",
    pairs: [
      { term: "Rebating", definition: "Offering inducement not specified in policy" },
      { term: "Twisting", definition: "Misrepresenting to induce policy replacement" },
      { term: "Churning", definition: "Replacing policies for commission" },
      { term: "Misrepresentation", definition: "False statements about policy terms or benefits" },
      { term: "Commingling", definition: "Mixing personal funds with client premiums" },
      { term: "Defamation", definition: "False statements harming another's reputation" }
    ]
  },
  {
    id: 21,
    title: "Claim Settlement Terms",
    category: "Property Basics",
    pairs: [
      { term: "Proof of Loss", definition: "Sworn statement of claim details required by insurer" },
      { term: "Appraisal", definition: "Process to resolve disputes over amount of loss" },
      { term: "Arbitration", definition: "Binding dispute resolution by neutral third party" },
      { term: "Salvage", definition: "Damaged property insurer takes after paying total loss" },
      { term: "Abandonment", definition: "Insured cannot force insurer to take damaged property" }
    ]
  },
  {
    id: 22,
    title: "Additional Coverages - HO",
    category: "Homeowners",
    pairs: [
      { term: "Debris Removal", definition: "Removal of damaged property after covered loss" },
      { term: "Fire Department Service Charge", definition: "Up to $500 for fire dept. charges" },
      { term: "Property Removed", definition: "Property being removed from premises for protection" },
      { term: "Credit Card", definition: "Unauthorized use - typically $500-$1,000" },
      { term: "Loss Assessment", definition: "Share of condo association assessment (HO-6)" },
      { term: "Collapse", definition: "For specific causes (hidden decay, weight, etc.)" }
    ]
  },
  {
    id: 23,
    title: "Underwriting Terms",
    category: "General Principles",
    pairs: [
      { term: "Underwriting", definition: "Process of selecting and classifying risks" },
      { term: "Adverse Selection", definition: "High-risk individuals more likely to seek insurance" },
      { term: "Moral Hazard", definition: "Dishonesty or character defect increasing risk" },
      { term: "Morale Hazard", definition: "Carelessness or indifference increasing risk" },
      { term: "Physical Hazard", definition: "Physical condition increasing chance of loss" }
    ]
  },
  {
    id: 24,
    title: "Liability Defense",
    category: "Homeowners",
    pairs: [
      { term: "Duty to Defend", definition: "Insurer must defend even if claim is groundless" },
      { term: "Duty to Indemnify", definition: "Insurer must pay covered claims" },
      { term: "Supplementary Payments", definition: "Defense costs, interest - paid in addition to limits" },
      { term: "Reservation of Rights", definition: "Insurer defends but reserves right to deny later" },
      { term: "Severability of Interests", definition: "Each insured covered separately" }
    ]
  },
  {
    id: 25,
    title: "Other Personal Lines",
    category: "Other Personal Lines",
    pairs: [
      { term: "Personal Umbrella", definition: "Excess liability over underlying policies" },
      { term: "SIR", definition: "Self-Insured Retention - deductible when no underlying coverage" },
      { term: "NFIP", definition: "National Flood Insurance Program" },
      { term: "Personal Articles Floater", definition: "Scheduled property with agreed value" },
      { term: "Inland Marine", definition: "Covers movable property and property in transit" }
    ]
  },
  {
    id: 26,
    title: "Time Periods - Virginia",
    category: "Virginia Regulation",
    pairs: [
      { term: "15 days", definition: "Cancellation notice for non-payment" },
      { term: "30 days", definition: "Report address change; notify of appointment termination" },
      { term: "45 days", definition: "Cancellation notice for reasons other than non-payment" },
      { term: "12 months", definition: "License lapse limit before exam required" },
      { term: "14 days", definition: "Automatic coverage period for additional auto (liability)" },
      { term: "4 days", definition: "Automatic coverage period for additional auto (physical damage)" }
    ]
  },
  {
    id: 27,
    title: "Coverage Triggers",
    category: "General Principles",
    pairs: [
      { term: "Occurrence Basis", definition: "Coverage when loss occurs during policy period" },
      { term: "Claims-Made Basis", definition: "Coverage when claim is made during policy period" },
      { term: "Discovery Basis", definition: "Coverage when loss is discovered during policy period" },
      { term: "Accident Basis", definition: "Coverage for specific sudden accidents" }
    ]
  },
  {
    id: 28,
    title: "Loss Mitigation",
    category: "Property Basics",
    pairs: [
      { term: "Duty to Mitigate", definition: "Insured must take reasonable steps to minimize loss" },
      { term: "Protective Safeguards", definition: "Required safety devices (sprinklers, alarms)" },
      { term: "Property Removed", definition: "Property moved to prevent further damage" },
      { term: "Temporary Repairs", definition: "Reasonable emergency repairs to prevent further loss" }
    ]
  },
  {
    id: 29,
    title: "Auto Territories",
    category: "Auto Insurance",
    pairs: [
      { term: "United States", definition: "All 50 states covered by PAP" },
      { term: "Canada", definition: "Covered by PAP" },
      { term: "Mexico", definition: "NOT covered by PAP - separate policy required" },
      { term: "U.S. Territories", definition: "Covered by PAP (Puerto Rico, Guam, etc.)" }
    ]
  },
  {
    id: 30,
    title: "Representation vs Warranty",
    category: "General Principles",
    pairs: [
      { term: "Representation", definition: "Statement substantially true to best of knowledge" },
      { term: "Warranty", definition: "Statement guaranteed to be absolutely true" },
      { term: "Material Misrepresentation", definition: "False statement affecting insurer's decision - may void policy" },
      { term: "Breach of Warranty", definition: "Any breach, even immaterial, can void coverage" }
    ]
  }
];
