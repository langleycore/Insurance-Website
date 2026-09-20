export interface Scenario {
  id: number;
  title: string;
  scenario: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
}

export const scenarios: Scenario[] = [
  {
    id: 1,
    title: "Late Premium Payment",
    scenario: "A client calls you on day 14 after the premium due date saying they haven't paid yet. Their Virginia auto policy has a 15-day grace period. They ask if they're still covered.",
    question: "What do you tell the client?",
    options: [
      "Yes, you're covered until the end of day 15, then coverage terminates at 12:01 AM on day 16",
      "No, your coverage terminated at the due date, you need to reapply",
      "Yes, you're covered for 30 days after the due date",
      "Coverage is suspended but can be reinstated with no lapse if paid within 15 days"
    ],
    correctAnswer: 0,
    explanation: "Grace periods typically provide coverage through the final day of the grace period. Coverage terminates at 12:01 AM the day after the grace period expires if premium is not paid. The insured is still covered during the grace period.",
    category: "Virginia Regulation"
  },
  {
    id: 2,
    title: "New Teen Driver",
    scenario: "Your insured's 16-year-old daughter just got her license yesterday. She borrowed the family car this morning and had an at-fault accident. The parents didn't notify you yet about her getting licensed.",
    question: "What is the likely outcome for the claim?",
    options: [
      "Claim denied - teen wasn't listed on policy before the accident",
      "Claim covered - resident family members are automatically insureds",
      "Claim covered only if parents pay backdated premium immediately",
      "Claim denied - permissive use doesn't extend to unlicensed family members"
    ],
    correctAnswer: 1,
    explanation: "Resident family members are automatically insureds under the PAP, even if not yet listed. The insurer will cover the claim and then add the teen to the policy with appropriate premium adjustment. The daughter was licensed, so permissive use applies.",
    category: "Auto Insurance"
  },
  {
    id: 3,
    title: "Home Business Liability",
    scenario: "An insured runs a small online jewelry business from home. A customer comes to pick up an order, trips on the front steps, and breaks her arm. She's suing for $75,000 in medical bills and lost wages.",
    question: "How will the HO-3 policy respond?",
    options: [
      "Full coverage under Coverage E - the accident happened at the residence",
      "No coverage - business pursuits are excluded from homeowners liability",
      "Coverage up to $2,500 - the business property sublimit",
      "Coverage under Coverage F (medical payments) only, up to $5,000"
    ],
    correctAnswer: 1,
    explanation: "Business pursuits are excluded from Coverage E. Even though the accident occurred on the residence premises, it arose from business activities. The insured needs a business liability policy or in-home business endorsement.",
    category: "Homeowners"
  },
  {
    id: 4,
    title: "Water Damage Claim",
    scenario: "During heavy rain, water backs up through the insured's basement floor drain, flooding the basement and ruining $15,000 worth of personal property. The home has an HO-3 policy with standard coverage.",
    question: "What coverage applies?",
    options: [
      "Fully covered under Coverage C - water damage is a covered peril",
      "Not covered - sewer backup is excluded unless endorsement is purchased",
      "Covered under flood insurance only",
      "Covered if the backup was caused by a covered peril"
    ],
    correctAnswer: 1,
    explanation: "Sewer and drain backup is excluded in standard policies. Water backing up through sewers or drains requires a water backup endorsement. This is different from sudden and accidental discharge from plumbing, which is covered.",
    category: "Homeowners"
  },
  {
    id: 5,
    title: "Hit and Run Deductible",
    scenario: "An insured's parked car is sideswiped by a hit-and-run driver who flees. The insured has 25/50/20 liability, $500 collision deductible, $250 comprehensive deductible, and $25,000 UM with no UMPD. Damages are $3,000.",
    question: "How much will the insured pay out of pocket?",
    options: [
      "$0 - hit-and-run is covered by UM with no deductible",
      "$250 - comprehensive deductible applies",
      "$500 - collision deductible applies",
      "$3,000 - no coverage applies to hit-and-run"
    ],
    correctAnswer: 2,
    explanation: "Hit-and-run property damage to the insured's vehicle is covered under Collision, not UM (which covers bodily injury only in this case, no UMPD). The $500 collision deductible applies. The insured pays $500.",
    category: "Auto Insurance"
  },
  {
    id: 6,
    title: "Coinsurance Penalty",
    scenario: "A dwelling valued at $400,000 is insured for $280,000 under a DP-3 with 80% coinsurance. A kitchen fire causes $100,000 in damage. The deductible is $1,000.",
    question: "How much will the insurer pay?",
    options: [
      "$99,000 ($100,000 - $1,000 deductible)",
      "$87,500 (coinsurance penalty applies)",
      "$86,500 (coinsurance penalty plus deductible)",
      "$100,000 (full replacement cost)"
    ],
    correctAnswer: 2,
    explanation: "Required: $400,000 × 80% = $320,000. Actual: $280,000. Payment = (280,000/320,000) × $100,000 = $87,500, minus $1,000 deductible = $86,500. The insured is penalized for being underinsured.",
    category: "Dwelling Policies"
  },
  {
    id: 7,
    title: "Vacant Home Fire",
    scenario: "An insured moves out of their home to renovate it. The home sits vacant for 75 days. On day 76, vandals break in and start a fire that destroys the home. The policy is an HO-3.",
    question: "What coverage, if any, applies?",
    options: [
      "Full coverage - fire is always covered",
      "No coverage - vandalism and fire are excluded after 60 days vacancy",
      "Coverage for fire only, not vandalism damage",
      "Coverage applies if the insured notified the insurer of the renovation"
    ],
    correctAnswer: 1,
    explanation: "After 60 consecutive days of vacancy, most policies suspend coverage for vandalism, malicious mischief, glass breakage, water damage, theft, and fire caused by vandals. The insured needs a vacant property endorsement or policy.",
    category: "Homeowners"
  },
  {
    id: 8,
    title: "Student's Laptop Theft",
    scenario: "An insured's daughter is away at college in another state. Her $2,000 laptop is stolen from her locked dorm room. The parents have an HO-3 with $100,000 Coverage C. The deductible is $500.",
    question: "How much will the policy pay?",
    options: [
      "$0 - property away at college is not covered",
      "$1,500 ($2,000 - $500 deductible)",
      "$1,000 (special limit for electronics off-premises)",
      "$500 (50% off-premises reduction applies)"
    ],
    correctAnswer: 1,
    explanation: "Students who are residents are covered worldwide under Coverage C. The full limit applies (not just 10% off-premises for students). The $500 deductible applies. Payment = $2,000 - $500 = $1,500.",
    category: "Homeowners"
  },
  {
    id: 9,
    title: "Rental Car Damage",
    scenario: "An insured rents a car while on vacation in California. They have a Virginia PAP with 50/100/50 liability, $500 collision, and $250 comprehensive. They decline the rental company's CDW. The rental car is damaged in an accident, costing $4,000 to repair.",
    question: "What happens?",
    options: [
      "No coverage - rental cars require separate insurance",
      "Covered under collision with $500 deductible, insured pays $500",
      "Covered only if the accident was not the insured's fault",
      "Rental company's insurance is primary"
    ],
    correctAnswer: 1,
    explanation: "Physical damage coverage extends to rental cars if the insured carries it on an owned vehicle. The insured's collision covers the rental car damage. The insured pays the $500 deductible; the insurer pays the remaining $3,500.",
    category: "Auto Insurance"
  },
  {
    id: 10,
    title: "Contractor's Work Causes Fire",
    scenario: "An insured hires a contractor to install new wiring. The contractor's faulty work causes a fire that damages the home. The insured files a claim under their HO-3 for $80,000 in fire damage.",
    question: "What is the likely outcome?",
    options: [
      "Claim denied - contractor's work is excluded",
      "Claim paid - fire is a covered peril regardless of cause",
      "Claim paid, insurer subrogate against contractor",
      "Claim paid only if contractor had no insurance"
    ],
    correctAnswer: 2,
    explanation: "The fire is covered under the HO-3 (open perils on dwelling). The insurer pays the insured's claim. The insurer then has subrogation rights to recover from the negligent contractor or their liability insurance.",
    category: "Homeowners"
  },
  {
    id: 11,
    title: "Producer Changes Address",
    scenario: "A Virginia insurance producer moves from Richmond to Virginia Beach on March 1st. They notify the Bureau of Insurance on April 15th.",
    question: "What is the consequence?",
    options: [
      "No issue - they notified within 60 days",
      "Possible violation - notification must be within 30 days",
      "License automatically suspended until address is updated",
      "No notification required for in-state moves"
    ],
    correctAnswer: 1,
    explanation: "Virginia producers must notify the Bureau of Insurance within 30 days of any address change (residential or business). The 45-day delay is a violation. Penalties could include fines or disciplinary action.",
    category: "Virginia Regulation"
  },
  {
    id: 12,
    title: "License Lapse and Reinstatement",
    scenario: "A producer's license expires on June 30, 2025. They don't renew it until September 15, 2026 (14.5 months later). They've completed all CE requirements and pay the renewal fee.",
    question: "What must the producer do to reinstate their license?",
    options: [
      "Just pay the renewal fee and late penalty",
      "Complete CE hours and pay fees - no exam required",
      "Retake and pass the licensing exam",
      "Wait 5 years and reapply as a new applicant"
    ],
    correctAnswer: 2,
    explanation: "If a license lapses for more than 12 months, the producer must retake and pass the licensing exam. Within 12 months, they can reinstate with fees and CE. After 12 months, the exam is required again.",
    category: "Virginia Regulation"
  },
  {
    id: 13,
    title: "Debris Removal Limit Exceeded",
    scenario: "A home insured for $200,000 under an HO-3 is destroyed by fire. The loss is $200,000. Debris removal costs $60,000. The policy includes standard debris removal coverage.",
    question: "How much will the insurer pay in total?",
    options: [
      "$200,000 - debris removal is already included in the loss",
      "$250,000 - $200,000 loss + $50,000 additional debris (25% of Coverage A)",
      "$260,000 - $200,000 loss + $60,000 debris",
      "$210,000 - $200,000 loss + $10,000 debris (5% of Coverage A)"
    ],
    correctAnswer: 1,
    explanation: "Debris removal is typically included in the Coverage A limit. When the loss plus debris exceeds the limit, an additional amount is available: usually 25% of the loss or Coverage A limit, whichever is less. Here: $200,000 + min($50,000, $60,000) = $250,000.",
    category: "Homeowners"
  },
  {
    id: 14,
    title: "Uninsured Motorist Rejection",
    scenario: "An insurer issues a Virginia auto policy with 50/100/50 liability. The insured never signed a UM rejection form. A claim arises where an uninsured driver injures the insured.",
    question: "What UM coverage applies?",
    options: [
      "None - UM must be actively selected",
      "25/50 minimum (statutory requirement if not rejected)",
      "50/100 (equal to liability limits purchased)",
      "100/300 (double the bodily injury liability)"
    ],
    correctAnswer: 2,
    explanation: "In Virginia, UM must be offered at limits equal to the liability limits (up to the statutory minimum of 25/50). If not rejected in writing, UM automatically applies at the same limits as liability. Here: 50/100 UM.",
    category: "Virginia Regulation"
  },
  {
    id: 15,
    title: "Additional Living Expense Duration",
    scenario: "A fire makes a home uninhabitable. Repairs take 8 months. The policy's Coverage D limit is $40,000 (20% of $200,000 Coverage A). ALE costs are $4,000/month. The shortest time to repair is 8 months.",
    question: "How much will Coverage D pay?",
    options: [
      "$32,000 - 8 months × $4,000",
      "$40,000 - the full Coverage D limit",
      "Either $32,000 or $40,000, whichever is less",
      "$32,000, plus policy may extend time if repairs are delayed beyond control"
    ],
    correctAnswer: 0,
    explanation: "Coverage D pays the actual ALE for the shortest time needed to repair or replace, or the policy limit, whichever is reached first. Here: 8 months × $4,000 = $32,000, which is less than the $40,000 limit.",
    category: "Homeowners"
  },
  {
    id: 16,
    title: "Other Structures - Rental Use",
    scenario: "An insured has a detached garage on their property. They rent it to a neighbor for $200/month to store a boat. The garage is damaged by fire ($15,000 damage). The home is insured under an HO-3.",
    question: "How much will Coverage B pay?",
    options: [
      "$15,000 - full coverage applies",
      "$0 - structures rented to others are excluded from Coverage B",
      "$7,500 - reduced by 50% for rental use",
      "$15,000, but only if the structure is used solely as a garage"
    ],
    correctAnswer: 3,
    explanation: "Coverage B generally excludes structures rented to others EXCEPT garages (even if rented for vehicle/boat storage). The fire damage to the rented garage is covered under Coverage B.",
    category: "Homeowners"
  },
  {
    id: 17,
    title: "New Purchase - Additional vs Replacement",
    scenario: "An insured owns one car covered under their PAP. They buy a second car on Monday but don't notify the insurer. On Friday (day 5), they have an at-fault accident in the new car, causing $8,000 damage to it and $12,000 damage to another car.",
    question: "What coverage applies?",
    options: [
      "Full liability and collision - automatic 14 days for additional vehicle",
      "Liability only - physical damage expired after 4 days for additional vehicles",
      "No coverage - new vehicles must be added before use",
      "Coverage only if the insured has proof of intent to notify"
    ],
    correctAnswer: 1,
    explanation: "An additional (not replacement) vehicle has automatic liability coverage for 14 days, but physical damage only for 4 days (if carried on another vehicle). Day 5 = liability covered ($12,000), but not collision damage ($8,000 to new car).",
    category: "Auto Insurance"
  },
  {
    id: 18,
    title: "Coverage E Limits Per Occurrence",
    scenario: "An insured has $100,000 Coverage E. Their dog bites three people at a party. Each person sues: Person A for $40,000, Person B for $50,000, Person C for $30,000. All claims are valid. Total: $120,000.",
    question: "How much will the insurer pay?",
    options: [
      "$100,000 total - per occurrence limit applies to all three claims",
      "$120,000 - each person's claim is separate",
      "$100,000 total, plus defense costs over the limit",
      "$40,000 + $50,000 only; the third claim is denied"
    ],
    correctAnswer: 0,
    explanation: "The $100,000 Coverage E limit is per occurrence, not per claimant. All three injuries arose from one occurrence (the dog's actions at the party). The insurer pays $100,000 maximum, allocated among the three claimants. Defense costs are additional.",
    category: "Homeowners"
  },
  {
    id: 19,
    title: "Theft from Vehicle Special Limit",
    scenario: "An insured's laptop ($1,200), camera ($800), and jewelry ($1,000) are stolen from their car parked at home. They have an HO-3 with a $500 deductible. Jewelry has a $1,500 theft limit; theft from vehicle has a $1,500 limit.",
    question: "How much will the insurer pay?",
    options: [
      "$2,500 (all items minus $500 deductible)",
      "$1,000 ($1,500 vehicle theft limit minus $500 deductible)",
      "$2,000 (jewelry limit $1,000 + other items $1,500, minus $500 deductible)",
      "$1,500 (vehicle theft limit only)"
    ],
    correctAnswer: 1,
    explanation: "The theft from vehicle special limit ($1,500) applies to all property stolen from the vehicle. The jewelry sublimit ($1,500) doesn't provide additional coverage here. Payment: $1,500 - $500 deductible = $1,000.",
    category: "Homeowners"
  },
  {
    id: 20,
    title: "Proof of Loss Timing",
    scenario: "A home suffers fire damage on January 5. The insured immediately notifies the insurer. The insurer requests a signed, sworn proof of loss. The policy requires it within 60 days of the insurer's request. The insured submits it on March 20.",
    question: "What is the likely outcome?",
    options: [
      "Claim denied - proof of loss was late (should be within 60 days of loss)",
      "Claim processed - proof was submitted within 60 days of request",
      "Claim paid but reduced for late submission",
      "Claim denied unless the insured shows good cause for delay"
    ],
    correctAnswer: 1,
    explanation: "Proof of loss requirements typically allow 60 days from the insurer's request (not from the loss date). If submitted within that period, the insured has complied. The insurer must then process the claim.",
    category: "Property Basics"
  },
  {
    id: 21,
    title: "Agreed Value Coverage",
    scenario: "An insured has a classic car appraised at $75,000. They purchase an agreed value auto policy with a $75,000 limit. The car is totaled. At the time of loss, the market value is $68,000.",
    question: "How much does the insurer pay (ignoring deductible)?",
    options: [
      "$68,000 - actual cash value at time of loss",
      "$75,000 - the agreed value",
      "$71,500 - average of agreed and actual value",
      "$68,000, but the insured can dispute and get $75,000"
    ],
    correctAnswer: 1,
    explanation: "Agreed value coverage waives the coinsurance requirement and pays the agreed-upon amount in the event of a total loss, regardless of actual cash value at the time of loss. The insurer pays $75,000.",
    category: "Auto Insurance"
  },
  {
    id: 22,
    title: "Business Use of Auto",
    scenario: "An insured uses their personal car to make sales calls for their employer, driving to meet clients. On the way to a client meeting, they cause an accident. They have a personal PAP.",
    question: "Does the PAP cover this accident?",
    options: [
      "No - business use is excluded",
      "Yes - business use of a private passenger auto is generally covered",
      "No - employer's policy is the only coverage",
      "Yes, but only up to state minimum limits"
    ],
    correctAnswer: 1,
    explanation: "Personal Auto Policies cover business use (including sales calls, commuting) in a private passenger auto. Exclusions apply to public/livery conveyance (taxi, delivery, ride-sharing). Regular business use is covered.",
    category: "Auto Insurance"
  },
  {
    id: 23,
    title: "Tree Damage - Covered Peril",
    scenario: "A healthy tree on the insured's property falls on their house during a windstorm, causing $20,000 damage to the dwelling and $5,000 in tree removal costs. The insured has an HO-3 with Coverage A of $300,000.",
    question: "What will the insurer pay (ignoring deductible)?",
    options: [
      "$20,000 - dwelling damage only; tree removal not covered",
      "$25,000 - dwelling damage plus full tree removal",
      "$21,500 - dwelling damage plus $1,500 tree removal (trees limited to $500 each)",
      "$20,000 plus debris removal coverage"
    ],
    correctAnswer: 3,
    explanation: "Windstorm damage to the dwelling is covered under Coverage A. Tree removal is covered under debris removal provisions (included in or additional to the limit). Trees themselves are not covered for wind damage, but removal of debris (the tree) is covered.",
    category: "Homeowners"
  },
  {
    id: 24,
    title: "Cancellation Notice Period - Non-Payment",
    scenario: "A Virginia auto policy has a premium due date of January 1. The insured doesn't pay. The insurer wants to cancel for non-payment.",
    question: "What is the minimum notice period required?",
    options: [
      "10 days",
      "15 days",
      "30 days",
      "45 days"
    ],
    correctAnswer: 1,
    explanation: "Virginia requires at least 15 days' notice for cancellation due to non-payment of premium. For other reasons (during first policy period): 45 days. After first period: 45 days for reasons other than non-payment.",
    category: "Virginia Regulation"
  },
  {
    id: 25,
    title: "Medical Payments vs Liability",
    scenario: "A guest slips on ice at the insured's home and breaks her ankle. Her medical bills are $4,500. She does not sue. The insured has $5,000 Coverage F and $100,000 Coverage E.",
    question: "How is this claim handled?",
    options: [
      "Paid under Coverage E after determining liability",
      "Paid under Coverage F without regard to fault (goodwill coverage)",
      "Denied - the insured was not negligent",
      "Paid under Coverage F, which subrogate against the insured"
    ],
    correctAnswer: 1,
    explanation: "Coverage F (Medical Payments to Others) pays medical expenses of others injured on the premises or by the insured's activities, without determining fault. It's goodwill coverage. The guest's $4,500 in bills are paid under Coverage F.",
    category: "Homeowners"
  },
  {
    id: 26,
    title: "Actual Cash Value Settlement",
    scenario: "An insured's 10-year-old roof (30-year shingles) is damaged by hail. Replacement cost is $15,000. Depreciation is $5,000. The insured has HO-3 with replacement cost on the dwelling. The deductible is $1,000.",
    question: "What is the initial payment, and what is the final payment?",
    options: [
      "Initial: $14,000; Final: $14,000 (no additional payment)",
      "Initial: $9,000 (ACV - deductible); Final: $14,000 (replacement cost - deductible) when replaced",
      "Initial: $10,000 (ACV); Final: $15,000 (replacement cost) when replaced",
      "Initial and Final: $14,000 immediately"
    ],
    correctAnswer: 1,
    explanation: "Replacement cost policies typically pay ACV initially, then the recoverable depreciation when the property is actually repaired or replaced. Initial: $10,000 ACV - $1,000 = $9,000. Final: $15,000 - $1,000 = $14,000 (additional $5,000 when replaced).",
    category: "Homeowners"
  },
  {
    id: 27,
    title: "Appraisal Clause Dispute",
    scenario: "The insured and insurer disagree on the amount of a covered fire loss. The insured says it's $100,000; the insurer offers $70,000. There's no dispute that the loss is covered.",
    question: "How can this be resolved?",
    options: [
      "File a lawsuit immediately",
      "Use the appraisal clause - each party selects an appraiser, who select an umpire",
      "Accept the insurer's offer - it's final",
      "Contact the state insurance commissioner to set the amount"
    ],
    correctAnswer: 1,
    explanation: "The appraisal clause provides a method to resolve disputes over the amount of loss (not coverage). Each party chooses an appraiser; if they disagree, an umpire decides. This avoids litigation over valuation.",
    category: "Property Basics"
  },
  {
    id: 28,
    title: "Loss Assessment - Condo",
    scenario: "A condo association's building suffers $500,000 in fire damage. The association's master policy has a $100,000 deductible. The association assesses each of 50 unit owners $2,000 to cover the deductible. The insured owns one unit with HO-6 with $1,000 loss assessment coverage.",
    question: "How much will the HO-6 pay toward the assessment?",
    options: [
      "$1,000 - the policy limit for loss assessment",
      "$2,000 - the full assessment",
      "$0 - deductibles are not covered by loss assessment coverage",
      "$1,000, and the insured pays the remaining $1,000"
    ],
    correctAnswer: 3,
    explanation: "Loss assessment coverage pays the insured's share of assessments for covered losses under the association's policy, up to the policy limit. The insured's $2,000 assessment is covered up to $1,000; they pay the remaining $1,000.",
    category: "Homeowners"
  },
  {
    id: 29,
    title: "Subrogation Waiver",
    scenario: "An insured's tenant accidentally causes a fire that damages the insured's rental property. The insured has a DP-3 policy. The lease includes a subrogation waiver. The insurer pays the claim and wants to subrogate against the tenant.",
    question: "Can the insurer subrogate?",
    options: [
      "Yes - the insurer always has subrogation rights",
      "No - the insured waived subrogation in the lease, impairing the insurer's rights",
      "Yes, but only if the insured's waiver was after the loss",
      "No - tenants are automatically excluded from subrogation"
    ],
    correctAnswer: 1,
    explanation: "If the insured waives subrogation rights before a loss (in a lease), they impair the insurer's subrogation rights, which may void coverage. Subrogation waivers should be reported to the insurer, who may require an endorsement and additional premium.",
    category: "Property Basics"
  },
  {
    id: 30,
    title: "Underinsured Motorist Calculation",
    scenario: "An insured is injured by an at-fault driver with 25/50 liability. The insured's damages are $60,000. The insured has 50/100 UIM. The at-fault driver's insurer pays $25,000.",
    question: "How much will the insured's UIM pay?",
    options: [
      "$25,000 (policy limit minus other insurance)",
      "$35,000 ($60,000 damages - $25,000 received)",
      "$50,000 (full UIM limit)",
      "$0 (UIM doesn't apply when other insurance pays)"
    ],
    correctAnswer: 1,
    explanation: "UIM pays the difference between the insured's damages and the at-fault driver's payment, up to the UIM limit. Damages $60,000 - $25,000 already paid = $35,000. This is less than the $50,000 UIM limit, so UIM pays $35,000.",
    category: "Auto Insurance"
  },
  {
    id: 31,
    title: "Pair and Set Loss",
    scenario: "A fire destroys one earring of a $4,000 diamond earring pair. The surviving earring is worth $800 alone. The insured has an HO-5 with $100,000 Coverage C and a $500 deductible.",
    question: "What is the likely payment?",
    options: [
      "$3,500 ($4,000 - $500 deductible)",
      "$3,200 (fair proportion of value lost: $4,000 - $800 surviving value)",
      "$2,700 ($3,200 - $500 deductible)",
      "$1,500 (special limit for jewelry applies)"
    ],
    correctAnswer: 2,
    explanation: "For a pair or set, the insurer may choose to pay the difference in value before and after the loss, not the full set value. Loss in value: $4,000 - $800 = $3,200. Less $500 deductible = $2,700. Fire is not theft, so the jewelry sublimit doesn't apply.",
    category: "Homeowners"
  },
  {
    id: 32,
    title: "Temporary Repair Coverage",
    scenario: "After a windstorm damages a roof, the insured pays $1,500 for a tarp to prevent further water damage until repairs can be made. Permanent repairs cost $12,000. The policy has a $1,000 deductible.",
    question: "How much will the insurer pay in total?",
    options: [
      "$12,000 only (tarps are maintenance, not covered)",
      "$13,000 (repairs + tarp, minus deductible is applied to permanent repairs only)",
      "$12,500 ($12,000 + $1,500 - $1,000 deductible)",
      "$11,000 ($12,000 repairs - $1,000 deductible; tarp excluded)"
    ],
    correctAnswer: 2,
    explanation: "The insured's duty to protect property from further damage after a loss includes reasonable temporary repairs (tarps, boards). These costs are part of the covered loss. Total: $12,000 + $1,500 = $13,500, minus $1,000 deductible = $12,500.",
    category: "Property Basics"
  },
  {
    id: 33,
    title: "Betterment Example",
    scenario: "An insured's 8-year-old car is in an accident. The damaged parts (fender, bumper) must be replaced with new parts costing $3,000. The adjuster says the old parts were worth $1,800 due to age/wear. The insured has $500 collision deductible.",
    question: "What will the insurer pay?",
    options: [
      "$2,500 ($3,000 - $500 deductible)",
      "$1,300 ($1,800 ACV - $500 deductible)",
      "$1,800 (betterment charged, insured pays $1,200 + deductible)",
      "$2,500 if betterment is not applied, or less if insurer charges betterment"
    ],
    correctAnswer: 3,
    explanation: "Betterment accounts for improvement when replacing old parts with new ones. Some insurers pay ACV of parts, others pay full cost. If no betterment charge: $3,000 - $500 = $2,500. If betterment charged: $1,800 - $500 = $1,300. Practices vary by insurer and state law.",
    category: "Auto Insurance"
  },
  {
    id: 34,
    title: "Concealment - Material Fact",
    scenario: "An applicant for homeowners insurance fails to mention they operate a daycare in their home. The insurer issues an HO-3. Later, a child at the daycare is injured and sues. The insurer discovers the daycare.",
    question: "How will the insurer likely respond?",
    options: [
      "Pay the claim - the injury is covered under Coverage E",
      "Deny the claim and rescind the policy for concealment of material fact",
      "Pay the claim but cancel the policy prospectively",
      "Pay the claim minus an additional premium for business use"
    ],
    correctAnswer: 1,
    explanation: "Concealment of a material fact (one that would affect the insurer's decision to issue coverage or premium charged) can void the policy from inception. Operating a daycare is a material business exposure that should have been disclosed.",
    category: "General Principles"
  },
  {
    id: 35,
    title: "Hostile Fire vs Friendly Fire",
    scenario: "An insured burns trash in their fireplace. Sparks escape and ignite the carpet, causing $5,000 damage. The insured has an HO-3 with a $500 deductible.",
    question: "Is the carpet damage covered?",
    options: [
      "No - intentionally set fires are excluded",
      "Yes - fire escaping the fireplace (hostile fire) is a covered peril",
      "No - damage from friendly fires is excluded",
      "Yes, but only if the insured was negligent"
    ],
    correctAnswer: 1,
    explanation: "A friendly fire is one contained in its intended place (fireplace, stove). A hostile fire is one that escapes. Damage from hostile fires is covered; damage from friendly fires (e.g., smoke staining near a fireplace) may not be. The escaped fire is hostile and covered.",
    category: "Property Basics"
  },
  {
    id: 36,
    title: "Mortgagee Rights After Loss",
    scenario: "A mortgaged home is destroyed by fire. The insurer pays $200,000. The outstanding mortgage balance is $150,000. The insured wants to keep the money and not rebuild.",
    question: "What are the mortgagee's rights?",
    options: [
      "None - the insured owns the property and can do as they wish",
      "The mortgagee is paid first ($150,000), then the insured receives the remainder",
      "The mortgagee can require the money be used to rebuild",
      "The mortgagee receives the full $200,000"
    ],
    correctAnswer: 1,
    explanation: "The standard mortgage clause protects the mortgagee's interest. Loss payments are typically made jointly to the insured and mortgagee. The mortgagee is entitled to their interest ($150,000) to pay off or repair the loan; the insured gets the remainder.",
    category: "Property Basics"
  },
  {
    id: 37,
    title: "Exclusion - Intentional Loss",
    scenario: "An insured's angry ex-girlfriend intentionally sets fire to the insured's car. The insured has comprehensive coverage. The insured did nothing wrong.",
    question: "Is the loss covered?",
    options: [
      "No - intentional acts are always excluded",
      "Yes - fire is a comprehensive peril, and the insured did not cause it",
      "No - damage by a family member or associate is excluded",
      "Yes, but only if the ex-girlfriend is convicted"
    ],
    correctAnswer: 1,
    explanation: "Intentional act exclusions apply to intentional acts by the insured, not acts by third parties. An ex-girlfriend is not an insured. The intentional fire by a third party is covered under comprehensive (arson by outsider).",
    category: "Auto Insurance"
  },
  {
    id: 38,
    title: "Liability of a Child",
    scenario: "An insured's 8-year-old child accidentally throws a baseball through a neighbor's window, causing $800 in damage. The insured has an HO-3 with $100,000 Coverage E.",
    question: "Will Coverage E pay for the window?",
    options: [
      "No - children under 12 are not covered",
      "Yes - resident family members include minor children; the insured is vicariously liable",
      "No - property damage must exceed $1,000",
      "Yes, but only under Coverage F (medical payments)"
    ],
    correctAnswer: 1,
    explanation: "Resident family members (including minor children) are insureds under Coverage E. Parents are also vicariously liable for their children's negligent acts. The policy covers the child's accidental damage to the neighbor's window.",
    category: "Homeowners"
  },
  {
    id: 39,
    title: "Fraudulent Claim",
    scenario: "An insured files a claim for a stolen TV worth $2,000. Investigation reveals the TV was never stolen; the insured sold it and lied on the claim. The insured later has a legitimate fire loss of $50,000.",
    question: "What happens to the fire claim?",
    options: [
      "The fire claim is paid - it's unrelated to the TV claim",
      "The fire claim is denied - the fraudulent TV claim voids the entire policy",
      "The fire claim is paid minus $2,000",
      "The fire claim goes to court for determination"
    ],
    correctAnswer: 1,
    explanation: "Fraud or intentional concealment by the insured voids the entire policy, not just the fraudulent claim. All coverage is forfeited. The fire claim, though legitimate, is denied because the policy is void due to the earlier fraud.",
    category: "General Principles"
  },
  {
    id: 40,
    title: "Unintentional Misrepresentation",
    scenario: "On an application, the insured states they've had no traffic tickets in the past 3 years. They genuinely forgot about a speeding ticket 2 years ago. After a policy is issued, the insurer discovers the ticket during a routine audit.",
    question: "What will the insurer likely do?",
    options: [
      "Rescind the policy immediately for misrepresentation",
      "Adjust the premium retroactively to the correct rate for the ticket",
      "Cancel the policy prospectively",
      "Take no action if the misrepresentation was not intentional"
    ],
    correctAnswer: 1,
    explanation: "Unintentional misrepresentations (not material fraud) typically result in premium adjustments, not rescission. The insurer will charge the additional premium from policy inception. Intentional material misrepresentation can void the policy.",
    category: "General Principles"
  },
  {
    id: 41,
    title: "Supplementary Payments",
    scenario: "An insured with $100,000 Coverage E is sued. The insured loses, and the court awards $95,000 to the plaintiff. Legal defense costs were $30,000. Interest on the judgment is $5,000.",
    question: "How much does the insurer pay?",
    options: [
      "$100,000 - the policy limit",
      "$125,000 ($95,000 judgment + $30,000 defense)",
      "$130,000 ($95,000 judgment + $30,000 defense + $5,000 interest)",
      "$95,000 only; insured pays defense and interest"
    ],
    correctAnswer: 2,
    explanation: "Liability policies provide supplementary payments in addition to the policy limit, including defense costs, interest on judgments, and certain other expenses. Total paid: $95,000 (within limit) + $30,000 defense + $5,000 interest = $130,000.",
    category: "Homeowners"
  },
  {
    id: 42,
    title: "Ordinance or Law - Undamaged Portion",
    scenario: "A fire damages 40% of an insured's home. Local code requires full demolition and rebuild to current standards because over 25% is damaged. The insured has standard HO-3 coverage with no ordinance/law endorsement.",
    question: "What is covered?",
    options: [
      "Only the 40% directly damaged by fire",
      "100% demolition and rebuild under open perils coverage",
      "The 40% fire damage and demolition costs",
      "The 40% fire damage; the insured pays for demolition and undamaged portion loss"
    ],
    correctAnswer: 3,
    explanation: "Standard policies cover direct physical damage from covered perils. Ordinance/law losses (demolition of undamaged portions and increased cost to meet code) are excluded. Only the 40% fire damage is covered. The insured needs an ordinance/law endorsement for full coverage.",
    category: "Homeowners"
  },
  {
    id: 43,
    title: "Matching - Replacement Part",
    scenario: "Hail damages 20% of an insured's roof. The shingles are no longer manufactured, and no exact match is available. The insurer offers to replace the damaged 20% with similar shingles. The insured demands a full roof replacement for matching.",
    question: "What is the insurer's obligation?",
    options: [
      "Replace only the damaged portion with similar materials",
      "Replace the entire roof to match",
      "Pay the insured the depreciated value and let them decide",
      "Replace the damaged portion; if matching is impossible, may need to blend or replace more"
    ],
    correctAnswer: 3,
    explanation: "Insurers must restore property to pre-loss condition. If exact matching is impossible, they may need to replace additional undamaged area to achieve a uniform appearance, or use similar materials. Practices vary; some policies include matching endorsements.",
    category: "Property Basics"
  },
  {
    id: 44,
    title: "Grace Period vs. Premium Due",
    scenario: "An auto policy renews on June 1 with premium due. The insured doesn't pay until June 20. The policy has a 15-day grace period. An accident occurs on June 12.",
    question: "Is the accident covered?",
    options: [
      "Yes - grace period covers through June 15",
      "No - coverage terminated on June 1 for non-payment",
      "Yes - grace period covers through June 16 (end of day 15)",
      "Maybe - depends on if the insurer sent a cancellation notice"
    ],
    correctAnswer: 2,
    explanation: "Grace periods provide coverage through the final day of the grace period. Day 1 = June 2, Day 15 = June 16. The June 12 accident is within the grace period and is covered. Coverage would terminate 12:01 AM June 17 if still unpaid.",
    category: "General Principles"
  },
  {
    id: 45,
    title: "Named Insured vs Spouse",
    scenario: "A PAP lists John Smith as the named insured. John's wife Mary is not listed anywhere on the policy. Mary drives John's covered auto and causes an accident.",
    question: "Is Mary covered?",
    options: [
      "No - only listed drivers are covered",
      "Yes - resident spouse is automatically an insured",
      "Yes, but only for liability, not physical damage",
      "No - permissive use requires explicit permission"
    ],
    correctAnswer: 1,
    explanation: "The PAP defines 'you' and 'your' to include the named insured and resident spouse. The spouse does not need to be separately listed to be an insured. Mary is automatically covered under John's policy.",
    category: "Auto Insurance"
  },
  {
    id: 46,
    title: "Duty to Defend vs Duty to Pay",
    scenario: "An insured is sued for $200,000. The insured has $100,000 Coverage E. The allegations, if true, would be covered. After investigation, the insurer determines the insured is not liable.",
    question: "What is the insurer's obligation?",
    options: [
      "No obligation - insured is not liable",
      "Defend the insured, but pay nothing since not liable",
      "Pay $100,000 to settle even though not liable",
      "Let the insured defend themselves since they're not liable"
    ],
    correctAnswer: 1,
    explanation: "The duty to defend is broader than the duty to pay. If allegations in the suit could potentially be covered, the insurer must defend, even if ultimately no payment is owed. Defense is owed even for groundless suits, as long as they allege covered claims.",
    category: "General Principles"
  },
  {
    id: 47,
    title: "Reservation of Rights Letter",
    scenario: "An insurer receives a claim that may or may not be covered. They begin investigating and defending, but send the insured a reservation of rights letter stating coverage may not apply.",
    question: "What does this mean?",
    options: [
      "The claim is denied",
      "The insurer is defending under a reservation of rights to later deny coverage",
      "The insured must hire their own attorney",
      "Coverage is confirmed but limited"
    ],
    correctAnswer: 1,
    explanation: "A reservation of rights letter informs the insured that the insurer is defending and investigating, but reserves the right to later deny coverage if the claim is determined to be excluded. It protects the insurer from waiving policy defenses.",
    category: "General Principles"
  },
  {
    id: 48,
    title: "Assignment of Policy",
    scenario: "An insured sells their home to a buyer and attempts to transfer (assign) their HO-3 policy to the buyer without the insurer's consent.",
    question: "Is the assignment valid?",
    options: [
      "Yes - property insurance is freely assignable",
      "No - assignment requires the insurer's written consent",
      "Yes, if done within 30 days of sale",
      "No - buyers must always obtain new insurance"
    ],
    correctAnswer: 1,
    explanation: "Property insurance policies prohibit assignment without the insurer's written consent. The insurer has the right to underwrite the new owner. An assignment without consent is void. After a loss, the claim can be assigned.",
    category: "General Principles"
  },
  {
    id: 49,
    title: "Mitigation of Damages",
    scenario: "After a pipe bursts, water flows for 6 hours because the insured doesn't turn off the main water valve. The first hour causes $5,000 damage; the next 5 hours cause an additional $20,000 damage.",
    question: "What will the insurer pay (ignoring deductible)?",
    options: [
      "$25,000 - all damage from the covered peril",
      "$5,000 - only damage before mitigation was possible",
      "$25,000, but the insured may be found partially negligent",
      "$5,000 to $25,000 depending on whether failure to mitigate was reasonable"
    ],
    correctAnswer: 3,
    explanation: "The insured has a duty to mitigate (minimize) damages after a loss. Failure to take reasonable steps can result in denial of additional damages attributable to that failure. If the insured could reasonably have stopped the water, the insurer may deny the extra $20,000.",
    category: "Property Basics"
  },
  {
    id: 50,
    title: "Umbrella SIR Scenario",
    scenario: "An insured has a $1M umbrella with $10,000 SIR over 100/300 auto and $300,000 home liability. The insured's child accidentally injures someone during a soccer practice the insured is coaching (not covered by underlying policies). The judgment is $50,000.",
    question: "How much does the umbrella pay?",
    options: [
      "$0 - not covered by underlying, so umbrella doesn't apply",
      "$50,000 - umbrella covers exposures not in underlying",
      "$40,000 - umbrella pays after the $10,000 SIR",
      "$50,000, but the insured must first pay $10,000 SIR"
    ],
    correctAnswer: 2,
    explanation: "Umbrellas often cover certain exposures not in underlying policies (like personal injury, worldwide coverage). When no underlying coverage applies, the insured pays the SIR, then the umbrella pays. The insured pays $10,000, umbrella pays $40,000.",
    category: "Other Personal Lines"
  }
];
