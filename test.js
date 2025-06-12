const { average, standardDeviation } = require('./statistics');
const { generateChart } = require('./charts');

const data = [10, 20, 30, 40, 50];

console.log('Average:', average(data));
console.log('Standard Deviation:', standardDeviation(data));

generateChart('chart.png', ['A', 'B', 'C', 'D', 'E'], data).then(() => {
    console.log('Chart generated.');
});
