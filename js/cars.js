const raceConfiguration = {
  steps: 3,
  stepMeters: 1000,
};

const carsConfiguration = [
  {
    marca: "Lexus",
    modelo: "RC F GT3 (Emil Frey Racing)",
    img: "https://www.gran-turismo.com/images/c/i1h8gmoWahAtS.jpg",
  },
  {
    marca: "Toyota",
    modelo: "FT-1 Vision Gran Turismo (Gr.3)",
    img: "https://www.gran-turismo.com/images/c/i15evTDfISjidG.jpg",
  },
  {
    marca: "Aston Martin",
    modelo: "V12 Vantage GT3",
    img: "https://www.gran-turismo.com/images/c/i1NLF6QHjCpngb.jpg",
  },
  {
    marca: "Mitsubishi",
    modelo: "Lancer Evolution Final Edition Gr.3",
    img: "https://www.gran-turismo.com/images/c/i1gFuokfWgkhj.jpg",
  },
  {
    marca: "Mercedes",
    modelo: "MG GT3 (AMG-Team HTP-Motorsport)",
    img: "https://www.gran-turismo.com/images/c/i1hwaIeKvZk4N.jpg",
  },
  {
    marca: "Porsche",
    modelo: "911 RSR (991)",
    img: "https://www.gran-turismo.com/images/c/i19Fugb6g6u3i.jpg",
  },
  {
    marca: "Chevrolet",
    modelo: "Corvette C7 Gr.3",
    img: "https://www.gran-turismo.com/images/c/i1S3JwVsYsPkd.jpg",
  },
  {
    marca: "Renault",
    modelo: "Sport R.S.01 GT3",
    img: "https://www.gran-turismo.com/images/c/i1F42nNDP6JVpG.jpg",
  },
  {
    marca: "Subaru",
    modelo: "WRX Gr.3",
    img: "https://www.gran-turismo.com/images/c/i1lnuHd546mwrb.jpg",
  },
  {
    marca: "Nissan",
    modelo: "GT-R NISMO GT3 N24 Schulze Motorsport",
    img: "https://www.gran-turismo.com/images/c/i1ffobM2StyCO.jpg",
  },
];

/**
 * Clase Coche
 */
class Coche {
  constructor(marca, modelo, img) {
    this.marca = marca;
    this.modelo = modelo;
    this.img = img;
    this.metrosRecorridos = 0;
  }

  run() {
    const metrosARecorrer = Math.round(Math.random() * 50);
    this.metrosRecorridos += metrosARecorrer;
  }

  resetMeters() {
    this.metrosRecorridos = 0;
  }
}

/**
 * Función para crear botones de selección de coche
 * @param {*} carConfiguration
 */
const createCarButton = (carConfiguration) => {
  const container = document.getElementsByClassName("carOptions")[0];
  const button = document.createElement("button");
  const img = document.createElement("img");

  //console.log("create car button", container);

  /**
   * añadimos el evento de click al boton de seleccion de coche
   * de momento ponemos aqui toda la logica del juego
   */
  button.addEventListener("click", onSelectCar.bind(button, carConfiguration));

  img.classList.add("carChoosing");
  img.src = carConfiguration.img;

  button.appendChild(img);
  container.appendChild(button);
};

const initCarButtons = () => {
  //console.log("init card buttons");
  carsConfiguration.forEach((coche) => createCarButton(coche));
};

/**
 * esta funcion se ejecuta se hace click en un boton de seleccion de coche
 * @param {*} carConfiguration
 */
function onSelectCar(carConfiguration) {
  this.disabled = true;
  //console.log(this, "onSelectCar");

  const car = new Coche(
    carConfiguration.marca,
    carConfiguration.modelo,
    carConfiguration.img
  );

  teamCarsList.push(car);

  // Cambiar el estado del team que selecciona
  changeActualSelectingTeam();
  drawActualSelectingTeam();

  if (teamCarsList.length === teamsNumber) {
    // Deshabilitar todos los botones
    setCarButtonsEnabled(false);
    // Empezar juego
    startGame();
  }
}

const setCarButtonsEnabled = (enabled) => {
  const buttons = document.querySelectorAll(".carOptions button");
  buttons.forEach((button) => (button.disabled = !enabled));
};

/**
 * Lógica de la carrera (El juego)
 */

const hasTeamFinish = (team, raceConfiguration) => {
  const { steps, stepMeters } = raceConfiguration;

  const totalMeters = steps * stepMeters;

  return team.metrosRecorridos >= totalMeters;
};

let ranking = [];

const startGame = () => {
  let raceCarsList = [...teamCarsList];

  changeScreen("race-game");
  drawRacerState(raceCarsList);

  document.getElementById("stepNumber").innerText = raceConfiguration.steps;
  document.getElementById(
    "stepMeters"
  ).innerText = `${raceConfiguration.stepMeters} metros`;

  window.addEventListener("keydown", onKeyDown);

  function onKeyDown(event) {
    if (event.repeat || event.keyCode !== 39) {
      return;
    }

    runCars(raceCarsList);
    drawRacerState(raceCarsList);

    const finishedCars = raceCarsList.filter((car) =>
      hasTeamFinish(car, raceConfiguration)
    );

    const notFinishedCars = raceCarsList.filter(
      (car) => !hasTeamFinish(car, raceConfiguration)
    );

    ranking = [...ranking, ...finishedCars];

    raceCarsList = notFinishedCars;

    const hasRaceEnd = raceCarsList.length === 0;

    if (hasRaceEnd) {
      //console.log("La carrera ha acabado");

      window.removeEventListener("keydown", onKeyDown);

      changeScreen("ranking");

      // Mostrar el ranking en la pantalla
      showRanking();
    }
  }
};

const runCars = (raceCarsList) => {
  raceCarsList.forEach((car) => car.run());
};

function drawRacerState(raceCarsList) {
  const container = document.getElementById("racer-container");

  const copyRaceCarsList = [...raceCarsList]
    .filter((team) => !hasTeamFinish(team, raceConfiguration))
    .sort((car1, car2) => car2.metrosRecorridos - car1.metrosRecorridos);

  let divsInfo = copyRaceCarsList.map((car) => {
    const div = document.createElement("div");
    const divMarca = document.createElement("div");
    const divModelo = document.createElement("div");
    const divMetros = document.createElement("div");
    const img = document.createElement("img");

    divMarca.innerText = car.marca;
    divModelo.innerText = car.modelo;
    divMetros.innerText = car.metrosRecorridos + " metros";
    img.src = car.img;

    div.appendChild(divMarca);
    div.appendChild(divModelo);
    div.appendChild(divMetros);
    div.appendChild(img);

    return div;
  });

  [...(container.children || [])].forEach((div) => container.removeChild(div));

  divsInfo.forEach((div) => container.appendChild(div));
}

function showRanking() {
  const container = document.getElementById("race-ranking");

  let divsInfo = ranking.map((car) => {
    const div = document.createElement("div");
    const divMarca = document.createElement("div");
    const divModelo = document.createElement("div");
    const divMetros = document.createElement("div");
    const img = document.createElement("img");

    divMarca.innerText = car.marca;
    divModelo.innerText = car.modelo;
    divMetros.innerText = car.metrosRecorridos + " metros";
    img.src = car.img;

    div.appendChild(divMarca);
    div.appendChild(divModelo);
    div.appendChild(divMetros);
    div.appendChild(img);

    return div;
  });

  [...(container.children || [])].forEach((div) => container.removeChild(div));

  divsInfo.forEach((div) => container.appendChild(div));
}
