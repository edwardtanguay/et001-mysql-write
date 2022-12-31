import mysql from 'mysql2';

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'rootroot',
	database: 'northwind'
});

export const getTest = () => {
	return new Promise((resolve, reject) => {
		connection.connect((err) => {
			if (err) throw err;
			const sql = 'SELECT company,last_name,first_name FROM customers';
			connection.query(sql, (err, records) => {
				if (err) {
					reject('there was an error');
				};
				resolve(records);
			});
		});
	})
}

export const getApiInstructions = () => {
	return `
<style>
	body {
		background-color: #444;
		padding: 1rem;
		color: #fff;
		font-family: courier;
	}
	a {
		background-color: #333;
		color: yellow;
	}
</style>
<h1>Flashcard Site API</h1>
<ul>
	<li><a href="test">/test</a> - test</li>
</ul>
	`;
}
