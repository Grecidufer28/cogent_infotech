"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcArea = void 0;
function calcArea(width, height, isTriangle) {
    if (isTriangle != undefined && isTriangle)
        return (width * height) / 2;
    return width * height;
}
exports.calcArea = calcArea;
