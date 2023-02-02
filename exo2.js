const maxFinder = (a, b, c) => {
    const array = [a, b, c];
    array.sort((a, b) => a - b);
    return array[2];
};

console.log(maxFinder(1, 2, 3) === 3);
console.log(maxFinder(6, 5, 4) === 6);
console.log(maxFinder(6, 9, 5) === 9);
