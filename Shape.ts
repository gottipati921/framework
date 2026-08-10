export abstract class Shape {
    abstract area(): number;
    abstract perimeter(): number;
    

    display(): void {
        console.log("Shape class constructor called");
    }
}
