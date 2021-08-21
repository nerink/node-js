// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');
//const emailValidator = require('email-validator');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        name: 'title',
        message: ' Indicate your project name',
        validate: nameInput => {
            if (nameInput){
                return true;
            }else {
                console.log('You need to enter a project name!');
                return false;
            }
        }
    },
    {
        type:'input',
        name: 'repo',
        message: ' Indicate your project repo name',
        validate: nameInput => {
            if (nameInput){
                return true;
            }else {
                console.log('You need to enter a repo name!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "badge",
        message: "Please provide the badges links:"
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('You need to enter a project description!');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide Installation Instructions  ',
        validate: installationInput => {
          if (installationInput) {
            return true;
          } else {
            console.log('Please answer Installation Instructions ');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide Usage Information  ',
        validate: usageInput => {
          if (usageInput) {
            return true;
          } else {
            console.log('Please answer Usage Information ');
            return false;
          }
        }
    },
    {
        type: "input",
        name: "license",
        message: "Please provide the project license:"
    },
    {
        type: 'input',
        name: 'test',
        message: 'Provide test instructions  ',
        validate: testInput => {
          if (testInput) {
            return true;
          } else {
            console.log('Please answer test Information ');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Contribution Information  ',
        validate: contributionInput => {
          if (contributionInput) {
            return true;
          } else {
            console.log('Please answer contributon information ');
            return false;
          }
        }
    },
    {
        type: "input",
        name: "github",
        message: "What is your github user name?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('README file successfully created!');
        }
    })
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function (data) {
        writeToFile("README.md", generateMarkdown(data));
    })
}

// Function call to initialize app
init();
