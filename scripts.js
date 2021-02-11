// function Auto(_marca, _modelo, _anio) {
//     const marca = _marca;
//     const modelo = _modelo;
//     this.anio = _anio;

//     this.getMarca = _marca;
//     this.getModelo = _modelo;
// }

// const marca = prompt("Ingresá la marca de tu auto");
// const modelo = prompt("Ingresá el modelo de tu auto");
// const anio = parseInt(prompt("Ingresá el año de tu auto"));

// let nuevoAuto = new Auto(marca, modelo, anio);

// if (nuevoAuto.anio >= 2015) {
//     alert("Tu auto califica para formar parte de nuestra empresa");
// } else if (nuevoAuto.anio <= 2014) {
//     if (confirm("Podrías conseguir un auto más nuevo? Tu auto no califica para formar parte de nuestra empresa."))
//         alert("Entonces al conseguirlo podrás formar parte de la empresa.");
//     else alert("No calificás para formar parte de nuestra empresa.");
// } else {
//     alert("No calificás para formar parte de nuestra empresa.");
// }

// console.log(nuevoAuto);
// let seguro;
// const base = 2500;

// if (nuevoAuto.anio >= 2015 && nuevoAuto.anio <= 2017) {
//     seguro = base * 1.15;
// } else if (nuevoAuto.anio <= 2014) {
//     seguro = base * 1.25;
// } else if (nuevoAuto.anio >= 2018) {
//     seguro = base * 1.05;
// } else {
//     seguro = base * 1.30;
// }

// console.log("El costo del seguro para tu auto es " + "$" + seguro)

let marcas = ["Renault", "Volkswagen", "Peugeot", "Chevrolet", "Ford", "Fiat"]
console.log("La primer marca de la lista es " + marcas[0]);
console.log(marcas.length);


parrafo = document.querySelector('#titulos')
parrafo.innerText = 'Bienvenidos!'
parrafo.classList = 'fondo__titulos--h2'


window.onload = function() {
    const boton = document.getElementById("boton");
    boton.addEventListener("click", function(event) {
        const name = document.getElementById("name");
        if (name.value != "") {
            let contenedor = document.createElement("div");
            contenedor.classList = 'fondo__titulos--h4';
            contenedor.innerHTML = `
                <h2>Nombre: ${name.value}</h2>
                <h2>Email: ${email.value}</h2>
                <h2>Marca: ${marca.value}</h2>
                <h2>Modelo: ${modelo.value}</h2>
                <h2>Año: ${anio.value}</h2>
                <button onclick="eliminar(event)" class = "btn btn-primary">Eliminar</button>
            `;

            document.getElementById("container").appendChild(contenedor);
        }
    });
};

function eliminar(event) {
    event.target.parentElement.parentElement.removeChild(
        event.target.parentElement
    );
}

let conductoresRegistrados = { 'Luis': 1, 'Mario': 2, 'Julia': 3 };
localStorage.setItem('conductoresRegistrados', JSON.stringify(conductoresRegistrados));
let listConductores = localStorage.getItem('conductoresRegistrados');
console.log('Los conductores registrados son: ', JSON.parse(listConductores));

$(document).ready(function() {
    $(window).scroll(function() {
        if ($(document).scrollTop() > 50) {
            $("h5").addClass("test");
        } else {
            $("h5").removeClass("test");
        }
    });
});

// ! Scroll up

document.getElementById("button-up").addEventListener("click", scrollUp);

function scrollUp() {
    var currentScroll = document.documentElement.scrollTop;

    if (currentScroll > 0) {
        window.requestAnimationFrame(scrollUp);
        window.scrollTo(0, currentScroll - currentScroll / 10);
    }
}

///

buttonUp = document.getElementById("button-up");

window.onscroll = function() {
    var scroll = document.documentElement.scrollTop;

    if (scroll > 175) {
        buttonUp.style.transform = "scale(1)";
    } else if (scroll < 500) {
        buttonUp.style.transform = "scale(0)";
    }
};

// ! Boton de animacion con jQuery

$("button.animacion").click(function() {
    $("p.texto").slideDown(1000, function() {});
});



// ! Esta era la version de AJAX sin jQuery
// document.querySelector('#dolar').addEventListener('click', function() {
//     obtenerDatos('dolaroficial');
// });

// document.querySelector('#dolarblue').addEventListener('click', function() {
//     obtenerDatos('dolarblue');
// });

// document.querySelector('#dolarbolsa').addEventListener('click', function() {
//     obtenerDatos('dolarbolsa');
// });

// function obtenerDatos(valor) {

//     let url = `https://api-dolar-argentina.herokuapp.com/api/${valor}`;

//     const api = new XMLHttpRequest();
//     api.open('GET', url, true);
//     api.send();

