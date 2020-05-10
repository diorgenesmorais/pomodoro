"use strict";
var App = App || {};

(function(factory) {
    if (typeof module === 'object' && module.exports) {
        factory.Observer = require('./Observer').Observer;
        module.exports = factory;
    }
})(App);

App.createObserver = function() {
    return new App.Observer();
}
