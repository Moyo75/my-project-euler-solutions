const palindrome = num => {
  const pal = parseInt(
    num
      .toString()
      .split("")
      .reverse()
      .join("")
  );
  return pal === num;
};

const largestPalPro = n => {
  let x,
    y,
    product,
    max = 0;

  for (x = Math.pow(10, n - 1); x < Math.pow(10, n); x++) {
    for (y = x; y < Math.pow(10, n); y++) {
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
