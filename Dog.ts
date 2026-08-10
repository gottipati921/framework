import {Animal} from "./Animal";
//import {Animal} = require("./Animal");

class Dog extends Animal
{
    bark():void{
        console.log("Dog is barking");
    }
}

const d = new Dog();
d.eat();
d.bark(); 