// Código para el cuadrado
console.group("Cuadrados");

var ladoCuadrado = 5; 
console.log("Los lados del cuadrado miden: " + ladoCuadrado);

var perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado);

var areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es: " + areaCuadrado);

console.groupEnd();

//Código Triángulo

console.group("Triángulos");
var lado1Triangualo = 6;
var lado2Triangualo = 6;
var baseTriangulo = 4;
var alturaTriangulo = 5.5;

console.log(
    "Los lados del triangulo miden: " 
    + lado1Triangualo + "cm "
    + lado2Triangualo + "cm "
    + baseTriangulo + "cm "
    + alturaTriangulo + "cm ");

var perimetroTriangulo = lado1Triangualo + lado2Triangualo + baseTriangulo;
console.log("El perimetro del triángulo mide: " + perimetroTriangulo);

var areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El área del triangulo es: " + areaTriangulo);
console.groupEnd();

