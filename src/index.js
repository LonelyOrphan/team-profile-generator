// Include packages needed for this application
import fs from "fs";
import inquirer from "inquirer";
import generateHtml from "./utils/generateHtml.js";
import Employee from "./lib/Employee.js";
import Manager from "./lib/Manager.js";
import Engineer from "./lib/Engineer.js";
import Intern from "./lib/Intern.js";

export const employeeRoster = [];

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

const createManager = () => {
  return inquirer
    .prompt([
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
    ])
    .then((answer) => {
      const manager = new Manager(
        answer.managerName,
        answer.managerId,
        answer.managerEmail,
        answer.officeNumber
      );
      employeeRoster.push(manager);
      questions();
    });
};

const createEngineer = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "Enter the Engineer's name:",
        name: "engineerName",
      },
      {
        type: "input",
        message: "Enter the Engineer's employee ID:",
        name: "engineerId",
      },
      {
        type: "input",
        message: "Enter the Engineer's email address:",
        name: "engineerEmail",
      },
      {
        type: "input",
        message: "Enter the Engineer's Github username:",
        name: "github",
      },
    ])
    .then((answer) => {
      const engineer = new Engineer(
        answer.engineerName,
        answer.engineerId,
        answer.engineerEmail,
        answer.github
      );
      employeeRoster.push(engineer);
      questions();
    });
};

const createIntern = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "Enter the Intern's name:",
        name: "internName",
      },
      {
        type: "input",
        message: "Enter the Intern's employee ID:",
        name: "internId",
      },
      {
        type: "input",
        message: "Enter the Intern's email address:",
        name: "internEmail",
      },
      {
        type: "input",
        message: "Enter the Intern's school name:",
        name: "school",
      },
    ])
    .then((answer) => {
      const intern = new Intern(
        answer.internName,
        answer.internId,
        answer.internEmail,
        answer.school
      );
      employeeRoster.push(intern);
      questions();
    });
};

const nextStep = (choice) => {
  if (choice.home == "Add a Manager") {
    createManager();
  }
  if (choice.home == "Add an Engineer") {
    createEngineer();
  }
  if (choice.home == "Add an Intern") {
    createIntern();
  }
  if (choice.home == "Exit and build webpage") {
    saveWebpage(employeeRoster);
  }
};

// Questions for user input
const questions = () => {
  home().then((choice) => {
    nextStep(choice);
  });
};

// Write to index.html file
const saveWebpage = (data) => {
  generateHtml(data);
  // fs.writeFile("index.html", generateHtml(data), function (err) {
  //   if (err) throw err;
  //   console.log("Webpage saved.");
  // });
};

// Initialise app
// function init() {
//   questions().then((answers) =>
//     generateHtml(answers).then((data) => saveWebpage(data))
//   );
// }

function init() {
  questions();
}

init();
