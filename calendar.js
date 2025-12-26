const calendario = document.getElementById("calendario");
const hoje = new Date();
const ano = hoje.getFullYear();
const mes = hoje.getMonth();

fetch("reservas.json")
.then(r => r.json())
.then(reservas => {
  const diasNoMes = new Date(ano, mes + 1, 0).getDate();

  for (let i = 1; i <= diasNoMes; i++) {
    const data = `${ano}-${String(mes+1).padStart(2,"0")}-${String(i).padStart(2,"0")}`;
    const div = document.createElement("div");
    div.className = "day";
    div.innerText = i;

    if (reservas.includes(data)) {
      div.classList.add("alugada");
    }

    calendario.appendChild(div);
  }
});
