import { Shape } from "./Shape";
class Circle extends Shape {
    radius = 100; 
    perimeter():number {
        return 2 * Math.PI * this.radius;
    }
    area():number {
        return Math.PI * this.radius ** 2;
    }
   
}
const c = new Circle();
console.log(c.perimeter()); 
console.log(c.area());
c.display();
