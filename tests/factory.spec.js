const expect = require('chai').expect;
const createObserver = require('../src/factory.main').createObserver;

describe('Test Factory', () => {
    it('Should exists', () => {
        expect(createObserver()).to.exist;
    });
    it('Should event publish', () => {
        const result = {value: ''};
        const observable = function(event, r) {
            return {
                event,
                action: (data) => r.value = data,
            }
        };
        const observer = createObserver();
        observer.subscribe(observable('click', result));
        observer.publish('click', 'Tudo será publicado');
        expect(result.value).to.equal('Tudo será publicado');

        observer.subscribe(observable('change', result));
        observer.publish('change', 'Mudei porque quis');
        expect(result.value).to.equal('Mudei porque quis');
    });
});