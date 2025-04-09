document.addEventListener('DOMContentLoaded', function () {
    // Når siden er ferdig lastet, vis tilgjengelige møterom
    renderMeetingRooms(rooms);
    
    const loginButton = document.getElementById('loginButton');
    loginButton.addEventListener('click', function () {
        displayLoginSection();
    });
    
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        // Sjekk innloggingsinformasjonen her
        if (username === "admin" && password === "admin123") {
            // Succesfully logged in as admin
            document.getElementById('loginMessage').innerText = "Innlogging vellykket!";
            document.getElementById('loginSection').style.display = 'none';
            document.getElementById('adminInterface').style.display = 'block';
        } else {
            // Feil brukernavn/passord
            document.getElementById('loginMessage').innerText = "Feil brukernavn eller passord!";
        }
    });
});
