import { Tax,User } from "../../models/index.js";

class TaxSeeder {
  static async seed() {
    const pamela = await User.query().findOne("name", "Pamela")
    const jean = await User.query().findOne("name", "Jean-Pierre")
    const mireille = await User.query().findOne("name", "Mireille")


    const taxData = [
      {
        mileage: 65992,
        communications: 1029,
        amenities: 0,
        supplies: 0,
        tolls: 1135,
        uber: 54992.11,
        lyft: 11392.57,
        ubereats: 0,
        doordash: 43.92,
        grubhub: 0,
        instacart: 0,
        other: 0,
        userFilingStatus: "Single",
        userHomeState: "MA",
        userId: pamela.id
      },
      {
        mileage: 43241,
        communications: 849,
        amenities: 829.22,
        supplies: 209.40,
        tolls: 540.65,
        uber: 9524.22,
        lyft: 0,
        ubereats: 0,
        doordash: 28492.90,
        grubhub: 8804.49,
        instacart: 302.11,
        other: 1190.85,
        userFilingStatus: "Married",
        userHomeState: "NH",
        userId: jean.id      
      },
      {
      mileage: 78210,
      communications: 1629,
      amenities: 929.22,
      supplies: 219.40,
      tolls: 640.65,
      uber: 65922,
      lyft: 44292,
      ubereats: 0,
      doordash: 0,
      grubhub: 0,
      instacart: 0,
      other: 0,
      userFilingStatus: "Single",
      userHomeState: "MA",
      userId: mireille.id   
      }
    ]

    for (const singleTaxseData of taxData) {
      const currentTax = await Tax.query().findOne(singleTaxseData)
      if (!currentTax) {
        await Tax.query().insert(taxData)
      }
    }
  }
}

export default TaxSeeder