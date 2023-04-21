import * as Area from "./area"
// console.log("Area of 10x20 rectangle = "+Area.calcArea(10, 20))
// console.log("Area of 10x20 rectangle = "+Area.calcArea(10, 20, false))
// console.log("Area of 10x20 triangle = "+Area.calcArea(10, 20, true))

let rectangle:Area.IShape = {
    calcArea(width:number, height:number):number {
        return width*height
    }
}

let triangle:Area.IShape = {
    calcArea(width:number, height:number):number {
        return (width*height)/2
    },
}

console.log("Area of 10x20 rectangle = "+rectangle.calcArea(10, 20))
console.log("Area of 10x20 triangle = "+triangle.calcArea(10, 20))