-- Deletes the employee_trackerDB if it exists 
DROP DATABASE IF EXISTS employee_trackerDB;

-- Creates a database called employee_trackerDB 
CREATE DATABASE employee_trackerDB;

-- Use employee_trackerDB for the following statements
USE employee_trackerDB;

-- Creates a table called departments
CREATE TABLE departments (

-- Creates a numeric column called 'id', auto_increment increases the value by 1 and it cannot be set to null 
id INTEGER(10) AUTO_INCREMENT NOT NULL,

-- Creates a string column called 'name'
name VARCHAR(30),

-- Sets the primary key of this table to id 
PRIMARY KEY(id)

);

-- Creates a table called role
CREATE TABLE role (

-- Creates a numeric column called 'id', auto_increment increases the value by 1 and it cannot be set to null
id INTEGER(10) AUTO_INCREMENT NOT NULL,

-- Creates a string column called 'title'
title  VARCHAR(30),

-- Creates a decimal column called 'salary'
salary DECIMAL (10,2),

-- Creates a numeric column called 'department_id'
department_id INTEGER(10),

-- Sets the primary key of this table to id
PRIMARY KEY(id)

);

-- Creates a table called employee
CREATE TABLE employee (

 -- Creates a numeric column called 'id', auto_increment increases the value by 1 and it cannot be set to null
id INTEGER(10) AUTO_INCREMENT NOT NULL,

-- Creates a string column called 'first_name' 
first_name VARCHAR(30),

-- Creates a string column called 'last_name'
last_name VARCHAR(30),

-- Creates a numeric column called 'role_id'
role_id INTEGER(10),

-- Creates a numeric column called 'manager_id' that can be null if the employee has no manager 
manager_id INTEGER(10) NULL,

-- Sets the primary key of this table to id
PRIMARY KEY(id)

);
-- Returns the columns and column information pertaining to the designated table 
SELECT * FROM departments;
SELECT * FROM role;
SELECT * FROM employee;