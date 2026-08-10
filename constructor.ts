//constructor is a special method in a class that is called when an instance of the class is created. It is used to initialize the properties of the class and can also perform any setup tasks that are necessary for the object. In TypeScript, you can define a constructor using the `constructor` keyword.
/* class Person {
        
    name;
    age;        

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
const p = new Person("John", 30);
console.log(p.age);
console.log(p.name);
 */
//
/* class Employee {
    name;
    age;
    
    constructor(empname:string,empage:number){
    this.name=empname;
    this.age=empage;
    console.log(`name is ${empname} && she is ${empage} old`);
}
display(): void {
    console.log(`My name is ${this.name} and my age is ${this.age}`);
}
    }        
const emp = new Employee('suma',35);
emp.name = 'sumana';
emp.age = 23;
emp.display();   */



//
class Car {
  // Automatically declares and assigns 'make' and 'year'
  constructor(public make: string, private year: number) {}

  getDetails():string|number {
    return `${this.make} - ${this.year}`;
  }
}