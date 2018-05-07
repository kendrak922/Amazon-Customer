
const inquirer = require('inquirer');
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
    
        // Use user feedback for... whatever!!
});