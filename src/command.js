"use strict";
var App = App || {};
App.Command = (function() {
    function Command(target) {
        this._target = target;
    }
    Command.prototype = {
        event: 'command',
        action: function(data) {
            this._target.setAttribute("class", data.status);
        }
    }
    return Command;
}());

(function(factory) {
    if (typeof module === 'object' && module.exports) {
        module.exports = factory;
    }
})(App);
