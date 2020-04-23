function specialPythagoreanTriplet(n) {
  let value = null;

  for (let i = 1; i < n; i++) {
    for (let j = 1; j <= i; j++) {
      for (let k = 1; k <= j; k++) {
        if (j ** 2 + k ** 2 === i ** 2) {
          if (i + j + k === n) {
            value = i * j * k;
          }
        }
      }
    }
  }

  return value;
}

console.log(specialPythagoreanTriplet(48));
