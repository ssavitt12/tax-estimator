import express from "express"
import { ValidationError } from "objection"

import { Tax } from "../../../models/index.js"
import cleanUserInput from "../../../services/cleanUserInput.js"

const userTaxesRouter = new express.Router({ mergeParams: true })

userTaxesRouter.post("/", async (req, res) => {
  try {
    const { body } = req;
    const formInput = cleanUserInput(body);
    const { mileage, communications, amenities, supplies, tolls, uber, lyft, ubereats, doordash, grubhub, instacart, other, userFilingStatus, userHomeState } = formInput;
    const userId = req.params.userId;

    const tax = await Tax.query().insertAndFetch({ mileage, communications, amenities, supplies, tolls, uber, lyft, ubereats, doordash, grubhub, instacart, other, userFilingStatus, userHomeState, userId });
    console.log(tax);
    return res.status(201).json({ tax: tax });
  } catch (error) {
    console.log(error);
    if (error instanceof ValidationError) {
    return res.status(422).json({ errors: error.data });
    }
    return res.status(500).json({ errors: error });
  }
});


export default userTaxesRouter