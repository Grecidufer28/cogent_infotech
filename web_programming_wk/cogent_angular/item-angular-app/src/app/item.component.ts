import { ItemEntity } from "./item.entity";
import { Component, Input } from "@angular/core";

@Component({
    selector:'item-component',
    templateUrl:'./item.html'
})
export class ItemComponent {

    @Input()
    item:ItemEntity
    constructor() {
        console.log("Warehouse")
    }
}