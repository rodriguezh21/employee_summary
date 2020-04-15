const fs = require("fs");
const inquirer = require("inquirer");

const Employee = require("./lib/Employee")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager")

function userInput() {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is your Email address?",
            name: "email"
        },
        {
            type: "input",
            message: "What is your role?",
            name: "role",
            choices: ['Manager', 'Engineer', 'Intern']
        },
        {
            type: "input",
            message: "Enter your github username:",
            name: "github"
        }
    ])  
    
}

userInput();