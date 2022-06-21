// Include packages needed for this application
import fs from "fs";
import inquirer from "inquirer";
import generateHtml from "./utils/generateHtml.js";

// Questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      message: "What is your project title?",
      name: "title",
    },
    {
      type: "input",
      message: "Enter your project description",
      name: "description",
    },
    {
      type: "input",
      message: "How does the user install your app?",
      name: "installation",
    },
    {
      type: "input",
      message: "Enter the usage instructions for this app",
      name: "usage",
    },
    {
      type: "list",
      message: "What license(s) is this app using?",
      choices: ["MIT", "Apache", "GNU"],
      name: "license",
    },
    {
      type: "input",
      message: "How can people contribute to this project?",
      name: "contributing",
    },
    {
      type: "input",
      message: "How do you run tests on this app?",
      name: "tests",
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
    },
    {
      type: "input",
      message: "What is your github username?",
      name: "github",
    },
  ]);
};

// Write to README file
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
