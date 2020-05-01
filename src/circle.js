"use strict";
var App = App || {};
App.Circle = (function() {
    function Circle(circle, command) {
        this._circle = circle;
        this._command = command;
    }
    Circle.prototype.animationCircle = function(value, max) {
        let percent = (value / max) * 5;
        if (percent < 5) {
            this._circle.setAttribute("style", "animation-delay:-" + percent + "s");
        } else {
            this._circle.setAttribute("style", "animation-delay:5s");
        }
    }
    Circle.prototype.update = function(value, max) {
        this.animationCircle(value, max);
    }
    Circle.prototype.status = function(status) {
        this._command.setAttribute("class", status);
    }
    return Circle;
}());

(function(factory) {
    if (typeof module === 'object' && module.exports) {
        module.exports = factory;
    }
})(App);
