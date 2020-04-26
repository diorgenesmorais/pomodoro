const expect = require('chai').expect;
const app = require('../src/contador');

describe('Teste para o contador', () => {
    it('Should exists', () => {
        const contador = new app.Contador();
        expect(contador).to.exist;
    })
})