class MyClass{
    constructor(a, b){
        this.variable1 = a;
        this.variable2 = b;

        console.log(this.variable1 + this.variable2);
    }

    addition(){
       return this.variable1 + this.variable2;
    }
}


var obj = new MyClass(30, 50);

console.log( obj.addition() );