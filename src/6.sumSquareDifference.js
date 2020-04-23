const sumOfSquares = (n) => {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i ** 2;
  }

  return sum;
};

const squareOfSum = (n) => {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum ** 2;
};

function sumSquareDifference(n) {
  return squareOfSum(n) - sumOfSquares(n);
}

console.log(sumSquareDifference(100));
