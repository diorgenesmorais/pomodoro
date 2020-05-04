"use strict";
(($, App) => {
    const relogio = $('#tempo');
    const command = $('#command');
    const circle = $('.circle');
    const circleControl = new App.Circle(circle);
    const buttonControl = new App.Command(command);
    const observable = new App.Observer();
    observable.subscribe(circleControl);
    observable.subscribe(buttonControl);
    const subject = new App.Contador(relogio, observable);

    command.addEventListener('click', () => subject.activity());
})(document.querySelector.bind(document), App || {});
