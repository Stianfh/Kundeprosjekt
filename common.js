// Definerer møterommene
const rooms = [
    { id: 1, name: "Møterom 1", isAvailable: true, description: "Stort møterom med plass til 10 personer", image: "meetingRoom1.jpg" },
    { id: 2, name: "Møterom 2", isAvailable: false, description: "Rommet er midlertidig utilgjengelig", image: "meetingRoom2.jpg" },
    { id: 3, name: "Grupperom", isAvailable: true, description: "Liten plass til grupper", image: "groupRoom.jpg" },
    { id: 4, name: "Studiecelle 1", isAvailable: true, description: "Perfekt for studiegrupper", image: "studyRoom1.jpg" },
    { id: 5, name: "Studiecelle 2", isAvailable: false, description: "Rommet er opptatt", image: "studyRoom2.jpg" },
    { id: 6, name: "Studiecelle 3", isAvailable: true, description: "Liten studieplass", image: "studyRoom3.jpg" },
    { id: 7, name: "Studiecelle 4", isAvailable: true, description: "Rom for enkeltstudie", image: "studyRoom4.jpg" }
];

// Funksjon for å vise tilgjengelige rom
function displayRooms() {
    const roomList = document.getElementById('roomList');
    roomList.innerHTML = '';

    rooms.forEach(room => {
        const li = document.createElement('li');
        li.innerHTML = `
            <img src="${room.image}" alt="${room.name}">
            <div>
                <h3>${room.name}</h3>
                <p>${room.description}</p>
                <button onclick="bookRoom(${room.id})" ${room.isAvailable ? '' : 'disabled'}>Book rom</button>
            </div>
        `;
        roomList.appendChild(li);
    });
}

// Book et rom
function bookRoom(roomId) {
    alert(`Rommet med ID ${roomId} er valgt for booking!`);
}

// Initialiser romene ved første last
document.addEventListener('DOMContentLoaded', () => {
    displayRooms();
});
