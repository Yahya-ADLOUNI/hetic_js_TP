results = [];

data = [
  1, 1, 2, 3, 4, 8, 8, 5, 6, 6, 9, 9, 10, 11, 12, 14, 48, 48, 51, 51, 1, 1, 1,
  51, 3, 3, 3, 51, 51, 51, 51, 51, 0,
];

const occurenceCounter = (data, results) => {
    data.forEach(number => {
        const index = results.findIndex(set => set[0] == number)
        if (index !== -1) return results[index] = [number, results[index][1] + 1];
        results.push([number, 1]);
    });
};

occurenceCounter(data, results);

console.log(results);