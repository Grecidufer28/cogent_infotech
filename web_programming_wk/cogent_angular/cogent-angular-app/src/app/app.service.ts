import { Injectable } from "@angular/core"

@Injectable({
    providedIn:'root'
})
export class AppService {
    constructor() {

    }

    getData():string {
        return "Hey, I am a service..."
    }
}