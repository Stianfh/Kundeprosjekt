// Initialiser appen og oppdater visningen
document.addEventListener('DOMContentLoaded', function () {
    init();
  });
  
  function init() {
    // Last opp eventuelle lagrede data, hvis tilgjengelig
    model.loadBookings();
    updateView(); // Vis innhold basert på den nåværende modellen
  }
  
  function updateView() {
    // Hvis brukeren er logget inn, vis bookingsystemet. Hvis ikke, vis rommene.
    if (!model.user.loggedIn) {
      view.showRooms();  // Vis rommene
    } else {
      view.showBookingForm();  // Vis booking-skjemaet
    }
  }
  