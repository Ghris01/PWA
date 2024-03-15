function sumarUNo(numero){

 
    var prom = new Promise(function(resolve,reject){
        setTimeout(function(){

            if(numero >= 7){
                reject("NUmero muy grande");
            }

            resolve(numero +1);
        })
    
    })

    return prom;
   
}


/*sumarUNo(5).then(sumarUNo) 
        console.log(nuevoValor);
    )*/

    /*
sumarUNo(5).then(sumarUNo) 
    .then(nuevoValor => {
        console.log(nuevoValor);
    })*/


/*    
sumarUNo(5).then(sumarUNo) 
    .then(nuevoValor => {
        return sumarUNo(nuevoValor + 1);
}).then(nuevoValor => {
    
    return sumarUNo(nuevoValor + 1);
}).then(nuevoValor => {
    console.log(nuevoValor);
    return nuevoValor;
})
*/



sumarUNo(5)
    .then(sumarUNo)
    .then(sumarUNo)
    .then(nuevoValor => {
        console.log(nuevoValor);
    }).catch(err => {

        console.log(err);

    } )
