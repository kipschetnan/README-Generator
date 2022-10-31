// TODO: Include packages needed for this application
const fileName = 'README.md'
const fs = require('fs')
const inquirer = require('inquirer')
const markdown = require('./utils/generateMarkdown')
console.log(markdown)
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input', 
        name: 'title',
        message: 'Enter a title: '
    },
    {
        type: 'input', 
        name: 'description',
        message: 'Enter a description: '
    },
    {
        type: 'input', 
        name: 'installation',
        message: 'Installation instructions? '
    },
    {
        type: 'input', 
        name: 'usage',
        message: 'Project usage? '
    },
    {
        type: 'input', 
        name: 'contribution',
        message: 'Project contribution? '
    },
    {
        type: 'input', 
        name: 'email',
        message: 'What is your email address? '
    },
    {
        type: 'inpu', 
        name: 'username',
        message: 'What is your Github username? '
    },
    {
        type: 'list', 
        name: 'license',
        message: 'What license do you want to use? ',
        choices: ['MIT', 'ISC', 'GNUPLv3', 'Apache', 'mozilla'],
        filter(val) {
            return val.toLowerCase()
        }
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const mark = markdown.generateMarkdown(data)

    fs.writeFile(fileName, mark, (err) =>
    err ? console.error(err) : console.log('Successfully created README file!'))
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
        .then((answers) => {
            writeToFile('README.md', answers)
        })
        .catch((error) => {
            console.log(error)
        })
}

// Function call to initialize app
init()
