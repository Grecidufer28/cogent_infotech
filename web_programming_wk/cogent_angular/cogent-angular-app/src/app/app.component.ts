import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  posts:any
  constructor(private service: PostService) {

  }
  
  products = [] as any
  title:string ="ngSwitchExample"
  num:number = 0

  items: item[] = [
    {name: 'One', val: 1},
    {name: 'Two', val: 2},
    {name: 'Three', val: 3},
    {name: 'Four', val: 4},
    {name: 'Five', val: 5}
  ]

  weekdays: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  selectedDayOfWeek:number = 0

  selectedValue1:string = 'One'
  selectedValue2:string = 'Two'
  selectedValue3:string = 'Three'
  selectedValue4:string = 'Four'
  selectedValue5:string = 'Five'


  ngOnInit(): void {
    this.products = this.getProduct()
    // this.data = this.service.getData()
    this.service.getPost().subscribe(response=>{
      this.posts = response
    })
  }

  getProduct() {
    return [
      {'id':'1', 'title':'Screw Driver', 'price':400, 'stock':10},
      {'id':'2', 'title':'Nut Bolt', 'price':300, 'stock':100},
      {'id':'3', 'title':'Resistor', 'price':50, 'stock':200},
      {'id':'4', 'title':'Tractor', 'price':60, 'stock':300},
      {'id':'5', 'title':'Roller', 'price':800, 'stock':400}
    ]
  }

  data:any
  // constructor(private service: AppService) {
    
  // }


}

class item {
  name: string
  val: number
  constructor(name:string, val:number) {
    this.name = name
    this.val = val
  }
}