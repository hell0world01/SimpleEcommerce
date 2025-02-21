const app = require("./app");
const connectDatabase = require("./database/Database");

//handle uncaughtException
process.on("uncaughtException", (err) => {
	console.log(`Error : ${err}`);
})

//connecting to mongooseDB
connectDatabase();

//creating server
app.listen(process.env.PORT, () => {
	console.log(`Listening to ${process.env.PORT}`);
})