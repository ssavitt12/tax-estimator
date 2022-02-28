/* eslint-disable no-console */
import { connection } from "../boot.js"

import UserSeeder from "./seeders/UserSeeder.js" 
import TaxSeeder from "./seeders/TaxSeeder.js"

class Seeder {
  static async seed() {
    console.log("seeding users....")
    await UserSeeder.seed()

    console.log("seeding taxes....")
    await TaxSeeder.seed()

    console.log("Done!")
    await connection.destroy()
  }
}

export default Seeder