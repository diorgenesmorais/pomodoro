"use strict";
(($, App) => {
    const relogio = $('#tempo');
    const command = $('#command');
    const circle = $('.circle');
    
    const contar = new App.Contador(relogio);
    const buttonControl = new App.Command(command, contar);
    const circleControl = new App.Circle(circle, contar);

    command.addEventListener('click', () => contar.activity());
})(document.querySelector.bind(document), App || {});
