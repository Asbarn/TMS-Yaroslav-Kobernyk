class es6Car {
    constructor(name, model, year, color, maxSpeed, fuelCapacity = 60, fuelConsumption = 10) {
        this.name = name;
        this.model = model;
        this.year = year;
        this.color = color;
        this.maxSpeed = maxSpeed;
        this.fuelCapacity = fuelCapacity;
        this.fuelConsumption = fuelConsumption;
    }

    getFullName() {
        console.log("Car:" + this.name + " " + this.model);
    }

    getAge() {
        console.log("Age of car:" + (2020 - this.year));
    }

    changeColor(newColor) {
        if (newColor.toLowerCase() == this.color) {
            console.log("car is already " + this.color);
        }
        else {
            this.color = newColor;
            console.log("Now this car is " + this.color);

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



class es6BMW extends es6Car {
    constructor(name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption, sunroof) {
        super(name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption);
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


class es6Lexus extends es6Car {
    constructor(name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption, climateControl) {
        super(name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption);
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



class es6Gaz extends es6Car {
    constructor(name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption, radio) {
        super(name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption);
        this.radio = radio;
    }

    getRadio() {
        if (this.radio) {
            console.log("Vaz has radio");
        }
        else {
            console.log("Vaz doesnt have radio");
        }
    }

}

const es6test1 = new es6Car('Mashina', '1', '1999', 'black', '100');
const es6test2 = new es6BMW('BMW', '123', '2000', 'red', '100', 70, 5, true);
const es6test3 = new es6Lexus('Lex', '321', '1000', 'white', '100', 50, 5, false);
const es6test4 = new es6Gaz('Uaz', '228', '500', 'Grey', '100', 1, 1, true);



