'use strict';
module.exports = {
	db: {
		connectionLimit: 10,
		host: 'localhost',
		user: 'root',
		password: 'root',
		port: '3306',
		database: 'huahua',
		queueLimit: 2,
		waitForConnections: true,
		acquireTimeout: 10000
	}
};