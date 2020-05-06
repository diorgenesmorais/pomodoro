const expect = require('chai').expect;
const Observer = require('../src/Observer').Observer;

describe('Test the Observer', () => {
    it('Should event publish', () => {
        const result = {value: ''};
        const observable = new (function(r) {
            function Observable() {

            }
            Observable.prototype = {
                event: 'click',
                action: (data) => r.value = data,
            }
            return Observable;
        }(result));
        const observer = new Observer();
        observer.subscribe(observable);
        observer.publish('click', 'Tudo será publicado');
        expect(result.value).to.equal('Tudo será publicado');
    })
})