//     api.onreadystatechange = function() {

//         if (this.status == 200 && this.readyState == 4) {

//             let datos = JSON.parse(this.responseText);
//             console.log(datos);
//             let resultado = document.querySelector('#resultado');
//             resultado.innerHTML = '';



//             resultado.innerHTML = `<li>El precio para la compra es: $${datos.compra} El precio para la venta es: $${datos.venta}</li>`
//             resultado.classList = 'fondo__titulos--h2';

//         }
//     }

// }

// ! MAPA con Leaflet

let map = L.map("map").setView([-34.59624, -58.40192], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([-34.59624, -58.40192])
    .addTo(map)
    .bindPopup("Oficinas Guau!tos.<br> Buenos Aires, Argentina.")
    .openPopup();


// ! Dolar con Jquery y AJAX INSTALAR extension Allow CORS en el navegador o no funciona

document.querySelector('#dolar').addEventListener('click', function() {
    $.ajax({
        url: 'https://api-dolar-argentina.herokuapp.com/api/dolaroficial', //un archivo json con datos de usuarios: nombre, apellido, etc
        dataType: "json",
        success: function(data) {
            console.log(data);
            let resultado = document.querySelector('#resultado');
            resultado.innerHTML = '';

            resultado.innerHTML = `<li>El precio para la compra es: $${data.compra} El precio para la venta es: $${data.venta}</li>`
            resultado.classList = 'fondo__titulos--h3';
        }
    });

});

document.querySelector('#dolarblue').addEventListener('click', function() {
    $.ajax({
        url: 'https://api-dolar-argentina.herokuapp.com/api/dolarblue', //un archivo json con datos de usuarios: nombre, apellido, etc
        dataType: "json",
        success: function(data) {
            console.log(data);
            let resultado = document.querySelector('#resultado');
            resultado.innerHTML = '';

            resultado.innerHTML = `<li>El precio para la compra es: $${data.compra} El precio para la venta es: $${data.venta}</li>`
            resultado.classList = 'fondo__titulos--h3';
        }
    });

});

document.querySelector('#dolarbolsa').addEventListener('click', function() {
    $.ajax({
        url: 'https://api-dolar-argentina.herokuapp.com/api/dolarbolsa', //un archivo json con datos de usuarios: nombre, apellido, etc
        dataType: "json",
        success: function(data) {
            console.log(data);
            let resultado = document.querySelector('#resultado');
            resultado.innerHTML = '';

            resultado.innerHTML = `<li>El precio para la compra es: $${data.compra} El precio para la venta es: $${data.venta}</li>`
            resultado.classList = 'fondo__titulos--h3';
        }
    });

});

// ! Calendario

var mes_text = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

var dia_text = ["Lun", "Mar", "Mie", "Juv", "Vie", "Sab", "Dom"];

estructurar();

function estructurar() {
    for (m = 0; m <= 11; m++) {
        //Mes
        let mes = document.createElement("DIV");
        mes.className = "mes";
        document.getElementById("DIV").appendChild(mes);
        //Tabla
        let tabla_mes = document.createElement("TABLE");
        tabla_mes.className = "tabla_mes";
        mes.appendChild(tabla_mes);
        //Título
        let titulo = document.createElement("CAPTION");
        titulo.className = "titulo";
        titulo.innerText = mes_text[m];
        tabla_mes.appendChild(titulo);
        //Cabecera
        let cabecera = document.createElement("THEAD");
        tabla_mes.appendChild(cabecera);
        let fila = document.createElement("TR");
        cabecera.appendChild(fila);
        for (d = 0; d < 7; d++) {
            let dia = document.createElement("TH");
            dia.innerText = dia_text[d];
            fila.appendChild(dia);
        }
        //Cuerpo
        let cuerpo = document.createElement("TBODY");
        tabla_mes.appendChild(cuerpo);
        for (f = 0; f < 6; f++) {
            let fila = document.createElement("TR");
            cuerpo.appendChild(fila);
            for (d = 0; d < 7; d++) {
                let dia = document.createElement("TD");
                dia.innerText = "";
                fila.appendChild(dia);
            }
        }
    }
}

numerar();

function numerar() {
    for (i = 1; i < 366; i++) {
        let fecha = fechaPorDia(2017, i);
        let mes = fecha.getMonth();
        let select_tabla = document.getElementsByClassName('tabla_mes')[mes];
        let dia = fecha.getDate()
        let dia_semana = fecha.getDay();
        if (dia == 1) { var sem = 0; }
        select_tabla.children[2].children[sem].children[dia_semana].innerText = dia;
        if (dia_semana == 6) { sem = sem + 1; }
    }
}

function fechaPorDia(año, dia) {
    var date = new Date(año, 0);
    return new Date(date.setDate(dia));
}