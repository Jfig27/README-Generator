// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const { generateMarkdown } = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the tile of your application?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide the description: ',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Detail the installation instructions: ',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide usage information: ',
        },
        {
            type: 'input',
            name: 'guidelines',
            message: 'What are the guidelines?',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Who contributed to your application?',
        },
        {
            type: 'input',
            name: 'test',
            message: 'Is there a test?',
        },
        {
            type: 'input',
            name: 'questions',
            message: 'What do I do when I have an issue?',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Licenses:',
            choices: ["MIT", "APACHE 2.0", "Boost 1.0", "GPLv3", "None"]
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email:',
        },
    ]);
};

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create a function to initialize app
const init = () => {
    promptUser()
        .then((answers) => writeFileAsync('README.md', generateMarkdown(answers)))
        .then(() => console.log('Succesfully wrote to README.md'))
        .catch((err) => console.error(err));
};

// Function call to initialize app
init();
