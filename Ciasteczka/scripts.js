function setCookie(name, value, days, path, domain, secure){

    if(!navigator.cookieEnabled) return;

    var e = encodeURIComponent;

    var cookie = e(name) + '=' + e(value);

    if(typeof days == 'number'){
        var date = new Date();

        date.setTime(date.getTime() + days * 1000 * 60 * 60 * 24);

        cookie += "; expires=" + date.toGMTString();
    }

    if(path){
        cookie += '; ' + path;
    }

    if(domain){
        cookie += '; ' + domain;
    }

    if(secure){
        cookie += '; ' + secure;
    }


    document.cookie = cookie;

}