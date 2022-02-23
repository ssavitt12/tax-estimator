const Model = require("./Model");

class Earnings extends Model {
  static get tableName() {
    return "earnings";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["userId"],
      properties: {
        userId: { type: "decimal" },
        uber: { type: "decimal" },
        lyft: { type: "decimal" },
        ubereats: { type: "decimal" },
        doordash: { type: "decimal" },
        grubhub: { type: "decimal" },
        other: { type: "decimal" }
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
          from: "earnings.userId",
          to: "users.id",
        },
      },
    };
  }
}
module.exports = Earnings;
