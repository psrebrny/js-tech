var xhr = new XMLHttpRequest();

/**
 * UNSET = 0
 * OPENED = 1
 * HEADERS_RECEIVED = 2
 * LOADING = 3
 * DONE = 4
 */

xhr.open('GET', 'o-nas.html', true);

xhr.onreadystatechange = function(e){


    if(this.readyState == 4 && this.status == 200){

    }

};

function logType(e) {
    console.log(e.type)
}
xhr.onloadstart = logType;
xhr.onprogress = logType;
xhr.onabort = logType;
xhr.onerror = logType;
xhr.onload = logType;
xhr.ontimeout = logType;
xhr.onloadend = logType;


xhr.send(null);