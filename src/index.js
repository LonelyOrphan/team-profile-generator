// Include packages needed for this application
import fs from "fs";
import inquirer from "inquirer";
import generateHtml from "./utils/generateHtml.js";
import Employee from "./lib/Employee.js";
import Manager from "./lib/Manager.js";
import Engineer from "./lib/Engineer.js";
import Intern from "./lib/Intern.js";

const home = () => {
  return inquirer.prompt([
    {
      type: "list",
      message:
        "Welcome to the team profile generator. What would you like to do?",
      choices: [
        "Add a Manager",
        "Add an Engineer",
        "Add an Intern",
        "Exit and build webpage",
      ],
      name: "home",
    },
  ]);
};

const manager = () => {
  return inquirer.createPromptModule([
    {
      type: "input",
      message: "Enter the Manager's name:",
      name: "managerName",
    },
    {
      type: "input",
      message: "Enter the Manager's employee ID:",
      name: "managerId",
    },
    {
      type: "input",
      message: "Enter the Manager's email address:",
      name: "managerEmail",
    },
    {
      type: "input",
      message: "Enter the Manager's office number:",
      name: "officeNumber",
    },
  ]);
};

// Questions for user input
// const questions = () => {
//   home().then((choice) => {
//   });
// };

// Write to index.html file
// const saveWebpage = (data) => {
//   console.log(data);
//   fs.writeFile("index.html", data, function (err) {
//     if (err) throw err;
//     console.log("Webpage saved.");
//   });
// };

// Initialise app
// function init() {
//   questions().then((answers) =>
//     generateHtml(answers).then((data) => saveWebpage(data))
//   );
// }

// init();
