"use strict";
(($, App) => {
    const relogio = $('#tempo');
    const command = $('#command');
    const circle = $('.circle');
    const circleControl = new App.Circle(circle);
    const observable = new App.Observer();
    observable.subscribe(circleControl);
    const subject = new App.Contador(relogio, observable);
    const buttonControl = new App.Command(command, subject);

    command.addEventListener('click', () => subject.activity());
})(document.querySelector.bind(document), App || {});
