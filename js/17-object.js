console.clear();

/*
OBJECT - duomenu tipas {}
{
    key1: value1,
    key2: value2,
    ...,
    keyN: valueN
}
*/

const empty = {};
console.log(empty);

const person1 = {
    name: 'Petras',
    age: 99,
    isMarried: true,
}
const person2 = {
    name: 'Maryte',
    age: 88,
    isMarried: false,
}
console.log(person1);
console.log(person2);

// Sveiki, mano vardas yra VARDAS ir man XX metu.
const p1Name = person1['name'];
const p1Age = person1['age'];
const petras = `Sveiki, mano vardas yra ${p1Name} ir man ${p1Age} metu.`;
console.log(petras);

const maryte = `Sveiki, mano vardas yra ${person2['name']} ir man ${person2['age']} metu.`;
console.log(maryte);

console.log(person1['']);