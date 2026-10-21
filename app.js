const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");


const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
.then(() => {
console.log("connected to DB");
})
.catch((err) => {
console.log(err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
};



app.get("/", (req, res) => {
    res.send("hello i m root!");
});

app.get("/testlisting", async (req, res) => {
    const sampleListing = new Listing({
        title: "My Home",
        description: "Near by Airport",
        price: 1500,
        location: "Delhi",
        country: "India",
    });

    await sampleListing.save();
    console.log("listing was saved");
    res.send("sample is saved!");
});

app.listen("8080", () => {
    console.log("server listening on port 8080");
});