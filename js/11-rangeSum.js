console.clear();

function rangeSum(from, to) {
    if (typeof from !== 'number') {
        return 'ERROR: pirmasis parametras turi buti skaicius.';
    }
    if (!isFinite(from) || from % 1 !== 0) {
        return 'ERROR: pirmasis parametras turi buti sveikasis skaicius.';
    }

    if (typeof to !== 'number') {
        return 'ERROR: antrasis parametras turi buti skaicius.';
    }
    if (!Number.isInteger(to)) {
        return 'ERROR: antrasis parametras turi buti sveikasis skaicius.';
    }

    return 10;
}

/*
0 … 0           0
0 … 4           10
0 … 100         5050
574 … 815       kazkoks didelis skaicius
-50 … 50        0
-70 … 30        -2020
*/

console.log(rangeSum(true, 4));
console.log(rangeSum(4, false));
console.log(rangeSum('dfsd', 4));
console.log(rangeSum(4, 'ergg'));
console.log(rangeSum([], 4));
console.log(rangeSum(4, []));
console.log(rangeSum(null, 4));
console.log(rangeSum(4, null));
console.log(rangeSum(undefined, 4));
console.log(rangeSum(4, undefined));
console.log(rangeSum(4));
console.log(rangeSum());
console.log(rangeSum(0, 3.14));
console.log(rangeSum(3.14, 8));
console.log(rangeSum(3.14, 8.88));
console.log(rangeSum(0, Infinity));
console.log(rangeSum(Infinity, 8));
console.log(rangeSum(Infinity, 8.88));
console.log(rangeSum(0, -Infinity));
console.log(rangeSum(-Infinity, 8));
console.log(rangeSum(-Infinity, 8.88));
console.log(rangeSum(0, NaN));
console.log(rangeSum(NaN, 8));
console.log(rangeSum(NaN, NaN));

console.log(rangeSum(0, 4), '-->', 10);
console.log(rangeSum(0, 100), '-->', 5050);

// console.log(rangeSum(-50, 50), '-->', 0);
// console.log(rangeSum(0, 0), '-->', 0);
// console.log(rangeSum(-70, 30), '-->', -2020);
// console.log(rangeSum(574, 815), '-->');

console.assert(rangeSum(0, 4) === 10);
console.assert(rangeSum(0, 100) === 5050, [0, 100, 5050]);