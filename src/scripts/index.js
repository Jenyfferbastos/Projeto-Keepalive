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

const semana = {
  0: "Domingo",
  1: "Segunda-Feira",
  2: "Terça-Feira",
  3: "Quarta-Feira",
  4: "Quinta-Feira",
  5: "Sexta-Feira",
  6: "Sábado",
};

const milesegundos = 600000;
let segundos = milesegundos / 1000;

//TEMPERATURA

async function buscarLocal() {
  return new Promise((resolve, error) =>
    navigator.geolocation.getCurrentPosition((position) => {
      lat = position.coords.latitude;
      long = position.coords.longitude;

      resolve({ lat, long });
      error(`Failed to get geolocation`);
    })
  );
}

async function receberClima() {
  const { lat, long } = await buscarLocal();
  try {
    const response = await axios.get(
      `http://api.weatherapi.com/v1/current.json?key=bf8a14cb91364324b2c125012232904&q=${lat},${long}&aqi=no&lang=pt`
    );
    console.log(response.data);
    const temperatura = response.data.current.feelslike_c;
    const iconeTemperatura = `http:${response.data.current.condition.icon}`;
    const estate = response.data.location.region;
    const cityName = response.data.location.name;

    return { temperatura, iconeTemperatura, cityName, estate };
  } catch (error) {
    console.log({ error });
  }
}

async function preencherTemperatura() {
  const result = await receberClima();
  const { iconeTemperatura, temperatura, cityName, estate } = result;
  const divClima = document.getElementsByClassName("clima")[0];
  divClima.innerHTML = `${temperatura}°`;

  const divlocalizacao = document.getElementsByClassName("localizacao")[0];
  divlocalizacao.innerHTML = `${cityName} - ${estate}`;

  const icone = document.getElementsByClassName("icone-clima")[0];
  icone.src = iconeTemperatura;
}
//Atualiza a temperatura a cada 10 segundos
setInterval(async () => await preencherTemperatura(), 10000);

function fazerLogout() {
  //configuracao da lib
  swal
    .fire({
      title: "Gostaria de realizar o logout?",
      showDenyButton: true,
      confirmButtonText: "Sim",
      denyButtonText: "Não",
    })
    .then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("usuarioLogado");
        window.location.href = "http://127.0.0.1:5500/index.html";
      } else if (result.isDenied) {
        //configuracao da lib
        swal
          .fire({
            title: "Gostaria de salvar os dados de acesso?",
            showDenyButton: true,
            confirmButtonText: "Sim",
            denyButtonText: "Não",
          })
          .then((result) => {
            if (result.isConfirmed) {
              swal.fire("Ok, dados salvos!", "", "success");
            } else if (result.isDenied) {
              localStorage.removeItem("usuarioLogado");
              swal.fire("Dados de acesso excluídos", "", "info");
            }
          });
      }
    });
}

//Função responsável por realizar a validação de login e senha
const form = document.getElementById("formularioLogin");
const textoErro = document.getElementById("textoErro");
const textoErroDois = document.getElementById("textoErroDois");
const inputInvalido = document.querySelectorAll("input");

form.addEventListener("submit", function (evento) {
  evento.preventDefault();
  const email = evento.target[0];
  const senha = evento.target[1];
  console.log(email.value);
  if (email.value == "" && senha.value == "") {
    textoErro.innerHTML = "Ops, usuário ou senha inválidos.";
    textoErroDois.innerHTML = "Tente novamente!";
    inputInvalido[0].style.border = "1px solid rgba(233, 180, 37, 1)";
    inputInvalido[1].style.border = "1px solid rgba(233, 180, 37, 1)";
  } else if (email.value != "admin" && senha.value != "admin") {
    textoErro.innerHTML = "Ops, usuário ou senha inválidos.";
    textoErroDois.innerHTML = "Tente novamente!";
    inputInvalido[0].style.border = "1px solid rgba(233, 180, 37, 1)";
    inputInvalido[1].style.border = "1px solid rgba(233, 180, 37, 1)";
  } else {
    const dadosUsuario = {
      email: email.value,
      senha: senha.value,
    };
    localStorage.setItem("usuarioLogado", JSON.stringify(dadosUsuario));
    window.location.href = "http://127.0.0.1:5500/src/pages/home.html";
  }
});

function mudaEstilizacaoInput() {
  const divEmail = document.getElementsByClassName("email")[0];
  divEmail.className = "email email-click";

  const divSenha = document.getElementsByClassName("senha")[0];
  divSenha.className = "senha senha-click";

  //remove filhos da div email
  while (divEmail.firstChild) {
    divEmail.removeChild(divEmail.firstChild);
  }

  //remove filhos da div senha
  while (divSenha.firstChild) {
    divSenha.removeChild(divSenha.firstChild);
  }

  const labelEmail = document.createElement("label");
  labelEmail.className = "label-form";

  const imgEmail = document.createElement("img");
  imgEmail.className = "icone-email";
  imgEmail.src = "http://127.0.0.1:5500/src/assets/img/icon-email-login.svg";

  const inputEmail = document.createElement("input");
  inputEmail.className = "input input-click";
  inputEmail.type = "text";
  inputEmail.placeholder = "Usuário";
  inputEmail.id = "email";

  labelEmail.appendChild(imgEmail);
  divEmail.appendChild(labelEmail);
  divEmail.appendChild(inputEmail);

  const labelSenha = document.createElement("label");
  labelSenha.className = "label-form";

  const imgSenha = document.createElement("img");
  imgSenha.className = "icone-senha";
  imgSenha.src = "http://127.0.0.1:5500/src/assets/img/icon-senha-login.svg";

  const inputSenha = document.createElement("input");
  inputSenha.className = "input input-click";
  inputSenha.type = "password";
  inputSenha.placeholder = "Senha";
  inputEmail.id = "senha";

  labelSenha.appendChild(imgSenha);
  divSenha.appendChild(labelSenha);
  divSenha.appendChild(inputSenha);
}

//Relógio data e hora

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
}

function tempe() {
  segundos--;

  if (segundos > 0) {
    const h3Tempo = document.getElementById("timerSegundos");
    h3Tempo.innerHTML = segundos;
  }
}

function aplicaTemporizador() {
  setInterval(() => tempe(), 1000);
}

//Temporizador
function temporizador(milesegundosPadrao) {
  setInterval(
    () =>
      swal
        .fire({
          title: "Deseja manter a sessão ativa?",
          showDenyButton: true,
          confirmButtonText: "Sim",
          denyButtonText: "Não",
        })
        .then((result) => {
          if (result.isConfirmed) {
            segundos = milesegundos / 1000;
            temporizador(milesegundos);
            swal.fire("Ok, sessão ativa.", "", "success");
          } else if (result.isDenied) {
            localStorage.removeItem("usuarioLogado");
            swal.fire("Sessão encerrada.", "", "info");
            setTimeout(
              () =>
                (window.location.href =
                  "http://127.0.0.1:5500/index.html"),
              5000
            );
          }
        }),
      milesegundos
  );
}

function carregamento() {
  configurarHoraEDataHeader();
  aplicaTemporizador();
  temporizador(milesegundos);
}
