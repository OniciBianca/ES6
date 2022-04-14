
import {Vehicle} from './vehicle.js';

export class Drone extends Vehicle {
    constructor(license, model, latLong) {
        super(license, model, latLong); //super is mandatory in JS
        this.airTimeHours = null;
        this.base = null;
    }

    start() {
        super.start();
    }
}