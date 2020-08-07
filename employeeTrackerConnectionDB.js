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
});










// =====================================================================================================================

// Bonus points if you're able to:

//   * Update employee managers

//   * View employees by manager

//   * Delete departments, roles, and employees

//   * View the total utilized budget of a department -- ie the combined salaries of all employees in that department

// =====================================================================================================================


