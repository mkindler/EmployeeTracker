const inquirer = require("inquirer");
const mysql = require("mysql")
const logo = require("asciiart-logo");
const db = require ("./db");
require("console.table");

init();

function init() {
    const logoBanner = logo({
        name: "Employee Manager",
        logoColor: "bold-green",
    })
    .render();

    console.log(logoBanner);

    loadMainPrompts();
}

