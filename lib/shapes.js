//Parent class i.e shape 
class Shapes {
    constructor(color) {
        this.color = color;
    }
}
//Different shapes inheriting the parent class with their own constructor
class Triangle extends Shapes {
    constructor(color, height) {
        super(color);
        this.height = height;
    }
    render() {
        return '<polygon points="200,10 250,190 160,210" style="fill: ${this.color};"/>'
    }
}

class Square extends Shapes {
    constructor(length) {
        super(color);
        this.length = length;
    }
    render() {
        return ' <rect x="50" y="20" width="150" height="150" style="fill: ${this.color};" />'
    }


}

class Circle extends Shapes {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }

    render() {
        return '<circle cx="50" cy="50" r="40" fill="${this.color}" />'
    }
}
//Exporting the classes
module.exports = { Triangle, Square, Circle }

