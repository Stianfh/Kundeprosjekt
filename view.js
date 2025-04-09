function renderMeetingRooms(rooms) {
  const roomListElement = document.getElementById('roomList');
  roomListElement.innerHTML = ''; // Tømmer listen før rendering

  rooms.forEach(room => {
      const li = document.createElement('li');
      li.textContent = room.name;
      li.style.color = room.isAvailable ? 'green' : 'red'; // Grønn hvis tilgjengelig, rød hvis ikke
      roomListElement.appendChild(li);
  });
}

function displayLoginSection() {
  document.getElementById('loginSection').style.display = 'block';
  document.getElementById('meetingRooms').style.display = 'none';
}