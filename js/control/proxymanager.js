class ProxyManager {
    static get instance() {
        if (!ProxyManager._instance) {
            ProxyManager._instance = new ProxyManager;
        }
        return ProxyManager._instance;
    }
    getWeather() {
        new ApiRequest 
    };
}