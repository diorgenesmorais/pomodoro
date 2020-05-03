const expect = require('chai').expect;
const Subject = require('../src/Subject').Subject;
const Contador = require('../src/contador').Contador;

describe('Tests Subject', () => {

    it('Should exists', () => {
        const subject = new Subject({});
        expect(subject).to.exist;
    });
    it('Should notify', () => {
        const time = {textContent: (text) => console.log(text)};
        const contador = new Contador(time);
        const subject = new Subject(contador);
        const observer = {update: (subject) => console.log(subject.getStatusText())};
        subject.register(observer);
        subject.notify();
    });
});