import { User } from "../../models/index.js";

class UserSeeder {
  static async seed() {
    await User.query().insert({
      name: "Pamela",
      email: "p@p.com",
      password: "password",
    });
    await User.query().insert({
      name: "Jean-Pierre",
      email: "j@j.com",
      password: "password",
    });
    await User.query().insert({
      name: "Mireille",
      email: "lm@l.com",
      password: "password",
    });
  }
}

export default UserSeeder;