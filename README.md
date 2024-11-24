# Array Statistics

A simple package for calculating basic statistical measures from arrays.

## Installation
\`\`\`bash
npm install @yourusername/array-statistics
\`\`\`

## Usage
\`\`\`javascript
const { mean, median, mode } = require('@yourusername/array-statistics');

const numbers = [1, 2, 2, 3, 4, 5];
console.log(mean(numbers));   // 2.83
console.log(median(numbers)); // 2.5
console.log(mode(numbers));   // [2]
\`\`\`