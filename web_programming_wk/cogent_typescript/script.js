"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = exports.age = void 0;
exports.age = 20;
var Employee = /** @class */ (function () {
    function Employee(name, code) {
        this.empCode = code;
        this.empName = name;
    }
    Employee.prototype.displayEmployee = function () {
        console.log("Employee code: " + this.empCode + "; Employeee name: " + this.empName);
    };
    return Employee;
}());
exports.Employee = Employee;
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
