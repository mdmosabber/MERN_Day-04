class Parent{
    firstName(){
        console.log('Md. Mosabber');
    }
    lastName(){
        console.log('Hossen');
    }
}

class Child extends Parent{
    fullName(){
        console.log("Md. Mosabber Hossen");    
    }
    lastName(){
        console.log('Hossen abir');
    }
}

var obj = new Child;


obj.firstName();
obj.lastName();

obj.fullName();

var parentObj = new Parent;
parentObj.firstName();
parentObj.lastName();