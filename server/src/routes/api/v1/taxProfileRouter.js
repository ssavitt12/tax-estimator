import express from "express"
import { ValidationError } from "objection"

import { TaxProfile } from "../../../models/index.js"
import cleanUserInput from "../../../services/cleanUserInput.js"

const taxProfileRouter = new express.Router({ mergeParams: true })

taxProfileRouter.post("/", async (req, res) => {
  try {
    const { body } = req;
    const formInput = cleanUserInput(body);
    const { userFilingStatus, userHomeState } = formInput;
    const userId = req.params.userId;

    const taxProfile = await TaxProfile.query().insertAndFetch({ userFilingStatus, userHomeState, userId });
    console.log(taxProfile);
    return res.status(201).json({ taxProfile: taxProfile });
  } catch (error) {
    console.log(error);
    if (error instanceof ValidationError) {
    return res.status(422).json({ errors: error.data });
    }
    return res.status(500).json({ errors: error });
  }
});


export default taxProfileRouter