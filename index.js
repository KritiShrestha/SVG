//Importing inquirer to ask the question to user
const inquirer = require ('inquirer');
//fs to write the file
const fs = require('fs');
inquirer.prompt ([
    {
    type: 'input',
    message: "Please enter the characters to build the text.",
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
    choices: ["Circle", "Triangle", "square"],
    name: 'shape'
    },

    {type: 'input',
    message: "Please enter the color keyword or a hexadecimal number to add color to shape.",
    name: 'shapecolor'
}

])
//after user has answered the question, the name property of data object is assigned to a variable
.then((data)=>{
//const filename = data.character
//writing a file with two params i.e filename and content
fs.writeFile('logo.svg', 'logo',(err)=>{
err ? console.log(err) : console.log("Successfully generated SVG file")
});
});