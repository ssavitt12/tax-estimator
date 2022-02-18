import { User } from "../models/index.js";
import ExpensesSerializer from "./ExpensesSerializer.js";


class UserSerializer {
  static async getUserDetail(user) {
    const allowedAttributes = ["name", "email", "id"];

    let serializedUser = {};
    for (const attribute of allowedAttributes) {
      serializedUser[attribute] = user[attribute];
    }

    const expenses = await user.$relatedQuery("expenses")
    serializedUser.expenses = await ExpensesSerializer.getExpensesCollectionDetails(expenses)

    return serializedUser;
  }
}

export default UserSerializer;