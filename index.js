// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input

const questions = [
    {
        type: 'input',
        message: 'Enter your project title: ',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Why did you build this project?  What was your motivation?',
        name: 'motivation'
    },
    {
        type: 'input',
        message: 'What problem does it solve?',
        name: 'usefulness'
    },
    {
        type: 'input',
        message: 'What did you learn?',
        name: "learn"
    },
    {
        type: 'input',
        message: 'What makes your project stand out?',
        name: "uniqueness"
    },
    {
        type: 'input',
        message: 'What is the URL of your repository?',
        name: "repo"
    },
    {
        type: 'input',
        message: 'What makes URL of your deployed website?',
        name: "website"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(__dirname, fileName), data);
    // use this function to run fs.writefile
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(answers) {
        writeToFile('README.md', generateMarkdown(answers));
        console.log('You just made a README!');
    })
}

// Function call to initialize app
init();