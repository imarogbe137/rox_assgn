import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();

async function connectDB() {
  try {
    const connection = mysql.createConnection({
      host: process.env.HOST,
      user: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.DB_NAME,
    });
    console.log("Database Connected successfully");
    return connection;
  } catch (e) {
    console.error("mysql connection error: " + e.message);
    process.exit(1);
  }
}

export { connectDB };
