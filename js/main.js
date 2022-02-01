
//Funciones

const cleanGame = () => {
    team1 = "";
    team2 = "";
    ganador = "";
}

const cambiaPantalla = (cambio) => {

    //Generamos la variable concatenada que nos advierte a que pantalla 
    //queremos ir.
    let pantallaDeseada = "screen" + cambio;
    

    //Cada vez que entramos en la funcion se regenera el array con todas las pantallas, ya 
    //que anteriormente al filtrar algunas quedaban fuera, así empieza de nuevo el proceso
    let arrayPantallas = ["screen1","screen2","screen3","screen4"];

    //Aquí filtramos del array aquella pantalla a la que queremos ir, ES DECIR,
    //guardamos todas las pantallas menos aquella a la que queremos ir, ya que al resto a todas
    //les queremos dar la propiedad display none
    arrayPantallas = arrayPantallas.filter(valor => !pantallaDeseada.includes(valor));

    //Antes de dar la propiedad display none al resto de pantallas, decimos a la que SI QUEREMOS
    //ver que tenga un display block, que la hará visible en el DOM (la web)
    document.getElementById(pantallaDeseada).style.display = "block";

    //Recorremos el array de las pantallas y a todas las que hay les damos la propiedad display como none
    for (let pantalla of arrayPantallas) {
        document.getElementById(pantalla).style.display = "none";
    }


}

const selectCar = (nCoche) => {
    
    if(team1 == ""){
        team1 = allCars[nCoche];
        let cochePrimero = document.getElementById(nCoche);
        //una vez he escogido el coche, invalido el img para que nadie haga onclick sobre él
        cochePrimero.disabled = true;
        cochePrimero.classList.add("carSelected");

        
    } else if (team2 == ""){
        team2 = allCars[nCoche];
        let cocheSegundo = document.getElementById(nCoche);
        cocheSegundo.disabled = true;
        cocheSegundo.classList.add("carSelected");

        console.log(team1,team2);

        //una vez he escogido los dos coches.........

        setTimeout(()=>{
            cambiaPantalla(3);
        },2500);
    }
} 

//Algortimo