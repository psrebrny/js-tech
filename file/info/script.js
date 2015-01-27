/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function(){
  if(!window.FileReader) return;

  var fileInput = document.querySelector("#fileInput");

  fileInput.onchange = function(){
    var file = this.files[0];

    document.querySelector("#fileName").innerHTML = "Nazwa: " + file.name;
    document.querySelector("#fileSize").innerHTML = "Rozmiar: " + file.size;
    document.querySelector("#fileType").innerHTML = "Typ: " + file.type;
    document.querySelector("#fileLastModifiedData").innerHTML = "Ostatnio zmodyfikowany: " + file.lastModifiedDate.toLocaleDateString();
  }

})();