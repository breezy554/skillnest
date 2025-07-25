// src/data/modules.js
export const modules = {
  finance: {
    id: 'finance',
    name: 'Personal Finance',
    color: 'purple',
    lessons: [
      {
        id: '1',
        title: 'Money vs. Currency (Foundations)',
        body: [
          "Money is a store of value, unit of account, and medium of exchange. Currency is the representation we use to transact with money (cash, bank balances, digital tokens).",
          "Understanding this difference helps you see why inflation erodes purchasing power and why saving vs. investing matters. Currency can be printed or expanded; money’s value is driven by trust, scarcity, and utility.",
          "Key takeaway: Wealth ≠ cash balance. Wealth is what produces value over time; cash loses value to inflation if it sits idle."
        ],
        quizzes: [
          {
            question: "Which best describes the difference between money and currency?",
            options: [
              "They are exactly the same thing.",
              "Money is the concept of value; currency is the representation used to transact.",
              "Currency gains value over time while money does not.",
              "Money only exists in bank accounts; currency is only physical cash."
            ],
            answer: 1,
            explain: "Money = function. Currency = representation. They overlap but are not identical."
          },
          {
            question: "Which of the following is NOT one of the classic functions of money?",
            options: [
              "Store of value",
              "Unit of account",
              "Medium of exchange",
              "Generator of guaranteed profit"
            ],
            answer: 3,
            explain: "Money doesn’t guarantee profit; it enables efficient trade and accounting."
          },
          {
            question: "Inflation primarily does what to currency?",
            options: [
              "Increases its purchasing power",
              "Decreases its purchasing power over time",
              "Fixes its value permanently",
              "Makes money and currency identical"
            ],
            answer: 1,
            explain: "Inflation erodes currency’s purchasing power—your dollars buy less in the future."
          }
        ]
      },
      {
        id: '2',
        title: 'Budgeting Systems (50/30/20, Zero-Based, Envelope)',
        body: [
          "Budgeting is assigning every dollar a job before you spend it. You gain clarity, reduce stress, and align decisions with your goals.",
          "Popular systems: (1) 50/30/20 – Needs/Wants/Saving & Debt. (2) Zero-Based – income minus expenses equals zero (everything assigned). (3) Envelope – physically or digitally splitting into categories to prevent overspending.",
          "Pick the simplest system you’ll actually follow. Consistency beats perfection."
        ],
        quizzes: [
          {
            question: "What’s the core idea of zero-based budgeting?",
            options: [
              "Spend everything you make immediately",
              "Every dollar has a job before you spend it",
              "Never track discretionary expenses",
              "Only track recurring bills"
            ],
            answer: 1,
            explain: "Zero-based budgeting assigns all income to categories so nothing is unplanned."
          },
          {
            question: "In the 50/30/20 rule, the 20% typically goes to:",
            options: [
              "Wants",
              "Needs",
              "Saving and debt repayment",
              "Entertainment only"
            ],
            answer: 2,
            explain: "That 20% bucket is for saving, investing, and paying down debt."
          },
          {
          question: "Which budgeting method is best for people who overspend when using cards?",
          options: [
            "Zero-based",
            "Envelope",
            "50/30/20",
            "None of the above"
          ],
          answer: 1,
          explain: "Envelope budgeting (physical or digital) can restrict overspending by hard-limiting each category."
          }
        ]
      },
      {
        id: '3',
        title: 'Emergency Funds (Your Financial Airbag)',
        body: [
          "An emergency fund protects you from surprise expenses without falling into debt. Aim for 3–6 months of essential expenses.",
          "If your income is unstable or you have dependents, target the higher end. Store it in a high-yield savings account—liquid, safe, and accessible.",
          "This is different from investing. The goal here is safety and liquidity, not returns."
        ],
        quizzes: [
          {
            question: "A common emergency fund target is:",
            options: [
              "3–6 weeks of expenses",
              "3–6 months of essential expenses",
              "1 year of your salary",
              "Exactly $1,000 for everyone"
            ],
            answer: 1,
            explain: "3–6 months is the standard baseline; adjust up for unstable income or dependents."
          },
          {
            question: "Where should most people keep their emergency fund?",
            options: [
              "Under the mattress",
              "In volatile investments",
              "In a high-yield savings account",
              "In crypto for higher returns"
            ],
            answer: 2,
            explain: "HYSA keeps it liquid and safe. This isn’t an investing account."
          },
          {
            question: "The primary goal of an emergency fund is:",
            options: [
              "To maximize investment returns",
              "To pay for vacations",
              "To protect against unexpected, essential expenses",
              "To avoid taxes"
            ],
            answer: 2,
            explain: "It’s a buffer for emergencies—car repairs, job loss, medical bills."
          }
        ]
      },
      {
        id: '4',
        title: 'Banking: Checking, Savings, HYSA, CDs',
        body: [
          "Checking accounts are for daily transactions. Savings accounts (especially HYSAs) are for storing money with some interest.",
          "Certificates of Deposit (CDs) offer fixed interest for locking your money for a term. Useful if you won’t need access for a while.",
          "Avoid fees. Use banks/credit unions with no (or low) monthly maintenance fees and solid online tools."
        ],
        quizzes: [
          {
            question: "A HYSA is best used for:",
            options: [
              "High-risk investing",
              "Emergency funds and short-term savings",
              "Day trading",
              "Long-term retirement accounts"
            ],
            answer: 1,
            explain: "HYSA = safe, liquid, modest interest—great for short-term and emergency savings."
          },
          {
            question: "Which account is best for paying everyday bills?",
            options: [
              "Checking account",
              "Savings account",
              "CD",
              "Roth IRA"
            ],
            answer: 0,
            explain: "Checking accounts are built for everyday transactions."
          },
          {
            question: "CDs generally:",
            options: [
              "Allow instant withdrawal with no penalties",
              "Lock funds for a fixed term in exchange for higher interest",
              "Have the same liquidity as checking accounts",
              "Are used for credit scores"
            ],
            answer: 1,
            explain: "CDs trade liquidity for a fixed, often higher, interest rate."
          }
        ]
      },
      {
        id: '5',
        title: 'Credit Scores & Reports (FICO, Utilization, History)',
        body: [
          "Your credit score reflects your reliability with credit. The main factors: payment history, credit utilization, length of credit history, new credit, and credit mix.",
          "Keep utilization low (generally under 30%, ideally under 10%). Always pay on time. Avoid needless hard inquiries.",
          "Check your report annually for errors at AnnualCreditReport.com."
        ],
        quizzes: [
          {
            question: "The biggest factor in most credit scoring models is:",
            options: [
              "Payment history",
              "Credit mix",
              "New credit",
              "Length of credit history"
            ],
            answer: 0,
            explain: "Payment history (on-time vs late) is the largest contributor."
          },
          {
            question: "Credit utilization is:",
            options: [
              "Your total debt divided by your income",
              "How much of your available credit you’re using",
              "Your interest rate on a loan",
              "The number of credit accounts you have"
            ],
            answer: 1,
            explain: "Utilization = balance / credit limit. Lower is generally better."
          },
          {
            question: "Which of the following helps your score over time?",
            options: [
              "Closing your oldest card",
              "Paying on time and keeping utilization low",
              "Opening many cards at once",
              "Ignoring your credit report"
            ],
            answer: 1,
            explain: "On-time payments + low utilization + aging accounts = stronger score."
          }
        ]
      },
      {
        id: '6',
        title: 'Debt Strategies: Avalanche vs Snowball',
        body: [
          "Debt snowball: Pay smallest balance first (quick wins, motivational). Debt avalanche: Pay highest interest rate first (mathematically optimal).",
          "Pick the one you’ll stick with. If motivation is your bottleneck, snowball wins. If math and discipline are your strengths, avalanche saves more money.",
          "Always make minimums on all debts to avoid fees and credit damage."
        ],
        quizzes: [
          {
            question: "Debt avalanche prioritizes debts by:",
            options: [
              "Smallest balance first",
              "Highest interest rate first",
              "Shortest term first",
              "Random order"
            ],
            answer: 1,
            explain: "Avalanche = kill the highest interest rate first."
          },
          {
            question: "Debt snowball is often preferred by some because:",
            options: [
              "It’s faster mathematically",
              "It starts with the largest debt for motivation",
              "Quick wins build momentum and motivation",
              "It avoids making minimum payments"
            ],
            answer: 2,
            explain: "Seeing debts disappear quickly keeps people engaged with the plan."
          },
          {
            question: "Regardless of strategy, you should always:",
            options: [
              "Ignore the minimums and focus on one debt",
              "Pay minimums on all debts and put extra on one",
              "Only pay the highest-interest debt",
              "Close all credit cards first"
            ],
            answer: 1,
            explain: "Missing minimums causes penalties and score damage."
          }
        ]
      },
      {
        id: '7',
        title: 'Paychecks, Taxes, Withholding & W-4',
        body: [
          "Your gross income isn’t your take-home. Taxes, Social Security, Medicare, retirement contributions, and insurance can all be deducted.",
          "Your W-4 determines how much federal tax your employer withholds. Adjust it if you’re consistently owing or getting big refunds.",
          "Understand your pay stub: pre-tax vs post-tax deductions impacts how much you really keep."
        ],
        quizzes: [
          {
            question: "Your W-4 primarily affects:",
            options: [
              "Your credit score",
              "How much tax is withheld from your paycheck",
              "Your health insurance premiums",
              "Your 401(k) fees"
            ],
            answer: 1,
            explain: "The W-4 sets withholding assumptions for your federal income tax."
          },
          {
            question: "Pre-tax contributions (e.g., 401k) generally:",
            options: [
              "Increase your taxable income",
              "Reduce your taxable income",
              "Have no impact on taxes",
              "Are illegal"
            ],
            answer: 1,
            explain: "Pre-tax lowers taxable wages now (traditional retirement accounts)."
          },
          {
            question: "Your take-home pay is:",
            options: [
              "Gross income minus taxes and deductions",
              "Gross income before deductions",
              "Only your 401(k) contribution",
              "Your total salary times 12"
            ],
            answer: 0,
            explain: "Take-home = net after taxes and deductions."
          }
        ]
      },
      {
        id: '8',
        title: 'Investing 101: Stocks, ETFs, Index Funds',
        body: [
          "Investing is owning assets that (hopefully) generate returns. Stocks = ownership in companies. ETFs and mutual funds pool assets—index funds track a market index (e.g., S&P 500).",
          "Diversification reduces risk. Time in the market > timing the market.",
          "Fees matter. Low-cost index funds often outperform high-fee active funds over long periods."
        ],
        quizzes: [
          {
            question: "An index fund:",
            options: [
              "Attempts to beat the market",
              "Tracks a market index like the S&P 500",
              "Is a savings account",
              "Is always actively managed"
            ],
            answer: 1,
            explain: "Index funds passively track an index—low fees, broad diversification."
          },
          {
            question: "Diversification helps you:",
            options: [
              "Eliminate all risk",
              "Reduce unsystematic (company-specific) risk",
              "Guarantee positive returns",
              "Always beat the market"
            ],
            answer: 1,
            explain: "Diversification can’t kill market risk, but it reduces single-company blowups."
          },
          {
            question: "Which tends to matter a lot over the long term?",
            options: [
              "Management fees (expense ratios)",
              "Logo design",
              "Ticker symbol length",
              "Number of letters in the fund name"
            ],
            answer: 0,
            explain: "Fees compound against you; low-fee funds keep more of your returns."
          }
        ]
      },
      {
        id: '9',
        title: 'Retirement Accounts: 401(k), IRA, Roth',
        body: [
          "401(k): employer-sponsored, often with a match (free money—always try to get it). Traditional = tax-deferred now, taxed later. Roth = taxed now, tax-free later.",
          "IRA: similar tax treatment as 401(k), but individually opened; income limits may apply.",
          "Contribution limits change annually—stay current."
        ],
        quizzes: [
          {
            question: "An employer match in a 401(k) is:",
            options: [
              "Optional free money you should usually take",
              "A loan you must pay back",
              "Taxed as capital gains",
              "Only available in Roth IRAs"
            ],
            answer: 0,
            explain: "It’s effectively part of your compensation—don’t leave it on the table."
          },
          {
            question: "Roth accounts are typically:",
            options: [
              "Taxed on contributions, tax-free on qualified withdrawals",
              "Tax-deferred now, taxed later",
              "Only for high-income earners",
              "Illegal to combine with 401(k)s"
            ],
            answer: 0,
            explain: "Roth = taxed now, grows and withdraws (qualified) tax-free."
          },
          {
            question: "Traditional 401(k) contributions:",
            options: [
              "Are made post-tax",
              "Reduce taxable income today",
              "Can be withdrawn tax-free at retirement",
              "Are the same as Roth contributions"
            ],
            answer: 1,
            explain: "Traditional = pre-tax. You defer taxes until withdrawal."
          }
        ]
      },
      {
        id: '10',
        title: 'Compound Interest & Time Value of Money',
        body: [
          "Compound interest = returns on your returns. Time is the most powerful variable—start early, even with small amounts.",
          "Rule of 72: divide 72 by your annual return % to estimate how long your money takes to double.",
          "Delaying investing costs more than you think; you can’t get time back."
        ],
        quizzes: [
          {
            question: "The Rule of 72 estimates:",
            options: [
              "Your tax rate",
              "How much to save for retirement",
              "How long it takes to double your money",
              "Your credit score"
            ],
            answer: 2,
            explain: "72 ÷ annual return ≈ years to double."
          },
          {
            question: "Compound interest works best when:",
            options: [
              "You start as late as possible but invest more",
              "You start early and stay consistent",
              "You only invest in bonds",
              "You time the market perfectly"
            ],
            answer: 1,
            explain: "Time in the market is your superpower."
          },
          {
            question: "Which is generally true?",
            options: [
              "Small amounts invested early can outperform large amounts invested late",
              "Waiting longer always improves results",
              "Compounding only works for wealthy people",
              "Inflation increases compounding"
            ],
            answer: 0,
            explain: "Starting early lets compounding do more of the work."
          }
        ]
      },
      {
        id: '11',
        title: 'Insurance Basics: Health, Auto, Renters, Life',
        body: [
          "Insurance transfers financial risk from you to the insurer. Common types: health, auto, renters/home, disability, life.",
          "For life insurance, term is usually recommended over whole for most people—it’s cheaper and simpler.",
          "Your emergency fund and insurance complement each other—one for smaller hits, one for catastrophes."
        ],
        quizzes: [
          {
            question: "Insurance is primarily used to:",
            options: [
              "Generate investment returns",
              "Transfer risk of large losses",
              "Avoid taxes",
              "Increase spending power"
            ],
            answer: 1,
            explain: "You pay premiums to remove catastrophic risk."
          },
          {
            question: "Term life insurance is typically:",
            options: [
              "Cheaper and simpler than whole life",
              "An investment vehicle first",
              "Required by law",
              "Only for wealthy people"
            ],
            answer: 0,
            explain: "Term = pure insurance, no complicated investment component."
          },
          {
            question: "Renters insurance typically covers:",
            options: [
              "The building itself",
              "Your belongings and liability",
              "Only your car",
              "Medical bills only"
            ],
            answer: 1,
            explain: "The landlord’s policy covers the building, not your stuff."
          }
        ]
      },
      {
        id: '12',
        title: 'Fraud, Scams, & Identity Theft Protection',
        body: [
          "Never give personal info to unsolicited callers/emails. Use strong, unique passwords and a password manager.",
          "Enable 2FA wherever possible. Freeze your credit proactively to prevent unauthorized accounts.",
          "Learn common scams: phishing, spoofing, fake tech support, crypto hype scams, 'too good to be true' investments."
        ],
        quizzes: [
          {
            question: "Which is a strong anti-fraud move?",
            options: [
              "Using the same password everywhere",
              "Leaving credit reports unlocked",
              "Enabling 2FA on critical accounts",
              "Sharing SSN via email"
            ],
            answer: 2,
            explain: "2FA significantly raises the bar for attackers."
          },
          {
            question: "Freezing your credit:",
            options: [
              "Prevents you from using your credit card",
              "Blocks new accounts being opened in your name without your consent",
              "Is illegal unless you are a victim",
              "Improves your credit score automatically"
            ],
            answer: 1,
            explain: "It stops new credit pulls unless you temporarily unfreeze it."
          },
          {
            question: "A common red flag in scams:",
            options: [
              "Pressure to act immediately",
              "Official-looking email addresses",
              "They know your name",
              "They allow you to verify independently"
            ],
            answer: 0,
            explain: "Urgency + fear is a classic manipulation tool."
          }
        ]
      }
    ]
  }
};
