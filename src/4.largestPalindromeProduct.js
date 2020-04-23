const palindrome = (num) => {
  const pal = parseInt(num.toString().split('').reverse().join(''), 10);
  return pal === num;
};

const largestPalPro = (n) => {
  let x;
  let y;
  let product;
  let max = 0;

  for (x = 10 ** n - 1; x < 10 ** n; x++) {
    for (y = x; y < 10 ** n; y++) {
      product = x * y;

      if (palindrome(product)) {
        if (max < product) {
          max = product;
        }
      }
    }
  }

  return max;
};

console.log(largestPalPro(2));
