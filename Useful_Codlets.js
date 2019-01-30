// 소수판별

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) if (num % i === 0) return false;
  return num !== 1 && num !== 0;
};

const num = 17;
isPrime(num); // true

// 무작위 n개 조합 만들기

const result = [];
result.length = 2; // n=2

function combine(input, len, start) {
  if (len === 0) {
    console.log(result.join(' ')); // process here the result
    return;
  }
  for (let i = start; i <= input.length - len; i += 1) {
    result[result.length - len] = input[i];
    combine(input, len - 1, i + 1);
  }
}

const array = ['apple', 'banana', 'lemon', 'mango'];
combine(array, result.length, 0); // ['apple banana', 'apple lemon' , ...]
