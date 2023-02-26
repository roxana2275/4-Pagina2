//CARDS DE TARJETAS PASADAS

const actualDate = data.currentDate;

const contenedorTarjetasPast = document.querySelector("#Past");

let tarjetasGeneradasPast=crearTarjetasPast(data.events);

contenedorTarjetasPast.innerHTML = tarjetasGeneradasPast;

function crearTarjetasPast(arrayDatosPast) {
  let tarjetasPast = "";
  for (const eventPast of arrayDatosPast) {
    if(eventPast.date<actualDate){
        tarjetasPast += `<div class="card m-3">
        <div class="card-img-top">
            <img src="${eventPast.image}" width="100%" alt="100%">
        </div>
        <div class="card-header ">
            <h5 class="card-title">Name: ${eventPast.name}</h5>
        </div>
        <div class="card-body">
            <p class="card-text">Description: ${eventPast.description}</p>
    
        </div>
        <div class="card-footer d-flex justify-content-between">
            <p class="card-text">Price:${eventPast.price}</p>
            <a href="./details.html" class="btn btn-primary">See more</a>
        </div>
    </div>`
    }
    
  }
  return tarjetasPast;
}