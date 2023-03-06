const currentDate = data.currentDate;
const upcomingEvents = [];
const pastEvents = [];

// GENERATE LISTS OF UPCOMING AND PAST EVENTS
for (const event of data.events) {
  if (event.date >= currentDate) {
    upcomingEvents.push(event);
  } else {
    pastEvents.push(event);
  }
}

// GENERATE LISTS SORTED BY ATTENDANCE AND CAPACITY
const eventsSortedByAttendanceDesc = data.events
  .map(event => ({
    name: event.name,
    attendance: event.assistance === undefined ? event.estimate * 100 / event.capacity : event.assistance * 100 / event.capacity,
    capacity: event.capacity
  }))
  .sort((a, b) => b.attendance - a.attendance);

const eventsSortedByAttendanceAsc = eventsSortedByAttendanceDesc.slice().reverse();
const eventsSortedByCapacityDesc = eventsSortedByAttendanceDesc.slice().sort((a, b) => b.capacity - a.capacity);

// DISPLAY TABLE OF EVENTS SORTED BY CAPACITY
const staticCapacityTable = document.querySelector('#staticCapacity');
staticCapacityTable.innerHTML = createTable(eventsSortedByAttendanceDesc, eventsSortedByAttendanceAsc, eventsSortedByCapacityDesc);

function createTable(eventsSortedByAttendanceDesc, eventsSortedByAttendanceAsc, eventsSortedByCapacityDesc) {
  let table = '';
  for (const [index, event] of eventsSortedByAttendanceDesc.entries()) {
    table += `<tr>
      <td>${event.name}, ${event.attendance.toFixed(2)}</td>
      <td>${eventsSortedByAttendanceAsc[index].name}, ${eventsSortedByAttendanceAsc[index].attendance.toFixed(2)}</td>
      <td>${eventsSortedByCapacityDesc[index].name}, ${eventsSortedByCapacityDesc[index].capacity}</td>
    </tr>`;
  }
  return table;
}

// DISPLAY TABLE OF PAST EVENTS
const staticPastEventsTable = document.querySelector('#staticPastEvents');
staticPastEventsTable.innerHTML = createPastEventsTable(pastEvents);

function createPastEventsTable(pastEvents) {
  let table = '';
  for (const event of pastEvents) {
    const revenue = event.assistance === undefined ? event.price * event.estimate : event.price * event.assistance;
    const attendance = event.assistance === undefined ? event.estimate * 100 / event.capacity : event.assistance * 100 / event.capacity;
    table += `<tr>
      <td>${event.category}</td>
      <td>$${revenue.toFixed(2)}</td>
      <td>${attendance.toFixed(2)}%</td>
    </tr>`;
  }
  return table;
}

// DISPLAY TABLE OF UPCOMING EVENTS
const staticUpcomingEventsTable = document.querySelector('#staticUpcomingEvents');
staticUpcomingEventsTable.innerHTML = createUpcomingEventsTable(upcomingEvents);

function createUpcomingEventsTable(upcomingEvents) {
  let table = '';
  for (const event of upcomingEvents) {
    const revenue = event.assistance === undefined ? event.price * event.estimate : event.price * event.assistance;
    const attendance = event.assistance === undefined ? event.estimate * 100 / event.capacity : event.assistance * 100 / event.capacity;
    table += `<tr>
      <td>${event.category}</td>
      <td>$${revenue.toFixed(2)}</td>
      <td>${attendance.toFixed(2)}%</td>
    </tr>`;
  }
  return table;
}
