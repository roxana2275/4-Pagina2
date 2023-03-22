fetch("https://mindhub-xj03.onrender.com/api/amazing")
  .then((response) => response.json())
  .then((data) => {
    const currentDate = data.currentDate;
    const upcomingEvents = [];
    const pastEvents = [];
    const opciones = [];

    // Generar lista de tipo de eventos
    for (const event of data.events) {
      if (event.date >= currentDate) {
        upcomingEvents.push(event);
      } else {
        pastEvents.push(event);
      }
    }
    // generar categorias
    for (const element of data.events) {
      if (opciones.indexOf(element.category) === -1) {
        opciones.push(element.category);
      }
    }

    // GENERATE lista ordenadas por asistencia y capacitdad
    const eventsSortedByAttendanceDesc = data.events
      .map((event) => ({
        name: event.name,
        attendance:
          event.assistance === undefined
            ? (event.estimate * 100) / event.capacity
            : (event.assistance * 100) / event.capacity,
        capacity: event.capacity,
      }))
      .sort((a, b) => b.attendance - a.attendance);

    const eventsSortedByAttendanceAsc = eventsSortedByAttendanceDesc
      .slice()
      .reverse();
    const eventsSortedByCapacityDesc = eventsSortedByAttendanceDesc
      .slice()
      .sort((a, b) => b.capacity - a.capacity);

    // Mostrar tabla de eventos ordenados por capacitad
    const staticCapacityTable = document.querySelector("#staticCapacity");
    staticCapacityTable.innerHTML = createTable(
      eventsSortedByAttendanceDesc,
      eventsSortedByAttendanceAsc,
      eventsSortedByCapacityDesc
    );

    function createTable(
      eventsSortedByAttendanceDesc,
      eventsSortedByAttendanceAsc,
      eventsSortedByCapacityDesc
    ) {
      let table = "";
      let contador = 0;
      for (const [index, event] of eventsSortedByAttendanceDesc.entries()) {
        if (contador < 7) {
          table += `<tr>
      <td>${event.name}, ${event.attendance.toFixed(0)}%</td>
      <td>${
        eventsSortedByAttendanceAsc[index].name
      }, ${eventsSortedByAttendanceAsc[index].attendance.toFixed(0)}%</td>
      <td>${eventsSortedByCapacityDesc[index].name}, ${
            eventsSortedByCapacityDesc[index].capacity
          }</td>
    </tr>`;
        }
        contador++;
      }
      return table;
    }

    // Mostrar tabla de eventos pasados
    const staticPastEventsTable = document.querySelector("#staticPastEvents");
    staticPastEventsTable.innerHTML = createPastEventsTable(
      pastEvents,
      opciones
    );

    function createPastEventsTable(pastEvents, opciones) {
      let table = "";
      for (let i = 0; i < opciones.length; i++) {
        let opcion2 = opciones[i];
        let revenue = 0;
        let capacity = 0;
        let assistance = 0;
        for (const event of pastEvents) {
          if (opcion2 == event.category) {
            if (event.assistance === undefined) {
              revenue = revenue + event.price * event.estimate;
              capacity = capacity + event.capacity;
              assistance = assistance + event.estimate;
            } else {
              revenue = revenue + event.price * event.assistance;
              capacity = capacity + event.capacity;
              assistance = assistance + event.assistance;
            }
          }
        }
        table += `<tr>
                  <td>${opcion2}</td>
                  <td>$${revenue.toFixed(0)}</td>
                  <td>${((assistance * 100) / capacity).toFixed(0)}%</td>
                </tr>`;
      }
      return table;
    }

    // Mostrar tabla de eventos futuros
    const staticUpcomingEventsTable = document.querySelector(
      "#staticUpcomingEvents"
    );
    staticUpcomingEventsTable.innerHTML = createUpcomingEventsTable(
      upcomingEvents,
      opciones
    );

    function createUpcomingEventsTable(upcomingEvents, opciones) {
      let table = "";
      for (let i = 0; i < opciones.length; i++) {
        let opcion2 = opciones[i];
        let revenue = 0;
        let capacity = 0;
        let assistance = 0;
        for (const event of upcomingEvents) {
          if (opcion2 == event.category) {
            if (event.assistance === undefined) {
              revenue = revenue + event.price * event.estimate;
              capacity = capacity + event.capacity;
              assistance = assistance + event.estimate;
            } else {
              revenue = revenue + event.price * event.assistance;
              capacity = capacity + event.capacity;
              assistance = assistance + event.assistance;
            }
          }
        }

        table += `<tr>
              <td>${opcion2}</td>
              <td>$${revenue.toFixed(0)}</td>
              <td>${((assistance * 100) / capacity).toFixed(0)}%</td>
            </tr>`;
      }
      return table;
    }
  })
  .catch((error) => console.error(error));
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
