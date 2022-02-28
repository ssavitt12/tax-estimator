const Model = require("./Model");

class Tax extends Model {
  static get tableName() {
    return "taxes";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["userId", "mileage", "communications", "amenities", "supplies", "tolls", "uber", "lyft", "ubereats", "doordash", "grubhub", "instacart", "other", "userFilingStatus", "userHomeState"],
      properties: {
        userId: { type: ["integer", "string"] },
        mileage: { type: "decimal" },
        communications: { type: "decimal" },
        amenities: { type: "decimal" },
        supplies: { type: "decimal" },
        tolls: { type: "decimal" },
        uber: { type: "decimal" },
        lyft: { type: "decimal" },
        ubereats: { type: "decimal" },
        doordash: { type: "decimal" },
        grubhub: { type: "decimal" },
        other: { type: "decimal" },
        userFilingStatus: { type: "string" },
        userHomeState: { type: "string" }
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
          from: "taxes.userId",
          to: "users.id",
        },
      },
    };
  }
}
module.exports = Tax;
