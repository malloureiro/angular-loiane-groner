"use strict";
/**
 * Compilar arquivo: tsc <nomearquivo>.ts
 * Comandos watch:
 * tsc -init
 * tsc -w
 * Sempre que o arquivo .ts for alterado e salvo, o compilador irá rodar (watch)
*/
var Student = /** @class */ (function () {
    function Student(firstName, middleName, lastName) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.fullName = this.firstName + " " + this.middleName + " " + this.lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("Mariana", "Lopes", "Loureiro");
document.body.innerHTML = greeter(user);
function sortPerson(a) {
    var result = a.slice(0);
}
sortPerson([]);
