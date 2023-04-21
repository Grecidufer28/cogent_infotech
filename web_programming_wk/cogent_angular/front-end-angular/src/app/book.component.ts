import { Component, OnInit } from "@angular/core";
import { Book } from "./book";
import { BookService } from "./bookService"

@Component({
    selector:'app-book',
    templateUrl:'./book.component.html'
})
export class BookComponent implements OnInit{
    books:Book[]
    
    constructor(private service:BookService) {
        this.books = []
    }

    ngOnInit(): void {
        this.service.getBooks().subscribe((data:Book[])=>{
            this.books = data
            console.log(data)
        })
    }


    
}