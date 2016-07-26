var p = document.querySelector("p");

// var regex = new RegExp("\\w+@\\W+\\.\\w{2,4}", "g");

var regex = /\w+@(\w+\.\w{2,4})/g;

// var search = regex.exec(p.textContent);
var search,
    domains = [];
while (search = regex.exec(p.textContent)){
    domains.push(search[1]);
}
console.log(domains);