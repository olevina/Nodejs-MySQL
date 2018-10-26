var mysql = require("mysql");
var inquirer = require('inquirer');

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "229535Jkz",
  database: "bamazonDB"
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  start();
});

function start() {
  inquirer
    .prompt([{
      name: "firstq",
      type: "input",
      message: "ID of the product they would like to buy?",
    },
    {
      name: "secondq",
      type: "input",
      message: "How many units of the product they would like to buy?",
    }])
    .then(function (answer) {
      check(answer.firstq, answer.secondq);
    });
}

function check(id, amount) {

  let readQuery = "SELECT stock_quantity FROM products WHERE id = " + id;

  connection.query(readQuery, function (err, results) {
    if (err) throw err;
    let requestedAmount = parseInt(amount);
    if (results[0].stock_quantity < requestedAmount) {
      console.log("Insufficient quantity!");
    }
    else {
      updateDB(requestedAmount,results[0].stock_quantity,id);
      totalPrice(requestedAmount,id);
    }
    connection.end();

  })
}

function updateDB(jimmy, jones, id) {
  let updatedAmount = jones - jimmy;

  connection.query("UPDATE products SET ? WHERE ?", [{
    stock_quantity: updatedAmount
}, {
    id: id
}],function (err, results) {
    if (err) throw err;
    
    
  });
  console.log("Amount left " + updatedAmount);
  // connection.end();
}

function totalPrice (jimmy, id) {
  let readQuery = "SELECT price FROM products WHERE id = " + id;

  connection.query(readQuery, function (err, results) {
    if (err) throw err;
let yourPrice = jimmy * results[0].price;
console.log("Your total amount is " + yourPrice);

  

  })
  //  connection.end();
}