"use strict";

const mysql = require("mysql");
const inquirer = require('inquirer');
// create the connection information for the sql database
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "shrimp93",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  displayProducts();
});

function displayProducts() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
   console.log(res);
}  
  )};
inquirer.prompt([
    {   type: "input",
        name: "idNumber",
        message: "What is the ID of the product you would like to buy?"
    },
    {   type: "input",
        name: "howMany",
        message: "How many units of this product would you like to buy??"
    }
]).then(answers => {
        connection.query("SELECT * FROM products WHERE ?", {item_id : answers.idNumber}, function(err, res) {
        if (err) throw err;
        console.log("\n-------------\n");
          console.log(`Product: ${res[0].product_name}`);
          console.log(`Id Number: ${res[0].item_id}`);
          console.log(`Price:${res[0].price}`)
          console.log("\n-------------");
        if (res[0].stock_quantity-answers.howMany >= 0){  
       connection.query("UPDATE products SET ? WHERE ?",
          [
            {
              stock_quantity: (res[0].stock_quantity-answers.howMany)
            },
            {
              item_id: answers.idNumber
            }
          ],
      )
      console.log("\n-------------\n");
      console.log("Order is on the way!")
      console.log(`You spent ${res[0].price} dollars.`)
      console.log("\n-------------");
    } else {
        console.log("Insufficient quantity!");
    }
});
 });