import express from "express"
import { ValidationError } from "objection"

import { User } from "../../../models/index.js"
import EarningsSerializer from "../../../serializers/EarningsSerializer.js"
import cleanUserInput from "../../../services/cleanUserInput.js"

const earningsRouter = new express.Router({ mergeParams: true })

earningsRouter.post("/", async (req, res) => {
  try {
    if (!req.user) {
      throw new Error ("Sign in please")
    }
  
    const earningsData = {
    ...cleanUserInput(req.body),
    userId: req.user.id,
    earningsId: req.params.id,
  }

    const user = await User.query().findById(earningsData.userId)
    const earnings = await user.$relatedQuery("earnings").insertAndFetch(earningsData)

    const serializedEarnings = await EarningsSerializer.getDetail(earnings)

    res.status(200).json({ earnings: serializedEarnings })
    
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(422).json({ errors: error.data })
    } else {
      return res.status(500).json({ errors: error })
    }
  }
})

export default earningsRouter