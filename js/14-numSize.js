console.clear();

function numSize(num) {
    if (typeof num !== 'number' || !isFinite(num)) {
        return 'ERROR: duok skaiciu';
    }

    const numAsText = '' + num;
    let size = 0;

    size = numAsText.length;

    if (num < 0) {
        size--;
    }

    if (num % 1 !== 0) {
        size--;
    }

    return size;
}

console.log(numSize());
console.log(numSize(true));
console.log(numSize('true'));
console.log(numSize([]));
console.log(numSize(null));
console.log(numSize(undefined));
console.log(numSize(Infinity));
console.log(numSize(-Infinity));
console.log(numSize(NaN));

console.log(numSize(5), '-->', 1);
console.log(numSize(567), '-->', 3);
console.log(numSize(37060123456), '-->', 11);
console.log(numSize(-5), '-->', 1);
console.log(numSize(-567), '-->', 3);
console.log(numSize(-37060123456), '-->', 11);
console.log(numSize(0), '-->', 1);
console.log(numSize(-0), '-->', 1);
console.log(numSize(3.14), '-->', 3);
console.log(numSize(-3.14), '-->', 3);

// console.log(numSize(1000000000000000000000), '-->', 22);
// console.log(numSize(10000000000000000000000000000000000000000000), '-->', 44);
// console.log(numSize(100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000), '-->', 105);
// console.log(numSize(-1000000000000000000000), '-->', 22);
// console.log(numSize(-10000000000000000000000000000000000000000000), '-->', 44);
// console.log(numSize(-100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000), '-->', 105);
// console.log(numSize(0.0000000000000000000000001), '-->', 26);
// console.log(numSize(1000000000000000000000.0000000000000000000000001), '-->', 26);