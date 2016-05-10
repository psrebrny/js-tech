function AJAX(config){

    if(!(this instanceof AJAX)){
        return new AJAX(config)
    }

    this._xhr = new XMLHttpRequest();
    this._config = this._extendOptions(config);
    this._assignEvents();
    this._open();
    this._assignUserHeaders();
    this._send();


}

AJAX.prototype._defaultConfig = {

    type: "GET",
    url: window.location.href,
    data: {},
    options:{
        async: true,
        timeout: 0,
        username: null,
        password: null
    },
    headers: {}

};

AJAX.prototype._extendOptions = function(config){

    /**
     * create copy and not edit this._defaultConfig thanks stringify
     */
    var defaultConfig = JSON.parse(JSON.stringify(this._defaultConfig));

    defaultConfig = this._each(defaultConfig, config);

    // for(var key in defaultConfig){
    //     if(key in config){
    //         if(typeof config[key] != 'object'){
    //             defaultConfig[key] = config[key]
    //         }else{
    //             for(var innerKey in defaultConfig[key]){
    //                 if(innerKey in config[key]){
    //                     defaultConfig[key][innerKey] = config[key][innerKey]
    //                 }
    //             }
    //         }
    //
    //     }
    // }
    return defaultConfig;

};

AJAX.prototype._each = function(obj, extendedObj){


    for(var key in obj) {
        if (key in extendedObj) {
            if (typeof extendedObj[key] != 'object') {
                obj[key] = extendedObj[key]
            } else {
                // for (var innerKey in obj[key]) {
                    this._each(obj[key], extendedObj[key]);
                    //     if(innerKey in extendedObj[key]){
                    //         obj[key][innerKey] = extendedObj[key][innerKey]
                    //     }
                // }
            }

        }
    }

    return obj



};

AJAX.prototype._assignEvents = function(){


    this._xhr.addEventListener("readystatechange", this._handlerResponse.bind(this), false);
    this._xhr.addEventListener("abort", this._handlerError.bind(this), false);
    this._xhr.addEventListener("error", this._handlerError.bind(this), false);
    this._xhr.addEventListener("timeout", this._handlerError.bind(this), false);

};

AJAX.prototype._handlerResponse = function (e) {


    if(this._xhr.readyState == 4 && this._xhr.status == 200){
        console.log("Otrzymano odpowiedź")
    }


};

AJAX.prototype._handlerError = function (e) {

        console.log("Otrzymano odpowiedź")

};

AJAX.prototype._assignUserHeaders = function(){

    if(Object.keys(this._config.headers).length){

        for(var key in this._config.headers){
            this._xhr.setRequestHeader(key, this._config.headers[key])
        }

    }

};

AJAX.prototype._open = function(){

    this._xhr.open(
        this._config.type,
        this._config.url,
        this._config.options.async,
        this._config.options.username,
        this._config.options.password
    );

    this._xhr.timeout = this._config.options.timeout;

};

AJAX.prototype._send = function(){

    this._xhr.send();

};


var a = AJAX({
    type: "POST",
    url: "odbierz.php",
    data: {
        firstName: "Janusz",
        lastName: "Nowak"
    },
    options: {
        // async : true,
        // testObj: {
        //     sth : 'sth fsdafasd fasddafs',
        // }
    },

    headers: {
        "X-My-header": "123$Sdf"
    },
    success: function(response, xhr){
        console.log("Success", response, xhr)
    },
    failure: function(response, xhr){
        console.log("Failure", response, xhr)
    }
});