/**
 * test
 * zwraca true w przypadku gdy regex został znaleziony w podanym ciągu znaków
 * false gdy nie został znaleziony w podanym ciągu znaków
 *
 * filter
 * iteruje po tablicy i dodaje element do przypisanej gdy zwrócone zostanie true
 * @type {string[]}
 */


var files = [
    "picture-thumb-150x150.jpg",
    "beach-thumb-150x150.jpg",
    "monako-thumb-150x150.jpg",
    "sportcar-thumb-300x300.jpg",
    "brazil-big-2000x1300.jpg"
];

var regex = /150x150/;

var thumbs = files.filter(function (file) {

    return regex.test(file);

});

console.log(thumbs)