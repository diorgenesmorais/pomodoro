"use strict";
(($, App) => {
    const relogio = $('#tempo');
    const command = $('#command');
    const contar = new App.Contador(relogio);
    command.addEventListener('click', () => contar.activity());
})(document.querySelector.bind(document), App || {});
