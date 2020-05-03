const expect = require('chai').expect;
const Command = require('../src/command').Command;

describe('Test o module command', () => {
    it('Should set attribute class', () => {
        const target = new (function() {
            function Target() {

            }
            Target.prototype = {
                setAttribute: (clazz, status) => {
                    this.value = status;
                },
                getValue: () => this.value
            }
            return Target;
        }());
        const subject = {
            registerObserver: (observer) => console.log(observer)
        }
        const command = new Command(target, subject);
        command.status('js-iniciar');
        expect(target.getValue()).to.equal('js-iniciar');
    });
});