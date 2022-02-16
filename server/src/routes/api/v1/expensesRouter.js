import express from "express"
import { ValidationError } from "objection"

import { Expense } from "../../../models/index.js"

import cleanUserInput from "../../../services/cleanUserInput.js"
import ExpensesSerializer from "../../../serializers/ExpensesSerializer.js"


const expensesRouter = new express.Router()

expensesRouter.get("/", async (req, res) => {
  try {
    const expenses = await Expense.query()
    const serializedExpenses = await ExpensesSerializer.getExpenseCollectionDetails(expenses)

    return res.status(200).json({ expenses: serializedExpenses })
  } catch (error) {

    return res.status(500).json({ errors: error })
  }
})

expensesRouter.post("/", async (req, res) => {
  const { file } = req
  try {
    const formInput = {
      ...cleanUserInput(req.body),
      
    }

    const expense = await Expense.query().insertAndFetch(formInput)

    return res.status(201).json({ expense })
  } catch (error) {
    if (error instanceof ValidationError) {
      res.status(422).json({ errors: error.data })
    } else {
      res.status(500).json({ errors: error })
    }
  }
})

expensesRouter.get("/:id", async (req, res) => {
  const { user } = req
  try {
    const expense = await Expense.query().findById(req.params.id)
    const userId =  user ? user.id : null
    const serializedExpense = await ExpensesSerializer.getExpenseDetail(expense, userId)

    return res.status(200).json({ expense: serializedExpense })
  } catch (error) {

    return res.status(500).json({ errors: error })
  }
})


export default expensesRouter