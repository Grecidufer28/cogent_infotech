export let age:number=20
export class Employee {
    empCode:number
    empName:string

    constructor(name:string, code:number){
        this.empCode = code
        this.empName = name
    }

    displayEmployee() {
        console.log("Employee code: "+this.empCode+"; Employeee name: "+this.empName)
    }
}

// class Person {
//     firstName:string=""
//     lastName:string=""

//     constructor(firstName:string, lastName:string) {
//         this.firstName = firstName
//         this.lastName = lastName
//     }

//     getName():string {
//         return this.firstName + ' ' + this.lastName
//     }
// }

// class Employee extends Person {
//     designation:string=""

//     constructor(firstName:string, lastName:string, designation:string) {
//         super(firstName, lastName)
//         this.designation = designation
//     }
// }

// interface IProduct {
//     id:number,
//     name:string,
//     price:number,
//     calculate:(qty:number)=>number
// }

// let product:IProduct = {
//     id:1,
//     name:"Cogent",
//     price:1000,
//     calculate(qty:number):number {
//         return this.price*qty
//     }
// }

// console.log(product.calculate(10))

// function calcArea(width:number, height:number, isTriangle?:boolean) {
//     if(isTriangle!=undefined && isTriangle)
//         return (width*height)/2
//     return width*height
// }

// console.log("Area of 10x20 rectangle = "+calcArea(10, 20))
// console.log("Area of 10x20 rectangle = "+calcArea(10, 20, false))
// console.log("Area of 10x20 triangle = "+calcArea(10, 20, true))