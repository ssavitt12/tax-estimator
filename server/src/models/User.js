/* eslint-disable import/no-extraneous-dependencies */
const Bcrypt = require("bcrypt");
const unique = require("objection-unique");
const Model = require("./Model");

const saltRounds = 10;

const uniqueFunc = unique({
  fields: ["email", "name"],
  identifiers: ["id"],
});

class User extends uniqueFunc(Model) {
  static get tableName() {
    return "users";
  }

  set password(newPassword) {
    this.cryptedPassword = Bcrypt.hashSync(newPassword, saltRounds);
  }

  authenticate(password) {
    return Bcrypt.compareSync(password, this.cryptedPassword);
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["email", "name"],

      properties: {
        email: { type: "string", format: "email" },
        cryptedPassword: { type: "string" },
        name: { type: "string" },
      },
    };
  }

  static get relationMappings() {
    const Expense = require("./Expense");
    const Earnings = require("./Earning")
    const TaxProfile = require("./TaxProfile")
    
    return {
      expenses: {
        relation: Model.HasOneRelation,
        modelClass: Expense,
        join: {
          from: "users.id",
          to: "expenses.userId",
        },
      },

      earnings: {
        relation: Model.HasOneRelation,
        modelClass: Earnings,
        join: {
          from: "users.id",
          to: "earnings.userId"
        },
      },

      taxProfile: {
        relation: Model.HasOneRelation,
        modelClass: TaxProfile,
        join: {
          from: "users.id",
          to: "taxProfile.userId"
        }
      }
    }
  }

  $formatJson(json) {
    const serializedJson = super.$formatJson(json);

    if (serializedJson.cryptedPassword) {
      delete serializedJson.cryptedPassword;
    }

    return serializedJson;
  }
}

module.exports = User;
