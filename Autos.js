const autos = [
    { id:1, Nombre:'Ford Explorer' , marca: 'Ford', precio: 5000000, año: 2015, tipo: 'SUV' , img:'Ford.Explorer.jpg' },
    { id:2, Nombre:'Chevrolet Camaro' , marca: 'Chevrolet', precio: 3000000, año: 2010, tipo: 'Coupe', img:'Chevrolet.Camaro.jpg' },
    { id:3, Nombre:'Citroen Berlingo' , marca: 'Citroen', precio: 4000000, año: 2018, tipo: 'Camioneta', img:'Citroen.Berlingo.jpg' },
    { id:4, Nombre:'Fiat Cronos' , marca: 'Fiat', precio: 8000000, año: 2021, tipo: 'Sedán' , img:'Fiat.Cronos.jpg'},
    { id:5, Nombre:'Ford Mustang' , marca: 'Ford', precio: 6000000, año: 2013, tipo: 'Coupe' , img:'Ford.Mustang.jpg'},
    { id:6, Nombre:'Chevrolet Tahoe' , marca: 'Chevrolet', precio: 7000000, año: 2019, tipo: 'SUV' , img:'Chevrolet.Tahoe.jpg'},
    { id:7, Nombre:'Citroen C4 Aircross' , marca: 'Citroen', precio: 4500000, año: 2012, tipo: 'Camioneta' , img:'Citroen.C4.Aircross.jpg'},
    { id:8, Nombre:'Fiat Tipo' , marca: 'Fiat', precio: 9000000, año: 2020, tipo: 'Sedán' , img:'Fiat.Tipo.jpg'},
    { id:9, Nombre:'Ford Fiesta' , marca: 'Ford', precio: 5500000, año: 2008, tipo: 'Coupe' , img:'Ford.Fiesta.jpg'},
    { id:10, Nombre:'Chevrolet Cruze' , marca: 'Chevrolet', precio: 3500000, año: 2011, tipo: 'Sedán' , img:'Chevrolet.Cruze.jpg'},
    { id:11, Nombre:'Citroen C3 Aircross' , marca: 'Citroen', precio: 2200000, año: 2007, tipo: 'Camioneta' , img:'Citroe.c3.jpg'},
    { id:12, Nombre:'Fiat 500X' , marca: 'Fiat', precio: 7500000, año: 2014, tipo: 'SUV' , img:'Fiat.X500.jpg'},
    { id:13, Nombre:'Ford Focus' , marca: 'Ford', precio: 2800000, año: 2006, tipo: 'Coupe' , img:'Ford.Focus.jpg'},
    { id:14, Nombre:'Chevrolet Malibu' , marca: 'Chevrolet', precio: 3200000, año: 2012, tipo: 'Sedán' , img:'Chevrolet.Malibu.jpg'},
    { id:15, Nombre:'Citroen C5 Aircross' , marca: 'Citroen', precio: 3800000, año: 2009, tipo: 'Camioneta' , img:'Citroen.C5.jpg'},
];


let precioMaximo = document.getElementById('valorauto2');
let añoMinimo = document.getElementById('anio2');

valorauto2.addEventListener("input", (event) => {
    precioMaximo = parseInt(event.target.value);
    console.log(precioMaximo);
});

anio2.addEventListener("change", (event) => {
    añoMinimo = parseInt(event.target.value);
    console.log(añoMinimo);
});

let buscarautoprecio = document.getElementById("Buscar2")
let mensajePrecioMenor = document.getElementById("mensajePrecioMenor");


buscarautoprecio.addEventListener("click", () => {
    autosFiltradosPorPrecio.length = 0;
    mensajePrecioMenor.textContent = ""; // Limpiar mensaje anterior si lo hay
    mensajePrecioMenor.style.display = "none";
    
    // Mostrar el gif de cargando
    const cargandoDiv = document.getElementById('cargando');
    cargandoDiv.innerHTML = '<img src="./images/cargando_auto.gif" alt="Cargando...">';
    cargandoDiv.style.display = 'block';

    // Simular tiempo de carga
    setTimeout(() => {
        Buscarautoprecio();
        
        if (precioMaximo < 2800000) {
            mensajePrecioMenor.textContent = "El precio mínimo para buscar autos es de $2,800,000.";
            mensajePrecioMenor.style.display = "block";
        } else {
            crearHtml(autosFiltradosPorPrecio);
            localStorage.setItem("precio", precioMaximo);
        }

        cargandoDiv.innerHTML = ''; 
        cargandoDiv.style.display = 'none';
    }, 2000); // 2seg
});


let buscarautoaño = document.getElementById("Buscaraño")
buscarautoaño.addEventListener("click", () => {
    autosFiltradosPorAño.length = 0;
    mensajePrecioMenor.textContent = ""; 
    mensajePrecioMenor.style.display = "none";
    

    const cargandoDiv = document.getElementById('cargando');
    cargandoDiv.innerHTML = '<img src="./images/cargando_auto.gif" alt="Cargando...">';
    cargandoDiv.style.display = 'block';

    setTimeout(() => {
        BuscarAutoaño();
        crearHtml(autosFiltradosPorAño);
        localStorage.setItem("año", añoMinimo);

        // Esconde el gif
        cargandoDiv.innerHTML = ''; 
        cargandoDiv.style.display = 'none';
    }, 2000); 
});

let precioGuardado = localStorage.getItem("precio")
console.log(precioGuardado);

let añoGuardado = localStorage.getItem("año");
console.log(añoGuardado);

const autosFiltradosPorPrecio = [];
const autosFiltradosPorAño = [];

function BuscarAutoaño() {
    autos.forEach(auto => {
        (auto.año >= añoMinimo && autosFiltradosPorAño.push(auto));
    }); 
}

    function Buscarautoprecio() {
    autos.forEach(auto => {
        (auto.precio <= precioMaximo && autosFiltradosPorPrecio.push(auto));
    });
    };

// filtra por precio del mas caro al mas barato
autosFiltradosPorPrecio.sort((a, b) => b.precio - a.precio);

//filtra por año del mas viejo al mas nuevo
autosFiltradosPorAño.sort((a, b) => a.año - b.año);


// Autos filtrados por precio
console.log('Autos filtrados por precio (ordenados de más caro a más barato):', autosFiltradosPorPrecio);

// Autos filtrados por año
console.log('Autos filtrados por año (ordenados de más viejo a más nuevo):', autosFiltradosPorAño);




function crearHtml(el) {

    let resultadoautos2 = document.getElementById("resultadoautos2");
    

    resultadoautos2.innerHTML = "";
    
    el.forEach(({img, Nombre, precio, marca, año, id}) => {
        let html = `<div class="card">
            <img src="./images/Autos/${img}" alt="${Nombre}">
            <hr>
            <h3>${Nombre}</h3>
            <p>Precio: $${precio} </p>
            <p>Marca: ${marca} </p>
            <p>Año: ${año} </p>
            <div class="card-action">
            <a href="./FormAuto.html"target="_blank"><button id="${id}">CONSULTAR</button></a>
            </div>
        </div>`;
        
        
        resultadoautos2.innerHTML += html;
    });
}

