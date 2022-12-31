import mysql from 'mysql2';
import { IFlashcard, INewFlashcard } from './interfaces.js';

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'sitereader',
	password: 'passpass',
	database: 'et001-mysql-write'
});

export const getFlashcards = () => {
	return new Promise((resolve, reject) => {
		connection.connect((err) => {
				if (err) {
					reject({
						message: err.message
					});
				};
			const sql = 'SELECT * FROM flashcards';
			connection.query(sql, (err, records) => {
				if (err) {
					reject({
						message: err.message
					});
				};
				resolve(records);
			});
		});
	})
}

export const getFlashcardsWithCategory = (category: string): any => {
	return new Promise((resolve, reject) => {
		connection.connect((err) => {
				if (err) {
					reject({
						message: err.message
					});
				};
			const sql = 'SELECT * FROM flashcards WHERE category = ?';
			connection.query(sql, [category], (err, record) => {
				if (err) {
					reject({
						message: err.message
					});
				};
				resolve(record);
			});
		});
	})
}


export const getFlashcard = (id: number): any => {
	return new Promise((resolve, reject) => {
		connection.connect((err) => {
				if (err) {
					reject({
						message: err.message
					});
				};
			const sql = 'SELECT * FROM flashcards WHERE id = ?';
			connection.query(sql, [id], (err, record) => {
				if (err) {
					reject({
						message: err.message
					});
				};
				resolve(record);
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
