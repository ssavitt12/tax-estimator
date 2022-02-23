// include all of your models here using CommonJS requires
const User = require("./User")
const Expense = require("./Expense")
const Earning = require("./Earning")
const TaxProfile = require ("./TaxProfile")

module.exports = { User, Expense, Earning, TaxProfile };
