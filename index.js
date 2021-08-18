// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = () =>{
return inquirer.prompt([
    {
        type:'input',
        name: 'Project Name',
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
        name: 'tableofcontents',
        message: 'Provide a table of contents ',
        validate: tableofcontentsInput => {
          if (tableofcontentsInput) {
            return true;
          } else {
            console.log('You need to enter a Table of Contents!');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'installations',
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
        name: 'contrbution',
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
])
};


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
function init() {}

// Function call to initialize app
init();

questions();