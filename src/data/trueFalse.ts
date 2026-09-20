export interface TrueFalse {
  id: number;
  statement: string;
  answer: boolean;
  explanation: string;
  category: string;
}

export const trueFalseQuestions: TrueFalse[] = [
  // Virginia Regulation (20 questions)
  {
    id: 1,
    statement: "Virginia requires 24 hours of continuing education every 2 years for insurance producers.",
    answer: false,
    explanation: "FALSE. Virginia requires 16 hours of CE every 2 years, including 3 hours of ethics.",
    category: "Virginia Regulation"
  },
  {
    id: 2,
    statement: "A Virginia insurance producer must notify the Bureau of Insurance within 30 days of any address change.",
    answer: true,
    explanation: "TRUE. Producers must notify within 30 days of residential or business address changes.",
    category: "Virginia Regulation"
  },
  {
    id: 3,
    statement: "Virginia is a no-fault auto insurance state.",
    answer: false,
    explanation: "FALSE. Virginia is a traditional tort state. PIP (no-fault) is not required in Virginia.",
    category: "Virginia Regulation"
  },
  {
    id: 4,
    statement: "Virginia's minimum auto liability limits are 25/50/20.",
    answer: true,
    explanation: "TRUE. Virginia requires minimum liability of $25,000 per person, $50,000 per accident for bodily injury, and $20,000 for property damage.",
    category: "Virginia Regulation"
  },
  {
    id: 5,
    statement: "In Virginia, Uninsured Motorist coverage must be offered and can only be rejected in writing.",
    answer: true,
    explanation: "TRUE. UM must be offered at limits equal to liability limits. It can be rejected, but only in writing by the named insured.",
    category: "Virginia Regulation"
  },
  {
    id: 6,
    statement: "The Virginia Personal Lines exam consists of 100 questions and has a 90-minute time limit.",
    answer: false,
    explanation: "FALSE. The exam has 100 scored questions (plus 5 pretest items) and a 120-minute (2-hour) time limit.",
    category: "Virginia Regulation"
  },
  {
    id: 7,
    statement: "Rebating is legal in Virginia if all customers are offered the same rebate.",
    answer: false,
    explanation: "FALSE. Rebating (offering inducements not specified in the policy) is illegal in Virginia regardless of whether it's offered to all customers.",
    category: "Virginia Regulation"
  },
  {
    id: 8,
    statement: "A Virginia producer's license expires biennially on the last day of the producer's birth month.",
    answer: true,
    explanation: "TRUE. Virginia licenses expire every 2 years on the last day of the licensee's birth month.",
    category: "Virginia Regulation"
  },
  {
    id: 9,
    statement: "If a Virginia producer's license lapses for more than 12 months, they must retake the licensing exam.",
    answer: true,
    explanation: "TRUE. After 12 months, the exam must be retaken. Within 12 months, reinstatement with fees and CE is possible.",
    category: "Virginia Regulation"
  },
  {
    id: 10,
    statement: "Virginia requires producers to carry errors and omissions (E&O) insurance.",
    answer: false,
    explanation: "FALSE. Virginia does not mandate E&O insurance, though it's highly recommended and some insurers require it.",
    category: "Virginia Regulation"
  },
  {
    id: 11,
    statement: "The Virginia Bureau of Insurance is part of the State Corporation Commission.",
    answer: true,
    explanation: "TRUE. The State Corporation Commission's Bureau of Insurance regulates insurance in Virginia.",
    category: "Virginia Regulation"
  },
  {
    id: 12,
    statement: "For non-payment of premium, Virginia requires at least 30 days' notice of cancellation.",
    answer: false,
    explanation: "FALSE. For non-payment, Virginia requires at least 15 days' notice. For other reasons: 45 days.",
    category: "Virginia Regulation"
  },
  {
    id: 13,
    statement: "Virginia uses a 'file and use' system for most personal auto insurance rates.",
    answer: true,
    explanation: "TRUE. Insurers file rates and may use them immediately unless the Commissioner disapproves them.",
    category: "Virginia Regulation"
  },
  {
    id: 14,
    statement: "Virginia eliminated the Uninsured Motorist Vehicle (UMV) fee effective July 1, 2024.",
    answer: true,
    explanation: "TRUE. The $500 UMV fee was eliminated on July 1, 2024, for most vehicles.",
    category: "Virginia Regulation"
  },
  {
    id: 15,
    statement: "A domestic insurer in Virginia is one incorporated in Virginia.",
    answer: true,
    explanation: "TRUE. Domestic = Virginia. Foreign = other U.S. states/territories. Alien = other countries.",
    category: "Virginia Regulation"
  },
  {
    id: 16,
    statement: "After an auto accident in Virginia, the producer must report the accident to the DMV within 24 hours.",
    answer: false,
    explanation: "FALSE. The driver (not the producer) must report accidents meeting certain criteria. Reporting requirements depend on injury/damage thresholds.",
    category: "Virginia Regulation"
  },
  {
    id: 17,
    statement: "Twisting is the act of using misrepresentation to induce a policyholder to lapse or switch policies.",
    answer: true,
    explanation: "TRUE. Twisting involves misleading comparisons or misrepresentation to induce someone to replace coverage to their detriment.",
    category: "Virginia Regulation"
  },
  {
    id: 18,
    statement: "An insurer must notify the Commissioner within 30 days of terminating a producer's appointment.",
    answer: true,
    explanation: "TRUE. Insurers must notify within 30 days, and include reasons if the termination is for cause.",
    category: "Virginia Regulation"
  },
  {
    id: 19,
    statement: "Temporary Virginia producer licenses are valid for 180 days and are renewable.",
    answer: false,
    explanation: "FALSE. Temporary licenses are valid for 180 days and are NOT renewable. They're typically issued after a producer's death or disability.",
    category: "Virginia Regulation"
  },
  {
    id: 20,
    statement: "Producers must report any criminal conviction to the Commissioner within 30 days.",
    answer: true,
    explanation: "TRUE. Producers must report criminal prosecutions, convictions, or administrative actions within 30 days.",
    category: "Virginia Regulation"
  },

  // General Insurance Principles (15 questions)
  {
    id: 21,
    statement: "The law of large numbers states that as the number of exposure units increases, actual losses become more predictable.",
    answer: true,
    explanation: "TRUE. This principle is fundamental to insurance and allows insurers to predict losses and set appropriate premiums.",
    category: "General Principles"
  },
  {
    id: 22,
    statement: "Adverse selection occurs when insurers select only the best risks.",
    answer: false,
    explanation: "FALSE. Adverse selection occurs when those most likely to have losses are most likely to seek insurance, creating a riskier-than-average pool.",
    category: "General Principles"
  },
  {
    id: 23,
    statement: "Insurable interest in property insurance must exist at the time of loss.",
    answer: true,
    explanation: "TRUE. Insurable interest must exist both at policy inception and at the time of loss for property insurance.",
    category: "General Principles"
  },
  {
    id: 24,
    statement: "A warranty in insurance must be substantially true, but minor inaccuracies are acceptable.",
    answer: false,
    explanation: "FALSE. A warranty must be absolutely true. Any breach of warranty can void coverage. Representations only need to be substantially true.",
    category: "General Principles"
  },
  {
    id: 25,
    statement: "Insurance policies are contracts of adhesion, meaning one party writes the contract and the other accepts or rejects it.",
    answer: true,
    explanation: "TRUE. The insurer drafts the policy; the insured accepts or rejects without negotiation. Ambiguities are interpreted in favor of the insured.",
    category: "General Principles"
  },
  {
    id: 26,
    statement: "Subrogation allows the insurer to sue a negligent third party after paying the insured's claim.",
    answer: true,
    explanation: "TRUE. Subrogation gives the insurer the right to recover from responsible third parties after paying the insured.",
    category: "General Principles"
  },
  {
    id: 27,
    statement: "A binder provides permanent insurance coverage.",
    answer: false,
    explanation: "FALSE. A binder provides temporary coverage until the actual policy is issued or the binder expires.",
    category: "General Principles"
  },
  {
    id: 28,
    statement: "Actual cash value (ACV) always means replacement cost minus depreciation.",
    answer: false,
    explanation: "FALSE. ACV has no single definition. It can be replacement cost minus depreciation, market value, or other methods depending on circumstances.",
    category: "General Principles"
  },
  {
    id: 29,
    statement: "Replacement cost coverage pays to replace damaged property without deducting depreciation.",
    answer: true,
    explanation: "TRUE. Replacement cost pays to repair or replace with like kind and quality, without depreciation deduction (unlike ACV).",
    category: "General Principles"
  },
  {
    id: 30,
    statement: "Pure risk involves the possibility of loss, no loss, or gain.",
    answer: false,
    explanation: "FALSE. Pure risk involves only loss or no loss (no possibility of gain). Speculative risk involves potential for gain or loss.",
    category: "General Principles"
  },
  {
    id: 31,
    statement: "Concealment is the intentional withholding of material information from the insurer.",
    answer: true,
    explanation: "TRUE. Concealment is intentionally failing to disclose material facts that would affect the insurer's decision.",
    category: "General Principles"
  },
  {
    id: 32,
    statement: "Reinsurance is insurance purchased by consumers to supplement their primary coverage.",
    answer: false,
    explanation: "FALSE. Reinsurance is insurance purchased by insurers to transfer some of their risk to another insurer (the reinsurer).",
    category: "General Principles"
  },
  {
    id: 33,
    statement: "The principle of indemnity means restoring the insured to their pre-loss financial position, no better.",
    answer: true,
    explanation: "TRUE. Indemnity prevents the insured from profiting from a loss. The insured should be made whole, but not enriched.",
    category: "General Principles"
  },
  {
    id: 34,
    statement: "An occurrence in liability coverage includes only sudden and accidental events.",
    answer: false,
    explanation: "FALSE. An occurrence includes accidents, plus continuous or repeated exposure to substantially the same harmful conditions.",
    category: "General Principles"
  },
  {
    id: 35,
    statement: "Material facts are those that would affect the insurer's decision to accept the risk or the premium charged.",
    answer: true,
    explanation: "TRUE. Material facts influence underwriting decisions. Misrepresentation or concealment of material facts can void coverage.",
    category: "General Principles"
  },

  // Property and Auto Basics (30 questions)
  {
    id: 36,
    statement: "A named perils policy covers all causes of loss except those specifically excluded.",
    answer: false,
    explanation: "FALSE. Named perils policies cover ONLY the perils specifically listed. Open perils (all-risk) covers all except exclusions.",
    category: "Property Basics"
  },
  {
    id: 37,
    statement: "Open perils coverage is also known as 'all-risk' coverage.",
    answer: true,
    explanation: "TRUE. Open perils and all-risk are the same: coverage for all causes of loss except those specifically excluded.",
    category: "Property Basics"
  },
  {
    id: 38,
    statement: "Flood is typically covered under standard homeowners policies.",
    answer: false,
    explanation: "FALSE. Flood is excluded and requires separate coverage through NFIP or private insurers.",
    category: "Property Basics"
  },
  {
    id: 39,
    statement: "Earthquake coverage is included in HO-3 policies.",
    answer: false,
    explanation: "FALSE. Earthquake is excluded and must be added by endorsement or separate policy.",
    category: "Property Basics"
  },
  {
    id: 40,
    statement: "The coinsurance clause requires the insured to carry insurance equal to a specified percentage of the property's value or face a penalty at loss time.",
    answer: true,
    explanation: "TRUE. If underinsured, the insured becomes a coinsurer and claim payments are reduced proportionately.",
    category: "Property Basics"
  },
  {
    id: 41,
    statement: "Debris removal coverage is always unlimited in property policies.",
    answer: false,
    explanation: "FALSE. Debris removal is typically limited (e.g., included in the loss or 5-25% of Coverage A as additional coverage).",
    category: "Property Basics"
  },
  {
    id: 42,
    statement: "Negligence by the insured voids property insurance coverage.",
    answer: false,
    explanation: "FALSE. Property insurance covers losses resulting from negligence. Only intentional acts are excluded.",
    category: "Property Basics"
  },
  {
    id: 43,
    statement: "After 60 consecutive days of vacancy, most homeowners policies suspend coverage for certain perils including vandalism and fire.",
    answer: true,
    explanation: "TRUE. Vacancy provisions typically suspend coverage for vandalism, theft, water damage, glass breakage, and related fire after 60 days.",
    category: "Property Basics"
  },
  {
    id: 44,
    statement: "War and nuclear hazards are covered under standard property policies.",
    answer: false,
    explanation: "FALSE. War and nuclear hazards are excluded as catastrophic and uninsurable risks in standard policies.",
    category: "Property Basics"
  },
  {
    id: 45,
    statement: "Personal Auto Policy (PAP) liability coverage follows the vehicle, not the driver.",
    answer: true,
    explanation: "TRUE. Auto insurance generally follows the vehicle. The owner's policy is primary; the driver's policy is excess.",
    category: "Auto Insurance"
  },
  {
    id: 46,
    statement: "Collision coverage pays for damage from impact with another vehicle or object, or overturn.",
    answer: true,
    explanation: "TRUE. Collision covers upset (overturn) and impact with vehicles or objects. All other physical damage is 'Other Than Collision.'",
    category: "Auto Insurance"
  },
  {
    id: 47,
    statement: "Hitting a deer is covered under Collision coverage.",
    answer: false,
    explanation: "FALSE. Impact with a bird or animal is specifically classified as Other Than Collision (Comprehensive), not Collision.",
    category: "Auto Insurance"
  },
  {
    id: 48,
    statement: "Medical Payments coverage in a PAP pays medical expenses regardless of who is at fault.",
    answer: true,
    explanation: "TRUE. Medical Payments (Part B) covers the insured and passengers regardless of fault.",
    category: "Auto Insurance"
  },
  {
    id: 49,
    statement: "Uninsured Motorist coverage pays when the insured is at fault and has no insurance.",
    answer: false,
    explanation: "FALSE. UM covers the insured when an at-fault driver has no insurance or insufficient insurance. It protects the innocent insured.",
    category: "Auto Insurance"
  },
  {
    id: 50,
    statement: "Underinsured Motorist coverage applies when the at-fault driver has insurance, but limits are insufficient to cover the insured's damages.",
    answer: true,
    explanation: "TRUE. UIM pays when the at-fault driver has liability insurance but the limits are inadequate to cover the insured's injuries.",
    category: "Auto Insurance"
  },
  {
    id: 51,
    statement: "A replacement vehicle has automatic coverage for all existing coverages if the insurer is notified within 14 days.",
    answer: true,
    explanation: "TRUE. Replacement vehicles have automatic coverage for all coverages on the replaced vehicle, if notified within the policy period (typically 14 days).",
    category: "Auto Insurance"
  },
  {
    id: 52,
    statement: "An additional vehicle has automatic physical damage coverage for 14 days.",
    answer: false,
    explanation: "FALSE. Additional vehicles have automatic liability for 14 days, but physical damage only for 4 days (if carried on another vehicle).",
    category: "Auto Insurance"
  },
  {
    id: 53,
    statement: "Resident family members are automatically insureds under a Personal Auto Policy.",
    answer: true,
    explanation: "TRUE. The named insured, resident spouse, and resident family members are all insureds under the PAP.",
    category: "Auto Insurance"
  },
  {
    id: 54,
    statement: "Business use of a personal vehicle is always excluded from PAP coverage.",
    answer: false,
    explanation: "FALSE. Most business use (commuting, sales calls) is covered. Exclusions apply to public/livery use (taxi, delivery, ride-sharing without endorsement).",
    category: "Auto Insurance"
  },
  {
    id: 55,
    statement: "Physical damage coverage on a PAP extends to rental cars if the insured carries it on an owned vehicle.",
    answer: true,
    explanation: "TRUE. Collision and comprehensive extend to rental or borrowed vehicles if carried on an owned auto.",
    category: "Auto Insurance"
  },
  {
    id: 56,
    statement: "Betterment refers to the insurer charging for depreciation when replacing old parts with new ones.",
    answer: true,
    explanation: "TRUE. Betterment accounts for the improvement when new parts replace old, worn parts. The insured may be charged for the betterment.",
    category: "Auto Insurance"
  },
  {
    id: 57,
    statement: "The PAP provides coverage in the U.S., Canada, and Mexico.",
    answer: false,
    explanation: "FALSE. The PAP covers the U.S., its territories, and Canada. Mexico is NOT covered; separate Mexican insurance is required.",
    category: "Auto Insurance"
  },
  {
    id: 58,
    statement: "Intentional injury caused by the insured is covered under liability coverage.",
    answer: false,
    explanation: "FALSE. Intentional acts by the insured are excluded from liability coverage. Only accidental or negligent acts are covered.",
    category: "Auto Insurance"
  },
  {
    id: 59,
    statement: "Split limit liability of 50/100/50 means $50,000 per person BI, $100,000 per accident BI, and $50,000 per accident PD.",
    answer: true,
    explanation: "TRUE. Split limits are expressed as: per person bodily injury / per accident bodily injury / per accident property damage.",
    category: "Auto Insurance"
  },
  {
    id: 60,
    statement: "Combined single limit (CSL) provides one total limit for all bodily injury and property damage per accident.",
    answer: true,
    explanation: "TRUE. CSL provides one combined limit (e.g., $300,000) for all BI and PD per occurrence, offering more flexibility than split limits.",
    category: "Auto Insurance"
  },
  {
    id: 61,
    statement: "Towing and labor coverage pays for towing and labor at the breakdown site, including routine maintenance.",
    answer: false,
    explanation: "FALSE. Towing and labor covers emergency towing and labor at breakdown, but NOT routine maintenance or repairs.",
    category: "Auto Insurance"
  },
  {
    id: 62,
    statement: "Transportation expenses in the PAP pay immediately after any covered loss.",
    answer: false,
    explanation: "FALSE. Transportation expenses (for OTC losses) typically have a 48-hour waiting period before payment begins.",
    category: "Auto Insurance"
  },
  {
    id: 63,
    statement: "Rental reimbursement coverage pays a daily limit for rental car expenses during repairs after a covered loss.",
    answer: true,
    explanation: "TRUE. Rental reimbursement is optional and pays a specified daily amount (e.g., $30/day) up to a maximum during repairs.",
    category: "Auto Insurance"
  },
  {
    id: 64,
    statement: "Custom equipment coverage is automatically included in the PAP with no limit.",
    answer: false,
    explanation: "FALSE. Custom equipment is typically limited (e.g., $1,500) unless specifically scheduled or covered by endorsement.",
    category: "Auto Insurance"
  },
  {
    id: 65,
    statement: "After paying a total loss for a stolen vehicle, the insurer takes title to the vehicle if it's recovered.",
    answer: true,
    explanation: "TRUE. After paying a total loss, the insurer typically takes title. If recovered, the insured may buy it back by returning the payment.",
    category: "Auto Insurance"
  },

  // Homeowners and Dwelling (20 questions)
  {
    id: 66,
    statement: "HO-3 provides open perils coverage on both the dwelling and personal property.",
    answer: false,
    explanation: "FALSE. HO-3 provides open perils on the dwelling (A & B) but broad named perils on personal property (C).",
    category: "Homeowners"
  },
  {
    id: 67,
    statement: "HO-5 provides open perils coverage on both dwelling and personal property.",
    answer: true,
    explanation: "TRUE. HO-5 is the most comprehensive form, offering open perils on both dwelling and contents.",
    category: "Homeowners"
  },
  {
    id: 68,
    statement: "HO-4 is designed for renters and covers personal property and liability, but not the dwelling structure.",
    answer: true,
    explanation: "TRUE. HO-4 (renters/tenants policy) covers personal property, liability, and ALE, but not the building (that's the landlord's responsibility).",
    category: "Homeowners"
  },
  {
    id: 69,
    statement: "HO-6 is designed for condominium unit owners.",
    answer: true,
    explanation: "TRUE. HO-6 covers personal property, improvements/betterments to the unit, loss assessment, and liability.",
    category: "Homeowners"
  },
  {
    id: 70,
    statement: "Coverage B (Other Structures) is typically 10% of Coverage A.",
    answer: true,
    explanation: "TRUE. Coverage B is generally 10% of Coverage A for homeowners policies (may differ for dwelling policies).",
    category: "Homeowners"
  },
  {
    id: 71,
    statement: "Coverage C (Personal Property) is typically 50% of Coverage A.",
    answer: true,
    explanation: "TRUE. Coverage C is generally 50% of Coverage A, though it can be increased if needed.",
    category: "Homeowners"
  },
  {
    id: 72,
    statement: "Coverage D (Loss of Use/ALE) is typically 20% of Coverage A.",
    answer: true,
    explanation: "TRUE. Additional Living Expense coverage is typically 20% of Coverage A.",
    category: "Homeowners"
  },
  {
    id: 73,
    statement: "Coverage E (Personal Liability) standard limits are typically $100,000.",
    answer: true,
    explanation: "TRUE. Most HO policies include $100,000 Coverage E as standard, though higher limits are available and recommended.",
    category: "Homeowners"
  },
  {
    id: 74,
    statement: "Coverage F (Medical Payments to Others) requires proof of negligence before paying.",
    answer: false,
    explanation: "FALSE. Coverage F is goodwill coverage that pays medical expenses without determining fault or negligence.",
    category: "Homeowners"
  },
  {
    id: 75,
    statement: "Business pursuits are covered under homeowners liability (Coverage E).",
    answer: false,
    explanation: "FALSE. Business pursuits are excluded from Coverage E. Separate business liability coverage is needed.",
    category: "Homeowners"
  },
  {
    id: 76,
    statement: "The homeowners policy deductible applies to all coverages including liability.",
    answer: false,
    explanation: "FALSE. The deductible applies to property coverages (A, B, C) but NOT to liability (E, F) or typically ALE (D).",
    category: "Homeowners"
  },
  {
    id: 77,
    statement: "Special limits apply to jewelry and watches for theft, typically $1,500.",
    answer: true,
    explanation: "TRUE. Jewelry, watches, and furs have special limits for theft (commonly $1,500) unless scheduled.",
    category: "Homeowners"
  },
  {
    id: 78,
    statement: "Trees, shrubs, and plants are covered up to 5% of Coverage A, $500 per item, for certain perils.",
    answer: true,
    explanation: "TRUE. Trees are covered for specific perils (fire, lightning, explosion, vandalism, theft, vehicle, aircraft) up to 5% of A, $500 each.",
    category: "Homeowners"
  },
  {
    id: 79,
    statement: "Water backup from sewers or drains is automatically covered in standard HO-3 policies.",
    answer: false,
    explanation: "FALSE. Sewer/drain backup is excluded and requires a water backup endorsement for coverage.",
    category: "Homeowners"
  },
  {
    id: 80,
    statement: "Sudden and accidental discharge from plumbing systems is typically covered under HO-3.",
    answer: true,
    explanation: "TRUE. Sudden and accidental discharge from plumbing, heating, or A/C systems is a covered peril.",
    category: "Homeowners"
  },
  {
    id: 81,
    statement: "Mold damage is always excluded from homeowners policies.",
    answer: false,
    explanation: "FALSE. Mold is generally excluded, but limited coverage may apply if resulting from a covered water damage loss.",
    category: "Homeowners"
  },
  {
    id: 82,
    statement: "Ordinance or law coverage is automatically included in standard homeowners policies.",
    answer: false,
    explanation: "FALSE. Ordinance or law coverage (increased cost to meet codes) is excluded and requires an endorsement.",
    category: "Homeowners"
  },
  {
    id: 83,
    statement: "Inflation guard automatically increases Coverage A annually by a set percentage.",
    answer: true,
    explanation: "TRUE. Inflation guard increases Coverage A (and related coverages) annually to keep pace with construction costs.",
    category: "Homeowners"
  },
  {
    id: 84,
    statement: "Dwelling policies (DP) include liability coverage as part of the standard package.",
    answer: false,
    explanation: "FALSE. Dwelling policies provide property coverage only. Liability must be added separately or by endorsement.",
    category: "Dwelling Policies"
  },
  {
    id: 85,
    statement: "DP-3 provides open perils coverage on the dwelling and broad named perils on personal property.",
    answer: true,
    explanation: "TRUE. DP-3 is similar to HO-3: open perils on dwelling, named perils on contents (if purchased).",
    category: "Dwelling Policies"
  },

  // Other Personal Lines (15 questions)
  {
    id: 86,
    statement: "A personal umbrella policy provides primary liability coverage.",
    answer: false,
    explanation: "FALSE. Umbrellas provide excess liability over underlying policies, plus may cover some exposures not in underlying.",
    category: "Other Personal Lines"
  },
  {
    id: 87,
    statement: "Umbrella policies require minimum underlying liability limits before they apply.",
    answer: true,
    explanation: "TRUE. Insurers require minimum underlying limits (e.g., $250,000/$500,000 auto, $300,000 home) before the umbrella responds.",
    category: "Other Personal Lines"
  },
  {
    id: 88,
    statement: "The self-insured retention (SIR) in an umbrella applies when there is no underlying coverage.",
    answer: true,
    explanation: "TRUE. The SIR acts like a deductible for losses covered by the umbrella but not by underlying policies.",
    category: "Other Personal Lines"
  },
  {
    id: 89,
    statement: "The National Flood Insurance Program (NFIP) provides coverage up to $250,000 for residential buildings and $100,000 for contents.",
    answer: true,
    explanation: "TRUE. These are the NFIP maximum limits. Higher coverage requires excess flood insurance from private insurers.",
    category: "Other Personal Lines"
  },
  {
    id: 90,
    statement: "Flood insurance covers damage from surface water, sewer backup, and groundwater seepage.",
    answer: false,
    explanation: "FALSE. Flood policies have specific definitions. Some water sources may be excluded (e.g., sewer backup may require separate coverage).",
    category: "Other Personal Lines"
  },
  {
    id: 91,
    statement: "Earthquake insurance typically has high percentage deductibles (10%-20% of Coverage A).",
    answer: true,
    explanation: "TRUE. Earthquake deductibles are commonly 10%-20% of the dwelling amount due to the catastrophic nature of the risk.",
    category: "Other Personal Lines"
  },
  {
    id: 92,
    statement: "Scheduled personal property provides agreed value coverage for listed items.",
    answer: true,
    explanation: "TRUE. Floaters/schedules provide agreed value, open perils coverage, no deductible, and worldwide protection for scheduled items.",
    category: "Other Personal Lines"
  },
  {
    id: 93,
    statement: "Identity theft coverage reimburses for stolen cash and financial losses from fraud.",
    answer: false,
    explanation: "FALSE. Identity theft coverage typically pays expenses to restore identity (legal fees, lost wages), not direct financial losses or stolen money.",
    category: "Other Personal Lines"
  },
  {
    id: 94,
    statement: "Watercraft liability for boats over 26 feet requires a separate boat policy, not homeowners coverage.",
    answer: true,
    explanation: "TRUE. Homeowners policies limit watercraft liability (typically under 26 feet). Larger boats require separate watercraft policies.",
    category: "Other Personal Lines"
  },
  {
    id: 95,
    statement: "Mobile home policies (HO-7) are identical to standard homeowners policies.",
    answer: false,
    explanation: "FALSE. Mobile/manufactured home policies address unique risks like transportation, tie-downs, and construction materials.",
    category: "Other Personal Lines"
  },
  {
    id: 96,
    statement: "Valuable papers coverage can be added to protect against loss of important documents.",
    answer: true,
    explanation: "TRUE. Valuable papers coverage can be scheduled or added by endorsement for documents, manuscripts, and records.",
    category: "Other Personal Lines"
  },
  {
    id: 97,
    statement: "Pet insurance is regulated the same way as human health insurance.",
    answer: false,
    explanation: "FALSE. Pet insurance is typically considered property/casualty insurance and has different regulations than human health insurance.",
    category: "Other Personal Lines"
  },
  {
    id: 98,
    statement: "Credit card coverage in homeowners policies typically provides $500-$1,000 coverage for unauthorized use.",
    answer: true,
    explanation: "TRUE. HO policies provide limited credit card coverage (commonly $500-$1,000), often with no deductible.",
    category: "Other Personal Lines"
  },
  {
    id: 99,
    statement: "Recreational vehicle (RV) insurance can be added as an endorsement to a homeowners policy.",
    answer: false,
    explanation: "FALSE. RVs typically require separate specialized policies due to their unique exposures (both auto and dwelling characteristics).",
    category: "Other Personal Lines"
  },
  {
    id: 100,
    statement: "Personal property is covered worldwide under most homeowners policies.",
    answer: true,
    explanation: "TRUE. Coverage C typically covers personal property anywhere in the world, subject to policy terms and special limits.",
    category: "Homeowners"
  }
];
