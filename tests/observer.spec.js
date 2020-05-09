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
    });
    it('Should unsubscribe of observer', () => {
        const result = {value: ''};
        const createObservable = function(e, r) {
            const Observable = {};

            Observable.event = e;
            Observable.action = (data) => r.value = data;

            return Observable;
        };
        const observer = new Observer();
        const ouvinte1 = createObservable('click', result);
        const ouvinte2 = createObservable('change', result);

        observer.subscribe(ouvinte1);
        observer.subscribe(ouvinte2);

        observer.publish('click', 'Novo observador');
        expect(result.value).to.equal('Novo observador');

        observer.unsubscribe(ouvinte2);
        observer.publish('change', 'Foi desescrito');
        expect(result.value).to.equal('Novo observador');
    });
});