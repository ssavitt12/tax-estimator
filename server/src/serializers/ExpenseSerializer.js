import { Expense } from "../models/index.js";
import permissions from "../services/permissions.js";

class ExpenseSerializer {
  static async getSummary(expenses) {
    return permissions(expenses, [
      "id",
      "mileage",
      "communications",
      "amenities",
      "tolls",
      "supplies",
    ]);
  }

    static async getDetail(expenses) {
      const user = await expenses.$relatedQuery("user")

      return {
        ...this.getSummary(expenses),
        userName: user.name
      }
    }

  static async getExpenseCollectionDetails(expenses) {
    return Promise.all(expenses.map((expense) => {
        return this.getDetail(expense);
      })
    );
  }
}

export default ExpenseSerializer;
