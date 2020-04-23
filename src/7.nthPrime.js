const primeChecker = (number) => {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

function nthPrime(n) {
  let count = 0;
  let x = null;

  for (let j = 2; j < 1000000; j++) {
    if (primeChecker(j)) {
      count++;
    }
    if (count === n) {
      x = j;
    }
  }

  return x;
}

console.log(nthPrime(10001));
// console.log(primeChecker(7));
