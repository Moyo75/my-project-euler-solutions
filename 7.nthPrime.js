function nthPrime(n) {
  let count = 0;

  for (let j = 2; j < 1000000; j++) {
    if (primeChecker(j)) {
      count++;
    }
    if (count === n) {
      return j;
    }
  }
}

const primeChecker = (number) => {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

console.log(nthPrime(10001));
// console.log(primeChecker(7));
