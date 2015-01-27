/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function(){
  if(typeof Worker == "undefinded") return;

  var worker = new Worker("worker.js");
  worker.postMessage("witaj!");
  worker.addEventListener("message", function(e){

    console.log(e.data);

  },false);



})();