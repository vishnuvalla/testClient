const express = require('express');
const bodyParser = require('body-parser');
const mysql      = require('mysql');
// https://github.com/mysqljs/mysql
const con = mysql.createConnection({
  host     : 'localhost',
  user     : 'admin',
  password : 'DeepRisk&&',
  database : 'test'
});

// Initialize the app
const app = express();

// https://expressjs.com/en/guide/routing.html
app.get('/predictions', function (req, res) {
  con.connect(function(err) {
    if (err) throw err;
    //Select all customers and return the result object:
    con.query("SELECT * FROM test_predictions LIMIT 10;", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
      res.send(result);
    });
  });
  
});
// Start the server
app.listen(3000, () => {
 console.log('Go to http://localhost:3000/predictions to see posts');
});