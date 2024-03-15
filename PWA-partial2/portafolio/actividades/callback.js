function sumarUNo(numero, callback) {
    setTimeout(function () {
        callback(numero + 1);
    }, 800);
}

function imprimirResultado(resultado) {
    console.log(resultado);
}

sumarUNo(5, function (nuevoValor) {
    imprimirResultado(nuevoValor);
    sumarUNo(nuevoValor, function (nuevoValor2) {
        imprimirResultado(nuevoValor2);
        sumarUNo(nuevoValor2, function (nuevoValor3) {
            imprimirResultado(nuevoValor3);
        });
    });
});
