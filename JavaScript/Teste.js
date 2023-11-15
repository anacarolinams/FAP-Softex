const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '@florzinha123',
    database: 'Souza',
});

connection.connect((error) => {
    if (error) throw error;
    console.log(`Connected!`);
});

connection.query(`CREATE TABLE IF NOT EXISTS users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
)`, (error, result) => {
    if (error) throw error;
    console.log(result);
});

connection.query(
    `INSERT INTO users (name, email, password)
    VALUES ('Lindinha', 'lindinha@gmail.com', '1234567'
)`, (error, result) => {
    if (error) throw error;
    console.log(result);
});

connection.query(`SELECT * FROM users`, (error, result) => {
    if (error) throw error;
    console.log(result);
});