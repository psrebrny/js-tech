function sayHello(){
    return this.firstName + " " + this.lastName;
};

function Shape(sideLength){

    if(!(this instanceof Shape)){
        return new Shape(sideLength);
    }

    this.sideLength = sideLength;
}

var firstName = "Jan",
    lastName = "Kowalski";

var person = {
    firstName: "Jan",
    lastName: "Kowalski",
    sayHello: sayHello
};
var person2 = {
    firstName: "Katarzyna",
    lastName: "Nowak",
    sayHello: sayHello
};
console.log(sayHello())

var Shape = Shape([20,20,20,20]);