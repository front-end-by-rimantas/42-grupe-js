console.clear();

function biggestNum(list) {
    if (!Array.isArray(list) || list.length === 0) {
        return 'ERROR: duok ne tuscia skaiciu sarasa';
    }

    let biggest = -Infinity;

    for (let i = 0; i < list.length; i++) {
        const num = list[i];
        if (typeof num !== 'number' || !isFinite(num)) {
            continue;
        }
        if (num > biggest) {
            biggest = num;
        }
    }

    if (biggest === -Infinity) {
        return 'ERROR: sarase nerastas nei vienas normalus skaicius';
    }

    return biggest;
}

console.log(biggestNum());
console.log(biggestNum(undefined));
console.log(biggestNum(true));
console.log(biggestNum('adsf'));
console.log(biggestNum(null));

console.log(biggestNum([0]), '-->', 0);
console.log(biggestNum([1, 2, 3]), '-->', 3);
console.log(biggestNum([1, 2, 3, 4, 5]), '-->', 5);
console.log(biggestNum([3, 4, 5, 1, 2]), '-->', 5);
console.log(biggestNum([69, 69, 69, 69, 66]), '-->', 69);
console.log(biggestNum([-1, -2, -3, -4, -5, -6, -7, -8]), '-->', -1);
console.log(biggestNum([-1000, -2000, -3000, -4000, -5000, -6000, -7000, -8000]), '-->', -1000);

console.log(biggestNum([-5, 2, 7, -2, 3]), '-->', 7);
console.log(biggestNum([-5, 2, 0, -11, 7, -2, 3]), '-->', 7);

console.log(biggestNum([-5, 2, 7, -2, 3, Infinity]), '-->', 7);
console.log(biggestNum([-5, 2, Infinity, 7, -2, 3]), '-->', 7);
console.log(biggestNum([Infinity, -5, 2, 7, -2, 3]), '-->', 7);

console.log(biggestNum([-5, 2, 7, -2, 3, 'fdsd']), '-->', 7);
console.log(biggestNum([-5, 2, 'fdsd', 7, -2, 3]), '-->', 7);
console.log(biggestNum(['fdsd', -5, 2, 7, -2, 3]), '-->', 7);

console.log(biggestNum([0, 0, true]), '-->', 0);
console.log(biggestNum([0, true, 0]), '-->', 0);
console.log(biggestNum([true, 0, 0]), '-->', 0);

console.log(biggestNum([-1, -1, false]), '-->', -1);
console.log(biggestNum([-1, false, -1]), '-->', -1);
console.log(biggestNum([false, -1, -1]), '-->', -1);

console.log(biggestNum([false, -Infinity, Infinity, true, null, [], undefined, 'dfasd', '']));