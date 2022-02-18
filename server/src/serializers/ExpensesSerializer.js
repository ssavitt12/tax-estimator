import { Expense } from "../models/index.js";

class ExpenseSerializer {
  static async getSummary(expense) {
    const allowedAttributes = [
      "userId",
      "mileage",
      "communications",
      "amenities",
      "tolls",
      "supplies",
    ];
  }

    static async getDetail(review) {
      const user = await review.$relatedQuery("user")

      return {
        ...this.getSummary(review),
        userName: user.name
      }
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
