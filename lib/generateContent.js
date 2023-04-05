//Importing shapes
const { Triangle, Square, Circle } = require('./shapes');

// function to return svg content for the shape
function generateSvgContent(data) {
    var character = data.character
    var textcolor = data.textcolor
    var shape = data.shape
    var shapecolor = data.shapecolor
    var shapeoObject
    if (shape === "Triangle") {
        shapeoObject = new Triangle(shapecolor)
        shapeoObject.setBase(244);
        shapeoObject.setHeight(18)
    }

    else if (shape === "Square") {
        shapeoObject = new Square(shapecolor)
        shapeoObject.setLength(120)
    }
    else if (shape === "Circle") {
        shapeoObject = new Circle();
        shapeoObject.setColor(shapecolor);
        shapeoObject.setRadius(80);
    }

    var contentsOfLogo = logoContent(character, textcolor, shapeoObject)

    return contentsOfLogo;
}

//function that is going to return the contents for svg file
function logoContent(text, textcolor, shapeObject) {
    return `<svg xmlns="http://www.w3.org/2000/svg" height ="200" width ="300">
    ${shapeObject.render()}
    <text x="150" y="110" fill="${textcolor}" font-size = "40" text-anchor="middle">${text}</text>
    </svg>`
}

//Exporting a generateSVG file to index.js
module.exports = generateSvgContent;