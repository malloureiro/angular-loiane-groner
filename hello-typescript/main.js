"use strict";
/**
 * Plain Vanilla Javascript
 */
var minhaVar = "minha variavel";
function minhaFunc(x, y) {
    return x + y;
}
/**
 * http://es6-features.org
 * ECMAScript 2015
 * Obs: é necessário um transpiler que transforma o ECMAScript 6 (não interpretado por todos os browsers) para javascript.
 * Um transpiler bastante conhecido é o BABEL (https://babeljs.io), assim como o Typescript é também um transpiler.
 */
var num = 2; // let declara uma variável "privada" e visível apenas dentro de um escopo
var PI = 3.14; // uma constante não pode ser modificada
//Javascript
var numeros = [1, 2, 3, 4, 5];
numeros.map(function (val) {
    return val * 2;
});
// Arrow Functions
var mapArr = numeros.map(function (i) { return i * 2; });
document.write("Resultado map: " + mapArr + "<br/>");
var filterArr = numeros.filter(function (i) { return i % 2 == 0; });
document.write("Resultado filter: " + filterArr + "<br/>");
var difference = function (num1, num2) { return num1 - num2; };
document.write("Resultado difference: " + difference(10, 5));
var multiply = function (num1, num2) {
    var result = num1 * num2;
    document.write("<p>O resultado da multiplicacao \u00E9: " + result + "</p>");
};
multiply(5, 50);
//Objetos
function createAnimal(name, owner) {
    return {
        name: name,
        owner: owner,
        getInfo: function () {
            return name + " is owned by " + owner;
        },
        address: {
            street: "Main St",
            city: "New York"
        }
    };
}
var dog = createAnimal("Costelinha", "Doug");
console.log(dog.getInfo());
console.log(dog.address.city);
console.log(Object.getOwnPropertyNames(dog));
// Classes
var Matematica = /** @class */ (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return Matematica;
}());
// Escopos
if (true) {
    var x = 10; // x existe apenas dentro do escopo do if
}
//console.log(x); // x não é visível aqui
if (true) {
    var y = 10;
}
console.log(y); // var y assume escopo global mesmo dentro do escopo do if
