/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


(function(){
  if(!document.createElement('canvas').getContext) return;
  
  var canvas = document.querySelector("#canvas"),
	  ctx = canvas.getContext("2d");
	  
	  var centerX = canvas.width /2,
		  centerY = canvas.height/2;
	  
//Ustawienia stylów;

ctx.fillStyle = "#448af3";
ctx.strokeStyle = "#f344f1";
ctx.lineWidth = 2;

ctx.font = "italic 72px Arial";
ctx.textAlign = "center"; // start, end, center, left, right
ctx.textBaseline = "middle"; //alphabetic, top, hanging, middle,ideographic, bottom
ctx.fillText("Test", centerX, centerY);
ctx.strokeText("Test", centerX, centerY);

})();