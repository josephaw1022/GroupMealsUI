import { MongoClient } from "mongodb";

export const MongoDBClient = new MongoClient(String(process.env.MONGO_DB_URL));