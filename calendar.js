fetch("reservas.json")
.then(r => r.json())
.then(dados => {
  const div = document.getElementById("calendario");
  dados.forEach(d => {
    const p = document.createElement("p");
    p.textContent = d + " - ALUGADA";
    p.style.color = "red";
    div.appendChild(p);
  });
});
