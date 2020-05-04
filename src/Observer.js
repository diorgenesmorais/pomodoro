"use strict";
var App = App = {};
App.Observer = (function(){
    function Observer() {
        this.subscribes = [];
    }

    Observer.prototype = {
        subscribe: function(subscriber) {
            this.subscribes.push(subscriber);
        },
    
        publish: function(event, data) {
            this.subscribes
                    .filter(subscriber => subscriber.event === event)
                    .forEach(subscriber => subscriber.action(data));
        }
    }
    return Observer;
}());

(function(factory) {
    if (typeof module === 'object' && module.exports) {
        module.exports = factory;
    }
})(App);
