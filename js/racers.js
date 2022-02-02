//Declaración de la clase Coche
// class Coche {

//     constructor(modelo, marca, velocidad, peso, frenada, combustible) {
//         this.modelo = modelo;
//         this.marca = marca;
//         this.velocidad = velocidad;
//         this.peso = peso;
//         this.frenada = frenada;
//         this.combustible = combustible;
//         this.metros = 0;
//     }

//     acelerar() {
//         return this.velocidad += 30;
//     }

//     frenar() {
//         return this.velocidad = 0;
//     }

// };

// //Instanciando corredores...

// let coche1 = new Coche("Gt","BMW",250,2000,50,"Gasolina")
// let coche2 = new Coche("Celica","Chevrolet",251,1900,70,"Gasolina");
// let coche3 = new Coche("TestaRossa","Jaguar",270,2300,55,"Gasolina");
// let coche4 = new Coche("Camaro","Mercedes",299,1750,90,"Diesel");

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

let coche1 = new Coche("BMW", "Gt");
let coche2 = new Coche("Chevrolet", "Celica");
let coche3 = new Coche("Jaguar", "TestaRossa");
let coche4 = new Coche("Mercedes", "Camaro");

//Genero un traductor/diccionario de JS

const allCars = [coche1, coche2, coche3, coche4];

//Generando variables básicas de entorno

let team1 = null;

let team2 = null;

let ganador = null;

const configuracion = {
  vueltas: 3,
  metrosPorVuelta: 100,
};

const metrosTotales = configuracion.vueltas * configuracion.metrosPorVuelta;
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
