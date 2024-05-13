//String Manipulation Functions:


//Reverse a String
function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString("hello"));
//Count Characters:
function countCharacters(str) {
    return str.length;
}
console.log(countCharacters("hello"));
//Capitalize Words

function capitalizeWords(sentence) {
    return sentence.replace(/\b\w/g, function(char) {
        return char.toUpperCase();
    });
}
console.log(capitalizeWords("hello world")); 


//Array Functions

//Find Maximum and Minimum
function findMax(arr) {
    return Math.max(...arr);
}

function findMin(arr) {
    return Math.min(...arr);
}

const numbers = [5, 3, 9, 2, 11];
console.log(findMax(numbers)); // Output: 11
console.log(findMin(numbers));
//Sum of Array
function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

const numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers));
//Filter Array
function filterArray(arr, condition) {
    return arr.filter(condition);
}

const numbers = [1, 2, 3, 4, 5];
const evenNumbers = filterArray(numbers, num => num % 2 === 0);
console.log(evenNumbers);


//Mathematical Functions


//Factorial
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(5));
//Prime Number Check
function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(11)); // Output: true
console.log(isPrime(6));
//Fibonacci Sequence
function fibonacci(n) {
    let fibSeq = [0, 1];
    for (let i = 2; i < n; i++) {
        fibSeq.push(fibSeq[i - 1] + fibSeq[i - 2]);
    }
    return fibSeq.slice(0, n);
}

console.log(fibonacci(10));