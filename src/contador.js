"use strict";
var App = App || {};
App.Contador = (function() {
    function Contador(relogio) {
        App.Subject.call(this);
        this.INITIAL = 25;
        this._minutes = this.INITIAL;
        this._pause = true;
        this._relogio = relogio;
        bind();
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
        notify.call(this);
        this._relogio.textContent = this.getMinuteFormatted();
    }
    /**
     * Criar a herança de Subject
     */
    function bind() {
        for (const elem in App.Subject.prototype) {
            App.Contador.prototype[elem] = App.Subject.prototype[elem];
        }
    }
    function setPause(status) {
        this._pause = status;
        changeStatus.call(this);
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
    function changeStatus() {
        for (const obsever of this._observers) {
            if(obsever.status) {
                obsever.status(getStatusText.call(this));
            }
        }
    }
    /**
     * Notificar os observadores
     */
    function notify() {
        for (const obsever of this._observers) {
            if (obsever.update) {
                obsever.update(this.getMinutes(), this.getStartValue());
            }
        }
    }
    return Contador;
}());

(function(factory) {
    if (typeof module === 'object' && module.exports) {
        module.exports = factory;
    }
})(App);
