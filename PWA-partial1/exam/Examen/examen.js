

const fetch = require('node-fetch');

var url = 'https://jsonplaceholder.typicode.com/posts';



const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function showMenu() {
  console.log('---------MENU OPTIONS---------');
  console.log('1.- List of all pending task (solo IDs)');
  console.log('2.- List of pending task (IDs and titles)');
  console.log('3.- List of all unresolved pending task (ID and Title)');
  console.log('4.- List of all pending task result (IDs and userID)');
  console.log('5.- List of all resolved pending task (ID and userID)');
  console.log('6.- LIst of all unresolved pending task (ID and userID)');
  console.log('7.- Exit')


}



function getOption(opcion) {
  switch (opcion) {
    case '1':
      console.log('1.- List of all pending task (solo IDs)');

        obtenerPendientesConId(url)
      .then(pendientes => {
        console.log('ID -> ', pendientes);

      })
      .catch(error => console.error('Error:', error));

    break;

    case '2':
        console.log('2.- List of pending task (IDs and titles)');

        obtenerPendientesConIdTitle(url)
      .then(pendientes => {
        console.log('-> ', pendientes);

      })
      .catch(error => console.error('Error:', error));
  

    break;

    case '3':
        
     console.log('3.- List of all unresolved pending task (ID and Title)');
      
     obtenerPendientesSinResueltos(url)
    .then(pendientes => {
      console.log('-> ', pendientes);

    })
    .catch(error => console.error('Error:', error));

    break;
        
    case '4':
        obtenerPendientesResueltos(url)
        .then(pendientes => {
          console.log('-> ', pendientes);
    
        })
        .catch(error => console.error('Error:', error));
    break;

    case '5':
        obtenerPendientesConIdIDuser(url)
        .then(pendientes => {
          console.log('-> ', pendientes);
    
        })
        .catch(error => console.error('Error:', error));
    break;

    case '6':
        obtenerPendientesResueltosIDuserID(url).then(pendientes => {
            console.log('-> ', pendientes);
      
          })
          .catch(error => console.error('Error:', error));
    break;

    case '7':
        obtenerPendientesResueltoiISInDuserID(url).then(pendientes => {
          console.log('-> ', pendientes);
    
        })
        .catch(error => console.error('Error:', error));
    break;
    
    case '8':
        console.log('Closing...');
        rl.close();
    break;

    default:
      console.log('Invalid option. Try again');
      break;
  }
}

function askOption() {
  rl.question('Select any opction: ', (opcion) => {
    getOption(opcion);
    showMenu();
    askOption();
  });
}

// Iniciar el programa
showMenu();
askOption();



/************************************************************************************************* */


async function obtenerPendientesConId(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      const pendientes = data
        .filter(element => !element.completed)
        .map(element => ({ id: element.id }));
  
      return pendientes;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  async function obtenerPendientesConIdTitle(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      const pendientes = data
        .filter(element => !element.completed)
        .map(element => ({ id: element.id , title: element.title }));
  
      return pendientes;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }


  async function obtenerPendientesSinResueltos(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      const pendientes = data
        .filter(element => element.completed === false)
        .map(({ id, title }) => ({ id, title }));
  
      return pendientes;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  async function obtenerPendientesResueltos(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      const pendientes = data
        .filter(element => element.completed === true)
        .map(({ id, title }) => ({ id, title }));
  
      return pendientes;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  async function obtenerPendientesConIdIDuser(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
    
        const pendientes = data
          .filter(element => !element.completed)
          .map(element => ({ id: element.id , title: element.title }));
    
        return pendientes;
      } catch (error) {
        console.error('Error:', error);
        throw error;
      }
  }


  async function obtenerPendientesResueltosIDuserID(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      const pendientes = data
        .filter(element => element.completed === true)
        .map(({ id, title }) => ({ id, title }));
  
      return pendientes;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  async function obtenerPendientesResueltoiISInDuserID(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      const pendientes = data
        .filter(element => element.completed === false)
        .map(({ id, title }) => ({ id, title }));
  
      return pendientes;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }