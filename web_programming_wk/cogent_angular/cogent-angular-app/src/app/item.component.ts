import { Component, OnInit } from "@angular/core"
import { ItemService } from "./item.service";

@Component({
    selector:'item',
    templateUrl:'./item.component.html'
})
export class ItemComponent implements OnInit {

    constructor(private service: ItemService) {}

    ngOnInit(): void {
        this.items = this.service.getData()
    }

    updateFieldsVisible:boolean = false;

    items:any

    delete(index:number) {
        this.items.splice(index, 1)
    }

    toggle() {
        this.updateFieldsVisible = !this.updateFieldsVisible
    }

    edit(index:number) {
        this.updateFieldsVisible = !this.updateFieldsVisible
    }
}