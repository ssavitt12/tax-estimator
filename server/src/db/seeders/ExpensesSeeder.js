import { Expense } from "../../models/index.js";

class ExpensesSeeder {
  static async seed() {
    const ExpensesCollection = [
      {
        userId: 1,
        mileage: 65992,
        communications: 1029,
        tolls: 1135,
      },
      {
        userId: 2,
        mileage: 43241,
        amenities: 829.22,
        supplies: 209.40,
        tolls: 540.65      
      },
      {
        userId: 3,
        mileage: 85829,
        communications: 494.31,
        amenities: 45.32,
        supplies: 11.99,
        tolls: 1523.90
      }
    ]

    for (const singleExpense of ExpensesCollection) {
      const existingExpense = await Expense.query().findOne({ userId: singleExpense.userId })
      if (!existingExpense) {
        await Expense.query().insert(singleExpense)
      }
    }
  }
}

export default ExpensesSeeder