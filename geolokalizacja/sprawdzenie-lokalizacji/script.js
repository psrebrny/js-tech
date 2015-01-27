/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


(function(){
  var supportOutput = document.querySelector('#supportOutput'),
      positionOutput = document.querySelector('#positionOutput'),
      findPositionButton = document.querySelector('#findPosition');
      
  if (!navigator.geolocation){
      supportOutput.innerHTML = "Twoja przeglądarka nie wspiera geolokalizacji!";
      supportOutput.classList.add('alert-danger');
  }else{
      supportOutput.innerHTML = "Twoja przeglądarka wspiera geolokalizację!";
      supportOutput.classList.add('alert-success');
  }
  
  function geoSuccess(position){
      positionOutput.innerHTML = "Twoja pozycja to: " + position.coords.latitude + " " + position.coords.longitude;
  }
  
  function geoError(errorObj){
      var errorMessage;
      switch(errorObj.code){
          case errorObj.PERMISSION_DENIED :
              errorMessage = "Brak pozwolenia na znalezienie geolokalizacji";
              break;
              
          case errorObj.POSITION_UNAVALIABLE : 
              errorMessage = "Brak dostępu do sieci";
              break;
          
          case errorObj.TIMEOUT:
              errorMessage = "Przekroczono czas oczekiwania";
      }
      
      positionOutput.innerHTML = "<strong>Wystąpił błąd: </strong>" + errorMessage;
  }
  var options = {
//      timeout: 100
  };
  findPositionButton.onclick = function (){
      positionOutput.innerHTML = "Czekaj...";
      
      navigator.geolocation.getCurrentPosition(geoSuccess, geoError, options);
  };
  
})();