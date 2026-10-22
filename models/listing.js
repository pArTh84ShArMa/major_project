const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
    filename:{
        type: String,
        default:  "listingimage"
    },
    url: {
    type: String,
    default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGm3-EPGReO14nVGJKy2EWN5Fd1hWhZEQ3TrXjNaXw5A&s=10",
        set: (v) => v===" " 
        ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGm3-EPGReO14nVGJKy2EWN5Fd1hWhZEQ3TrXjNaXw5A&s=10" 
        : v,
    }
    },
    price: Number,
    location: String,
    country: String
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;