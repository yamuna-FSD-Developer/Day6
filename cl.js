class Person{
    constructor(name,age,gender,city){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.city=city;
    }
    getperson(){
        return `Hello Everyone! My Name is ${this.name}, I am ${this.age},yrs ${this.gender}, Living in ${this.city}, with Family`;
   }
}

var p1 = new Person("Yamuna","18","Female","Chennai");
console.log(p1.getperson());