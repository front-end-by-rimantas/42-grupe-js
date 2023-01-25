console.clear();

const abc = 'abcdefghijklmnopqrstuvwxyz';

console.log(abc.at(2), abc[2]);
console.log(abc.at(-2), abc[abc.length - 2]);
console.log(abc.charAt(2));
console.log(abc.charCodeAt(0));

console.log('a', 'A', 'a' > 'A');
console.log('a'.charCodeAt(0), 'A'.charCodeAt(0));

console.log(abc.indexOf('F'));
console.log(abc.indexOf('defg'));

console.log('a'.repeat(5));
console.log('abc'.repeat(5));

let str = '';
for (let i = 0; i < 5; i++) {
    str += 'abc';
}
console.log(str);

console.log('Labas rytas'.replace('rytas', 'vakaras'));
console.log('Labas rytas'.replace('Katu', 'vakaras'));

console.log('Lalalalalala'.replace('la', 'ma'));
console.log('Lalalalalala'.replaceAll('la', 'ma'));

const abcArray = abc.split('');
console.log(abcArray);

const sakinys = 'Labas rytas sakau tau';
const zodynas = sakinys.split(' ');
console.log(zodynas);

console.log('Labas'.toUpperCase());
console.log('LaBaS'.toUpperCase());
console.log('LaBaS'.toLowerCase());


// vardas -> Vardas
// vARDAS -> Vardas
// Vardas -> Vardas

function formatName(name) {
    return name[0].toUpperCase() + name.slice(1).toLowerCase();
}

console.log(formatName('vardas'), '-->', 'Vardas');
console.log(formatName('Vardas'), '-->', 'Vardas');
console.log(formatName('vARDAS'), '-->', 'Vardas');
console.log(formatName('VARDAS'), '-->', 'Vardas');

const num = 5;
console.log(num.toString());
console.log('' + num);

console.log((777).toString());
console.log('' + 777);

const gg = '            Good game            ';
console.log(gg.trim().length);