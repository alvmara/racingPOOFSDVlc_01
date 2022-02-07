// //Funciones

// const cleanGame = () => {
//   console.log("limpiando variables");
//   //Limpiar kilometros recorridos de los coches
//   team1.resetearMetros();
//   team2.resetearMetros();

//   //Limpiar los datos de carrera
//   actualizarContador(team1, 1);
//   actualizarContador(team2, 2);

//   //Limpiar los nombres elegidos
//   document.getElementById("data-team-1").innerText = "";
//   document.getElementById("data-team-2").innerText = "";
//   //Limpiar

//   // Habilitamos los botones
//   const enableButtons = (button) => {
//     button.disabled = false;
//   };

//   document.querySelectorAll("button").forEach(enableButtons);
// };

const cambiaPantalla = (screenName) => {
  //Generamos la variable concatenada que nos advierte a que pantalla
  //queremos ir.
  const pantallaDeseada = "screen-" + screenName;

  const template = document.getElementById(pantallaDeseada);

  document.getElementById("app").innerHTML = "";

  document.getElementById("app").appendChild(template.content);

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

cambiaPantalla("home");
