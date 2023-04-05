//Parent class i.e shape 
class Shapes {
    constructor(color) {
        this.color = color;
    }

    setColor(color) {
        this.color = color;
    }
}
//Triangle inheriting the parent class with their own constructor
class Triangle extends Shapes {
    constructor(color, base, height) {
        super(color);
        this.base = base;
        this.height = height;
    }
//creating set methods 
    setBase(base){
        this.base = base;
    }

    setHeight(height){
        this.height = height;
    }

    render() {
        return `<polygon points="150,${this.height} ${this.base},182 56,182" style="fill:${this.color}"/>`
    }
}

//Square inheriting the parent class with their own constructor
class Square extends Shapes {
    constructor(color, length) {
        super(color);
        this.length = length;
    }
//creating set methods 
    setLength(length){
        this.length = length;
    }

    render() {
        return `<rect x="90" y="40" width="${this.length}" height="${this.length}" style="fill:${this.color}" />`
    }
}
////Circle inheriting the parent class with their own constructor
class Circle extends Shapes {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
//creating set methods 
    setRadius(radius){
        this.radius = radius
    }

    render() {
        return `<circle cx="150" cy="100" r="${this.radius}" fill="${this.color}" />`
    }
}

//Exporting the classes
module.exports = { Triangle, Square, Circle }

