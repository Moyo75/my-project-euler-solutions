function largestPrimeFactor(number) {
  let primeArr = [],
    divisor = 2,
    largest;

  while (number >= 2) {
    if (number % divisor === 0) {
      primeArr.push(divisor);
      number = number / divisor;
    } else {
      divisor++;
    }
  }

  // console.log(primeArr); Array of prime numbers
  largest = primeArr.reduce((a, b) => Math.max(a, b));
  return largest;
}

console.log(largestPrimeFactor(1000));
