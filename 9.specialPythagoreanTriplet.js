function specialPythagoreanTriplet(n) {
  for (let i = 1; i < n; i++) {
    for (let j = 1; j <= i; j++) {
      for (let k = 1; k <= j; k++) {
        if (Math.pow(j, 2) + Math.pow(k, 2) === Math.pow(i, 2)) {
          if (i + j + k === n) {
            return i * j * k;
          }
        }
      }
    }
  }
}

console.log(specialPythagoreanTriplet(48));
