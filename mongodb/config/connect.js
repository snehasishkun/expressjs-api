const colors = require("colors");
const URI = require("./uri.json").uri;

const connectMongoDB = async() => {
    if(!URI) return console.log("[DB]: No MongoDB URI found".red);
    mongoose.connect(process.env.MONGODB_URI, () => {
        console.log("[DB]: MongoDB Connection Established Successfully.".green);
    });
}

module.exports = connectMongoDB;