import fetchIntercept from 'fetch-intercept';
 
export const unregister = fetchIntercept.register({
    request: function (url, config) {
        // Modify the url or config here
        console.log("config",config,url)
        config.headers.token = '12wdjskdskfjs';
        return [url, config];
    },
 
    requestError: function (error) {
        // Called when an error occured during another 'request' interceptor call
        console.log("request error",error)
        return Promise.reject(error);
    },
 
    response: function (response) {
        // Modify the reponse object
        return response;
    },
 
    responseError: function (error) {
        // Handle an fetch error
        console.log("response error",error)
        return Promise.reject(error);
    }
});
