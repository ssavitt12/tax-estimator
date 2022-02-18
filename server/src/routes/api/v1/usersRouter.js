import express from "express"
import passport from "passport"
import { User } from "../../../models/index.js"
import objection from "objection"
import UserSerializer from "../../../serializers/UserSerializer.js"
import expensesRouter from "../v1/expensesRouter.js"
import earningsRouter from "../v1/earningsRouter.js"


const { ValidationError } = objection

const usersRouter = new express.Router()

usersRouter.get("/:id", async (req, res) => {
  const userId = req.user.id
  const webId = req.params.id
  try {
    if (userId !== webId) {
      const errorMessage = "unauthorized to access"
      throw errorMessage
    }
    const user = await User.query().findById(userId)
    const serializedUser = await UserSerializer.getUserDetail(user)
    res.status(200).json({ user: serializedUser })
  } catch (error) {
    res.status(500).json({ errors: error })
  }
})

usersRouter.post("/", async (req, res) => {
  const { email, password, passwordConfirmation, name } = req.body
  try {
    const persistedUser = await User.query().insertAndFetch({ email, password, name })
    return req.login(persistedUser, () => {
      return res.status(201).json({ user: persistedUser })
    })
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(422).json({ errors: error.data })
    }
    return res.status(500).json({ errors: error })
  }
})

usersRouter.use("/:id/expenses", expensesRouter)
usersRouter.use("/:id/earnings", earningsRouter)

export default usersRouter
