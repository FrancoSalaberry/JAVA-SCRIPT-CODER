function calculadoraseguro() {
alert("BIENVENIDO AL SIMULADOR DE SEGURO PARA AUTO DE NUESTRA EMPRESA, A CONTINUACION DEBERA LLENAR LAS CASILLAS CON INFORMACION DE USTED Y SU AUTO PARA QUE PODAMOS HACER UNA EVALUACION Y DARLE EL MEJOR PRECIO");

let Nombre = prompt("Ingresa tu nombre");
console.log(Nombre);

let Apellido = prompt("Ingresa tu apellido");
console.log(Apellido);

let Documento = prompt("Ingresa tu DNI");
console.log(Documento);

let Edad = prompt("Ingrese su edad");
console.log(Edad);

let ValorAuto = prompt("Ingrese el valor estimado de su automovil");
console.log(ValorAuto);

let MarcaAuto = prompt("Ingrese la marca de su movil: Ford, Chevrolet, Citroen o Fiat ");
console.log(MarcaAuto);

let TipoAuto = prompt("Ingrese su tipo de movil: Suv, Coupe, Camioneta o Sedan");
console.log(TipoAuto);

let TipoPlan = prompt("Escriba el tipo de plan: Basico o Premium");
console.log(TipoPlan);

// Aqui puse los costos por la marca del automóvil
let valorFord = 2000;
let valorChevrolet = 1500;
let valorCitroen = 2500;
let valorFiat = 1800;

// Aqui puse los costos por el tipo de automóvil
let valorSUV = 2000;
let valorCoupe = 1500;
let valorCamioneta = 2500;
let valorSedan = 1800;

// Aqui puse los valores para el tipo de plan
let ValorBasico = 1000;
let ValorPremium = 4000;

let CostoMarca = 0;
let CostoTipo = 0;
let CostoPlan = 0;
let CostoBase = ValorAuto * 0.02;

// Aca hago para que la calculadora tome los valores segun la opcion que elija el usuario de costo por marca
switch (MarcaAuto.toLowerCase()) {
case "ford":
    CostoMarca = valorFord;
    break;
case "chevrolet":
    CostoMarca = valorChevrolet;
    break;
case "citroen":
    CostoMarca = valorCitroen;
    break;
case "fiat":
    CostoMarca = valorFiat;
    break;
default:
    alert("Marca de automóvil no reconocida.");
}

// Aca lo mismo que lo anterior solo que por costo de tipo de automóvil
switch (TipoAuto.toLowerCase()) {
case "suv":
    CostoTipo = valorSUV;
    break;
case "coupe":
    CostoTipo = valorCoupe;
    break;
case "camioneta":
    CostoTipo = valorCamioneta;
    break;
case "sedan":
    CostoTipo = valorSedan;
    break;
default:
    alert("Tipo de automóvil no reconocido.");
}

// Costo por tipo de plan
switch (TipoPlan.toLowerCase()) {
case "basico":
    CostoPlan = ValorBasico;
    break;
case "premium":
    CostoPlan = ValorPremium;
    break;
default:
    alert("Tipo de plan no reconocido.");
}

// Sumamos los Costos parciales
let costoTotal = CostoBase + CostoMarca + CostoTipo + CostoPlan;

// Aplicar aumento del 10% si la edad supera los 70 años por los riesgos de menor vision y reflejos que presentan, uso el if ya que en caso de que sea menor no se aplica ese 10%
if (parseInt(Edad) > 70) {
    costoTotal *= 1.1;
}

console.log(`El costo total del seguro es de $${costoTotal}.`);
alert(`El costo total del seguro es de $${costoTotal}.`);
}



//a partir de aca pregunta si quiere hacer otro simulador (bucle)
let deseaContinuar = true;

while (deseaContinuar) {
    calculadoraseguro();

    let respuesta = prompt("¿Desea realizar otra simulación? (Sí/No)").toLowerCase();
    deseaContinuar = respuesta === 'si';
}

