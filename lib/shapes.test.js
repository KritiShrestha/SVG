//Child classes are imported
const { Triangle, Square, Circle} = require("./shapes")
//A testing suite for shapes is created for a expected outcome
describe('shape', () => {
    describe ('triangle', () => {
      it ('should render an svg string with given color', () => {
        const triangle = new Triangle(); 
        triangle.setColor("blue");
        triangle.setBase(250);
        triangle.setHeight(10);
        expect(triangle.render()).toEqual(`<polygon points="150,10 250,182 56,182" style="fill:blue"/>`);
       });
    });
    ////Negative test created to check for undefined outcome
    describe ('triangle', () => {
        it ('triangle should render an svg string with undefined values', () => {
          const triangle = new Triangle(); 
          triangle.setColor("red");
          expect(triangle.render()).toEqual(`<polygon points="150,undefined undefined,182 56,182" style="fill:red"/>`);
         });
      });
      //A testing suite for shapes is created for a expected outcome
      describe ('square', () => {
        it ('should render an svg string with given color', () => {
          const square = new Square(); 
          square.setColor("blue");
          square.setLength(150)
          expect(square.render()).toEqual(`<rect x="90" y="40" width="150" height="150" style="fill:blue" />`);
         });
      });
      //Negative test created to check for undefined outcome
      describe ('square', () => {
        it ('should render an svg string with undefined color and length', () => {
          const square = new Square(); 
          expect(square.render()).toEqual(`<rect x="90" y="40" width="undefined" height="undefined" style="fill:undefined" />`);
         });
      });
      //A testing suite for shapes is created for a expected outcome
      describe ('circle', () => {
        it ('should render an svg string with given color', () => {
          const circle = new Circle(); 
          circle.setColor("red");
          circle.setRadius(40);
          expect(circle.render()).toEqual(`<circle cx="150" cy="100" r="40" fill="red" />`);
         });
      });
      //Negative test created to check for undefined outcome
      describe ('circle', () => {
        it ('should render an svg string with undefined color', () => {
          const circle = new Circle(); 
          circle.setRadius(50);
          expect(circle.render()).toEqual(`<circle cx="150" cy="100" r="50" fill="undefined" />`);
         });
      });
   }); 

