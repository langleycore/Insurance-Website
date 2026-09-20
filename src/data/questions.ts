export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
}

export const questions: Question[] = [
  // INSURANCE REGULATION (36 questions - 18% of 200)
  {
    id: 1,
    question: "What is the minimum passing score required for the Virginia Personal Lines exam (Series 11-07)?",
    options: [
      "65% of scored questions only",
      "70% of all 105 questions",
      "70% of the 100 scored questions",
      "75% excluding pretest items"
    ],
    correctAnswer: 2,
    explanation: "The exam requires 70% on the 100 scored questions only. The 5 pretest items are not included in scoring. Total exam has 105 questions but passing is based on 100.",
    category: "Virginia Regulation"
  },
  {
    id: 2,
    question: "Virginia requires continuing education for license renewal. Which statement is TRUE regarding CE requirements?",
    options: [
      "16 hours every 2 years, with at least 2 hours in ethics",
      "16 hours every 2 years, including exactly 3 hours of ethics",
      "12 hours annually, including 3 hours of ethics",
      "24 hours every 2 years, with 4 hours of ethics"
    ],
    correctAnswer: 1,
    explanation: "Virginia requires exactly 16 CE hours every 2 years, with exactly 3 hours dedicated to ethics. Since February 1, 2026, no more than 12 CE hours may be completed in any 24-hour period.",
    category: "Virginia Regulation"
  },
  {
    id: 3,
    question: "An applicant fails the Virginia Personal Lines exam. What is the earliest they can retake it, and what is the fee?",
    options: [
      "Wait 24 hours, pay $35",
      "Wait 48 hours, pay $35",
      "Retake immediately, pay $50",
      "Wait 30 days, pay $35"
    ],
    correctAnswer: 0,
    explanation: "There is a 24-hour waiting period after a failed exam before retaking. The fee is $35 per attempt. No waiting period after passing, and no limit on attempts.",
    category: "Virginia Regulation"
  },
  {
    id: 4,
    question: "In Virginia, a resident insurance producer's license must be renewed:",
    options: [
      "Annually on the producer's birthday",
      "Every 2 years on the producer's birthday month",
      "Biennially on the last day of the birth month",
      "Every 24 months from the original issue date"
    ],
    correctAnswer: 2,
    explanation: "Virginia resident producer licenses expire biennially (every 2 years) on the last day of the licensee's birth month. This is different from some states that use the birthday itself.",
    category: "Virginia Regulation"
  },
  {
    id: 5,
    question: "A Virginia insurance producer moves to a new residential address. Within how many days must they notify the Bureau of Insurance?",
    options: [
      "15 days",
      "30 days",
      "45 days",
      "60 days"
    ],
    correctAnswer: 1,
    explanation: "Producers must notify the Bureau of Insurance within 30 days of any address change. This applies to both residential and business address changes.",
    category: "Virginia Regulation"
  },
  {
    id: 6,
    question: "Which of the following acts by an insurance producer would constitute rebating in Virginia?",
    options: [
      "Offering policy discounts approved by the insurer and filed with the state",
      "Returning 15% of the commission to the insured as a cash inducement",
      "Providing free policy delivery service to all clients equally",
      "Giving all clients a company-branded calendar worth $5"
    ],
    correctAnswer: 1,
    explanation: "Rebating is offering any valuable consideration not specified in the policy as an inducement to purchase. Returning commission to a client is illegal rebating. Items under $10 of nominal value are generally permitted.",
    category: "Virginia Regulation"
  },
  {
    id: 7,
    question: "A Virginia producer's license is revoked. How soon can they reapply for a new license?",
    options: [
      "Immediately with Bureau approval",
      "After 6 months",
      "After 1 year",
      "After 5 years or as specified by the Commissioner"
    ],
    correctAnswer: 3,
    explanation: "After revocation, a person cannot reapply for 5 years unless the Commissioner specifies a different period. Suspension is temporary; revocation is more severe and long-term.",
    category: "Virginia Regulation"
  },
  {
    id: 8,
    question: "In Virginia, which entity has the authority to examine insurance company records and financial condition?",
    options: [
      "The State Corporation Commission's Bureau of Insurance",
      "The Virginia Department of Financial Services",
      "The Governor's Office of Insurance Oversight",
      "The National Association of Insurance Commissioners (NAIC)"
    ],
    correctAnswer: 0,
    explanation: "The State Corporation Commission's Bureau of Insurance regulates insurance in Virginia, including examining insurers. The Commissioner has broad examination powers.",
    category: "Virginia Regulation"
  },
  {
    id: 9,
    question: "A Virginia resident producer's license has lapsed for 13 months. To reinstate, they must:",
    options: [
      "Pay back fees only, no exam required",
      "Complete CE hours for the lapsed period and pay fees",
      "Retake and pass the licensing exam",
      "Apply as a new applicant with exam and fingerprints"
    ],
    correctAnswer: 2,
    explanation: "If a license lapses for more than 12 months, the producer must retake and pass the licensing exam. Within 12 months, reinstatement without exam is possible with fees and CE.",
    category: "Virginia Regulation"
  },
  {
    id: 10,
    question: "Which of the following is TRUE about non-resident producer licenses in Virginia?",
    options: [
      "Must pass Virginia exam and complete Virginia CE",
      "Must pay higher fees than resident producers",
      "Receive reciprocal licensing if home state grants Virginia producers reciprocity",
      "Cannot sell personal lines, only commercial policies"
    ],
    correctAnswer: 2,
    explanation: "Virginia grants reciprocal licensing to non-residents from states that grant reciprocity to Virginia producers. No exam is required if licensed in good standing in home state.",
    category: "Virginia Regulation"
  },
  {
    id: 11,
    question: "A producer appointed by an insurer terminates employment. The insurer must notify the Commissioner within:",
    options: [
      "15 days",
      "30 days",
      "45 days",
      "60 days"
    ],
    correctAnswer: 1,
    explanation: "Insurers must notify the Commissioner within 30 days of terminating a producer's appointment. The notice must include reasons if for cause.",
    category: "Virginia Regulation"
  },
  {
    id: 12,
    question: "In Virginia, an insurance company that is incorporated in Virginia is classified as a:",
    options: [
      "Domestic insurer",
      "Foreign insurer",
      "Alien insurer",
      "Resident insurer"
    ],
    correctAnswer: 0,
    explanation: "Domestic insurers are incorporated in Virginia. Foreign insurers are from other U.S. states/territories. Alien insurers are from other countries.",
    category: "Virginia Regulation"
  },
  {
    id: 13,
    question: "Virginia law requires insurers to provide a notice of cancellation for a personal auto policy. For non-payment of premium, what is the MINIMUM notice period?",
    options: [
      "10 days",
      "15 days",
      "20 days",
      "30 days"
    ],
    correctAnswer: 1,
    explanation: "For non-payment, Virginia requires at least 15 days' notice. For other reasons during the first policy period: 45 days. After the first period: 45 days unless non-payment.",
    category: "Virginia Regulation"
  },
  {
    id: 14,
    question: "A producer represents an insurance transaction as a 'special deal not available to everyone.' This is an example of:",
    options: [
      "Effective marketing technique",
      "Twisting",
      "Misrepresentation",
      "Defamation"
    ],
    correctAnswer: 2,
    explanation: "Misrepresentation includes making false or misleading statements about policy terms, benefits, or availability. This creates false urgency and misleads the consumer.",
    category: "Virginia Regulation"
  },
  {
    id: 15,
    question: "In Virginia, the Uninsured Motorist (UM) coverage rejection must be:",
    options: [
      "Verbal with witness present",
      "In writing and signed by the named insured",
      "Electronically acknowledged via email",
      "Documented in the agent's notes only"
    ],
    correctAnswer: 1,
    explanation: "UM rejection must be in writing and signed by the named insured. Without written rejection, UM must be provided at least equal to liability limits (up to 25/50/20).",
    category: "Virginia Regulation"
  },
  {
    id: 16,
    question: "Virginia eliminated the Uninsured Motorist fee for most vehicles effective:",
    options: [
      "July 1, 2022",
      "January 1, 2023",
      "July 1, 2024",
      "January 1, 2025"
    ],
    correctAnswer: 2,
    explanation: "The $500 Uninsured Motorist (UMV) fee was eliminated effective July 1, 2024, for most vehicles. Previously, uninsured drivers could pay this fee in lieu of insurance.",
    category: "Virginia Regulation"
  },
  {
    id: 17,
    question: "A producer commingles personal funds with client premium payments. This is:",
    options: [
      "Acceptable if properly documented",
      "Allowed for amounts under $500",
      "Prohibited as it involves misuse of fiduciary funds",
      "Permitted only during the premium payment grace period"
    ],
    correctAnswer: 2,
    explanation: "Commingling personal or business funds with fiduciary funds (premiums or claims money) is strictly prohibited. Producers hold client funds in a fiduciary capacity.",
    category: "Virginia Regulation"
  },
  {
    id: 18,
    question: "Which statement is TRUE about temporary Virginia producer licenses?",
    options: [
      "Valid for 90 days and renewable once",
      "Valid for 180 days and non-renewable",
      "Valid for 1 year and must pass exam before expiration",
      "No longer issued in Virginia"
    ],
    correctAnswer: 1,
    explanation: "Temporary licenses are valid for 180 days and are not renewable. They're typically issued to allow continuation of business after a producer's death or disability.",
    category: "Virginia Regulation"
  },
  {
    id: 19,
    question: "An applicant for a Virginia insurance license must pass the exam with 70% and then:",
    options: [
      "Begin selling insurance immediately",
      "Wait for license approval, then secure appointment by an insurer",
      "Complete 8 hours of pre-licensing education",
      "Purchase errors and omissions insurance"
    ],
    correctAnswer: 1,
    explanation: "After passing the exam, the applicant must apply for and receive the license from the Bureau, then be appointed by an insurer before conducting business.",
    category: "Virginia Regulation"
  },
  {
    id: 20,
    question: "A Virginia insurer wishes to use a new personal auto rate. Before implementation, they must:",
    options: [
      "File rates and wait for Commissioner approval",
      "File rates and may use immediately unless disapproved",
      "Use rates immediately and file within 30 days",
      "Obtain prior written approval from the Bureau"
    ],
    correctAnswer: 1,
    explanation: "Virginia uses a 'file and use' system for most personal lines. Insurers file rates and may use them unless the Commissioner disapproves them within the statutory period.",
    category: "Virginia Regulation"
  },
  {
    id: 21,
    question: "Controlled business refers to insurance written on the producer's own interests or close relations. In Virginia, what percentage of controlled business is allowed?",
    options: [
      "Not allowed at all",
      "Up to 25% of total premiums",
      "Up to 33% of total premiums",
      "Any amount if properly disclosed"
    ],
    correctAnswer: 3,
    explanation: "Virginia does not prohibit controlled business, but it must be disclosed. Producers cannot be licensed solely to write controlled business without writing public business.",
    category: "Virginia Regulation"
  },
  {
    id: 22,
    question: "A consumer files a complaint with the Virginia Bureau of Insurance. The Bureau investigates and finds a violation. Which action can the Commissioner take?",
    options: [
      "Issue cease and desist orders only",
      "Impose fines up to $1,000 per violation",
      "Impose fines, suspend or revoke licenses, and issue cease and desist orders",
      "Refer to local police for criminal prosecution only"
    ],
    correctAnswer: 2,
    explanation: "The Commissioner has broad enforcement powers including monetary penalties (much higher than $1,000), license suspension/revocation, cease and desist orders, and may refer for criminal prosecution.",
    category: "Virginia Regulation"
  },
  {
    id: 23,
    question: "In Virginia, unfair discrimination in insurance means:",
    options: [
      "Charging different rates based on any factor",
      "Using credit scores in underwriting",
      "Making distinctions based on protected classes without actuarial justification",
      "Refusing to insure high-risk applicants"
    ],
    correctAnswer: 2,
    explanation: "Unfair discrimination means making distinctions not based on sound actuarial principles, particularly regarding race, religion, national origin. Rates must be based on legitimate risk factors.",
    category: "Virginia Regulation"
  },
  {
    id: 24,
    question: "After an insurance examination, the Commissioner issues a report. The insurer has how many days to request a hearing if they dispute the findings?",
    options: [
      "10 days",
      "20 days",
      "30 days",
      "60 days"
    ],
    correctAnswer: 2,
    explanation: "An insurer has 30 days from receiving the examination report to request a hearing. After the hearing or if no hearing is requested, the report becomes final.",
    category: "Virginia Regulation"
  },
  {
    id: 25,
    question: "Which conduct would be considered twisting?",
    options: [
      "Providing accurate comparison of two policies at client's request",
      "Making misleading comparisons to induce a client to lapse one policy and buy another",
      "Recommending policy cancellation when in client's best interest",
      "Suggesting a policy upgrade with better coverage"
    ],
    correctAnswer: 1,
    explanation: "Twisting is using misrepresentation or incomplete comparisons to induce someone to lapse, forfeit, or switch policies to the detriment of the insured. Honest comparisons are allowed.",
    category: "Virginia Regulation"
  },
  {
    id: 26,
    question: "Virginia requires errors and omissions (E&O) insurance for producers:",
    options: [
      "Yes, minimum $100,000 per occurrence",
      "Yes, minimum $250,000 aggregate annually",
      "Yes, but only for independent agents",
      "No, E&O is not mandatory in Virginia"
    ],
    correctAnswer: 3,
    explanation: "Virginia does not mandate E&O insurance for producers, though it's highly recommended. Some insurers require it for appointed agents.",
    category: "Virginia Regulation"
  },
  {
    id: 27,
    question: "A producer's license shows lines of authority. This indicates:",
    options: [
      "The geographic territory where the producer can sell",
      "The types of insurance the producer is authorized to sell",
      "The insurers the producer is appointed with",
      "The producer's level of experience and commission rate"
    ],
    correctAnswer: 1,
    explanation: "Lines of authority specify which types of insurance a producer is licensed to sell (e.g., personal lines, life, health). Different exams qualify for different lines.",
    category: "Virginia Regulation"
  },
  {
    id: 28,
    question: "In Virginia, an insurer must maintain minimum capital and surplus. For a stock property & casualty insurer, the minimum is:",
    options: [
      "$1 million capital, $1 million surplus",
      "$2 million capital, $2 million surplus",
      "$2.5 million capital, $2.5 million surplus",
      "$5 million capital, $5 million surplus"
    ],
    correctAnswer: 2,
    explanation: "Virginia requires stock P&C insurers to maintain at least $2.5 million in capital and $2.5 million in surplus ($5 million total). This ensures financial stability.",
    category: "Virginia Regulation"
  },
  {
    id: 29,
    question: "A producer uses highpressure tactics and makes exaggerated statements about policy benefits to close a sale. This may constitute:",
    options: [
      "Aggressive but legal salesmanship",
      "Coercion and misrepresentation",
      "Acceptable if the policy actually provides the benefits",
      "Twisting if replacing another policy"
    ],
    correctAnswer: 1,
    explanation: "Coercion (using force or threats) and misrepresentation (false statements about benefits) are both prohibited unfair trade practices, regardless of whether a replacement is involved.",
    category: "Virginia Regulation"
  },
  {
    id: 30,
    question: "Virginia's mandatory auto liability minimums are 25/50/20. This means:",
    options: [
      "$25,000 per person, $50,000 per accident for bodily injury; $20,000 property damage",
      "$25,000 total bodily injury, $50,000 property damage, $20,000 uninsured motorist",
      "$25,000 property damage, $50,000 collision, $20,000 comprehensive",
      "$25,000 per accident, $50,000 aggregate, $20,000 medical payments"
    ],
    correctAnswer: 0,
    explanation: "Virginia's financial responsibility law requires minimum liability of $25,000 per person for bodily injury, $50,000 per accident for bodily injury, and $20,000 for property damage (25/50/20).",
    category: "Virginia Regulation"
  },
  {
    id: 31,
    question: "An insured discovers their producer did not submit their premium payment to the insurer. Who is responsible for the coverage lapse?",
    options: [
      "The insured, because they chose the producer",
      "The producer and the insurer equally",
      "The producer, as the agent of the insurer",
      "The insurer, because it failed to notify the insured"
    ],
    correctAnswer: 2,
    explanation: "Producers act as agents of the insurer in most transactions. Premium received by the producer is considered received by the insurer. The producer's failure creates insurer liability.",
    category: "Virginia Regulation"
  },
  {
    id: 32,
    question: "A business entity wants to sell insurance in Virginia. It must:",
    options: [
      "Appoint an officer as the licensed producer",
      "Obtain a business entity license and designate a licensed individual producer",
      "Register with the Bureau but doesn't need its own license",
      "Have all employees obtain individual licenses"
    ],
    correctAnswer: 1,
    explanation: "Business entities must obtain a business entity license and designate a licensed individual producer responsible for compliance. Not all employees need licenses.",
    category: "Virginia Regulation"
  },
  {
    id: 33,
    question: "The Virginia Property Insurance Association (VPIA) provides:",
    options: [
      "Flood insurance for coastal properties",
      "Fire and extended coverage for property that cannot obtain coverage in the voluntary market",
      "Liability coverage for high-risk drivers",
      "Workers compensation for high-risk employers"
    ],
    correctAnswer: 1,
    explanation: "VPIA (formerly Virginia FAIR Plan) is the residual market for property insurance, providing fire and extended coverage for properties that cannot get coverage in the voluntary market.",
    category: "Virginia Regulation"
  },
  {
    id: 34,
    question: "A producer convicted of a felony involving dishonesty or breach of trust must:",
    options: [
      "Notify the Bureau within 10 days",
      "Notify the Bureau within 30 days",
      "Wait for the Bureau to discover it through background checks",
      "Report it only if the conviction relates to insurance"
    ],
    correctAnswer: 1,
    explanation: "Producers must report to the Commissioner within 30 days any criminal prosecution, conviction, or administrative action taken against them in any jurisdiction.",
    category: "Virginia Regulation"
  },
  {
    id: 35,
    question: "In Virginia, insurance rates must be:",
    options: [
      "The lowest possible to protect consumers",
      "Adequate, not excessive, and not unfairly discriminatory",
      "Identical for all insurers selling the same coverage",
      "Set by the Bureau of Insurance annually"
    ],
    correctAnswer: 1,
    explanation: "Virginia law requires rates to be adequate (to maintain insurer solvency), not excessive (not too high), and not unfairly discriminatory (based on sound actuarial principles).",
    category: "Virginia Regulation"
  },
  {
    id: 36,
    question: "An applicant for an insurance license in Virginia must submit:",
    options: [
      "Exam results only",
      "Exam results, application, and fees",
      "Exam results, application, fees, and fingerprints for background check",
      "Exam results and sponsorship from a licensed agent"
    ],
    correctAnswer: 2,
    explanation: "Virginia requires passing exam scores, completed application, appropriate fees, and fingerprints for FBI background check. No sponsorship is required.",
    category: "Virginia Regulation"
  },

  // GENERAL INSURANCE CONCEPTS (24 questions - 12% of 200)
  {
    id: 37,
    question: "The law of large numbers states that:",
    options: [
      "The larger the group, the more predictable the losses",
      "Large insurance companies are more profitable",
      "More policies mean lower premiums for everyone",
      "Large losses occur more frequently than small losses"
    ],
    correctAnswer: 0,
    explanation: "The law of large numbers is fundamental to insurance. As the number of exposure units increases, actual losses will more closely approximate expected losses, making them more predictable.",
    category: "General Principles"
  },
  {
    id: 38,
    question: "Which element is NOT required for a loss to be insurable?",
    options: [
      "The loss must be definite and measurable",
      "The loss must be catastrophic in nature",
      "The loss must be accidental or fortuitous",
      "The loss must not be catastrophic to the insurer"
    ],
    correctAnswer: 1,
    explanation: "Insurable losses must be definite, measurable, accidental, and not pose catastrophic risk to the insurer. The loss to the insured can be large, but it shouldn't threaten the insurer's solvency.",
    category: "General Principles"
  },
  {
    id: 39,
    question: "Adverse selection occurs when:",
    options: [
      "Agents select only the best risks for the company",
      "Persons most likely to have losses are most likely to seek insurance",
      "Insurers reject too many applications",
      "Premiums are set too low to cover expenses"
    ],
    correctAnswer: 1,
    explanation: "Adverse selection is when those most likely to suffer a loss are most likely to purchase insurance, creating a pool riskier than average. Underwriting helps combat adverse selection.",
    category: "General Principles"
  },
  {
    id: 40,
    question: "An insurable interest in property insurance exists when:",
    options: [
      "The insured would suffer financial loss if the property is damaged",
      "The insured has possession of the property",
      "The insured has an emotional attachment to the property",
      "The insured pays the insurance premium"
    ],
    correctAnswer: 0,
    explanation: "Insurable interest exists when the insured would suffer a direct financial loss from property damage or destruction. It must exist at the time of loss, and at policy inception.",
    category: "General Principles"
  },
  {
    id: 41,
    question: "The principle of indemnity means:",
    options: [
      "The insured receives the full policy limit for any loss",
      "The insured is restored to the same financial position as before the loss, no better",
      "The insured must be compensated immediately",
      "The insured receives replacement cost regardless of actual loss"
    ],
    correctAnswer: 1,
    explanation: "Indemnity means restoring the insured to their pre-loss financial position without profit or enrichment. Most property policies indemnify; some provide replacement cost or agreed value.",
    category: "General Principles"
  },
  {
    id: 42,
    question: "Subrogation allows the insurer to:",
    options: [
      "Cancel the policy after a loss",
      "Sue the insured for fraudulent claims",
      "Pursue recovery from a negligent third party after paying the insured's claim",
      "Reduce the claim payment if the insured was partially negligent"
    ],
    correctAnswer: 2,
    explanation: "Subrogation gives the insurer the right to recover from a third party responsible for the loss after paying the insured. The insured must not impair this right.",
    category: "General Principles"
  },
  {
    id: 43,
    question: "A contract of adhesion is one where:",
    options: [
      "Both parties negotiate all terms equally",
      "One party (insurer) writes the contract and the other (insured) must accept or reject it as written",
      "The insured has no obligations under the contract",
      "The contract automatically renews each year"
    ],
    correctAnswer: 1,
    explanation: "Insurance policies are contracts of adhesion—the insurer drafts them and the insured accepts or rejects without negotiation. Ambiguities are interpreted in favor of the insured.",
    category: "General Principles"
  },
  {
    id: 44,
    question: "For a contract to be valid, all of the following are required EXCEPT:",
    options: [
      "Offer and acceptance",
      "Consideration",
      "Equal bargaining power",
      "Legal purpose"
    ],
    correctAnswer: 2,
    explanation: "Valid contracts require offer/acceptance, consideration, competent parties, and legal purpose. Equal bargaining power is not required—insurance is a contract of adhesion.",
    category: "General Principles"
  },
  {
    id: 45,
    question: "The consideration clause in an insurance policy indicates:",
    options: [
      "The insurer's duty to investigate claims thoroughly",
      "The premium and statements in the application",
      "The insured's right to cancel at any time",
      "The amount of coverage provided"
    ],
    correctAnswer: 1,
    explanation: "Consideration is what each party gives. The insured's consideration is the premium plus statements in the application. The insurer's consideration is the promise to pay covered losses.",
    category: "General Principles"
  },
  {
    id: 46,
    question: "A warranty in an insurance policy is:",
    options: [
      "A guarantee that no losses will occur",
      "A statement that is guaranteed to be absolutely true; breach voids the policy",
      "A minor statement that does not affect coverage",
      "The same as a representation"
    ],
    correctAnswer: 1,
    explanation: "A warranty is a statement guaranteed to be true and becomes part of the contract. Any breach of warranty, even immaterial, can void coverage. Modern policies use few warranties.",
    category: "General Principles"
  },
  {
    id: 47,
    question: "Representations in an insurance application must be:",
    options: [
      "Absolutely and literally true in every detail",
      "True to the best of the applicant's knowledge and belief",
      "Verified by the insurer before the policy is issued",
      "Notarized to be valid"
    ],
    correctAnswer: 1,
    explanation: "Representations must be substantially true to the best of the applicant's knowledge. Material misrepresentations can void the policy, but minor inaccuracies do not.",
    category: "General Principles"
  },
  {
    id: 48,
    question: "Concealment in insurance means:",
    options: [
      "Failing to disclose a material fact that would affect the insurer's decision",
      "Hiding property in a safe place",
      "Not reporting small claims to avoid premium increases",
      "Using a policy for personal and business purposes"
    ],
    correctAnswer: 0,
    explanation: "Concealment is intentionally withholding material information. If the insurer would not have issued the policy or would have charged more had they known, the concealment is material.",
    category: "General Principles"
  },
  {
    id: 49,
    question: "A binder is:",
    options: [
      "The folder that holds all insurance documents",
      "A temporary agreement providing coverage until the policy is issued",
      "The signature page of the insurance contract",
      "A list of items covered under a floater policy"
    ],
    correctAnswer: 1,
    explanation: "A binder is temporary insurance, usually oral or written, that provides immediate coverage until the actual policy is issued or the binder expires.",
    category: "General Principles"
  },
  {
    id: 50,
    question: "The insurer's right to inspect the insured's property during the policy period is:",
    options: [
      "An absolute right at any time without notice",
      "A right reserved in the policy, but does not obligate the insurer to inspect",
      "Only available if the insured is suspected of fraud",
      "Granted only after a claim is filed"
    ],
    correctAnswer: 1,
    explanation: "Policies grant the insurer the right to inspect, but do not create a duty to inspect. Failure to inspect or discover hazards does not waive the insurer's policy rights.",
    category: "General Principles"
  },
  {
    id: 51,
    question: "Actual cash value (ACV) is typically calculated as:",
    options: [
      "Original cost minus depreciation",
      "Current market value",
      "Replacement cost minus depreciation",
      "Any of the above, depending on the circumstances"
    ],
    correctAnswer: 3,
    explanation: "ACV has no single definition. Courts may use replacement cost minus depreciation, market value, or other methods. It represents fair value at the time of loss, considering age and condition.",
    category: "General Principles"
  },
  {
    id: 52,
    question: "A loss that is the direct result of a covered peril is called:",
    options: [
      "A proximate cause loss",
      "An indirect loss",
      "A consequential loss",
      "A time element loss"
    ],
    correctAnswer: 0,
    explanation: "Proximate cause is the cause that sets in motion an unbroken chain of events leading to the loss. If a covered peril is the proximate cause, the loss is covered.",
    category: "General Principles"
  },
  {
    id: 53,
    question: "When two policies cover the same property and loss, and both contain other insurance clauses, the typical result is:",
    options: [
      "The first policy issued pays the entire loss",
      "Both policies pay the full amount, and the insured receives double recovery",
      "Each policy pays its pro-rata share based on policy limits",
      "Neither policy pays because of the conflict"
    ],
    correctAnswer: 2,
    explanation: "Most policies have 'other insurance' clauses requiring pro-rata sharing. Each insurer pays its proportionate share based on each policy's limit to the total of all limits.",
    category: "General Principles"
  },
  {
    id: 54,
    question: "The salvage clause in a property policy states that:",
    options: [
      "The insured must attempt to salvage property after a loss",
      "After paying a total loss, the insurer takes title to damaged property",
      "The insured receives extra payment for salvaged items",
      "Salvage operations void the policy"
    ],
    correctAnswer: 1,
    explanation: "When the insurer pays a total loss (100% of value), it typically takes title to the damaged property (salvage) and may recover some costs by selling it.",
    category: "General Principles"
  },
  {
    id: 55,
    question: "An insurance company's reinsurance is:",
    options: [
      "Insurance sold to customers who previously had coverage",
      "Insurance purchased by the insurer to transfer some of its risk",
      "Additional coverage sold with the primary policy",
      "The renewal of an expired policy"
    ],
    correctAnswer: 1,
    explanation: "Reinsurance is insurance for insurance companies. The primary insurer (ceding company) transfers part of its risk to a reinsurer to reduce exposure and stabilize results.",
    category: "General Principles"
  },
  {
    id: 56,
    question: "A material fact is one that:",
    options: [
      "Is included in the written policy",
      "Would affect the insurer's decision to accept the risk or the premium charged",
      "Concerns only physical property, not intangible items",
      "Is verified by an inspection"
    ],
    correctAnswer: 1,
    explanation: "A material fact would influence the insurer's decision on coverage or premium. Misrepresentation or concealment of material facts can void coverage; immaterial facts do not.",
    category: "General Principles"
  },
  {
    id: 57,
    question: "Replacement cost coverage differs from actual cash value by:",
    options: [
      "Paying replacement cost up to the policy limit",
      "Paying to replace property without deducting depreciation",
      "Covering additional living expenses",
      "Including labor costs for repairs"
    ],
    correctAnswer: 1,
    explanation: "Replacement cost pays to repair or replace damaged property with new materials of like kind and quality, without deducting for depreciation. ACV deducts depreciation.",
    category: "General Principles"
  },
  {
    id: 58,
    question: "The purpose of underwriting is to:",
    options: [
      "Process claims quickly and fairly",
      "Select and classify risks to achieve a profitable book of business",
      "Sell insurance policies to the public",
      "Determine the amount of claims reserves"
    ],
    correctAnswer: 1,
    explanation: "Underwriting is the process of evaluating, selecting, and classifying risks to maintain a profitable and balanced portfolio. It helps prevent adverse selection.",
    category: "General Principles"
  },
  {
    id: 59,
    question: "An occurrence, under liability coverage, is typically defined as:",
    options: [
      "A single event at a single time and place",
      "An accident, including continuous or repeated exposure to conditions",
      "Only sudden and accidental events",
      "Claims made during the policy period"
    ],
    correctAnswer: 1,
    explanation: "An occurrence is defined broadly as an accident, including continuous or repeated exposure to substantially the same harmful conditions. This differs from claims-made triggers.",
    category: "General Principles"
  },
  {
    id: 60,
    question: "Pure risk differs from speculative risk in that pure risk:",
    options: [
      "Involves only the chance of loss or no loss, with no possibility of gain",
      "Is always insurable",
      "Involves financial investments",
      "Guarantees a loss will occur"
    ],
    correctAnswer: 0,
    explanation: "Pure risk involves only loss or no loss (e.g., fire, theft). Speculative risk includes possibility of gain (gambling, investments). Insurance covers pure risk, not speculative.",
    category: "General Principles"
  },

  // PROPERTY & CASUALTY INSURANCE BASICS (40 questions - 20% of 200)
  {
    id: 61,
    question: "A named perils policy covers:",
    options: [
      "All causes of loss except those specifically excluded",
      "Only the perils specifically listed in the policy",
      "All perils if the insured can prove causation",
      "The most common perils automatically, others by endorsement"
    ],
    correctAnswer: 1,
    explanation: "Named perils policies (like DP-1 or HO-2) list covered perils. The burden is on the insured to prove a covered peril caused the loss.",
    category: "Property Basics"
  },
  {
    id: 62,
    question: "An open perils (all-risk) policy covers:",
    options: [
      "All causes of loss with no exclusions",
      "All causes except those specifically excluded",
      "Only named perils plus theft",
      "Perils listed plus any the insurer approves after loss"
    ],
    correctAnswer: 1,
    explanation: "Open perils (HO-3, HO-5 for dwelling) cover all causes of loss except those specifically excluded. The burden is on the insurer to prove a loss is excluded.",
    category: "Property Basics"
  },
  {
    id: 63,
    question: "The term 'dwelling' in a property policy typically means:",
    options: [
      "Any structure where people sleep occasionally",
      "The primary residential structure and attached structures on the premises",
      "Only single-family homes, not apartments or condos",
      "All buildings on the property including detached garages"
    ],
    correctAnswer: 1,
    explanation: "The dwelling (Coverage A) includes the main residential structure and structures attached to it (like an attached garage). Detached structures are covered separately under Coverage B.",
    category: "Property Basics"
  },
  {
    id: 64,
    question: "Coverage for other structures (Coverage B) in a homeowners policy typically covers:",
    options: [
      "Only detached garages",
      "Detached structures on the residence premises, subject to limits and exclusions",
      "Neighbor's property damaged by the insured",
      "Business structures on the residence premises with no restrictions"
    ],
    correctAnswer: 1,
    explanation: "Coverage B covers detached structures (sheds, fences, detached garages) but excludes structures used for business beyond incidental use, and structures rented to others except for garages.",
    category: "Property Basics"
  },
  {
    id: 65,
    question: "Personal property coverage (Coverage C) includes all of the following EXCEPT:",
    options: [
      "Furniture and clothing owned by the insured",
      "Property of guests temporarily in the dwelling",
      "Motorized vehicles licensed for road use",
      "Personal belongings in a storage unit"
    ],
    correctAnswer: 2,
    explanation: "Coverage C excludes motor vehicles licensed for road use, aircraft, and most watercraft. It covers personal belongings of the insured and household residents anywhere in the world.",
    category: "Property Basics"
  },
  {
    id: 66,
    question: "The coinsurance clause in a property policy requires the insured to:",
    options: [
      "Pay a percentage of every claim",
      "Carry insurance equal to a specified percentage of the property's value, or face a penalty at loss time",
      "Share losses equally with the insurer",
      "Purchase coverage from two different insurers"
    ],
    correctAnswer: 1,
    explanation: "Coinsurance requires insuring property to a stated percentage of value (typically 80%). If underinsured, the insured becomes a coinsurer and the claim payment is reduced proportionately.",
    category: "Property Basics"
  },
  {
    id: 67,
    question: "A policy with an 80% coinsurance clause covers a building valued at $200,000. The insured carries $120,000 coverage. A $40,000 loss occurs. How much will the insurer pay (ignoring deductible)?",
    options: [
      "$40,000",
      "$30,000",
      "$24,000",
      "$32,000"
    ],
    correctAnswer: 1,
    explanation: "Required coverage: $200,000 × 80% = $160,000. Actual coverage: $120,000. Payment = (120,000 / 160,000) × $40,000 = $30,000. The insured is penalized for underinsurance.",
    category: "Property Basics"
  },
  {
    id: 68,
    question: "Which of the following is typically an excluded peril in property insurance?",
    options: [
      "Lightning",
      "Fire",
      "Flood",
      "Windstorm"
    ],
    correctAnswer: 2,
    explanation: "Flood is excluded from standard property policies and requires separate coverage through the National Flood Insurance Program or private insurers. Earth movement is also typically excluded.",
    category: "Property Basics"
  },
  {
    id: 69,
    question: "Debris removal coverage in a property policy typically:",
    options: [
      "Pays unlimited amounts for debris removal",
      "Is included in the Coverage A limit or provides additional coverage for removal expenses",
      "Covers only debris from the insured's property",
      "Applies only to natural disasters"
    ],
    correctAnswer: 1,
    explanation: "Debris removal is typically included within the Coverage A limit. Some policies provide additional coverage (e.g., 25% of loss plus policy limit, up to 25% of Coverage A) when needed.",
    category: "Property Basics"
  },
  {
    id: 70,
    question: "Ordinance or law coverage provides:",
    options: [
      "Legal defense if the insured violates a building code",
      "Payment for increased costs to rebuild to current building codes after a covered loss",
      "Coverage for fines from code violations",
      "Pays to bring the property up to code even without a loss"
    ],
    correctAnswer: 1,
    explanation: "Ordinance or law coverage pays the increased cost to comply with current building codes when repairing or rebuilding after a covered loss. Basic policies exclude this; endorsements add it.",
    category: "Property Basics"
  },
  {
    id: 71,
    question: "A direct loss is:",
    options: [
      "Physical damage to property from a covered peril",
      "Loss of income resulting from property damage",
      "Increased expenses after a loss",
      "Liability claims from third parties"
    ],
    correctAnswer: 0,
    explanation: "A direct loss is physical damage to the property itself (dwelling burns down). Indirect or consequential losses include loss of use, rental income, or additional living expenses.",
    category: "Property Basics"
  },
  {
    id: 72,
    question: "An indirect loss is best described as:",
    options: [
      "Partial damage to the insured property",
      "Loss that occurs as a consequence of direct physical damage",
      "Damage from an excluded peril",
      "Liability for damage to another's property"
    ],
    correctAnswer: 1,
    explanation: "Indirect (consequential) losses result from direct physical damage but are not the damage itself—e.g., business interruption, additional living expenses, lost rents.",
    category: "Property Basics"
  },
  {
    id: 73,
    question: "Loss of use coverage (Coverage D) in homeowners policies provides:",
    options: [
      "Repairs to the dwelling so it can be used again",
      "Additional living expenses if the dwelling is uninhabitable due to a covered loss",
      "Replacement cost for personal property",
      "Liability coverage for injuries on the premises"
    ],
    correctAnswer: 1,
    explanation: "Coverage D (Additional Living Expense / Fair Rental Value) pays increased living costs when the home is uninhabitable due to a covered loss, maintaining the insured's normal standard of living.",
    category: "Property Basics"
  },
  {
    id: 74,
    question: "Fair rental value coverage applies when:",
    options: [
      "The insured rents their home to others and loses rental income due to a covered loss",
      "The insured must rent a temporary residence",
      "Fair market rent increases after a loss",
      "The insured's tenant sues for damages"
    ],
    correctAnswer: 0,
    explanation: "Fair rental value compensates the insured for lost rental income when part of the dwelling rented to others becomes uninhabitable due to a covered loss.",
    category: "Property Basics"
  },
  {
    id: 75,
    question: "A fire occurs due to the insured's negligence. The policy will:",
    options: [
      "Deny the claim due to negligence",
      "Pay the claim, as negligence does not void property coverage",
      "Pay half the claim",
      "Pay only if the insured can prove no negligence"
    ],
    correctAnswer: 1,
    explanation: "Property insurance covers losses resulting from the insured's negligence. Intentional acts are excluded, but accidents and carelessness are covered.",
    category: "Property Basics"
  },
  {
    id: 76,
    question: "The insured's duties after a loss typically include all EXCEPT:",
    options: [
      "Giving prompt notice of the loss to the insurer",
      "Protecting property from further damage",
      "Preparing a detailed proof of loss",
      "Completing all repairs before notifying the insurer"
    ],
    correctAnswer: 3,
    explanation: "Insureds must promptly notify the insurer, protect property from further damage, cooperate with investigations, and provide proof of loss. Major repairs should await insurer approval.",
    category: "Property Basics"
  },
  {
    id: 77,
    question: "Pair or set clauses in property policies typically state that:",
    options: [
      "Items in pairs must be insured together",
      "The insurer may repair or replace the damaged part or pay a fair proportion of the total value",
      "Loss to one item in a set requires replacing the entire set",
      "Sets and pairs are excluded from coverage"
    ],
    correctAnswer: 1,
    explanation: "For items in a pair or set, the insurer may choose to repair/replace the damaged part, pay the difference in value, or pay a fair proportion—not necessarily the full set value.",
    category: "Property Basics"
  },
  {
    id: 78,
    question: "Theft coverage under a property policy typically excludes:",
    options: [
      "Theft by persons lawfully on the premises",
      "Theft from a locked vehicle",
      "Mysterious disappearance and theft by an insured or resident",
      "Theft of personal property from the dwelling"
    ],
    correctAnswer: 2,
    explanation: "Theft coverage usually excludes mysterious disappearance (no evidence of theft) and theft committed by the insured, residents, or employees. Theft by outsiders is covered.",
    category: "Property Basics"
  },
  {
    id: 79,
    question: "Credit card coverage in a homeowners policy typically provides:",
    options: [
      "Unlimited coverage for unauthorized charges",
      "Limited coverage (e.g., $500) for unauthorized use, subject to a deductible or not",
      "No coverage, as credit cards are excluded",
      "Coverage only if the card is stolen from the dwelling"
    ],
    correctAnswer: 1,
    explanation: "Homeowners policies typically provide limited coverage ($500-$1,000) for unauthorized credit card use, often with no deductible. This is supplemental to protections from card issuers.",
    category: "Property Basics"
  },
  {
    id: 80,
    question: "A power failure off the residence premises causes food in the freezer to spoil. Coverage would:",
    options: [
      "Apply under Coverage C with no limitations",
      "Apply only if the power failure results from a covered peril on the premises",
      "Not apply, as off-premises power failures are always excluded",
      "Apply under additional living expense coverage"
    ],
    correctAnswer: 1,
    explanation: "Standard policies exclude loss from off-premises power failure unless it results from a covered peril on the residence premises (e.g., storm damages your electrical service).",
    category: "Property Basics"
  },
  {
    id: 81,
    question: "Inflation guard endorsements:",
    options: [
      "Adjust coverage limits automatically to keep pace with inflation",
      "Reduce premiums during economic downturns",
      "Guarantee replacement cost regardless of policy limits",
      "Cover losses due to currency devaluation"
    ],
    correctAnswer: 0,
    explanation: "Inflation guard automatically increases Coverage A (and related coverages) by a stated percentage annually to help keep pace with rising construction costs.",
    category: "Property Basics"
  },
  {
    id: 82,
    question: "Increased cost of construction due to building code requirements is covered:",
    options: [
      "Automatically under Coverage A",
      "Only with an ordinance or law endorsement",
      "Under Coverage D",
      "Under Coverage B only"
    ],
    correctAnswer: 1,
    explanation: "Standard policies exclude the increased cost to meet current codes. An ordinance or law endorsement provides this coverage for demolition, increased construction costs, and loss to undamaged portions.",
    category: "Property Basics"
  },
  {
    id: 83,
    question: "Water damage from which of the following would typically be covered under a standard HO policy?",
    options: [
      "Surface water from heavy rain entering through doors",
      "Discharge from a sump pump that overflows",
      "Accidental discharge from a plumbing system",
      "Seepage through foundation walls"
    ],
    correctAnswer: 2,
    explanation: "Sudden and accidental discharge from plumbing, heating, or A/C systems is covered. Flood, surface water, sewer backup (without endorsement), and seepage are typically excluded.",
    category: "Property Basics"
  },
  {
    id: 84,
    question: "Business property kept at the residence is covered under Coverage C:",
    options: [
      "For the full Coverage C limit",
      "Up to a specified sub-limit (e.g., $2,500) on the premises, less off-premises",
      "Not at all; business property is always excluded",
      "Only if a business endorsement is purchased"
    ],
    correctAnswer: 1,
    explanation: "Homeowners policies provide limited coverage for business property on premises (e.g., $2,500) and even less off-premises ($500). Higher limits require endorsements or commercial policies.",
    category: "Property Basics"
  },
  {
    id: 85,
    question: "Collapse coverage under a standard homeowners policy applies when collapse is caused by:",
    options: [
      "Any reason, as collapse is always covered",
      "Specific listed causes such as hidden decay, weight of contents, or hidden insect damage",
      "Only earthquake",
      "Gradual settling or deterioration"
    ],
    correctAnswer: 1,
    explanation: "Collapse is covered only for specific causes: hidden decay, insect/vermin damage, weight of contents/people/snow, defective construction/materials (if sudden). Settling is excluded.",
    category: "Property Basics"
  },
  {
    id: 86,
    question: "If an insured intentionally causes a loss, the policy will:",
    options: [
      "Pay the claim and then cancel the policy",
      "Pay a partial claim",
      "Deny coverage, as intentional acts are excluded",
      "Pay the claim if the insured cooperates with the investigation"
    ],
    correctAnswer: 2,
    explanation: "Intentional or fraudulent acts by the insured void coverage. Property insurance covers accidental and fortuitous losses, not deliberate damage.",
    category: "Property Basics"
  },
  {
    id: 87,
    question: "The liberalization clause in a property policy provides that:",
    options: [
      "The insured can add coverage at any time",
      "If the insurer broadens coverage without additional premium, existing policies automatically receive the broader coverage",
      "The insured receives the benefit of any rate decreases",
      "Coverage is extended to additional properties"
    ],
    correctAnswer: 1,
    explanation: "The liberalization clause automatically extends new or broader coverages to existing policies if the insurer adopts them without extra premium, effective from the policy inception or revision date.",
    category: "Property Basics"
  },
  {
    id: 88,
    question: "A tree falls on the insured's detached garage. Coverage is provided under:",
    options: [
      "Coverage A only",
      "Coverage B (Other Structures)",
      "Coverage C if the contents are damaged",
      "No coverage, as falling trees are excluded"
    ],
    correctAnswer: 1,
    explanation: "Damage to detached structures is covered under Coverage B. If the tree also damages the dwelling, Coverage A applies. Falling objects is typically a covered peril.",
    category: "Property Basics"
  },
  {
    id: 89,
    question: "Personal property replacement cost coverage:",
    options: [
      "Is automatically included in all homeowners policies",
      "Pays replacement cost for personal property without depreciation deduction",
      "Applies only to the dwelling",
      "Requires the insured to replace the property before any payment is made"
    ],
    correctAnswer: 1,
    explanation: "Replacement cost on personal property can be added by endorsement (or included in HO-5). Payment is typically ACV initially, then replacement cost when the item is actually replaced.",
    category: "Property Basics"
  },
  {
    id: 90,
    question: "Scheduled personal property endorsements provide:",
    options: [
      "Coverage for items listed in the policy schedule with agreed value and broader perils",
      "Lower premiums for listed items",
      "Coverage only while items are at the residence",
      "Automatic coverage for all personal property"
    ],
    correctAnswer: 0,
    explanation: "Scheduled property (jewelry, fine arts, etc.) can be listed with agreed values, broader coverage (often open perils), and worldwide protection. Items are appraised and specifically described.",
    category: "Property Basics"
  },
  {
    id: 91,
    question: "The appraisal clause in a property policy:",
    options: [
      "Requires an appraisal before the policy is issued",
      "Provides a method to resolve disputes over the amount of loss",
      "Automatically increases coverage based on property value",
      "Allows the insurer to appraise and deny the claim"
    ],
    correctAnswer: 1,
    explanation: "The appraisal clause provides a process for resolving disagreements about the amount of loss (not coverage). Each party selects an appraiser; if they disagree, an umpire decides.",
    category: "Property Basics"
  },
  {
    id: 92,
    question: "Vacancy provisions in property policies generally state that:",
    options: [
      "Vacant properties are never covered",
      "If a dwelling is vacant beyond a stated period (e.g., 60 days), certain coverages may be suspended",
      "Vacancy does not affect coverage",
      "Only vandalism is excluded during vacancy"
    ],
    correctAnswer: 1,
    explanation: "If a property is vacant for more than 60 consecutive days (common threshold), coverage for certain perils (vandalism, glass breakage, water damage, theft) may be suspended.",
    category: "Property Basics"
  },
  {
    id: 93,
    question: "Earth movement is excluded from property policies. This includes:",
    options: [
      "Only earthquakes",
      "Earthquakes, landslides, sinkholes, and settling",
      "Only damage from mining operations",
      "Damage from tree roots"
    ],
    correctAnswer: 1,
    explanation: "Earth movement exclusions are broad: earthquakes, landslides, mudslides, sinkholes, subsidence, settling. Ensuing fire or explosion may be covered. Earthquake coverage requires an endorsement.",
    category: "Property Basics"
  },
  {
    id: 94,
    question: "War and nuclear hazard exclusions mean that losses from:",
    options: [
      "War or nuclear radiation are never covered under any insurance",
      "War, nuclear reaction, radiation, or contamination are excluded from property policies",
      "Only foreign wars are excluded",
      "Terrorism is always excluded"
    ],
    correctAnswer: 1,
    explanation: "War and nuclear hazards are excluded from standard property policies. These catastrophic risks are uninsurable in the private market. Terrorism may be covered depending on the policy.",
    category: "Property Basics"
  },
  {
    id: 95,
    question: "Neglect as an exclusion means the insured must:",
    options: [
      "Never be negligent",
      "Use reasonable means to protect property from further damage after a loss",
      "Repair all damage immediately",
      "Maintain the property in perfect condition"
    ],
    correctAnswer: 1,
    explanation: "The neglect exclusion requires the insured to use reasonable means to save and preserve property after a loss. Failure to mitigate further damage can result in denial for the additional loss.",
    category: "Property Basics"
  },
  {
    id: 96,
    question: "A tree on the insured's property falls and damages the insured's dwelling. The cause of the loss was a windstorm. The policy will:",
    options: [
      "Exclude the loss because trees are not covered",
      "Cover damage to the dwelling under Coverage A and remove the tree under debris removal",
      "Cover only tree removal, not dwelling damage",
      "Cover only if the tree was healthy"
    ],
    correctAnswer: 1,
    explanation: "Wind damage to the dwelling from a falling tree is covered under Coverage A, and debris removal pays for removing the tree. Trees themselves are not covered unless damage is from specific perils.",
    category: "Property Basics"
  },
  {
    id: 97,
    question: "Which property is typically excluded under Coverage C (Personal Property)?",
    options: [
      "Jewelry and furs",
      "Furniture and electronics",
      "Aircraft and motor vehicles licensed for road use",
      "Cameras and sports equipment"
    ],
    correctAnswer: 2,
    explanation: "Aircraft, motor vehicles licensed for road use, and most motorized vehicles are excluded from Coverage C. They require separate auto or specialty policies.",
    category: "Property Basics"
  },
  {
    id: 98,
    question: "The limit of liability for Coverage A (Dwelling) is:",
    options: [
      "The most the insurer will pay for any one loss to the dwelling",
      "The total amount available for all coverages combined",
      "The market value of the dwelling",
      "The original purchase price of the home"
    ],
    correctAnswer: 0,
    explanation: "The Coverage A limit is the maximum the insurer will pay for damage to the dwelling from a single covered loss. Other coverages (B, C, D) are often calculated as percentages of Coverage A.",
    category: "Property Basics"
  },
  {
    id: 99,
    question: "Personal property off the insured premises is typically covered for:",
    options: [
      "The full Coverage C limit",
      "A percentage of the Coverage C limit (e.g., 10%)",
      "50% of the Coverage C limit",
      "No coverage off premises"
    ],
    correctAnswer: 0,
    explanation: "Coverage C typically covers personal property anywhere in the world at the full limit, though some policies may have special limits for certain property off-premises (like $1,500 for theft from vehicles).",
    category: "Property Basics"
  },
  {
    id: 100,
    question: "A guarantee of replacement cost endorsement (guaranteed/extended replacement cost) provides:",
    options: [
      "Replacement cost coverage for personal property",
      "Coverage above the Coverage A limit if rebuilding costs exceed the limit due to market conditions",
      "Guaranteed policy renewal",
      "No depreciation on any claim"
    ],
    correctAnswer: 1,
    explanation: "Guaranteed or extended replacement cost covers rebuilding costs that exceed the Coverage A limit (often up to 125%-150% or unlimited) due to market conditions, provided the home was originally insured to value.",
    category: "Property Basics"
  },

  // DWELLING POLICIES (16 questions - 8% of 200)
  {
    id: 101,
    question: "Dwelling policies (DP) are designed for:",
    options: [
      "Owner-occupied primary residences only",
      "Rental properties, seasonal homes, and properties not eligible for homeowners policies",
      "Commercial buildings only",
      "Condominium units exclusively"
    ],
    correctAnswer: 1,
    explanation: "Dwelling policies cover rental properties, seasonal/secondary homes, vacant homes, and properties that don't qualify for homeowners coverage. They provide property coverage without the liability package.",
    category: "Dwelling Policies"
  },
  {
    id: 102,
    question: "DP-1 (Basic Form) provides coverage on which basis?",
    options: [
      "Named perils for dwelling and contents",
      "Named perils for dwelling; no contents coverage unless added",
      "Open perils for dwelling and contents",
      "Actual cash value only with no options"
    ],
    correctAnswer: 1,
    explanation: "DP-1 covers the dwelling on a named perils basis (fire, lightning, internal explosion). Contents coverage is not automatic; it must be added, and it's also named perils.",
    category: "Dwelling Policies"
  },
  {
    id: 103,
    question: "Which perils are covered under DP-1 Basic Form?",
    options: [
      "Fire, lightning, and internal explosion only",
      "Fire, lightning, internal explosion, plus windstorm and hail with endorsement",
      "All perils except those excluded",
      "Named perils including theft and vandalism"
    ],
    correctAnswer: 0,
    explanation: "DP-1 Basic Form covers only fire, lightning, and internal explosion as base coverage. Additional perils like windstorm, hail, theft, and vandalism can be added by endorsement (Extended Coverage endorsement).",
    category: "Dwelling Policies"
  },
  {
    id: 104,
    question: "DP-2 (Broad Form) covers the dwelling under:",
    options: [
      "Three named perils only",
      "Broad named perils coverage",
      "Open perils (special) coverage",
      "Replacement cost automatically"
    ],
    correctAnswer: 1,
    explanation: "DP-2 provides broad named perils for both dwelling and contents (if purchased), including fire, lightning, windstorm, theft, vandalism, and others. It's more comprehensive than DP-1.",
    category: "Dwelling Policies"
  },
  {
    id: 105,
    question: "DP-3 (Special Form) provides:",
    options: [
      "Named perils for dwelling and contents",
      "Open perils for the dwelling; broad named perils for contents",
      "Open perils for both dwelling and contents",
      "Liability coverage included"
    ],
    correctAnswer: 1,
    explanation: "DP-3 offers open perils (all-risk) for the dwelling and broad named perils for personal property. This is similar to HO-3, but without the liability package.",
    category: "Dwelling Policies"
  },
  {
    id: 106,
    question: "Dwelling policies provide how much coverage for Fair Rental Value?",
    options: [
      "10% of Coverage A",
      "20% of Coverage A",
      "As much as needed with no limit",
      "Fair Rental Value is not included in dwelling policies"
    ],
    correctAnswer: 1,
    explanation: "Dwelling policies typically provide 20% of Coverage A for Fair Rental Value, covering lost rental income when the property is uninhabitable due to a covered loss.",
    category: "Dwelling Policies"
  },
  {
    id: 107,
    question: "Under a dwelling policy, personal property coverage is:",
    options: [
      "Automatically included at 50% of Coverage A",
      "Optional and must be added for an additional premium",
      "Included but limited to $1,000",
      "Only available with DP-3"
    ],
    correctAnswer: 1,
    explanation: "Personal property (Coverage C) is optional in dwelling policies and must be specifically purchased. If added, it typically covers property of the insured and regular residents.",
    category: "Dwelling Policies"
  },
  {
    id: 108,
    question: "The extended coverage endorsement on a DP-1 adds which perils?",
    options: [
      "Theft and vandalism",
      "Windstorm, hail, explosion, riot, aircraft, vehicles, smoke, and volcanic eruption",
      "Flood and earthquake",
      "All perils not otherwise excluded"
    ],
    correctAnswer: 1,
    explanation: "The EC endorsement adds windstorm, hail, explosion (external), riot/civil commotion, aircraft, vehicles, smoke, and volcanic eruption to the DP-1's base fire and lightning coverage.",
    category: "Dwelling Policies"
  },
  {
    id: 109,
    question: "A building is insured for $60,000 under DP-1 with an 80% coinsurance clause. The building's value is $100,000. A $20,000 loss occurs. How much will the policy pay (ignoring deductible)?",
    options: [
      "$20,000",
      "$15,000",
      "$12,000",
      "$16,000"
    ],
    correctAnswer: 1,
    explanation: "Required insurance: $100,000 × 80% = $80,000. Actual: $60,000. Payment = (60,000/80,000) × $20,000 = $15,000. The insured is penalized for carrying insufficient coverage.",
    category: "Dwelling Policies"
  },
  {
    id: 110,
    question: "Replacement cost coverage on a dwelling policy:",
    options: [
      "Is automatically included in DP-1, DP-2, and DP-3",
      "Can be added if the dwelling is insured to at least 80% of replacement cost",
      "Is never available on dwelling policies",
      "Applies only to personal property, not the dwelling"
    ],
    correctAnswer: 1,
    explanation: "Replacement cost can be added to DP-2 or DP-3 if the dwelling is insured to at least 80% of its replacement cost. DP-1 typically pays actual cash value only.",
    category: "Dwelling Policies"
  },
  {
    id: 111,
    question: "Coverage D (Fair Rental Value) under a dwelling policy pays:",
    options: [
      "Rental income lost when the dwelling is damaged by a covered peril and uninhabitable",
      "The cost to rent a temporary residence for the owner",
      "Increased rental rates after repairs",
      "Tenant security deposits"
    ],
    correctAnswer: 0,
    explanation: "Fair Rental Value (Coverage D) compensates the owner for lost rental income when a covered loss makes the property uninhabitable. It does not cover the owner's temporary housing (dwelling policies don't provide ALE).",
    category: "Dwelling Policies"
  },
  {
    id: 112,
    question: "Dwelling policies typically exclude liability coverage. To obtain liability protection, the insured must:",
    options: [
      "Purchase it automatically with the dwelling policy",
      "Purchase a separate personal liability policy or add a liability endorsement",
      "Rely on the property coverage to include liability",
      "Liability is included in DP-3 only"
    ],
    correctAnswer: 1,
    explanation: "Dwelling policies do not include liability coverage. The insured must purchase a separate personal liability supplement or comprehensive personal liability policy.",
    category: "Dwelling Policies"
  },
  {
    id: 113,
    question: "Which of the following properties would be most appropriate for a dwelling policy rather than a homeowners policy?",
    options: [
      "An owner-occupied single-family home",
      "A single-family rental property where the owner lives elsewhere",
      "A condominium unit where the owner resides",
      "A primary residence with attached garage"
    ],
    correctAnswer: 1,
    explanation: "Dwelling policies are ideal for rental properties, seasonal homes, or properties not owner-occupied. Owner-occupied primary residences typically use homeowners policies.",
    category: "Dwelling Policies"
  },
  {
    id: 114,
    question: "Other structures coverage under a dwelling policy (Coverage B) is typically:",
    options: [
      "10% of Coverage A",
      "20% of Coverage A",
      "Not included; must be scheduled separately",
      "Unlimited for detached garages"
    ],
    correctAnswer: 0,
    explanation: "Coverage B on dwelling policies is typically 10% of Coverage A, covering detached structures on the premises. This is lower than the typical 10% in homeowners policies.",
    category: "Dwelling Policies"
  },
  {
    id: 115,
    question: "A dwelling policy can be written on which of the following?",
    options: [
      "Only single-family homes",
      "1-4 family dwellings",
      "Only buildings with no more than 2 units",
      "Any residential structure regardless of units"
    ],
    correctAnswer: 1,
    explanation: "Dwelling policies can insure 1-4 family dwellings. Properties with 5 or more units typically require commercial property policies.",
    category: "Dwelling Policies"
  },
  {
    id: 116,
    question: "The main difference between DP-2 and DP-3 is:",
    options: [
      "DP-2 covers only fire; DP-3 covers all perils",
      "DP-2 uses named perils for the dwelling; DP-3 uses open perils for the dwelling",
      "DP-2 is actual cash value; DP-3 is replacement cost",
      "DP-2 includes liability; DP-3 does not"
    ],
    correctAnswer: 1,
    explanation: "DP-2 provides broad named perils for the dwelling; DP-3 provides open perils (special form) for the dwelling. Both cover personal property on a named perils basis if added.",
    category: "Dwelling Policies"
  },

  // HOMEOWNERS POLICIES (34 questions - 17% of 200)
  {
    id: 117,
    question: "HO-2 (Broad Form) provides:",
    options: [
      "Named perils for dwelling and personal property",
      "Open perils for dwelling; named perils for personal property",
      "Open perils for both dwelling and personal property",
      "Basic named perils for dwelling only"
    ],
    correctAnswer: 0,
    explanation: "HO-2 covers both the dwelling and personal property on a broad named perils basis. It's less common than HO-3 but provides broader coverage than HO-1 (which is rarely used).",
    category: "Homeowners"
  },
  {
    id: 118,
    question: "HO-3 (Special Form) is the most common homeowners policy and provides:",
    options: [
      "Named perils for dwelling and contents",
      "Open perils for dwelling; broad named perils for personal property",
      "Open perils for both dwelling and contents",
      "Liability coverage only"
    ],
    correctAnswer: 1,
    explanation: "HO-3 provides open perils (all-risk) coverage on the dwelling (Coverage A & B) and broad named perils on personal property (Coverage C). This is the standard homeowner's policy.",
    category: "Homeowners"
  },
  {
    id: 119,
    question: "HO-4 (Renters/Tenants) policy covers:",
    options: [
      "The dwelling and personal property",
      "Personal property and liability; no dwelling coverage",
      "Only liability",
      "The landlord's property"
    ],
    correctAnswer: 1,
    explanation: "HO-4 is for renters and provides personal property coverage (named perils), liability, and additional living expense. It does not cover the dwelling structure (landlord's responsibility).",
    category: "Homeowners"
  },
  {
    id: 120,
    question: "HO-6 (Condominium Unit Owners) policy typically covers:",
    options: [
      "The entire condominium building",
      "Personal property, improvements/betterments to the unit, and liability",
      "Only personal property",
      "The unit structure and common areas"
    ],
    correctAnswer: 1,
    explanation: "HO-6 covers the condo owner's personal property, improvements to the unit interior, loss assessment, and liability. The condo association's master policy covers the building structure and common areas.",
    category: "Homeowners"
  },
  {
    id: 121,
    question: "HO-5 (Comprehensive Form) provides:",
    options: [
      "Named perils for dwelling and contents",
      "Open perils for dwelling; named perils for contents",
      "Open perils for both dwelling and personal property",
      "No liability coverage"
    ],
    correctAnswer: 2,
    explanation: "HO-5 offers the broadest coverage: open perils for both the dwelling and personal property, plus higher limits on certain property categories. It's premium coverage.",
    category: "Homeowners"
  },
  {
    id: 122,
    question: "HO-8 (Modified Coverage) is designed for:",
    options: [
      "New construction homes",
      "Older homes where replacement cost exceeds market value",
      "Mobile homes",
      "Rental properties"
    ],
    correctAnswer: 1,
    explanation: "HO-8 is for older homes where rebuilding to original standards would exceed market value. It covers repairs with functionally equivalent materials, not necessarily matching originals.",
    category: "Homeowners"
  },
  {
    id: 123,
    question: "Coverage E (Personal Liability) in a homeowners policy typically provides:",
    options: [
      "$25,000 per occurrence",
      "$100,000 per occurrence",
      "$300,000 per occurrence",
      "$500,000 per occurrence"
    ],
    correctAnswer: 1,
    explanation: "Standard HO policies typically include $100,000 Coverage E (personal liability), though higher limits are available and recommended. This covers legal liability for bodily injury or property damage.",
    category: "Homeowners"
  },
  {
    id: 124,
    question: "Coverage F (Medical Payments to Others) in a homeowners policy:",
    options: [
      "Covers the insured's own medical expenses",
      "Pays medical expenses of others injured on the insured's property or by their activities, regardless of liability",
      "Requires proof of negligence before paying",
      "Is limited to $500"
    ],
    correctAnswer: 1,
    explanation: "Coverage F (typically $1,000-$5,000) pays medical expenses for others injured on the premises or by the insured's activities, without determining fault. It's a goodwill coverage.",
    category: "Homeowners"
  },
  {
    id: 125,
    question: "Personal liability coverage (Coverage E) covers the insured for:",
    options: [
      "Intentional bodily injury to others",
      "Legal liability for accidental bodily injury or property damage",
      "Business liability exposures",
      "Auto liability"
    ],
    correctAnswer: 1,
    explanation: "Coverage E covers legal liability for accidental (not intentional) bodily injury or property damage. It excludes business, professional, and auto liability.",
    category: "Homeowners"
  },
  {
    id: 126,
    question: "Additional living expense (ALE) coverage:",
    options: [
      "Pays the insured's normal living expenses",
      "Pays increased living costs when the home is uninhabitable due to a covered loss",
      "Covers rent for investment properties",
      "Is limited to 10% of Coverage A"
    ],
    correctAnswer: 1,
    explanation: "ALE (part of Coverage D) pays the additional cost to maintain the insured's normal standard of living when a covered loss makes the home uninhabitable. It covers the increase, not total expenses.",
    category: "Homeowners"
  },
  {
    id: 127,
    question: "The standard deductible on a homeowners policy applies to:",
    options: [
      "All property coverages (A, B, C, D)",
      "Property coverages (A, B, C) but not liability (E, F) or ALE (D)",
      "Only Coverage A",
      "Every loss including liability claims"
    ],
    correctAnswer: 1,
    explanation: "The deductible applies to property coverages (A, B, C) but not to Coverage D (ALE), E (liability), or F (medical payments). Some insurers don't apply deductibles to Coverage D.",
    category: "Homeowners"
  },
  {
    id: 128,
    question: "Severability of interests clause in the liability section means:",
    options: [
      "Each insured is covered separately as if individually insured",
      "Interests can be severed at the insured's request",
      "Liability limits are divided among multiple insureds",
      "The policy covers only the named insured"
    ],
    correctAnswer: 0,
    explanation: "Severability of interests treats each insured separately. If one insured is excluded due to their actions, coverage remains for other insureds under the policy.",
    category: "Homeowners"
  },
  {
    id: 129,
    question: "Under a homeowners policy, who qualifies as an 'insured' for liability coverage?",
    options: [
      "Only the named insured",
      "The named insured, spouse, and relatives living in the household; also others under 21 in the insured's care",
      "Anyone on the premises",
      "Only adults listed on the declarations"
    ],
    correctAnswer: 1,
    explanation: "Liability coverage extends to the named insured, resident spouse, resident relatives, and persons under 21 in the care of any insured. Guests and renters are not automatically insureds.",
    category: "Homeowners"
  },
  {
    id: 130,
    question: "A homeowners policy excludes liability arising from:",
    options: [
      "Negligent acts only",
      "Business activities, intentional injury, and motor vehicle liability",
      "Injuries to the insured's family members only",
      "All third-party claims"
    ],
    correctAnswer: 1,
    explanation: "Liability exclusions include business/professional activities, intentional injury, motor vehicles, aircraft, watercraft (over certain sizes), and war. Negligent acts are covered.",
    category: "Homeowners"
  },
  {
    id: 131,
    question: "The insured's dog bites a neighbor. Coverage is provided under:",
    options: [
      "Coverage E (Personal Liability)",
      "Coverage C (Personal Property)",
      "No coverage; animal liability is excluded",
      "Coverage F only"
    ],
    correctAnswer: 0,
    explanation: "Coverage E covers liability for injuries caused by the insured's pets. The insurer defends and pays damages up to the policy limit. Some breeds may be excluded by endorsement.",
    category: "Homeowners"
  },
  {
    id: 132,
    question: "Special limits of liability in a homeowners policy restrict recovery for certain property. Which of the following has a special limit?",
    options: [
      "Furniture",
      "Jewelry, watches, and furs (for theft)",
      "Kitchen appliances",
      "Clothing"
    ],
    correctAnswer: 1,
    explanation: "Special limits apply to certain property classes for theft, including jewelry/watches/furs ($1,500), firearms ($2,500), silverware ($2,500), and securities ($1,500). Higher limits require scheduling.",
    category: "Homeowners"
  },
  {
    id: 133,
    question: "Damage to the insured's property by a covered peril is covered under:",
    options: [
      "Coverage E",
      "Coverage A, B, or C depending on the property",
      "Not covered; own property damage is excluded",
      "Coverage D only"
    ],
    correctAnswer: 1,
    explanation: "The insured's property is covered under Coverage A (dwelling), B (other structures), or C (personal property), depending on which property is damaged.",
    category: "Homeowners"
  },
  {
    id: 134,
    question: "The 'residence premises' is defined as:",
    options: [
      "Any property owned by the insured",
      "The one- to four-family dwelling, other structures, and grounds shown in the declarations",
      "Only the dwelling structure",
      "All dwellings owned by the insured"
    ],
    correctAnswer: 1,
    explanation: "Residence premises is the specific dwelling, other structures, and grounds at the location shown in the declarations. It includes the land. Only one residence premises per policy.",
    category: "Homeowners"
  },
  {
    id: 135,
    question: "Improvements and betterments coverage in an HO-4 or HO-6 policy covers:",
    options: [
      "The building structure",
      "Alterations, appliances, fixtures, and improvements made by the insured to the rented or condo unit",
      "The landlord's or association's property",
      "Personal property only"
    ],
    correctAnswer: 1,
    explanation: "Improvements and betterments (or additions and alterations) covers fixtures, installations, or alterations made at the insured's expense to the unit they rent or own as a condo.",
    category: "Homeowners"
  },
  {
    id: 136,
    question: "Loss assessment coverage under HO-6:",
    options: [
      "Covers the entire building if the association's coverage is inadequate",
      "Pays the insured's share of assessments by the condo association for covered losses to common areas",
      "Pays assessments for any reason",
      "Is unlimited"
    ],
    correctAnswer: 1,
    explanation: "Loss assessment coverage (typically $1,000, increasable by endorsement) pays the insured's share of assessments for covered property losses under the association's policy, when the association's coverage is exhausted.",
    category: "Homeowners"
  },
  {
    id: 137,
    question: "Which of the following would NOT be covered under Coverage C of an HO-3 policy?",
    options: [
      "Furniture and electronics",
      "The insured's car",
      "Jewelry and clothing",
      "Sports equipment"
    ],
    correctAnswer: 1,
    explanation: "Motor vehicles licensed for road use are excluded from Coverage C. They're covered under auto policies. Unlicensed vehicles used to service the premises may be covered.",
    category: "Homeowners"
  },
  {
    id: 138,
    question: "An insured rents their primary residence and moves to a new home. What happens to the HO-3 policy?",
    options: [
      "It automatically covers the new home",
      "Coverage may be suspended or the policy may need to be converted to a dwelling policy",
      "It covers both homes equally",
      "It is automatically canceled"
    ],
    correctAnswer: 1,
    explanation: "Homeowners policies require owner-occupancy of the primary residence. If the insured rents it out, the policy should be converted to a dwelling policy. The new home would need a new HO policy.",
    category: "Homeowners"
  },
  {
    id: 139,
    question: "A guest is injured at the insured's home and sues for $50,000. The insured has $100,000 Coverage E. The court awards $50,000 to the guest. The insurer will pay:",
    options: [
      "$50,000 only",
      "$50,000 plus defense costs",
      "Nothing; guests are not covered",
      "$50,000 minus the deductible"
    ],
    correctAnswer: 1,
    explanation: "Liability coverage includes defense costs in addition to the policy limit. The insurer pays both the judgment ($50,000) and all legal defense costs. No deductible applies to liability.",
    category: "Homeowners"
  },
  {
    id: 140,
    question: "The insured accidentally damages a neighbor's property. The neighbor's damages total $3,000. The homeowners policy will:",
    options: [
      "Cover the loss under Coverage E minus the property deductible",
      "Cover the loss under Coverage E with no deductible",
      "Deny the claim; only bodily injury is covered",
      "Cover it under Coverage C"
    ],
    correctAnswer: 1,
    explanation: "Damage to others' property is covered under Coverage E (personal liability). No deductible applies to liability claims. The $3,000 is well within the typical $100,000 Coverage E limit.",
    category: "Homeowners"
  },
  {
    id: 141,
    question: "An insured with an HO-3 accidentally leaves the windows open during a storm, and rain damages the interior. The claim will:",
    options: [
      "Be fully covered",
      "Be denied; rain through open windows is excluded",
      "Be covered only if wind drove the rain in",
      "Be covered under Coverage D only"
    ],
    correctAnswer: 2,
    explanation: "Wind-driven rain entering through openings damaged by wind is covered. Rain entering through openings left open by the insured is typically not covered unless the opening was created by the windstorm.",
    category: "Homeowners"
  },
  {
    id: 142,
    question: "An insured operating a small home business causes injury to a customer. The HO policy's liability coverage will:",
    options: [
      "Fully cover the claim",
      "Exclude the claim; business liability is not covered",
      "Cover it up to $1,000",
      "Cover it if the injury was unintentional"
    ],
    correctAnswer: 1,
    explanation: "Business pursuits are excluded from Coverage E. Home-based businesses need separate business liability policies or endorsements. Incidental business use may have minimal coverage.",
    category: "Homeowners"
  },
  {
    id: 143,
    question: "Personal property is stolen from the insured's car parked at the insured's residence. The HO-3 policy will:",
    options: [
      "Not cover it; theft from vehicles is excluded",
      "Cover it under Coverage C, subject to a sub-limit (e.g., $1,500)",
      "Cover it with no limits",
      "Cover it under Coverage E"
    ],
    correctAnswer: 1,
    explanation: "Theft of personal property from a vehicle is covered under Coverage C, but subject to special limits (typically $1,500). This applies whether on or off premises.",
    category: "Homeowners"
  },
  {
    id: 144,
    question: "An insured has a detached workshop on their property that is damaged by fire. Coverage is provided under:",
    options: [
      "Coverage A",
      "Coverage B (Other Structures)",
      "Coverage C",
      "No coverage for detached structures"
    ],
    correctAnswer: 1,
    explanation: "Detached structures are covered under Coverage B (typically 10% of Coverage A). If used for business, limitations may apply, and a business policy may be needed.",
    category: "Homeowners"
  },
  {
    id: 145,
    question: "Which of the following is a covered peril under the broad named perils in Coverage C of an HO-3?",
    options: [
      "Flood",
      "Earthquake",
      "Theft",
      "War"
    ],
    correctAnswer: 2,
    explanation: "Theft is a covered peril under the broad named perils for personal property. Flood, earthquake, and war are excluded and require separate coverage.",
    category: "Homeowners"
  },
  {
    id: 146,
    question: "An HO-3 policy provides how much coverage for trees, shrubs, and plants?",
    options: [
      "Full Coverage A limit",
      "5% of Coverage A, $500 per item",
      "10% of Coverage A, $1,000 per item",
      "Not covered at all"
    ],
    correctAnswer: 1,
    explanation: "Trees, shrubs, and plants are covered up to 5% of Coverage A for certain perils (fire, lightning, explosion, theft, vehicle, aircraft, vandalism), with $500 per item. Wind, disease, and neglect are excluded.",
    category: "Homeowners"
  },
  {
    id: 147,
    question: "Inflation guard on a homeowners policy:",
    options: [
      "Increases Coverage A annually by a set percentage",
      "Increases premiums annually",
      "Protects against economic inflation losses",
      "Applies only to personal property"
    ],
    correctAnswer: 0,
    explanation: "Inflation guard automatically increases Coverage A (and related coverages) by a stated percentage each year to keep pace with rising construction costs. Premiums increase accordingly.",
    category: "Homeowners"
  },
  {
    id: 148,
    question: "An insured hires a contractor to repair their roof. The contractor falls and is injured. The homeowners policy will:",
    options: [
      "Cover the claim under Coverage E",
      "Exclude the claim; workers should have their own coverage",
      "Cover it under Coverage F only",
      "Cover it only if the contractor has no insurance"
    ],
    correctAnswer: 1,
    explanation: "Liability for injuries to workers is typically excluded. Contractors should carry workers' compensation. If the homeowner is legally required to carry workers' comp and doesn't, they may be personally liable.",
    category: "Homeowners"
  },
  {
    id: 149,
    question: "The insured's college-age child lives in a dorm. Their laptop is stolen from the dorm room. Coverage under the parents' HO-3 policy:",
    options: [
      "Does not apply; the child is away at college",
      "Applies under Coverage C, as students temporarily away are covered worldwide",
      "Applies only if the child visits home regularly",
      "Applies under Coverage E only"
    ],
    correctAnswer: 1,
    explanation: "Students who are residents of the household are covered for personal property anywhere in the world, including college dorms. Coverage C applies, subject to policy limits and conditions.",
    category: "Homeowners"
  },
  {
    id: 150,
    question: "Under an HO-3, mold damage is typically:",
    options: [
      "Fully covered with no exclusions",
      "Excluded unless resulting from a covered peril, with limited coverage",
      "Covered only if caused by fire",
      "Never covered under any circumstances"
    ],
    correctAnswer: 1,
    explanation: "Mold, fungus, and bacteria are generally excluded, but limited coverage applies if the mold results from a covered water damage loss and is not due to the insured's failure to mitigate.",
    category: "Homeowners"
  },

  // AUTO INSURANCE (40 questions - 20% of 200)
  {
    id: 151,
    question: "Part A (Liability) of the Personal Auto Policy (PAP) covers:",
    options: [
      "Bodily injury and property damage to the insured",
      "Bodily injury and property damage the insured is legally liable for",
      "Physical damage to the insured's auto",
      "Medical expenses for the insured"
    ],
    correctAnswer: 1,
    explanation: "Part A covers the insured's legal liability for bodily injury or property damage to others caused by an auto accident. It pays on behalf of the insured and includes defense costs.",
    category: "Auto Insurance"
  },
  {
    id: 152,
    question: "Virginia's minimum auto liability limits are:",
    options: [
      "15/30/10",
      "25/50/20",
      "25/50/25",
      "50/100/50"
    ],
    correctAnswer: 1,
    explanation: "Virginia requires minimum liability of $25,000 per person for bodily injury, $50,000 per accident for bodily injury, and $20,000 for property damage (25/50/20).",
    category: "Auto Insurance"
  },
  {
    id: 153,
    question: "The definition of 'your covered auto' in a PAP includes:",
    options: [
      "Only vehicles listed in the declarations",
      "Listed vehicles plus newly acquired autos under certain conditions",
      "All vehicles owned by anyone in the household",
      "Rental cars only"
    ],
    correctAnswer: 1,
    explanation: "Your covered auto includes vehicles shown in the declarations, newly acquired autos (automatic coverage for a period), and trailers owned by the insured.",
    category: "Auto Insurance"
  },
  {
    id: 154,
    question: "An insured buys a new car to replace a listed vehicle. When does coverage apply to the new car?",
    options: [
      "Only after notifying the insurer and paying additional premium",
      "Automatically for 4 days",
      "Automatically, provided the insured notifies the insurer within 14 days for the broadest coverage",
      "Never, unless added before purchase"
    ],
    correctAnswer: 2,
    explanation: "A replacement vehicle has automatic coverage for all existing coverages. The insured should notify the insurer within 14 days (or the policy's stated period) to ensure continued coverage.",
    category: "Auto Insurance"
  },
  {
    id: 155,
    question: "An insured purchases an additional vehicle (not a replacement). Automatic coverage applies:",
    options: [
      "For 14 days for liability; 4 days for physical damage if another vehicle has that coverage",
      "Immediately and indefinitely",
      "Only after notifying the insurer",
      "For 30 days for all coverages"
    ],
    correctAnswer: 0,
    explanation: "An additional vehicle has automatic liability coverage for 14 days (or policy period). Physical damage coverage applies only if the insured has it on another vehicle, and only for 4 days unless the insurer is notified.",
    category: "Auto Insurance"
  },
  {
    id: 156,
    question: "Who is an 'insured' under Part A (Liability) of the PAP?",
    options: [
      "Only the named insured",
      "The named insured, resident family members, and anyone using the covered auto with permission",
      "Anyone driving any auto",
      "Only persons listed in the declarations"
    ],
    correctAnswer: 1,
    explanation: "Insureds include: the named insured, resident spouse, resident family members, and any person using the covered auto with permission. Other persons/organizations also qualify under specific circumstances.",
    category: "Auto Insurance"
  },
  {
    id: 157,
    question: "Part A (Liability) exclusions include all EXCEPT:",
    options: [
      "Intentional injury",
      "Damage to property owned by the insured",
      "Accidents while using the auto as a taxi",
      "Negligent operation by the insured"
    ],
    correctAnswer: 3,
    explanation: "Liability coverage protects against negligent acts. Exclusions include intentional injury, property owned or transported by the insured, public or livery conveyance (like taxis, Uber without endorsement), and business use.",
    category: "Auto Insurance"
  },
  {
    id: 158,
    question: "The insured borrows a friend's car and causes an accident. Which policy pays first?",
    options: [
      "The insured's PAP",
      "The car owner's PAP",
      "Both pay equally",
      "Neither pays"
    ],
    correctAnswer: 1,
    explanation: "Auto liability insurance follows the vehicle. The owner's policy is primary; the driver's policy provides excess coverage if the owner's limits are exhausted.",
    category: "Auto Insurance"
  },
  {
    id: 159,
    question: "Part B (Medical Payments) covers:",
    options: [
      "Medical expenses of the insured and passengers, regardless of fault",
      "Medical expenses of third parties the insured injured",
      "Medical expenses only if the insured is at fault",
      "Lost wages due to injury"
    ],
    correctAnswer: 0,
    explanation: "Part B pays reasonable medical expenses for the insured and passengers injured in an auto accident, regardless of fault. It's limited per person and covers expenses within a specified period (often 3 years).",
    category: "Auto Insurance"
  },
  {
    id: 160,
    question: "Medical payments coverage applies to the named insured when:",
    options: [
      "Injured in the covered auto only",
      "Injured as a pedestrian, or in any auto or covered auto",
      "Injured at home",
      "Only if the insured is the driver"
    ],
    correctAnswer: 1,
    explanation: "Medical payments extend to the named insured and family members when injured as pedestrians or occupants of any auto. Other passengers are covered only in the covered auto.",
    category: "Auto Insurance"
  },
  {
    id: 161,
    question: "Part C (Uninsured Motorists - UM) covers the insured when:",
    options: [
      "The at-fault driver has no insurance or insufficient insurance",
      "The insured is at fault",
      "The insured's car is damaged by an unknown driver",
      "The insured has no insurance"
    ],
    correctAnswer: 0,
    explanation: "UM covers bodily injury (and property damage if purchased) when an at-fault driver has no insurance, insufficient insurance, or is a hit-and-run driver. It protects the insured from uninsured/underinsured drivers.",
    category: "Auto Insurance"
  },
  {
    id: 162,
    question: "Underinsured Motorists (UIM) coverage applies when:",
    options: [
      "The at-fault driver has no insurance",
      "The at-fault driver has insurance, but limits are less than the insured's damages and UIM limits",
      "The insured has less insurance than required by law",
      "The insured is at fault"
    ],
    correctAnswer: 1,
    explanation: "UIM pays when the at-fault driver carries liability insurance, but the limits are insufficient to cover the insured's damages. UM/UIM fills the gap.",
    category: "Auto Insurance"
  },
  {
    id: 163,
    question: "In Virginia, Uninsured Motorist coverage must be offered:",
    options: [
      "It is not required to be offered",
      "And cannot be rejected",
      "And can be rejected in writing by the insured",
      "Only for bodily injury, not property damage"
    ],
    correctAnswer: 2,
    explanation: "Virginia requires insurers to offer UM coverage at limits equal to liability limits (up to 25/50/20 minimum). The insured may reject it in writing. Once rejected, it doesn't have to be re-offered.",
    category: "Auto Insurance"
  },
  {
    id: 164,
    question: "Part D (Coverage for Damage to Your Auto) includes:",
    options: [
      "Collision and Other Than Collision (Comprehensive)",
      "Liability for damage to others' autos",
      "Medical payments for injuries",
      "Uninsured motorist property damage"
    ],
    correctAnswer: 0,
    explanation: "Part D provides physical damage coverage: Collision (damage from impact with another object or vehicle or overturn) and Other Than Collision (Comprehensive - most other perils like theft, fire, glass, falling objects).",
    category: "Auto Insurance"
  },
  {
    id: 165,
    question: "Collision coverage pays for damage to the insured's auto resulting from:",
    options: [
      "Impact with another vehicle or object, or overturn",
      "Theft or vandalism",
      "Fire or lightning",
      "Hail or falling objects"
    ],
    correctAnswer: 0,
    explanation: "Collision covers upset (overturn) or impact with another vehicle or object. All other physical damage perils (theft, fire, glass, vandalism, animals, etc.) fall under Other Than Collision.",
    category: "Auto Insurance"
  },
  {
    id: 166,
    question: "Other Than Collision (Comprehensive) coverage includes all EXCEPT:",
    options: [
      "Theft",
      "Vandalism",
      "Hitting a deer",
      "Colliding with another car"
    ],
    correctAnswer: 3,
    explanation: "Comprehensive (OTC) covers most non-collision perils: theft, fire, vandalism, glass breakage, falling objects, missiles, animals, weather. Collision with another vehicle is covered under Collision.",
    category: "Auto Insurance"
  },
  {
    id: 167,
    question: "The insured hits a deer and damages their car. This is covered under:",
    options: [
      "Collision",
      "Comprehensive (Other Than Collision)",
      "Liability",
      "Uninsured Motorist"
    ],
    correctAnswer: 1,
    explanation: "Loss caused by impact with a bird or animal is specifically classified as Other Than Collision (Comprehensive), not Collision.",
    category: "Auto Insurance"
  },
  {
    id: 168,
    question: "The insured's car windshield is broken by a rock. This is covered under:",
    options: [
      "Collision",
      "Comprehensive (Other Than Collision)",
      "Neither; glass damage is excluded",
      "Liability"
    ],
    correctAnswer: 1,
    explanation: "Glass breakage is covered under Other Than Collision. Some policies offer full glass coverage with no deductible for glass repair or with a separate glass deductible.",
    category: "Auto Insurance"
  },
  {
    id: 169,
    question: "An insured's auto is a total loss. The insurer will pay:",
    options: [
      "The original purchase price",
      "The actual cash value or stated amount, whichever is less, minus deductible",
      "The full policy limit",
      "Replacement cost with no depreciation"
    ],
    correctAnswer: 1,
    explanation: "For a total loss, the insurer pays the lesser of actual cash value (ACV), cost to repair, or any applicable stated amount, minus the deductible. ACV includes depreciation.",
    category: "Auto Insurance"
  },
  {
    id: 170,
    question: "Betterment in auto physical damage claims refers to:",
    options: [
      "Replacing damaged parts with better-quality parts",
      "Depreciation charged when new parts improve the vehicle's condition",
      "Increasing coverage limits after a claim",
      "The insurer paying more than ACV"
    ],
    correctAnswer: 1,
    explanation: "Betterment accounts for the fact that replacing old parts with new ones may improve the vehicle's value. Insurers may charge for the improvement (depreciation) when determining claim payment.",
    category: "Auto Insurance"
  },
  {
    id: 171,
    question: "Towing and labor coverage in a PAP:",
    options: [
      "Is included automatically with no limit",
      "Can be added for a small additional premium, covering towing and labor at breakdown",
      "Covers only accidents, not breakdowns",
      "Is the same as rental reimbursement"
    ],
    correctAnswer: 1,
    explanation: "Towing and labor is optional coverage (often $25-$100 per disablement) that pays for towing and labor at the breakdown site. It doesn't cover routine maintenance or repairs.",
    category: "Auto Insurance"
  },
  {
    id: 172,
    question: "Rental reimbursement coverage:",
    options: [
      "Is included automatically in all PAPs",
      "Can be added to pay a daily limit for rental car expenses during repairs after a covered loss",
      "Covers only theft losses",
      "Pays unlimited rental costs"
    ],
    correctAnswer: 1,
    explanation: "Rental reimbursement is optional and pays a specified daily amount (e.g., $30/day) up to a maximum (e.g., $900) for rental car costs while the insured's auto is being repaired after a covered loss.",
    category: "Auto Insurance"
  },
  {
    id: 173,
    question: "An insured rents a car while on vacation. The rental car is damaged. The insured's PAP:",
    options: [
      "Does not cover rental cars",
      "Extends physical damage coverage if the insured has collision and comprehensive on an owned vehicle",
      "Covers it under liability only",
      "Requires separate rental car insurance"
    ],
    correctAnswer: 1,
    explanation: "If the insured carries collision and comprehensive on a covered auto, that coverage extends to rental cars or borrowed vehicles. The insured's deductible applies. Liability also extends.",
    category: "Auto Insurance"
  },
  {
    id: 174,
    question: "Loss of use coverage (Transportation Expenses) in the PAP:",
    options: [
      "Is the same as rental reimbursement",
      "Pays for transportation expenses following a covered Other Than Collision loss, after a waiting period",
      "Pays immediately for any loss",
      "Is unlimited"
    ],
    correctAnswer: 1,
    explanation: "Transportation expenses (typically $20/day, $600 max) are paid for Other Than Collision losses after a 48-hour waiting period. Rental reimbursement is broader and can be added for all covered losses.",
    category: "Auto Insurance"
  },
  {
    id: 175,
    question: "A driver is texting and causes an accident. Liability coverage:",
    options: [
      "Is excluded for negligent acts",
      "Covers the claim, as negligence is covered",
      "Covers it only if no one is injured",
      "Requires a higher premium payment"
    ],
    correctAnswer: 1,
    explanation: "Liability covers negligent acts, including distracted driving. Intentional acts are excluded. The insurer defends and pays damages up to the policy limits.",
    category: "Auto Insurance"
  },
  {
    id: 176,
    question: "An insured is hit by a driver who runs a red light and is clearly at fault, but has no insurance. Which coverage applies?",
    options: [
      "Collision and Uninsured Motorist",
      "Liability only",
      "Medical Payments only",
      "No coverage available"
    ],
    correctAnswer: 0,
    explanation: "Collision covers the vehicle damage (minus deductible). Uninsured Motorist covers bodily injury to the insured (and property damage if UM PD is purchased). The insured may recover their deductible from the at-fault driver.",
    category: "Auto Insurance"
  },
  {
    id: 177,
    question: "The insured's 16-year-old child, who just got a license, borrows the insured's car and causes an accident. Coverage applies under the insured's PAP because:",
    options: [
      "The child is a named insured",
      "The child is a resident family member and qualifies as an insured",
      "The child has permission, which is all that's required",
      "Teen drivers are automatically excluded"
    ],
    correctAnswer: 1,
    explanation: "Resident family members (including children) are insureds under the PAP. They must be listed and rated on the policy for premium purposes, but coverage applies.",
    category: "Auto Insurance"
  },
  {
    id: 178,
    question: "An insured uses their car for business purposes (other than commuting). The PAP will:",
    options: [
      "Automatically cover all business use",
      "Cover business use unless the vehicle is used for ride-sharing, delivery, or other specific business exclusions",
      "Exclude all business use",
      "Cover it only with a business endorsement"
    ],
    correctAnswer: 1,
    explanation: "Personal Auto Policies cover most business use, but exclude public or livery conveyance (taxi, Uber, delivery without endorsement). Regular commuting and sales calls are typically covered.",
    category: "Auto Insurance"
  },
  {
    id: 179,
    question: "Out-of-state coverage under the PAP provides:",
    options: [
      "No coverage outside the state of residence",
      "Coverage anywhere in the U.S., its territories, and Canada",
      "Coverage worldwide",
      "Coverage only with an endorsement"
    ],
    correctAnswer: 1,
    explanation: "The PAP provides coverage in all 50 states, U.S. territories, and Canada. Mexico is not covered; separate Mexican insurance is required for driving in Mexico.",
    category: "Auto Insurance"
  },
  {
    id: 180,
    question: "The insured's custom stereo equipment, valued at $3,000, is stolen from their car. Coverage under the PAP:",
    options: [
      "Is provided in full under Other Than Collision",
      "Is limited to $1,500 for electronic equipment not permanently installed",
      "Is unlimited for all personal property",
      "Is excluded entirely"
    ],
    correctAnswer: 1,
    explanation: "The PAP limits coverage for electronic equipment, tapes, and accessories to $1,500. Permanently installed equipment is covered; portable equipment has limited coverage. Higher limits require scheduling.",
    category: "Auto Insurance"
  },
  {
    id: 181,
    question: "A hit-and-run driver damages the insured's parked car and flees. The insured has Collision coverage. The insurer will:",
    options: [
      "Deny the claim; hit-and-run is excluded",
      "Pay under Collision, subject to the deductible",
      "Pay only if the driver is identified",
      "Pay under Uninsured Motorist Property Damage only"
    ],
    correctAnswer: 1,
    explanation: "Collision covers hit-and-run damage to the insured's auto. The deductible applies. Uninsured Motorist Property Damage may also apply if purchased, often with no deductible.",
    category: "Auto Insurance"
  },
  {
    id: 182,
    question: "An insured drives a company car furnished by their employer. The insured's PAP:",
    options: [
      "Automatically covers the company car",
      "Does not cover the company car, as it is not a covered auto",
      "Covers it as excess over the employer's coverage",
      "Covers it only with an endorsement"
    ],
    correctAnswer: 1,
    explanation: "The PAP does not cover vehicles furnished for regular use to the insured or family members (like company cars). The employer's policy should cover the vehicle. Endorsements can add coverage.",
    category: "Auto Insurance"
  },
  {
    id: 183,
    question: "Split limit liability coverage of 50/100/50 means:",
    options: [
      "$50,000 total per accident",
      "$50,000 per person for BI, $100,000 per accident for BI, $50,000 per accident for PD",
      "$50,000 for BI, $100,000 for PD, $50,000 for UM",
      "$50,000 per year maximum"
    ],
    correctAnswer: 1,
    explanation: "Split limits express three amounts: per person bodily injury limit / per accident bodily injury limit / per accident property damage limit. Example: 50/100/50.",
    category: "Auto Insurance"
  },
  {
    id: 184,
    question: "Combined single limit (CSL) liability coverage means:",
    options: [
      "One limit applies to both bodily injury and property damage combined per accident",
      "Three separate limits as in split limit policies",
      "Unlimited coverage for liability",
      "Coverage is combined with UM/UIM"
    ],
    correctAnswer: 0,
    explanation: "CSL provides one total limit for all bodily injury and property damage per accident (e.g., $300,000 CSL). It offers more flexibility than split limits.",
    category: "Auto Insurance"
  },
  {
    id: 185,
    question: "An insured loans their car to a friend who causes an accident. The friend has their own auto policy. Which policy pays?",
    options: [
      "The friend's policy is primary",
      "The insured's policy is primary; the friend's policy is excess",
      "Both policies pay equally",
      "Neither policy pays"
    ],
    correctAnswer: 1,
    explanation: "The vehicle owner's insurance is primary. The permissive driver's insurance is excess if the owner's limits are exhausted. This is the 'insurance follows the car' principle.",
    category: "Auto Insurance"
  },
  {
    id: 186,
    question: "No-fault auto insurance (Personal Injury Protection - PIP):",
    options: [
      "Is required in Virginia",
      "Pays medical expenses and lost wages regardless of fault, and limits the right to sue",
      "Is the same as Medical Payments coverage",
      "Eliminates all liability coverage"
    ],
    correctAnswer: 1,
    explanation: "PIP (not required in Virginia, a traditional tort state) pays medical expenses, lost wages, and other costs regardless of fault. True no-fault restricts lawsuits to serious injuries. Virginia is not a no-fault state.",
    category: "Auto Insurance"
  },
  {
    id: 187,
    question: "Duties after an accident or loss under the PAP include all EXCEPT:",
    options: [
      "Notifying the police if required by law",
      "Cooperating with the insurer's investigation",
      "Admitting fault at the scene",
      "Providing the insurer with prompt notice"
    ],
    correctAnswer: 2,
    explanation: "Insureds must notify the insurer promptly, cooperate with investigations, and notify police if required. They should not admit fault or make statements that could prejudice the insurer's defense.",
    category: "Auto Insurance"
  },
  {
    id: 188,
    question: "An insured intentionally causes an accident. The PAP will:",
    options: [
      "Cover the loss",
      "Deny coverage, as intentional acts are excluded",
      "Cover it under Collision only",
      "Cover it if the insured pays an additional premium"
    ],
    correctAnswer: 1,
    explanation: "Intentional acts, injury, or damage expected or intended by the insured are excluded. Accidental or negligent acts are covered; deliberate acts are not.",
    category: "Auto Insurance"
  },
  {
    id: 189,
    question: "An insured modifies their vehicle with a turbocharger and custom parts worth $10,000. After an accident, the insurer will:",
    options: [
      "Pay for all custom equipment automatically",
      "Limit coverage unless the modifications were reported and covered by endorsement",
      "Deny the entire claim",
      "Pay replacement cost for all parts"
    ],
    correctAnswer: 1,
    explanation: "Custom equipment may have limited coverage or require an endorsement. Insureds should report modifications and add custom parts/equipment coverage to ensure full protection.",
    category: "Auto Insurance"
  },
  {
    id: 190,
    question: "The insured's car is stolen, and the insurer pays a total loss. Two months later, the car is recovered. The insurer:",
    options: [
      "Must take title to the recovered vehicle",
      "Returns the recovery to the insured and demands return of claim payment",
      "May keep the vehicle or allow the insured to keep it by returning the claim payment",
      "Pays the insured the recovered amount in addition to the claim"
    ],
    correctAnswer: 2,
    explanation: "After paying a total loss, the insurer typically takes title. If the vehicle is recovered, the insurer may keep it, or the insured can buy it back by returning the claim payment.",
    category: "Auto Insurance"
  },

  // OTHER PERSONAL LINES (10 questions - 5% of 200)
  {
    id: 191,
    question: "An umbrella liability policy provides:",
    options: [
      "Primary coverage for all liability",
      "Excess liability coverage over underlying policies and may cover some exposures not covered by underlying policies",
      "Property coverage only",
      "Coverage only for business liability"
    ],
    correctAnswer: 1,
    explanation: "Umbrella policies provide excess liability coverage above underlying auto and homeowners policies, plus may cover certain exposures not in underlying policies (subject to a self-insured retention).",
    category: "Other Personal Lines"
  },
  {
    id: 192,
    question: "Underlying insurance required for an umbrella policy typically includes:",
    options: [
      "Only auto liability",
      "Auto liability and homeowners liability at specified minimum limits",
      "No underlying insurance is required",
      "Only homeowners liability"
    ],
    correctAnswer: 1,
    explanation: "Umbrella insurers require minimum underlying limits (e.g., $250,000/$500,000 auto liability, $300,000 homeowners liability) to ensure adequate primary coverage before the umbrella responds.",
    category: "Other Personal Lines"
  },
  {
    id: 193,
    question: "A personal umbrella policy typically has a self-insured retention (SIR) that applies when:",
    options: [
      "There is no underlying coverage for the loss",
      "The underlying policy deductible has not been met",
      "The loss is less than the umbrella limit",
      "The insured has multiple policies"
    ],
    correctAnswer: 0,
    explanation: "The SIR (e.g., $250-$10,000) applies to losses covered by the umbrella but not by underlying policies. It acts like a deductible. The insured must pay the SIR before the umbrella pays.",
    category: "Other Personal Lines"
  },
  {
    id: 194,
    question: "Flood insurance for personal property is available through:",
    options: [
      "Standard homeowners policies",
      "The National Flood Insurance Program (NFIP) or private insurers",
      "Auto policies",
      "Flood insurance is not available for personal property"
    ],
    correctAnswer: 1,
    explanation: "Flood is excluded from standard homeowners policies. Coverage is available through the NFIP (administered by FEMA) or private flood insurers.",
    category: "Other Personal Lines"
  },
  {
    id: 195,
    question: "The National Flood Insurance Program (NFIP) provides coverage up to:",
    options: [
      "$100,000 for the building, $50,000 for contents",
      "$250,000 for the building, $100,000 for contents",
      "$500,000 for the building, $200,000 for contents",
      "$1,000,000 for the building, $500,000 for contents"
    ],
    correctAnswer: 1,
    explanation: "NFIP limits are $250,000 for residential buildings and $100,000 for contents. Higher limits require excess flood insurance from private insurers.",
    category: "Other Personal Lines"
  },
  {
    id: 196,
    question: "Earthquake coverage for a dwelling:",
    options: [
      "Is automatically included in homeowners policies",
      "Must be purchased separately or by endorsement",
      "Is included only in HO-5 policies",
      "Is provided by the NFIP"
    ],
    correctAnswer: 1,
    explanation: "Earthquake is excluded from standard homeowners policies. Coverage must be added by endorsement or purchased as a separate policy. High-deductible percentages (10%-20%) are common.",
    category: "Other Personal Lines"
  },
  {
    id: 197,
    question: "A personal articles floater (scheduled personal property endorsement) provides:",
    options: [
      "Coverage for listed items at agreed value with broader perils",
      "Coverage only for items in the home",
      "Lower coverage limits than Coverage C",
      "Coverage for unscheduled items only"
    ],
    correctAnswer: 0,
    explanation: "Floaters schedule high-value items (jewelry, art, cameras) with agreed values, open perils coverage, no deductible, and worldwide protection. They overcome Coverage C limits.",
    category: "Other Personal Lines"
  },
  {
    id: 198,
    question: "A mobile home policy (HO-7 or specialized MH policy) differs from a standard homeowners policy in that:",
    options: [
      "It provides no liability coverage",
      "It's designed for the unique construction and loss exposures of mobile/manufactured homes",
      "It covers only personal property",
      "It excludes windstorm coverage"
    ],
    correctAnswer: 1,
    explanation: "Mobile/manufactured home policies address specific risks like transportation, tie-down requirements, and construction materials. Coverage options are similar to HO policies but adapted.",
    category: "Other Personal Lines"
  },
  {
    id: 199,
    question: "Watercraft liability is typically:",
    options: [
      "Fully covered under homeowners liability",
      "Excluded or limited in homeowners policies; larger boats require separate policies",
      "Covered only under auto policies",
      "Never insurable"
    ],
    correctAnswer: 1,
    explanation: "Homeowners policies provide limited watercraft liability for small boats (under 26 feet, or sailboats under 26 feet with limited horsepower). Larger watercraft need separate boat policies.",
    category: "Other Personal Lines"
  },
  {
    id: 200,
    question: "Identity theft coverage, when added to a homeowners policy, typically provides:",
    options: [
      "Reimbursement for stolen cash",
      "Reimbursement for expenses incurred to restore the insured's identity and credit",
      "Coverage for business identity theft",
      "Unlimited coverage with no deductible"
    ],
    correctAnswer: 1,
    explanation: "Identity theft endorsements cover expenses like legal fees, lost wages, and costs to restore identity/credit. Coverage limits (e.g., $15,000-$25,000) and deductibles apply. Stolen money is not directly covered.",
    category: "Other Personal Lines"
  }
];
