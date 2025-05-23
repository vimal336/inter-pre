const ProblemSolving = () => {
  const questionsAndAnswers = [
    {
      question: "Given an array [2,2,3,2,4,5,5] return an object that counts the occurrences of the each element ?",
      answer: (
        <>
### Explanation:
1. Start with an empty object `{}` as the accumulator.
2. Loop through each number in the array.
3. If the number exists in the object, increment its count.
4. If not, initialize it with `1`.
5. Return the final object with counts. <br/>



Initial State:
acc = {} (empty object, our initial value)
First iteration (num = 2):

acc[2] is undefined, so (acc[2] || 0) + 1 = 0 + 1 = 1

          <br />
          <br />
          Example:
          <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto max-w-full">
            <code className="whitespace-pre">
                
              {`
const arr = [2, 2, 3, 2, 4, 5, 5];

const countOccurrences = arr.reduce((acc, num) => {
  acc[num] = (acc[num] || 0) + 1;
  return acc;
}, {});

console.log(countOccurrences); //{ '2': 3, '3': 1, '4': 1, '5': 2 }

`}
            </code>
          </pre>
        </>
      ),
    },
    {
        question: "Find the Largest Number in an Array?",
        answer: (
          <>
  
            <br />
            <br />
            Example: with and without inbuilt function
            <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto max-w-full">
              <code className="whitespace-pre">
                  
                {`
  function findMax(arr) {
  let maxval = Math.max(...arr)
  return maxval;
}
console.log(findMax([10, 5, 20, 8])); // Output: 20


let arr = [34,45,22,26];

let max = arr[0];

function findMax(arr){
    for(let i=1; i<arr.length; i++){
        if(arr[i]>max){
            max=arr[i]
        }
    }
    return max
}

console.log(findMax([34,67,89,44]));
  
  `}
              </code>
            </pre>
          </>
        ),
      },
      {
        question: "Count Vowels in a String?",
        answer: (
          <>
  
            <br />
            <br />
            Example:
            <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto max-w-full">
              <code className="whitespace-pre">
                  
                {`
 
function countVowels(str) {
  let vowels = "aeiouAEIOU";
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) { // Check if the character is a vowel
      count++; // Increment count
    }
  }
  return count;
}

console.log(countVowels("madam")); // Output: 2

for of approach

const cVowels = (s) => {
    const vowels = "aeiouAEIOU";
    let count = 0;

    for (const char of s) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
};

const s = "Hello World";
console.log(cVowels(s))//3; 


  `}
              </code>
            </pre>
          </>
        ),
      },
      {
        question: "How parseInt Works?",
        answer: (
          <>

- `parseInt` stops reading when it encounters a non-numeric character.
- If the first character is invalid for base 10, it returns `NaN`.
            <br />
            <br />
            Example:
            <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto max-w-full">
              <code className="whitespace-pre">
                  
                {`
console.log(parseInt("10+2")); // 10
console.log(parseInt("7FM"));  // 7
console.log(parseInt("F7M"));  // NaN

  
  `}
              </code>
            </pre>
          </>
        ),
      },
      {
        question: "Factorial Sample program?",
        answer: (
          <>
            <br />
            <br />
            Example:
            <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto max-w-full">
              <code className="whitespace-pre">
                  
                {`
function para(fact){
    if(fact === 0 || fact === 1){
    return 1;
    }
    else{
       return fact * para(fact-1)
        }
    }
console.log(para(0));
  `}
              </code>
            </pre>
          </>
        ),
      },

      {
        question: "finds First and second maximum value?",
        answer: (
          <>
            <br />
            <br />
            Example:
            <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto max-w-full">
              <code className="whitespace-pre">
                  
                {`
function findMaxAndSecondMax(arr) {
    let maxi = arr.sort((a, b) => b - a); // Sort in descending order
    console.log("Maximum:", maxi[0]); // First element is max
    console.log("Second Maximum:", maxi[1]); // Second element is second max
}

// Example Usage:
findMaxAndSecondMax([10, 20, 5, 30, 25]); // Output: Maximum: 30, Second Maximum: 25
findMaxAndSecondMax([8, 8, 8]); // Output: Maximum: 8, Second Maximum: 8 (not ideal for unique second max)
  `}
              </code>
            </pre>
          </>
        ),
      },
      {
        question: "Remove Duplicate Array",
        answer: (
          <>
            <br />
            <br />
            Example:
            <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto max-w-full">
              <code className="whitespace-pre">
                  
                {`
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); 
// Output: [1, 2, 3, 4, 5]

let duplicate = [4,6,79,99,999,8,8];

let uniqueArray = [...new Set(duplicate)];
console.log(uniqueArray); //[ 4, 6, 79, 99, 999, 8 ]

  `}
              </code>
            </pre>
          </>
        ),
      },
      {
        question: "find method in js?",
        answer: (
          <>
  Returns only the first matching element in the array. <br/>
✔ Returns undefined if no match is found. <br/>
✔ Use .filter() if you need multiple matches instead of just the first one.<br/>
✔ Works well for finding objects in arrays (like user data)
            <br />
            <br />
            Example:
            <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto max-w-full">
              <code className="whitespace-pre">
                  
                {`
 
const words = ["apple", "banana", "grape", "blueberry"];

const foundWord = words.find(word => word.startsWith("b"));

console.log(foundWord); // "banana"

const numbers = [3, 5, 7];

const result = numbers.find(num => num % 2 === 0);

console.log(result); // undefined (no even numbers)

If no match is found, .find() returns undefined

let arr = [1,2,3,4,8,5,6,7]

const findmethod = arr.find((f)=>{
    let a = f>4
    return a
})

console.log(findmethod);//8

  `}
              </code>
            </pre>
          </>
        ),
      },
      {
        question: "Finding longest word?",
        answer: (
          <>
            <br />
            <br />
            Example:
            <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto max-w-full">
              <code className="whitespace-pre">
                  
                {`
 
function findLongestWord(str) {
  return str.split(" ").sort((a, b) => b.length - a.length)[0];
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); 
// Output: "jumped"

//Method :2 

function findLongestWord(str) {
  return str.split(" ").reduce((longest, currentWord) => 
    currentWord.length > longest.length ? currentWord : longest, "");
}

console.log(findLongestWord("The quick brown fox jumps over the lazy dog")); 
// Output: "jumps"



  `}
              </code>
            </pre>
          </>
        ),
      },
];

  return (
    <div className="p-6 mx-auto bg-white rounded-xl shadow-md space-y-6 sm:p-8">
      <h2 className="text-2xl font-bold text-center">
   Interview problem solving Questions & Answers
      </h2>
      <div className="space-y-6">
        {questionsAndAnswers.map((item, index) => (
          <div key={index} className="border-b pb-4 flex flex-col gap-2">
            <h3 className="text-lg font-semibold">{item.question}</h3>
            <div className="text-gray-700">{item.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProblemSolving;


