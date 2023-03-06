//Array de tipo de tarjetas para checkbox
let opciones = [];

for (const element of data.events) {
  if (opciones.indexOf(element.category) === -1) {
    opciones.push(element.category);
  }
}

// variables para Generador de checkbox
const contenedorCheckbox = document.querySelector("#nav-container-checkbox");
let checkboxGenerados = crearCheckbox(opciones);
contenedorCheckbox.innerHTML = checkboxGenerados;
//Variables para generar tarjetas
const contenedorTarjetas = document.querySelector("#Home");
let tarjetasGeneradas = crearTarjetas(data.events);
contenedorTarjetas.innerHTML = tarjetasGeneradas;

//Generador de checkbox
function crearCheckbox(arrayDatos) {
  let checkbox = "";

  for (let i = 0; i < arrayDatos.length; i++) {
    checkbox += `<div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" value="" id="${opciones[i]}">
        <label class="form-check-label" for="${opciones[i]}">
          ${opciones[i]}
        </label>
      </div>`;
  }

  return checkbox;
}
//Generador de tarjetas
function crearTarjetas(arrayDatos) {
    let tarjetas = "";
    for (const event of arrayDatos) {
      tarjetas += `<div class="card m-3">
      <div class="card-img-top">
          <img src="${event.image}" width="100%" alt="100%">
      </div>
      <div class="card-header ">
          <h5 class="card-title">Name: ${event.name}</h5>
      </div>
      <div class="card-body">
          <p class="card-text">Description: ${event.description}</p>
  
      </div>
      <div class="card-footer d-flex justify-content-between">
          <p class="card-text">Price:${event.price}</p>
          <input type="button" onclick="seeDetail('${event._id}')" value="See more" class="btn btn-primary">


      </div>
  </div>`;
    }
    return tarjetas;
  
// Mostrar todas las tarjetas al cargar la página
filtrarEventos();
}


// Filtrar los eventos según la categoría seleccionada
function filtrarEventos() {
  // Obtener los checkboxes
  var checkboxes = document.querySelectorAll(
    "#nav-container-checkbox input[type=checkbox]"
  );

  // Crear un array con las categorías seleccionadas
  var categoriasSeleccionadas = [];
  checkboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      categoriasSeleccionadas.push(checkbox.id);
    }
  });
  // Mostrar las tarjetas según las categorías seleccionadas
  var tarjetasFiltradas = "";
  data.events.forEach(function (evento) {
    if (categoriasSeleccionadas.indexOf(evento.category) !== -1) {
      tarjetasFiltradas += `<div class="card m-3">
      <div class="card-img-top">
          <img src="${evento.image}" width="100%" alt="100%">
      </div>
      <div class="card-header">
          <h5 class="card-title">Name: ${evento.name}</h5>
      </div>
      <div class="card-body">
          <p class="card-text">Description: ${evento.description}</p>
      </div>
      <div class="card-footer d-flex justify-content-between">
          <p class="card-text">Price:${evento.price}</p>
          <input type="button" onclick="seeDetail('${evento._id}')" value="See more" class="btn btn-primary">

      </div>
    </div>`;
    }
  });

  // Actualizar el contenido del contenedor de tarjetas
  contenedorTarjetas.innerHTML = tarjetasFiltradas;
}

// Agregar un escuchador de eventos a cada checkbox
var checkboxes = document.querySelectorAll(
  "#nav-container-checkbox input[type=checkbox]"
);
checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener("change", function () {
    filtrarEventos();
  });
});


document.getElementById("search-button").addEventListener("click", () => {
  // Obtener el valor del input de búsqueda
  let searchTerm = document.getElementById("search-input").value.toUpperCase();
  
  // Filtrar las tarjetas que contienen el término de búsqueda en el nombre o descripción
  let filteredCards = data.events.filter(evento =>
    evento.name.toUpperCase().includes(searchTerm) ||
    evento.description.toUpperCase().includes(searchTerm)
  );
  
  // Generar el contenido HTML de las tarjetas filtradas
  let tarjetasFiltradas = "";
  filteredCards.forEach(evento => {
    tarjetasFiltradas += `<div class="card m-3">
      <div class="card-img-top">
          <img src="${evento.image}" width="100%" alt="100%">
      </div>
      <div class="card-header">
          <h5 class="card-title">Name: ${evento.name}</h5>
      </div>
      <div class="card-body">
          <p class="card-text">Description: ${evento.description}</p>
      </div>
      <div class="card-footer d-flex justify-content-between">
          <p class="card-text">Price:${evento.price}</p>
          <input type="button" onclick="seeDetail('${evento._id}')" value="See more" class="btn btn-primary">

      </div>
    </div>`;
  });
  
  // Actualizar el contenido del contenedor de tarjetas
  const contenedorTarjetas = document.querySelector("#Home");
  contenedorTarjetas.innerHTML = tarjetasFiltradas;
});


document.getElementById("search-button").addEventListener("click", () => {
    // Obtener el valor del input de búsqueda
    let searchTerm = document.getElementById("search-input").value.toUpperCase();
    
    // Filtrar las tarjetas que contienen el término de búsqueda en el nombre o descripción
    let filteredCards = data.events.filter(evento =>
      evento.name.toUpperCase().includes(searchTerm) ||
      evento.description.toUpperCase().includes(searchTerm)
    );
    
    // Generar el contenido HTML de las tarjetas filtradas
    let tarjetasFiltradasSearch = "";
    filteredCards.forEach(evento => {
      tarjetasFiltradasSearch += `<div class="card m-3">
        <div class="card-img-top">
            <img src="${evento.image}" width="100%" alt="100%">
        </div>
        <div class="card-header">
            <h5 class="card-title">Name: ${evento.name}</h5>
        </div>
        <div class="card-body">
            <p class="card-text">Description: ${evento.description}</p>
        </div>
        <div class="card-footer d-flex justify-content-between">
            <p class="card-text">Price:${evento.price}</p>
            <input type="button" onclick="seeDetail('${evento._id}')" value="See more" class="btn btn-primary">

        </div>
      </div>`;
    });
    
    // Actualizar el contenido del contenedor de tarjetas
    const contenedorTarjetasSearch = document.querySelector("#Home");
    contenedorTarjetasSearch.innerHTML = tarjetasFiltradasSearch;
  });
  
function seeDetail(id){
    window.location.href = `./details.html?id=${id}`;
    }

    container.innerHTML = html
