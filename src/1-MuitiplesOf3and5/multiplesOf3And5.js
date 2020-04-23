/**
 * Calculate the sum of all the multiples of 3 or 5 below number.
 *
 * @param number
 * @return {number}
 */

export default function multiplesOf3and5(number) {
  let sum = 0;

  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  return sum;
}

// console.log(multiplesOf3and5(200));
