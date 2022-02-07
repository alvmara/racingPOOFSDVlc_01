//Generando variables básicas de entorno

let team1 = null;

let team2 = null;

let ganador = null;

const configuracion = {
  steps: 3,
  stepMeters: 100,
};

const metrosTotales = configuracion.vueltas * configuracion.stepMeters;
function avanzar() {
  team1.avanzar();
  team2.avanzar();
  console.log({ team1, team2 });

  //actualizar contadores de los coches con los metros recorridos
  actualizarContador(team1, 1);
  actualizarContador(team2, 2);
}

function actualizarGanador() {
  if (team1.metrosRecorridos >= metrosTotales) {
    //el team1 ha ganado
    ganador = team1;
  } else if (team2.metrosRecorridos >= metrosTotales) {
    ganador = team2;
  }
}
async function empezarJuego() {
  mostrarDatosCarrera();
}

function actualizarContador(team, indice) {
  //to do
  const selectorCss = `#team${indice}-metros span.metros`;
  const spanMetros = document.querySelector(selectorCss);

  spanMetros.innerText = team.metrosRecorridos;
}

function mostrarDatosCarrera() {
  //to do
}
