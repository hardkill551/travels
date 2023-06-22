import httpStatus from "http-status";
import { passengersService } from "../services/passengers.service.js";

export async function passengersController(req, res){
    const {page} = req.query
    try {
        if(!Number(page) || page<1) res.status(400).send("Invalid page value")
        const passengers = await passengersService(page)
        if (passengers.length>100) res.status(httpStatus.INTERNAL_SERVER_ERROR)
        
        res.status(httpStatus.OK).send(passengers.rows)
    } catch (err) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message)
    }
    
}