import pg from "pg";

const { Pool } = pg;
const connection = new Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "91122325",
  database: "travels"
});

export default connection;