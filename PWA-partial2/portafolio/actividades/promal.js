function sumarLento(numero){
    return new Promise(function(resolve,reject){
        setTimeout(function (){
            reject('La funcion lenta tiene fallas');
            //resolve(numero + 1);
        },800)
    })

}

function sumarRapido(numero){
    return new Promise(function(resolve,reject){
        setTimeout(function(){         
            //reject('La funcion rapida tiene fallas');
            resolve(numero + 1);

        },300);
    })
}

//sumarLento(5).then(console.log)
//sumarRapido(10).then(console.log)


Promise.all([sumarRapido(4),sumarLento(5)])
    .then(response => {
        response.forEach(prom => {
            console.log(prom);
        })
    }).catch(console.log);

