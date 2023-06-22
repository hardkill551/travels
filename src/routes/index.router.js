import { Router } from "express";
import travelRouter from "./travels.router.js";

const router = Router()
router.use(travelRouter)

export default router