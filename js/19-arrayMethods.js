console.clear();

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
console.log(array3);

const array4 = [...array1, 5, 6, ...array2];
console.log(array4);

const array5 = [...array1, ...array1, ...array1];
console.log(array5);

array1.push(777);
console.log(array1);
console.log(array3);

array1[0] = 99999;
console.log(array1);
console.log(array3);
console.log(array4);
console.log(array5);


console.log('---------------');

const a = [1, 1, 1];
const b = a;
const c = [...a];

console.log(a);
console.log(b);
console.log(c);

a[0] = 22;

console.log(a);
console.log(b);
console.log(c);

b[1] = 33;

console.log(a);
console.log(b);
console.log(c);

console.log('-----------');

function copyArray(list) {
    const list2 = [];

    for (let i = 0; i < list.length; i++) {
        list2.push(list[i]);
    }

    return list2;
}

const k = [1, 2, 3];
const l = copyArray(k);

k[0] = 111;
console.log(k);
console.log(l);

console.clear();

const marks = [10, 2, 8, 4, 6];

function double(n) {
    return n * 2;
}

const marks2x = marks.map(double);
console.log(marks);
console.log(marks2x);


const names = ['Petras', 'Maryte', 'Jonas', 'Ona'];

function abbr(str) {
    return str[0];
}

const abbr2 = str => str[0];

const namesAbbr = names.map(abbr);
const namesAbbr2 = names.map(abbr2);
const namesAbbr3 = names.map(function (str) {
    return str[0];
});
const namesAbbr4 = names.map(s => s[0]);

console.log(names);
console.log(namesAbbr);
console.log(namesAbbr2);
console.log(namesAbbr3);
console.log(namesAbbr4);

const numbers = [1, 2, 3, 4, 5, 6, 7];
const lyginiai = numbers.filter(n => n % 2 === 0);
const nelyginiai = numbers.filter(n => n % 2 !== 0);
console.log(lyginiai);
console.log(nelyginiai);

const students = ['Petras', 'Maryte', 'Jonas', 'Ona'];
const ilgiVardai = students.filter(s => s.length > 5);
const trumpiVardai = students.filter(s => s.length <= 5);
console.log(ilgiVardai);
console.log(trumpiVardai);

const trumpuVarduAbbr = students
    .filter(v => v.length <= 5)
    .map(v => v[0])
    .reverse()
    .join('-');
console.log(trumpuVarduAbbr);

