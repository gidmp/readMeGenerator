const inquirer = require("inquirer");
const fs =  require("fs");
const api = require("./utils/api");
const path = require("path");
const markdown = require("./utils/generateMarkdown")

const questions = [{
    type: "input",
    name: "title",
    message: "What is the title of your project?"
 },
 {
    type: "input",
    message: "Describe your project",
    name: "description",
 },
 {
    type: "input",
    message: "What's your github username?",
    name: "githubUser",
 },
 {
    type: "input",
    message: "What's your email address?",
    name: "userEmail",
 },
 
 {
    type: "input",
    message: "What command line required to install your dependencies?",
    name: "dependencies",
 },
 {
    type: "input",
    message: "please elaborate the instructions and the usage of this application",
    name: "usage",
 },

 {
    type: "input",
    message: "please provide an example how to run a test for this application",
    name: "test",
 },

 {
    type: "input",
    message: "Who is the author of this project?",
    name: "author",
 },

 {
    type: "input",
    message: "Tell us how can people contribute to this project?",
    name: "contribute",
 },


 {
    type: "input",
    message: "License Name?",
    name: "license",
 },

 {
    type: "input",
    message: "In case the image did not appear please describe yourself",
    name: "userAlt",
 },


];


function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName), data)
}

function init() {
    inquirer.prompt(questions).then(response => {
        api.getUser(response.githubUser).then(({data}) => {
            writeToFile("README.md", markdown({...response, ...data}))
        })
    })  

}

init();
