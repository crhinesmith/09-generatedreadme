// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require('fs');
const inquirer = require('inquirer'); 
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your git username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Input Description',
    },
    {
        type: 'input',
        name: 'installation',
        message:'Input Installation details' ,
    },
    {
        type: 'input',
        name: 'usage',
        message:'Input Usage details' ,
    },
    {
        type: 'input',
        name: 'contributing',
        message:'Input information for Contributing' ,
    },
    {
        type: 'input',
        name: 'tests',
        message:'Input information for Tests' ,
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data)

 }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data)=>{
        console.log(data)
       fs.writeFileSync('README.md', generateMarkdown({...data}))
    })
 }

// Function call to initialize app
init();
