const Model = require("./Model");

class Expense extends Model {
  static get tableName() {
    return "expenses";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["userId"],
      properties: {
        userId: { type: ["integer", "string"] },
        mileage: { type: "decimal" },
        communications: { type: "decimal" },
        amenities: { type: "decimal" },
        tolls: { type: "decimal" },
        supplies: { type: "decimal" },
      },
    };
  }

  static get relationMappings() {
    const User = require("./User");

    return {
      users: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "expenses.userId",
          to: "users.id",
        },
      },
    };
  }
}
module.exports = Expense;
