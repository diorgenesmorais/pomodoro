"use strict";
var App = App || {};
App.Subject = (function() {
    function Subject() {
        this._observers = [];
    }
    Subject.prototype = {
        register: function(observable) {
            this._observers.push(observable);
        },
        remover: function(observable) {
            this._observers.splice(this._observers.indexOf(observable), 1);
        },
    }
    return Subject;
}());

(function(factory) {
    if (typeof module === 'object' && module.exports) {
        module.exports = factory;
    }
})(App);
