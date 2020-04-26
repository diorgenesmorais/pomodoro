"use strict"
const Contador = (function() {
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
        return this.getMinuteFormatted();
    }
    Contador.prototype.start = function() {
        const _this = this;
        this.setPause(false);
        this.intervalID = setInterval(function() {
            _this._relogio.textContent = _this.decrease();
        }, 1000);
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
    return Contador;
}());

(($) => {
    const relogio = $('#tempo');
    const command = $('#command');
    const contar = new Contador(relogio);
    command.addEventListener('click', () => contar.activity());
})(document.querySelector.bind(document));
