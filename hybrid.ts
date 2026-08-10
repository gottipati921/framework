
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
        class C extends A{
            printC(){
                console.log("test3");

            }           
        }
        const a = new A();
        const c = new C();
        const b = new B();
        a.printA
        c.printA();
        c.printC();
        b.printA();
        b.printB();