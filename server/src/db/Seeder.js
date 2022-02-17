/* eslint-disable no-console */
import { connection } from "../boot.js"


import UserSeeder from "./seeders/UserSeeder.js"
import ExpensesSeeder from "./seeders/ExpensesSeeder.js"
import EarningsSeeder from "./seeders/EarningsSeeder.js"

class Seeder {
  static async seed() {
    
    await UserSeeder.seed()
    console.log("seeding new users....")

    console.log("seeding expenses....")
    await ExpensesSeeder.seed()

    console.log("seeding earnings....")
    await EarningsSeeder.seed()

    console.log("Done!")
    await connection.destroy()
  }
}

export default Seeder