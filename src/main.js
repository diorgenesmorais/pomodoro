"use strict";
(($, App) => {
    const relogio = $('#tempo');
    const command = $('#command');
    const circle = $('.circle');
    const observable = App.createObserver();

    const circleControl = new App.Circle(circle);
    observable.subscribe(circleControl);

    const buttonControl = new App.Command(command);
    observable.subscribe(buttonControl);

    const subject = new App.Contador(relogio, observable);

    command.addEventListener('click', () => subject.activity());
})(document.querySelector.bind(document), App || {});
