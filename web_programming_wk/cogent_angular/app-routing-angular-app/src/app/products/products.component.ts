import { Component, OnInit } from "@angular/core";
import { ProductService } from "./products.service";

@Component({
    selector: 'products',
    templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit{
    
    constructor(private service: ProductService) {}

    products:any
    ngOnInit(): void {
        this.products = this.service.getData()
    }
}