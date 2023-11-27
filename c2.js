class Uber{
    constructor(baseFare,costPerKm,costPerMinute){
        this.baseFare=baseFare;
        this.costPerKm=costPerKm;
        this.costPerMinute=costPerMinute;
    }
    getuber(){
        return `Totalprice is ${this.baseFare + this.costPerKm + this.costPerMinute} `;
    }
}

var u1 = new Uber("25","18","9");
console.log(u1.getuber());