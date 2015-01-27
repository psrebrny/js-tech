/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function(){
  if(!window.FileReader) return;

  var fileInput = document.querySelector("#fileInput");

  fileInput.onchange = function(){

    var file = this.files[0],
        reader = new FileReader();

    reader.readAsArrayBuffer(file);

    reader.onload = function(){
      console.log(this.result);
      var blob = new Blob([this.result],{type: "image/jpeg"});

      //var blob = blob.slice(0, 19131)

      var fileURL = window.URL.createObjectURL(blob);

      var img = new Image();
      img.src = fileURL;

      document.querySelector("#playground").appendChild(img);

      //window.URL.revokeObjectURL(fileURL);
    }

  }

})();