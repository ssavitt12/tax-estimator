/* eslint-disable no-console */
import { connection } from "../boot.js"


import UserSeeder from "./seeders/UserSeeder"
import ExpensesSeeder from "./seeders/ExpensesSeeder"

class Seeder {
  static async seed() {
    console.log("seeding new users....")
    await UserSeeder.seed()

    console.log("seeding expenses....")
    await ExpensesSeeder.seed()

    console.log("Done!")
    await connection.destroy()
  }
}

export default Seeder