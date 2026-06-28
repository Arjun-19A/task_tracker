const mongoose = require("mongoose");

const connectToDB = async () => {
    try {
        console.time("Mongo Connection");
        await mongoose.connect(process.env.MONGO_URI);
        console.timeEnd("Mongo Connection");
        console.log("MongoDB Connected");
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
};

module.exports = connectToDB;