console.clear();
/*
OOP <--> class

new Class() --> sukuria tos Class'es objekta
*/

class Person {
    #name = '';
    #age = 0;

    constructor(vardas, amzius, options = {}) {
        this.#name = vardas;
        this.#age = amzius;
        this.period = options.laikasPilve || 9;    // kiek laiko buvo pilve
        this.teethCount = options.dantu || 0;
    }

    sayHi() {
        return `Labas, as ${this.#name} (${this.#age})!`;
    }

    printTeethSentence() {
        return `Labas, as vardu ${this.#name} ir turiu ${this.teethCount} dantu!`;
    }

    updateName(newName) {
        if (typeof newName !== 'string' || newName === '') {
            return 'ERROR: ...';
        }
        this.#name = newName;
        return 'OK';
    }

    updateTeeth(count) {
        if (!Number.isInteger(count) || count < 0 || count > 100) {
            return 'ERROR: ...';
        }
        this.teethCount = count;
        return 'OK';
    }
}

const petras = new Person('Petras', 99, { laikasPilve: 8 });
const maryte = new Person('Maryte', 88, { dantu: 1 });
const jonas = new Person('Jonas', 77);
const ona = new Person('Ona', 55, { laikasPilve: 7, dantu: 2 });

console.log(petras.sayHi());
console.log(maryte.sayHi());

console.log(petras.printTeethSentence());
petras.updateTeeth(2);
petras.updateName('Petriukas');
console.log(petras.printTeethSentence());

console.log(petras);

petras.klicka = 'Cipolinas';
console.log(petras);
