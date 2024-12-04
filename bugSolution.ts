function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];

// Solution 1: Modify the function to accept an array
function greeterArray(person: string[]): string {
  return "Hello, " + person.join(" ");
}
console.log(greeterArray(user)); // Output: Hello, Jane Doe

//Solution 2: Access the array element
console.log(greeter(user[0])); // Output: Hello, Jane