var xhr = new XMLHttpRequest(),
    data = new FormData();

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

data.append("name", "Jan");
data.append("lastName", "Kowalski");

// xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");


xhr.send(data);