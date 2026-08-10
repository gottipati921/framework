function print(){
    console.log("Hello World");
}

function printname(name: string){
   console.log(`Hello ${name}`)
} 
printname('Sumana');

function printage(age: number):number{
   return age;
}
    
function printdetails(name: string, age: number): string{
    return `My name is ${name} and my age is ${age}`;
}

console.log(printdetails("sumana", 23));
print();
console.log(printage(23));

//arrow function
let printdetails1 = (name: string, age: number): string => `My name is ${name} and my age is ${age}`;
console.log(printdetails1("gottipati", 23));

//array
function printFruits(fruits:string[]){
    fruits.forEach((fruit)=>
    {
        console.log(fruit);
    });
}
printFruits(['Mangoes','Bananas','Apples']);

//object
function employeeDetails(emp:{name:string,age:number})
{
console.log(emp.name)
console.log(emp.age);
}
employeeDetails({name:"sumana",age:32});


function launchBrowser(browser:string){
    console.log(`${browser} is launched`);
}
launchBrowser("chrome");


function login(){
    console.log("login successful");
}
function dashboard(){
    console.log("dashboard opened");
}
function app(){
    login();
    dashboard();
}
app();

//callBack function

