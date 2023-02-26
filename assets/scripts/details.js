//cards TODAS
const contenedorTarjetasDetails = document.querySelector("#details");

let tarjetasGeneradasDetails=crearTarjetasDetails(data.events);

contenedorTarjetasDetails.innerHTML = tarjetasGeneradasDetails;

function crearTarjetasDetails(arrayDatosDetails) {
  let tarjetasDetails = "";
  for (const eventDetails of arrayDatosDetails) {
    if(eventDetails.assistance == undefined){
        tarjetasDetails += `<div class="p-5 d-flex flex-column align-items-center bg-light">
        <div class="card m-4" style="max-width: 540px;">
            <div class="row g-0">
              <div class="col-md-4">
                <img src=${eventDetails.image} class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Nombre: ${eventDetails.name}</h5>
                  <p class="card-text">Date: ${eventDetails.date}</p>
                  <p class="card-text">Descripcion: ${eventDetails.description}</p>
                  <p class="card-text">Category: ${eventDetails.category}</p>
                  <p class="card-text">Place: ${eventDetails.place}</p>
                  <p class="card-text">Capacity: ${eventDetails.capacity}</p>
                  <p class="card-text">Estimate: ${eventDetails.estimate}</p>
                  <p class="card-text">Price: ${eventDetails.price}</p>
                </div>
              </div>
            </div>
          </div>
    </div><br>`
      } else{
        tarjetasDetails += `
        <div class="m-4 d-flex flex-column align-items-center bg-light">
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
              <div class="col-md-4">
                <img src=${eventDetails.image} class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Nombre: ${eventDetails.name}</h5>
                  <p class="card-text">Date: ${eventDetails.date}</p>
                  <p class="card-text">Descripcion: ${eventDetails.description}</p>
                  <p class="card-text">Category: ${eventDetails.category}</p>
                  <p class="card-text">Place: ${eventDetails.place}</p>
                  <p class="card-text">Capacity: ${eventDetails.capacity}</p>
                  <p class="card-text">Assistance: ${eventDetails.assistance}</p>
                  <p class="card-text">Price: ${eventDetails.price}</p>
                </div>
              </div>
            </div>
          </div>
    </div><br>`
      }
   
  }
  return tarjetasDetails;
}
