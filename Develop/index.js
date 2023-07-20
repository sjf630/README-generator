const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
  {
    type: 'input',
    name: 'Title',
    message: 'What is your project title?',
  },
  {
    type: 'input',
    name: 'Description',
    message: 'Please write a short description of your project:',
  },
  {
    type: 'input',
    name: 'Installation',
    message: 'What are the installation instructions for your project?',
  },
  {
    type: 'list',
    name: 'License',
    message: 'What license does your project have?',
    choices: ['Apache 2.0', 'Unilicense', 'MIT', 'IBM Public License']
  },
  {
    type: 'input',
    name: 'Tests',
    message: 'Please provide any test instructions:',
  },
  {
    type: 'input',
    name: 'GitHub',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'Email',
    message: 'What is your email address?',
  },
];

const init = async () => {
  try {
    const answers = await inquirer.prompt(questions);
    const markdown = generateMarkdown(answers);

    await fs.promises.writeFile('Generated-README.md', markdown);
    console.log('README file has been successfully generated!');
  } catch (error) {
    console.error('Error occurred:', error);
  }
}

init();

