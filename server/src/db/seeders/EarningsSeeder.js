import { Earnings } from "../../models/index.js";

class EarningsSeeder {
  static async seed() {
    const EarningsCollection = [
      {
        userId: 1,
        uber: 54992.11,
        lyft: 11392.57,
        doordash: 43.92
      },
      {
        userId: 2,
        ubereats: 9524.22,
        doordash: 28492.90,
        grubhub: 8804.49,
        instacart: 302.11,
        other: 1190.85      
      },
      {
        userId: 3,
        uber: 65922,
        lyft: 44292
      }
    ]

    for (const singleEarning of EarningsCollection) {
      const existingEarning = await Earnings.query().findOne({ userId: singleEarning.userId })
      if (!existingEarning) {
        await Earnings.query().insert(singleEarning)
      }
    }
  }
}

export default EarningsSeeder