/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function(){

  if(!"dragable" in document.createElement("span")) return;

  var mario = document.querySelector("#mario"),
      dropArea = document.querySelector("#dropArea"),
      status = document.querySelector("#status"),
      counter = 1;

  function setStatus(msg){
    status.innerHTML = msg;
  }

  //Zdarzenia

  mario.ondragstart = function(e){
    setStatus("Rozpoczęto przeciąganie!");
    e.dataTransfer.effectAllowed = "copy";
    e.dataTransfer.setData("text/html", this.outerHTML);
    e.dataTransfer.setData("text/plain", "Cześć jestem Mario!");
    e.dataTransfer.setData("text/custom", "A ty?");
  };

  mario.ondragend = function(e){
    if(e.dataTransfer.dropEffect == "copy"){
      mario.parentNode.removeChild(mario);
      setStatus("Przenoszenie zakończone sukcesem");
    }
  };

  mario.ondrag = function(e){
    //setStatus(counter++);
  };

  dropArea.ondragenter = function(e){
    setStatus("Obiekt w obszarze zrzutu");
  };

  dropArea.ondragleave = function(e){
    setStatus("Obiekt opuścił obszar zrzutu");
  };

  dropArea.ondragover = function(e){
    //setStatus(counter++);
    e.preventDefault()

    return false;
  };

  dropArea.ondrop = function(e){
    e.preventDefault();

    if(e.dataTransfer.effectAllowed != "copy") return;

    setStatus("Element upuszczony poprawnie!");
    //var data = e.dataTransfer.getData("text/plain") +" "+ e.dataTransfer.getData("text/custom");
    //setStatus(data);
    var data = e.dataTransfer.getData("text/html");

    dropArea.innerHTML = data;
  }

})();