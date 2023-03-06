//CARDS DE TARJETAS ACTUALES O FUTURAS
let opciones = [];

for (const element of data.events) {
  if (opciones.indexOf(element.category) === -1) {
    opciones.push(element.category);
  }
}

console.log(opciones);
const contenedorCheckbox = document.querySelector("#nav-container-checkbox");
let checkboxGenerados = crearCheckbox(opciones);
contenedorCheckbox.innerHTML = checkboxGenerados;

console.log(opciones);

const actualDate = data.currentDate;

const contenedorTarjetasUpcoming = document.querySelector("#Upcoming");

let tarjetasGeneradasUpcoming=crearTarjetasUpcoming(data.events);

contenedorTarjetasUpcoming.innerHTML = tarjetasGeneradasUpcoming;

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

function crearTarjetasUpcoming(arrayDatosUpcoming) {
  let tarjetasUpcoming = "";
  for (const eventUpcoming of arrayDatosUpcoming) {
    if(eventUpcoming.date>actualDate){
        tarjetasUpcoming += `<div class="card m-3">
        <div class="card-img-top">
            <img src="${eventUpcoming.image}" width="100%" alt="100%">
        </div>
        <div class="card-header ">
            <h5 class="card-title">Name: ${eventUpcoming.name}</h5>
        </div>
        <div class="card-body">
            <p class="card-text">Description: ${eventUpcoming.description}</p>
    
        </div>
        <div class="card-footer d-flex justify-content-between">
            <p class="card-text">Price:${eventUpcoming.price}</p>
            <input type="button" onclick="seeDetail('${eventUpcoming._id}')" value="See more" class="btn btn-primary">
        </div>
    </div>`
    }
  }
  return tarjetasUpcoming;
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
        <div class="card-header ">
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
    contenedorTarjetasUpcoming.innerHTML = tarjetasFiltradas;
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
    const contenedorTarjetasSearch = document.querySelector("#Upcoming");
    contenedorTarjetasSearch.innerHTML = tarjetasFiltradasSearch;
  });

  function seeDetail(id){
    window.location.href = `./details.html?id=${id}`;
    }

    container.innerHTML = html
  
  
  
