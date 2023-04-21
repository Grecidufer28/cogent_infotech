import { Component, OnInit } from "@angular/core"

@Component({
    selector:'product',
    templateUrl:'./product.component.html'
})
export class ProductComponent implements OnInit {
    ngOnInit(): void {
        throw new Error("Method not implemented.")
    }
    productNo:number = 1001
    productName:string = "HP Laptop"
    productPrice:number = 500
    ImageUrl:string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlYN3jp6wprxsTqpZz27Q1lowBVfouCZ36-A&usqp=CAU"

    name:string="Cogent Infotech"

    message() {
        alert("You clicked?")
    }
}