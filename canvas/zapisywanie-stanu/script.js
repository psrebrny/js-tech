/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


(function(){
  if(!document.createElement('canvas').getContext) return;
  
  var canvas = document.querySelector("#canvas"),
	  ctx = canvas.getContext("2d");
	  
	  function radians(degrees){
		return degrees * Math.PI / 180;
	  };
	  
//Ustawienia stylów;

ctx.fillStyle = "#448af3";
ctx.strokeStyle = "#f344f1";
ctx.lineWidth = 5;

ctx.fillRect(50,50,100,100);

ctx.save();
ctx.fillStyle = 'red';
ctx.fillRect(100,100,100,100);
ctx.restore();
ctx.fillRect(150,150,100,100);

})();