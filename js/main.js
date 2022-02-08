function cleanCommons() {
  // metros recorridos de los coches
  for (const team of teamCarsList) {
    team.resetMeters();
  }

  // Limpiamos el ranking
  ranking = [];
}

function newRace() {
  //console.log("new race");

  cleanCommons();

  clearTeams();

  // Cambiar a la pantalla de selección de equipos
  changeScreen("car-chossing");
}

function restartRaceWithSameTeams() {
  cleanCommons();

  // Cambiar a la pantalla de carrera
  startGame();
}

const changeScreen = (screenName) => {
  //Generamos la variable concatenada que nos advierte a que pantalla
  //queremos ir.
  const desiredScreen = "screen-" + screenName;

  const template = document.getElementById(desiredScreen);

  document.getElementById("app").innerHTML = "";

  document.getElementById("app").appendChild(template.content.cloneNode(true));

  doAfterChange(screenName);
};

function doAfterChange(screenName) {
  if (screenName === "car-chossing") {
    initCarButtons();
    drawActualSelectingTeam();
  }

  if (screenName === "race-game") {
  }
}

changeScreen("home");
