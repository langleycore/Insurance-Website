export interface Flashcard {
  id: number;
  term: string;
  definition: string;
  category: string;
}

export const flashcards: Flashcard[] = [
  // BASIC INSURANCE CONCEPTS (20 cards)
  {
    id: 1,
    term: "Insurance",
    definition: "A contract where one party (insurer) agrees to compensate another party (insured) for specified losses in exchange for premium payments.",
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
    definition: "The cause of a loss. Examples include fire, windstorm, theft, collision, or lightning.",
    category: "Basic Concepts"
  },
  {
    id: 4,
    term: "Hazard",
    definition: "A condition that increases the likelihood or severity of a loss. Can be physical, moral, or morale.",
    category: "Basic Concepts"
  },
  {
    id: 5,
    term: "Physical Hazard",
    definition: "A tangible condition that increases the chance of loss, such as icy steps, defective wiring, or worn tires.",
    category: "Basic Concepts"
  },
  {
    id: 6,
    term: "Moral Hazard",
    definition: "Dishonesty or character defects that increase the chance of loss, such as intentionally causing a loss for insurance money.",
    category: "Basic Concepts"
  },
  {
    id: 7,
    term: "Morale Hazard",
    definition: "Carelessness or indifference to loss because insurance exists, such as leaving doors unlocked because you have theft coverage.",
    category: "Basic Concepts"
  },
  {
    id: 8,
    term: "Insurable Interest",
    definition: "A financial interest in the preservation of the property or life being insured. You must suffer financial loss if damage occurs.",
    category: "Basic Concepts"
  },
  {
    id: 9,
    term: "Premium",
    definition: "The payment made by the insured to the insurance company in exchange for coverage.",
    category: "Basic Concepts"
  },
  {
    id: 10,
    term: "Deductible",
    definition: "The amount the insured must pay out-of-pocket before the insurance company pays a claim. Used to eliminate small claims and reduce premiums.",
    category: "Basic Concepts"
  },
  {
    id: 11,
    term: "Policy",
    definition: "The written contract between the insured and insurer that contains all terms, conditions, coverages, and exclusions of the insurance agreement.",
    category: "Basic Concepts"
  },
  {
    id: 12,
    term: "Underwriting",
    definition: "The process of evaluating and selecting risks, determining appropriate premiums, and deciding whether to accept or reject an application for insurance.",
    category: "Basic Concepts"
  },
  {
    id: 13,
    term: "Claim",
    definition: "A formal request by the insured to the insurance company for payment of benefits under the policy for a covered loss.",
    category: "Basic Concepts"
  },
  {
    id: 14,
    term: "Named Insured",
    definition: "The person or entity specifically identified in the policy declarations who has policy rights and responsibilities.",
    category: "Basic Concepts"
  },
  {
    id: 15,
    term: "Policyholder",
    definition: "The person or entity who owns the insurance policy and is responsible for paying premiums.",
    category: "Basic Concepts"
  },
  {
    id: 16,
    term: "Insured",
    definition: "Any person or entity covered by the insurance policy, including the named insured and others granted coverage under policy terms.",
    category: "Basic Concepts"
  },
  {
    id: 17,
    term: "Insurer",
    definition: "The insurance company that issues the policy and agrees to pay covered losses in exchange for premiums.",
    category: "Basic Concepts"
  },
  {
    id: 18,
    term: "Agent",
    definition: "A licensed individual who represents one or more insurance companies and sells insurance policies to the public.",
    category: "Basic Concepts"
  },
  {
    id: 19,
    term: "Broker",
    definition: "A licensed individual who represents insurance buyers and helps them find coverage from various insurers. Works for the customer, not the insurer.",
    category: "Basic Concepts"
  },
  {
    id: 20,
    term: "Coverage",
    definition: "The protection provided by an insurance policy against specific perils or for specified property.",
    category: "Basic Concepts"
  },

  // INSURANCE PRINCIPLES (25 cards)
  {
    id: 21,
    term: "Indemnity",
    definition: "The principle that insurance should restore the insured to their approximate financial position before the loss, no better or worse. Prevents profit from insurance.",
    category: "Insurance Principles"
  },
  {
    id: 22,
    term: "Subrogation",
    definition: "The insurer's right to recover claim payments from a negligent third party who caused the loss. The insurer 'steps into the shoes' of the insured.",
    category: "Insurance Principles"
  },
  {
    id: 23,
    term: "Utmost Good Faith",
    definition: "The principle that both parties to an insurance contract must deal honestly and disclose all material facts. Also called uberrimae fidei.",
    category: "Insurance Principles"
  },
  {
    id: 24,
    term: "Actual Cash Value (ACV)",
    definition: "The replacement cost of property minus depreciation for age, wear, and tear. Represents the property's fair market value at time of loss.",
    category: "Insurance Principles"
  },
  {
    id: 25,
    term: "Replacement Cost",
    definition: "The cost to replace damaged property with new property of like kind and quality without any deduction for depreciation.",
    category: "Insurance Principles"
  },
  {
    id: 26,
    term: "Proximate Cause",
    definition: "The dominant or efficient cause that sets in motion an unbroken chain of events producing the loss without other intervening causes.",
    category: "Insurance Principles"
  },
  {
    id: 27,
    term: "Law of Large Numbers",
    definition: "The principle that as the number of exposure units increases, actual loss experience becomes more predictable and approaches expected losses.",
    category: "Insurance Principles"
  },
  {
    id: 28,
    term: "Adverse Selection",
    definition: "The tendency for those most likely to suffer a loss to be more likely to purchase insurance, creating imbalance in the risk pool.",
    category: "Insurance Principles"
  },
  {
    id: 29,
    term: "Consideration",
    definition: "Something of value exchanged between parties in a contract. In insurance, the premium paid by the insured in exchange for the insurer's promise to pay claims.",
    category: "Insurance Principles"
  },
  {
    id: 30,
    term: "Concealment",
    definition: "Intentionally withholding or hiding material facts that would affect the insurer's decision to issue a policy or set the premium. Can void coverage.",
    category: "Insurance Principles"
  },
  {
    id: 31,
    term: "Misrepresentation",
    definition: "Providing false, incomplete, or misleading information on an insurance application. Material misrepresentation can void the policy.",
    category: "Insurance Principles"
  },
  {
    id: 32,
    term: "Material Fact",
    definition: "Information that would influence an underwriter's decision to accept the risk or determine the premium. Must be disclosed truthfully.",
    category: "Insurance Principles"
  },
  {
    id: 33,
    term: "Waiver",
    definition: "Voluntarily giving up a known right. Example: An insurer waives late payment penalties by accepting late premium without consequences.",
    category: "Insurance Principles"
  },
  {
    id: 34,
    term: "Estoppel",
    definition: "A legal principle preventing a party from denying something previously stated or implied that another party relied upon.",
    category: "Insurance Principles"
  },
  {
    id: 35,
    term: "Salvage",
    definition: "Damaged property remaining after a total loss that the insurer takes title to after paying the claim. May be sold to reduce loss costs.",
    category: "Insurance Principles"
  },
  {
    id: 36,
    term: "Appraisal",
    definition: "A dispute resolution process where each party selects an appraiser to determine the value of a loss. If they disagree, an umpire decides.",
    category: "Insurance Principles"
  },
  {
    id: 37,
    term: "Betterment",
    definition: "The increase in property value when old or damaged parts are replaced with new ones. Insurers may reduce claim payments to account for this improvement.",
    category: "Insurance Principles"
  },
  {
    id: 38,
    term: "Coinsurance",
    definition: "A provision requiring the insured to maintain coverage equal to a specified percentage (typically 80%) of property value or face a penalty at loss.",
    category: "Insurance Principles"
  },
  {
    id: 39,
    term: "First Party Coverage",
    definition: "Insurance that protects the insured's own property or person, such as collision, comprehensive, or property coverage.",
    category: "Insurance Principles"
  },
  {
    id: 40,
    term: "Third Party Coverage",
    definition: "Liability insurance that protects the insured against claims made by others (third parties) for bodily injury or property damage.",
    category: "Insurance Principles"
  },
  {
    id: 41,
    term: "Occurrence",
    definition: "An accident, including continuous or repeated exposure to substantially the same harmful conditions, resulting in bodily injury or property damage.",
    category: "Insurance Principles"
  },
  {
    id: 42,
    term: "Named Perils Coverage",
    definition: "Insurance that covers only the specific perils (causes of loss) listed in the policy, such as fire, lightning, windstorm, and theft.",
    category: "Insurance Principles"
  },
  {
    id: 43,
    term: "Open Perils Coverage",
    definition: "Insurance covering all causes of loss except those specifically excluded. Also called 'all-risk' or 'special form' coverage. Broader than named perils.",
    category: "Insurance Principles"
  },
  {
    id: 44,
    term: "Binder",
    definition: "A temporary insurance contract providing immediate coverage until the formal policy is issued. Contains essential coverage terms and is legally binding.",
    category: "Insurance Principles"
  },
  {
    id: 45,
    term: "Reservation of Rights",
    definition: "A notice from the insurer that it will investigate or defend a claim but reserves the right to deny coverage if investigation reveals the claim is not covered.",
    category: "Insurance Principles"
  },

  // POLICY COMPONENTS (15 cards)
  {
    id: 46,
    term: "Declarations Page",
    definition: "The policy section summarizing who/what is insured, coverage limits, premiums, deductibles, policy period, and other key information.",
    category: "Policy Components"
  },
  {
    id: 47,
    term: "Insuring Agreement",
    definition: "The policy section where the insurer promises to provide coverage and pay claims in exchange for premium payment.",
    category: "Policy Components"
  },
  {
    id: 48,
    term: "Conditions",
    definition: "Policy provisions outlining the rights and duties of both insured and insurer, such as reporting claims promptly and cooperating with investigations.",
    category: "Policy Components"
  },
  {
    id: 49,
    term: "Exclusions",
    definition: "Policy provisions specifying what is NOT covered - certain perils, property, or situations such as flood, intentional acts, or war.",
    category: "Policy Components"
  },
  {
    id: 50,
    term: "Endorsement",
    definition: "A written document modifying the insurance policy by adding, deleting, or changing coverage terms. Also called a rider.",
    category: "Policy Components"
  },
  {
    id: 51,
    term: "Definitions",
    definition: "The policy section that defines specific terms used throughout the policy, often shown in quotation marks.",
    category: "Policy Components"
  },
  {
    id: 52,
    term: "Policy Period",
    definition: "The time during which the insurance policy is in force, from the effective date to the expiration date.",
    category: "Policy Components"
  },
  {
    id: 53,
    term: "Effective Date",
    definition: "The date and time when insurance coverage begins under the policy.",
    category: "Policy Components"
  },
  {
    id: 54,
    term: "Expiration Date",
    definition: "The date and time when insurance coverage ends under the policy.",
    category: "Policy Components"
  },
  {
    id: 55,
    term: "Renewal",
    definition: "Continuing insurance coverage for another policy period, typically with updated terms, conditions, or premiums.",
    category: "Policy Components"
  },
  {
    id: 56,
    term: "Cancellation",
    definition: "Termination of the insurance policy before the expiration date by either the insured or insurer according to policy terms.",
    category: "Policy Components"
  },
  {
    id: 57,
    term: "Pro Rata Cancellation",
    definition: "Cancellation with premium refund calculated on exact time coverage was in force. Used when the insurer cancels.",
    category: "Policy Components"
  },
  {
    id: 58,
    term: "Short-Rate Cancellation",
    definition: "Cancellation with a penalty applied to the premium refund. Used when the insured cancels the policy.",
    category: "Policy Components"
  },
  {
    id: 59,
    term: "Additional Insured",
    definition: "A person or entity added to the policy who receives coverage under the named insured's policy.",
    category: "Policy Components"
  },
  {
    id: 60,
    term: "Liberalization Clause",
    definition: "Automatically provides broader coverage if the insurer adopts broader forms or endorsements during the policy period, without additional premium.",
    category: "Policy Components"
  },

  // AUTO INSURANCE (25 cards)
  {
    id: 61,
    term: "Liability Coverage",
    definition: "Auto insurance that pays for bodily injury and property damage you cause to others. Required by law in most states including Virginia.",
    category: "Auto Insurance"
  },
  {
    id: 62,
    term: "Bodily Injury Liability",
    definition: "Coverage for injuries you cause to other people, including medical expenses, lost wages, pain and suffering, and legal defense.",
    category: "Auto Insurance"
  },
  {
    id: 63,
    term: "Property Damage Liability",
    definition: "Coverage for damage you cause to another person's property, such as their vehicle, fence, or building.",
    category: "Auto Insurance"
  },
  {
    id: 64,
    term: "Split Limits",
    definition: "Separate liability limits for bodily injury per person, bodily injury per accident, and property damage. Example: Virginia's 50/100/25.",
    category: "Auto Insurance"
  },
  {
    id: 65,
    term: "Combined Single Limit",
    definition: "One total liability limit applying to all bodily injury and property damage claims from a single accident, rather than separate limits.",
    category: "Auto Insurance"
  },
  {
    id: 66,
    term: "Collision Coverage",
    definition: "Pays for damage to your vehicle from impact with another vehicle or object, or from rollover. Subject to a deductible.",
    category: "Auto Insurance"
  },
  {
    id: 67,
    term: "Comprehensive Coverage",
    definition: "Pays for damage to your vehicle from non-collision perils: theft, vandalism, fire, hail, flood, falling objects, glass, hitting an animal. Also called Other Than Collision.",
    category: "Auto Insurance"
  },
  {
    id: 68,
    term: "Uninsured Motorist (UM)",
    definition: "Coverage that pays for your injuries and damages when hit by a driver with no insurance. Required to be offered in Virginia.",
    category: "Auto Insurance"
  },
  {
    id: 69,
    term: "Underinsured Motorist (UIM)",
    definition: "Coverage that pays when the at-fault driver's liability limits are insufficient to cover your injuries and damages.",
    category: "Auto Insurance"
  },
  {
    id: 70,
    term: "Medical Payments (MedPay)",
    definition: "Covers medical expenses for you and passengers in your vehicle, regardless of who was at fault in the accident.",
    category: "Auto Insurance"
  },
  {
    id: 71,
    term: "Personal Injury Protection (PIP)",
    definition: "No-fault coverage paying medical expenses, lost wages, and other costs for you and passengers regardless of who caused the accident.",
    category: "Auto Insurance"
  },
  {
    id: 72,
    term: "Permissive User",
    definition: "Someone using your vehicle with your express or implied permission. Typically covered under your auto policy.",
    category: "Auto Insurance"
  },
  {
    id: 73,
    term: "Non-Owned Auto",
    definition: "A vehicle the insured does not own but uses with permission, such as a borrowed or rental car. Coverage typically extends from personal auto policy.",
    category: "Auto Insurance"
  },
  {
    id: 74,
    term: "Newly Acquired Auto",
    definition: "A vehicle recently purchased by the insured. Personal auto policies typically provide automatic coverage for a limited time (often 14 days for physical damage).",
    category: "Auto Insurance"
  },
  {
    id: 75,
    term: "Total Loss",
    definition: "When repair costs exceed the actual cash value of the vehicle, or when the vehicle is stolen and not recovered. Insurer pays the ACV minus deductible.",
    category: "Auto Insurance"
  },
  {
    id: 76,
    term: "Rental Reimbursement",
    definition: "Optional coverage paying a specified daily amount for a rental car while your vehicle is being repaired after a covered loss.",
    category: "Auto Insurance"
  },
  {
    id: 77,
    term: "Towing and Labor",
    definition: "Optional coverage paying for towing and on-scene labor costs when your vehicle is disabled, up to policy limits.",
    category: "Auto Insurance"
  },
  {
    id: 78,
    term: "GAP Insurance",
    definition: "Guaranteed Auto Protection - Covers the difference between what you owe on a leased/financed vehicle and its actual cash value if totaled.",
    category: "Auto Insurance"
  },
  {
    id: 79,
    term: "Stacking",
    definition: "Combining uninsured motorist coverage limits from multiple vehicles on the same policy to provide higher total coverage for a single claim.",
    category: "Auto Insurance"
  },
  {
    id: 80,
    term: "Personal Auto Policy (PAP)",
    definition: "The standard insurance policy for private passenger vehicles, covering liability, medical payments, uninsured motorist, and physical damage.",
    category: "Auto Insurance"
  },
  {
    id: 81,
    term: "Omnibus Clause",
    definition: "Policy provision extending coverage to additional persons using the vehicle with permission, not just the named insured.",
    category: "Auto Insurance"
  },
  {
    id: 82,
    term: "Drive Other Car Coverage",
    definition: "Extends coverage when the insured drives a vehicle they don't own, providing the same coverages as their own policy.",
    category: "Auto Insurance"
  },
  {
    id: 83,
    term: "Other Insurance Clause",
    definition: "Explains how coverage applies when more than one policy covers the same loss, typically prorating among policies.",
    category: "Auto Insurance"
  },
  {
    id: 84,
    term: "Supplementary Payments",
    definition: "Amounts the insurer pays in addition to policy limits, including defense costs, court costs, bail bonds, and certain expenses.",
    category: "Auto Insurance"
  },
  {
    id: 85,
    term: "Financial Responsibility Law",
    definition: "State laws requiring drivers to prove ability to pay for damages they cause, typically through liability insurance, bonds, or deposits.",
    category: "Auto Insurance"
  },

  // HOMEOWNERS INSURANCE (30 cards)
  {
    id: 86,
    term: "HO-3 Special Form",
    definition: "The most popular homeowners policy. Covers dwelling on open perils basis and personal property on named perils basis.",
    category: "Homeowners Insurance"
  },
  {
    id: 87,
    term: "Coverage A - Dwelling",
    definition: "Insures the house and structures attached to it, such as attached garage. Does not cover the land.",
    category: "Homeowners Insurance"
  },
  {
    id: 88,
    term: "Coverage B - Other Structures",
    definition: "Insures detached structures on the property like detached garages, sheds, fences. Typically 10% of Coverage A.",
    category: "Homeowners Insurance"
  },
  {
    id: 89,
    term: "Coverage C - Personal Property",
    definition: "Insures belongings and contents owned or used by the insured. Typically 50-75% of Coverage A limit.",
    category: "Homeowners Insurance"
  },
  {
    id: 90,
    term: "Coverage D - Loss of Use",
    definition: "Pays additional living expenses when the home is uninhabitable due to a covered loss. May also cover fair rental value.",
    category: "Homeowners Insurance"
  },
  {
    id: 91,
    term: "Coverage E - Personal Liability",
    definition: "Protects if you are legally liable for bodily injury or property damage to others. Typical limits: $100,000 to $500,000.",
    category: "Homeowners Insurance"
  },
  {
    id: 92,
    term: "Coverage F - Medical Payments to Others",
    definition: "Pays medical expenses for others accidentally injured on your property or by your activities, regardless of liability. Typical limit: $1,000-$5,000 per person.",
    category: "Homeowners Insurance"
  },
  {
    id: 93,
    term: "Additional Living Expense (ALE)",
    definition: "Part of Coverage D - Pays extra costs to maintain normal living standards when your home is uninhabitable (hotel, meals, etc.).",
    category: "Homeowners Insurance"
  },
  {
    id: 94,
    term: "Fair Rental Value",
    definition: "Part of Coverage D - Pays lost rental income if you rent part of your home and cannot do so due to a covered loss.",
    category: "Homeowners Insurance"
  },
  {
    id: 95,
    term: "Special Limits of Liability",
    definition: "Sub-limits on certain types of personal property like jewelry ($1,500), money ($200), firearms ($2,500), and silverware ($2,500).",
    category: "Homeowners Insurance"
  },
  {
    id: 96,
    term: "Scheduled Personal Property",
    definition: "High-value items listed individually with specific values and broader coverage, often with no deductible. Endorsement HO 04 61.",
    category: "Homeowners Insurance"
  },
  {
    id: 97,
    term: "Personal Property Replacement Cost",
    definition: "Endorsement HO 04 90 - Pays replacement cost for personal property rather than depreciated actual cash value.",
    category: "Homeowners Insurance"
  },
  {
    id: 98,
    term: "Standard Mortgage Clause",
    definition: "Protects the lender's interest in the property even if the insured's coverage is voided. Lender receives loss payment for their interest.",
    category: "Homeowners Insurance"
  },
  {
    id: 99,
    term: "Debris Removal",
    definition: "Additional coverage paying to remove debris of covered property after a covered loss. Provides additional 5% if needed.",
    category: "Homeowners Insurance"
  },
  {
    id: 100,
    term: "Trees, Shrubs, and Plants",
    definition: "Covered up to 5% of Coverage A, $500 per item, for loss from named perils like fire or vehicle damage (not wind or disease).",
    category: "Homeowners Insurance"
  },
  {
    id: 101,
    term: "Fire Department Service Charge",
    definition: "Pays charges when the fire department is called to save covered property. Typically $500 limit.",
    category: "Homeowners Insurance"
  },
  {
    id: 102,
    term: "Reasonable Repairs",
    definition: "Pays costs of reasonable repairs made solely to protect property from further damage after a covered loss.",
    category: "Homeowners Insurance"
  },
  {
    id: 103,
    term: "Property Removed",
    definition: "Extends coverage to property removed from premises for preservation from a covered peril for up to 30 days.",
    category: "Homeowners Insurance"
  },
  {
    id: 104,
    term: "Credit Card Coverage",
    definition: "Covers unauthorized use of credit cards, fund transfer cards, and forgery up to $500 with no deductible.",
    category: "Homeowners Insurance"
  },
  {
    id: 105,
    term: "Loss Assessment Coverage",
    definition: "Pays the insured's share of assessments by a homeowners association for covered losses to common property. Typically $1,000 limit.",
    category: "Homeowners Insurance"
  },
  {
    id: 106,
    term: "Glass or Safety Glazing",
    definition: "Covers storm door and window glass, pays actual cost of safety glazing material if required by ordinance.",
    category: "Homeowners Insurance"
  },
  {
    id: 107,
    term: "Landlord's Furnishings",
    definition: "Covers appliances, carpeting, and other household furnishings in an apartment regularly rented to others, up to $2,500.",
    category: "Homeowners Insurance"
  },
  {
    id: 108,
    term: "Ordinance or Law Coverage",
    definition: "Pays increased costs to rebuild to current building codes. Standard policies provide limited coverage; additional coverage available by endorsement.",
    category: "Homeowners Insurance"
  },
  {
    id: 109,
    term: "HO-4 Tenants Form",
    definition: "Renters insurance covering personal property and liability. Does not cover the building structure (landlord's responsibility).",
    category: "Homeowners Insurance"
  },
  {
    id: 110,
    term: "HO-6 Condo Unit-Owners",
    definition: "Covers condo unit owner's personal property, interior improvements, loss assessment, and liability. Association insures building and common areas.",
    category: "Homeowners Insurance"
  },
  {
    id: 111,
    term: "Earthquake Endorsement",
    definition: "HO 04 54 - Adds coverage for earthquake damage with a separate deductible, typically a percentage of Coverage A.",
    category: "Homeowners Insurance"
  },
  {
    id: 112,
    term: "Water Backup Coverage",
    definition: "Optional coverage for water damage from sewer or drain backup, sump pump overflow. Standard policies exclude this.",
    category: "Homeowners Insurance"
  },
  {
    id: 113,
    term: "Home Business Coverage",
    definition: "HO 04 42 Permitted Incidental Occupancies - Extends limited coverage for small home-based businesses.",
    category: "Homeowners Insurance"
  },
  {
    id: 114,
    term: "Identity Theft Coverage",
    definition: "Optional endorsement covering expenses to restore identity and credit after identity theft, legal fees, lost wages.",
    category: "Homeowners Insurance"
  },
  {
    id: 115,
    term: "Personal Injury",
    definition: "Liability coverage under Coverage E for non-physical injuries like false arrest, libel, slander, invasion of privacy.",
    category: "Homeowners Insurance"
  },

  // COMMERCIAL INSURANCE (30 cards)
  {
    id: 116,
    term: "Commercial General Liability (CGL)",
    definition: "Broad liability coverage for businesses including premises, operations, products, and completed operations liability.",
    category: "Commercial Insurance"
  },
  {
    id: 117,
    term: "Business Owners Policy (BOP)",
    definition: "Package policy combining property, liability, and business income coverage for small to medium businesses at reduced premium.",
    category: "Commercial Insurance"
  },
  {
    id: 118,
    term: "Workers' Compensation",
    definition: "Mandatory no-fault coverage providing medical benefits, wage replacement, and death benefits to employees injured on the job.",
    category: "Commercial Insurance"
  },
  {
    id: 119,
    term: "Professional Liability",
    definition: "Covers liability for negligent professional services or advice. Also called Errors & Omissions (E&O) insurance.",
    category: "Commercial Insurance"
  },
  {
    id: 120,
    term: "Products Liability",
    definition: "Coverage for injury or damage caused by products manufactured, distributed, or sold by the insured.",
    category: "Commercial Insurance"
  },
  {
    id: 121,
    term: "Completed Operations",
    definition: "Liability coverage for injury or damage arising from work completed and turned over to others.",
    category: "Commercial Insurance"
  },
  {
    id: 122,
    term: "Business Income",
    definition: "Covers lost net income and continuing expenses when business operations are suspended due to a covered property loss. Also called Business Interruption.",
    category: "Commercial Insurance"
  },
  {
    id: 123,
    term: "Extra Expense Coverage",
    definition: "Pays additional costs to continue business operations after a covered loss, such as renting temporary facilities.",
    category: "Commercial Insurance"
  },
  {
    id: 124,
    term: "Commercial Property",
    definition: "Coverage for buildings, business personal property, and loss of income from covered property damage.",
    category: "Commercial Insurance"
  },
  {
    id: 125,
    term: "Business Personal Property",
    definition: "Furniture, equipment, inventory, supplies, and tenant improvements owned by the business. Does not include the building itself.",
    category: "Commercial Insurance"
  },
  {
    id: 126,
    term: "Builders Risk",
    definition: "Property insurance for buildings under construction, protecting against damage during the construction period.",
    category: "Commercial Insurance"
  },
  {
    id: 127,
    term: "Inland Marine",
    definition: "Coverage for movable property, goods in transit, instrumentalities of transportation, and property of certain dealers.",
    category: "Commercial Insurance"
  },
  {
    id: 128,
    term: "Commercial Auto",
    definition: "Auto insurance for vehicles used in business operations, providing liability and physical damage coverage.",
    category: "Commercial Insurance"
  },
  {
    id: 129,
    term: "Garage Liability",
    definition: "Specialized coverage for auto dealers, repair shops, and service stations, covering operations and autos.",
    category: "Commercial Insurance"
  },
  {
    id: 130,
    term: "Bailees Customers",
    definition: "Covers legal liability for damage to customers' property in the business's care, custody, or control (dry cleaners, repair shops).",
    category: "Commercial Insurance"
  },
  {
    id: 131,
    term: "Crime Coverage",
    definition: "Covers employee theft, forgery, robbery, burglary, and other crimes against the business.",
    category: "Commercial Insurance"
  },
  {
    id: 132,
    term: "Fidelity Bond",
    definition: "Protects against losses from employee dishonesty, theft, or embezzlement. Covers money, securities, and property.",
    category: "Commercial Insurance"
  },
  {
    id: 133,
    term: "Surety Bond",
    definition: "Three-party agreement where the surety guarantees the principal's performance or payment to the obligee.",
    category: "Commercial Insurance"
  },
  {
    id: 134,
    term: "Directors and Officers (D&O)",
    definition: "Protects corporate directors and officers from personal liability for alleged wrongful acts in managing the company.",
    category: "Commercial Insurance"
  },
  {
    id: 135,
    term: "Employment Practices Liability",
    definition: "Covers claims of discrimination, harassment, wrongful termination, and other employment-related issues.",
    category: "Commercial Insurance"
  },
  {
    id: 136,
    term: "Cyber Liability",
    definition: "Covers data breaches, cyber attacks, privacy violations, notification costs, credit monitoring, and legal defense.",
    category: "Commercial Insurance"
  },
  {
    id: 137,
    term: "Umbrella Liability",
    definition: "Excess liability coverage above underlying policies, providing additional limits and potentially broader coverage.",
    category: "Commercial Insurance"
  },
  {
    id: 138,
    term: "Occurrence Coverage",
    definition: "Covers accidents occurring during the policy period regardless of when the claim is filed.",
    category: "Commercial Insurance"
  },
  {
    id: 139,
    term: "Claims-Made Coverage",
    definition: "Covers claims filed during the policy period for incidents occurring after the retroactive date and during the policy period.",
    category: "Commercial Insurance"
  },
  {
    id: 140,
    term: "Extended Reporting Period",
    definition: "Tail coverage allowing claims to be reported after a claims-made policy expires for incidents during the policy period.",
    category: "Commercial Insurance"
  },
  {
    id: 141,
    term: "Per Occurrence Limit",
    definition: "Maximum the insurer pays for all claims from a single accident or event, regardless of number of claimants.",
    category: "Commercial Insurance"
  },
  {
    id: 142,
    term: "Aggregate Limit",
    definition: "Maximum total amount the insurer pays for all covered claims during the entire policy period.",
    category: "Commercial Insurance"
  },
  {
    id: 143,
    term: "Blanket Coverage",
    definition: "One limit applying to multiple buildings, locations, or types of property, providing flexibility in claim settlement.",
    category: "Commercial Insurance"
  },
  {
    id: 144,
    term: "Specific Coverage",
    definition: "Separate limits for each individual building, location, or category of property listed in the policy.",
    category: "Commercial Insurance"
  },
  {
    id: 145,
    term: "Equipment Breakdown",
    definition: "Covers sudden and accidental breakdown of mechanical and electrical equipment, including repair and business income loss. Formerly called Boiler and Machinery.",
    category: "Commercial Insurance"
  },

  // VIRGINIA SPECIFIC TERMS (10 cards)
  {
    id: 146,
    term: "Virginia Auto Liability Limits",
    definition: "Minimum required: $50,000 per person, $100,000 per accident for bodily injury, $25,000 property damage (50/100/25). Effective January 1, 2025.",
    category: "Virginia Specific"
  },
  {
    id: 147,
    term: "State Corporation Commission",
    definition: "Virginia's regulatory body overseeing insurance companies, agents, and practices through the Bureau of Insurance.",
    category: "Virginia Specific"
  },
  {
    id: 148,
    term: "Virginia CE Requirements",
    definition: "16 hours continuing education every 2 years, including 3 hours ethics. Maximum 12 hours in any 24-hour period (effective Feb 2026).",
    category: "Virginia Specific"
  },
  {
    id: 149,
    term: "Virginia P&C Exam",
    definition: "Series 11-03: 145 questions (135 scored + 10 pretest), 2.5 hours, $35 fee. Scaled score of 70 required to pass. No pre-licensing education required.",
    category: "Virginia Specific"
  },
  {
    id: 150,
    term: "Virginia UM Coverage",
    definition: "Virginia requires offering uninsured motorist coverage with limits equal to liability limits unless rejected in writing by the insured.",
    category: "Virginia Specific"
  },
  {
    id: 151,
    term: "Virginia Workers' Comp Threshold",
    definition: "Required when business regularly employs more than two employees (3 or more), with some exceptions.",
    category: "Virginia Specific"
  },
  {
    id: 152,
    term: "Virginia UMV Fee Elimination",
    definition: "The $500 uninsured motor vehicle fee was eliminated July 1, 2024. Auto insurance is now mandatory for all registered vehicles.",
    category: "Virginia Specific"
  },
  {
    id: 153,
    term: "Virginia Fiduciary Duty",
    definition: "Agents must hold premiums and client funds in trust per Virginia Code § 38.2-1813. Mishandling is grounds for license revocation.",
    category: "Virginia Specific"
  },
  {
    id: 154,
    term: "Virginia Agent Appointment",
    definition: "Agents must be appointed by each insurer before selling their products per Virginia Code § 38.2-1833. Selling without appointment is a violation.",
    category: "Virginia Specific"
  },
  {
    id: 155,
    term: "Virginia Unfair Trade Practices",
    definition: "Prohibited practices include misrepresentation (§38.2-502), rebating, twisting, defamation (§38.2-504), and coercion (§38.2-505).",
    category: "Virginia Specific"
  }
];
