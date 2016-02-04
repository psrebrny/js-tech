/*

Shape
    Rectangle
        Square
    Triangle

OMÓWIONE KONCEPCJE OOP
    klasa
    obiekt (instancja)
    właściwości
    metody
    konstruktor
    dziedziczenie
    abstrakcja
    polimorfizm

    enkapsulacja

 */

function Shape(sideLengths) {
    this._name = "";
    this._sideLengths = sideLengths;
}

Shape.prototype.getPerimeter = function() {

    return this._sideLengths.reduce(function(prevVal, val) {
        return prevVal + val;
    });

};

Shape.prototype.getArea = function() {
    return this._sideLengths[0] * this._sideLengths[1];
};

function Rectangle(sideLengths) {
    Shape.call(this, [sideLengths[0], sideLengths[1], sideLengths[0], sideLengths[1]]);

    this._name = "Prostokąt";
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

function Square(sideLength) {
    Rectangle.call(this, [sideLength, sideLength]);

    this._name = "Kwadrat";
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

function Triangle(sideLength) {
    Shape.call(this, [sideLength, sideLength, sideLength]);

    this._name = "Trójkąt";
}

Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;

Triangle.prototype.getArea = function() {
    var a = this._sideLengths[0];

    return +( (a * a * Math.sqrt(3)) / 4 ).toFixed(2);
};

var square = new Square(20);
var triangle = new Triangle(20);
var rectangle = new Rectangle([20, 10]);