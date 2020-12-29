// Required dependencies to install
const prompt = require("inquirer");
const logo = require("asciiart-logo");
const db = require ("./db");
require("console.table");

init();

// Displays banner at the initialization of the application
function init() {
    const logoBanner = logo({
        name: "Employee Manager",
        logoColor: "bold-green",
    })
    .render();

    console.log(logoBanner);

    loadMainPrompts();
}

// Load main prompts from which user will select an option 
async function loadMainPrompts() {
    const choice = await prompt([
        {
            type: "list",
            name: "choice",
            message: "What would you like to do?",
            choices: [
                {
                    name: "View All Departments",
                    value: "VIEW_DEPARTMENTS"
                },
                {
                    name: "View All Roles",
                    value: "VIEW_ROLES"
                },
                {
                    name: "View All Employees",
                    value: "VIEW_EMPLOYEES"
                },
                {
                    name: "Add Department",
                    value: "ADD_DEPARTMENT"
                },
                {
                    name: "Add Role"
                    value: "ADD_ROLE"
                },
                {
                    name: "Add Employee"
                    value: "ADD_EMPLOYEE"
                },
                {
                    name: "Update Employee Role"
                    value: "UPDATE_EMPLOYEE_ROLE"
                },
                {
                    name: "Exit",
                    value: "EXIT"
                }
            ]
        }
    ]);

    // Start the correct function based on what the user chooses
    switch (choice) {
        case "VIEW_DEPARTMENTS":
            return viewDepartments();
        case 
    }
}