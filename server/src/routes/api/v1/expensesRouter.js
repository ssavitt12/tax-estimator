import express from "express"
import { ValidationError } from "objection"

import { Expense } from "../../../models/index.js"
import cleanUserInput from "../../../services/cleanUserInput.js"

const expensesRouter = new express.Router({ mergeParams: true })

expensesRouter.post("/", async (req, res) => {
  try {
    const { body } = req;
    const formInput = cleanUserInput(body);
    const { mileage, communications, amenities, supplies, tolls } = formInput;
    const userId = req.params.userId;

    const expense = await Expense.query().insertAndFetch({ mileage, communications, amenities, supplies, tolls, userId });
    console.log(expense);
    return res.status(201).json({ expense: expense });
  } catch (error) {
    console.log(error);
    if (error instanceof ValidationError) {
    return res.status(422).json({ errors: error.data });
    }
    return res.status(500).json({ errors: error });
  }
});

export default expensesRouter