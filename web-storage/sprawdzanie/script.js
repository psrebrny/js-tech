/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function(){
  var supportOutput = document.querySelector('#supportOutput');
  
  if(typeof Storage !== undefined){
	supportOutput.innerHTML = "Twoja przeglądarka wspiera WebSotorage";
	supportOutput.classList.add("alert-success");
	window.onstorage = function (e){
	  console.log(e);
	}
//	window.localStorage.setItem("imie","Ania");
	window.localStorage.imie = "Maciej";
//	window.localStorage["imie"] = "Tomasz";
//	console.log(window.localStorage);
	window.sessionStorage.setItem('wiek',20);
	console.log(window.localStorage)
  }else{
	supportOutput.innerHTML = "Twoja przeglądarka nie wspiera WebStorage";
	supportOutput.classList.add("alert-danger");
  }
})();
