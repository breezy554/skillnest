// src/data/modules.js
export const modules = {
  finance: {
    id: 'finance',
    name: 'Personal Finance',
    color: 'purple',
    lessons: [
      {
        id: '1',
        title: 'Money vs. Currency',
        body: [
          "Money is a store of value, unit of account, and medium of exchange. Currency is the *physical or digital representation* we use to transact.",
          "Understanding this difference helps you see why inflation erodes purchasing power and why saving vs. investing matters."
        ],
        quiz: {
          question: "Which statement best describes the difference between money and currency?",
          options: [
            "They are exactly the same thing.",
            "Money is the concept; currency is the representation we use to transact with it.",
            "Currency always gains value over time, money doesn’t.",
            "Money only exists in banks; currency exists in cash."
          ],
          answer: 1,
          explain: "Money is the *economic function*; currency is the *representation* we pass around."
        }
      },
      {
        id: '2',
        title: 'Budgeting Basics',
        body: [
          "Budgeting is assigning every dollar a job before you spend it.",
          "A simple model: 50% Needs, 30% Wants, 20% Saving/Debt payoff."
        ],
        quiz: {
          question: "Which is a core principle of budgeting?",
          options: [
            "Spend first, track later.",
            "Assign every dollar a job before you spend it.",
            "Ignore fixed costs.",
            "Only rich people need budgets."
          ],
          answer: 1,
          explain: "Zero-based or envelope budgeting forces intentionality—*every dollar has a job*."
        }
      },
      {
        id: '3',
        title: 'Emergency Funds',
        body: [
          "An emergency fund protects you from surprise expenses without going into debt.",
          "Rule of thumb: 3–6 months of essential expenses."
        ],
        quiz: {
          question: "What's a typical emergency fund target?",
          options: [
            "3–6 weeks of expenses",
            "3–6 months of essential expenses",
            "1 year of your salary",
            "Exactly $1,000 for everyone"
          ],
          answer: 1,
          explain: "Most advisors suggest 3–6 months of *essential* expenses, not salary."
        }
      }
    ]
  }
};
