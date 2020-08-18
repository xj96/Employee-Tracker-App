// Build a command-line application that at a minimum allows the user to:

//   * Add departments, roles, employees

//   * View departments, roles, employees

//   * Update employee roles

// =====================================================================================================================

// CODE GOES HERE

// Dependencies
const mysql = require("mysql");
const inquirer = require("inquirer");
require("console.table");

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
      message:
        "Would you like to ADD departments, roles, and employess, or VIEW departments, roles, and employees or UPDATE employee roles?",
      choices: ["ADD", "VIEW", "UPDATE"],
    })
    .then(function (answer) {
      // based on the users answer we are going to add, view, or update the specified information
      if (answer.addViewUpdate === "ADD") {
        // Run addInfo() function
        addInfo();
      } else if (answer.addViewUpdate === "VIEW") {
        // Run viewInfo() function
        viewInfo();
      } else if (answer.addViewUpdate === "UPDATE") {
        // Run updateRole() function
        updateEmployeeRole();
      } else {
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
        choices: ["Department", "Role", "Employee"],
      },
    ])
    .then(function (answer) {
      if (answer.add === "Department") {
        // Run some code
        addDepartment();
      } else if (answer.add === "Role") {
        // Run some code
        addRole();
      } else if (answer.add === "Employee") {
        // Run some code
        addEmployee();
      } else {
        start();
      }
    });
}

// function to handle viewing content from the database
function viewInfo() {
  // prompt user for what they want to view from the database
  inquirer
    .prompt([
      {
        name: "view",
        type: "list",
        message: "What would you like to view from the table?",
        choices: ["Department", "Role", "Employee"],
      },
    ])
    .then((answer) => {
      if (answer.view === "Department") {
        // Run some code
        viewDepartments();
      } else if (answer.view === "Role") {
        // Run some code
        viewRole();
      } else if (answer.view === "Employee") {
        // Run some code
        viewEmployee();
      } else {
        start();
      }
    });
}

// function to handle updating the roles content to the database
function updateEmployeeRole() {
  // prompt user on input for updating the roles database

  var employees = [];
  connection.query("SELECT * FROM employee", function (err, result) {
    result.forEach((employee) => {
      employees.push(employee.first_name + " " + employee.last_name);
    });
  });

  inquirer
    .prompt([
      {
        name: "title",
        type: "list",
        message: "Who is the employee you would like to update?",
        choices: employees,
      },
      {
        name: "salary",
        type: "input",
        message: "What is their new role?",
        validate: function (value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        },
      },
    ])
    .then((answer) => {
      connection.query(
        // UPDATE
        "UPDATE employee SET ? WHERE ?",
        [
          {
            title: answer.title,
            salary: answer.salary,
            department_id: answer.department_id,
          },
          {
              id: answer.id
          },
        ],
        function (err, res) {
          console.log(err);
          if (err) throw err;
          console.log("You updated roles!");
          console.table(res.data);
          // re-prompt the user for if they want to do anything else with the database
          start();
        }
      );
    });
}

// Add department

function addDepartment(answer) {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter the new department name:",
        name: "name",
      },
    ])
    .then((answer) => {
      connection.query(
        "INSERT INTO departments SET ?",
        {
          name: answer.name,
        },
        function (err, res) {
          if (err) throw err;
          console.log("You added a department!");
          // re-prompt the user for if they want to do anything else with the database
          start();
        }
      );
    });
}

// Add role

function addRole(answer) {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter new role title:",
        name: "title",
      },
      {
        type: "input",
        message: "Enter new role salary:",
        name: "salary",
      },
      {
        type: "input",
        message: "Enter new role department id:",
        name: "department_id",
      },
    ])
    .then((answer) => {
      connection.query(
        "INSERT INTO role SET ?",
        {
          title: answer.title,
          salary: answer.salary,
          department_id: answer.department_id,
        },
        function (err, res) {
          if (err) throw err;
          console.log("You added a role title!");
          // re-prompt the user for if they want to do anything else with the database
        }
      );
      start();
    });
}

// Add employee

function addEmployee(answer) {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter the first name of the employee:",
        name: "first_name",
      },
      {
        type: "input",
        message: "Enter the last name of the employee:",
        name: "last_name",
      },
      {
        type: "input",
        message: "Enter the new employee's role id number:",
        name: "role_id",
      },
      {
        type: "input",
        message: "Enter the new employee's manager id number:",
        name: "manager_id",
      },
    ])
    .then((answer) => {
      console.log("rid", typeof answer.role_id);
      console.log("mid", typeof answer.manager_id);
      console.log(answer);
      connection.query(
        "INSERT INTO employee SET ?",
        {
          first_name: answer.first_name,
          last_name: answer.last_name,
          role_id: answer.role_id,
          manager_id: answer.manager_id,
        },
        function (err, res) {
          if (err) throw err;
          console.log("You added a department!");
          // re-prompt the user for if they want to do anything else with the database
          start();
        }
      );
    });
}

// View department name w/ employees

function viewDepartments() {
  console.log("Viewing Departments...");
  connection.query("SELECT * FROM employee_trackerDB.departments", function (
    err,
    departments
  ) {
    console.table(departments);
    start();
  });
}

// View role

function viewRole() {
  console.log("Viewing Roles...");
  connection.query("SELECT * FROM employee_trackerDB.role", function (
    err,
    role
  ) {
    console.table(role);
    start();
  });
}

// View employee

function viewEmployee() {
  console.log("Viewing Employees...");
  connection.query("SELECT * FROM employee_trackerDB.employee", function (
    err,
    employee
  ) {
    console.table(employee);
    start();
  });
}

// =====================================================================================================================

// Bonus points if you're able to:

//   * Update employee managers

//   * View employees by manager

//   * Delete departments, roles, and employees

//   * View the total utilized budget of a department -- ie the combined salaries of all employees in that department

// =====================================================================================================================
