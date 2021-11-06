const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

//1. Break array down into into individual words
//2. Capitalize first letter of eveery word
//3. rejoin strings together

let titleCased = () => {
  return tutorials.map((string) => {
    const split = string.split(" ");
    for (let i = 0; i < split.length; i++) {
      split[i] = split[i][0].toUpperCase() + split[i].slice(1);
    }

    return split.join(" ");
  });
};

console.log(titleCased());

// const titleCased = tutorials.map((string) => {
//     const split = string.split(" ")
//     for (let i = 0; i < split.length; i++) {
//       split[i]=split[i][0].toUpperCase()+split[i].slice(1)
//     }

//       return split.join(" ")

// })

// makes first character in string upperCase
// return string.charAt(0).toUpperCase() + string.slice(1);

// function titleCased(string) {
//     string.split(" ")
//     return string
// }

// return string.split(tutorials)
