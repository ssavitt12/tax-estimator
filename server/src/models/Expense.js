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
        mileage: { type: "integer" },
        communications: { type: "integer" },
        amenities: { type: "integer" },
        tolls: { type: "integer" },
        supplies: { type: "integer" },
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
