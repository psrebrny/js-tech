/**
 *  zwraca tablicę, kolejne grupy regexpów, a jako ostatni element całą znalezioną wartość
 *  w przypadku gdy regexp nie zawiera /g
 *  gdy regexp zawiera /g zwraca tablicę znalezionych wartości w podanym ciągu znaków
 * @type {Element}
 */


var p = document.querySelector("p");

// var regex = new RegExp("\\w+@\\W+\\.\\w{2,4}", "g");

var regex = /\w+@(\w+\.\w{2,4})/g;

var search = p.textContent.match(regex);
// var search = regex.exec(p.textContent);

console.log(search);