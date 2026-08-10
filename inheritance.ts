class Animal1{

eat():void{
    console.log("animal is eating!!!");
}

}

class Cat1 extends Animal1{

    eat():void{
        console.log('cat eats meat');
    }

}

 const v1 = new Cat1();
 v1.eat();
 
 
 //ts-node inheritance.ts