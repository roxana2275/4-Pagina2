
// Obtener el ID del evento de la URL
let urlParams = new URLSearchParams(document.location.search);
let eventId = urlParams.get('id');
console.log(eventId)
//buscar dato
let profile = data.events.filter(info=>info._id == eventId);

console.log(profile)

const contenedorEvento = document.getElementById("details")
let html="";

for(let info of profile){
    if(info.assistance == undefined){
    html += `<div class="p-5 d-flex flex-column align-items-center bg-light">
        <div class="card m-4" style="max-width: 540px;">
            <div class="row g-0">
              <div class="col-md-4">
                <img src=${info.image} class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Nombre: ${info.name}</h5>
                  <p class="card-text">Date: ${info.date}</p>
                  <p class="card-text">Descripcion: ${info.description}</p>
                  <p class="card-text">Category: ${info.category}</p>
                  <p class="card-text">Place: ${info.place}</p>
                  <p class="card-text">Capacity: ${info.capacity}</p>
                  <p class="card-text">Estimate: ${info.estimate}</p>
                  <p class="card-text">Price: ${info.price}</p>
                </div>
              </div>
            </div>
          </div>
    </div><br>`
      } else{
        html += `
        <div class="m-4 d-flex flex-column align-items-center bg-light">
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
              <div class="col-md-4">
                <img src=${info.image} class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Nombre: ${info.name}</h5>
                  <p class="card-text">Date: ${info.date}</p>
                  <p class="card-text">Descripcion: ${info.description}</p>
                  <p class="card-text">Category: ${info.category}</p>
                  <p class="card-text">Place: ${info.place}</p>
                  <p class="card-text">Capacity: ${info.capacity}</p>
                  <p class="card-text">Assistance: ${info.assistance}</p>
                  <p class="card-text">Price: ${info.price}</p>
                </div>
              </div>
            </div>
          </div>
    </div><br>`}

      };

contenedorEvento.innerHTML = html;