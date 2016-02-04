/*

bind wywołany na funkcji jako pierwszy parametr "this" jako kolejne parametry to parametry funkcji, zwraca nową funkcję z przekazanymi parametrami

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

var hello = sayHello.bind(person, "Witaj");

function bind(fn, obj){

    var args = Array.prototype.slice.call(arguments, 2);

    return function (){
        fn.apply(obj, args);
    }

}

var hello2 = bind(sayHello, person, "Witaj");