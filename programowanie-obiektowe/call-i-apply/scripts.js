/*

call wywołany na funkcji jako pierwszy parametr "this" jako kolejne parametry to parametry funkcji
apply robi to samo z wyjątkiem że drugim parametrem jest tablica której elementy są parametrami wywołanej funkcji
obydwie metody wywołuja odrazu przekazanu funkcje
 */

//function sayHello(){
//    console.log("Cześć");
//}

function sayHello(text){
    console.log(text + " " + this.firstName + " " + this.lastName)
}

var person = {
    firstName: "Jan",
    lastName: "Kowalski",
    say: sayHello
};

sayHello.call(person, "Witaj");

var elems = document.querySelectorAll("#list li");

//Array.prototype.forEach.call(elems, function(elem){
//    console.log(elem);
//});

[].forEach.call(elems, function(elem){
    console.log(elem);
});

function sum(first, second, third){
    console.log(first + second + third);
}

sum.apply(this, [2,3,4]);

