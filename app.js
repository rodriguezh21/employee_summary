const fs = require("fs");
const inquirer = require("inquirer");

const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager")

async function userInput(){
   
    let teamHTML = "";

    await inquirer.prompt([ 
     {
        type: "input",
        message: `What is employee's name?`,
        name: "name"
    },
    {
        type: "input",
        message: `What is the employee's id?`,
        name: "id"
    },
    {
        type: "input",
        message: `What is the employee's Email?`,
        name: "email"
    },
    {
        type: "list",
        message: `what the employee's title?`,
        name: "title",
        choices: ["Engineer", "Intern", "Manager"]
    }
    ])
        .then((data) => {

            name = data.name;
            id = data.id;
            title = data.title;
            email = data.email;
        });

        switch (title){
            case "Manager":

                await inquirer.prompt([
                    {
                        type: "input",
                        message: "What is your Manager's Office Number?",
                        name: "officeNumber"
                    }
                ])
                .then((data) => {

                    const manager = new Manager(name, id, email, data.officeNumber);

                    teamMember = fs.readFileSync("templates/manager.html");

                    teamHTML = teamHTML + "\n" + eval('`'+ teamMember +'`');

                    manager;
                });
                break;

           
            case "Intern":
                await inquirer.prompt([
                    {
                        type: "input",
                        message: "What school is your Intern attending?",
                        name: "school"
                    }
                ])
                .then((data) => {
                    const intern = new Intern(name, id, email, data.school);
                    teamMember = fs.readFileSync("templates/intern.html");
                    teamHTML = teamHTML + "\n" + eval('`'+ teamMember +'`');

                    intern;
                });
                break;

            
            case "Engineer":
                await inquirer.prompt([
                    {
                        type: "input",
                        message: "What is your Engineer's GitHub?",
                        name: "github"
                    }
                ])
                .then((data) => {
                    const engineer = new Engineer(name, id, email, data.github);
                    teamMember = fs.readFileSync("templates/engineer.html");
                    teamHTML = teamHTML + "\n" + eval('`'+ teamMember +'`');

                    engineer;
                });
                break;

        } 

   

    const mainHTML = fs.readFileSync("templates/main.html");
    
    teamHTML = eval('`'+ mainHTML +'`');

    fs.writeFile("output/team.html", teamHTML, function(err) {

        if (err) {
          return console.log(err);
        }
      
        console.log("Success!");
      
      });

}

userInput();