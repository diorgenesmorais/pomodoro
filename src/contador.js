"use strict";
var App = App || {};
App.Contador = (function() {
    function Contador(relogio) {
        this.START = 25;
        this._minutes = this.START;
        this._pause = true;
        this._relogio = relogio;
    }
    Contador.prototype.getMinutes = function() {
        return this._minutes;
    }
    Contador.prototype.setMinutes = function(value) {
        if (this._minutes === 0) {
            value = this.START;
            this.stop();
        }
        this._minutes += value;
    }
    Contador.prototype.isPaused = function() {
        return this._pause;
    }
    Contador.prototype.setPause = function(status) {
        this._pause = status;
    }
    Contador.prototype.getMinuteFormatted = function() {
        return this.getMinutes() < 10 ? "0" + this.getMinutes() : this.getMinutes();
    }
    Contador.prototype.decrease = function() {
        this.setMinutes(-1);
        if (this._observer) {
            this._observer.update(this.getMinutes(), this.START);
        }
        return this.getMinuteFormatted();
    }
    function exibir() {
        this._relogio.textContent = this.decrease();
    }
    Contador.prototype.start = function() {
        this.setPause(false);
        this.intervalID = setInterval(exibir.bind(this), 1000);
    }
    Contador.prototype.stop = function() {
        this.setPause(true);
        if (this.intervalID) {
            clearInterval(this.intervalID);
        }
    }
    Contador.prototype.activity = function() {
        this.isPaused() ? this.start() : this.stop();
    }
    Contador.prototype.bind = function(observer) {
        this._observer = observer;
    }
    return Contador;
}());

(function(factory) {
    if (typeof module === 'object' && module.exports) {
        module.exports = factory;
    }
})(App);
