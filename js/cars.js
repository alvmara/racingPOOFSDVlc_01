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
  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;

    this.metrosRecorridos = 0;
  }

  avanzar() {
    const metrosARecorrer = Math.round(Math.random() * 50);
    this.metrosRecorridos += metrosARecorrer;
  }

  resetearMetros() {
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

  /**
   * añadimos el evento de click al boton de seleccion de coche
   * de momento ponemos aqui toda la logica del juego
   */
  button.addEventListener("click", () => onSelectCar(carConfiguration));

  img.classList.add("carChoosing");
  img.src = carConfiguration.img;

  button.appendChild(img);
  container.appendChild(button);
};

const initCarButtons = () => {
  carsConfiguration.forEach((coche) => createCarButton(coche));
};

function onSelectCar(carConfiguration) {
  this.disabled = true;

  const car = new Coche(carConfiguration.marca, carConfiguration.modelo);
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

const startGame = () => {
  setTimeout(() => {
    cambiaPantalla(2);
    window.addEventListener("keydown", onKeyDown);

    function onKeyDown(evento) {
      console.log(evento, evento.keyCode);
      if (evento.keyCode === 39) {
        avanzar();
        actualizarGanador();

        if (ganador !== null) {
          window.removeEventListener("keydown", onKeyDown);
          cambiaPantalla(3);
          mostrarDatosCarrera();
        }
      }
    }
  }, 2500);
};

/**
 * Inicialiazamos
 */
initCarButtons();
