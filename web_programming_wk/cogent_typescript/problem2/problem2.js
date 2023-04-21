"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// console.log("Area of 10x20 rectangle = "+Area.calcArea(10, 20))
// console.log("Area of 10x20 rectangle = "+Area.calcArea(10, 20, false))
// console.log("Area of 10x20 triangle = "+Area.calcArea(10, 20, true))
var rectangle = {
    calcArea: function (width, height) {
        return width * height;
    }
};
var triangle = {
    calcArea: function (width, height) {
        return (width * height) / 2;
    },
};
console.log("Area of 10x20 rectangle = " + rectangle.calcArea(10, 20));
console.log("Area of 10x20 triangle = " + triangle.calcArea(10, 20));
