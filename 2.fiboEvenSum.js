function fiboEvenSum(n) {
  let arr1 = [],
    evenArr = [];

  arr1[0] = 0;
  arr1[1] = 1;

  for (let i = 2; i <= n; i++) {
    arr1[i] = arr1[i - 1] + arr1[i - 2];
  }

  //console.log(arr1);

  evenArr = arr1
    .filter(x => x <= n)
    .filter(x => x % 2 === 0)
    .reduce((x, y) => x + y);

  return evenArr;
}

console.log(fiboEvenSum(4000000));
