// Include packages needed for this application
import fs from "fs";
import inquirer from "inquirer";
import generateHtml from "./utils/generateHtml.js";
import Employee from "./lib/Employee";
import Manager from "./lib/Manager";
import Engineer from "./lib/Engineer";
import Intern from "./lib/Intern";

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
      message: "Enter the manager's employee ID:",
      name: "managerId",
    },
  ]);
};

// Questions for user input
const questions = () => {
  home().then((choice) => {});
};

// Write to index.html file
const saveWebpage = (data) => {
  console.log(data);
  fs.writeFile("index.html", data, function (err) {
    if (err) throw err;
    console.log("Webpage saved.");
  });
};

// Initialise app
function init() {
  questions().then((answers) =>
    generateHtml(answers).then((data) => saveWebpage(data))
  );
}

init();
