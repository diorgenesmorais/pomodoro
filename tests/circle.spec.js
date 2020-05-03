const expect = require('chai').expect;
const Circle = require('../src/circle').Circle;

describe('Test o module circle', () => {
    let target = {};
    let subject = {};
    beforeEach(() => {
        target = new (function() {
            function Circle() {

            }
            Circle.prototype = {
                setAttribute: (clazz, value) => {
                    this._value = value;
                },
                getValue: () => this._value
            }
            return Circle;
        }());
        subject = {
            registerObserver: (observer) => console.log(observer)
        }
    });

    it('Should give an update', () => {
        const circle = new Circle(target, subject);
        circle.update(24, 25);
        expect(target.getValue()).to.equal('animation-delay:-4.8s');
    });
});