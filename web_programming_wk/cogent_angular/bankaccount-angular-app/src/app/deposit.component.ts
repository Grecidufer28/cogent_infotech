import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector:'depositChild',
    templateUrl:'./deposit.component.html'
})
export class DepositComponent {

    @Output()
    balanceIncrease = new EventEmitter<number>()
    balance = 2000
    amtToDeposit = 0
    depositIncreased() {
        this.balance += this.amtToDeposit
        console.log(this.balance)
        this.balanceIncrease.emit(this.balance)
    }
}