console.clear();

function beliekaninis(start, finish, divide) {
    let count = 0;

    for (let i = start; i <= finish; i++) {
        if (i % divide === 0) {
            count++;
        }
    }

    return count;
}

console.log(beliekaninis(0, 11, 3), '-->', 4);
console.log(beliekaninis(0, 11, 5), '-->', 3);
console.log(beliekaninis(0, 11, 7), '-->', 2);

console.log(beliekaninis(8, 31, 3), '-->', 8);
console.log(beliekaninis(8, 31, 5), '-->', 5);
console.log(beliekaninis(8, 31, 7), '-->', 3);

console.log(beliekaninis(-18, 18, 3), '-->', 13);
console.log(beliekaninis(-18, 18, 5), '-->', 7);
console.log(beliekaninis(-18, 18, 7), '-->', 5);

console.log('-----------------');

// console.log(beliekaninis(0, 1_000_000_000, 1_000_000), '-->', 1_001);
