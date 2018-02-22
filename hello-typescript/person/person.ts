/** 
 * Compilar arquivo: tsc <nomearquivo>.ts
 * Comandos watch: 
 * tsc -init
 * tsc -w
 * Sempre que o arquivo .ts for alterado e salvo, o compilador irá rodar (watch)
*/

interface Person {
    firstName: string;
    lastName: string;
}

class Student {
    fullName: string;

    constructor(public firstName: string, public middleName: string, public lastName: string) {
        this.fullName = this.firstName + " " + this.middleName + " " + this.lastName;
    }
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Mariana", "Lopes", "Loureiro");
document.body.innerHTML = greeter(user);

function sortPerson(a: Person[]) {
    var result = a.slice(0);
}

sortPerson([]);