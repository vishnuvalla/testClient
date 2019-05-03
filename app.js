const express = require('express');
const bodyParser = require('body-parser');
const mysql      = require('mysql');
// https://github.com/mysqljs/mysql
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'admin',
  password : 'DeepRisk&&',
  database : 'test'
});

// Initialize the app
const app = express();

// https://expressjs.com/en/guide/routing.html
app.get('/predictions', function (req, res) {
    connection.connect();

    connection.query('SELECT * FROM test_predictions LIMIT 10;', function (error, results, fields) {
      if (error) throw error;
      console.log(result);
      res.send(results)
    });

    connection.end();
});
// Start the server
app.listen(3000, () => {
 console.log('Go to http://localhost:3000/predictions to see posts');
});