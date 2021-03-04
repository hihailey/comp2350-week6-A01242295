const mysql = require('mysql2');

const is_heroku = process.env.IS_HEROKU || false;

//mysql://bf297a3570c8a8:42dd74fd@us-cdbr-east-03.cleardb.com/heroku_462251e8510febb?reconnect=true
const dbConfigHeroku = {
	host: "us-cdbr-east-03.cleardb.com",
	user: "bf297a3570c8a8",
	password: "42dd74fd",
	database: "heroku_462251e8510febb",
	multipleStatements: false
};

const dbConfigLocal = {
	host: "127.0.0.1",
	user: "root",
	password: "qkrwoqja1",
	multipleStatements: false,
	reconnect: true
};

if (is_heroku) {
	var database = mysql.createPool(dbConfigHeroku);
}
else {
	var database = mysql.createPool(dbConfigLocal);
}

module.exports = database;
		