app.innerHTML = `
<h2>Logg inn med nasjonalt lånekort</h2>
<input 
  type="text" 
  placeholder="N12345678901" 
  value="${model.loanCardNumber}" 
  oninput="setLoanCardNumber(this.value)">
<p style="font-size: 0.9em; color: gray;">
  Skriv inn ditt nasjonale lånekortnummer (starter med "N" og har 11 siffer).
</p>
${model.loanCardNumber && !validLoanCard ? 
  '<p style="color: red;">Ugyldig lånekortnummer</p>' : ''}

<label for="date">Dato:</label>
<input type="date" id="date" onchange="changeDate(this.value)">

<label for="time">Tid:</label>
<input type="time" id="time" onchange="changeTime(this.value)">

<div>${model.rooms.map(drawRoom).join('')}</div>
`;
}

function drawRoom(room) {
    const isBooked = room.bookings.some (b => b.date === model.selectedDate && b.time === model.SelectedTime);
    const statusClass = isBooked ? 'booked' : 'available';
    const canBook = !isBooked && isValidLoanCard(model.loanCardNumber);
    const button = isBooked
    ? 'Opptatt' : canBook
    : canBook
    ? '<button'
}