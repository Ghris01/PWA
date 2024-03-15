if(navigator.serviceWorker){
    navigator.serviceWorker.register('sw.js')
}

var url = 'https://jsonplaceholder.typicode.com/posts';

function getOption(opcion) {
  switch (opcion) {
    case 'uno':
      console.log('1.- List of all pending task (solo IDs)');
      obtenerPendientesConId(url)
        .then(pendientes => {
          var html = "<table border='1'>" +
            "<thead>" +
            "<tr>" +
            "<th>ID</th>" +
            "</tr>" +
            "</thead>" +
            "<tbody>";

          pendientes.forEach(function (item) {
            html += "<tr><td>" + item.id + "</td></tr>";
          });

          html += "</tbody></table>";

          var tableContainer = document.getElementById('tableContainer');
          tableContainer.innerHTML = "";
          tableContainer.innerHTML = html;
        })
        .catch(error => console.error('Error:', error));
      break;

    case 'dos':
      console.log('2.- List of pending task (IDs and titles)');
      obtenerPendientesConIdTitle(url)
        .then(pendientes => {
            var html = "<table border='1'>" +
            "<thead>" +
            "<tr>" +
            "<th>ID</th>" +
            "<th>TITLE</th>" +
            "</tr>" +
            "</thead>" +
            "<tbody>";

          pendientes.forEach(function (item) {
            html += "<tr><td>" + item.id + "</td><td>" + item.title + "</td></tr>";
          });

          html += "</tbody></table>";

          var tableContainer = document.getElementById('tableContainer');
          tableContainer.innerHTML = "";
          tableContainer.innerHTML = html;
        })
        .catch(error => console.error('Error:', error));
      break;

    case 'tres':
      console.log('3.- List of all unresolved pending task (ID and Title)');
      obtenerPendientesSinResueltos(url)
        .then(pendientes => {
            var html = "<table border='1'>" +
            "<thead>" +
            "<tr>" +
            "<th>ID</th>" +
            "<th>TITLE</th>" +
            "</tr>" +
            "</thead>" +
            "<tbody>";

          pendientes.forEach(function (item) {
            html += "<tr><td>" + item.id + "</td><td>" + item.title + "</td></tr>";
          });

          html += "</tbody></table>";

          var tableContainer = document.getElementById('tableContainer');
          tableContainer.innerHTML = "";
          tableContainer.innerHTML = html;
        })
        .catch(error => console.error('Error:', error));
      break;

    case 'cuatro':
      console.log('4.- List of all resolved pending task (ID and Title)');
      obtenerPendientesResueltos(url)
        .then(pendientes => {
            var html = "<table border='1'>" +
            "<thead>" +
            "<tr>" +
            "<th>ID</th>" +
            "<th>TITLE</th>" +
            "</tr>" +
            "</thead>" +
            "<tbody>";

          pendientes.forEach(function (item) {
            html += "<tr><td>" + item.id + "</td><td>" + item.title + "</td></tr>";
          });

          html += "</tbody></table>";

          var tableContainer = document.getElementById('tableContainer');
          tableContainer.innerHTML = "";
          tableContainer.innerHTML = html;
        })
        .catch(error => console.error('Error:', error));
      break;

    case 'cinco':
      console.log('5.- List of all pending task with ID and UserID');
      obtenerPendientesConIdIDuser(url)
        .then(pendientes => {
            var html = "<table border='1'>" +
            "<thead>" +
            "<tr>" +
            "<th>ID</th>" +
            "<th>IDuser</th>" +
            "</tr>" +
            "</thead>" +
            "<tbody>";

          pendientes.forEach(function (item) {
            html += "<tr><td>" + item.id + "</td><td>" + item.userId+ "</td></tr>";
          });

          html += "</tbody></table>";

          var tableContainer = document.getElementById('tableContainer');
          tableContainer.innerHTML = "";
          tableContainer.innerHTML = html;
        })
        .catch(error => console.error('Error:', error));
      break;

    case 'seis':
      console.log('6.- List of all resolved task with ID and UserID');
      obtenerPendientesResueltosIDuserID(url)
        .then(pendientes => {
            var html = "<table border='1'>" +
            "<thead>" +
            "<tr>" +
            "<th>ID</th>" +
            "<th>IDuser</th>" +
            "</tr>" +
            "</thead>" +
            "<tbody>";

          pendientes.forEach(function (item) {
            html += "<tr><td>" + item.id + "</td><td>" + item.userId+ "</td></tr>";
          });

          html += "</tbody></table>";

          var tableContainer = document.getElementById('tableContainer');
          tableContainer.innerHTML = "";
          tableContainer.innerHTML = html;
        })
        .catch(error => console.error('Error:', error));
      break;

    case 'siete':
      console.log('7.- List of all unresolved task with ID and UserID');
      obtenerPendientesResueltoiISInDuserID(url)
        .then(pendientes => {
            var html = "<table border='1'>" +
            "<thead>" +
            "<tr>" +
            "<th>ID</th>" +
            "<th>IDuser</th>" +
            "</tr>" +
            "</thead>" +
            "<tbody>";

          pendientes.forEach(function (item) {
            html += "<tr><td>" + item.id + "</td><td>" + item.userId+ "</td></tr>";
          });

          html += "</tbody></table>";

          var tableContainer = document.getElementById('tableContainer');
          tableContainer.innerHTML = "";
          tableContainer.innerHTML = html;
        })
        .catch(error => console.error('Error:', error));
      break;

    default:
      console.log('Invalid option. Try again');
      break;
  }
}

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
      .map(element => ({ id: element.id, title: element.title }));

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
      .filter(element => !element.completed)
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
      .filter(element => element.completed)
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
      .map(element => ({ id: element.id, userId: element.userId }));

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
      .filter(element => element.completed)
      .map(({ id, userId }) => ({ id, userId }));

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
      .filter(element => !element.completed)
      .map(({ id, userId }) => ({ id, userId }));

    return pendientes;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
