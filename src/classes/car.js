import {Vehicle} from './vehicle.js';

export class Car extends Vehicle {
    constructor(license, model, latLong) {
        super(license, model, latLong); //super is mandatory in JS
        this.make = null;
        this.miles = null;
    }

    start() {
        super.start();
    }
}