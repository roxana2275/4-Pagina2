let urlApi="https://mindhub-xj03.onrender.com/api/amazing";


fetch(urlApi)
  .then((response) => response.json())
  .then((data) => {
    // console.log()
    //Array de tipo de tarjetas para checkbox
    //const actualDate = data.currentDate;
    let opciones = [];

    // generar categorias de checkbox
    for (const element of data.events) {
      if (opciones.indexOf(element.category) === -1) {
        opciones.push(element.category);
      }
    }

    // variables para Generador de checkbox
    const contenedorCheckbox = document.querySelector(
      "#nav-container-checkbox"
    );
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
        checkbox += `<div class="form-check-inline form-switch fs-4">
        <input class="form-check-input" type="checkbox" value="" id="${opciones[i]}">
        <label class="form-check-label" for="${opciones[i]}">
          ${opciones[i]}
        </label>
      </div>`;
      }
      return checkbox;
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

          tarjetasFiltradas += `<div class="card">
      <div class="card-img-top">
          <img  class="img-fluid" src="${evento.image}" id="img-card" alt="${evento.description}>
      </div>
      <div class="card-header">
          <h5 class="card-title fw-bold">Name: ${evento.name}</h5>
      </div>
      <div class="card-body">
          <p class="card-text">Description: ${evento.description}</p>
      </div>
      <div class="card-footer d-flex justify-content-between">
          <p class="card-text">Price:${evento.price}</p>
          <input type="button" onclick="seeDetail('${evento._id}')" value="See more" class="btn btn-primary">

      </div>
    </div>`;
        } else if (categoriasSeleccionadas.length == 0) {
          location.reload();
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
      let searchTerm = document
        .getElementById("search-input")
        .value.toUpperCase();

      // Filtrar las tarjetas que contienen el término de búsqueda en el nombre o descripción
      let filteredCards = data.events.filter(
        (evento) =>
          evento.name.toUpperCase().includes(searchTerm) ||
          evento.description.toUpperCase().includes(searchTerm)
      );

      // Generar el contenido HTML de las tarjetas filtradas
      let tarjetasFiltradas = "";
      filteredCards.forEach((evento) => {
        tarjetasFiltradas += `<div class="card">
      <div class="card-img-top">
          <img class="img-fluid" src="${evento.image}" id="img-card" alt="${evento.description}>
      </div>
      <div class="card-header">
          <h5 class="card-title fw-bold">Name: ${evento.name}</h5>
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
      let searchTerm = document
        .getElementById("search-input")
        .value.toUpperCase();

      // Filtrar las tarjetas que contienen el término de búsqueda en el nombre o descripción
      let filteredCards = data.events.filter(
        (evento) =>
          evento.name.toUpperCase().includes(searchTerm) ||
          evento.description.toUpperCase().includes(searchTerm)
      );

      // Generar el contenido HTML de las tarjetas filtradas
      let tarjetasFiltradasSearch = "";
      filteredCards.forEach((evento) => {
        tarjetasFiltradasSearch += `<div class="card">
        <div class="card-img-top">
            <img class="img-fluid" src="${evento.image}" id="img-card" alt="${evento.description} >
        </div>
        <div class="card-header">
            <h5 class="card-title fw-bold">Name: ${evento.name}</h5>
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


  })
  .catch((error) => console.error(error));
  function seeDetail(id) {
    window.location.href = `./details.html?id=${id}`;
  }


  //Generador de todas las tarjetas tarjetas
  function crearTarjetas(arrayDatos) {
    let tarjetas = "";
    for (const event of arrayDatos) {
      tarjetas += `<div class="card p-1">
    <div class="card-img-top">
        <img class="img-fluid" src="${event.image}" id="img-card" alt="${event.description}>
    </div>
    <div class="card-header ">
        <h5 class="card-title fw-bold">Name: ${event.name}</h5>
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

  window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("boton-arriba").style.display = "block";
  } else {
    document.getElementById("boton-arriba").style.display = "none";
  }
}

document.getElementById("boton-arriba").addEventListener("click", function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
