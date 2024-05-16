const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'Database_Name',
    user: 'root',
    password: 'Database_Password',
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }
    console.log('Connected as id ' + connection.threadId);
});

app.get('/data', (req, res) => {
    connection.query('SELECT * FROM information', (error, results) => {
        if (error) {
            console.error('Error querying the database: ' + error.stack);
            return res.status(500).send('Error querying the database');
        }

        let html = '<table border="1"><tr>';
        const columns = Object.keys(results[0]);
        columns.forEach(column => {
            html += `<th>${column}</th>`;
        });
        html += '</tr>';
        results.forEach(row => {
            html += '<tr>';
            columns.forEach(column => {
                html += `<td>${row[column]}</td>`;
            });
            html += '</tr>';
        });
        html += '</table>';

        res.json(results);
    });
});

app.get('/logs', (req, res) => {
    connection.query('SELECT * FROM logs', (error, results) => {
      if (error) {
        console.error('Error querying database: ' + error.stack);
        res.status(500).send('Error querying database');
        return;
      }
      res.json(results);
    });
  });

// SELECT * FROM information WHERE Searchy
app.get('/search', (req, res) => {
    const searchy = req.query.searchy; // Extract the search term from the query parameters
    connection.query('SELECT * FROM information WHERE breed = ?', [searchy], (error, results) => {
        if (error) {
            console.error('Error querying the database: ' + error.stack);
            return res.status(500).send('Error querying the database');
        }

        console.log(results); // Log the results to the console

        res.json(results); // Return the results as JSON
    });
});

app.get('/sealogs', (req, res) => {
    const searchylo = req.query.searchylo; // Extract the search term from the query parameters
    connection.query('SELECT * FROM logs WHERE date = ?', [searchylo], (error, results) => {
        if (error) {
            console.error('Error querying the database: ' + error.stack);
            return res.status(500).send('Error querying the database');
        }

        console.log(results); // Log the results to the console

        res.json(results); // Return the results as JSON
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.use(express.static(path.join(__dirname, 'public')));

// © Owned by Pauline Sandico (loeyline)