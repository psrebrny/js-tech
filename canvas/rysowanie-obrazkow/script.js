/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


(function(){
  if(!document.createElement('canvas').getContext) return;
  
  var canvas = document.querySelector("#canvas"),
	ctx = canvas.getContext("2d"),
	giraffe = document.querySelector('#giraffe');
	
	window.onload = function (){
	//		ctx.drawImage(giraffe, 10,10);
	//ctx.drawImage(giraffe, 10,10,300,225);
	ctx.drawImage(giraffe, 200,100,100,100,10,10,100,100);
	};
	
})();