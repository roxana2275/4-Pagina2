
// array de tipos de categories
let categories = [];
for(const element of data.events){
  if(categories.indexOf(element.category) === -1) {
    categories.push(element.category);
  }
}


//cards TODAS


console.log(categories);

const contenedorTarjetas = document.querySelector("#Home");

let tarjetasGeneradas=crearTarjetas(data.events);

contenedorTarjetas.innerHTML = tarjetasGeneradas;

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
        <a href="./details.html" class="btn btn-primary">See more</a>
    </div>
</div>`
  }
  return tarjetas;
}

