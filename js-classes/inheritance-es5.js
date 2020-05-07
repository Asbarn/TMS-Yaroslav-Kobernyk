function Car(name, model, year, color, maxSpeed, fuelCapacity , fuelConsumption ) {

    this.name = name;
    this.model = model;
    this.year = year;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.fuelCapacity = fuelCapacity||60;
    this.fuelConsumption = fuelConsumption||10;
}

Car.prototype.getFullName = function () {
    console.log("Car:" + this.name + " " + this.model);
}

Car.prototype.getAge = function () {
    console.log("Age of car:" + (2020 - this.year));
}

Car.prototype.changeColor = function (newColor) {
    if (newColor.toLowerCase() == this.color) {
        console.log(`car is already ${this.color}` );
    }
    else {
        this.color = newColor;
        console.log(`Now this car is ${this.color}` );

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

function BMW() {
    const args = [].slice.call(arguments)
const sunroof = args.pop()
BMW.superclass.constructor.apply(this, args)
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



function Lexus() {
    const args = [].slice.call(arguments)
const climateControl = args.pop()
Lexus.superclass.constructor.apply(this, args)
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


function Vaz() {
    const args = [].slice.call(arguments)
    const radio = args.pop()
    Vaz.superclass.constructor.apply(this, args)
    this.radio = radio;
}

extend(Vaz, Car);
Vaz.prototype.checkIfRadioExists = function () {
    if (this.radio) {
        console.log("Vaz has radio");
    }
    else {
        console.log("Vaz doesnt have radio");
    }
}
const test4 = new Vaz('UAZ', '228', '500', 'Grey', '100', 1, 1, true);