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
    question: "What is the passing score required for the Virginia Personal Lines exam (Series 11-07)?",
    options: [
      "60%",
      "65%",
      "70%",
      "75%"
    ],
    correctAnswer: 2,
    explanation: "The Virginia Personal Lines exam requires a scaled score of 70% to pass. The exam consists of 100 scored questions plus 5 pretest items, for 105 total questions, with a 2-hour (120-minute) time limit.",
    category: "Virginia Regulation"
  },
  {
    id: 2,
    question: "How many continuing education hours are required for Virginia insurance license renewal?",
    options: [
      "12 hours every 2 years",
      "16 hours every 2 years, including 3 ethics hours",
      "20 hours every year",
      "24 hours every 2 years"
    ],
    correctAnswer: 1,
    explanation: "Virginia requires 16 hours of continuing education every 2 years, including 3 hours of ethics. Effective February 1, 2026, no more than 12 CE hours may be completed in any 24-hour period.",
    category: "Virginia Regulation"
  },
  {
    id: 3,
    question: "What is the cost to take the Virginia Personal Lines licensing exam?",
    options: [
      "$25",
      "$30",
      "$35",
      "$50"
    ],
    correctAnswer: 2,
    explanation: "The Virginia Personal Lines exam (Series 11-07) costs $35 per attempt and is administered by Prometric.",
    category: "Virginia Regulation"
  },
  {
    id: 4,
    question: "Can an agent hold both a Property & Casualty license and a Personal Lines license in Virginia?",
    options: [
      "Yes, they are separate licenses",
      "No, P&C includes Personal Lines so you cannot hold both",
      "Yes, but only with special approval",
      "Only if licensed for 5+ years"
    ],
    correctAnswer: 1,
    explanation: "Property & Casualty includes all Personal Lines authority, so agents cannot hold or apply for both licenses. The P&C license is broader and includes commercial coverages.",
    category: "Virginia Regulation"
  },
  {
    id: 5,
    question: "An agent must report a felony conviction to the Virginia Bureau of Insurance within:",
    options: [
      "10 days",
      "20 days",
      "30 days",
      "60 days"
    ],
    correctAnswer: 2,
    explanation: "Virginia Code § 38.2-1826(B) requires agents to report any felony conviction to the Bureau of Insurance within 30 days. Failure to report can result in license revocation.",
    category: "Virginia Regulation"
  },
  {
    id: 6,
    question: "How long must insurance agents retain records of transactions in Virginia?",
    options: [
      "1 year",
      "3 years",
      "5 years",
      "7 years"
    ],
    correctAnswer: 1,
    explanation: "Virginia Code § 38.2-1809(B) requires agents to maintain records of insurance transactions for at least 3 years from the date of the transaction.",
    category: "Virginia Regulation"
  },
  {
    id: 7,
    question: "What is 'rebating' in insurance?",
    options: [
      "Returning part of the commission to the client",
      "Offering inducements not specified in the policy to purchase insurance",
      "Reducing coverage to lower premiums",
      "Canceling a policy early"
    ],
    correctAnswer: 1,
    explanation: "Rebating (Virginia Code § 38.2-509) is offering something of value (money, gifts, services) not specified in the policy as an inducement to purchase insurance. It is prohibited as it creates unfair competition.",
    category: "Virginia Regulation"
  },
  {
    id: 8,
    question: "An agent's 'fiduciary duty' means:",
    options: [
      "Always selling the lowest-priced policy",
      "Holding premiums in trust for the insurer and properly accounting for client funds",
      "Only representing one insurance company",
      "Providing legal advice"
    ],
    correctAnswer: 1,
    explanation: "Under Virginia Code § 38.2-1813, agents have a fiduciary responsibility to hold premiums and client funds in trust and properly account for them. Mishandling fiduciary funds is grounds for license revocation.",
    category: "Virginia Regulation"
  },
  {
    id: 9,
    question: "Can a Virginia insurance agent share commissions with an unlicensed person?",
    options: [
      "Yes, if they are a family member",
      "Yes, up to 10% of commission",
      "No, only licensed agents may receive commissions",
      "Yes, with Bureau approval"
    ],
    correctAnswer: 2,
    explanation: "Virginia Code § 38.2-1812 prohibits paying or sharing insurance commissions with unlicensed persons. Only properly licensed agents or agencies may receive commissions.",
    category: "Virginia Regulation"
  },
  {
    id: 10,
    question: "What is 'twisting' in insurance?",
    options: [
      "Comparing different policies",
      "Using misrepresentation to induce a policyholder to replace existing coverage",
      "Negotiating premium rates",
      "Explaining policy exclusions"
    ],
    correctAnswer: 1,
    explanation: "Twisting is using misrepresentation or misleading comparisons to convince a policyholder to drop existing coverage and buy a new policy. It violates Virginia Code § 38.2-502.",
    category: "Virginia Regulation"
  },
  {
    id: 11,
    question: "Who regulates insurance companies and agents in Virginia?",
    options: [
      "Virginia Department of Insurance",
      "State Corporation Commission, Bureau of Insurance",
      "Virginia Insurance Board",
      "Department of Financial Regulation"
    ],
    correctAnswer: 1,
    explanation: "The State Corporation Commission's Bureau of Insurance regulates insurers, agents, and insurance practices in Virginia under Title 38.2 of the Virginia Code.",
    category: "Virginia Regulation"
  },
  {
    id: 12,
    question: "An agent who changes their address must notify the Bureau of Insurance within:",
    options: [
      "10 days",
      "15 days",
      "30 days",
      "60 days"
    ],
    correctAnswer: 2,
    explanation: "Virginia Code § 38.2-1826(A) requires agents to notify the Bureau of Insurance of address or name changes within 30 days.",
    category: "Virginia Regulation"
  },
  {
    id: 13,
    question: "Before selling insurance for a company, an agent must:",
    options: [
      "Have 1 year of experience",
      "Be appointed by that insurance company",
      "Take a company-specific exam",
      "Complete 40 hours of training"
    ],
    correctAnswer: 1,
    explanation: "Virginia Code § 38.2-1833 requires agents to be appointed by each insurance company before soliciting or selling that company's products. Selling without an appointment is a violation.",
    category: "Virginia Regulation"
  },
  {
    id: 14,
    question: "Is pre-licensing education required for Virginia Personal Lines licensing?",
    options: [
      "Yes, 40 hours required",
      "Yes, 20 hours required",
      "No, pre-licensing education is not required for Personal Lines",
      "Yes, 16 hours required"
    ],
    correctAnswer: 2,
    explanation: "Virginia does NOT require pre-licensing education for Personal Lines licenses. Only Title insurance licenses require pre-licensing education (16 hours).",
    category: "Virginia Regulation"
  },
  {
    id: 15,
    question: "What is 'defamation' as an unfair trade practice?",
    options: [
      "Canceling policies improperly",
      "Making false statements about a competitor's financial condition or business practices",
      "Charging excessive premiums",
      "Denying valid claims"
    ],
    correctAnswer: 1,
    explanation: "Defamation (Virginia Code § 38.2-504) is making false, derogatory, or malicious statements about another insurer's or agent's financial condition or business practices.",
    category: "Virginia Regulation"
  },
  {
    id: 16,
    question: "How long is a passed Virginia Personal Lines exam valid before you must apply for the license?",
    options: [
      "90 days",
      "120 days",
      "183 days",
      "1 year"
    ],
    correctAnswer: 2,
    explanation: "A passed Virginia insurance exam remains valid for 183 days (approximately 6 months). You must submit your license application within this timeframe or retake the exam.",
    category: "Virginia Regulation"
  },
  {
    id: 17,
    question: "What is 'coercion' as an unfair trade practice?",
    options: [
      "Offering multi-policy discounts",
      "Using force, threats, or abuse to compel someone to purchase insurance",
      "Explaining policy terms thoroughly",
      "Recommending appropriate coverage"
    ],
    correctAnswer: 1,
    explanation: "Coercion (Virginia Code § 38.2-505) includes using force, threats, intimidation, or abuse of authority to compel insurance purchase or prevent someone from obtaining insurance elsewhere.",
    category: "Virginia Regulation"
  },
  {
    id: 18,
    question: "Can an agent charge fees for services in addition to commissions?",
    options: [
      "No, only commissions allowed",
      "Yes, if disclosed in writing and agreed to by the client",
      "Yes, up to $100 per policy",
      "Only for commercial policies"
    ],
    correctAnswer: 1,
    explanation: "Virginia Code § 38.2-310 allows agents to charge reasonable fees beyond commissions, but fees must be disclosed in writing and agreed to by the client before services are rendered.",
    category: "Virginia Regulation"
  },
  {
    id: 19,
    question: "Must Virginia residents submit fingerprints when applying for an insurance license?",
    options: [
      "No, fingerprints not required",
      "Yes, through Fieldprint",
      "Only for non-residents",
      "Only if requested by Bureau"
    ],
    correctAnswer: 1,
    explanation: "Virginia residents applying for new insurance licenses must submit fingerprints through Fieldprint. The fingerprints must be less than 90 days old when the application is submitted.",
    category: "Virginia Regulation"
  },
  {
    id: 20,
    question: "What is 'misrepresentation' in insurance?",
    options: [
      "False advertising",
      "Providing false or misleading information on an application",
      "Denying claims",
      "Policy errors"
    ],
    correctAnswer: 1,
    explanation: "Misrepresentation (Virginia Code § 38.2-502) is providing false, incomplete, or misleading information on an insurance application. Material misrepresentation can void coverage.",
    category: "Virginia Regulation"
  },
  {
    id: 21,
    question: "An agent must report disciplinary actions by another state to the Virginia Bureau within:",
    options: [
      "10 days",
      "20 days",
      "30 days",
      "60 days"
    ],
    correctAnswer: 2,
    explanation: "Virginia Code § 38.2-1826(C) requires agents to report disciplinary actions taken by other states within 30 days to ensure the Bureau is aware of all regulatory actions.",
    category: "Virginia Regulation"
  },
  {
    id: 22,
    question: "What is the purpose of the Fair Credit Reporting Act (FCRA)?",
    options: [
      "Set insurance rates",
      "Protect consumer credit information and regulate its use in underwriting",
      "Regulate bank loans",
      "Set policy terms"
    ],
    correctAnswer: 1,
    explanation: "The FCRA (15 USC 1681) protects consumers by regulating how credit information is collected, used, and disclosed. Insurers must notify applicants if they use credit information in underwriting decisions.",
    category: "Virginia Regulation"
  },
  {
    id: 23,
    question: "What does the National Association of Insurance Commissioners (NAIC) do?",
    options: [
      "Issues insurance licenses",
      "Coordinates regulation among states and develops model laws",
      "Sells insurance policies",
      "Handles consumer complaints"
    ],
    correctAnswer: 1,
    explanation: "The NAIC is an organization of state insurance regulators that coordinates regulation, develops model laws and regulations, and provides resources, but does not directly regulate insurers or agents.",
    category: "Virginia Regulation"
  },
  {
    id: 24,
    question: "Under Virginia law, what is 'unfair discrimination'?",
    options: [
      "Charging different rates based on legitimate risk factors",
      "Making distinctions based on race, religion, or other prohibited factors",
      "Declining high-risk applicants",
      "Offering safe driver discounts"
    ],
    correctAnswer: 1,
    explanation: "Unfair discrimination (Virginia Code § 38.2-508) means making distinctions based on race, religion, national origin, or other prohibited factors rather than legitimate underwriting criteria.",
    category: "Virginia Regulation"
  },
  {
    id: 25,
    question: "How long does a Virginia insurance agent have to act on each appointment?",
    options: [
      "Agent appointments don't expire",
      "1 year",
      "2 years with the license renewal",
      "5 years"
    ],
    correctAnswer: 2,
    explanation: "Agent appointments in Virginia are typically renewed with the agent's license every 2 years. Agents must maintain active appointments to sell for each company.",
    category: "Virginia Regulation"
  },
  {
    id: 26,
    question: "What is the penalty for acting as an agent without a license in Virginia?",
    options: [
      "Warning only",
      "$500 fine",
      "Misdemeanor, fine up to $5,000, possible jail time",
      "$100 fine"
    ],
    correctAnswer: 2,
    explanation: "Acting as an insurance agent without a license is a Class 1 misdemeanor in Virginia, punishable by fines up to $5,000 and potential imprisonment. Each violation can be charged separately.",
    category: "Virginia Regulation"
  },
  {
    id: 27,
    question: "What must happen before an agent can solicit insurance for a newly appointed company?",
    options: [
      "Wait 30 days",
      "Receive acknowledgment of appointment",
      "Take company exam",
      "Complete training course"
    ],
    correctAnswer: 1,
    explanation: "Agents must receive acknowledgment of appointment from the insurer before beginning to solicit business. Soliciting before receiving appointment acknowledgment violates Virginia law.",
    category: "Virginia Regulation"
  },
  {
    id: 28,
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
    id: 29,
    question: "Which agency investigates insurance fraud in Virginia?",
    options: [
      "Local police only",
      "State Corporation Commission Bureau of Insurance",
      "FBI only",
      "Consumer protection agency"
    ],
    correctAnswer: 1,
    explanation: "The State Corporation Commission's Bureau of Insurance investigates insurance fraud in Virginia. Violations of 18 USC 1033 and 1034 make insurance fraud a federal crime as well.",
    category: "Virginia Regulation"
  },
  {
    id: 30,
    question: "What is the main difference between an independent agent and a captive agent?",
    options: [
      "License type",
      "Independent represents multiple companies; captive represents one company",
      "Compensation structure only",
      "Geographic territory"
    ],
    correctAnswer: 1,
    explanation: "Independent agents represent multiple insurance companies and can shop coverage among carriers. Captive agents represent only one insurance company or group of companies.",
    category: "Virginia Regulation"
  },
  {
    id: 31,
    question: "What is 'apparent authority' of an agent?",
    options: [
      "Written in the agency contract",
      "Authority the public reasonably believes the agent has based on insurer's actions",
      "Stated in the insurance policy",
      "Granted by the state"
    ],
    correctAnswer: 1,
    explanation: "Apparent authority is authority the public reasonably believes an agent possesses based on the insurer's actions or representations, even if not formally granted.",
    category: "Virginia Regulation"
  },
  {
    id: 32,
    question: "Can an insurer cancel an agent's appointment without cause?",
    options: [
      "No, cause must always be shown",
      "Yes, but must provide proper notice",
      "No, requires Bureau approval",
      "Only after 1 year"
    ],
    correctAnswer: 1,
    explanation: "Insurers can terminate appointments but must follow proper notice requirements under Virginia Code § 38.2-1834. Certain terminations for cause must be reported to the Bureau.",
    category: "Virginia Regulation"
  },
  {
    id: 33,
    question: "What type of insurer is owned by policyholders?",
    options: [
      "Stock company",
      "Mutual company",
      "Reciprocal exchange",
      "Lloyd's association"
    ],
    correctAnswer: 1,
    explanation: "A mutual insurance company is owned by its policyholders, who may receive dividends. Stock companies are owned by shareholders who receive profits.",
    category: "Virginia Regulation"
  },
  {
    id: 34,
    question: "What is a 'reciprocal exchange'?",
    options: [
      "Reinsurance agreement",
      "Unincorporated group of individuals insuring each other's risks",
      "Foreign insurer",
      "Government insurance"
    ],
    correctAnswer: 1,
    explanation: "A reciprocal exchange is an unincorporated group where each member (subscriber) insures the risks of other members. Managed by an attorney-in-fact.",
    category: "Virginia Regulation"
  },
  {
    id: 35,
    question: "What is a 'surplus lines' insurer?",
    options: [
      "Insurer with excess capacity",
      "Non-admitted insurer used when coverage unavailable from admitted insurers",
      "Reinsurance company",
      "Government insurer"
    ],
    correctAnswer: 1,
    explanation: "Surplus lines insurers are non-admitted carriers used through licensed surplus lines brokers when coverage cannot be obtained from admitted (licensed) insurers in the state.",
    category: "Virginia Regulation"
  },
  {
    id: 36,
    question: "What is the difference between admitted and non-admitted insurers?",
    options: [
      "Premium cost",
      "Admitted are licensed in the state; non-admitted are not",
      "Type of coverage offered",
      "No difference"
    ],
    correctAnswer: 1,
    explanation: "Admitted insurers are licensed by the state and must comply with all state regulations. Non-admitted insurers are not licensed in the state and are used only through surplus lines procedures.",
    category: "Virginia Regulation"
  },

  // GENERAL INSURANCE (24 questions - 12% of 200)
  {
    id: 37,
    question: "What is 'risk' in insurance?",
    options: [
      "The insurance company",
      "Uncertainty or chance of loss",
      "The premium amount",
      "A type of policy"
    ],
    correctAnswer: 1,
    explanation: "Risk is the uncertainty or chance that a loss will occur. Insurance is designed to transfer the financial consequences of risk from the individual to the insurance company.",
    category: "General Insurance"
  },
  {
    id: 38,
    question: "What is a 'peril'?",
    options: [
      "The property insured",
      "The cause of loss (fire, theft, windstorm)",
      "The premium amount",
      "A condition increasing loss likelihood"
    ],
    correctAnswer: 1,
    explanation: "A peril is the specific cause of loss, such as fire, windstorm, theft, or collision. Insurance policies cover specified perils or all perils except those excluded.",
    category: "General Insurance"
  },
  {
    id: 39,
    question: "What is a 'hazard'?",
    options: [
      "Same as a peril",
      "A condition that increases the likelihood or severity of loss",
      "The deductible",
      "The insured property"
    ],
    correctAnswer: 1,
    explanation: "A hazard is a condition that increases the chance or potential severity of loss. Examples include icy steps (physical hazard), dishonesty (moral hazard), or carelessness (morale hazard).",
    category: "General Insurance"
  },
  {
    id: 40,
    question: "What is a 'physical hazard'?",
    options: [
      "Careless behavior",
      "Tangible condition increasing loss chance (icy steps, worn tires)",
      "Dishonesty",
      "Intentional damage"
    ],
    correctAnswer: 1,
    explanation: "A physical hazard is a tangible, observable condition that increases the likelihood or severity of loss, such as icy sidewalks, defective wiring, or worn tires.",
    category: "General Insurance"
  },
  {
    id: 41,
    question: "What is a 'moral hazard'?",
    options: [
      "Physical condition",
      "Dishonesty or character defects increasing loss likelihood",
      "Legal liability",
      "Building construction type"
    ],
    correctAnswer: 1,
    explanation: "Moral hazard refers to dishonesty or character defects that increase the chance of loss, such as intentionally causing damage to collect insurance money or submitting false claims.",
    category: "General Insurance"
  },
  {
    id: 42,
    question: "What is a 'morale hazard'?",
    options: [
      "Building materials",
      "Carelessness or indifference to loss because insurance exists",
      "Criminal intent",
      "Natural disaster risk"
    ],
    correctAnswer: 1,
    explanation: "Morale hazard is carelessness or indifference to loss prevention because insurance exists, such as leaving doors unlocked or not maintaining property because 'insurance will cover it.'",
    category: "General Insurance"
  },
  {
    id: 43,
    question: "What does 'risk avoidance' mean?",
    options: [
      "Buying insurance",
      "Eliminating risk by not engaging in an activity",
      "Reducing loss frequency",
      "Sharing losses"
    ],
    correctAnswer: 1,
    explanation: "Risk avoidance means eliminating exposure to loss by not engaging in the activity that creates the risk. Example: Not owning a swimming pool avoids pool-related liability.",
    category: "General Insurance"
  },
  {
    id: 44,
    question: "What is 'risk retention'?",
    options: [
      "Buying insurance",
      "Accepting and bearing the financial consequences of loss (self-insurance)",
      "Avoiding all risk",
      "Transferring risk"
    ],
    correctAnswer: 1,
    explanation: "Risk retention means accepting responsibility for losses and bearing the financial consequences. Examples include deductibles, self-insurance, and going without insurance.",
    category: "General Insurance"
  },
  {
    id: 45,
    question: "What is 'risk transfer'?",
    options: [
      "Moving to safer location",
      "Shifting financial burden of loss to an insurer by purchasing insurance",
      "Canceling coverage",
      "Self-insuring"
    ],
    correctAnswer: 1,
    explanation: "Risk transfer occurs when the insured shifts the financial consequences of potential losses to an insurance company by purchasing a policy and paying premiums.",
    category: "General Insurance"
  },
  {
    id: 46,
    question: "What is 'risk reduction'?",
    options: [
      "Lowering premiums",
      "Taking measures to reduce frequency or severity of losses",
      "Canceling insurance",
      "Avoiding all activities"
    ],
    correctAnswer: 1,
    explanation: "Risk reduction involves taking steps to minimize the frequency or severity of losses, such as installing sprinklers, alarm systems, or implementing safety programs.",
    category: "General Insurance"
  },
  {
    id: 47,
    question: "What is the 'law of large numbers'?",
    options: [
      "More coverage is better",
      "The larger the sample size, the more predictable the loss experience",
      "Large losses are excluded",
      "Multiple policies required"
    ],
    correctAnswer: 1,
    explanation: "The law of large numbers states that as the number of exposure units increases, actual loss experience becomes more predictable. This is the foundation that allows insurance to function.",
    category: "General Insurance"
  },
  {
    id: 48,
    question: "What is 'adverse selection'?",
    options: [
      "Insurer denying claims",
      "Tendency for higher-risk individuals to seek insurance",
      "Poor investment choices",
      "Agent misconduct"
    ],
    correctAnswer: 1,
    explanation: "Adverse selection occurs when those most likely to suffer losses are more likely to purchase insurance, creating imbalance in the risk pool. Insurers combat this through underwriting.",
    category: "General Insurance"
  },
  {
    id: 49,
    question: "What is 'reinsurance'?",
    options: [
      "Renewing a policy",
      "Insurance purchased by insurers to transfer part of their risk",
      "Insuring the same property twice",
      "Canceling and reissuing coverage"
    ],
    correctAnswer: 1,
    explanation: "Reinsurance is insurance purchased by insurance companies to transfer portions of their risk portfolios to other companies, protecting against large losses and maintaining solvency.",
    category: "General Insurance"
  },
  {
    id: 50,
    question: "What are the elements of a legally enforceable insurance contract?",
    options: [
      "Premium and policy only",
      "Offer and acceptance, consideration, competent parties, legal purpose",
      "Application and approval only",
      "Signatures and witnesses"
    ],
    correctAnswer: 1,
    explanation: "A valid insurance contract requires: (1) Offer and acceptance (agreement), (2) Consideration (premium for coverage), (3) Competent parties, and (4) Legal purpose.",
    category: "General Insurance"
  },
  {
    id: 51,
    question: "What is 'consideration' in an insurance contract?",
    options: [
      "Thoughtful behavior",
      "Something of value exchanged - premium for coverage promise",
      "The application",
      "Policy conditions"
    ],
    correctAnswer: 1,
    explanation: "Consideration is something of value exchanged by both parties. In insurance, the insured's consideration is the premium payment and application statements; the insurer's is the promise to pay covered losses.",
    category: "General Insurance"
  },
  {
    id: 52,
    question: "What does 'utmost good faith' mean in insurance?",
    options: [
      "Religious requirements",
      "Both parties must deal honestly and disclose all material facts",
      "Faith in the insurer",
      "Maximum coverage limits"
    ],
    correctAnswer: 1,
    explanation: "Utmost good faith (uberrimae fidei) means both the insurer and insured must act honestly, disclose all material facts, and not withhold information affecting the risk.",
    category: "General Insurance"
  },
  {
    id: 53,
    question: "What is 'indemnity' in insurance?",
    options: [
      "Insurance pays more than the loss",
      "Insurance restores the insured to their financial position before loss, no better or worse",
      "Maximum coverage available",
      "All losses covered"
    ],
    correctAnswer: 1,
    explanation: "Indemnity means insurance aims to restore the insured to their approximate financial position before the loss - no profit, no additional loss. The insured should not gain financially from insurance.",
    category: "General Insurance"
  },
  {
    id: 54,
    question: "What is a 'representation' in insurance?",
    options: [
      "The insurance agent",
      "Statements made by applicant believed to be true to best of their knowledge",
      "A guarantee",
      "The policy terms"
    ],
    correctAnswer: 1,
    explanation: "Representations are statements made by the applicant that are believed to be true to the best of their knowledge. Material misrepresentations can void coverage.",
    category: "General Insurance"
  },
  {
    id: 55,
    question: "What is a 'warranty' in insurance?",
    options: [
      "Product guarantee",
      "Statement guaranteed by the insured to be absolutely true",
      "Extended coverage",
      "Premium discount"
    ],
    correctAnswer: 1,
    explanation: "A warranty is a statement the insured guarantees to be absolutely and literally true. Breach of warranty can void coverage, even if it didn't contribute to the loss.",
    category: "General Insurance"
  },
  {
    id: 56,
    question: "What is 'concealment' in insurance?",
    options: [
      "Privacy protection",
      "Intentionally withholding material facts from the insurer",
      "Hiding damaged property",
      "A coverage type"
    ],
    correctAnswer: 1,
    explanation: "Concealment is intentionally withholding or hiding material facts that would affect the insurer's decision to issue coverage or set the premium. It can void the policy.",
    category: "General Insurance"
  },
  {
    id: 57,
    question: "What is 'fraud' in insurance?",
    options: [
      "Making honest mistakes",
      "Intentional deception to gain unfair advantage or deny others their rights",
      "Policy errors",
      "Premium miscalculation"
    ],
    correctAnswer: 1,
    explanation: "Insurance fraud is intentional deception (lying, concealment, false statements) to gain unfair financial advantage or deny others their legal rights. It is a crime under state and federal law.",
    category: "General Insurance"
  },
  {
    id: 58,
    question: "What is a 'waiver' in insurance?",
    options: [
      "Policy cancellation",
      "Voluntarily giving up a known right",
      "Premium discount",
      "Adding coverage"
    ],
    correctAnswer: 1,
    explanation: "A waiver is the voluntary, intentional relinquishment of a known right. Example: An insurer waives late payment penalties by accepting late premium without consequences.",
    category: "General Insurance"
  },
  {
    id: 59,
    question: "What is 'estoppel' in insurance?",
    options: [
      "Canceling coverage",
      "Preventing a party from denying something previously stated or implied",
      "Premium calculation",
      "Adding insureds"
    ],
    correctAnswer: 1,
    explanation: "Estoppel prevents a party from contradicting previous statements or actions that another party relied upon. Example: If an insurer led someone to believe coverage exists, estoppel may prevent denial.",
    category: "General Insurance"
  },
  {
    id: 60,
    question: "How are ambiguities in a contract of adhesion interpreted?",
    options: [
      "In favor of the insurer",
      "In favor of the insured",
      "By a judge only",
      "Not interpreted"
    ],
    correctAnswer: 1,
    explanation: "Insurance policies are contracts of adhesion (drafted by insurer, take-it-or-leave-it). Ambiguities are interpreted in favor of the insured (contra proferentem rule) since they didn't draft the contract.",
    category: "General Insurance"
  },

  // PROPERTY & CASUALTY BASICS (40 questions - 20% of 200)
  {
    id: 61,
    question: "What is 'insurable interest' in property insurance?",
    options: [
      "Financial interest rate",
      "A legitimate financial interest in preservation of the property",
      "The policy premium",
      "Coverage limits"
    ],
    correctAnswer: 1,
    explanation: "Insurable interest means you have a legitimate financial interest in the property's preservation and would suffer financial loss if it were damaged or destroyed. Required at time of loss for property insurance.",
    category: "Property & Casualty Basics"
  },
  {
    id: 62,
    question: "When must insurable interest exist for property insurance?",
    options: [
      "At policy inception only",
      "At the time of loss",
      "Never required",
      "Only when applying"
    ],
    correctAnswer: 1,
    explanation: "For property insurance, insurable interest must exist at the time of loss. You must own or have a financial stake in the property when it's damaged to collect on a claim.",
    category: "Property & Casualty Basics"
  },
  {
    id: 63,
    question: "What is 'negligence'?",
    options: [
      "Criminal behavior",
      "Failure to exercise reasonable care, resulting in injury or damage to another",
      "Intentional harm",
      "Strict liability"
    ],
    correctAnswer: 1,
    explanation: "Negligence is the failure to exercise the degree of care that a reasonable person would exercise under similar circumstances, resulting in unintentional injury or damage to another.",
    category: "Property & Casualty Basics"
  },
  {
    id: 64,
    question: "What are the four elements required to prove negligence?",
    options: [
      "Duty, breach, causation, damages",
      "Intent, act, harm, awareness",
      "Crime, evidence, trial, verdict",
      "Claim, proof, payment, settlement"
    ],
    correctAnswer: 0,
    explanation: "The four elements of negligence are: (1) Duty owed to another, (2) Breach of that duty, (3) Proximate causation - breach caused the injury, and (4) Actual damages or injury resulted.",
    category: "Property & Casualty Basics"
  },
  {
    id: 65,
    question: "What is 'proximate cause'?",
    options: [
      "Nearest fire station",
      "The dominant cause that sets in motion an unbroken chain of events",
      "First event only",
      "Location of loss"
    ],
    correctAnswer: 1,
    explanation: "Proximate cause is the dominant or efficient cause of loss that sets other events in motion in a natural, unbroken sequence, producing the loss without other intervening causes.",
    category: "Property & Casualty Basics"
  },
  {
    id: 66,
    question: "What are 'compensatory damages'?",
    options: [
      "Punishment for wrongdoing",
      "Damages to compensate for actual losses (medical, lost wages, property damage)",
      "Court fees",
      "Insurance premiums"
    ],
    correctAnswer: 1,
    explanation: "Compensatory damages are intended to make the injured party whole by reimbursing actual losses such as medical expenses, lost wages, pain and suffering, and property damage.",
    category: "Property & Casualty Basics"
  },
  {
    id: 67,
    question: "What are 'punitive damages'?",
    options: [
      "Compensation for losses",
      "Damages awarded to punish defendant for reckless or intentional conduct",
      "Medical expenses",
      "Property repair costs"
    ],
    correctAnswer: 1,
    explanation: "Punitive (exemplary) damages are awarded in addition to compensatory damages to punish the defendant for particularly reckless, malicious, or intentional wrongful conduct and deter similar behavior.",
    category: "Property & Casualty Basics"
  },
  {
    id: 68,
    question: "What is 'absolute (strict) liability'?",
    options: [
      "No liability exists",
      "Liability without fault for inherently dangerous activities",
      "Maximum liability limits",
      "Liability with negligence"
    ],
    correctAnswer: 1,
    explanation: "Absolute or strict liability holds a party liable for damages regardless of fault or negligence. Applied to inherently dangerous activities (dynamite blasting, keeping wild animals).",
    category: "Property & Casualty Basics"
  },
  {
    id: 69,
    question: "What is 'vicarious liability'?",
    options: [
      "Shared insurance",
      "Being held liable for the negligent acts of another (employee, family member)",
      "Criminal liability",
      "Product liability"
    ],
    correctAnswer: 1,
    explanation: "Vicarious liability holds one party liable for the negligent acts of another based on their relationship. Example: Employers liable for employees acting within scope of employment.",
    category: "Property & Casualty Basics"
  },
  {
    id: 70,
    question: "What is 'actual cash value' (ACV)?",
    options: [
      "Original purchase price",
      "Replacement cost minus depreciation",
      "Market value only",
      "Policy limit"
    ],
    correctAnswer: 1,
    explanation: "Actual cash value is the replacement cost of property minus depreciation for age, wear, and tear. It represents the property's fair market value at the time of loss.",
    category: "Property & Casualty Basics"
  },
  {
    id: 71,
    question: "What is 'replacement cost'?",
    options: [
      "Original cost",
      "Cost to replace with new property of like kind and quality, no depreciation",
      "Market value",
      "Insured's estimate"
    ],
    correctAnswer: 1,
    explanation: "Replacement cost is the amount needed to replace damaged property with new property of like kind and quality without any deduction for depreciation.",
    category: "Property & Casualty Basics"
  },
  {
    id: 72,
    question: "What is 'functional replacement cost'?",
    options: [
      "Same as ACV",
      "Cost to replace with functionally equivalent property using modern materials",
      "Original cost",
      "Market value"
    ],
    correctAnswer: 1,
    explanation: "Functional replacement cost pays to replace property with functionally equivalent property using modern materials and methods. Used when exact replacement isn't feasible (antique fixtures).",
    category: "Property & Casualty Basics"
  },
  {
    id: 73,
    question: "What is 'guaranteed replacement cost'?",
    options: [
      "ACV coverage",
      "Pays full cost to rebuild home even if it exceeds policy limit",
      "Lower than actual cost",
      "Only up to policy limit"
    ],
    correctAnswer: 1,
    explanation: "Guaranteed replacement cost coverage pays the full cost to rebuild your home to its original condition, even if the cost exceeds the policy limit, typically up to a certain percentage over the limit.",
    category: "Property & Casualty Basics"
  },
  {
    id: 74,
    question: "What is 'market value'?",
    options: [
      "Replacement cost",
      "Price property would sell for on the open market",
      "Original cost",
      "Policy limit"
    ],
    correctAnswer: 1,
    explanation: "Market value is the price property would likely sell for on the open market between a willing buyer and willing seller. Considers location, condition, and market conditions.",
    category: "Property & Casualty Basics"
  },
  {
    id: 75,
    question: "What is an 'agreed value' policy?",
    options: [
      "ACV settlement",
      "Insurer and insured agree on property value in advance",
      "Market value settlement",
      "No coinsurance"
    ],
    correctAnswer: 1,
    explanation: "An agreed value policy means the insurer and insured agree on the property's value when the policy is written, eliminating disputes about value at claim time and suspending coinsurance requirements.",
    category: "Property & Casualty Basics"
  },
  {
    id: 76,
    question: "What is 'subrogation'?",
    options: [
      "Canceling coverage",
      "Insurer's right to recover from negligent third party after paying claim",
      "Adding coverage",
      "Premium refund"
    ],
    correctAnswer: 1,
    explanation: "Subrogation allows the insurer to 'step into the shoes' of the insured and pursue recovery from negligent third parties after paying a claim, preventing the insured from collecting twice.",
    category: "Property & Casualty Basics"
  },
  {
    id: 77,
    question: "What is the 'liberalization clause'?",
    options: [
      "Flexible premiums",
      "Automatically provides broader coverage if insurer revises forms during policy period",
      "Extended coverage",
      "Premium discount"
    ],
    correctAnswer: 1,
    explanation: "The liberalization clause automatically provides the insured with any broadened coverage if the insurer adopts broader forms or endorsements during the policy period, without additional premium.",
    category: "Property & Casualty Basics"
  },
  {
    id: 78,
    question: "What is 'abandonment' in property insurance?",
    options: [
      "Canceling the policy",
      "Relinquishing damaged property to the insurer",
      "Vacating the premises",
      "Moving property"
    ],
    correctAnswer: 1,
    explanation: "Abandonment is when the insured tries to relinquish damaged property to the insurer and demand full payment. Most policies prohibit abandonment - the insured cannot force the insurer to take property.",
    category: "Property & Casualty Basics"
  },
  {
    id: 79,
    question: "What is 'salvage'?",
    options: [
      "Covered property",
      "Damaged property the insurer takes ownership of after paying total loss",
      "Property saved from loss",
      "Recovered stolen property"
    ],
    correctAnswer: 1,
    explanation: "Salvage is damaged property remaining after a total loss that the insurer takes title to after paying the claim. The insurer may sell it to recover part of the claim payment.",
    category: "Property & Casualty Basics"
  },
  {
    id: 80,
    question: "What does 'other insurance' provision address?",
    options: [
      "Adding more coverage",
      "How coverage applies when multiple policies cover same loss",
      "Requiring additional policies",
      "Canceling coverage"
    ],
    correctAnswer: 1,
    explanation: "The 'other insurance' clause determines how the policy responds when multiple policies cover the same loss, typically providing that coverage will be prorated among the policies.",
    category: "Property & Casualty Basics"
  },
  {
    id: 81,
    question: "What is 'pro rata' other insurance?",
    options: [
      "Full payment from each policy",
      "Each insurer pays proportionally based on their limit compared to total limits",
      "Only one policy pays",
      "No coverage applies"
    ],
    correctAnswer: 1,
    explanation: "Pro rata (proportional) means each insurer pays a share of the loss based on the proportion their limit bears to the total coverage available from all applicable policies.",
    category: "Property & Casualty Basics"
  },
  {
    id: 82,
    question: "What is 'excess' other insurance?",
    options: [
      "Covers all losses",
      "Policy pays only after other insurance is exhausted",
      "Primary coverage",
      "No coverage"
    ],
    correctAnswer: 1,
    explanation: "Excess other insurance means the policy pays only after other applicable insurance is exhausted. It provides secondary coverage above and beyond primary policies.",
    category: "Property & Casualty Basics"
  },
  {
    id: 83,
    question: "What is 'primary' other insurance?",
    options: [
      "Policy pays after others",
      "Policy pays first before other insurance applies",
      "Equal sharing",
      "No coverage"
    ],
    correctAnswer: 1,
    explanation: "Primary insurance pays first up to its limits before any excess or secondary insurance applies. It is the first layer of coverage responding to a loss.",
    category: "Property & Casualty Basics"
  },
  {
    id: 84,
    question: "What is a 'per occurrence' limit?",
    options: [
      "Annual maximum",
      "Maximum paid for all claims from one accident/event",
      "Per person limit",
      "Monthly limit"
    ],
    correctAnswer: 1,
    explanation: "A per occurrence limit is the maximum amount the insurer will pay for all claims arising from a single accident or occurrence, regardless of the number of injured parties.",
    category: "Property & Casualty Basics"
  },
  {
    id: 85,
    question: "What is a 'per person' limit?",
    options: [
      "Total limit available",
      "Maximum paid to any one person injured in an accident",
      "Aggregate limit",
      "Deductible amount"
    ],
    correctAnswer: 1,
    explanation: "A per person limit is the maximum amount the insurer will pay for injuries to any one individual in an accident, even if occurrence limits are higher.",
    category: "Property & Casualty Basics"
  },
  {
    id: 86,
    question: "What are 'split limits'?",
    options: [
      "One combined limit",
      "Separate limits for bodily injury per person, per accident, and property damage",
      "Divided premiums",
      "Shared policies"
    ],
    correctAnswer: 1,
    explanation: "Split limits provide separate coverage amounts for bodily injury per person, bodily injury per accident, and property damage per accident, such as 50/100/25.",
    category: "Property & Casualty Basics"
  },
  {
    id: 87,
    question: "What is a 'combined single limit'?",
    options: [
      "Two separate limits",
      "One total limit for all bodily injury and property damage in one accident",
      "Per person limit only",
      "No limit"
    ],
    correctAnswer: 1,
    explanation: "A combined single limit (CSL) provides one total amount of coverage applying to all bodily injury and property damage claims from a single accident, with no separate per-person sublimit.",
    category: "Property & Casualty Basics"
  },
  {
    id: 88,
    question: "What is 'coinsurance'?",
    options: [
      "Two policies",
      "Requirement to insure property to specified percentage of value or face penalty",
      "Premium sharing",
      "The deductible"
    ],
    correctAnswer: 1,
    explanation: "Coinsurance requires the insured to maintain coverage equal to a specified percentage (typically 80%) of property value. Failure to do so results in a penalty where the insured becomes a co-insurer.",
    category: "Property & Casualty Basics"
  },
  {
    id: 89,
    question: "What is 'blanket coverage'?",
    options: [
      "No coverage",
      "One limit applying to multiple buildings, locations, or types of property",
      "Basic coverage",
      "Temporary insurance"
    ],
    correctAnswer: 1,
    explanation: "Blanket insurance applies a single limit to multiple buildings, locations, or types of property (building and contents), providing flexibility in claim settlement without individual item limits.",
    category: "Property & Casualty Basics"
  },
  {
    id: 90,
    question: "What is 'specific coverage'?",
    options: [
      "Blanket coverage",
      "Separate limits for each building, location, or type of property",
      "Named perils only",
      "Liability insurance"
    ],
    correctAnswer: 1,
    explanation: "Specific insurance applies separate, individual limits to each building, location, or category of property listed in the policy, as opposed to one blanket limit.",
    category: "Property & Casualty Basics"
  },
  {
    id: 91,
    question: "What is a 'named perils' policy?",
    options: [
      "Lists covered individuals",
      "Covers only perils specifically listed in the policy",
      "All-risk coverage",
      "Liability only"
    ],
    correctAnswer: 1,
    explanation: "Named perils coverage provides protection only for specific perils (causes of loss) listed in the policy, such as fire, lightning, windstorm, hail, theft, etc.",
    category: "Property & Casualty Basics"
  },
  {
    id: 92,
    question: "What is 'open perils' (special form) coverage?",
    options: [
      "No exclusions",
      "Covers all causes of loss except those specifically excluded",
      "Named perils only",
      "Limited coverage"
    ],
    correctAnswer: 1,
    explanation: "Open perils (all-risk or special form) coverage protects against all causes of loss EXCEPT those specifically excluded in the policy, providing broader protection than named perils.",
    category: "Property & Casualty Basics"
  },
  {
    id: 93,
    question: "What is a 'direct loss'?",
    options: [
      "Consequential loss",
      "Physical loss or damage to property",
      "Business income loss",
      "Liability loss"
    ],
    correctAnswer: 1,
    explanation: "A direct loss is physical loss or damage to property caused directly by a covered peril, such as fire burning a building or wind damaging a roof.",
    category: "Property & Casualty Basics"
  },
  {
    id: 94,
    question: "What is a 'consequential (indirect) loss'?",
    options: [
      "Physical property damage",
      "Loss resulting as a consequence of direct physical damage",
      "Liability claim",
      "No loss occurred"
    ],
    correctAnswer: 1,
    explanation: "Consequential or indirect loss results as a consequence of direct physical damage but is not the direct physical damage itself. Example: Lost income when business closes due to fire.",
    category: "Property & Casualty Basics"
  },
  {
    id: 95,
    question: "What is the difference between 'vacant' and 'unoccupied'?",
    options: [
      "No difference",
      "Vacant has no contents; unoccupied has contents but no people",
      "Same meaning",
      "Vacant means for sale"
    ],
    correctAnswer: 1,
    explanation: "Vacant means the property lacks both occupants and contents/furnishings. Unoccupied means the property contains furnishings but has no people present. Extended vacancy can restrict coverage.",
    category: "Property & Casualty Basics"
  },
  {
    id: 96,
    question: "What is a 'standard mortgage clause'?",
    options: [
      "Loan agreement",
      "Protects lender's interest even if insured's coverage is voided",
      "Premium payment plan",
      "Required coverage"
    ],
    correctAnswer: 1,
    explanation: "The standard mortgage clause protects the mortgagee's (lender's) interest in the property even if the insured's coverage is voided due to fraud or policy violations. The lender receives payment for their interest.",
    category: "Property & Casualty Basics"
  },
  {
    id: 97,
    question: "What is a 'loss payable clause'?",
    options: [
      "Same as standard mortgage clause",
      "Makes loss payment to secured party, but their protection ends if insured's coverage is voided",
      "Premium payment terms",
      "Claims procedure"
    ],
    correctAnswer: 1,
    explanation: "A loss payable clause directs payment to a secured party (lienholder) but does NOT provide the same protections as a standard mortgage clause. If the insured's coverage is voided, the loss payee's protection also ends.",
    category: "Property & Casualty Basics"
  },
  {
    id: 98,
    question: "What is 'no benefit to bailee' clause?",
    options: [
      "Protects bailees",
      "Prevents coverage from automatically extending to bailee having custody of property",
      "Provides bailee coverage",
      "Premium discount"
    ],
    correctAnswer: 1,
    explanation: "The 'no benefit to bailee' clause states that insurance coverage does not automatically extend to protect a bailee (someone who has temporary custody) of the insured property.",
    category: "Property & Casualty Basics"
  },
  {
    id: 99,
    question: "What is an 'appraisal' clause?",
    options: [
      "Property inspection",
      "Dispute resolution process where each party selects an appraiser to determine loss value",
      "Premium calculation",
      "Policy renewal"
    ],
    correctAnswer: 1,
    explanation: "The appraisal clause provides a dispute resolution process when the insured and insurer disagree on the value of loss. Each party selects an appraiser; if they disagree, an umpire decides.",
    category: "Property & Casualty Basics"
  },
  {
    id: 100,
    question: "What is the insurer's 'duty to defend'?",
    options: [
      "Repair property",
      "Provide legal defense for covered liability claims, even if groundless",
      "Pay all claims",
      "Investigate losses"
    ],
    correctAnswer: 1,
    explanation: "Under liability coverage, the insurer has a duty to defend the insured against covered claims, even if the allegations are groundless, false, or fraudulent. Defense costs are typically paid in addition to policy limits.",
    category: "Property & Casualty Basics"
  },

  // DWELLING POLICY (16 questions - 8% of 200)
  {
    id: 101,
    question: "Who is the Dwelling Policy designed for?",
    options: [
      "Owner-occupied single family homes",
      "Rental properties, vacation homes, and properties not eligible for homeowners",
      "Commercial buildings",
      "Mobile homes only"
    ],
    correctAnswer: 1,
    explanation: "Dwelling policies are designed for rental properties, seasonal/vacation homes, homes under construction, and properties that don't meet homeowners eligibility (owner-occupied). They provide more limited coverage than homeowners policies.",
    category: "Dwelling Policy"
  },
  {
    id: 102,
    question: "Which Dwelling form provides the most limited (basic) coverage?",
    options: [
      "DP-1 Basic Form",
      "DP-2 Broad Form",
      "DP-3 Special Form",
      "All are equal"
    ],
    correctAnswer: 0,
    explanation: "DP-1 Basic Form provides the most limited coverage with only basic named perils (fire, lightning, internal explosion, windstorm, hail, smoke, aircraft, vehicles, riot, volcanic eruption).",
    category: "Dwelling Policy"
  },
  {
    id: 103,
    question: "How many named perils does the DP-2 Broad Form cover?",
    options: [
      "10 perils",
      "16 perils",
      "18 perils",
      "All perils"
    ],
    correctAnswer: 1,
    explanation: "DP-2 Broad Form covers 16 named perils, including all DP-1 perils plus falling objects, weight of ice/snow/sleet, water damage, freezing, electrical damage, and volcanic eruption.",
    category: "Dwelling Policy"
  },
  {
    id: 104,
    question: "How does DP-3 Special Form cover the dwelling?",
    options: [
      "Named perils only",
      "Open perils (all risks except those excluded)",
      "No coverage",
      "Basic perils only"
    ],
    correctAnswer: 1,
    explanation: "DP-3 covers the dwelling and other structures on an open perils (special form) basis - all causes of loss except those specifically excluded. Personal property is still covered on named perils basis.",
    category: "Dwelling Policy"
  },
  {
    id: 105,
    question: "What is Coverage A in a Dwelling Policy?",
    options: [
      "Personal property",
      "The dwelling building itself",
      "Other structures",
      "Liability"
    ],
    correctAnswer: 1,
    explanation: "Coverage A insures the dwelling building itself - the house and structures attached to it. It does not cover the land the dwelling sits on.",
    category: "Dwelling Policy"
  },
  {
    id: 106,
    question: "What is Coverage B in a Dwelling Policy?",
    options: [
      "The dwelling",
      "Other structures separate from the dwelling (garage, shed)",
      "Personal property",
      "Liability"
    ],
    correctAnswer: 1,
    explanation: "Coverage B insures other structures on the premises that are detached from the dwelling, such as a detached garage, shed, or fence. Typically 10% of Coverage A.",
    category: "Dwelling Policy"
  },
  {
    id: 107,
    question: "What is Coverage C in a Dwelling Policy?",
    options: [
      "Dwelling",
      "Other structures",
      "Personal property (contents)",
      "Liability"
    ],
    correctAnswer: 2,
    explanation: "Coverage C insures personal property (contents) owned by the insured. In dwelling policies, this is typically optional coverage.",
    category: "Dwelling Policy"
  },
  {
    id: 108,
    question: "What is Coverage D - Fair Rental Value?",
    options: [
      "Property value",
      "Loss of rental income when dwelling is uninhabitable due to covered loss",
      "Market rent rates",
      "Tenant's coverage"
    ],
    correctAnswer: 1,
    explanation: "Fair Rental Value pays for loss of rental income when the dwelling is uninhabitable due to a covered loss, minus expenses that don't continue.",
    category: "Dwelling Policy"
  },
  {
    id: 109,
    question: "What is Coverage E - Additional Living Expense?",
    options: [
      "Extra insurance",
      "Increased costs to maintain normal living standards when dwelling is uninhabitable",
      "Rental income",
      "Property damage"
    ],
    correctAnswer: 1,
    explanation: "Additional Living Expense pays the increased costs to maintain your normal standard of living when the dwelling is uninhabitable due to a covered loss (hotel, meals, etc.).",
    category: "Dwelling Policy"
  },
  {
    id: 110,
    question: "Are liability coverages included automatically in Dwelling policies?",
    options: [
      "Yes, automatically included",
      "No, must add separate Personal Liability Supplement",
      "Only in DP-3",
      "Only in DP-1"
    ],
    correctAnswer: 1,
    explanation: "Dwelling policies do NOT automatically include liability coverage. You must add the separate Personal Liability Supplement (similar to homeowners Coverage E and F).",
    category: "Dwelling Policy"
  },
  {
    id: 111,
    question: "What does the Automatic Increase in Insurance endorsement (DP 04 11) do?",
    options: [
      "Lowers premiums",
      "Automatically increases coverage limits annually to keep pace with inflation",
      "Adds liability",
      "Covers floods"
    ],
    correctAnswer: 1,
    explanation: "The Automatic Increase in Insurance endorsement (Inflation Guard) automatically increases dwelling coverage limits annually by a specified percentage to keep pace with inflation and rising construction costs.",
    category: "Dwelling Policy"
  },
  {
    id: 112,
    question: "How are losses typically settled under DP-1?",
    options: [
      "Replacement cost",
      "Actual cash value",
      "Agreed value",
      "Market value"
    ],
    correctAnswer: 1,
    explanation: "DP-1 Basic Form typically pays losses on an actual cash value basis (replacement cost minus depreciation). DP-2 and DP-3 can be endorsed for replacement cost.",
    category: "Dwelling Policy"
  },
  {
    id: 113,
    question: "What does the Broad Theft Coverage endorsement (DP 05 72) add?",
    options: [
      "Fire coverage",
      "Broader theft coverage for on and off-premises property",
      "Liability coverage",
      "Water damage"
    ],
    correctAnswer: 1,
    explanation: "The Broad Theft Coverage endorsement provides broader theft coverage, including theft of property on and away from the premises, with higher limits than the basic policy.",
    category: "Dwelling Policy"
  },
  {
    id: 114,
    question: "What is the Dwelling Under Construction endorsement (DP 11 43)?",
    options: [
      "Completed structures only",
      "Covers dwelling while under construction or renovation",
      "Commercial builders",
      "Equipment coverage"
    ],
    correctAnswer: 1,
    explanation: "The Dwelling Under Construction endorsement provides coverage for the dwelling while it's being built or substantially renovated, subject to specific conditions and inspections.",
    category: "Dwelling Policy"
  },
  {
    id: 115,
    question: "What is typically NOT covered under a standard Dwelling Policy?",
    options: [
      "Fire",
      "Theft",
      "Flood",
      "Windstorm"
    ],
    correctAnswer: 2,
    explanation: "Flood damage is excluded from all standard dwelling policies. Flood insurance must be purchased separately through the National Flood Insurance Program (NFIP) or private insurers.",
    category: "Dwelling Policy"
  },
  {
    id: 116,
    question: "In a Dwelling Policy, who can be the named insured?",
    options: [
      "Owner-occupants only",
      "Property owners, whether they occupy it or not",
      "Renters only",
      "Commercial entities only"
    ],
    correctAnswer: 1,
    explanation: "Dwelling policies can be written for property owners regardless of whether they occupy the dwelling. This includes landlords, owners of vacation homes, and owners of properties under construction.",
    category: "Dwelling Policy"
  },

  // HOMEOWNERS POLICY (34 questions - 17% of 200)
  {
    id: 117,
    question: "Which Homeowners form is the most popular?",
    options: [
      "HO-2",
      "HO-3 Special Form",
      "HO-4",
      "HO-5"
    ],
    correctAnswer: 1,
    explanation: "HO-3 Special Form is the most popular homeowners policy. It covers the dwelling on open perils (special form) and personal property on named perils (broad form) basis.",
    category: "Homeowners Policy"
  },
  {
    id: 118,
    question: "How does HO-3 cover the dwelling vs. personal property?",
    options: [
      "Both named perils",
      "Dwelling: open perils; Personal property: named perils",
      "Both open perils",
      "No coverage"
    ],
    correctAnswer: 1,
    explanation: "HO-3 covers the dwelling (Coverage A) and other structures (Coverage B) on an open perils basis, but personal property (Coverage C) on a named perils basis.",
    category: "Homeowners Policy"
  },
  {
    id: 119,
    question: "What is HO-4?",
    options: [
      "Homeowners policy",
      "Renters/Tenants policy",
      "Condo policy",
      "Mobile home policy"
    ],
    correctAnswer: 1,
    explanation: "HO-4 is the Renters or Tenants policy covering personal property and liability for people who rent their residence. It does not cover the building structure (landlord's responsibility).",
    category: "Homeowners Policy"
  },
  {
    id: 120,
    question: "What is HO-6?",
    options: [
      "Renters policy",
      "Condominium Unit-Owners policy",
      "Mobile home policy",
      "Standard homeowners"
    ],
    correctAnswer: 1,
    explanation: "HO-6 is the Condominium Unit-Owners policy covering the unit owner's personal property, interior improvements/betterments, loss assessment, and liability. The association insures the building and common areas.",
    category: "Homeowners Policy"
  },
  {
    id: 121,
    question: "What is HO-5?",
    options: [
      "Renters policy",
      "Comprehensive Form with open perils on dwelling AND personal property",
      "Basic policy",
      "Condo policy"
    ],
    correctAnswer: 1,
    explanation: "HO-5 Comprehensive Form provides the broadest coverage with open perils (special form) coverage on both the dwelling AND personal property. Most expensive but most comprehensive.",
    category: "Homeowners Policy"
  },
  {
    id: 122,
    question: "Coverage B (Other Structures) is typically what percentage of Coverage A?",
    options: [
      "5%",
      "10%",
      "15%",
      "20%"
    ],
    correctAnswer: 1,
    explanation: "Coverage B for other structures (detached garage, shed, fence) is typically 10% of the Coverage A dwelling limit.",
    category: "Homeowners Policy"
  },
  {
    id: 123,
    question: "Coverage C (Personal Property) is typically what percentage of Coverage A?",
    options: [
      "25%",
      "50%",
      "75%",
      "100%"
    ],
    correctAnswer: 1,
    explanation: "Coverage C for personal property is typically 50% of the Coverage A dwelling limit. Example: $200,000 dwelling = $100,000 personal property.",
    category: "Homeowners Policy"
  },
  {
    id: 124,
    question: "What is Coverage D - Loss of Use typically?",
    options: [
      "10% of Coverage A",
      "20% of Coverage A",
      "30% of Coverage A",
      "50% of Coverage A"
    ],
    correctAnswer: 1,
    explanation: "Coverage D (Loss of Use) for additional living expenses is typically 20% of Coverage A, or actual loss sustained for up to 24 months.",
    category: "Homeowners Policy"
  },
  {
    id: 125,
    question: "What is typical Coverage E (Personal Liability) limit?",
    options: [
      "$50,000",
      "$100,000 to $300,000",
      "$1,000,000",
      "$25,000"
    ],
    correctAnswer: 1,
    explanation: "Coverage E (Personal Liability) typically ranges from $100,000 to $300,000, with $100,000 being standard. Higher limits are available and recommended.",
    category: "Homeowners Policy"
  },
  {
    id: 126,
    question: "What is typical Coverage F (Medical Payments to Others) limit?",
    options: [
      "$500",
      "$1,000 to $5,000",
      "$25,000",
      "$50,000"
    ],
    correctAnswer: 1,
    explanation: "Coverage F (Medical Payments to Others) typically ranges from $1,000 to $5,000 per person, with $1,000 or $2,000 being most common.",
    category: "Homeowners Policy"
  },
  {
    id: 127,
    question: "What is the special limit for money, bank notes, and coins?",
    options: [
      "$100",
      "$200",
      "$500",
      "$1,000"
    ],
    correctAnswer: 1,
    explanation: "The HO-3 limits coverage for money, bank notes, bullion, gold, silver, and coins to $200 total. Higher limits require scheduling.",
    category: "Homeowners Policy"
  },
  {
    id: 128,
    question: "What is the special limit for theft of jewelry, watches, and furs?",
    options: [
      "$500",
      "$1,000",
      "$1,500",
      "$2,500"
    ],
    correctAnswer: 2,
    explanation: "Theft of jewelry, watches, furs, and precious stones is limited to $1,500 total. Items should be scheduled on a Personal Articles Floater (HO 04 61) for full value.",
    category: "Homeowners Policy"
  },
  {
    id: 129,
    question: "What is the special limit for theft of firearms?",
    options: [
      "$1,000",
      "$1,500",
      "$2,500",
      "$5,000"
    ],
    correctAnswer: 2,
    explanation: "Theft of firearms is limited to $2,500 total under standard homeowners policies. Valuable gun collections should be scheduled separately.",
    category: "Homeowners Policy"
  },
  {
    id: 130,
    question: "What is the special limit for theft of silverware?",
    options: [
      "$1,500",
      "$2,500",
      "$5,000",
      "$10,000"
    ],
    correctAnswer: 1,
    explanation: "Theft of silverware, goldware, and pewterware is limited to $2,500 total. Valuable silver collections should be scheduled for full coverage.",
    category: "Homeowners Policy"
  },
  {
    id: 131,
    question: "What does HO 04 90 provide?",
    options: [
      "Earthquake coverage",
      "Personal Property Replacement Cost settlement",
      "Flood coverage",
      "Liability extension"
    ],
    correctAnswer: 1,
    explanation: "HO 04 90 Personal Property Replacement Cost Loss Settlement endorsement pays replacement cost for personal property rather than depreciated actual cash value.",
    category: "Homeowners Policy"
  },
  {
    id: 132,
    question: "What does HO 04 61 provide?",
    options: [
      "Flood coverage",
      "Scheduled Personal Property coverage for high-value items",
      "Earthquake coverage",
      "Liability increase"
    ],
    correctAnswer: 1,
    explanation: "HO 04 61 Scheduled Personal Property Endorsement allows high-value items to be listed individually with agreed values and broader coverage, often with no deductible.",
    category: "Homeowners Policy"
  },
  {
    id: 133,
    question: "What does HO 04 54 provide?",
    options: [
      "Flood coverage",
      "Earthquake coverage",
      "Wind coverage",
      "Theft coverage"
    ],
    correctAnswer: 1,
    explanation: "HO 04 54 is the Earthquake Endorsement adding coverage for earthquake damage, which is excluded from standard policies. It includes a separate percentage deductible.",
    category: "Homeowners Policy"
  },
  {
    id: 134,
    question: "What does HO 04 42 provide?",
    options: [
      "Flood coverage",
      "Permitted Incidental Occupancies (home business) coverage",
      "Earthquake coverage",
      "Rental property coverage"
    ],
    correctAnswer: 1,
    explanation: "HO 04 42 Permitted Incidental Occupancies endorsement extends limited coverage for small home-based businesses, increasing business property limits and adding some liability.",
    category: "Homeowners Policy"
  },
  {
    id: 135,
    question: "To receive replacement cost on dwelling coverage, most policies require insuring to at least what percentage of replacement value?",
    options: [
      "50%",
      "70%",
      "80%",
      "100%"
    ],
    correctAnswer: 2,
    explanation: "Most homeowners policies require dwelling coverage of at least 80% of replacement cost to avoid coinsurance penalty and receive full replacement cost benefits up to policy limits.",
    category: "Homeowners Policy"
  },
  {
    id: 136,
    question: "Trees, shrubs, and plants coverage is limited to what percent of Coverage A?",
    options: [
      "2%",
      "5%",
      "10%",
      "15%"
    ],
    correctAnswer: 1,
    explanation: "Trees, shrubs, and plants are covered up to 5% of Coverage A, with a $500 per-item limit, for loss from named perils like fire or vehicle damage (not wind or disease).",
    category: "Homeowners Policy"
  },
  {
    id: 137,
    question: "What is the typical fire department service charge coverage limit?",
    options: [
      "$250",
      "$500",
      "$1,000",
      "$2,000"
    ],
    correctAnswer: 1,
    explanation: "Fire department service charge coverage typically pays up to $500 when the fire department charges for responding to save or protect covered property from a covered peril.",
    category: "Homeowners Policy"
  },
  {
    id: 138,
    question: "What is the typical loss assessment coverage limit?",
    options: [
      "$500",
      "$1,000",
      "$2,500",
      "$5,000"
    ],
    correctAnswer: 1,
    explanation: "Loss assessment coverage typically provides $1,000 to pay the insured's share of assessments by a homeowners association for covered losses to common property. Higher limits available.",
    category: "Homeowners Policy"
  },
  {
    id: 139,
    question: "Credit card coverage provides up to what limit?",
    options: [
      "$250",
      "$500",
      "$1,000",
      "$2,000"
    ],
    correctAnswer: 1,
    explanation: "Credit card, fund transfer card, and forgery coverage provides up to $500 protection against unauthorized use, with no deductible.",
    category: "Homeowners Policy"
  },
  {
    id: 140,
    question: "What is the typical limit for refrigerated products coverage?",
    options: [
      "$250",
      "$500",
      "$1,000",
      "$2,000"
    ],
    correctAnswer: 1,
    explanation: "Refrigerated products coverage typically pays up to $500 for food spoilage due to power outage or mechanical failure of refrigeration equipment, with no deductible.",
    category: "Homeowners Policy"
  },
  {
    id: 141,
    question: "Who is excluded from Coverage F (Medical Payments to Others)?",
    options: [
      "Guests",
      "Named insured and resident relatives",
      "Delivery persons",
      "Neighbors"
    ],
    correctAnswer: 1,
    explanation: "Coverage F pays medical expenses for OTHERS injured on your property or by your activities. The named insured, resident relatives, and regular residents are excluded.",
    category: "Homeowners Policy"
  },
  {
    id: 142,
    question: "Is flood damage covered under a standard HO-3?",
    options: [
      "Yes, automatically",
      "No, requires separate flood insurance",
      "Yes, but limited",
      "Only if endorsed"
    ],
    correctAnswer: 1,
    explanation: "Flood damage is excluded from all standard homeowners policies. Flood insurance must be purchased separately through the National Flood Insurance Program (NFIP) or private insurers.",
    category: "Homeowners Policy"
  },
  {
    id: 143,
    question: "Is earthquake damage covered under a standard HO-3?",
    options: [
      "Yes, automatically",
      "No, requires HO 04 54 Earthquake Endorsement",
      "Yes, but limited",
      "Only for minor damage"
    ],
    correctAnswer: 1,
    explanation: "Earthquake damage is excluded from standard homeowners policies. Coverage requires the HO 04 54 Earthquake Endorsement with a separate percentage deductible.",
    category: "Homeowners Policy"
  },
  {
    id: 144,
    question: "What does the 'debris removal' additional coverage provide?",
    options: [
      "Landscaping services",
      "Pays to remove debris of covered property after a covered loss",
      "Garbage collection",
      "Tree trimming"
    ],
    correctAnswer: 1,
    explanation: "Debris removal pays costs to remove debris of covered property damaged by a covered cause of loss. Provides additional 5% of Coverage A limit if the dwelling limit plus debris removal exceeds policy limits.",
    category: "Homeowners Policy"
  },
  {
    id: 145,
    question: "What does 'reasonable repairs' additional coverage pay for?",
    options: [
      "All home repairs",
      "Repairs made solely to protect property from further damage after a loss",
      "Regular maintenance",
      "Upgrades"
    ],
    correctAnswer: 1,
    explanation: "Reasonable repairs coverage pays for temporary repairs made solely to protect property from further damage after a covered loss, such as covering a damaged roof.",
    category: "Homeowners Policy"
  },
  {
    id: 146,
    question: "What does 'property removed' additional coverage do?",
    options: [
      "Moving expenses",
      "Extends coverage to property removed from premises to protect from a peril",
      "Theft coverage",
      "Storage unit coverage"
    ],
    correctAnswer: 1,
    explanation: "Property removed coverage extends protection for up to 30 days to property removed from the premises to protect it from a covered peril.",
    category: "Homeowners Policy"
  },
  {
    id: 147,
    question: "What is the typical special limit for business property on-premises?",
    options: [
      "$1,000",
      "$2,500",
      "$5,000",
      "$10,000"
    ],
    correctAnswer: 1,
    explanation: "Business property kept at home is limited to $2,500 on premises and $250 away from premises. Substantial business property requires separate business insurance.",
    category: "Homeowners Policy"
  },
  {
    id: 148,
    question: "What does HO 04 97 provide?",
    options: [
      "Earthquake coverage",
      "Home Daycare endorsement",
      "Flood coverage",
      "Umbrella liability"
    ],
    correctAnswer: 1,
    explanation: "HO 04 97 Home Daycare endorsement provides limited coverage for home-based daycare operations, which would otherwise be excluded under standard policies.",
    category: "Homeowners Policy"
  },
  {
    id: 149,
    question: "What is 'ordinance or law' coverage?",
    options: [
      "Legal expense coverage",
      "Covers increased costs to rebuild to current building codes",
      "Zoning compliance",
      "Permit fees"
    ],
    correctAnswer: 1,
    explanation: "Ordinance or law coverage pays increased costs to rebuild to current building codes when older structures are damaged. Standard policies provide limited coverage; additional available by endorsement.",
    category: "Homeowners Policy"
  },
  {
    id: 150,
    question: "Is mold damage covered under HO-3?",
    options: [
      "Always fully covered",
      "Limited coverage if it results from a covered peril (typically $10,000)",
      "Never covered",
      "Only with endorsement"
    ],
    correctAnswer: 1,
    explanation: "Mold (fungi) coverage is limited, typically to $10,000, and only if it results from a covered water damage cause of loss. Broader mold coverage requires endorsements.",
    category: "Homeowners Policy"
  },

  // AUTO INSURANCE (40 questions - 20% of 200)
  {
    id: 151,
    question: "What are Virginia's minimum auto liability limits effective January 1, 2025?",
    options: [
      "$25,000/$50,000/$20,000",
      "$30,000/$60,000/$20,000",
      "$50,000/$100,000/$25,000",
      "$100,000/$300,000/$50,000"
    ],
    correctAnswer: 2,
    explanation: "Virginia Code § 46.2-472 requires minimum auto liability of $50,000 per person, $100,000 per accident for bodily injury, and $25,000 for property damage (50/100/25) for policies effective on or after January 1, 2025.",
    category: "Auto Insurance"
  },
  {
    id: 152,
    question: "What happened to Virginia's $500 uninsured motor vehicle fee?",
    options: [
      "Increased to $750",
      "Eliminated July 1, 2024 - insurance now mandatory",
      "Reduced to $250",
      "Still available"
    ],
    correctAnswer: 1,
    explanation: "Virginia eliminated the $500 uninsured motor vehicle (UMV) fee on July 1, 2024. Auto insurance is now mandatory for all registered vehicles.",
    category: "Auto Insurance"
  },
  {
    id: 153,
    question: "Is uninsured motorist (UM) coverage mandatory in Virginia?",
    options: [
      "No, completely optional",
      "Yes, must be offered with limits equal to liability unless rejected in writing",
      "Only for new cars",
      "Only if required by lender"
    ],
    correctAnswer: 1,
    explanation: "Virginia Code § 38.2-2206 requires insurers to offer uninsured/underinsured motorist coverage with limits equal to liability limits unless the insured rejects or reduces coverage in writing.",
    category: "Auto Insurance"
  },
  {
    id: 154,
    question: "What is the minimum property damage coverage in Virginia UM coverage?",
    options: [
      "$10,000",
      "$15,000",
      "$20,000",
      "$25,000"
    ],
    correctAnswer: 2,
    explanation: "Virginia UM coverage must include at least $20,000 for property damage caused by uninsured motorists, and may include a $200 deductible for hit-and-run accidents.",
    category: "Auto Insurance"
  },
  {
    id: 155,
    question: "Who is covered under a Personal Auto Policy (PAP)?",
    options: [
      "Named insured only",
      "Named insured, resident family members, and permissive users",
      "Anyone who drives",
      "Licensed drivers only"
    ],
    correctAnswer: 1,
    explanation: "The PAP covers the named insured, resident relatives/family members, and any person using the covered auto with permission (permissive user).",
    category: "Auto Insurance"
  },
  {
    id: 156,
    question: "What is collision coverage?",
    options: [
      "All physical damage",
      "Damage from impact with vehicle or object, or vehicle overturn",
      "Theft and vandalism",
      "Mechanical breakdown"
    ],
    correctAnswer: 1,
    explanation: "Collision coverage pays for damage to your vehicle from impact with another vehicle or object, or from your vehicle rolling over. Subject to a deductible.",
    category: "Auto Insurance"
  },
  {
    id: 157,
    question: "What is comprehensive (other than collision) coverage?",
    options: [
      "All damage",
      "Damage from non-collision perils like theft, vandalism, fire, hitting animal",
      "Collision only",
      "Liability only"
    ],
    correctAnswer: 1,
    explanation: "Comprehensive or 'other than collision' coverage pays for damage from non-collision perils including theft, vandalism, fire, hail, flood, glass, hitting animals, etc.",
    category: "Auto Insurance"
  },
  {
    id: 158,
    question: "If you hit a deer, which coverage applies?",
    options: [
      "Collision",
      "Comprehensive",
      "Liability",
      "Uninsured motorist"
    ],
    correctAnswer: 1,
    explanation: "Hitting an animal (such as a deer) is covered under comprehensive (other than collision) coverage, not collision coverage.",
    category: "Auto Insurance"
  },
  {
    id: 159,
    question: "What does medical payments (MedPay) coverage pay for?",
    options: [
      "Injuries to others you hit",
      "Medical expenses for you and passengers, regardless of fault",
      "Vehicle repairs",
      "Only if at fault"
    ],
    correctAnswer: 1,
    explanation: "Medical payments coverage pays reasonable medical expenses for the insured and passengers in the covered vehicle, regardless of who was at fault in the accident.",
    category: "Auto Insurance"
  },
  {
    id: 160,
    question: "What is a 'permissive user'?",
    options: [
      "Licensed driver only",
      "Someone using the vehicle with owner's permission",
      "Family member only",
      "Named insured only"
    ],
    correctAnswer: 1,
    explanation: "A permissive user is any person using the covered auto with the express or implied permission of the named insured. Generally covered under the owner's policy.",
    category: "Auto Insurance"
  },
  {
    id: 161,
    question: "Under PAP, 'newly acquired auto' physical damage coverage typically extends for:",
    options: [
      "7 days",
      "14 days if any vehicle has that coverage",
      "30 days",
      "60 days"
    ],
    correctAnswer: 1,
    explanation: "The PAP automatically extends collision and comprehensive to a newly acquired vehicle for 14 days if any vehicle on the policy already has that coverage. Liability extends automatically.",
    category: "Auto Insurance"
  },
  {
    id: 162,
    question: "Which coverage pays if you damage someone's fence with your car?",
    options: [
      "Collision",
      "Property damage liability",
      "Comprehensive",
      "Uninsured motorist"
    ],
    correctAnswer: 1,
    explanation: "Property damage liability coverage pays for damage you cause to another person's property, such as their fence, vehicle, or building.",
    category: "Auto Insurance"
  },
  {
    id: 163,
    question: "What is 'underinsured motorist' (UIM) coverage?",
    options: [
      "For drivers without a license",
      "Pays when at-fault driver's limits are insufficient to cover your damages",
      "Covers your vehicle",
      "Lowers your liability"
    ],
    correctAnswer: 1,
    explanation: "Underinsured motorist coverage pays when the at-fault driver's liability limits are insufficient to cover your injuries or damages. It bridges the gap between their coverage and your actual losses.",
    category: "Auto Insurance"
  },
  {
    id: 164,
    question: "What is 'stacking' of UM coverage?",
    options: [
      "Two separate policies",
      "Combining UM limits from multiple vehicles on same policy",
      "Increasing limits annually",
      "Adding UM to collision"
    ],
    correctAnswer: 1,
    explanation: "Stacking allows combining or 'stacking' uninsured motorist coverage limits from multiple vehicles on the same policy to provide higher total coverage for a single claim.",
    category: "Auto Insurance"
  },
  {
    id: 165,
    question: "What does 'towing and labor' coverage pay for?",
    options: [
      "Collision repairs only",
      "Towing and on-scene labor when vehicle is disabled",
      "Regular maintenance",
      "Fuel delivery only"
    ],
    correctAnswer: 1,
    explanation: "Towing and labor coverage reimburses towing costs and labor charges at the scene when the vehicle is disabled, up to policy limits, regardless of cause.",
    category: "Auto Insurance"
  },
  {
    id: 166,
    question: "What is 'rental reimbursement' coverage?",
    options: [
      "Pays for rental car damage",
      "Pays daily rental costs while your car is repaired after covered loss",
      "Permanent replacement",
      "Ride-share expenses"
    ],
    correctAnswer: 1,
    explanation: "Rental reimbursement pays a specified daily amount (up to policy limits) for a rental vehicle while your covered auto is being repaired or replaced after a covered loss.",
    category: "Auto Insurance"
  },
  {
    id: 167,
    question: "How is actual cash value (ACV) calculated for an auto total loss?",
    options: [
      "Original purchase price",
      "Replacement cost minus depreciation",
      "Book value only",
      "Trade-in value"
    ],
    correctAnswer: 1,
    explanation: "Actual cash value is calculated as the cost to replace the vehicle with a similar one (replacement cost) minus depreciation for age, wear, and condition.",
    category: "Auto Insurance"
  },
  {
    id: 168,
    question: "What is GAP insurance?",
    options: [
      "Geographic coverage",
      "Covers difference between ACV and amount owed on financed/leased vehicle",
      "Collision coverage",
      "Liability extension"
    ],
    correctAnswer: 1,
    explanation: "Guaranteed Auto Protection (GAP) insurance covers the difference between what you owe on a financed or leased vehicle and its actual cash value if it's totaled.",
    category: "Auto Insurance"
  },
  {
    id: 169,
    question: "Virginia Amendment of Policy Provisions endorsement (PP 01 99 01 25) does what?",
    options: [
      "Increases coverage",
      "Modifies policy to comply with Virginia law and regulations",
      "Adds vehicles",
      "Lowers premiums"
    ],
    correctAnswer: 1,
    explanation: "The Virginia Amendment endorsement (PP 01 99) modifies the standard PAP to comply with Virginia-specific laws and regulations.",
    category: "Auto Insurance"
  },
  {
    id: 170,
    question: "Virginia Medical Expense and Income Loss Benefits endorsement (PP 05 96 01 20) provides what?",
    options: [
      "Replaces MedPay",
      "Optional PIP-type coverage for medical expenses and lost income",
      "Liability coverage",
      "Property coverage"
    ],
    correctAnswer: 1,
    explanation: "This Virginia endorsement provides optional Personal Injury Protection (PIP) style coverage for medical expenses and income loss, similar to no-fault benefits.",
    category: "Auto Insurance"
  },
  {
    id: 171,
    question: "What must insurers do when they cancel or nonrenew a Virginia auto policy?",
    options: [
      "No notice required",
      "Provide specific notice requirements and timing per Virginia law",
      "Email only",
      "Verbal notice acceptable"
    ],
    correctAnswer: 1,
    explanation: "Virginia Code § 38.2-231, 2208, 2212 requires specific written notice with stated reasons and timing when canceling or nonrenewing auto insurance, including notice of assigned risk plan eligibility.",
    category: "Auto Insurance"
  },
  {
    id: 172,
    question: "Can Virginia insurers use after-market parts in repairs?",
    options: [
      "Yes, without disclosure",
      "Only with advance disclosure to insured",
      "Never allowed",
      "Only for cosmetic parts"
    ],
    correctAnswer: 1,
    explanation: "Virginia Code § 38.2-510(C) requires insurers to disclose in advance if after-market (non-OEM) parts will be used in repairs.",
    category: "Auto Insurance"
  },
  {
    id: 173,
    question: "Can drivers be excluded from Virginia auto policies?",
    options: [
      "No, never",
      "Yes, with named driver exclusion endorsement per Virginia Code § 38.2-2204",
      "Yes, verbally",
      "Only unlicensed drivers"
    ],
    correctAnswer: 1,
    explanation: "Virginia Code § 38.2-2204 allows insurers to exclude named drivers from coverage by endorsement, typically used for high-risk household members.",
    category: "Auto Insurance"
  },
  {
    id: 174,
    question: "What is the Virginia Automobile Insurance Plan?",
    options: [
      "Discount program",
      "Assigned risk plan for drivers unable to obtain coverage in voluntary market",
      "Government insurance",
      "Group policy"
    ],
    correctAnswer: 1,
    explanation: "The Virginia Automobile Insurance Plan (RL 46.2-464-471) is the assigned risk plan that provides insurance to drivers who cannot obtain coverage in the voluntary market.",
    category: "Auto Insurance"
  },
  {
    id: 175,
    question: "What are 'supplementary payments' under auto liability?",
    options: [
      "Extra premiums",
      "Defense costs, court costs, bail bonds paid in addition to limits",
      "Physical damage payments",
      "Premium refunds"
    ],
    correctAnswer: 1,
    explanation: "Supplementary payments include defense costs, court costs, bail bonds (up to $250), and other specified expenses paid by the insurer in addition to the policy limits.",
    category: "Auto Insurance"
  },
  {
    id: 176,
    question: "What is a 'non-owned auto'?",
    options: [
      "Stolen vehicle",
      "Vehicle the insured doesn't own but uses regularly (borrowed, rental)",
      "Company car",
      "Uninsured vehicle"
    ],
    correctAnswer: 1,
    explanation: "A non-owned auto is a vehicle the insured does not own but uses with permission, such as a borrowed car or rental. PAP typically extends liability coverage to non-owned autos.",
    category: "Auto Insurance"
  },
  {
    id: 177,
    question: "What is the 'other insurance' provision in auto policies?",
    options: [
      "Cannot have multiple policies",
      "Explains how coverage applies when more than one policy covers same loss",
      "Requires additional coverage",
      "Cancels all other policies"
    ],
    correctAnswer: 1,
    explanation: "The 'other insurance' clause determines how the policy responds when multiple policies cover the same loss, typically providing that coverage will be prorated or one policy is excess.",
    category: "Auto Insurance"
  },
  {
    id: 178,
    question: "Your teenage daughter living with you borrows your car. Is she covered?",
    options: [
      "No, needs own policy",
      "Yes, as a resident family member",
      "Only if listed",
      "No, unless 18+"
    ],
    correctAnswer: 1,
    explanation: "Resident family members, including your teenage daughter living at home, are automatically insured under your PAP for liability, medical payments, and UM/UIM coverage.",
    category: "Auto Insurance"
  },
  {
    id: 179,
    question: "What is 'betterment' in auto physical damage claims?",
    options: [
      "Upgrading to newer model",
      "Increased value when old parts are replaced with new",
      "Higher coverage limits",
      "Safe driver discount"
    ],
    correctAnswer: 1,
    explanation: "Betterment is the increased value when worn or damaged parts are replaced with new ones. Insurers may reduce claim payments to account for this improvement in the vehicle's condition.",
    category: "Auto Insurance"
  },
  {
    id: 180,
    question: "Can you use your personal auto for ride-sharing (Uber, Lyft) without special coverage?",
    options: [
      "Yes, fully covered",
      "No, requires ride-sharing endorsement or commercial policy",
      "Yes, if you notify insurer",
      "Only on weekends"
    ],
    correctAnswer: 1,
    explanation: "Using a personal auto for commercial transportation like ride-sharing is excluded under standard PAP. Requires a ride-sharing endorsement or commercial policy.",
    category: "Auto Insurance"
  },
  {
    id: 181,
    question: "What is the Virginia Transportation Expenses Coverage endorsement (PP 13 52 10 20)?",
    options: [
      "Towing coverage",
      "Rental reimbursement coverage specific to Virginia",
      "Fuel coverage",
      "Uber/taxi coverage"
    ],
    correctAnswer: 1,
    explanation: "This Virginia-specific endorsement provides rental reimbursement coverage, paying daily transportation expenses while your vehicle is repaired.",
    category: "Auto Insurance"
  },
  {
    id: 182,
    question: "What is the Virginia Joint Ownership Coverage endorsement (PP 13 53 01 20)?",
    options: [
      "Covers co-signers",
      "Provides coverage when vehicle is jointly owned by insureds on separate policies",
      "Community property",
      "Business partnerships"
    ],
    correctAnswer: 1,
    explanation: "The Joint Ownership endorsement addresses coverage when a vehicle is jointly owned by insureds who have separate auto policies, clarifying which policy is primary.",
    category: "Auto Insurance"
  },
  {
    id: 183,
    question: "What is the Virginia Extended Non-Owned Coverage endorsement (PP 13 56 01 20)?",
    options: [
      "Stolen vehicle coverage",
      "Extends coverage to regularly used non-owned vehicles",
      "Adds vehicles",
      "Commercial coverage"
    ],
    correctAnswer: 1,
    explanation: "This endorsement extends coverage to non-owned vehicles the named insured uses on a regular basis, beyond the standard PAP non-owned auto coverage.",
    category: "Auto Insurance"
  },
  {
    id: 184,
    question: "What is Virginia Uninsured Motorist Alternative Coverage (PP 14 34 07 23)?",
    options: [
      "Replaces UM",
      "Optional alternative UM coverage structure for Virginia",
      "Eliminates UM",
      "Increases liability"
    ],
    correctAnswer: 1,
    explanation: "This endorsement provides an alternative uninsured motorist coverage structure that may offer different terms or options while meeting Virginia requirements.",
    category: "Auto Insurance"
  },
  {
    id: 185,
    question: "What does the Loss Payable Clause (PP 03 05 09 18) do?",
    options: [
      "Increases coverage",
      "Directs physical damage loss payments to lienholder",
      "Lowers premiums",
      "Extends liability"
    ],
    correctAnswer: 1,
    explanation: "The Loss Payable Clause directs the insurer to pay physical damage claims to the loss payee (lienholder/lender) who has a financial interest in the vehicle.",
    category: "Auto Insurance"
  },
  {
    id: 186,
    question: "What is 'split limit' auto liability?",
    options: [
      "One combined limit",
      "Separate limits for bodily injury per person, per accident, and property damage",
      "Half coverage",
      "Divided deductibles"
    ],
    correctAnswer: 1,
    explanation: "Split limits provide separate coverage amounts for bodily injury per person, bodily injury per accident, and property damage per accident, such as Virginia's required 50/100/25.",
    category: "Auto Insurance"
  },
  {
    id: 187,
    question: "What is the Miscellaneous Type Vehicle endorsement (PP 13 63 01 20)?",
    options: [
      "Commercial vehicles",
      "Modifies coverage for motorcycles, ATVs, and similar vehicles",
      "Rental cars",
      "Classic cars"
    ],
    correctAnswer: 1,
    explanation: "This Virginia endorsement modifies the PAP to cover miscellaneous type vehicles like motorcycles, golf carts, or ATVs with appropriate adjustments to coverage.",
    category: "Auto Insurance"
  },
  {
    id: 188,
    question: "When must drivers provide proof of insurance in Virginia?",
    options: [
      "Only if asked by police",
      "When registering vehicle, renewing registration, and upon request",
      "Never required",
      "Only for new vehicles"
    ],
    correctAnswer: 1,
    explanation: "Virginia law requires proof of insurance when registering a vehicle, renewing registration, and upon request by law enforcement. Driving without insurance can result in license suspension.",
    category: "Auto Insurance"
  },
  {
    id: 189,
    question: "What is the Virginia Towing and Labor Costs endorsement (PP 13 55 01 20)?",
    options: [
      "Free towing",
      "Virginia-specific towing and labor coverage",
      "Unlimited towing",
      "Roadside assistance"
    ],
    correctAnswer: 1,
    explanation: "This Virginia-specific endorsement provides towing and labor coverage, paying for towing and labor costs when the vehicle is disabled.",
    category: "Auto Insurance"
  },
  {
    id: 190,
    question: "What happens if you let an excluded driver use your vehicle?",
    options: [
      "Full coverage applies",
      "No coverage for that accident",
      "Reduced coverage only",
      "Deductible doubles"
    ],
    correctAnswer: 1,
    explanation: "If you allow a driver who is specifically excluded by endorsement to use your vehicle, there will be no coverage for any accident involving that excluded driver.",
    category: "Auto Insurance"
  },

  // OTHER COVERAGES (10 questions - 5% of 200)
  {
    id: 191,
    question: "What is a personal umbrella liability policy?",
    options: [
      "Weather coverage",
      "Excess liability coverage above underlying auto and homeowners policies",
      "Property coverage",
      "Health insurance"
    ],
    correctAnswer: 1,
    explanation: "A personal umbrella policy provides excess liability coverage above underlying policies (auto, homeowners) and may cover some claims excluded by underlying policies, subject to a self-insured retention.",
    category: "Other Coverages"
  },
  {
    id: 192,
    question: "What is the National Flood Insurance Program (NFIP)?",
    options: [
      "Private insurance only",
      "Federal program providing flood insurance through participating insurers",
      "State program",
      "Only for coastal areas"
    ],
    correctAnswer: 1,
    explanation: "The NFIP is a federal program administered by FEMA that provides flood insurance through participating private insurers or the 'Write Your Own' program, as flood is excluded from standard policies.",
    category: "Other Coverages"
  },
  {
    id: 193,
    question: "What is 'Write Your Own' flood insurance?",
    options: [
      "Self-insurance",
      "Private insurers issue NFIP flood policies under their own name",
      "Manuscript policies",
      "No government backing"
    ],
    correctAnswer: 1,
    explanation: "Write Your Own allows private insurers to issue and service NFIP flood insurance policies under their own names, while the federal government retains the risk and sets rates.",
    category: "Other Coverages"
  },
  {
    id: 194,
    question: "Is flood insurance available for non-NFIP participants?",
    options: [
      "No, NFIP only",
      "Yes, private flood insurance is available",
      "Only for commercial",
      "Only coastal areas"
    ],
    correctAnswer: 1,
    explanation: "Private flood insurance is available outside the NFIP, often with broader coverage and potentially better pricing, though NFIP remains the primary source for flood coverage.",
    category: "Other Coverages"
  },
  {
    id: 195,
    question: "What is the Virginia Property Insurance Association (FAIR Plan)?",
    options: [
      "Discount program",
      "Residual market providing property insurance when coverage unavailable in voluntary market",
      "Group insurance",
      "Government insurance"
    ],
    correctAnswer: 1,
    explanation: "The Virginia FAIR Plan (Virginia Code § 38.2-2700-2707) is the basic property residual market providing fire and extended coverage when insurance cannot be obtained in the voluntary market.",
    category: "Other Coverages"
  },
  {
    id: 196,
    question: "What does a Personal Articles Floater cover?",
    options: [
      "Homes only",
      "Scheduled high-value personal property with broader coverage",
      "Auto accessories",
      "Business equipment"
    ],
    correctAnswer: 1,
    explanation: "A Personal Articles Floater provides broader, often all-risk coverage for scheduled high-value items like jewelry, fine arts, cameras, and musical instruments, typically with no deductible.",
    category: "Other Coverages"
  },
  {
    id: 197,
    question: "Virginia requires uninsured private pleasure watercraft coverage. What does this mean?",
    options: [
      "Covers your boat",
      "Liability for boats under specified size not requiring liability coverage",
      "Jet ski insurance",
      "Marina coverage"
    ],
    correctAnswer: 1,
    explanation: "Virginia Code § 38.2-2232 requires insurers to offer coverage for liability assumed under a rental agreement for small watercraft that don't require separate liability insurance.",
    category: "Other Coverages"
  },
  {
    id: 198,
    question: "What does a personal umbrella policy's 'self-insured retention' (SIR) mean?",
    options: [
      "No deductible",
      "Amount insured must pay before umbrella pays for claims not covered by underlying policy",
      "Premium amount",
      "Policy limit"
    ],
    correctAnswer: 1,
    explanation: "SIR is similar to a deductible. For claims not covered by underlying policies (but covered by umbrella), the insured must pay the SIR amount before the umbrella pays.",
    category: "Other Coverages"
  },
  {
    id: 199,
    question: "Do typical homeowners policies cover watercraft?",
    options: [
      "Yes, all watercraft",
      "Limited - small boats and outboard motors up to specified limits",
      "No watercraft coverage",
      "Only canoes"
    ],
    correctAnswer: 1,
    explanation: "Homeowners policies provide limited coverage for small boats, canoes, and outboard motors up to specified limits. Larger boats and watercraft with higher-horsepower motors require separate boat insurance.",
    category: "Other Coverages"
  },
  {
    id: 200,
    question: "What is required to obtain NFIP flood insurance?",
    options: [
      "Live in flood zone only",
      "Property must be in NFIP-participating community",
      "Own waterfront property",
      "Coastal location only"
    ],
    correctAnswer: 1,
    explanation: "To obtain NFIP flood insurance, the property must be located in a community that participates in the National Flood Insurance Program, which requires the community to adopt and enforce floodplain management ordinances.",
    category: "Other Coverages"
  }
];
