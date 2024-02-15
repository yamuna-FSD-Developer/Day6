class Uber {
    constructor(baseFare, costPerKm, costPerMinute) {
        this.baseFare = parseFloat(baseFare); 
        this.costPerKm = parseFloat(costPerKm); 
        this.costPerMinute = parseFloat(costPerMinute); 
    }

    getUber(distanceKm, timeMinutes) {
        const totalPrice = this.baseFare + (distanceKm * this.costPerKm) + (timeMinutes * this.costPerMinute);
        return `Total price is ${totalPrice.toFixed(2)}`;
    }
}

const u1 = new Uber("25", "18", "9");
console.log(u1.getUber(10, 20));
