"use strict";
(($, App) => {
    const relogio = $('#tempo');
    const command = $('#command');
    const circle = $('.circle');
    const circleControl = new App.Circle(circle, command);
    const contar = new App.Contador(relogio);
    contar.bind(circleControl);
    command.addEventListener('click', () => contar.activity());
})(document.querySelector.bind(document), App || {});
