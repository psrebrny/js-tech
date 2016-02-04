//var person = {
//    _firstName: "Jan",
//    _lastName: "Kowalski",
//    _age: 32,
//    getName: function(){
//        return this._firstName + ' ' + this._lastName
//    },
//    getAge: function(){
//        return this._age
//    },
//    setName: function(firstName, lastName){
//        this._firstName = firstName || this._firstName;
//        this._lastName = lastName || this._lastName;
//    },
//    setAge: function(age){
//        this._age = (age > 0) ? age : this.age;
//    }
//}


var person = (function(){

    var _firstName = "Jan",
        _lastName = "Kowalski",
        _age = 32;

    return {

        getName: function(){
            return _firstName + ' ' + _lastName
        },
        getAge: function(){
            return _age
        },
        setName: function(firstName, lastName){
            _firstName = firstName || _firstName;
            _lastName = lastName || _lastName;
        },
        setAge: function(age){
            _age = (age > 0) ? age : _age;
        }
    }

})();


//Jeśli chcemy ukryć zmienne to metody muszą być przypisane do obiektu,
//jedyny sposób aby skutecznie utworzyć metodę przez prototype to użycie przypisanie zmiennych do obiektu tak aby były widoczne na zewnątrz, porzedzając je _podkreślnikiem informujey innych programistów że nie powinny być wywoływane z zewnątrz
function Person(firstName, lastName){
    var _firstName = firstName,
        _lastName = lastName;


    this.getName = function(){
        return _firstName + _lastName;
    }
}


var person2 = new Person("Anna", "Nowak")
