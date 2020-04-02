function sumSquareDifference(n) {
  return squareOfSum(n) - sumOfSquares(n);
}

const sumOfSquares = n => {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum = sum + Math.pow(i, 2);
  }

  return sum;
};

const squareOfSum = n => {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum = sum + i;
  }

  return Math.pow(sum, 2);
};

console.log(sumSquareDifference(100));
