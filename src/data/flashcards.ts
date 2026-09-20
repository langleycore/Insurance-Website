export interface Flashcard {
  id: number;
  term: string;
  definition: string;
  category: string;
}

export const flashcards: Flashcard[] = [
  // BASIC INSURANCE CONCEPTS (15 cards)
  {
    id: 1,
    term: "Insurance",
    definition: "A contract where an insurer agrees to compensate the insured for specified losses in exchange for premium payments.",
    category: "Basic Concepts"
  },
  {
    id: 2,
    term: "Risk",
    definition: "The uncertainty or chance of loss. The possibility that an adverse event will occur.",
    category: "Basic Concepts"
  },
  {
    id: 3,
    term: "Peril",
    definition: "The cause of a loss, such as fire, windstorm, theft, collision, or lightning.",
    category: "Basic Concepts"
  },
  {
    id: 4,
    term: "Hazard",
    definition: "A condition that increases the likelihood or severity of loss. Can be physical (icy steps), moral (dishonesty), or morale (carelessness).",
    category: "Basic Concepts"
  },
  {
    id: 5,
    term: "Insurable Interest",
    definition: "A legitimate financial interest in the preservation of property or life being insured. You must suffer financial loss if damage occurs.",
    category: "Basic Concepts"
  },
  {
    id: 6,
    term: "Premium",
    definition: "The payment made by the insured to the insurance company in exchange for coverage.",
    category: "Basic Concepts"
  },
  {
    id: 7,
    term: "Deductible",
    definition: "The amount the insured must pay out-of-pocket before insurance pays a claim. Used to eliminate small claims and reduce premiums.",
    category: "Basic Concepts"
  },
  {
    id: 8,
    term: "Underwriting",
    definition: "The process of evaluating risks, selecting which to insure, and determining appropriate premiums to ensure profitability.",
    category: "Basic Concepts"
  },
  {
    id: 9,
    term: "Claim",
    definition: "A formal request by the insured to the insurance company for payment of benefits under the policy for a covered loss.",
    category: "Basic Concepts"
  },
  {
    id: 10,
    term: "Named Insured",
    definition: "The person or entity specifically identified in the policy declarations who has policy rights and responsibilities.",
    category: "Basic Concepts"
  },
  {
    id: 11,
    term: "Agent",
    definition: "A licensed individual who represents one or more insurance companies and sells policies to the public.",
    category: "Basic Concepts"
  },
  {
    id: 12,
    term: "Coverage",
    definition: "The protection provided by an insurance policy against specific perils or for specified property.",
    category: "Basic Concepts"
  },
  {
    id: 13,
    term: "Policyholder",
    definition: "The person or entity who owns the insurance policy and is responsible for paying premiums.",
    category: "Basic Concepts"
  },
  {
    id: 14,
    term: "Policy Period",
    definition: "The time during which the insurance policy is in force, from the effective date to the expiration date.",
    category: "Basic Concepts"
  },
  {
    id: 15,
    term: "Renewal",
    definition: "Continuing insurance coverage for another policy period, typically with updated terms or premiums.",
    category: "Basic Concepts"
  },

  // INSURANCE PRINCIPLES (20 cards)
  {
    id: 16,
    term: "Indemnity",
    definition: "The principle that insurance restores the insured to their approximate financial position before the loss, no better or worse.",
    category: "Insurance Principles"
  },
  {
    id: 17,
    term: "Subrogation",
    definition: "The insurer's right to recover claim payments from a negligent third party who caused the loss.",
    category: "Insurance Principles"
  },
  {
    id: 18,
    term: "Utmost Good Faith",
    definition: "Both parties to an insurance contract must deal honestly and disclose all material facts. Also called uberrimae fidei.",
    category: "Insurance Principles"
  },
  {
    id: 19,
    term: "Actual Cash Value (ACV)",
    definition: "Replacement cost minus depreciation for age, wear, and tear. The property's fair market value at time of loss.",
    category: "Insurance Principles"
  },
  {
    id: 20,
    term: "Replacement Cost",
    definition: "The cost to replace damaged property with new property of like kind and quality without deducting for depreciation.",
    category: "Insurance Principles"
  },
  {
    id: 21,
    term: "Proximate Cause",
    definition: "The dominant cause that sets in motion an unbroken chain of events producing the loss.",
    category: "Insurance Principles"
  },
  {
    id: 22,
    term: "Law of Large Numbers",
    definition: "As the number of exposure units increases, actual loss experience becomes more predictable. The foundation of insurance.",
    category: "Insurance Principles"
  },
  {
    id: 23,
    term: "Adverse Selection",
    definition: "The tendency for those most likely to suffer losses to be more likely to purchase insurance.",
    category: "Insurance Principles"
  },
  {
    id: 24,
    term: "Concealment",
    definition: "Intentionally withholding material facts that would affect the insurer's decision to issue coverage. Can void the policy.",
    category: "Insurance Principles"
  },
  {
    id: 25,
    term: "Misrepresentation",
    definition: "Providing false, incomplete, or misleading information on an application. Material misrepresentation can void coverage.",
    category: "Insurance Principles"
  },
  {
    id: 26,
    term: "Material Fact",
    definition: "Information that would influence an underwriter's decision to accept risk or determine premium. Must be disclosed.",
    category: "Insurance Principles"
  },
  {
    id: 27,
    term: "Waiver",
    definition: "Voluntarily giving up a known right. Example: Insurer waives late payment penalty by accepting late premium.",
    category: "Insurance Principles"
  },
  {
    id: 28,
    term: "Estoppel",
    definition: "A legal principle preventing a party from denying something previously stated that another party relied upon.",
    category: "Insurance Principles"
  },
  {
    id: 29,
    term: "Salvage",
    definition: "Damaged property remaining after a total loss that the insurer takes ownership of after paying the claim.",
    category: "Insurance Principles"
  },
  {
    id: 30,
    term: "Coinsurance",
    definition: "A requirement to insure property to a specified percentage (typically 80%) of value or face a penalty at loss.",
    category: "Insurance Principles"
  },
  {
    id: 31,
    term: "Named Perils",
    definition: "Insurance covering only specific perils (causes of loss) listed in the policy, such as fire, theft, and windstorm.",
    category: "Insurance Principles"
  },
  {
    id: 32,
    term: "Open Perils",
    definition: "Insurance covering all causes of loss except those specifically excluded. Also called 'all-risk' or 'special form' coverage.",
    category: "Insurance Principles"
  },
  {
    id: 33,
    term: "Binder",
    definition: "Temporary insurance contract providing immediate coverage until the formal policy is issued. Legally binding.",
    category: "Insurance Principles"
  },
  {
    id: 34,
    term: "Betterment",
    definition: "The increase in property value when old or damaged parts are replaced with new ones. Insurers may reduce payments for this.",
    category: "Insurance Principles"
  },
  {
    id: 35,
    term: "Appraisal",
    definition: "A dispute resolution process where each party selects an appraiser to determine the value of a loss.",
    category: "Insurance Principles"
  },

  // POLICY COMPONENTS (10 cards)
  {
    id: 36,
    term: "Declarations Page",
    definition: "Policy section summarizing who/what is insured, coverage limits, premiums, deductibles, and policy period.",
    category: "Policy Components"
  },
  {
    id: 37,
    term: "Insuring Agreement",
    definition: "The policy section where the insurer promises to provide coverage and pay claims in exchange for premium.",
    category: "Policy Components"
  },
  {
    id: 38,
    term: "Conditions",
    definition: "Policy provisions outlining rights and duties of both insured and insurer, such as reporting claims promptly.",
    category: "Policy Components"
  },
  {
    id: 39,
    term: "Exclusions",
    definition: "Policy provisions specifying what is NOT covered - certain perils, property, or situations like flood or intentional acts.",
    category: "Policy Components"
  },
  {
    id: 40,
    term: "Endorsement",
    definition: "A written document modifying the insurance policy by adding, deleting, or changing coverage. Also called a rider.",
    category: "Policy Components"
  },
  {
    id: 41,
    term: "Cancellation",
    definition: "Termination of the insurance policy before the expiration date by either the insured or insurer.",
    category: "Policy Components"
  },
  {
    id: 42,
    term: "Pro Rata Cancellation",
    definition: "Cancellation with premium refund based on exact time coverage was in force. Used when insurer cancels.",
    category: "Policy Components"
  },
  {
    id: 43,
    term: "Short-Rate Cancellation",
    definition: "Cancellation with a penalty applied to the premium refund. Used when the insured cancels.",
    category: "Policy Components"
  },
  {
    id: 44,
    term: "Additional Insured",
    definition: "A person or entity added to the policy who receives coverage under the named insured's policy.",
    category: "Policy Components"
  },
  {
    id: 45,
    term: "Liberalization Clause",
    definition: "Automatically provides broader coverage if the insurer adopts broader forms during the policy period.",
    category: "Policy Components"
  },

  // AUTO INSURANCE (30 cards)
  {
    id: 46,
    term: "Liability Coverage",
    definition: "Auto insurance that pays for bodily injury and property damage you cause to others. Required by law in Virginia.",
    category: "Auto Insurance"
  },
  {
    id: 47,
    term: "Bodily Injury Liability",
    definition: "Coverage for injuries you cause to other people, including medical expenses, lost wages, and pain and suffering.",
    category: "Auto Insurance"
  },
  {
    id: 48,
    term: "Property Damage Liability",
    definition: "Coverage for damage you cause to another person's property, such as their vehicle, fence, or building.",
    category: "Auto Insurance"
  },
  {
    id: 49,
    term: "Split Limits",
    definition: "Separate liability limits for bodily injury per person, per accident, and property damage. Example: Virginia's 50/100/25.",
    category: "Auto Insurance"
  },
  {
    id: 50,
    term: "Combined Single Limit",
    definition: "One total liability limit for all bodily injury and property damage claims from a single accident.",
    category: "Auto Insurance"
  },
  {
    id: 51,
    term: "Collision Coverage",
    definition: "Pays for damage to your vehicle from impact with another vehicle or object, or from rollover. Subject to deductible.",
    category: "Auto Insurance"
  },
  {
    id: 52,
    term: "Comprehensive Coverage",
    definition: "Pays for damage from non-collision perils: theft, vandalism, fire, hail, flood, glass, hitting animals. Also called Other Than Collision.",
    category: "Auto Insurance"
  },
  {
    id: 53,
    term: "Uninsured Motorist (UM)",
    definition: "Coverage paying for your injuries when hit by a driver with no insurance. Must be offered in Virginia.",
    category: "Auto Insurance"
  },
  {
    id: 54,
    term: "Underinsured Motorist (UIM)",
    definition: "Coverage paying when the at-fault driver's liability limits are insufficient to cover your damages.",
    category: "Auto Insurance"
  },
  {
    id: 55,
    term: "Medical Payments (MedPay)",
    definition: "Covers medical expenses for you and passengers in your vehicle, regardless of who was at fault.",
    category: "Auto Insurance"
  },
  {
    id: 56,
    term: "Permissive User",
    definition: "Someone using your vehicle with your permission. Typically covered under your auto policy.",
    category: "Auto Insurance"
  },
  {
    id: 57,
    term: "Non-Owned Auto",
    definition: "A vehicle you don't own but use with permission (borrowed or rental). Coverage typically extends from your personal policy.",
    category: "Auto Insurance"
  },
  {
    id: 58,
    term: "Newly Acquired Auto",
    definition: "A recently purchased vehicle. Personal auto policies provide automatic coverage for a limited time (14 days for physical damage).",
    category: "Auto Insurance"
  },
  {
    id: 59,
    term: "Total Loss",
    definition: "When repair costs exceed the vehicle's actual cash value. Insurer pays ACV minus deductible.",
    category: "Auto Insurance"
  },
  {
    id: 60,
    term: "Rental Reimbursement",
    definition: "Optional coverage paying a specified daily amount for a rental car while your vehicle is repaired after a covered loss.",
    category: "Auto Insurance"
  },
  {
    id: 61,
    term: "Towing and Labor",
    definition: "Coverage paying for towing and on-scene labor when your vehicle is disabled, up to policy limits.",
    category: "Auto Insurance"
  },
  {
    id: 62,
    term: "GAP Insurance",
    definition: "Guaranteed Auto Protection - covers the difference between what you owe and the vehicle's ACV if totaled.",
    category: "Auto Insurance"
  },
  {
    id: 63,
    term: "Stacking",
    definition: "Combining uninsured motorist limits from multiple vehicles on the same policy to provide higher total coverage.",
    category: "Auto Insurance"
  },
  {
    id: 64,
    term: "Personal Auto Policy (PAP)",
    definition: "Standard insurance policy for private passenger vehicles, covering liability, medical payments, UM, and physical damage.",
    category: "Auto Insurance"
  },
  {
    id: 65,
    term: "Supplementary Payments",
    definition: "Defense costs, court costs, bail bonds, and other expenses the insurer pays in addition to policy limits.",
    category: "Auto Insurance"
  },
  {
    id: 66,
    term: "Financial Responsibility Law",
    definition: "State laws requiring drivers to prove ability to pay for damages they cause through insurance, bonds, or deposits.",
    category: "Auto Insurance"
  },
  {
    id: 67,
    term: "Virginia Auto Liability Limits",
    definition: "Minimum $50,000 per person, $100,000 per accident bodily injury, $25,000 property damage (50/100/25). Effective Jan 1, 2025.",
    category: "Auto Insurance"
  },
  {
    id: 68,
    term: "Virginia UMV Fee",
    definition: "The $500 uninsured motor vehicle fee was eliminated July 1, 2024. Insurance is now mandatory for all registered vehicles.",
    category: "Auto Insurance"
  },
  {
    id: 69,
    term: "Other Insurance Clause",
    definition: "Explains how coverage applies when more than one policy covers the same loss, typically prorating among policies.",
    category: "Auto Insurance"
  },
  {
    id: 70,
    term: "Drive Other Car Coverage",
    definition: "Extends coverage when the insured drives a vehicle they don't own, providing the same coverages as their policy.",
    category: "Auto Insurance"
  },
  {
    id: 71,
    term: "Omnibus Clause",
    definition: "Policy provision extending coverage to additional persons using the vehicle with permission.",
    category: "Auto Insurance"
  },
  {
    id: 72,
    term: "Excluded Driver",
    definition: "A household member specifically excluded from coverage by endorsement. No coverage if they drive the vehicle.",
    category: "Auto Insurance"
  },
  {
    id: 73,
    term: "After-Market Parts",
    definition: "Non-original equipment manufacturer parts. Virginia requires insurers to disclose if these will be used in repairs.",
    category: "Auto Insurance"
  },
  {
    id: 74,
    term: "Assigned Risk Plan",
    definition: "Virginia Automobile Insurance Plan providing insurance to drivers unable to obtain coverage in the voluntary market.",
    category: "Auto Insurance"
  },
  {
    id: 75,
    term: "Personal Injury Protection (PIP)",
    definition: "No-fault coverage paying medical expenses, lost wages, and other costs regardless of who caused the accident.",
    category: "Auto Insurance"
  },

  // HOMEOWNERS INSURANCE (30 cards)
  {
    id: 76,
    term: "HO-3 Special Form",
    definition: "Most popular homeowners policy. Covers dwelling on open perils and personal property on named perils.",
    category: "Homeowners"
  },
  {
    id: 77,
    term: "Coverage A - Dwelling",
    definition: "Insures the house and structures attached to it, such as attached garage. Does not cover the land.",
    category: "Homeowners"
  },
  {
    id: 78,
    term: "Coverage B - Other Structures",
    definition: "Insures detached structures like garages, sheds, fences. Typically 10% of Coverage A.",
    category: "Homeowners"
  },
  {
    id: 79,
    term: "Coverage C - Personal Property",
    definition: "Insures belongings and contents. Typically 50% of Coverage A limit.",
    category: "Homeowners"
  },
  {
    id: 80,
    term: "Coverage D - Loss of Use",
    definition: "Pays additional living expenses when home is uninhabitable due to covered loss. May cover fair rental value.",
    category: "Homeowners"
  },
  {
    id: 81,
    term: "Coverage E - Personal Liability",
    definition: "Protects if you're legally liable for bodily injury or property damage to others. Typical limits: $100,000-$300,000.",
    category: "Homeowners"
  },
  {
    id: 82,
    term: "Coverage F - Medical Payments",
    definition: "Pays medical expenses for others injured on your property, regardless of liability. Typical limit: $1,000-$5,000 per person.",
    category: "Homeowners"
  },
  {
    id: 83,
    term: "Additional Living Expense",
    definition: "Part of Coverage D - pays extra costs to maintain normal living standards when home is uninhabitable.",
    category: "Homeowners"
  },
  {
    id: 84,
    term: "Fair Rental Value",
    definition: "Part of Coverage D - pays lost rental income if you rent part of your home and cannot do so due to a covered loss.",
    category: "Homeowners"
  },
  {
    id: 85,
    term: "Special Limits",
    definition: "Sub-limits on certain property types: jewelry ($1,500), money ($200), firearms ($2,500), silverware ($2,500).",
    category: "Homeowners"
  },
  {
    id: 86,
    term: "Scheduled Personal Property",
    definition: "High-value items listed with specific values and broader coverage, often with no deductible. Endorsement HO 04 61.",
    category: "Homeowners"
  },
  {
    id: 87,
    term: "Replacement Cost Endorsement",
    definition: "HO 04 90 - pays replacement cost for personal property rather than depreciated actual cash value.",
    category: "Homeowners"
  },
  {
    id: 88,
    term: "Standard Mortgage Clause",
    definition: "Protects lender's interest even if insured's coverage is voided. Lender receives payment for their interest.",
    category: "Homeowners"
  },
  {
    id: 89,
    term: "Debris Removal",
    definition: "Pays to remove debris of covered property after a covered loss. Provides additional 5% if needed.",
    category: "Homeowners"
  },
  {
    id: 90,
    term: "Trees, Shrubs, Plants",
    definition: "Covered up to 5% of Coverage A, $500 per item, for loss from named perils like fire or vehicle damage.",
    category: "Homeowners"
  },
  {
    id: 91,
    term: "Fire Department Service Charge",
    definition: "Pays charges when fire department is called to save covered property. Typically $500 limit.",
    category: "Homeowners"
  },
  {
    id: 92,
    term: "Reasonable Repairs",
    definition: "Pays costs of repairs made solely to protect property from further damage after a covered loss.",
    category: "Homeowners"
  },
  {
    id: 93,
    term: "Property Removed",
    definition: "Extends coverage to property removed from premises for preservation from a covered peril for up to 30 days.",
    category: "Homeowners"
  },
  {
    id: 94,
    term: "Credit Card Coverage",
    definition: "Covers unauthorized use of credit cards and forgery up to $500 with no deductible.",
    category: "Homeowners"
  },
  {
    id: 95,
    term: "Loss Assessment",
    definition: "Pays insured's share of assessments by homeowners association for covered losses to common property. Typically $1,000.",
    category: "Homeowners"
  },
  {
    id: 96,
    term: "Glass or Safety Glazing",
    definition: "Covers storm door and window glass; pays actual cost of safety glazing if required by ordinance.",
    category: "Homeowners"
  },
  {
    id: 97,
    term: "Landlord's Furnishings",
    definition: "Covers appliances and furnishings in apartment regularly rented to others, up to $2,500.",
    category: "Homeowners"
  },
  {
    id: 98,
    term: "Ordinance or Law",
    definition: "Pays increased costs to rebuild to current building codes. Limited in standard policies; additional coverage available.",
    category: "Homeowners"
  },
  {
    id: 99,
    term: "HO-4 Tenants Form",
    definition: "Renters insurance covering personal property and liability. Does not cover building structure.",
    category: "Homeowners"
  },
  {
    id: 100,
    term: "HO-6 Condo",
    definition: "Covers condo owner's personal property, interior improvements, loss assessment, and liability.",
    category: "Homeowners"
  },
  {
    id: 101,
    term: "Earthquake Endorsement",
    definition: "HO 04 54 - adds coverage for earthquake damage with separate percentage deductible.",
    category: "Homeowners"
  },
  {
    id: 102,
    term: "Water Backup Coverage",
    definition: "Optional coverage for water damage from sewer/drain backup or sump pump overflow. Standard policies exclude this.",
    category: "Homeowners"
  },
  {
    id: 103,
    term: "Home Business Coverage",
    definition: "HO 04 42 Permitted Incidental Occupancies - extends limited coverage for small home-based businesses.",
    category: "Homeowners"
  },
  {
    id: 104,
    term: "Identity Theft Coverage",
    definition: "Optional endorsement covering expenses to restore identity and credit, legal fees, and lost wages.",
    category: "Homeowners"
  },
  {
    id: 105,
    term: "Refrigerated Products",
    definition: "Coverage for food spoilage due to power outage or equipment failure. Typically $500, no deductible.",
    category: "Homeowners"
  },

  // DWELLING POLICY (10 cards)
  {
    id: 106,
    term: "Dwelling Policy",
    definition: "Insurance for rental properties, vacation homes, and properties not eligible for homeowners policies.",
    category: "Dwelling Policy"
  },
  {
    id: 107,
    term: "DP-1 Basic Form",
    definition: "Most limited dwelling coverage with basic named perils only (fire, lightning, internal explosion, etc.).",
    category: "Dwelling Policy"
  },
  {
    id: 108,
    term: "DP-2 Broad Form",
    definition: "Dwelling policy covering 16 named perils, more comprehensive than DP-1.",
    category: "Dwelling Policy"
  },
  {
    id: 109,
    term: "DP-3 Special Form",
    definition: "Covers dwelling on open perils (all risks except excluded) and personal property on named perils.",
    category: "Dwelling Policy"
  },
  {
    id: 110,
    term: "Fair Rental Value (Dwelling)",
    definition: "Coverage D in dwelling policies - pays lost rental income when dwelling is uninhabitable.",
    category: "Dwelling Policy"
  },
  {
    id: 111,
    term: "Personal Liability Supplement",
    definition: "Separate endorsement adding liability coverage to dwelling policies. Not automatically included.",
    category: "Dwelling Policy"
  },
  {
    id: 112,
    term: "Automatic Increase Endorsement",
    definition: "DP 04 11 - automatically increases coverage limits annually to keep pace with inflation.",
    category: "Dwelling Policy"
  },
  {
    id: 113,
    term: "Broad Theft Coverage",
    definition: "DP 05 72 - provides broader theft coverage for on and off-premises property with higher limits.",
    category: "Dwelling Policy"
  },
  {
    id: 114,
    term: "Dwelling Under Construction",
    definition: "DP 11 43 - covers dwelling while under construction or substantial renovation.",
    category: "Dwelling Policy"
  },
  {
    id: 115,
    term: "Vacant vs Unoccupied",
    definition: "Vacant: no contents or people. Unoccupied: has contents but no people. Vacancy restrictions may apply.",
    category: "Dwelling Policy"
  },

  // VIRGINIA SPECIFIC & OTHER (5 cards)
  {
    id: 116,
    term: "Virginia P&C Guaranty Association",
    definition: "Protects policyholders if their insurance company becomes insolvent. Provides coverage continuation up to limits.",
    category: "Virginia Specific"
  },
  {
    id: 117,
    term: "Personal Umbrella Policy",
    definition: "Excess liability coverage above underlying auto and homeowners policies. May cover some excluded claims.",
    category: "Other Coverages"
  },
  {
    id: 118,
    term: "National Flood Insurance Program",
    definition: "Federal program providing flood insurance through participating insurers. Flood excluded from standard policies.",
    category: "Other Coverages"
  },
  {
    id: 119,
    term: "Virginia FAIR Plan",
    definition: "Basic property residual market providing fire coverage when insurance unavailable in voluntary market.",
    category: "Virginia Specific"
  },
  {
    id: 120,
    term: "Personal Articles Floater",
    definition: "Provides broader, all-risk coverage for scheduled high-value personal property with no deductible.",
    category: "Other Coverages"
  }
];
