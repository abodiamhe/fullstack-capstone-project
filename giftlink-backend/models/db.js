// db.js
require('dotenv').config();
const { MongoClient } = require('mongodb');

// MongoDB connection URL with authentication options
let url = `${process.env.MONGO_URL}`;

let dbInstance = null;
const dbName = "giftdb";

async function connectToDatabase() {
    if (dbInstance){
        return dbInstance
    };

    const client = new MongoClient(url);      

    try {
        // Task 1: Connect to MongoDB
        await client.connect()
        console.log('Connection to database successful')
        // Task 2: Connect to database giftDB and store in variable dbInstance
        dbInstance = client.db(dbName)
        // Task 3: Return database instance 
        return dbInstance
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectToDatabase;
