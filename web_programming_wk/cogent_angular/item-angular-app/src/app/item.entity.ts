export class ItemEntity {
    constructor(public itemNo:number, public itemName:string, public itemPrice:number, public ImageUrl:string) {
        this.itemNo=itemNo
        this.itemName=itemName
        this.itemPrice=itemPrice
        this.ImageUrl=ImageUrl
    }
}