var mysql = require("mysql");
var inquirer = require('inquirer');

var managerCommand = process.argv.slice(2).join(" ");
var addCommand = process.argv[2];

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
  if (managerCommand === "View Products for Sale"){
    selectAll();
    };
    if (managerCommand === "View Low Inventory"){
      selectLowQ();
      };

      if (addCommand=== "Add New Product"){
        
        addProduct();
        // connection.end();
        };

        if (managerCommand=== "Add to Inventory"){
        
          start();
          // connection.end();
          };
      
  });


//View Products for Sale
function selectAll() {

  let readQuery = "SELECT * FROM products";

  connection.query(readQuery, function (err, results) {
    if (err) throw err;
    console.log(results);

    connection.end();

  })
}

//View Low Inventory

function selectLowQ() {

  let readQuery = "SELECT * FROM products WHERE stock_quantity < 10";

  connection.query(readQuery, function (err, results) {
    if (err) throw err;
    console.log(results);

    connection.end();

  })
}


//Update stock

function start() {
  inquirer
    .prompt([{
      name: "firstq",
      type: "input",
      message: "ID of the product they would like to add to",
    },
    {
      name: "secondq",
      type: "input",
      message: "How many units of the product they would like to add?",
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
    
    updateDB(requestedAmount,results[0].stock_quantity,id);

    
    connection.end();

  })
}

function updateDB(jimmy, jones, id) {
  let updatedAmount = jones + jimmy;

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



// Add New Product

var productName = process.argv[3];
var departmentName = process.argv[4];
var price = process.argv[5];
var stock = process.argv[6];


function addProduct() {
    console.log("Inserting to DB");

    connection.query("INSERT INTO products SET ?", {
        product_name: productName,
        department_name: departmentName,
        price: price,
        stock_quantity: stock
    }, function (error, results) {
        if (error) throw error;
        
        connection.end();
        return;
    });
 
}