// https://cloud.mongodb.com/ -> google Sign-in (rba**@gmail.com)
// 1) DATABASE Access -> add database user -> password ( praveen & praveen15 ) -> Built-in Role ( Atlas Admin ) -> ADD USER
// 2) Network Access -> Add IP Address -> Allow Acess From Anywhere -> CONFIRM
// 3) Database -> Build DataBase -> M0 Free -> AWS -> mumbai ap-south-1 -> connect -> Drivers -> Add your connection string into your application code ( copy )

import { MongoClient } from "mongodb";
import dotenv from "dotenv";
//env Configuration
dotenv.config();

const connectionString = process.env.MONGO_URL ;

const localString = process.env.LOCAL_URL ;

async function dbConnection(){
    try{
        const client = new MongoClient(connectionString);
        await client.connect();
        console.log("Database Connected");
        return client;
    }catch (err) {
        console.log("Error Connecting DataBase",err);
    }
    
}

//Initializing DB
export const client = await dbConnection();