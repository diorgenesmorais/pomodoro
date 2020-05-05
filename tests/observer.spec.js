const expect = require('chai').expect;
const Observer = require('../src/Observer').Observer;

describe('Test the Observer', () => {
    it('Should event publish', () => {
        const observable = new (function() {
            function Observable() {

            }
            Observable.prototype = {
                event: 'click',
                action: (data) => this.result = data,
                // só para obter o resultado do teste.
                getResult: () => this.result
            }
            return Observable;
        }());
        const observer = new Observer();
        observer.subscribe(observable);
        observer.publish('click', 'Tudo será publicado');
        expect(observable.getResult()).to.equal('Tudo será publicado');
    })
})