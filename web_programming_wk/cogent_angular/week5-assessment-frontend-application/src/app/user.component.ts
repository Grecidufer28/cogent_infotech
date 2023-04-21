import { Component, OnInit } from "@angular/core"
import { User } from "./user"
import { UserService } from "./userService"

@Component({
    selector:'app-user',
    templateUrl:'./user.component.html'
})
export class UserComponent implements OnInit {
    users:User[]
    newUser_name = ""
    newUser_age = 0
    newUser_salary = 0.0


    constructor(private service: UserService) { this.users = [] }

    ngOnInit(): void {
        this.service.getAllUsers().subscribe((data:User[])=>{
            this.users = data
        })
    }

    addUser() {
        let addedUser = new User(this.newUser_name, this.newUser_age, this.newUser_salary)
        this.service.addUser(addedUser).subscribe((response: User) => {
            console.log(response)
        })
        this.service.getAllUsers().subscribe((data:User[])=>{
            this.users = data
        })
        alert(`${addedUser.name} has been added to the database!`)
    }

    clearFields() {
        this.newUser_name = ""
        this.newUser_age = 0
        this.newUser_salary = 0.0
    }
}