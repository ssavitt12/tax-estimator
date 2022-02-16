import { Expense } from "../models/index.js";

class ExpenseSerializer {
  static async getExpenseDetail(expense) {
    const allowedAttributes = [
      "userId",
      "mileage",
      "communications",
      "amenities",
      "tolls",
      "supplies",
    ];

    let serializedExpense = {};
    for (const attribute of allowedAttributes) {
      serializedExpense[attribute] = expense[attribute];
    }

    return serializedExpense;
  }

  static async getExpenseCollectionDetails(expenses) {
    return Promise.all(
      expenses.map((expense) => {
        return this.getExpenseDetail(expense);
      })
    );
  }
}

export default ExpenseSerializer;
