import { TaxProfile } from "../../models/index.js";

class TaxProfileSeeder {
  static async seed() {
    const TaxProfileCollection = [
      {
        userId: 1,
        userFilingStatus: "Single",
        userHomeState: "MA",
      },
      {
        userId: 2,
        userFilingStatus: "Married",
        userHomeState: "NH"      
      },
      {
        userId: 3,
        userFilingStatus: "Single",
        userHomeState: "MA"
      }
    ]

    for (const singleTaxProfile of TaxProfileCollection) {
      const existingTaxProfile = await TaxProfile.query().findOne({ userId: singleTaxProfile.userId })
      if (!existingTaxProfile) {
        await TaxProfile.query().insert(singleTaxProfile)
      }
    }
  }
}

export default TaxProfileSeeder