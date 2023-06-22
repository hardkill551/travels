import getPassengers from "../repositories/passengers.js";

export async function passengersService(page){
    console.log(page-1)
    const passengers = await getPassengers((page-1)*25)
    passengers.rows.map(passenger =>{
        delete passenger.id
    })
    return passengers 
}