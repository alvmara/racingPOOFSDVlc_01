const coches = [
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

const createCarButton = (coche) => {
  const container = document.getElementsByClassName("carOptions")[0];
  const button = document.createElement("button");
  const img = document.createElement("img");

  img.classList.add("carChoosing");
  img.src = coche.img;

  button.appendChild(img);
  container.appendChild(button);
};

coches.forEach((coche) => createCarButton(coche));
