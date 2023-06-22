import { Router } from "express";
import { passengersController } from "../controllers/passengers.controllers.js";

const travelRouter = Router()

travelRouter.get("/passengers/travels", passengersController)


export default travelRouter