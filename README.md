# EmployeeTracker

## Description

This project utilizes MySQL, `inquirer`, and `node.js` to create an application that allows a company to manage their employees.  Together, these systems create a database that allows an employer to view, add, and update the company's departments, roles, and employees.

## Task

When the application is run from the CLI, the employer is able to:
* View all departments
* View all roles
* View all employees
* Add departments
* Add roles
* Add employees
* Update employee roles
* View the total utilized budget of a department -- the combined salaries of all employees in a given department

Further work is being conducted to implement additional features, including the ability to:
* Update employee managers
* View employees by manager
* Delete departments, roles, and employees

## Usage

This application can be used by places of employment that would like an efficient way of managing and tracking their employee database.

## Installation

This application will require users to install several npm dependencies:
* inquirer
* MySQL
* asciiart-logo
* util
* console.table

Additionally, users must install and use the MySQL Workbench.  The application can be run from the CLI using `node index.js`.

## Process

This project was designed by referencing several other activities and projects, which resulted in the creation of a main `index.js` file, along with a db directory that houses the following files:
* `index.js`
* `connection.js`
* `seed.sql`
* `schema.sql`

## Demo of Deployed Application
GIF demonstrating the application.
<br />
![Demo of Application](assets/employee_tracker_demo.gif)
<br />
A video is included in the assets folder found within the repository.

## Contributing

Please open a New Issue via GitHub for pull requests on this project that includes a description of what you would like to change.

## Acknowledgment

* Trilogy Education Services
* [npm](https://www.npmjs.com/)
    * prompt
    * asciiart-logo
    * inquirer
    * console.table
* [MDN Web Docs - AsyncFunction](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction)
* [Switch Statements](https://www.w3schools.com/js/js_switch.asp)