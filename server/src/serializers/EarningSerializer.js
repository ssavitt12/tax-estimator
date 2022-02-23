import { Earning } from "../models/index.js";


class EarningSerializer {
  static async getEarningDetail(earning, userId) {
    const user = await earning.$relatedQuery("user")

    const allowedAttributes = [
      "id",
      "uber",
      "lyft",
      "ubereats",
      "doordash",
      "grubhub",
      "instacart",
      "other",
    ];
    let serializedEarning = {}
    for (const attribute of allowedAttributes) {
      serializedEarning[attribute] = earning[attribute]
    }
  }

  static async getEarningDetail(earnings) {
    const user = await earnings.$relatedQuery("user");

    return {
      ...this.getSummary(earnings),
      userName: user.name,
    };
  }

  static async getEarningsCollection(earnings) {
    return Promise.all(
      earnings.map((earning) => {
        return this.getDetail(earning);
      })
    );
  }
}

export default EarningSerializer;
