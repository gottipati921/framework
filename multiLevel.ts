
 class A{
    printA(){
        console.log("test1");
    } 
}  
    class B extends A{
       printB(){
            console.log("test2");
        }  
    } 
        class C extends B{
            printC(){
                console.log("test3");

            }           
        }
        const c = new C();
        c.printA();
        c.printB();
        c.printC();

        let a =new A();
        a.printA();
        //a.printB(); //error
        //a.printC(); //error

        const b = new B();
        b.printA();
        b.printB();
        //b.printC(); //error