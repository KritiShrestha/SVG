//Importing inquirer to ask the question to user
const inquirer = require('inquirer');
//fs to write the file
const fs = require('fs');
// Importing generateMarkdown.js file
const generateSVG = require('./lib/generateContent');

//An array of questions to ask the user
const questions = [
    {
        type: 'input',
        message: "Please enter the characters to build the logo.",
        name: 'character'
    },

    {
        type: 'input',
        message: "Please enter the color keyword or a hexadecimal number to add color to text.",
        name: 'textcolor'
    },

    {
        type: 'list',
        message: "Please choose from the following option to choose the shape",
        choices: ["Circle", "Triangle", "Square"],
        name: 'shape'
    },

    {
        type: 'input',
        message: "Please enter the color keyword or a hexadecimal number to add color to shape.",
        name: 'shapecolor'
    }
]

//  Creating a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        const svgContent = generateSVG(data)
        //writes the svg to logo.svg file
        fs.writeFile('logo.svg', svgContent, (err) => {
            err ? console.log(err) : console.log("Successfully generated SVG file")
        });
    });

}

// Function call to initialize app
init();
