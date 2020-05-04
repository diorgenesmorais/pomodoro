"use strict";
var App = App || {};
App.Contador = (function() {
    function Contador(relogio, observer) {
        this.INITIAL = 25;
        this._minutes = this.INITIAL;
        this._pause = true;
        this._relogio = relogio;
        this._observer = observer;
    }
    Contador.prototype = {
        getStartValue: function() {
            return this.INITIAL;
        },
        getMinutes: function() {
            return this._minutes;
        },
        setMinutes: function(value) {
            if (this._minutes === 0) {
                value = this.INITIAL;
                stop.call(this);
            }
            this._minutes += value;
        },
        isPaused: function() {
            return this._pause;
        },
        getMinuteFormatted: function() {
            return this.getMinutes() < 10 ? "0" + this.getMinutes() : this.getMinutes();
        },
        activity: function() {
            this.isPaused() ? start.call(this) : stop.call(this);
        }
    }
    function exibir() {
        this.setMinutes(-1);
        this._observer.publish('circle', {value: this.getMinutes(), max: this.getStartValue()})
        this._relogio.textContent = this.getMinuteFormatted();
    }
    function setPause(status) {
        this._pause = status;
        this._observer.publish('command', {status: getStatusText.call(this)});
    }
    function start() {
        setPause.call(this, false);
        this.intervalID = setInterval(exibir.bind(this), 1000);
    }
    function stop() {
        setPause.call(this, true);
        if (this.intervalID) {
            clearInterval(this.intervalID);
        }
    }
    function getStatusText() {
        return this.isPaused() ? 'js-iniciar' : 'js-pausar';
    }
    return Contador;
}());

(function(factory) {
    if (typeof module === 'object' && module.exports) {
        module.exports = factory;
    }
})(App);
