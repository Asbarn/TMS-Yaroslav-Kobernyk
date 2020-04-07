function Car(name, model, year, color, maxSpeed, fuelCapacity = 60, fuelConsumption = 10) {

    this.name = name;
    this.model = model;
    this.year = year;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.fuelCapacity = fuelCapacity;
    this.fuelConsumption = fuelConsumption;
}

Car.prototype.getFullName = function () {
    console.log("Car:" + this.name + " " + this.model);
}

Car.prototype.getAge = function () {
    console.log("Age of car:" + (2020 - this.year));
}

Car.prototype.changeColor = function (newColor) {
    if (newColor.toLowerCase() == this.color) {
        console.log("car is already " + this.color);
    }
    else {
        this.color = newColor;
        console.log("Now this car is " + this.color);

    }
}

Car.prototype.calculateWay = function (kilo, fuel) {
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
const test1 = new Car('Mashina', '1', '1999', 'black', '100');


function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
    Child.superclass = Parent.prototype;
}

function BMW(name, model, year, color, maxSpeed, fuelCapacity = 60, fuelConsumption = 10, sunroof) {
    BMW.superclass.constructor.call(this, name, model, year, color, maxSpeed, fuelCapacity , fuelConsumption );
    this.sunroof = sunroof;
}

extend(BMW, Car);
BMW.prototype.getSunroof = function () {
    if (this.sunroof) {
        console.log("BMW has sunroof");
    }
    else {
        console.log("BMW doesnt have sunroof");
    }
}
const test2 = new BMW('Gaz', '123', '2000', 'red', '100', 70, 5, true);



function Lexus(name, model, year, color, maxSpeed, fuelCapacity = 60, fuelConsumption = 10, climateControl) {
    Lexus.superclass.constructor.call(this, name, model, year, color, maxSpeed, fuelCapacity , fuelConsumption );
    this.climateControl = climateControl;
}

extend(Lexus, Car);
Lexus.prototype.getClimateControl = function () {
    if (this.climateControl) {
        console.log("Lexus has climate control");
    }
    else {
        console.log("Lexus doesnt have climate control");
    }
}
const test3 = new Lexus('Lex', '321', '1000', 'white', '100', 50, 5, false);


function Vaz(name, model, year, color, maxSpeed, fuelCapacity = 60, fuelConsumption = 10, radio) {
    Vaz.superclass.constructor.call(this, name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption );
    this.radio = radio;
}

extend(Vaz, Car);
Vaz.prototype.getRadio = function () {
    if (this.radio) {
        console.log("Vaz has radio");
    }
    else {
        console.log("Vaz doesnt have radio");
    }
}
const test4 = new Vaz('UAZ', '228', '500', 'Grey', '100', 1, 1, true);