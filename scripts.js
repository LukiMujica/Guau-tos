function Auto(_marca, _modelo, _anio) {
    const marca = _marca;
    const modelo = _modelo;
    this.anio = _anio;

    this.getMarca = _marca;
    this.getModelo = _modelo;
}

const marca = prompt("Ingresá la marca de tu auto");
const modelo = prompt("Ingresá el modelo de tu auto");
const anio = parseInt(prompt("Ingresá el año de tu auto"));

let nuevoAuto = new Auto(marca, modelo, anio);

if (nuevoAuto.anio >= 2015) {
    alert("Tu auto califica para formar parte de nuestra empresa");
} else if (nuevoAuto.anio <= 2014) {
    if (confirm("Podrías conseguir un auto más nuevo? Tu auto no califica para formar parte de nuestra empresa."))
        alert("Entonces al conseguirlo podrás formar parte de la empresa.");
    else alert("No calificás para formar parte de nuestra empresa.");
} else {
    alert("No calificás para formar parte de nuestra empresa.");
}

console.log(nuevoAuto);
let seguro;
const base = 2500;

if (nuevoAuto.anio >= 2015 && nuevoAuto.anio <= 2017) {
    seguro = base * 1.15;
} else if (nuevoAuto.anio <= 2014) {
    seguro = base * 1.25;
} else if (nuevoAuto.anio >= 2018) {
    seguro = base * 1.05;
} else {
    seguro = base * 1.30;
}

console.log("El costo del seguro para tu auto es " + "$" + seguro)

let marcas = ["Renault", "Volkswagen", "Peugeot", "Chevrolet", "Ford", "Fiat"]
console.log("La primer marca de la lista es " + marcas[0]);
console.log(marcas.length);

// DESAFIO DOM
parrafo = document.querySelector('#titulos')
parrafo.innerText = 'Bienvenidos!'
parrafo.classList = 'fondo__titulos--h2'

// DESAFIO EVENTOS
window.onload = function() {
    const boton = document.getElementById("boton");
    boton.addEventListener("click", function(event) {
        let contenedor = document.createElement("div");
        contenedor.classList = 'fondo__titulos--h2';
        contenedor.innerHTML = `
                <h1>${nuevoAuto.getMarca}</h1>
                <h2>${nuevoAuto.getModelo}</h2>
                <h3>${nuevoAuto.anio}</h3>
                <button onclick="eliminar(event)" class = "btn btn-primary">Eliminar</button>
            `;

        document.getElementById("container").appendChild(contenedor);

    });
};

function eliminar(event) {
    event.target.parentElement.parentElement.removeChild(
        event.target.parentElement
    );
}