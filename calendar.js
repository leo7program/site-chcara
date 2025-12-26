const calendar = document.getElementById("calendar");
const today = new Date();
const year = today.getFullYear();
const month = today.getMonth();

fetch("reservas.json")
.then(res => res.json())
.then(reservas => {
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  for (let d = 1; d <= daysInMonth; d++) {
    const date = `${year}-${String(month+1).padStart(2,"0")}-${String(d).padStart(2,"0")}`;
    const div = document.createElement("div");
    div.className = "day";
    div.innerText = d;

    if (reservas.includes(date)) {
      div.classList.add("alugada");
    }

    calendar.appendChild(div);
  }
});
