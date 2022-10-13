//Função responsável pelo redirecionamento da página Login para a página
//de Login preenchido

const input = document.querySelector(".input");
input.addEventListener("click", redirecionaParaOutraPagina);

function redirecionaParaOutraPagina(){
  window.location.href = "http://127.0.0.1:5500/src/pages/login-preenchido.html"
};

//Relógio data e hora

const meses = {
  0: "Janeiro",
  1: "Fevereiro",
  2: "Março",
  3: "Abril",
  4: "Maio",
  5: "Junho",
  6: "Julho",
  7: "Agosto",
  8: "Setembro",
  9: "Outubro",
  10: "Novembro",
  11: "Dezembro",
};
const semana = [
  "Domingo",
  "Segunda-Feira",
  "Terça-Feira",
  "Quarta-Feira",
  "Quinta-Feira",
  "Sexta-Feira",
  "Sábado",
];

function configurarHoraEDataHeader() {
  today = new Date();
  horas = today.getHours();
  minutos = today.getMinutes();
  dia = today.getDate();
  diaSemana = today.getDay();
  ano = today.getFullYear();
  mes = today.getMonth();
  document.getElementById("horarioHeader").innerHTML = horas + ":" + minutos;
  document.getElementById(
    "dataHeader"
  ).innerHTML = `${semana[diaSemana]}, ${dia} de ${meses[mes]} de ${ano}`;
  setTimeout("configurarHoraEDataHeader()", 500);
};

