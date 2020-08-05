DROP DATABASE IF EXISTS employee_trakerDB;

CREATE DATABASE employee_trakerDB;

USE employee_trakerDB;

CREATE TABLE departments (
id INTEGER(10) AUTO_INCREMENT NOT NULL,
name VARCHAR(30),
PRIMARY KEY(id)
);

CREATE TABLE role (
id INTEGER(10) AUTO_INCREMENT NOT NULL,
title  VARCHAR(30),
salary DECIMAL (10,2),
department_id INTEGER(10),
PRIMARY KEY(id)
);

CREATE TABLE employee (
id INTEGER(10) AUTO_INCREMENT NOT NULL,
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INTEGER(10),
manager_id INTEGER(10) NULL,
PRIMARY KEY(id)
);

SELECT * FROM departments;

SELECT * FROM role;

SELECT * FROM employee;

