const Model = require("./Model");

class TaxProfile extends Model {
  static get tableName() {
    return "taxProfile";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["userId", "userFilingStatus", "userHomeState"],
      properties: {
        userId: { type: ["integer", "string"] },
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
          from: "taxProfile.userId",
          to: "users.id",
        },
      },
    };
  }
}
module.exports = TaxProfile;
