const expect = require('chai').expect;
const Subject = require('../src/Subject').Subject;

describe('Tests Subject', () => {

    it('Should exists', () => {
        const subject = new Subject();
        expect(subject).to.exist;
    });
    it('Should contains', () => {
        const subject = new Subject();
        const observer = {update: (subject) => console.log(subject.getStatusText())};
        subject.register(observer);
        expect(subject._observers).to.contains(observer)
    });
});