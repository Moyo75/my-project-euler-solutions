function primeSummation(n) {
  let primeSum = 0;

  for (let i = 1; i < n; i += 2) {
    if (primeChecker(i)) {
      // console.log(i);
      primeSum += i;
    }
  }

  return primeSum + 1;
}

const primeChecker = (number) => {
  for (let i = 3; i <= Math.sqrt(number); i += 2) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

console.log(primeSummation(2000000));
