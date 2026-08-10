class Greeter {
    // 1. Define the rules (Overload Signatures)
    greet(name: string): string;
    greet(timeOfDay: string, name: string): string;

    // 2. The actual code (Implementation)
    greet(arg1: string, arg2?: string): string {
        // If arg2 exists, the user used the second rule
        if (arg2) {
            return `Good ${arg1}, ${arg2}!`;
        } 
        // Otherwise, they used the first rule
        return `Hello, ${arg1}!`;
    }
}

const welcome = new Greeter();
console.log(welcome.greet("Alice"));          // Output: "Hello, Alice!"
console.log(welcome.greet("morning", "Bob")); // Output: "Good morning, Bob!"