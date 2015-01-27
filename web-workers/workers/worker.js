/**
 * Created by Paweł on 2015-01-02.
 */
importScripts("info.js");
self.addEventListener("message", function(e){

    setTimeout(function(){
        self.postMessage("Odsyłam: " + e.data + " Wiadamość " + info);
    },1000);


},false);