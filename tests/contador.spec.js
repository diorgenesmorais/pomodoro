const expect = require('chai').expect;
const app = require('../src/contador');

describe('Teste para o contador', () => {
    const relogio = {textContent: ''};
    let contador 
    beforeEach(() => {
        contador = new app.Contador(relogio);
    });
    it('Should exists', () => {
        expect(contador).to.exist;
    });
    it('Should get 25 minutes', () => {
        expect(contador.getMinutes()).to.equals(25);
    });
    it('Should started', () => {
        contador.activity();
        expect(relogio.textContent).to.equals(25);
    });
});