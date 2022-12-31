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

export const getFlashcard = (id: number): any => {
	return new Promise((resolve, reject) => {
		connection.connect((err) => {
			if (err) {
				reject({
					message: err.message
				});
			};
			const sql = 'SELECT * FROM flashcards WHERE id = ?';
			connection.query(sql, [id], (err, records) => {
				const record = records[0];
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

export const getCategories = () => {
	return new Promise((resolve, reject) => {
		connection.connect((err) => {
			if (err) {
				reject({
					message: err.message
				});
			};
			const sql = `SELECT f.id, f.category, c.name as categoryName, f.front, f.back FROM flashcards AS f
JOIN categories AS c ON f.category = c.idCode`;
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

export const addFlashcard = (flashcard: INewFlashcard) => {
	return new Promise((resolve, reject) => {
		connection.connect((err) => {
			if (err) {
				reject({
					message: err.message
				});
			};
			const sql = `INSERT INTO flashcards (category, front, back) VALUES (?, ?, ?)`;
			connection.execute(sql, [flashcard.category, flashcard.front, flashcard.back], (err, result) => {
				const insertId = Object.entries(result)[2][1];
				if (err) {
					reject({
						message: err.message
					});
				};
				resolve(
					{
						status: "success",
						idOfNewRecord: insertId
					}
				)
			});
		});
	})
}

export const editFlashcard = (id: number, newFlashcard: INewFlashcard) => {
	return new Promise((resolve, reject) => {
		connection.connect((err) => {
			if (err) {
				reject({
					message: err.message
				});
			};
			const sql = `UPDATE flashcards SET category = ?, front = ?, back = ? WHERE id = ?`;
			connection.execute(sql, [newFlashcard.category, newFlashcard.front, newFlashcard.back, id], (err, result) => {
				const affectedRows = Number(Object.entries(result)[1][1]);
				if (err) {
					reject({
						message: err.message
					});
				};
				if (affectedRows === 1) {
					resolve(
						{
							status: "success",
							idOfChangedRecord: id
						}
					);
				} else {
					resolve(
						{
							status: "error",
							message: 'no rows changed'
						}
					);
				}
			});
		});
	})
}

export const deleteFlashcard = (id: number) => {
	return new Promise((resolve, reject) => {
		connection.connect((err) => {
			if (err) {
				reject({
					message: err.message
				});
			};
			const sql = `DELETE FROM flashcards WHERE id = ?`;
			connection.execute(sql, [id], (err, result) => {
				const affectedRows = Number(Object.entries(result)[1][1]);
				if (err) {
					reject({
						message: err.message
					});
				};
				if (affectedRows === 1) {
					resolve(
						{
							status: "success",
							idOfDeletedRecord: id
						}
					);
				} else {
					resolve(
						{
							status: "error",
							message: 'no rows deleted'
						}
					);
				}
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
