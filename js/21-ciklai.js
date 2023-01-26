console.clear();
/*
Ciklai: for, for-of, while, do-while, foreach,
        map, filter, sort, reduce,
        for-in,
        ...
*/

const marks = [10, 2, 8, 4, 6];

// FOR
let sumFor = 0;
for (let i = 0; i < marks.length; i++) {
    const mark = marks[i];
    sumFor += mark;
}
console.log('FOR vidurkis:', sumFor / marks.length);

// FOR-OF
let sumForOf = 0;
for (const mark of marks) {
    sumForOf += mark;
}
console.log('FOR-OF vidurkis:', sumForOf / marks.length);

// WHILE
let sumWhile = 0;
let iWhile = 0;
while (iWhile < marks.length) {
    sumWhile += marks[iWhile++];
}
console.log('WHILE vidurkis:', sumWhile / marks.length);

let sumWhile2 = 0;
let iWhile2 = marks.length;
while (iWhile2) {
    sumWhile2 += marks[--iWhile2];
}
console.log('WHILE vidurkis:', sumWhile2 / marks.length);

// DO-WHILE
let sumDoWhile = 0;
let iDoWhile = 0;
do {
    sumDoWhile += marks[iDoWhile++];
} while (iDoWhile < marks.length);
console.log('DO-WHILE vidurkis:', sumDoWhile / marks.length);

// FOREACH
let sumForeach = 0;
marks.forEach(mark => {
    sumForeach += mark;
});
console.log('FOREACH vidurkis:', sumForeach / marks.length);

// MAP
const doubleMarks = marks.map(mark => mark * 2);
console.log(doubleMarks);

// FILTER
const goodMarks = marks.filter(mark => mark >= 4);
console.log(goodMarks);

// SORT
console.log('------------------');
const marksAsc = marks.sort();
console.log(marks);
console.log(marksAsc);

const dic = ['Petras', 'petras', 'Maryte', 'Jonas', 'Ona'];
dic.sort();
console.log(dic);

const numbers = [11, 10, 1, 5, 15, 25, 22, 0, 2, 50, 51, -11, -10, -1, -5, -15, -25, -22, -0, -2, -50, -51];
numbers.sort();
console.log(numbers);

numbers.sort((a, b) => a - b);
console.log(numbers);

numbers.sort((a, b) => b - a);
console.log(numbers);

const students = [
    {
        name: 'Petras',
        age: 99,
    },
    {
        name: 'Maryte',
        age: 88,
    },
    {
        name: 'Jonas',
        age: 55,
    },
    {
        name: 'Ona',
        age: 77
    },
];

students.sort();
console.log(students);

students.sort((a, b) => a.age - b.age);
console.log(students);

const luckyNumbers = [666, 6, 13, 9, 999, 4];

luckyNumbers.sort((a, b) => a > b ? 1 : -1);

console.log(luckyNumbers);