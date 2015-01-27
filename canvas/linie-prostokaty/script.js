/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


(function(){
  if(!document.createElement('canvas').getContext) return;
  
  var canvas = document.querySelector("#canvas"),
	  ctx = canvas.getContext("2d");
	  
//Ustawienia stylów;

ctx.fillStyle = "#448af3";
ctx.strokeStyle = "#f344f1";
ctx.lineWidth = 30;

ctx.lineJoin = "miter"; // round, bevel
ctx.lineCap = "square";
//ctx.mitetLimit = 1;

//Rysowanie linni
ctx.beginPath();
ctx.moveTo(50,50);
ctx.lineTo(50,150);
ctx.stroke();

ctx.lineTo(150,150);
ctx.stroke();

//Rysowanie prostokątów
ctx.beginPath();
ctx.lineWidth = 10;
ctx.strokeStyle = "green";
ctx.lineJoin = "round";

ctx.rect(200,200,100,100);
ctx.fill();
ctx.stroke();

//ctx.fillRect(200,200,100,100);
//ctx.strokeRect(200,200,100,100);

ctx.clearRect(200,200,50,50);

})();