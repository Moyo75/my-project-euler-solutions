function largestPrimeFactor(number) {
  const primeArr = [];
  let largest = 0;
  let divisor = 2;
  let paramNum = number;

  while (paramNum >= 2) {
    if (paramNum % divisor === 0) {
      primeArr.push(divisor);
      paramNum /= divisor;
    } else {
      divisor += 1;
    }
  }

  // console.log(primeArr); Array of prime numbers
  largest = primeArr.reduce((a, b) => Math.max(a, b));
  return largest;
}

console.log(largestPrimeFactor(1000));
