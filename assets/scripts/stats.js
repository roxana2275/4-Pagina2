//VALOR DATE DE BASE DE DATOS
let time = data.currentDate;

var eventUpcoming = [];
var eventPast = [];

//GENERAR BASE DE EVENTOS PASADOS O FUTUROS
for (const event of data.events) {
  if (event.date >= time) {
    eventUpcoming.push(event);
  } else {
    eventPast.push(event);
  }
}

//ESTADISTICAS DE EVENTOS PASADOS
const contenedorTablaPast = document.querySelector("#staticPastEvents");

let tablaGeneradaPast = crearTablaPast(eventPast);

contenedorTablaPast.innerHTML = tablaGeneradaPast;

function crearTablaPast(arrayDatosTablaPast) {
  let tablaPast = "";
  for (const eventPast of arrayDatosTablaPast) {
    if (eventPast.assistance == undefined) {
      tablaPast += `<tr>
    <td>${eventPast.category}</td>
    <td>$${eval(eventPast.price * eventPast.estimate)}</td>
    <td>${Math.round(
      (eval(eventPast.estimate) * 100) / eval(eventPast.capacity)
    )}%</td></tr>`;
    } else if (eventPast.estimate == undefined) {
      tablaPast += `<tr>
    <td>${eventPast.category}</td>
    <td>$${eval(eventPast.price * eventPast.assistance)}</td>
    <td>${Math.round(
      (eval(eventPast.assistance) * 100) / eval(eventPast.capacity)
    )}%</td></tr>`;
    }
  }
  return tablaPast;
}
//ESTADISTICAS DE EVENTOS A FUTURO
const contenedorTablaUpcoming = document.querySelector("#staticUpcomingEvents");

let tablaGeneradaUpcoming = crearTablaUpcoming(eventUpcoming);

contenedorTablaUpcoming.innerHTML = tablaGeneradaUpcoming;

function crearTablaUpcoming(arrayDatosTablaUpcoming) {
  let tablaUpcoming = "";
  for (const eventUpcoming of arrayDatosTablaUpcoming) {
    if (eventUpcoming.assistance == undefined) {
      tablaUpcoming += `<tr>
    <td>${eventUpcoming.category}</td>
    <td>$${eval(eventUpcoming.price * eventUpcoming.estimate)}</td>
    <td>${Math.round(
      (eval(eventUpcoming.estimate) * 100) / eval(eventUpcoming.capacity)
    )}%</td></tr>`;
    } else if (eventUpcoming.estimate == undefined) {
      tablaUpcoming += `<tr>
      <td>${eventUpcoming.category}</td>
      <td>$${eval(eventUpcoming.price * eventUpcoming.assistance)}</td>
      <td>${Math.round(
        (eval(eventUpcoming.assistance) * 100) / eval(eventUpcoming.capacity)
      )}%</td></tr>`;
    }
  }
  return tablaUpcoming;
}

