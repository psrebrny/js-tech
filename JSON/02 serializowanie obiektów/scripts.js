var props = ["firstName", "lastName"];

var person = {
    firstName: "Jan",
    lastName: "Kowalski",
    hobbies: ['sport', "technologie"],
    birthDay: new Date(2016, 2, 22),
    married: false,
    salary: 2000,
    sayHello: function (){
        return this.firstName + this.lastName
    },
    zipCodePattern: /^\d{2}-\d{3}$/
};

RegExp.prototype.toJSON =function () {
    return this.source
};

var personJson = JSON.stringify(person, function(k, v){


    return v;
});

console.log(personJson);

var personAgain = JSON.parse(personJson, function (k, v) {

    if(k == 'birthDay'){
        return new Date(Date.parse(v))
    }

    if(k == 'zipCodePattern'){
        return new RegExp(v)
    }

    return v
});

console.log(personAgain);