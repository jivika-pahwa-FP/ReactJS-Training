// class declaration -> declaring a class using class keyword.

class A {
    age = 23;
    getAge = ()=>{
        console.log("Age : "+this.age);
    }
}

let obj1 = new A();
obj1.getAge();

console.log("Class Name : "+A.name);

// class expression -> named and unnamed class.
// #1 unnamed class

var myClass = class {
    name = "Jivika";
    getName = () => {
        console.log("Name : "+this.name);
    }
}

let obj2 = new myClass();
obj2.getName();
console.log("Class Name : "+myClass.name);

// #2 named class

var myDetail = class myDetail2{
    designation = "Intern";
    getPosition = () => {
        console.log("Position : "+this.designation);
    }
}

let obj3 = new myDetail();
obj3.getPosition();
console.log("Class Name : "+myDetail.name);