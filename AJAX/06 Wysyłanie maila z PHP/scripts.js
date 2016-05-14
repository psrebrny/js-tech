function AJAX(config){

    if(!(this instanceof AJAX)){
        return new AJAX(config)
    }

    this._xhr = new XMLHttpRequest();
    this._config = this._extendOptions(config);
    this._assignEvents();
    this._beforeSend();


}

AJAX.prototype._defaultConfig = {

    type: "GET",
    url: window.location.href,
    data: {},
    options:{
        async: true,
        timeout: 0,
        username: null,
        password: null,
    },
    headers: {},
    success: null,
    failure: null

};

AJAX.prototype._extendOptions = function(config){

    /**
     * create copy and not edit this._defaultConfig thanks stringify
     */
    var defaultConfig = JSON.parse(JSON.stringify(this._defaultConfig));

    defaultConfig = this._each(defaultConfig, config);

    return defaultConfig;

};

AJAX.prototype._each = function(obj, extendedObj){


    for(var key in obj) {
        if (key in extendedObj) {
            if (typeof extendedObj[key] != 'object' || Object.keys(obj[key]).length <= 0) {
                obj[key] = extendedObj[key]
            } else {
                this._each(obj[key], extendedObj[key]);
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


    if(this._xhr.readyState == 4 && this._xhr.status >= 200 && this._xhr.status < 400){

        if(typeof this._config.success == "function"){
            this._config.success(this._xhr.response, this._xhr)

        }

    }else if(this._xhr.readyState == 4 && this._xhr.status >= 400){

        this._handlerError(this._xhr);

    }


};

AJAX.prototype._handlerError = function (e) {

    if(typeof this._config.failure == "function"){
        this._config.failure(this._xhr)

    }

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

    this._xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest")
    this._xhr.timeout = this._config.options.timeout;

};

AJAX.prototype._beforeSend = function(){

    var isData = Object.keys(this._config.data).length > 0,
        data = null;


    if(this._config.type.toUpperCase() == 'POST' && isData){
        data = this._serializeFormData(this._config.data);
    }else if(this._config.type.toUpperCase() == 'GET' && isData){
        this._config.url += this._serializeData(this._config.data);
    }

    this._open();
    this._assignUserHeaders();
    this._send(data)

};

AJAX.prototype._send = function(data){

    this._xhr.send(data);

};

AJAX.prototype._serializeFormData = function(data){

    var serialized = new FormData();

    for (var key in data){
        serialized.append(key, data[key]);
    }
    return serialized;

};

AJAX.prototype._serializeData = function(data){

    var serialized = "?";

    for(var key in data){
        serialized += key + '=' + encodeURIComponent(data[key]) + "&";
    }

    return serialized.slice(0, serialized.length -1);

};


(function(){

    var form = document.querySelector("#form"),
        message = document.querySelector("#message");

    function showMessage(type, msg) {
        message.className = type;
        message.innerHTML = msg;

    }
    
    function sendEmail(e) {
        e.preventDefault();

        var fiels = form.querySelectorAll("input, textarea"),
            data = [];

        [].forEach.call(fiels, function (field) {

            data[field.name] = field.value;

        });

        AJAX({
            type: form.getAttribute("method"),
            url: form.getAttribute("action"),
            data: data,
            success: function (response, xhr) {

                var res = JSON.parse(response);
                console.log(res);
                if("error" in res){
                    showMessage("error", res.error);
                }else if(Array.isArray(res)){
                    showMessage("error", res.join("<br>"))
                }else if("success" in res){
                    showMessage("success", res.success);
                    form.removeEventListener("submit", sendEmail, false);
                    form.querySelector("button").setAttribute("disabled", "disabled");
                }


            },
            failure: function(xhr){

            }
        })

    }

    form.addEventListener("submit", sendEmail, false);

})();