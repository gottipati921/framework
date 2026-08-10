//union types
function printId(id: number|string) {
  console.log(id)
}
printId('404')
printId(404)

//ternary operator
let age: number = 15;
let isAdult:String =age == 18 ? "Yes" : "No";
console.log("Is the person an adult?", isAdult);
console.log(`Is the person an adult? ${isAdult}`);

let name ="Sumana";
let greeting1 =name == "Hello" ? "Yes" : "No";
console.log("Is the name Hello?", greeting1);

let greeting: String = `Hello, ${name}! Welcome to TypeScript.`;
console.log(greeting);

//string concatenation and template literals
const firstName = "Derek"
const verb = "develops"
const frequency = "daily"
const name1 = firstName + " " + verb + " " + frequency
console.log(name1);
const literalName = `${firstName} ${verb} ${frequency}`
console.log(literalName);

//nullish coalescing operator
let username ="sumana";
let result = username??"Guest";
console.log(result);

let username1 ="";
let result1 = username1??"Guest";
console.log(result1);

let username2;
let result2 = username2??"Guest";
console.log(result2);

let name2=undefined;
let res = name2??"Guest";
console.log(res);

//optional chaining operator
let user : any =null;
console.log(user?.name); // Output: undefined*/

let user1:any=true; 
console.log(user1?.false); // Output: undefined


let user2 = { name: "Alice", age: 30 };
console.log(user2?.name);
