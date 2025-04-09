// Funksjonalitet for ansatte
const employeeBookingList = document.getElementById('bookingsList');

// Hent ansattes bookinger
function displayEmployeeBookings() {
    // Eksempel på hvordan bookinger kan vises
    const bookings = [
        { roomName: "Møterom 1", date: "2025-04-09", time: "10:00-12:00" },
        { roomName: "Grupperom", date: "2025-04-09", time: "13:00-14:00" },
    ];

    bookings.forEach(booking => {
        const li = document.createElement('li');
        li.innerHTML = `${booking.roomName} - ${booking.date} ${booking.time}`;
        employeeBookingList.appendChild(li);
    });
}

// Initialiser ansatt bookinger
document.addEventListener('DOMContentLoaded', () => {
    displayEmployeeBookings();
});
