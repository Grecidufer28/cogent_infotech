import { CarEntity } from "./car.entity";
import {Component} from "@angular/core"

@Component({
    selector:'garage',
    templateUrl:'./garage.html'
})
export class GarageComponent {
    public cars:Array<CarEntity>
    constructor() {
        var carOne:CarEntity = new CarEntity("Honda", "Red")
        var carTwo:CarEntity = new CarEntity("Renault", "Blue")
        var carThree:CarEntity = new CarEntity("Maruti", "White")
        this.cars = [carOne, carTwo, carThree]
    }
}