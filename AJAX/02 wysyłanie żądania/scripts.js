var person = {
    firstName: "Jan",
    lastName: "Kowalski",
    hobbies: ['sport', "technologie"],
    birthDay: new Date(2016, 3, 22),
    married: false,
    salary: 2000,
    sayHello: function (){
        return this.firstName + this.lastName
    }
};


var personJSON = JSON.stringify(person, null, 4);

console.log(personJSON);

var personAgain = JSON.parse(personJSON)

console.log(personAgain);