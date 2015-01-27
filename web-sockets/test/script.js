/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function(){

if(!window.WebSocket) return;

  var socket = new WebSocket("ws://echo.websocket.org"),
      info = document.querySelector("#info");

  socket.onopen = function(e){
    info.innerHTML = "Połączenie z serwerem nawiązane";

    socket.send("Witam");

    console.log(socket);
  }

  socket.onmessage = function(e){
    info.innerHTML = "Wiadomość z serwera: " + e.data;
    socket.close();
  }

  socket.onclose = function(e){
    info.innerHTML = "Połączenie z serwerem zakończone.";
  }

})();