import { Input, Component } from "@angular/core"
import { CarEntity } from "./car.entity"

@Component({
    selector:'car-component',
    templateUrl:'./car.html'
})
export class CarComponent {
    
    @Input()
    car:CarEntity 
    constructor() {
        console.log("Garage")
    }
}