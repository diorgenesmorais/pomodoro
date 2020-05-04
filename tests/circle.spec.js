const expect = require('chai').expect;
const Circle = require('../src/circle').Circle;

describe('Test o module circle', () => {
    let target = {};
    let subject = {};
    let data = {};
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
        data = {
            value: 24,
            max: 25
        }
        subject = {
            registerObserver: (observer) => console.log(observer)
        }
    });

    it('Should get an action', () => {
        const circle = new Circle(target);
        circle.action(data);
        expect(target.getValue()).to.equal('animation-delay:-4.8s');
    });
    it('Should get the value 4.6 for display', () => {
        const circle = new Circle(target, subject);
        data.value = 23;
        circle.action(data);
        expect(target.getValue()).to.equal('animation-delay:-4.6s');
    });
});