import express from "express";
import userSessionsRouter from "./api/v1/userSessionsRouter.js";
import usersRouter from "./api/v1/usersRouter.js";
import clientRouter from "./clientRouter.js";
import expensesRouter from "./api/v1/expensesRouter.js"
import earningsRouter from "./api/v1/earningsRouter.js";
import taxProfileRouter from "./api/v1/taxProfileRouter.js";

const rootRouter = new express.Router();
rootRouter.use("/", clientRouter);

rootRouter.use("/api/v1/taxProfile", taxProfileRouter)
rootRouter.use("/api/v1/expenses", expensesRouter)
rootRouter.use("/api/v1/earnings", earningsRouter)
rootRouter.use("/api/v1/user-sessions", userSessionsRouter);
rootRouter.use("/api/v1/users", usersRouter);

export default rootRouter;
