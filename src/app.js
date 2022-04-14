//-----------------------------------------Basics--------------------------------------
// class Drone {
//     constructor(id, name) {
//         this.id = id;
//         this.name = name;
//     }

//     static getCompany() {
//         console.log('in getcompany');
//     }

//     fly() {
//         console.log("Drone " + this.id + ' is flying.');
//     }
// }
// Drone.maxHeight = 2000; //static variable

// let drone = new Drone('A123', 'Flyer');
// let drone2 = new Drone('B456', 'Twirl');

// console.log(typeof drone); 
// console.log('drone - ' + drone.id + ': ' + drone.name); 
// console.log('drone - ' + drone['id'] + ': ' + drone['name']); 
// console.log(drone.id + ' ' + drone2.id);

// console.log(Drone.maxHeight); //2000
// console.log(drone.maxHeight); //undefined

// drone.fly();
// drone2.fly();
// Drone.getCompany();

//--------------------------------------------Inheritance-------------------------------
// class Vehicle {
//     constructor(licenseNum) {
//         this.licenseNum = licenseNum;
//         console.log("constructing vehicle..");
//     }

//     start() {
//         console.log('starting vehicle..');
//     }

//     static getCompany() {
//         console.log()
//     }
// }

// class Car extends Vehicle {
//     constructor(licenseNum) {
//         super(licenseNum); //super is mandatory in JS
//         this.licenseNum = "B456";
//         console.log('constructing car..');
//     }

//     start() {
//         super.start();
//         console.log('starting car..');
//     }
// }

// let car = new Car("A123");
// console.log(car.licenseNum);
// car.start();

import {Car} from './classes/car.js';
import {Drone} from './classes/drone.js';
import {fleet} from './fleet-data.js';
import {FleetDataService} from './services/fleet-data-service.js';

let dataService = new FleetDataService();
dataService.loadData(fleet);
// console.log(dataService.cars);
// console.log(dataService.drones);

// for(let car of dataService.cars) {
//     console.log(car.license);
// }

for(let e of dataService.errors) {
    console.log(e.message + ' ' + e.data);
}

let car = dataService.getCarByLicense('AT2020');
console.log(car);

let cars = dataService.getCarsSortedByLicense();
for(let a of cars) {
    console.log(a);
}
console.log('Filtered..');
let filteredCars = dataService.filteredCarsByMake('U');
for(let f of filteredCars) {
    console.log(f);
}

