
// first question
let myvalue = "hello world"
console.log(typeof myvalue)

// second question
console.log("hello world".toUpperCase(), '---> toUpperCase')

// third question
let name = "mohsin hasan";
let result = name.replaceAll(" ", "");
console.log(result);

// fourth question
let str1 = "React";
let str2 = "react";
console.log(str1 === str2);

// fifth question
let str = "javascript";
let vowels = "aeiou";  // vowels list

let count = 0;

for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
        count++;
    }
}
console.log("Total vowels:", count);

// sixth question
console.log("user@example.com".slice(5, 16), '----> slice')


// seventh question
function greet(hour) {
    if (hour < 12) {
        return "Good morning";
    } else if (hour < 18) {
        return "Good afternoon";
    } else {
        return "Good evening";
    }
}

// Example usage:
console.log(greet(9));   // Good morning
console.log(greet(14));  // Good afternoon
console.log(greet(20));  // Good evening


// eight question
function checkPassword(password) {
    if (password.length >= 8 && /\d/.test(password)) {
        return "Strong";
    } else {
        return "Weak";
    }
}

// Example usage:
console.log(checkPassword("abc123"));      // Weak (length < 8)
console.log(checkPassword("abcd1234"));    // Strong
console.log(checkPassword("password"));    // Weak (no number)

// ninth question

function convert(str) {
    return str.replace(/\s+/g, "-");
}

console.log(convert("Learn JavaScript step by step"));
// Learn-JavaScript-step-by-step

// tenth question
function checkFrontend() {
    let str = "Frontend";
    if (str.startsWith("F")) {
        return "Yes, 'Frontend' starts with F";
    } else {
        return "No, 'Frontend' does not start with F";
    }
}

console.log(checkFrontend());












