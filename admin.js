// Funksjonalitet for admin
const addUserButton = document.getElementById('addUserButton');
const deleteUserButton = document.getElementById('deleteUserButton');
const viewUsersButton = document.getElementById('viewUsersButton');

// Legg til bruker
addUserButton.addEventListener('click', () => {
    alert('Legg til ny bruker!');
});

// Slett bruker
deleteUserButton.addEventListener('click', () => {
    alert('Slett valgt bruker!');
});

// Vis brukere
viewUsersButton.addEventListener('click', () => {
    alert('Vis alle brukere!');
});
