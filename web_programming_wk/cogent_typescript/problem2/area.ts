export function calcArea(width:number, height:number, isTriangle?:boolean):number {
    if(isTriangle!=undefined && isTriangle)
        return (width*height)/2
    return width*height
}

export interface IShape {
    calcArea:(width:number, height:number)=>number
}