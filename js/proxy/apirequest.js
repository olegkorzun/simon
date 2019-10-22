class ApiRequest {
    constructor(method, url, successFunc, errorFunc) {
        this.successFunc = successFunc;
        this.errorFunc = errorFunc;
        this.request = new XMLHttpRequest();
        request.open(method,url);
        request.send(null);
        this.request.onreadystatechange = () => this.onGetdata();
    }
    onGetdata() {
        if (this.request.readyState != 4) {
            return;
        }
        if () {
            this.successFunc();
        } else {
            this.error
        }
    }

}