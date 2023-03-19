let urlParams = new URLSearchParams(document.location.search);
// Obtener el ID del evento de la URL
let eventId = urlParams.get("id");

console.log(eventId);

fetch("https://mindhub-xj03.onrender.com/api/amazing")
  .then((response) => response.json())
  .then((data) => {
    const profile = data.events.filter((info) => info._id == eventId);

    if (profile.length > 0) {
      const event = profile[0];
      const contenedorEvento = document.getElementById("details");
      let html = `
        <div class="p-5 d-flex flex-column align-items-center bg-light">
          <div class="card m-4" >
            <div class="row g-0">
              <div class="col-md-4">
                <img src=${event.image} class="img-fluid rounded-start"  alt="${event.description}">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Nombre: ${event.name}</h5>
                  <p class="card-text">Date: ${event.date}</p>
                  <p class="card-text">Descripcion: ${event.description}</p>
                  <p class="card-text">Category: ${event.category}</p>
                  <p class="card-text">Place: ${event.place}</p>
                  <p class="card-text">Capacity: ${event.capacity}</p>`;
      if (event.assistance !== undefined) {
        html += `
                  <p class="card-text">Assistance: ${event.assistance}</p>`;
      }
      html += `
                  <p class="card-text">Price: ${event.price}</p>
                </div>
              </div>
            </div>
          </div>
        </div><br>`;
      contenedorEvento.innerHTML = html;
    } else {
      console.error(`No event found with ID ${eventId}`);
    }
  })
  .catch((error) => console.error(error));  