import express from "express"
import { ValidationError } from "objection"

import { User } from "../../../models/index.js"
import ExpensesSerializer from "../../../serializers/ExpensesSerializer.js"
import cleanUserInput from "../../../services/cleanUserInput.js"

const expensesRouter = new express.Router({ mergeParams: true })

expensesRouter.post("/", async (req, res) => {
  const { id } = req.params
  const expenseData = {
    ...cleanUserInput(req.body),
    userId: req.user.id,
    expenseId: id,
  }

  try {
    const user = await User.query().findById(id)
    const expense = await user.$relatedQuery("expense").insertAndFetch(expenseData)

    const serializedExpense = await ExpensesSerializer.getDetail(expense)

    res.status(200).json({ expense: serializedExpense })
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(422).json({ errors: error.data })
    } else {
      return res.status(500).json({ errors: error })
    }
  }
})

export default expensesRouter