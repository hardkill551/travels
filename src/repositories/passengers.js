import connection from "../database/database.js";

export default function getPassengers(page){
    return connection.query(`SELECT passengers.id, passengers."fullName" AS passenger, COUNT(passenger_travels."passengerId") AS travels FROM passengers INNER JOIN passenger_travels ON passengers.id = passenger_travels."passengerId" GROUP BY passengers.id ORDER BY travels DESC LIMIT 25 OFFSET $1`, [page])
}