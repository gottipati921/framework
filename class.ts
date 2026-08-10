class person{
    name:string= 'sumana';
    age:number= 25;
    display():void{
        console.log(`My name is ${this.name} and my age is ${this.age}`);
}
}
let p1 = new person();
p1.display();