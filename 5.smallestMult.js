function smallestMult(n) {
  let x = 1;

  do {
    x++;
  } while (!divisible(n, x));

  return x;
}

const divisible = (upTo, currentVal) => {
  for (let i = 2; i <= upTo; i++) {
    if (currentVal % i !== 0) {
      return false;
    }
  }
  return true;
};

console.log(smallestMult(5));
