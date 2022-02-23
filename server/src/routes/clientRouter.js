import express from "express";
import getClientIndexPath from "../config/getClientIndexPath.js";

const router = new express.Router();

const clientRoutes = [
  "/",
  "/expenses",
  "/earnings",
  "/taxprofile",
  "/user-sessions/new",
  "/users/new",
  "/user-profile",
];
router.get(clientRoutes, (req, res) => {
  res.sendFile(getClientIndexPath());
});

export default router;
