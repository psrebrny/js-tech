/**
 *  zwraca number, liczba od której zaczyna się wyrażenie znalezione w ciągu znaków
 */


var files = [
    "picture-thumb-150x150.jpg",
    "beach-thumb-150x150.jpg",
    "monako-thumb-150x150.jpg",
    "sportcar-thumb-300x300.jpg",
    "brazil-big-2000x1300.jpg"
];

var regex = /-thumb-\d{1,4}x\d{1,4}/;
//
// files.forEach(function (file, i) {
//
//     var index = file.search(regex);
//     if(index > -1){
//         files[i] = file.substring(0, index);
//
//     }
//
// });

function stringContains(string, pattern) {

    var regexp = new RegExp(pattern),
        index = string.search(regexp)
        console.log(index)
    return index > -1;

}
console.log(files, stringContains(files[0], regex))