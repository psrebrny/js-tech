var xhr = new XMLHttpRequest(),
    data = new FormData(),
    dProgress = document.querySelector("#download"),
    uProgress = document.querySelector("#upload");

/**
 * UNSET = 0
 * OPENED = 1
 * HEADERS_RECEIVED = 2
 * LOADING = 3
 * DONE = 4
 */

xhr.open('POST', 'send.php', true);

xhr.onreadystatechange = function(e){


    if(this.readyState == 4 && this.status == 200){
        console.log(this.response);
    }

};

xhr.onprogress = function(e){

    var percent;
    if(e.lengthComputable){
        percent = (e.loaded / e.total) *100;
        dProgress.value = percent;
    };

};

xhr.upload.onprogress = function(e){

    var percent;
    if(e.lengthComputable){
        percent = (e.loaded / e.total) *100;
        uProgress.value = percent;
    };

};

data.append("name", "Jan");
data.append("lastName", "Kowalski");

// xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");


xhr.send(data);