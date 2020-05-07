class Es6Car {
    constructor(name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption) {
        this.name = name;
        this.model = model;
        this.year = year;
        this.color = color;
        this.maxSpeed = maxSpeed;
        this.fuelCapacity = fuelCapacity || 60;
        this.fuelConsumption = fuelConsumption || 10;
    }

    getFullName() {
        console.log("Car:" + this.name + " " + this.model);
    }

    getAge() {
        console.log("Age of car:" + (2020 - this.year));
    }

    changeColor(newColor) {
        if (newColor.toLowerCase() == this.color) {
            console.log(`Car is already ${this.color}`);
        }
        else {
            this.color = newColor;
            console.log(`Now this car is ${this.color}`);

        }
    }

    calculateWay(kilo, fuel) {
        if (fuel < 10) {
            console.log("You need to refuel");
        }
        else {

            console.log("Needed time: " + (kilo / this.maxSpeed));
            let neededFuel = kilo * this.fuelConsumption;
            let refuels = (Math.abs(fuel - neededFuel) / this.fuelCapacity);
            console.log("You need " + refuels + " refuels");

        }
    }
}



class Es6BMW extends Es6Car {
    constructor() {
        const args = [].slice.call(arguments)
        const sunroof = args.pop()    
        super(args);
        this.sunroof = sunroof;
    }

    getSunroof() {
        if (this.sunroof) {
            console.log("BMW has sunroof");
        }
        else {
            console.log("BMW doesnt have sunroof");
        }
    }

}


class Es6Lexus extends Es6Car {
    constructor() {
        const args = [].slice.call(arguments)
        const climateControl = args.pop()    
        super(args);
        this.climateControl = climateControl;
    }

    getClimateControl() {
        if (this.climateControl) {
            console.log("Lexus has climate control");
        }
        else {
            console.log("Lexus doesnt have climate control");
        }
    }

}



class Es6Gaz extends Es6Car {
    constructor() {
        const args = [].slice.call(arguments)
        const radio = args.pop()    
        super(args);
        this.radio = radio;
    }

    checkIfRadioExists() {
        if (this.radio) {
            console.log("Vaz has radio");
        }
        else {
            console.log("Vaz doesnt have radio");
        }
    }

}

const es6test1 = new Es6Car('Mashina', '1', '1999', 'black', '100');
const es6test2 = new Es6BMW('BMW', '123', '2000', 'red', '100', 70, 5, true);
const es6test3 = new Es6Lexus('Lex', '321', '1000', 'white', '100', 50, 5, false);
const es6test4 = new Es6Gaz('Uaz', '228', '500', 'Grey', '100', 1, 1, true);



