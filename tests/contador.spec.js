const expect = require('chai').expect;
const Contador = require('../src/contador').Contador;

describe('Teste para o contador', () => {
    const relogio = {textContent: ''};
    const observer = {publish: (event, data) => console.log(event, data)}
    let contador = {};
    beforeEach(() => {
        contador = new Contador(relogio, observer);
    })

    it('Should exists', () => {
        expect(contador).to.exist;
    });
    it('Should get 25 minutes', () => {
        expect(contador.getMinutes()).to.equals(25);
    });
    it('Should started', () => {
        contador.activity();
        setTimeout(() => {
            expect(relogio.textContent).to.equals(24);
            contador.activity();
        }, 1000);
    });
});