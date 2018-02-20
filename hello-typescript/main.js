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
 * Um transpiler bastante conhecido é o BABEL (https://babeljs.io)
 */
var num = 2;
var PI = 3.14;
//Javascript
var numeros = [1, 2, 3];
numeros.map(function (val) {
    return val * 2;
});
// Arrow Functions
numeros.map(function (val) { return val * 2; });
// Classes
var Matematica = /** @class */ (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return Matematica;
}());
