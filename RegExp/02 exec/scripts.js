/**
 * exec
 * zwraca tablicę, kolejne grupy regexpów, a jako ostatni element całą znalezioną wartość
 * gdy w regexp zwraca /g - ilość globalną następne wyszukiwanie będzie się zaczynać po ostatnim znalezionym znaku poprzedniego wyszukiwania,
 * w przypadku gdy w regexpie nie będzie /g za każdym razem będzie się zaczynać od znaku 0
 * gdy nie będzie nic znalezione przez wyszukiwanie zamiast tablicy zostanie zwrócony null
 * @type {Element}
 */

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