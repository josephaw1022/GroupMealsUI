import { MongoDBClient } from "../../src/clients/Mongo";
import "@testing-library/jest-dom";

describe("Mongoo Client ", () => {
    it("Should be defined", () => {
        expect(MongoDBClient).toBeDefined();
    });

    it("Should be able to connect to mongo", async () => {
        const client = await MongoDBClient.connect();
        expect(client).toBeDefined();
    });

    it("Should be able to close connection", async () => {
        const client = await MongoDBClient.connect();
        await MongoDBClient.close();
        expect(client).toBeDefined();
    });

    it("The testing collection should be defined in our GroupMealDB", async () => {
        const client = await MongoDBClient.connect();
        const collection = await client.db("GroupMealDB").collection("Testing");
        expect(collection).toBeDefined();
    });

    it("Should get data from Testing colection in our GroupMealDB", async () => {
        const client = await MongoDBClient.connect();
        const collection = await client.db("GroupMealDB").collection("Testing");
        const data = await collection.find({}).toArray();
        expect(data).toBeDefined();
    });
});
