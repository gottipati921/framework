class Animal{
        makeSound(): void {
        console.log("Some generic animal sound...");
    }

}

class Dog extends Animal {
    // We override the parent's makeSound method with a specific one
    makeSound(): void {
        console.log("Woof! Woof! 🐾");
    }
}

class Cat extends Animal {
    // We override it here too
     makeSound(): void {
        console.log("Meow~ 🐱");
    }
}

// Testing it out
const genericAnimal = new Animal();
genericAnimal.makeSound(); // Output: "Some generic animal sound..."

const myDog = new Dog();
myDog.makeSound();    // Output: "Woof! Woof! 🐾"