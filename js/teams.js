/**
 *
 * en esta lista se almacenaran los coches de los teams
 *
 */
let teamCarsList = [];

/**
 * teams numbers son el numero de teams que van a competir
 */
const teamsNumber = 2;

/**
 * el team que esta selecccionando coche actualmente
 */
let actualSelectingTeam = 0;

/**
 * funcion para limpiar el estado de los teams
 */
const clearTeams = () => {
  teamCarsList = [];
  actualSelectingTeam = 0;
};

/**
 * funcion para incrementar el jugador que esta selecionando
 */
const changeActualSelectingTeam = () => {
  if (actualSelectingTeam < teamsNumber - 1) {
    actualSelectingTeam = actualSelectingTeam + 1;
  }
};

const drawActualSelectingTeam = () => {
  document.getElementById("player-car-chossing-number").innerText =
    actualSelectingTeam;
};

/**
 * Inicialiazamos
 */
drawActualSelectingTeam();
