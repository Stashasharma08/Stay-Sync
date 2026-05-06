const container = document.getElementById("rooms-container");
fetch("http://localhost:5000/rooms")
.then(response => response.json())
.then(data => {
    console.log(data);
    data.forEach(rooms => {
        container.innerHTML += `
           <div class="Hotel-Card">

            <h1>${rooms.type}</h1>

            <p>Room Number: ${rooms.number}</p>

            <p>status: ${rooms.status}</p>

            <button>Book Now</button
           </div>`
    });
});