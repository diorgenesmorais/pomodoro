"use strict";
var App = App || {};
App.Circle = (function() {
    function Circle(circle, subject) {
        this._circle = circle;
        subject.registerObserver(this);
    }
    function animationCircle(value, max) {
        let percent = (value / max) * 5;
        if (percent < 5) {
            this._circle.setAttribute("style", "animation-delay:-" + percent.toFixed(1) + "s");
        } else {
            this._circle.setAttribute("style", "animation-delay:5s");
        }
    }
    Circle.prototype = {
        update: function(value, max) {
            animationCircle.call(this, value, max);
        }
    }
    return Circle;
}());

(function(factory) {
    if (typeof module === 'object' && module.exports) {
        module.exports = factory;
    }
})(App);
