//ciclo de vida de SW

self.addEventListener('install', event => {
    console.log('instalando sw');


    const instalacion = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('se instalado finalizado');
            self.skipWaiting();
            resolve();
        },1000)
    });
    event.waitUntil(instalacion);

    
})


self.addEventListener('active',event => {
    console.log('Se activado');
})