var input = document.querySelector("#input"),
    output = document.querySelector("#output");

var regexp = /[aąeęioóuy]/ig;

input.oninput = function (e) {

    output.value = input.value.replace(regexp, "");

};