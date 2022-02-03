//Funciones

const cleanGame = () => {
  console.log("limpiando variables");
  //Limpiar kilometros recorridos de los coches
  team1.resetearMetros();
  team2.resetearMetros();

  //Limpiar los datos de carrera
  actualizarContador(team1, 1);
  actualizarContador(team2, 2);

  team1 = null;
  team2 = null;
  ganador = null;

  //Limpiar los nombres elegidos
  document.getElementById("data-team-1").innerText = "";
  document.getElementById("data-team-2").innerText = "";
  //Limpiar

  // Habilitamos los botones
  const enableButtons = (button) => {
    button.disabled = false;
  };

  document.querySelectorAll("button").forEach(enableButtons);
};

const cambiaPantalla = (cambio) => {
  //Generamos la variable concatenada que nos advierte a que pantalla
  //queremos ir.
  let pantallaDeseada = "screen" + cambio;

  //Cada vez que entramos en la funcion se regenera el array con todas las pantallas, ya
  //que anteriormente al filtrar algunas quedaban fuera, así empieza de nuevo el proceso
  let arrayPantallas = ["screen0", "screen1", "screen2", "screen3"];

  //Aquí filtramos del array aquella pantalla a la que queremos ir, ES DECIR,
  //guardamos todas las pantallas menos aquella a la que queremos ir, ya que al resto a todas
  //les queremos dar la propiedad display none
  arrayPantallas = arrayPantallas.filter(
    (valor) => !pantallaDeseada.includes(valor)
  );

  //Antes de dar la propiedad display none al resto de pantallas, decimos a la que SI QUEREMOS
  //ver que tenga un display block, que la hará visible en el DOM (la web)
  document.getElementById(pantallaDeseada).style.display = "block";

  //Recorremos el array de las pantallas y a todas las que hay les damos la propiedad display como none
  for (let pantalla of arrayPantallas) {
    document.getElementById(pantalla).style.display = "none";
  }
};

const selectorBtnCoche = "btn-select-car-";

const selectCar = (nCoche) => {
  console.log("Se ha seleccionado el coche numero " + nCoche);

  if (team1 == null) {
    team1 = allCars[nCoche];
    const selector = `${selectorBtnCoche}${nCoche}`;
    const btnSeleccionCoche = document.getElementById(selector);
    const datosCoche = document.getElementById("data-team-1");

    //una vez he escogido el coche, invalido el img para que nadie haga onclick sobre él
    btnSeleccionCoche.disabled = true;
    // btnSeleccionCoche.classList.add("carSelected");
    datosCoche.innerHTML = team1.marca;
  } else if (team2 == null) {
    team2 = allCars[nCoche];
    const selector = `${selectorBtnCoche}${nCoche}`;
    const btnSeleccionCoche = document.getElementById(selector);
    const datosCoche = document.getElementById("data-team-2");

    //una vez he escogido el coche, invalido el img para que nadie haga onclick sobre él
    btnSeleccionCoche.disabled = true;
    // btnSeleccionCoche.classList.add("carSelected");
    datosCoche.innerHTML = team2.marca;

    //una vez he escogido los dos coches.........

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
  }

  console.log({ team1, team2 });
};

//Algortimo1
