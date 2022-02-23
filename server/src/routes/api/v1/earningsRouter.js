import express from "express"
import { ValidationError } from "objection"

import { Earning } from "../../../models/index.js"
import cleanUserInput from "../../../services/cleanUserInput.js"

const earningsRouter = new express.Router({ mergeParams: true })

earningsRouter.post("/", async (req, res) => {
  try {
    const { body } = req;
    const formInput = cleanUserInput(body);
    const { uber, lyft, ubereats, doordash, grubhub, instacart, other } = formInput;
    const userId = req.params.userId;

    const earning = await Earning.query().insertAndFetch({ uber, lyft, ubereats, doordash, grubhub, instacart, other, userId });
    console.log(earning);
    return res.status(201).json({ earning: earning });
  } catch (error) {
    console.log(error);
    if (error instanceof ValidationError) {
    return res.status(422).json({ errors: error.data });
    }
    return res.status(500).json({ errors: error });
  }
});

export default earningsRouter