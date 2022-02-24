class student{
    name = "jivika";
    age = 23;
    getName = ()=>{
        console.log(this.name);
    };
    getAge = ()=>{
        console.log(this.age);
    }

}
var obj = new student();
console.log(obj.getName());
console.log(obj.getAge());