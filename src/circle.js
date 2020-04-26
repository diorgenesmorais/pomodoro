"use strict";
var App = App || {};
App.Circle = (function() {
    function Circle(circle, max) {
        this._circle = circle;
        this._max = max;
    }
    Circle.prototype.animationCircle = function(value) {
        let percent = (value / this._max) * 5;
        if (percent < 5) {
            this._circle.setAttribute("style", "animation-delay:-" + percent + "s");
        } else {
            this._circle.setAttribute("style", "animation-delay:5s");
        }
    }
    Circle.prototype.update = function(value) {
        this.animationCircle(value);
    }
    return Circle;
}());

(function(factory) {
    if (typeof module === 'object' && module.exports) {
        module.exports = factory;
    }
})(App);
