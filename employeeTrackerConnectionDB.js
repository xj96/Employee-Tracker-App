// Build a command-line application that at a minimum allows the user to:

//   * Add departments, roles, employees

//   * View departments, roles, employees

//   * Update employee roles

// =====================================================================================================================

// CODE GOES HERE

// Dependencies
const mysql = require("mysql");
const inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "xej62920",
    database: "employee_trackerDB",
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    start();
});

function start() {
    inquirer
        .prompt({
            name: "addViewUpdate",
            type: "list",
            message: "Would you like to ADD departments, roles, and employess, or VIEW departments, roles, and employees or UPDATE employee roles?",
            choices: ["ADD", "VIEW", "UPDATE"]
        })
        .then(function (answer) {
            // based on the users answer we are going to add, view, or update the specified information
            if (answer.addViewUpdate === "ADD") {
                // Run addInfo() function
                addInfo()
            } else if (answer.addViewUpdate === "VIEW") {
                // Run viewInfo() function
                viewInfo()
            } else if (answer.addViewUpdate === "UPDATE") {
                // Run updateRole() function
                updateRole()
            }
            else {
                connection.end();
            }
        });
}

// function to handle adding content to the database
function addInfo() {
    // prompt user for what they want to add to the database
    inquirer
        .prompt([
            {
                name: "add",
                type: "list",
                message: "What would you like to add to the table?",
                choices: ["Department", "Role", "Employee"]
            }
        ])
        .then(answer => {
            if (answer.add === "Department") {
                // Run some code
            }
            else if (answer.add === "Role") {
                // Run some code
            }
            else if (answer.add === "Employee") {
                // Run some code
            }
            else {
                start()
            }
        })
}

// function to handle viewing content from the database
function viewInfo() {
    // prompt user for what they want to view from the database
    inquirer
        .prompt([
            {
                name: "update",
                type: "list",
                message: "What would you like to view from the table?",
                choices: ["Department", "Role", "Employee"]
            }
        ])
        .then(answer => {
            if (answer.add === "Department") {
                // Run some code
            }
            else if (answer.add === "Role") {
                // Run some code
            }
            else if (answer.add === "Employee") {
                // Run some code
            } else {
                start()
            }
        })
}

// function to handle adding content to the database
function updateRole() {
    // prompt user for what they want to add to the database
    inquirer
        .prompt([
            {
                name: "role",
                type: "input",
                message: "What role would you like to add?",
            }
        ])
        .then(answer => {

        })
}








// =====================================================================================================================

// Bonus points if you're able to:

//   * Update employee managers

//   * View employees by manager

//   * Delete departments, roles, and employees

//   * View the total utilized budget of a department -- ie the combined salaries of all employees in that department

// =====================================================================================================================


