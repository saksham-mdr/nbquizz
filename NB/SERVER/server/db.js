const mongoose = require("mongoose");


const connectDB = async () => {
   await mongoose.connect("mongodb://localhost:27017/furnitureLand"
    // await mongoose.connect("mongodb://127.0.0.1:27017/furnitureLand"
    , {
        keepAlive: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Database Connected!");
};

module.exports = connectDB;