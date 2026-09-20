export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
}

export const questions: Question[] = [
  // VIRGINIA INSURANCE REGULATION (30 questions)
  {
    id: 1,
    question: "What is the minimum passing score for the Virginia Property & Casualty exam?",
    options: [
      "60%",
      "65%",
      "70% (scaled score)",
      "75%"
    ],
    correctAnswer: 2,
    explanation: "The Virginia P&C exam (Series 11-03) requires a scaled score of 70 to pass. The exam consists of 135 scored questions plus 10 unscored pretest items, for 145 total questions.",
    category: "Virginia Regulation"
  },
  {
    id: 2,
    question: "How many continuing education (CE) hours are required for Virginia P&C license renewal?",
    options: [
      "12 hours every 2 years",
      "16 hours every 2 years, including 3 ethics hours",
      "20 hours every 2 years",
      "24 hours every year"
    ],
    correctAnswer: 1,
    explanation: "Virginia requires 16 hours of CE every 2 years, including 3 hours of ethics. Effective February 1, 2026, no more than 12 CE hours may be completed within any 24-hour period.",
    category: "Virginia Regulation"
  },
  {
    id: 3,
    question: "What is the maximum number of CE hours that can be completed in a 24-hour period in Virginia (effective Feb 1, 2026)?",
    options: [
      "8 hours",
      "10 hours",
      "12 hours",
      "16 hours"
    ],
    correctAnswer: 2,
    explanation: "Effective February 1, 2026, Virginia implemented CE pacing rules limiting agents to no more than 12 CE hours within any 24-hour period to ensure quality education.",
    category: "Virginia Regulation"
  },
  {
    id: 4,
    question: "An insurance agent's fiduciary responsibility means they must:",
    options: [
      "Always recommend the cheapest policy",
      "Hold premiums in trust for the insurer",
      "Only sell products from one company",
      "Provide legal advice to clients"
    ],
    correctAnswer: 1,
    explanation: "Under Virginia Code § 38.2-1813, agents act in a fiduciary capacity, meaning they must hold premiums and client funds in trust and properly account for them. Mishandling fiduciary funds is grounds for license revocation.",
    category: "Virginia Regulation"
  },
  {
    id: 5,
    question: "Which Virginia statute addresses unfair trade practices including misrepresentation?",
    options: [
      "§ 38.2-218",
      "§ 38.2-502",
      "§ 38.2-1800",
      "§ 38.2-2200"
    ],
    correctAnswer: 1,
    explanation: "Virginia Code § 38.2-502 addresses misrepresentation and false statements as unfair trade practices. Violations can result in fines, license suspension, or revocation.",
    category: "Virginia Regulation"
  },
  {
    id: 6,
    question: "How long must insurance agents retain records of insurance transactions in Virginia?",
    options: [
      "1 year",
      "3 years",
      "5 years",
      "7 years"
    ],
    correctAnswer: 1,
    explanation: "Virginia Code § 38.2-1809(B) requires agents to retain records of insurance transactions for at least 3 years from the date of the transaction.",
    category: "Virginia Regulation"
  },
  {
    id: 7,
    question: "Can a Virginia insurance agent share commissions with an unlicensed person?",
    options: [
      "Yes, if they are a family member",
      "Yes, with State Corporation Commission approval",
      "No, commissions can only be paid to licensed agents",
      "Yes, up to 10% of commission"
    ],
    correctAnswer: 2,
    explanation: "Virginia Code § 38.2-1812 prohibits paying or sharing commissions with unlicensed persons. Only properly licensed insurance agents or agencies may receive insurance commissions.",
    category: "Virginia Regulation"
  },
  {
    id: 8,
    question: "What is the fee for taking the Virginia P&C licensing exam?",
    options: [
      "$25",
      "$35",
      "$50",
      "$75"
    ],
    correctAnswer: 1,
    explanation: "The Virginia Property & Casualty exam (Series 11-03) costs $35 per attempt and is administered by Prometric.",
    category: "Virginia Regulation"
  },
  {
    id: 9,
    question: "How long is a passed Virginia P&C exam valid before applying for a license?",
    options: [
      "90 days",
      "120 days",
      "183 days",
      "1 year"
    ],
    correctAnswer: 2,
    explanation: "A passed Virginia insurance exam remains valid for 183 days (approximately 6 months). The license application must be submitted within this timeframe or the exam must be retaken.",
    category: "Virginia Regulation"
  },
  {
    id: 10,
    question: "Which entity regulates insurance agents and companies in Virginia?",
    options: [
      "Virginia Department of Insurance",
      "State Corporation Commission, Bureau of Insurance",
      "Virginia Insurance Board",
      "Department of Financial Services"
    ],
    correctAnswer: 1,
    explanation: "The State Corporation Commission's Bureau of Insurance regulates insurance companies, agents, and practices in Virginia under Title 38.2 of the Virginia Code.",
    category: "Virginia Regulation"
  },
  {
    id: 11,
    question: "An agent who moves to a new address must notify the Bureau of Insurance within:",
    options: [
      "10 days",
      "15 days",
      "30 days",
      "60 days"
    ],
    correctAnswer: 2,
    explanation: "Virginia Code § 38.2-1826(A) requires agents to notify the Bureau of Insurance of any address or name change within 30 days of the change.",
    category: "Virginia Regulation"
  },
  {
    id: 12,
    question: "What must an agent do if convicted of a felony?",
    options: [
      "Nothing, it doesn't affect the license",
      "Report it to the Bureau within 30 days",
      "Surrender their license immediately",
      "Apply for a waiver"
    ],
    correctAnswer: 1,
    explanation: "Virginia Code § 38.2-1826(B) requires agents to report any felony conviction to the Bureau of Insurance within 30 days. Failure to report can result in license revocation.",
    category: "Virginia Regulation"
  },
  {
    id: 13,
    question: "What is 'twisting' in insurance sales?",
    options: [
      "Comparing different insurance policies",
      "Using misrepresentation to induce a policyholder to replace coverage",
      "Negotiating premium rates",
      "Explaining policy exclusions"
    ],
    correctAnswer: 1,
    explanation: "Twisting is an unfair trade practice where an agent uses misrepresentation or misleading comparisons to convince a policyholder to drop existing coverage and buy a new policy. It is prohibited under Virginia Code § 38.2-502.",
    category: "Virginia Regulation"
  },
  {
    id: 14,
    question: "Is pre-licensing education required for Virginia P&C licensing?",
    options: [
      "Yes, 40 hours required",
      "Yes, 20 hours required",
      "No, pre-licensing education is not required for P&C",
      "Yes, but only 8 hours required"
    ],
    correctAnswer: 2,
    explanation: "Virginia does NOT require pre-licensing education for Property & Casualty licenses. Only Title insurance licenses require pre-licensing education (16 hours).",
    category: "Virginia Regulation"
  },
  {
    id: 15,
    question: "What is 'rebating' in insurance?",
    options: [
      "Canceling a policy early",
      "Offering an inducement not specified in the policy to purchase insurance",
      "Refusing to write a policy",
      "Increasing premium rates"
    ],
    correctAnswer: 1,
    explanation: "Rebating is the illegal practice of offering something of value (money, gifts, services) not specified in the policy as an inducement to purchase insurance. It is prohibited in Virginia as it creates unfair competition.",
    category: "Virginia Regulation"
  },
  {
    id: 16,
    question: "How often must a licensed agent be appointed by an insurer to sell their products?",
    options: [
      "Agents don't need appointments",
      "Before selling any insurance for that company",
      "Within 90 days of first sale",
      "Only for life insurance"
    ],
    correctAnswer: 1,
    explanation: "Virginia Code § 38.2-1833 requires agents to be appointed by each insurance company before soliciting or selling that company's insurance products. Selling without an appointment is a violation.",
    category: "Virginia Regulation"
  },
  {
    id: 17,
    question: "What is the penalty for acting as an agent without a license in Virginia?",
    options: [
      "Warning letter only",
      "Civil penalty up to $500 per violation",
      "Misdemeanor, fine up to $5,000, and possible jail time",
      "$100 fine"
    ],
    correctAnswer: 2,
    explanation: "Acting as an insurance agent without a license is a Class 1 misdemeanor in Virginia, punishable by fines up to $5,000 and potential imprisonment. Each violation can be charged separately.",
    category: "Virginia Regulation"
  },
  {
    id: 18,
    question: "Can an insurance company terminate an agent's appointment without cause?",
    options: [
      "No, cause must be shown",
      "Yes, but must provide 30 days notice to the agent and Bureau",
      "Yes, without any notice requirements",
      "Only with Bureau approval"
    ],
    correctAnswer: 1,
    explanation: "Virginia Code § 38.2-1834 requires insurers to provide proper notice when terminating an agent's appointment, and certain terminations for cause must be reported to the Bureau of Insurance.",
    category: "Virginia Regulation"
  },
  {
    id: 19,
    question: "What is 'defamation' as an unfair trade practice?",
    options: [
      "Canceling policies without notice",
      "Making false statements about a competitor's financial condition",
      "Charging excessive premiums",
      "Denying claims improperly"
    ],
    correctAnswer: 1,
    explanation: "Virginia Code § 38.2-504 prohibits defamation, which includes making false, derogatory, or malicious statements about the financial condition or business practices of an insurer or agent.",
    category: "Virginia Regulation"
  },
  {
    id: 20,
    question: "How many hours of the required 16 CE hours must be ethics training in Virginia?",
    options: [
      "2 hours",
      "3 hours",
      "4 hours",
      "5 hours"
    ],
    correctAnswer: 1,
    explanation: "Of the 16 continuing education hours required every 2 years in Virginia, 3 hours must be in ethics training to ensure agents maintain high professional standards.",
    category: "Virginia Regulation"
  },
  {
    id: 21,
    question: "Can an agent charge a fee for services in addition to commissions?",
    options: [
      "No, only commissions are allowed",
      "Yes, if disclosed in writing and agreed to by the client",
      "Yes, up to $100 per policy",
      "Only for commercial policies"
    ],
    correctAnswer: 1,
    explanation: "Virginia Code § 38.2-310 allows agents to charge fees for services beyond commissions, but the fees must be reasonable, disclosed in writing, and agreed to by the client before services are rendered.",
    category: "Virginia Regulation"
  },
  {
    id: 22,
    question: "What is 'coercion' as an unfair trade practice?",
    options: [
      "Offering discounts for multiple policies",
      "Using force or threats to compel someone to purchase insurance",
      "Explaining policy terms carefully",
      "Recommending appropriate coverage"
    ],
    correctAnswer: 1,
    explanation: "Virginia Code § 38.2-505 prohibits coercion, including using force, threats, or abuse of authority to compel someone to purchase insurance or prevent them from obtaining insurance elsewhere.",
    category: "Virginia Regulation"
  },
  {
    id: 23,
    question: "When must an agent notify the Bureau of Insurance of disciplinary action by another state?",
    options: [
      "Within 10 days",
      "Within 30 days",
      "Within 60 days",
      "Not required to report"
    ],
    correctAnswer: 1,
    explanation: "Virginia Code § 38.2-1826(C) requires agents to report disciplinary actions taken by other states within 30 days to ensure the Bureau is aware of all regulatory actions.",
    category: "Virginia Regulation"
  },
  {
    id: 24,
    question: "What is the role of the State Corporation Commission regarding insurance?",
    options: [
      "Only handles complaints",
      "Licenses agents, regulates insurers, enforces insurance laws",
      "Sells insurance policies",
      "Only approves policy forms"
    ],
    correctAnswer: 1,
    explanation: "The State Corporation Commission's Bureau of Insurance has broad authority under Virginia Code § 38.2-200 to license agents, regulate insurance companies, approve policy forms, and enforce insurance laws.",
    category: "Virginia Regulation"
  },
  {
    id: 25,
    question: "Can a P&C agent also apply for a Personal Lines license?",
    options: [
      "Yes, they are separate licenses",
      "No, P&C includes Personal Lines",
      "Only with special approval",
      "Yes, but must take both exams"
    ],
    correctAnswer: 1,
    explanation: "A Property & Casualty license includes Personal Lines authority, so an agent cannot and should not apply for both. The P&C license is broader and includes personal lines coverage.",
    category: "Virginia Regulation"
  },
  {
    id: 26,
    question: "What is 'unfair discrimination' in insurance?",
    options: [
      "Charging different rates based on legitimate risk factors",
      "Making distinctions based on prohibited factors like race or religion",
      "Declining to write certain types of insurance",
      "Offering discounts for safe drivers"
    ],
    correctAnswer: 1,
    explanation: "Virginia Code § 38.2-508 prohibits unfair discrimination, which means making distinctions based on race, religion, national origin, or other prohibited factors rather than legitimate underwriting criteria.",
    category: "Virginia Regulation"
  },
  {
    id: 27,
    question: "Must fingerprints be submitted when applying for a Virginia resident insurance license?",
    options: [
      "No, fingerprints are not required",
      "Yes, through Fieldprint within 90 days of application",
      "Only for non-residents",
      "Only if requested by the Bureau"
    ],
    correctAnswer: 1,
    explanation: "Virginia residents applying for a new insurance license must submit fingerprints through Fieldprint. The fingerprints must be less than 90 days old when the application is submitted.",
    category: "Virginia Regulation"
  },
  {
    id: 28,
    question: "What is a 'surplus lines' broker in Virginia?",
    options: [
      "An agent who sells excess coverage",
      "A specially licensed agent who can place coverage with non-admitted insurers",
      "An agent who works only on commission",
      "An agent who handles claims"
    ],
    correctAnswer: 1,
    explanation: "A surplus lines broker is a specially licensed agent who can place insurance with non-admitted (non-authorized) insurers when coverage cannot be obtained from admitted carriers. A P&C license is prerequisite.",
    category: "Virginia Regulation"
  },
  {
    id: 29,
    question: "What is the maximum time allowed to complete the Virginia P&C exam?",
    options: [
      "2 hours",
      "2.5 hours (150 minutes)",
      "3 hours",
      "4 hours"
    ],
    correctAnswer: 1,
    explanation: "The Virginia P&C exam (Series 11-03) allows 2.5 hours (150 minutes) to complete 145 questions (135 scored plus 10 pretest items).",
    category: "Virginia Regulation"
  },
  {
    id: 30,
    question: "What does 'acting for an unlicensed insurer' mean?",
    options: [
      "Selling insurance without a license",
      "Representing an insurance company not authorized to do business in Virginia",
      "Selling expired policies",
      "Working as an intern"
    ],
    correctAnswer: 1,
    explanation: "Virginia Code § 38.2-1802 and § 38.2-1822 prohibit agents from representing or selling insurance for companies not licensed/authorized in Virginia, except through surplus lines procedures.",
    category: "Virginia Regulation"
  },

  // VIRGINIA AUTO INSURANCE (35 questions)
  {
    id: 31,
    question: "What are the minimum auto liability limits required in Virginia for policies effective January 1, 2025 or after?",
    options: [
      "$25,000/$50,000/$20,000",
      "$30,000/$60,000/$20,000",
      "$50,000/$100,000/$25,000",
      "$100,000/$300,000/$50,000"
    ],
    correctAnswer: 2,
    explanation: "Virginia Code § 46.2-472 was amended to require $50,000 per person, $100,000 per accident for bodily injury, and $25,000 for property damage (50/100/25) for all policies effective on or after January 1, 2025.",
    category: "Auto Insurance"
  },
  {
    id: 32,
    question: "What happened to Virginia's $500 uninsured motor vehicle fee option?",
    options: [
      "It increased to $750",
      "It was eliminated on July 1, 2024 - insurance is now mandatory",
      "It was reduced to $250",
      "It remains available"
    ],
    correctAnswer: 1,
    explanation: "Virginia eliminated the $500 uninsured motor vehicle (UMV) fee on July 1, 2024. All registered vehicles must now carry liability insurance - driving uninsured is no longer a legal option.",
    category: "Auto Insurance"
  },
  {
    id: 33,
    question: "What were Virginia's minimum auto liability limits for policies effective before January 1, 2025?",
    options: [
      "$25,000/$50,000/$20,000",
      "$30,000/$60,000/$20,000",
      "$50,000/$100,000/$25,000",
      "$25,000/$50,000/$25,000"
    ],
    correctAnswer: 1,
    explanation: "For policies effective from January 1, 2022 through December 31, 2024, Virginia required minimum limits of $30,000/$60,000/$20,000. These increased to 50/100/25 on January 1, 2025.",
    category: "Auto Insurance"
  },
  {
    id: 34,
    question: "Is uninsured motorist (UM) coverage mandatory in Virginia?",
    options: [
      "No, it is optional",
      "Yes, with limits equal to liability limits unless rejected in writing",
      "Only for new vehicles",
      "Only if required by lender"
    ],
    correctAnswer: 1,
    explanation: "Virginia Code § 38.2-2206 requires uninsured/underinsured motorist coverage with limits equal to liability limits unless the insured rejects or reduces the coverage in writing.",
    category: "Auto Insurance"
  },
  {
    id: 35,
    question: "What is the minimum property damage coverage required in Virginia's UM endorsement?",
    options: [
      "$10,000",
      "$15,000",
      "$20,000",
      "$25,000"
    ],
    correctAnswer: 2,
    explanation: "Virginia Code § 38.2-2206 requires at least $20,000 coverage for property damage caused by uninsured motorists, and may include a $200 deductible for hit-and-run accidents.",
    category: "Auto Insurance"
  },
  {
    id: 36,
    question: "What is the purpose of underinsured motorist (UIM) coverage?",
    options: [
      "Covers your vehicle if you don't have insurance",
      "Pays when the at-fault driver has insufficient coverage for your injuries",
      "Covers only property damage",
      "Replaces liability coverage"
    ],
    correctAnswer: 1,
    explanation: "Underinsured motorist coverage pays when the at-fault driver's liability limits are insufficient to cover your injuries or damages. It bridges the gap between their coverage and your actual losses.",
    category: "Auto Insurance"
  },
  {
    id: 37,
    question: "Personal Auto Policy (PAP) liability coverage applies to:",
    options: [
      "Only the named insured",
      "The named insured, resident family members, and permissive users",
      "Anyone who drives the vehicle",
      "Only licensed drivers"
    ],
    correctAnswer: 1,
    explanation: "The PAP provides liability coverage for the named insured, resident relatives/family members, and any person using the covered auto with permission (permissive user).",
    category: "Auto Insurance"
  },
  {
    id: 38,
    question: "What does 'other than collision' (comprehensive) coverage insure against?",
    options: [
      "All physical damage losses",
      "Only collision losses",
      "Theft, vandalism, fire, falling objects, glass breakage, animal strikes, etc.",
      "Only mechanical breakdown"
    ],
    correctAnswer: 2,
    explanation: "Comprehensive or 'other than collision' coverage insures against non-collision perils including theft, vandalism, fire, hail, flood, falling objects, glass breakage, and hitting an animal.",
    category: "Auto Insurance"
  },
  {
    id: 39,
    question: "If your car hits a deer, which coverage applies?",
    options: [
      "Collision coverage",
      "Liability coverage",
      "Comprehensive coverage",
      "Uninsured motorist coverage"
    ],
    correctAnswer: 2,
    explanation: "Hitting an animal (such as a deer) is covered under comprehensive (other than collision) coverage, not collision coverage. This is a specifically listed peril.",
    category: "Auto Insurance"
  },
  {
    id: 40,
    question: "What is the 'stacking' of uninsured motorist coverage?",
    options: [
      "Having two separate policies",
      "Combining UM limits from multiple vehicles on the same policy",
      "Increasing limits annually",
      "Adding UM to collision coverage"
    ],
    correctAnswer: 1,
    explanation: "Stacking allows an insured to combine or 'stack' uninsured motorist coverage limits from multiple vehicles on the same policy to provide higher total coverage for a single claim.",
    category: "Auto Insurance"
  },
  {
    id: 41,
    question: "Under the PAP, medical payments coverage pays for:",
    options: [
      "Injuries to other parties you hit",
      "Injuries to you and passengers in your vehicle, regardless of fault",
      "Only if you are at fault",
      "Vehicle damage only"
    ],
    correctAnswer: 1,
    explanation: "Medical payments (MedPay) coverage pays reasonable medical expenses for the insured and passengers injured in the covered auto, regardless of who was at fault in the accident.",
    category: "Auto Insurance"
  },
  {
    id: 42,
    question: "What is a 'permissive user' under an auto policy?",
    options: [
      "Someone who steals the vehicle",
      "Someone using the vehicle with the owner's permission",
      "A valet driver only",
      "An unlicensed driver"
    ],
    correctAnswer: 1,
    explanation: "A permissive user is any person using the covered auto with the express or implied permission of the named insured. Permissive users typically have coverage under the owner's policy.",
    category: "Auto Insurance"
  },
  {
    id: 43,
    question: "Which of the following is excluded under PAP liability coverage?",
    options: [
      "Using the car for ride-sharing without proper endorsement",
      "Letting a friend borrow the car",
      "Driving in other states",
      "Towing a trailer"
    ],
    correctAnswer: 0,
    explanation: "Using a personal auto for business purposes like ride-sharing (Uber, Lyft) without a proper endorsement is excluded. Standard PAP liability excludes vehicles used for commercial transportation.",
    category: "Auto Insurance"
  },
  {
    id: 44,
    question: "When is collision coverage required?",
    options: [
      "Always, it's mandatory in Virginia",
      "When required by a lienholder/lender",
      "Only for new cars",
      "It's never required"
    ],
    correctAnswer: 1,
    explanation: "Collision coverage is not legally required in Virginia, but lenders/lienholders typically require both collision and comprehensive coverage to protect their financial interest in financed or leased vehicles.",
    category: "Auto Insurance"
  },
  {
    id: 45,
    question: "What is the 'insuring agreement' in an auto policy?",
    options: [
      "The exclusions section",
      "The insurer's promise to pay covered losses",
      "The premium payment schedule",
      "The cancellation provisions"
    ],
    correctAnswer: 1,
    explanation: "The insuring agreement is the core promise where the insurer agrees to provide coverage, pay claims, and defend the insured against covered claims in exchange for premium payment.",
    category: "Auto Insurance"
  },
  {
    id: 46,
    question: "Collision coverage pays for damage to your vehicle caused by:",
    options: [
      "Fire or theft",
      "Upset or overturn, or impact with another vehicle or object",
      "Hail or flood",
      "Vandalism"
    ],
    correctAnswer: 1,
    explanation: "Collision coverage pays for damage from the upset or rollover of the vehicle, or collision with another vehicle or object (tree, pole, guardrail, etc.), minus the deductible.",
    category: "Auto Insurance"
  },
  {
    id: 47,
    question: "What is 'betterment' in auto physical damage claims?",
    options: [
      "Upgrading to a better vehicle",
      "The increase in value when old parts are replaced with new",
      "Higher coverage limits",
      "A discount for safe driving"
    ],
    correctAnswer: 1,
    explanation: "Betterment is the increased value when worn or damaged parts are replaced with new ones. Insurers may reduce claim payments to account for this improvement in the vehicle's condition.",
    category: "Auto Insurance"
  },
  {
    id: 48,
    question: "What must drivers provide to DMV when registering a vehicle in Virginia?",
    options: [
      "Proof of driver's education",
      "Proof of insurance or other financial responsibility",
      "Proof of vehicle inspection",
      "Proof of residency only"
    ],
    correctAnswer: 1,
    explanation: "Virginia Code § 46.2-706 requires all vehicle owners to certify they have minimum required insurance or other acceptable financial responsibility when registering a vehicle or obtaining plates.",
    category: "Auto Insurance"
  },
  {
    id: 49,
    question: "What is 'rental reimbursement' coverage?",
    options: [
      "Pays for rental car damage",
      "Pays daily rental costs while your car is being repaired after a covered loss",
      "Provides a permanent replacement vehicle",
      "Covers ride-share expenses"
    ],
    correctAnswer: 1,
    explanation: "Rental reimbursement coverage pays a specified daily amount (up to policy limits) for a rental vehicle while your covered auto is being repaired or replaced after a covered loss.",
    category: "Auto Insurance"
  },
  {
    id: 50,
    question: "Under the PAP, 'newly acquired auto' coverage typically extends for:",
    options: [
      "7 days",
      "14 days for collision; automatic for liability",
      "30 days",
      "60 days"
    ],
    correctAnswer: 1,
    explanation: "The PAP automatically extends liability, medical payments, and UM coverage to a newly acquired vehicle. Collision and comprehensive extend for 14 days if any vehicle on the policy has that coverage.",
    category: "Auto Insurance"
  },
  {
    id: 51,
    question: "What is the primary purpose of auto liability insurance?",
    options: [
      "Repair your own vehicle",
      "Protect you from financial loss when you're legally liable for injury or damage to others",
      "Provide medical care for passengers",
      "Cover theft of the vehicle"
    ],
    correctAnswer: 1,
    explanation: "Auto liability insurance protects the insured from financial loss when they are legally liable for bodily injury or property damage to others. It includes both defense costs and settlement/judgment payments.",
    category: "Auto Insurance"
  },
  {
    id: 52,
    question: "Which auto coverage would pay if you hit someone's fence?",
    options: [
      "Collision coverage",
      "Property damage liability",
      "Comprehensive coverage",
      "Uninsured motorist coverage"
    ],
    correctAnswer: 1,
    explanation: "Property damage liability coverage pays for damage you cause to another person's property, such as their fence, mailbox, or vehicle. This is part of your liability coverage.",
    category: "Auto Insurance"
  },
  {
    id: 53,
    question: "What is 'towing and labor' coverage?",
    options: [
      "Covers injuries to tow truck operators",
      "Pays for towing and on-scene labor costs when the vehicle is disabled",
      "Provides unlimited towing",
      "Only covers collision-related towing"
    ],
    correctAnswer: 1,
    explanation: "Towing and labor coverage reimburses towing costs and labor charges at the scene when the vehicle is disabled, up to policy limits. It applies regardless of the cause of breakdown.",
    category: "Auto Insurance"
  },
  {
    id: 54,
    question: "How is actual cash value (ACV) calculated for an auto physical damage claim?",
    options: [
      "Original purchase price",
      "Replacement cost minus depreciation",
      "Book value only",
      "Market value plus sales tax"
    ],
    correctAnswer: 1,
    explanation: "Actual cash value is calculated as replacement cost (cost to replace with a similar vehicle) minus depreciation for age, wear, and tear. It represents the vehicle's fair market value.",
    category: "Auto Insurance"
  },
  {
    id: 55,
    question: "Under PAP collision coverage, you hit a tree. Who pays the deductible?",
    options: [
      "The insurance company pays it",
      "The insured pays the deductible",
      "The tree owner pays it",
      "No deductible applies"
    ],
    correctAnswer: 1,
    explanation: "The insured is responsible for paying the collision deductible. The insurance company pays the remainder of the covered loss up to the policy limit.",
    category: "Auto Insurance"
  },
  {
    id: 56,
    question: "What is 'split limit' liability coverage?",
    options: [
      "Coverage split between two vehicles",
      "Separate limits for bodily injury per person, per accident, and property damage (e.g., 50/100/25)",
      "Shared coverage with another driver",
      "Half liability, half collision"
    ],
    correctAnswer: 1,
    explanation: "Split limits provide separate coverage amounts for bodily injury per person, bodily injury per accident, and property damage per accident, such as Virginia's 50/100/25 requirement.",
    category: "Auto Insurance"
  },
  {
    id: 57,
    question: "What does 'combined single limit' (CSL) auto liability mean?",
    options: [
      "Only covers one type of loss",
      "One total limit that applies to all bodily injury and property damage claims in an accident",
      "Lower than split limits",
      "Only for commercial vehicles"
    ],
    correctAnswer: 1,
    explanation: "A combined single limit provides one total amount of coverage that applies to all bodily injury and property damage claims arising from a single accident, rather than separate per-person and per-accident limits.",
    category: "Auto Insurance"
  },
  {
    id: 58,
    question: "Your car is vandalized while parked. Which coverage applies?",
    options: [
      "Liability",
      "Collision",
      "Comprehensive (Other than Collision)",
      "Uninsured motorist"
    ],
    correctAnswer: 2,
    explanation: "Vandalism is covered under comprehensive (other than collision) coverage. This includes malicious mischief or damage to the vehicle by someone intentionally.",
    category: "Auto Insurance"
  },
  {
    id: 59,
    question: "What is 'subrogation' in auto insurance?",
    options: [
      "Canceling the policy",
      "The insurer's right to recover claim payments from the at-fault party",
      "Increasing coverage limits",
      "Adding additional drivers"
    ],
    correctAnswer: 1,
    explanation: "Subrogation is the insurance company's right to recover the amount paid to its insured from the party responsible for the loss. This prevents the insured from collecting twice.",
    category: "Auto Insurance"
  },
  {
    id: 60,
    question: "What is a 'non-owned auto' under the PAP?",
    options: [
      "A stolen vehicle",
      "A vehicle the insured does not own but uses regularly (e.g., borrowed, rental)",
      "A company vehicle",
      "An uninsured vehicle"
    ],
    correctAnswer: 1,
    explanation: "A non-owned auto is a vehicle the insured does not own but uses with permission, such as a borrowed car or rental vehicle. The PAP typically extends liability coverage to non-owned autos.",
    category: "Auto Insurance"
  },
  {
    id: 61,
    question: "What is the 'other insurance' provision in auto policies?",
    options: [
      "You cannot have multiple policies",
      "Explains how coverage applies when more than one policy covers the same loss",
      "Requires purchasing additional coverage",
      "Cancels all other policies"
    ],
    correctAnswer: 1,
    explanation: "The 'other insurance' clause determines how the policy responds when multiple policies cover the same loss, typically providing that coverage will be prorated among the policies.",
    category: "Auto Insurance"
  },
  {
    id: 62,
    question: "Under Virginia law, insurers must offer which coverage to all auto policyholders?",
    options: [
      "Collision coverage",
      "Uninsured/underinsured motorist coverage",
      "Rental reimbursement",
      "Towing coverage"
    ],
    correctAnswer: 1,
    explanation: "Virginia Code § 38.2-2206 requires all auto insurers to offer uninsured/underinsured motorist coverage with limits equal to liability limits. Insureds may reject it in writing.",
    category: "Auto Insurance"
  },
  {
    id: 63,
    question: "What is 'supplementary payments' in auto liability coverage?",
    options: [
      "Additional premium charges",
      "Defense costs, court costs, and certain expenses paid in addition to policy limits",
      "Payments to passengers",
      "Physical damage payments"
    ],
    correctAnswer: 1,
    explanation: "Supplementary payments include defense costs, court costs, bail bonds, and other specified expenses that the insurer pays in addition to the policy limits when defending a covered claim.",
    category: "Auto Insurance"
  },
  {
    id: 64,
    question: "Your teenage daughter who lives with you borrows your car. Is she covered under your PAP?",
    options: [
      "No, she needs her own policy",
      "Yes, as a resident family member",
      "Only if specifically listed",
      "No, unless she's 18 or older"
    ],
    correctAnswer: 1,
    explanation: "Resident family members, including your teenage daughter living at home, are automatically insured under your PAP for liability, medical payments, and UM/UIM coverage when using your vehicle.",
    category: "Auto Insurance"
  },
  {
    id: 65,
    question: "What is the purpose of medical payments (MedPay) coverage in auto insurance?",
    options: [
      "Pays medical bills for people you injure",
      "Pays medical expenses for you and passengers, regardless of fault",
      "Replaces health insurance",
      "Only covers hospitalization"
    ],
    correctAnswer: 1,
    explanation: "Medical payments coverage pays reasonable medical expenses for the insured and passengers in the covered vehicle, regardless of who was at fault, up to the policy limit per person.",
    category: "Auto Insurance"
  },

  // HOMEOWNERS INSURANCE (35 questions)
  {
    id: 66,
    question: "Which HO form provides 'open perils' coverage on the dwelling and 'named perils' on personal property?",
    options: [
      "HO-2",
      "HO-3 (Special Form)",
      "HO-4",
      "HO-5"
    ],
    correctAnswer: 1,
    explanation: "The HO-3 Special Form is the most popular homeowners policy. It provides open perils (all-risk) coverage on the dwelling (Coverage A) and other structures (Coverage B), but named perils coverage on personal property (Coverage C).",
    category: "Homeowners Insurance"
  },
  {
    id: 67,
    question: "What is Coverage A in a homeowners policy?",
    options: [
      "Personal property",
      "Dwelling coverage",
      "Liability coverage",
      "Loss of use"
    ],
    correctAnswer: 1,
    explanation: "Coverage A insures the dwelling itself - the house and structures attached to it, such as an attached garage. It does not cover the land the dwelling sits on.",
    category: "Homeowners Insurance"
  },
  {
    id: 68,
    question: "Coverage B (Other Structures) is typically what percentage of Coverage A?",
    options: [
      "5%",
      "10%",
      "15%",
      "20%"
    ],
    correctAnswer: 1,
    explanation: "Coverage B for other structures (detached garage, shed, fence, etc.) is typically 10% of the Coverage A limit. This coverage applies to structures not attached to the dwelling.",
    category: "Homeowners Insurance"
  },
  {
    id: 69,
    question: "What is Coverage C in a homeowners policy?",
    options: [
      "Dwelling",
      "Other structures",
      "Personal property (contents)",
      "Liability"
    ],
    correctAnswer: 2,
    explanation: "Coverage C insures personal property (belongings/contents) owned or used by the insured. It typically provides coverage equal to 50-75% of the Coverage A dwelling limit.",
    category: "Homeowners Insurance"
  },
  {
    id: 70,
    question: "What does Coverage D (Loss of Use) provide?",
    options: [
      "Covers vehicle use",
      "Additional living expenses when the home is uninhabitable due to a covered loss",
      "Medical payments",
      "Property damage"
    ],
    correctAnswer: 1,
    explanation: "Coverage D pays for additional living expenses (hotel, meals, etc.) when the home is uninhabitable due to a covered loss. It may also cover fair rental value if you rent part of your home.",
    category: "Homeowners Insurance"
  },
  {
    id: 71,
    question: "What is Coverage E in a homeowners policy?",
    options: [
      "Personal property",
      "Dwelling",
      "Personal liability",
      "Medical payments"
    ],
    correctAnswer: 2,
    explanation: "Coverage E provides personal liability protection if you are legally liable for bodily injury or property damage to others. Common limits are $100,000 to $500,000.",
    category: "Homeowners Insurance"
  },
  {
    id: 72,
    question: "Coverage F provides:",
    options: [
      "Flood insurance",
      "Medical payments to others injured on your property",
      "Personal property coverage",
      "Earthquake coverage"
    ],
    correctAnswer: 1,
    explanation: "Coverage F pays medical expenses for others accidentally injured on your property or by your activities, regardless of liability. Typical limits are $1,000 to $5,000 per person.",
    category: "Homeowners Insurance"
  },
  {
    id: 73,
    question: "Under the HO-3, the dwelling is covered on what basis?",
    options: [
      "Named perils only",
      "Open perils (all risks) except those specifically excluded",
      "Actual cash value only",
      "No coverage"
    ],
    correctAnswer: 1,
    explanation: "The HO-3 covers the dwelling (Coverage A) on an open perils basis, meaning all causes of loss are covered except those specifically excluded (flood, earthquake, war, etc.).",
    category: "Homeowners Insurance"
  },
  {
    id: 74,
    question: "Which of the following is typically excluded from all homeowners policies?",
    options: [
      "Fire",
      "Theft",
      "Flood",
      "Windstorm"
    ],
    correctAnswer: 2,
    explanation: "Flood damage is excluded from all standard homeowners policies. Flood insurance must be purchased separately through the National Flood Insurance Program (NFIP) or private insurers.",
    category: "Homeowners Insurance"
  },
  {
    id: 75,
    question: "What is the 'replacement cost' provision for dwelling coverage?",
    options: [
      "Pays market value",
      "Pays cost to replace with materials of like kind and quality, without deduction for depreciation",
      "Pays original purchase price",
      "Pays only depreciated value"
    ],
    correctAnswer: 1,
    explanation: "Replacement cost coverage pays to repair or replace the dwelling with materials of like kind and quality without deducting for depreciation, provided adequate insurance-to-value is maintained.",
    category: "Homeowners Insurance"
  },
  {
    id: 76,
    question: "To receive replacement cost on a dwelling, most policies require coverage of at least what percentage of replacement value?",
    options: [
      "50%",
      "70%",
      "80%",
      "100%"
    ],
    correctAnswer: 2,
    explanation: "Most HO policies require dwelling coverage of at least 80% of replacement cost to avoid a coinsurance penalty and receive full replacement cost benefits (up to policy limits).",
    category: "Homeowners Insurance"
  },
  {
    id: 77,
    question: "What is the special limit for money, bank notes, and coins under Coverage C?",
    options: [
      "$100",
      "$200",
      "$500",
      "$1,000"
    ],
    correctAnswer: 1,
    explanation: "The HO-3 typically limits coverage for money, bank notes, bullion, coins, and medals to $200 total. Higher limits require scheduling or a separate endorsement.",
    category: "Homeowners Insurance"
  },
  {
    id: 78,
    question: "What is the typical special limit for theft of jewelry, watches, and furs?",
    options: [
      "$500",
      "$1,000",
      "$1,500",
      "$2,500"
    ],
    correctAnswer: 2,
    explanation: "The standard HO-3 limits theft of jewelry, watches, furs, and precious stones to $1,500 total. These items should be scheduled on a Personal Articles Floater for full value coverage.",
    category: "Homeowners Insurance"
  },
  {
    id: 79,
    question: "Which form is used to schedule high-value personal property (jewelry, fine arts)?",
    options: [
      "HO-2",
      "HO-4",
      "HO 04 61 (Scheduled Personal Property Endorsement)",
      "HO 04 90"
    ],
    correctAnswer: 2,
    explanation: "The HO 04 61 Scheduled Personal Property Endorsement allows specific high-value items to be listed with agreed values and broader coverage, often with no deductible.",
    category: "Homeowners Insurance"
  },
  {
    id: 80,
    question: "What does the HO 04 90 endorsement provide?",
    options: [
      "Flood coverage",
      "Personal property replacement cost coverage",
      "Earthquake coverage",
      "Identity theft coverage"
    ],
    correctAnswer: 1,
    explanation: "The HO 04 90 Personal Property Replacement Cost Loss Settlement endorsement pays replacement cost for personal property rather than actual cash value (depreciated value).",
    category: "Homeowners Insurance"
  },
  {
    id: 81,
    question: "Is earthquake damage covered under a standard HO-3 policy?",
    options: [
      "Yes, automatically",
      "No, it requires a separate endorsement (HO 04 54)",
      "Only in high-risk areas",
      "Yes, but only for the dwelling"
    ],
    correctAnswer: 1,
    explanation: "Earthquake damage is excluded from standard homeowners policies. Coverage requires the HO 04 54 Earthquake Endorsement, which includes special deductibles.",
    category: "Homeowners Insurance"
  },
  {
    id: 82,
    question: "What is a 'standard mortgage clause'?",
    options: [
      "Requires a mortgage to buy insurance",
      "Protects the mortgagee's (lender's) interest in the property",
      "Cancels coverage if mortgage is paid",
      "Increases coverage limits"
    ],
    correctAnswer: 1,
    explanation: "The standard mortgage clause protects the lender's interest even if the insured's coverage is voided due to fraud or policy violations. The lender receives loss payment for their interest.",
    category: "Homeowners Insurance"
  },
  {
    id: 83,
    question: "What is the difference between 'vacant' and 'unoccupied'?",
    options: [
      "They are the same",
      "Vacant has no contents; unoccupied has contents but no people",
      "Vacant means for sale",
      "Unoccupied means abandoned"
    ],
    correctAnswer: 1,
    explanation: "Vacant means the property lacks both occupants and contents. Unoccupied means the property has contents but no people present. Extended vacancy can result in coverage restrictions.",
    category: "Homeowners Insurance"
  },
  {
    id: 84,
    question: "How much does HO-3 typically cover for trees, shrubs, and plants?",
    options: [
      "No coverage",
      "5% of Coverage A, $500 per item",
      "10% of Coverage A, $1,000 per item",
      "Full replacement cost"
    ],
    correctAnswer: 1,
    explanation: "Trees, shrubs, and plants are covered for up to 5% of Coverage A, with a limit of $500 per item, for loss caused by named perils such as fire, lightning, or vehicle damage (not wind or disease).",
    category: "Homeowners Insurance"
  },
  {
    id: 85,
    question: "What is 'loss assessment' coverage?",
    options: [
      "Appraisal of the home",
      "Covers assessments charged by a homeowners association for property losses",
      "Determines claim value",
      "Professional inspection"
    ],
    correctAnswer: 1,
    explanation: "Loss assessment coverage pays the insured's share of assessments by a homeowners or condo association for covered losses to common property. Typical limits are $1,000, but higher limits are available.",
    category: "Homeowners Insurance"
  },
  {
    id: 86,
    question: "Under Coverage F (Medical Payments to Others), who is NOT covered?",
    options: [
      "A guest injured on your property",
      "The named insured and resident family members",
      "A delivery person injured on your property",
      "A neighbor's child injured in your yard"
    ],
    correctAnswer: 1,
    explanation: "Coverage F pays medical expenses for OTHERS injured on your property or by your activities. The named insured, resident relatives, and regular residents are excluded from Coverage F.",
    category: "Homeowners Insurance"
  },
  {
    id: 87,
    question: "What is the HO-4 policy designed for?",
    options: [
      "Homeowners",
      "Renters/Tenants",
      "Condo owners",
      "Mobile home owners"
    ],
    correctAnswer: 1,
    explanation: "The HO-4 Tenants/Renters policy covers the tenant's personal property and provides liability coverage. It does not cover the building structure, which is insured by the landlord.",
    category: "Homeowners Insurance"
  },
  {
    id: 88,
    question: "What is the HO-6 policy designed for?",
    options: [
      "Apartment renters",
      "Condominium unit owners",
      "Mobile home owners",
      "Single-family homeowners"
    ],
    correctAnswer: 1,
    explanation: "The HO-6 Condominium Unit-Owners policy covers the unit owner's personal property, interior improvements, loss assessment, and liability. The condo association insures the building and common areas.",
    category: "Homeowners Insurance"
  },
  {
    id: 89,
    question: "What is 'ordinance or law' coverage?",
    options: [
      "Legal expense coverage",
      "Covers increased costs to rebuild to current building codes",
      "Police protection",
      "Zoning compliance"
    ],
    correctAnswer: 1,
    explanation: "Ordinance or law coverage pays increased costs to rebuild to current building codes when older structures are damaged. Standard policies provide limited coverage; additional coverage is available by endorsement.",
    category: "Homeowners Insurance"
  },
  {
    id: 90,
    question: "What is the 'debris removal' additional coverage?",
    options: [
      "Removes trees from the yard",
      "Pays to remove debris of covered property after a covered loss",
      "Cleans gutters",
      "Hauls away old furniture"
    ],
    correctAnswer: 1,
    explanation: "Debris removal pays the cost to remove debris of covered property damaged by a covered cause of loss. It typically provides an additional 5% of the Coverage A limit if needed.",
    category: "Homeowners Insurance"
  },
  {
    id: 91,
    question: "Which peril is covered for personal property under the HO-3 named perils coverage?",
    options: [
      "Flood",
      "Earthquake",
      "Theft",
      "Wear and tear"
    ],
    correctAnswer: 2,
    explanation: "Theft is one of the 16 named perils covered for personal property under the HO-3. Flood, earthquake, and wear/tear are excluded.",
    category: "Homeowners Insurance"
  },
  {
    id: 92,
    question: "What is the typical special limit for firearms theft under Coverage C?",
    options: [
      "$1,000",
      "$1,500",
      "$2,500",
      "$5,000"
    ],
    correctAnswer: 2,
    explanation: "The HO-3 typically limits theft of firearms to $2,500 total. Valuable gun collections should be scheduled on a Personal Articles Floater for full coverage.",
    category: "Homeowners Insurance"
  },
  {
    id: 93,
    question: "Does the HO-3 cover business property kept at home?",
    options: [
      "Yes, fully covered",
      "Limited coverage - typically $2,500 on premises, $250 away from premises",
      "No coverage at all",
      "Only if you have a home office"
    ],
    correctAnswer: 1,
    explanation: "Business property is covered with sub-limits: typically $2,500 on premises and $250 away from premises. Substantial business property requires a business insurance policy or endorsement.",
    category: "Homeowners Insurance"
  },
  {
    id: 94,
    question: "What is 'credit card coverage' under a homeowners policy?",
    options: [
      "Pays your credit card bills",
      "Covers unauthorized use of credit cards up to $500",
      "Protects your credit score",
      "Provides identity theft services"
    ],
    correctAnswer: 1,
    explanation: "Credit card, fund transfer card, and forgery coverage provides up to $500 protection against unauthorized use, with no deductible. This is an additional coverage under Section I.",
    category: "Homeowners Insurance"
  },
  {
    id: 95,
    question: "What does the 'pair or set' clause mean?",
    options: [
      "You must buy two policies",
      "If part of a pair/set is damaged, the insurer may repair, replace the pair, or pay the difference in value",
      "Doubles your coverage",
      "Requires scheduling pairs"
    ],
    correctAnswer: 1,
    explanation: "The pair or set clause allows the insurer to repair the damaged item, replace the pair/set, or pay the difference in value before and after the loss, rather than paying the full value of the pair/set.",
    category: "Homeowners Insurance"
  },
  {
    id: 96,
    question: "Is water damage from a burst pipe covered under HO-3?",
    options: [
      "No, never covered",
      "Yes, if sudden and accidental",
      "Only in winter",
      "Only with an endorsement"
    ],
    correctAnswer: 1,
    explanation: "Water damage from the sudden and accidental discharge or overflow of water or steam from plumbing, heating, or AC systems is covered under HO-3 dwelling and personal property coverage.",
    category: "Homeowners Insurance"
  },
  {
    id: 97,
    question: "What is the 'fire department service charge' coverage?",
    options: [
      "Pays your property taxes",
      "Pays charges when the fire department is called to save covered property",
      "Provides fire prevention services",
      "Covers volunteer firefighter injuries"
    ],
    correctAnswer: 1,
    explanation: "This additional coverage pays up to $500 (typically) when the fire department charges for responding to save or protect covered property from a covered peril.",
    category: "Homeowners Insurance"
  },
  {
    id: 98,
    question: "What is 'refrigerated products coverage'?",
    options: [
      "Covers the refrigerator itself",
      "Covers food spoilage due to power outage or equipment failure, typically $500",
      "Covers commercial refrigeration",
      "Extends warranty on appliances"
    ],
    correctAnswer: 1,
    explanation: "Refrigerated products coverage pays up to $500 (typically) for food spoilage due to power outage or mechanical failure of refrigeration equipment. No deductible applies.",
    category: "Homeowners Insurance"
  },
  {
    id: 99,
    question: "What is the HO 04 42 endorsement?",
    options: [
      "Earthquake coverage",
      "Permitted Incidental Occupancies (home business)",
      "Scheduled property",
      "Flood coverage"
    ],
    correctAnswer: 1,
    explanation: "The HO 04 42 Permitted Incidental Occupancies endorsement extends limited coverage for small home-based businesses, increasing the business property limits and adding some liability coverage.",
    category: "Homeowners Insurance"
  },
  {
    id: 100,
    question: "Under the HO-3, is mold damage covered?",
    options: [
      "Always fully covered",
      "Limited coverage if result of a covered peril (typically $10,000 limit)",
      "Never covered",
      "Only with separate endorsement"
    ],
    correctAnswer: 1,
    explanation: "Mold (fungi) coverage is limited, typically to $10,000, and only if it results from a covered water damage cause of loss. Many policies require endorsements for broader mold coverage.",
    category: "Homeowners Insurance"
  },

  // PROPERTY & CASUALTY PRINCIPLES (40 questions)
  {
    id: 101,
    question: "What are the three elements required for a valid contract?",
    options: [
      "Offer, acceptance, and witnesses",
      "Offer, acceptance, and consideration",
      "Premium, policy, and claim",
      "Application, underwriting, and approval"
    ],
    correctAnswer: 1,
    explanation: "A valid contract requires: (1) Offer and acceptance (agreement), (2) Consideration (something of value exchanged - premium for coverage), and (3) Competent parties and legal purpose.",
    category: "Insurance Principles"
  },
  {
    id: 102,
    question: "What is 'insurable interest'?",
    options: [
      "The premium amount",
      "A financial interest in the preservation of property or life being insured",
      "The policy limits",
      "The deductible amount"
    ],
    correctAnswer: 1,
    explanation: "Insurable interest means the insured must have a legitimate financial interest in the preservation of the property or life being insured and would suffer financial loss if damage or death occurred.",
    category: "Insurance Principles"
  },
  {
    id: 103,
    question: "When must insurable interest exist for property insurance?",
    options: [
      "At policy inception only",
      "At the time of loss",
      "Throughout the policy period",
      "Only when filing a claim"
    ],
    correctAnswer: 1,
    explanation: "For property insurance, insurable interest must exist at the time of loss. The insured must own or have a financial stake in the property when it is damaged to collect on a claim.",
    category: "Insurance Principles"
  },
  {
    id: 104,
    question: "What is 'utmost good faith' (uberrimae fidei) in insurance?",
    options: [
      "The insurer always pays claims",
      "Both parties are entitled to rely on the honesty and complete disclosure of the other",
      "Faith-based insurance",
      "Maximum coverage limits"
    ],
    correctAnswer: 1,
    explanation: "Insurance contracts are based on utmost good faith, meaning both the insurer and insured must deal honestly, disclose all material facts, and not conceal information that affects the risk.",
    category: "Insurance Principles"
  },
  {
    id: 105,
    question: "What is 'subrogation'?",
    options: [
      "Canceling a policy",
      "The insurer's right to recover from a negligent third party after paying a claim",
      "Adding coverage",
      "Transferring policies"
    ],
    correctAnswer: 1,
    explanation: "Subrogation allows the insurer to 'step into the shoes' of the insured and pursue recovery from negligent third parties who caused the loss, after paying the insured's claim.",
    category: "Insurance Principles"
  },
  {
    id: 106,
    question: "What does the principle of 'indemnity' mean?",
    options: [
      "Insurance pays more than the loss",
      "Insurance restores the insured to the same financial position as before the loss, no better or worse",
      "Insurance always pays replacement cost",
      "Insurance covers all losses"
    ],
    correctAnswer: 1,
    explanation: "Indemnity means insurance aims to restore the insured to their approximate financial position before the loss - no profit, no loss. The insured should not gain financially from insurance.",
    category: "Insurance Principles"
  },
  {
    id: 107,
    question: "What is 'actual cash value' (ACV)?",
    options: [
      "Original purchase price",
      "Replacement cost minus depreciation",
      "Market value only",
      "Insured's opinion of value"
    ],
    correctAnswer: 1,
    explanation: "Actual cash value is replacement cost minus depreciation for age, wear, and tear. It represents the fair market value of the property at the time of loss.",
    category: "Insurance Principles"
  },
  {
    id: 108,
    question: "What is 'replacement cost'?",
    options: [
      "What the insured paid originally",
      "Cost to replace with new property of like kind and quality, without depreciation",
      "Market value",
      "Always higher than policy limits"
    ],
    correctAnswer: 1,
    explanation: "Replacement cost is the amount needed to replace damaged property with new property of like kind and quality, without any deduction for depreciation.",
    category: "Insurance Principles"
  },
  {
    id: 109,
    question: "What is 'coinsurance' in property insurance?",
    options: [
      "Two people insuring the same property",
      "A requirement to insure property to a specified percentage of value to avoid a penalty",
      "The deductible amount",
      "Shared liability coverage"
    ],
    correctAnswer: 1,
    explanation: "Coinsurance requires the insured to maintain coverage equal to a specified percentage (typically 80%) of the property's value. Underinsuring results in a penalty where the insured becomes a co-insurer.",
    category: "Insurance Principles"
  },
  {
    id: 110,
    question: "What is a 'peril'?",
    options: [
      "The property insured",
      "The cause of loss (fire, windstorm, theft)",
      "The amount of coverage",
      "The insurance company"
    ],
    correctAnswer: 1,
    explanation: "A peril is the cause of loss or damage, such as fire, windstorm, theft, vandalism, or hail. Insurance policies either name covered perils or cover all perils except those excluded.",
    category: "Insurance Principles"
  },
  {
    id: 111,
    question: "What is a 'hazard'?",
    options: [
      "The same as a peril",
      "A condition that increases the likelihood or severity of a loss",
      "The premium amount",
      "A type of coverage"
    ],
    correctAnswer: 1,
    explanation: "A hazard is a condition that increases the chance of loss or the potential severity of a loss. Examples include icy sidewalks (physical hazard) or carelessness (morale hazard).",
    category: "Insurance Principles"
  },
  {
    id: 112,
    question: "What is 'proximate cause'?",
    options: [
      "The location of the loss",
      "The dominant cause of loss that sets in motion an unbroken chain of events",
      "The nearest fire station",
      "The first responder"
    ],
    correctAnswer: 1,
    explanation: "Proximate cause is the dominant or efficient cause of loss that sets other events in motion in a natural, unbroken sequence, producing the loss without other intervening causes.",
    category: "Insurance Principles"
  },
  {
    id: 113,
    question: "What are the three types of hazards?",
    options: [
      "Fire, water, and wind",
      "Physical, moral, and morale",
      "Small, medium, and large",
      "Natural, man-made, and accidental"
    ],
    correctAnswer: 1,
    explanation: "The three types of hazards are: Physical (tangible conditions like icy steps), Moral (dishonesty/intent to cause loss), and Morale (carelessness/indifference to loss).",
    category: "Insurance Principles"
  },
  {
    id: 114,
    question: "What is 'adverse selection'?",
    options: [
      "The insurer denying all claims",
      "The tendency for higher-risk individuals to seek insurance",
      "Poor investment choices",
      "Canceling policies"
    ],
    correctAnswer: 1,
    explanation: "Adverse selection occurs when those most likely to suffer a loss are more likely to purchase insurance, creating an imbalance in the risk pool. Insurers combat this through underwriting.",
    category: "Insurance Principles"
  },
  {
    id: 115,
    question: "What is the 'law of large numbers'?",
    options: [
      "More coverage is always better",
      "The larger the sample size, the more predictable the loss experience",
      "Large properties cost more to insure",
      "Big companies pay more claims"
    ],
    correctAnswer: 1,
    explanation: "The law of large numbers states that as the number of exposure units increases, actual loss experience becomes more predictable and approaches the expected loss. This is the foundation of insurance.",
    category: "Insurance Principles"
  },
  {
    id: 116,
    question: "What is 'risk transfer'?",
    options: [
      "Moving property to a safer location",
      "Shifting the financial burden of loss from the insured to the insurer",
      "Canceling a policy",
      "Increasing deductibles"
    ],
    correctAnswer: 1,
    explanation: "Risk transfer occurs when the insured shifts the financial consequences of potential losses to the insurance company by purchasing a policy and paying premiums.",
    category: "Insurance Principles"
  },
  {
    id: 117,
    question: "What is 'retention' as a risk management technique?",
    options: [
      "Buying more insurance",
      "Accepting and bearing the financial consequences of loss (self-insurance)",
      "Transferring all risk",
      "Avoiding all activities"
    ],
    correctAnswer: 1,
    explanation: "Retention means the individual or business accepts responsibility for losses and bears the financial consequences. Examples include deductibles, self-insurance, and going without insurance.",
    category: "Insurance Principles"
  },
  {
    id: 118,
    question: "What is 'avoidance' as a risk management technique?",
    options: [
      "Buying insurance",
      "Eliminating a risk by not engaging in the activity",
      "Ignoring risks",
      "Reducing losses"
    ],
    correctAnswer: 1,
    explanation: "Avoidance eliminates risk by not engaging in the activity that creates the risk. For example, not owning a swimming pool avoids the liability risk associated with pool ownership.",
    category: "Insurance Principles"
  },
  {
    id: 119,
    question: "What is 'reduction' (loss control) as a risk management technique?",
    options: [
      "Lowering insurance premiums",
      "Taking measures to reduce the frequency or severity of losses",
      "Canceling coverage",
      "Transferring risk"
    ],
    correctAnswer: 1,
    explanation: "Reduction involves taking steps to minimize the frequency or severity of losses, such as installing sprinklers, burglar alarms, or safety training programs.",
    category: "Insurance Principles"
  },
  {
    id: 120,
    question: "What is a 'binder' in insurance?",
    options: [
      "The policy folder",
      "Temporary evidence of coverage until the policy is issued",
      "The underwriter's notes",
      "The claims history"
    ],
    correctAnswer: 1,
    explanation: "A binder is a temporary contract that provides immediate coverage until the formal policy is issued. It contains essential terms including coverage, limits, and effective date.",
    category: "Insurance Principles"
  },
  {
    id: 121,
    question: "What is the 'declarations page' of an insurance policy?",
    options: [
      "The legal disclaimers",
      "A summary of who/what is insured, coverage limits, premiums, and policy period",
      "The exclusions section",
      "The definitions"
    ],
    correctAnswer: 1,
    explanation: "The declarations page (dec page) provides a summary of key policy information including the insured's name, covered property, coverage limits, premiums, deductibles, and policy period.",
    category: "Insurance Principles"
  },
  {
    id: 122,
    question: "What are 'conditions' in an insurance policy?",
    options: [
      "Weather-related exclusions",
      "Duties and obligations of both the insured and insurer",
      "Types of coverage",
      "Premium payment options"
    ],
    correctAnswer: 1,
    explanation: "Policy conditions outline the rights and duties of both parties, such as reporting claims promptly, cooperating with investigations, and paying premiums on time.",
    category: "Insurance Principles"
  },
  {
    id: 123,
    question: "What are 'exclusions' in an insurance policy?",
    options: [
      "Discounts available",
      "Perils, property, or situations not covered by the policy",
      "Additional coverages",
      "Optional endorsements"
    ],
    correctAnswer: 1,
    explanation: "Exclusions specify what is NOT covered under the policy - certain perils (flood, earthquake), property (aircraft, business property), or situations (intentional acts, war).",
    category: "Insurance Principles"
  },
  {
    id: 124,
    question: "What is an 'endorsement'?",
    options: [
      "The agent's signature",
      "A written modification that adds, deletes, or changes coverage in the policy",
      "An insurance license",
      "A claim approval"
    ],
    correctAnswer: 1,
    explanation: "An endorsement (also called a rider) is a written document that modifies the insurance policy by adding, deleting, or changing coverage terms. It becomes part of the policy.",
    category: "Insurance Principles"
  },
  {
    id: 125,
    question: "What is 'named perils' coverage?",
    options: [
      "Coverage for specific listed individuals",
      "Coverage only for perils specifically listed in the policy",
      "Liability coverage",
      "All-risk coverage"
    ],
    correctAnswer: 1,
    explanation: "Named perils coverage provides protection only for the specific perils (causes of loss) that are listed in the policy, such as fire, lightning, windstorm, hail, theft, etc.",
    category: "Insurance Principles"
  },
  {
    id: 126,
    question: "What is 'open perils' (special form) coverage?",
    options: [
      "No exclusions apply",
      "Coverage for all causes of loss except those specifically excluded",
      "Named perils only",
      "Unlimited coverage"
    ],
    correctAnswer: 1,
    explanation: "Open perils (all-risk or special form) coverage protects against all causes of loss EXCEPT those specifically excluded in the policy, providing broader protection than named perils.",
    category: "Insurance Principles"
  },
  {
    id: 127,
    question: "What is 'occurrence' coverage in liability insurance?",
    options: [
      "Coverage only for events that happen once",
      "Coverage for accidents that occur during the policy period, regardless of when claims are filed",
      "Coverage for repeated events",
      "No coverage for accidents"
    ],
    correctAnswer: 1,
    explanation: "Occurrence coverage provides liability protection for accidents that occur during the policy period, even if the claim is filed years later after the policy has expired.",
    category: "Insurance Principles"
  },
  {
    id: 128,
    question: "What is 'pro rata' cancellation?",
    options: [
      "No refund given",
      "Premium refund calculated based on exact time coverage was in force",
      "Full premium refunded",
      "Penalty charged for cancellation"
    ],
    correctAnswer: 1,
    explanation: "Pro rata cancellation returns unearned premium based on the exact time the policy was in force. If the insurer cancels, it's pro rata. Example: 6 months of a 12-month policy = 50% refund.",
    category: "Insurance Principles"
  },
  {
    id: 129,
    question: "What is 'short-rate' cancellation?",
    options: [
      "Immediate cancellation",
      "Premium refund with a penalty when the insured cancels",
      "Full refund",
      "Insurer-initiated cancellation"
    ],
    correctAnswer: 1,
    explanation: "Short-rate cancellation applies when the insured cancels the policy. The refund is less than pro rata, including a penalty to cover the insurer's administrative costs.",
    category: "Insurance Principles"
  },
  {
    id: 130,
    question: "What is the purpose of a deductible?",
    options: [
      "Increase coverage limits",
      "Reduce premiums and eliminate small claims, making the insured a co-insurer for small losses",
      "Provide rebates",
      "Extend the policy period"
    ],
    correctAnswer: 1,
    explanation: "Deductibles reduce premiums by eliminating small claims and encouraging loss prevention. The insured pays the deductible amount, and the insurer pays the remainder of covered losses.",
    category: "Insurance Principles"
  },
  {
    id: 131,
    question: "What is a 'waiver'?",
    options: [
      "An increase in coverage",
      "Voluntarily giving up a known right",
      "A type of claim",
      "An insurance application"
    ],
    correctAnswer: 1,
    explanation: "A waiver is the voluntary, intentional relinquishment of a known right. For example, an insurer may waive a policy condition if it accepts late premium payment without consequences.",
    category: "Insurance Principles"
  },
  {
    id: 132,
    question: "What is 'estoppel' in insurance?",
    options: [
      "Canceling coverage",
      "Preventing a party from denying something previously stated or implied",
      "Adding coverage",
      "Premium calculation"
    ],
    correctAnswer: 1,
    explanation: "Estoppel prevents a party from contradicting previous statements or actions that another party relied upon. Example: If an insurer led the insured to believe coverage exists, estoppel may prevent denial.",
    category: "Insurance Principles"
  },
  {
    id: 133,
    question: "What is 'concealment' in insurance?",
    options: [
      "Privacy protection",
      "Failure to disclose known material facts",
      "Hiding damaged property",
      "A type of coverage"
    ],
    correctAnswer: 1,
    explanation: "Concealment is intentionally withholding or hiding material facts that would affect the insurer's decision to issue a policy or the premium charged. It can void coverage.",
    category: "Insurance Principles"
  },
  {
    id: 134,
    question: "What is 'misrepresentation' in insurance?",
    options: [
      "False advertising",
      "Providing false or misleading information on an application",
      "Incorrect claim amount",
      "Policy errors"
    ],
    correctAnswer: 1,
    explanation: "Misrepresentation is providing false, incomplete, or misleading information on an insurance application. Material misrepresentation (affecting risk or premium) can void the policy.",
    category: "Insurance Principles"
  },
  {
    id: 135,
    question: "What is 'material fact' in underwriting?",
    options: [
      "Information about building materials",
      "Information that would influence an underwriter's decision to accept risk or determine premium",
      "Physical property characteristics",
      "The policy fabric"
    ],
    correctAnswer: 1,
    explanation: "A material fact is any information that would affect an underwriter's decision to accept the risk, set the premium, or determine policy terms. Material facts must be disclosed.",
    category: "Insurance Principles"
  },
  {
    id: 136,
    question: "What is the purpose of underwriting?",
    options: [
      "Writing policies",
      "Evaluating and selecting risks to ensure profitable operation",
      "Paying claims",
      "Marketing insurance"
    ],
    correctAnswer: 1,
    explanation: "Underwriting is the process of evaluating risks, selecting which to insure, classifying them appropriately, and determining proper premiums to ensure the insurer's profitability and solvency.",
    category: "Insurance Principles"
  },
  {
    id: 137,
    question: "What is 'salvage' in property insurance?",
    options: [
      "Covered property destroyed in a loss",
      "Damaged property the insurer takes ownership of after paying a claim",
      "Property saved from a loss",
      "Recovered stolen property"
    ],
    correctAnswer: 1,
    explanation: "Salvage is the damaged property remaining after a loss that the insurer takes title to after paying a total loss claim. The insurer may sell the salvage to reduce claim costs.",
    category: "Insurance Principles"
  },
  {
    id: 138,
    question: "What is a 'reservation of rights' letter?",
    options: [
      "A policy renewal notice",
      "Notification from the insurer that it will defend a claim but may deny coverage later",
      "A premium increase notice",
      "A claim approval"
    ],
    correctAnswer: 1,
    explanation: "A reservation of rights letter informs the insured that the insurer will investigate or defend a claim but reserves the right to deny coverage if investigation reveals the claim is not covered.",
    category: "Insurance Principles"
  },
  {
    id: 139,
    question: "What does 'first-party coverage' mean?",
    options: [
      "Coverage for the named insured",
      "Coverage for the insured's own property or injuries (e.g., collision, comprehensive)",
      "Liability coverage",
      "Medical payments to others"
    ],
    correctAnswer: 1,
    explanation: "First-party coverage protects the insured's own property or person, such as collision, comprehensive, medical payments, and homeowners property coverage.",
    category: "Insurance Principles"
  },
  {
    id: 140,
    question: "What does 'third-party coverage' mean?",
    options: [
      "Three insureds on one policy",
      "Liability coverage that protects against claims by others",
      "Additional coverage",
      "Excess coverage"
    ],
    correctAnswer: 1,
    explanation: "Third-party coverage is liability insurance that protects the insured against claims made by others (third parties) for bodily injury or property damage the insured causes.",
    category: "Insurance Principles"
  },

  // COMMERCIAL INSURANCE & ADDITIONAL TOPICS (60 questions)
  {
    id: 141,
    question: "What is workers' compensation insurance?",
    options: [
      "Health insurance for workers",
      "Mandatory coverage providing benefits to employees injured on the job, regardless of fault",
      "Unemployment insurance",
      "Retirement benefits"
    ],
    correctAnswer: 1,
    explanation: "Workers' compensation is a no-fault system that provides medical benefits, wage replacement, and death benefits to employees injured or killed in the course of employment.",
    category: "Commercial Insurance"
  },
  {
    id: 142,
    question: "In Virginia, at what employee threshold is workers' compensation insurance generally required?",
    options: [
      "1 or more employees",
      "2 or more employees",
      "More than 2 (3 or more) employees",
      "5 or more employees"
    ],
    correctAnswer: 2,
    explanation: "Virginia generally requires workers' compensation insurance when a business regularly employs more than two employees (3 or more), though some exceptions and special rules apply.",
    category: "Commercial Insurance"
  },
  {
    id: 143,
    question: "What does 'professional liability' insurance cover?",
    options: [
      "General business liability",
      "Liability for negligent professional services or advice (errors & omissions)",
      "Product defects",
      "Auto accidents"
    ],
    correctAnswer: 1,
    explanation: "Professional liability (E&O - Errors & Omissions) insurance covers liability arising from negligent professional services, errors, mistakes, or failure to perform professional duties.",
    category: "Commercial Insurance"
  },
  {
    id: 144,
    question: "What is a 'Commercial General Liability' (CGL) policy?",
    options: [
      "Auto liability for businesses",
      "Broad liability coverage for businesses including premises, operations, and products",
      "Workers' compensation",
      "Property insurance"
    ],
    correctAnswer: 1,
    explanation: "The CGL policy provides broad liability coverage for businesses including bodily injury and property damage arising from premises, operations, products, and completed operations.",
    category: "Commercial Insurance"
  },
  {
    id: 145,
    question: "What is 'products liability' coverage?",
    options: [
      "Insuring products in inventory",
      "Liability for injury or damage caused by products manufactured or sold",
      "Theft of products",
      "Product warranties"
    ],
    correctAnswer: 1,
    explanation: "Products liability coverage protects manufacturers, distributors, and sellers against claims for bodily injury or property damage caused by their products.",
    category: "Commercial Insurance"
  },
  {
    id: 146,
    question: "What is 'completed operations' coverage?",
    options: [
      "Covers work in progress",
      "Liability for injury or damage arising from completed work after the contractor leaves",
      "Property insurance",
      "Employee injuries"
    ],
    correctAnswer: 1,
    explanation: "Completed operations coverage protects contractors and service providers against liability for injury or damage that occurs after they complete work and leave the premises.",
    category: "Commercial Insurance"
  },
  {
    id: 147,
    question: "What is a 'Business Owners Policy' (BOP)?",
    options: [
      "Life insurance for business owners",
      "A package policy combining property, liability, and business income coverage for small businesses",
      "Workers' compensation",
      "Key person insurance"
    ],
    correctAnswer: 1,
    explanation: "A BOP is a package policy designed for small to medium-sized businesses that combines property, general liability, and business income coverage at a reduced premium.",
    category: "Commercial Insurance"
  },
  {
    id: 148,
    question: "What does 'business income' (business interruption) insurance cover?",
    options: [
      "Daily operating expenses",
      "Lost income and continuing expenses when business is suspended due to a covered loss",
      "Employee salaries only",
      "Marketing costs"
    ],
    correctAnswer: 1,
    explanation: "Business income insurance covers lost net income and continuing expenses when a covered property loss forces a business to suspend operations. It helps maintain financial stability during recovery.",
    category: "Commercial Insurance"
  },
  {
    id: 149,
    question: "What is 'extra expense' coverage?",
    options: [
      "Additional advertising costs",
      "Covers extra costs to continue operations after a covered loss",
      "Overtime pay",
      "Equipment upgrades"
    ],
    correctAnswer: 1,
    explanation: "Extra expense coverage pays additional costs incurred to continue business operations following a covered loss, such as renting temporary facilities or equipment.",
    category: "Commercial Insurance"
  },
  {
    id: 150,
    question: "What is 'bailees customers' insurance?",
    options: [
      "Landlord liability",
      "Covers customer property in the care, custody, or control of a business (dry cleaners, repair shops)",
      "Employee property",
      "Business inventory"
    ],
    correctAnswer: 1,
      "explanation": "Bailees customers insurance covers a business's legal liability for damage to customers' property while in the business's care, custody, or control, such as clothing at a dry cleaner or vehicles at a repair shop.",
    category: "Commercial Insurance"
  },
  {
    id: 151,
    question: "What is 'garage liability' insurance?",
    options: [
      "Personal auto liability",
      "Specialized coverage for auto dealers, repair shops, and parking facilities",
      "Homeowners garage coverage",
      "Storage unit insurance"
    ],
    correctAnswer: 1,
    explanation: "Garage liability provides coverage for businesses in the auto business, including dealers, repair shops, and service stations, covering both operations and autos.",
    category: "Commercial Insurance"
  },
  {
    id: 152,
    question: "What is 'inland marine' insurance?",
    options: [
      "Ocean cargo insurance",
      "Coverage for movable property, goods in transit, instrumentalities of transportation",
      "Boat insurance on lakes",
      "Marine life coverage"
    ],
    correctAnswer: 1,
    explanation: "Inland marine insurance covers movable property, property in transit, instrumentalities of transportation (bridges, tunnels), and property of certain dealers (jewelers, furriers).",
    category: "Commercial Insurance"
  },
  {
    id: 153,
    question: "What does 'builders risk' insurance cover?",
    options: [
      "Contractor liability",
      "Property insurance for buildings under construction",
      "Architect errors",
      "Worker injuries"
    ],
    correctAnswer: 1,
    explanation: "Builders risk insurance provides property coverage for buildings under construction or renovation, protecting against damage from covered perils during the construction period.",
    category: "Commercial Insurance"
  },
  {
    id: 154,
    question: "What is a 'surety bond'?",
    options: [
      "Insurance policy",
      "A three-party agreement guaranteeing performance or payment",
      "Retirement plan",
      "Investment"
    ],
    correctAnswer: 1,
    explanation: "A surety bond is a three-party agreement where the surety guarantees the principal's performance or payment to the obligee. If the principal defaults, the surety must perform or compensate.",
    category: "Commercial Insurance"
  },
  {
    id: 155,
    question: "What is 'employment practices liability' (EPL) insurance?",
    options: [
      "Workers' compensation",
      "Covers claims of discrimination, harassment, wrongful termination by employees",
      "General liability",
      "Professional liability"
    ],
    correctAnswer: 1,
    explanation: "EPL insurance protects employers against employee claims of discrimination, sexual harassment, wrongful termination, retaliation, and other employment-related issues.",
    category: "Commercial Insurance"
  },
  {
    id: 156,
    question: "What is 'cyber liability' insurance?",
    options: [
      "Computer equipment coverage",
      "Coverage for data breaches, cyber attacks, and privacy violations",
      "Internet service interruption",
      "Website hosting"
    ],
    correctAnswer: 1,
    explanation: "Cyber liability insurance covers losses from data breaches, cyber attacks, privacy violations, and related expenses including notification costs, credit monitoring, and legal defense.",
    category: "Commercial Insurance"
  },
  {
    id: 157,
    question: "What is 'umbrella liability' coverage?",
    options: [
      "Weather-related coverage",
      "Excess liability coverage above underlying policies",
      "Property coverage",
      "Auto coverage only"
    ],
    correctAnswer: 1,
    explanation: "Umbrella liability provides excess liability coverage above underlying policies (auto, homeowners, CGL) and may also cover some claims excluded by underlying policies, subject to a self-insured retention.",
    category: "Commercial Insurance"
  },
  {
    id: 158,
    question: "What is the difference between 'occurrence' and 'claims-made' coverage?",
    options: [
      "No difference",
      "Occurrence covers accidents during policy period regardless of when claimed; claims-made requires both accident and claim during policy period",
      "Claims-made is broader",
      "Only applies to property coverage"
    ],
    correctAnswer: 1,
    explanation: "Occurrence coverage responds to accidents that occur during the policy period, whenever the claim is made. Claims-made coverage requires both the incident and claim to occur during the policy period or extended reporting period.",
    category: "Commercial Insurance"
  },
  {
    id: 159,
    question: "What is an 'extended reporting period' (tail coverage)?",
    options: [
      "Extension of property coverage",
      "Extends time to report claims for incidents that occurred during a claims-made policy",
      "Longer policy period",
      "Auto coverage extension"
    ],
    correctAnswer: 1,
    explanation: "An extended reporting period (tail) allows an insured to report claims after a claims-made policy expires for incidents that occurred during the policy period, providing continued protection.",
    category: "Commercial Insurance"
  },
  {
    id: 160,
    question: "What does 'directors and officers' (D&O) liability insurance cover?",
    options: [
      "Property damage",
      "Personal liability of corporate directors and officers for wrongful acts in managing the company",
      "Workers' compensation",
      "General liability"
    ],
    correctAnswer: 1,
    explanation: "D&O insurance protects directors and officers from personal liability for alleged wrongful acts (errors, omissions, breach of duty) in managing the corporation.",
    category: "Commercial Insurance"
  },
  {
    id: 161,
    question: "What is 'boiler and machinery' (equipment breakdown) insurance?",
    options: [
      "General property coverage",
      "Coverage for breakdown of mechanical and electrical equipment",
      "Auto coverage",
      "Workers' compensation"
    ],
    correctAnswer: 1,
    explanation: "Boiler and machinery (now often called equipment breakdown) insurance covers sudden and accidental breakdown of mechanical and electrical equipment, including repair costs and business income loss.",
    category: "Commercial Insurance"
  },
  {
    id: 162,
    question: "What is 'crime insurance' (commercial crime coverage)?",
    options: [
      "Liability for criminal acts",
      "Covers employee theft, forgery, robbery, and other crimes against the business",
      "Bail bonds",
      "Legal defense"
    ],
    correctAnswer: 1,
    explanation: "Commercial crime insurance covers losses from employee dishonesty, forgery, theft, robbery, burglary, and other criminal acts against the business, both inside and outside premises.",
    category: "Commercial Insurance"
  },
  {
    id: 163,
    question: "What is 'fidelity bond' coverage?",
    options: [
      "Surety bond for contracts",
      "Covers employee dishonesty and theft",
      "Investment guarantee",
      "Loan insurance"
    ],
    correctAnswer: 1,
    explanation: "A fidelity bond protects employers against losses from employee dishonesty, theft, or embezzlement. It covers direct loss of money, securities, and property.",
    category: "Commercial Insurance"
  },
  {
    id: 164,
    question: "What is a 'liquor liability' policy?",
    options: [
      "Product liability",
      "Covers liability for businesses that serve or sell alcohol",
      "Property damage",
      "Auto liability"
    ],
    correctAnswer: 1,
    explanation: "Liquor liability insurance covers businesses that manufacture, sell, or serve alcoholic beverages against liability for injuries or damages caused by intoxicated patrons.",
    category: "Commercial Insurance"
  },
  {
    id: 165,
    question: "What does 'business personal property' include in commercial property insurance?",
    options: [
      "The building structure",
      "Furniture, equipment, inventory, supplies, and improvements owned by the tenant",
      "Land",
      "Vehicles"
    ],
    correctAnswer: 1,
    explanation: "Business personal property includes furniture, fixtures, equipment, inventory, stock, supplies, and tenant improvements and betterments. It does not include the building itself or land.",
    category: "Commercial Insurance"
  },
  {
    id: 166,
    question: "What is the 'coinsurance clause' in commercial property insurance?",
    options: [
      "The deductible",
      "Requires insuring property to a specified percentage (typically 80%) of value to avoid a penalty",
      "Shared ownership",
      "Premium calculation"
    ],
    correctAnswer: 1,
    explanation: "The coinsurance clause requires the insured to carry insurance equal to a specified percentage (80%, 90%, or 100%) of the property's value. Failure to do so results in a penalty where the insured becomes a co-insurer.",
    category: "Commercial Insurance"
  },
  {
    id: 167,
    question: "What is 'agreed value' coverage in property insurance?",
    options: [
      "The insurer decides the value",
      "The insurer and insured agree on property value, suspending the coinsurance clause",
      "Actual cash value",
      "Market value"
    ],
    correctAnswer: 1,
    explanation: "Agreed value coverage suspends the coinsurance clause. The insurer and insured agree on the property's value, and claims are paid based on that agreed value, eliminating penalty risk.",
    category: "Commercial Insurance"
  },
  {
    id: 168,
    question: "What is a 'Commercial Package Policy' (CPP)?",
    options: [
      "Life and health combination",
      "Customizable policy combining multiple commercial coverages",
      "Auto insurance only",
      "Workers' compensation"
    ],
    correctAnswer: 1,
    explanation: "A Commercial Package Policy allows businesses to combine multiple coverages (property, liability, crime, inland marine, etc.) into one policy with common declarations, conditions, and potentially lower premiums.",
    category: "Commercial Insurance"
  },
  {
    id: 169,
    question: "What does 'valuable papers' coverage insure?",
    options: [
      "Money and coins",
      "Cost to research and replace important documents and records",
      "Jewelry",
      "Securities"
    ],
    correctAnswer: 1,
    explanation: "Valuable papers and records coverage pays the cost to research, replace, or restore important business documents, records, and data that are lost or damaged.",
    category: "Commercial Insurance"
  },
  {
    id: 170,
    question: "What is 'accounts receivable' coverage?",
    options: [
      "Collection services",
      "Covers inability to collect from customers due to loss of records",
      "Bad debt expense",
      "Banking insurance"
    ],
    correctAnswer: 1,
    explanation: "Accounts receivable coverage pays for amounts the business cannot collect from customers due to destruction of records in a covered loss, plus collection costs and interest.",
    category: "Commercial Insurance"
  },
  {
    id: 171,
    question: "What is the purpose of a 'business income worksheet'?",
    options: [
      "Tax preparation",
      "Determines appropriate business income coverage limit",
      "Employee payroll",
      "Budget planning"
    ],
    correctAnswer: 1,
    explanation: "A business income worksheet helps calculate the proper amount of business income coverage by estimating potential lost net income and continuing expenses if operations were suspended.",
    category: "Commercial Insurance"
  },
  {
    id: 172,
    question: "What is 'spoilage coverage'?",
    options: [
      "Food safety inspection",
      "Covers loss of perishable goods due to equipment breakdown or power failure",
      "Product liability",
      "Waste disposal"
    ],
    correctAnswer: 1,
    explanation: "Spoilage coverage pays for loss of perishable goods (food, medicine, etc.) that spoil due to breakdown of refrigeration equipment or contamination from a covered cause of loss.",
    category: "Commercial Insurance"
  },
  {
    id: 173,
    question: "What is 'tenant improvements and betterments'?",
    options: [
      "Building renovations by owner",
      "Alterations, additions, or improvements made by a tenant to a rented building",
      "Landscaping",
      "Equipment purchases"
    ],
    correctAnswer: 1,
    explanation: "Tenant improvements and betterments are alterations, fixtures, or improvements made by a tenant at their expense to a building they do not own. These are covered as business personal property.",
    category: "Commercial Insurance"
  },
  {
    id: 174,
    question: "What is 'contingent business income' coverage?",
    options: [
      "Future income projections",
      "Covers lost income when a key supplier or customer suffers a covered loss",
      "Investment income",
      "Interest income"
    ],
    correctAnswer: 1,
    explanation: "Contingent business income coverage pays for income loss when a covered peril damages property of a key supplier, customer, or other business the insured depends on.",
    category: "Commercial Insurance"
  },
  {
    id: 175,
    question: "What is the 'hired and non-owned auto' endorsement?",
    options: [
      "Covers stolen vehicles",
      "Provides liability coverage for vehicles the business rents or employees use for business",
      "Physical damage coverage",
      "Passenger coverage"
    ],
    correctAnswer: 1,
    explanation: "Hired and non-owned auto coverage provides liability protection when the business uses rented vehicles or employees use their personal vehicles for business purposes.",
    category: "Commercial Insurance"
  },
  {
    id: 176,
    question: "What is 'medical payments' coverage under a CGL policy?",
    options: [
      "Employee health insurance",
      "Pays medical expenses for others injured on premises or by operations, regardless of fault",
      "Workers' compensation",
      "Liability coverage"
    ],
    correctAnswer: 1,
    explanation: "Medical payments coverage under a CGL policy pays reasonable medical expenses for others injured on the insured's premises or by the insured's operations, regardless of liability (typically $5,000 limit).",
    category: "Commercial Insurance"
  },
  {
    id: 177,
    question: "What does 'personal and advertising injury' cover under a CGL?",
    options: [
      "Physical injuries only",
      "False arrest, libel, slander, copyright infringement, invasion of privacy",
      "Property damage",
      "Auto accidents"
    ],
    correctAnswer: 1,
    explanation: "Personal and advertising injury coverage protects against non-physical injuries including false arrest, defamation (libel/slander), copyright infringement, invasion of privacy, and wrongful eviction.",
    category: "Commercial Insurance"
  },
  {
    id: 178,
    question: "What is 'fire legal liability' coverage?",
    options: [
      "Building owner's coverage",
      "Covers tenant's liability for fire damage to rented premises",
      "Arson investigation",
      "Fire department costs"
    ],
    correctAnswer: 1,
    explanation: "Fire legal liability coverage protects tenants against liability for fire damage to buildings or premises they rent or occupy, which would otherwise be excluded under the CGL policy.",
    category: "Commercial Insurance"
  },
  {
    id: 179,
    question: "What is 'incidental medical malpractice' coverage?",
    options: [
      "Full professional liability",
      "Limited coverage for minor medical services provided by non-medical businesses (first aid)",
      "Hospital insurance",
      "Doctor's E&O"
    ],
    correctAnswer: 1,
    explanation: "Incidental medical malpractice coverage provides limited protection for businesses that provide minor medical services (first aid, blood pressure checks) as an incidental part of their operations.",
    category: "Commercial Insurance"
  },
  {
    id: 180,
    question: "What is a 'schedule' in commercial insurance?",
    options: [
      "Premium payment plan",
      "A list of covered property, locations, or operations with specific values or limits",
      "Claims history",
      "Loss ratio"
    ],
    correctAnswer: 1,
    explanation: "A schedule is a detailed list attached to a policy showing specific covered items (buildings, locations, equipment) with individual values, descriptions, or limits for each.",
    category: "Commercial Insurance"
  },
  {
    id: 181,
    question: "What is 'ordinance or law' coverage in commercial property insurance?",
    options: [
      "Legal compliance costs",
      "Covers increased costs to rebuild to current codes after a covered loss",
      "Zoning disputes",
      "Building permits"
    ],
    correctAnswer: 1,
    explanation: "Ordinance or law coverage pays increased reconstruction costs due to enforcement of building codes, costs to demolish undamaged portions, and loss of undamaged value when rebuilding is required.",
    category: "Commercial Insurance"
  },
  {
    id: 182,
    question: "What is 'pollutant cleanup and removal' coverage?",
    options: [
      "Environmental liability",
      "Limited coverage for cleanup of pollutants at the covered premises",
      "Hazardous waste insurance",
      "EPA fines"
    ],
    correctAnswer: 1,
    explanation: "Pollutant cleanup and removal provides limited coverage (typically $10,000) for expenses to clean up pollutants at the insured's premises that result from a covered cause of loss.",
    category: "Commercial Insurance"
  },
  {
    id: 183,
    question: "What is the 'liberalization clause' in insurance policies?",
    options: [
      "Lower premiums",
      "Automatically provides broader coverage if the insurer revises forms during the policy period",
      "Flexible payment terms",
      "Extended policy period"
    ],
    correctAnswer: 1,
    explanation: "The liberalization clause automatically provides the insured with broader coverage if the insurer adopts broader forms or endorsements during the policy period, without additional premium.",
    category: "Commercial Insurance"
  },
  {
    id: 184,
    question: "What is 'peak season' endorsement in business income coverage?",
    options: [
      "Seasonal discounts",
      "Increases business income limit during high-revenue periods",
      "Holiday coverage",
      "Weather-related coverage"
    ],
    correctAnswer: 1,
    explanation: "A peak season endorsement automatically increases business income coverage limits during specified high-revenue periods (holiday season, harvest time) to match increased exposure.",
    category: "Commercial Insurance"
  },
  {
    id: 185,
    question: "What is 'joint loss agreement'?",
    options: [
      "Shared policy between partners",
      "Agreement between insurers on how to share payment of a loss covered by multiple policies",
      "Co-insurance",
      "Reinsurance"
    ],
    correctAnswer: 1,
    explanation: "A joint loss agreement is a contract between two or more insurers specifying how they will share the payment of losses when multiple policies cover the same property or risk.",
    category: "Commercial Insurance"
  },
  {
    id: 186,
    question: "What is a 'protective safeguard endorsement'?",
    options: [
      "Security services",
      "Requires the insured to maintain specified protective devices (sprinklers, alarms)",
      "Watchdog coverage",
      "Surveillance insurance"
    ],
    correctAnswer: 1,
    explanation: "A protective safeguard endorsement requires the insured to maintain specified safety systems (automatic sprinklers, burglar alarms, security guards). Failure to maintain them may result in reduced or denied claims.",
    category: "Commercial Insurance"
  },
  {
    id: 187,
    question: "What is 'blanket insurance'?",
    options: [
      "Covers everything",
      "One limit applies to multiple buildings, locations, or types of property",
      "Basic coverage",
      "Temporary insurance"
    ],
    correctAnswer: 1,
    explanation: "Blanket insurance applies a single limit to multiple buildings, locations, or types of property (building and contents), providing flexibility in claim settlement without individual item limits.",
    category: "Commercial Insurance"
  },
  {
    id: 188,
    question: "What is 'specific insurance'?",
    options: [
      "Named perils only",
      "Separate limits apply to each building, location, or type of property",
      "Specialty insurance",
      "High-value items"
    ],
    correctAnswer: 1,
    explanation: "Specific insurance applies separate limits to each individual building, location, or category of property listed in the policy, as opposed to one blanket limit covering multiple items.",
    category: "Commercial Insurance"
  },
  {
    id: 189,
    question: "What is 'per occurrence' limit in liability insurance?",
    options: [
      "Annual maximum",
      "Maximum the insurer will pay for all claims arising from a single accident or event",
      "Per person limit",
      "Deductible"
    ],
    correctAnswer: 1,
    explanation: "Per occurrence limit is the maximum amount the insurer will pay for all claims (multiple claimants) arising from a single accident, event, or occurrence, regardless of how many people are injured.",
    category: "Commercial Insurance"
  },
  {
    id: 190,
    question: "What is an 'aggregate limit' in liability insurance?",
    options: [
      "Per claim limit",
      "Maximum total amount the insurer will pay for all claims during the policy period",
      "Deductible total",
      "Premium cap"
    ],
    correctAnswer: 1,
    explanation: "The aggregate limit is the maximum total amount the insurer will pay for all covered claims during the entire policy period, regardless of the number of occurrences.",
    category: "Commercial Insurance"
  },
  {
    id: 191,
    question: "What is 'products-completed operations aggregate'?",
    options: [
      "Inventory coverage",
      "Separate aggregate limit for products and completed work liability",
      "Sales totals",
      "Manufacturing coverage"
    ],
    correctAnswer: 1,
    explanation: "The products-completed operations aggregate is a separate aggregate limit that applies specifically to liability arising from products manufactured/sold or work completed and turned over to others.",
    category: "Commercial Insurance"
  },
  {
    id: 192,
    question: "What is a 'buffer layer' in excess liability coverage?",
    options: [
      "Protective endorsement",
      "An intermediate layer of excess coverage between underlying policy and umbrella",
      "Deductible",
      "Self-insured retention"
    ],
    correctAnswer: 1,
    explanation: "A buffer layer is an intermediate excess liability policy that sits between the primary/underlying coverage and the umbrella policy, providing additional limits before the umbrella attaches.",
    category: "Commercial Insurance"
  },
  {
    id: 193,
    question: "What is 'follow form' excess coverage?",
    options: [
      "Copies the application",
      "Excess policy that follows the terms and conditions of the underlying policy",
      "Sequential coverage",
      "Tracking forms"
    ],
    correctAnswer: 1,
    explanation: "Follow form excess coverage adopts the same terms, conditions, and exclusions as the underlying policy, providing additional limits above the primary without changing coverage grants.",
    category: "Commercial Insurance"
  },
  {
    id: 194,
    question: "What is 'drop down' coverage in an umbrella policy?",
    options: [
      "Reduced limits",
      "Provides coverage below scheduled underlying limits if underlying policy doesn't cover the loss",
      "Falling object coverage",
      "Gravity-related claims"
    ],
    correctAnswer: 1,
    explanation: "Drop down coverage allows the umbrella to provide primary coverage (subject to a retention) for claims not covered by underlying policies, rather than only providing excess coverage.",
    category: "Commercial Insurance"
  },
  {
    id: 195,
    question: "What is a 'manuscript policy'?",
    options: [
      "Handwritten policy",
      "Custom-drafted policy for unique or complex risks",
      "Standard form",
      "Draft policy"
    ],
    correctAnswer: 1,
    explanation: "A manuscript policy is a custom-drafted insurance contract tailored to the specific needs and risks of a particular insured, rather than using standardized forms.",
    category: "Commercial Insurance"
  },
  {
    id: 196,
    question: "What does 'notice of occurrence' mean in claims-made coverage?",
    options: [
      "Claim filing",
      "Insured must report potential claims or circumstances that might give rise to claims",
      "Loss notification",
      "Premium notice"
    ],
    correctAnswer: 1,
    explanation: "Notice of occurrence provisions require the insured to report not just claims, but also circumstances or incidents that might reasonably result in a claim, to preserve coverage under claims-made policies.",
    category: "Commercial Insurance"
  },
  {
    id: 197,
    question: "What is 'fronting' in insurance?",
    options: [
      "First-party coverage",
      "An insurer issues a policy but reinsures most/all of the risk to another insurer",
      "Entrance coverage",
      "Premium advance"
    ],
    correctAnswer: 1,
    explanation: "Fronting occurs when a licensed insurer issues a policy (the 'fronting company') but transfers most or all of the risk to another insurer or captive through reinsurance.",
    category: "Commercial Insurance"
  },
  {
    id: 198,
    question: "What is a 'captive insurer'?",
    options: [
      "Insurance company in financial difficulty",
      "Insurance company owned by the businesses it insures",
      "Hostage insurance",
      "Forced placement"
    ],
    correctAnswer: 1,
    explanation: "A captive insurer is an insurance company established and owned by one or more non-insurance businesses to insure the risks of its parent companies, providing cost control and potential tax benefits.",
    category: "Commercial Insurance"
  },
  {
    id: 199,
    question: "What is 'self-insured retention' (SIR)?",
    options: [
      "The premium",
      "The amount the insured must pay before excess/umbrella coverage applies",
      "Saved premiums",
      "Policy limit"
    ],
    correctAnswer: 1,
    explanation: "SIR is similar to a deductible but typically larger. The insured must pay this amount (including defense costs) before excess or umbrella liability coverage begins to pay.",
    category: "Commercial Insurance"
  },
  {
    id: 200,
    question: "What is the difference between 'primary' and 'excess' insurance?",
    options: [
      "No difference",
      "Primary pays first up to its limits; excess pays above primary limits",
      "Excess is more expensive",
      "Primary is optional"
    ],
    correctAnswer: 1,
    explanation: "Primary insurance responds first to a covered loss up to its policy limits. Excess insurance provides additional coverage above the primary limits once the primary policy is exhausted.",
    category: "Commercial Insurance"
  }
];
