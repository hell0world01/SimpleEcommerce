const mongoose = require("mongoose");

const connectDatabase = () => {
	mongoose
		.connect(process.env.DB_CONNECTION)
		.then((value) => {
			console.log(`${value.connection.host}`);
		});
};
module.exports = connectDatabase;
