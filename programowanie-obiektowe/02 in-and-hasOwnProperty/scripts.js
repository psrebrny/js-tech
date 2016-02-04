

var Person = function(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
};

Person.prototype.sayHello = function(){
    return this.firstName + " " + this.lastName;
};

var person = {
    firstName: "Jan",
    lastName: "Kowalski",
    age: 0
};

if('age' in person){
    //console.log(person.age);
}

if("forEach" in NodeList.prototype){

}

var person2 = new Person("Anna", "Nowak", 22);

for(var key in person2){
    if(person2.hasOwnProperty(key)){
        console.log(key);
    }

}