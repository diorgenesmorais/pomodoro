"use strict";
var App = App || {};
App.Command = (function() {
    function Command(target, subject) {
        this._target = target;
        subject.registerObserver(this);
    }
    Command.prototype.status = function(status) {
        this._target.setAttribute("class", status);
    }
    return Command;
}());

(function(factory) {
    if (typeof module === 'object' && module.exports) {
        module.exports = factory;
    }
})(App);
