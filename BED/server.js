require('dotenv').config({ path: ".env.development" });

const app = require("./controller/app");

const { MongoClient } = require('mongodb');
const uri = process.env.MONGO_URL;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, { useNewUrlParser: true });
app.listen(process.env.PORT, async () => {
    try {
        await client.connect();
        console.log("SERVING AT :"+process.env.PORT);
    } catch (error) {
        console.error(error);
    }
});