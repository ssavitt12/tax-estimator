import express from "express"
import { ValidationError } from "objection"

import { User } from "../../../models/index.js"
import ExpensesSerializer from "../../../serializers/EarningsSerializer.js"
import cleanUserInput from "../../../services/cleanUserInput.js"

const expensesRouter = new express.Router({ mergeParams: true })

expensesRouter.post("/", async (req, res) => {
  try {
    if (!req.user) {
      throw new Error ("Sign in please")
    }
  
    const expensesData = {
    ...cleanUserInput(req.body),
    userId: req.user.id,
    expensesId: req.params.id,
  }

    const user = await User.query().findById(expenses.userId)
    const expenses  = await user.$relatedQuery("expenses").insertAndFetch(expensesData)

    const serializedExpenses = await ExpensesSerializer.getDetail(expenses)

    res.status(200).json({ earnings: serializedExpenses })
    
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(422).json({ errors: error.data })
    } else {
      return res.status(500).json({ errors: error })
    }
  }
})

export default expensesRouter