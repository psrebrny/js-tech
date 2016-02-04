var firstName = "Jan";

(function(){

    var firstName = "Anna";

    function sayHello(){
        console.log(firstName);
    }

    window.hello = sayHello()

})();


function fireXTimes(fn, x){

    var counter = 0;

    return function(){

        if(++counter > x){
            throw new Error("Przekroczono limit maksymalnych wywołań: " + x)
        }else{
            fn();
        }

    }

}

var fire3Times = fireXTimes(function(){
    console.log("Hej!")
},3);

fire3Times();