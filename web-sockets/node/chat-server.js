/**
 * Created by Paweł on 2015-01-09.
 */
var ws = require("nodejs-websocket");

var server = ws.createServer(function(conn){

    //console.log("Nowy klient został podłączony");
    conn.on("text",function(data){

        var dataObject = JSON.parse(data);

        if(dataObject.type == "join"){
            conn.nickname = dataObject.name;

            sendToAll({
                type:"status",
                message: conn.nickname + " dołączył/a do czatu"
            })
        }else if(dataObject.type == "message"){
            sendToAll({
                type: "message",
                name: conn.nickname,
                message: dataObject.message
            });
        }

    });

    conn.on("close",function(){

        if(conn.nickname){
            sendToAll({
               type: "status",
                message: conn.nickname + " opuścił/a czat."
            });
        }
    });

    conn.on("error",function(e){
        console.log("Nieoczekiwanie przerwano połączenia");
    });

}).listen(8000, "localhost", function(){
    console.log("Serwer aktywny!");
});

function sendToAll(data){

    var msg = JSON.stringify(data);

    server.connections.forEach(function(conn){
        conn.sendText(msg);
    });

}