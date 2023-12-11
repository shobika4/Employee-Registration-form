const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());




const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'MySQL@2003',
    database: 'empDB',
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

app.post('/register', (req, res) => {
    const employee = req.body;

    connection.query('INSERT INTO Employees SET ?', employee, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error saving employee data');
        } else {
            res.status(200).send('Employee data saved successfully');
        }
    });
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
