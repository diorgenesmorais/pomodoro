"use strict";
(($, App) => {
    const relogio = $('#tempo');
    const command = $('#command');
    const circle = $('.circle');
    
    const subject = new App.Contador(relogio);
    const buttonControl = new App.Command(command, subject);
    const circleControl = new App.Circle(circle, subject);

    command.addEventListener('click', () => subject.activity());
})(document.querySelector.bind(document), App || {});
