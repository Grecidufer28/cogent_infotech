import { Component } from "@angular/core";

@Component({
    selector:'account',
    templateUrl:'./account.component.html'
})
export class AccountComponent {
    balance = 2000
    updateBalance(balance: any) {
        this.balance = balance
    }
}