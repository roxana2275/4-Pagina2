//CARDS DE TARJETAS ACTUALES O FUTURAS
const actualDate = data.currentDate;

const contenedorTarjetasUpcoming = document.querySelector("#Upcoming");

let tarjetasGeneradasUpcoming=crearTarjetasUpcoming(data.events);

contenedorTarjetasUpcoming.innerHTML = tarjetasGeneradasUpcoming;

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
            <a href="./details.html" class="btn btn-primary">See more</a>
        </div>
    </div>`
    }
    
  }
  return tarjetasUpcoming;
}
