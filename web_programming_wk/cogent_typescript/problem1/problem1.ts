class Employee {
    id:number
    firstName:string
    lastName:string
    designation:string

    constructor(id:number, firstName:string, lastName:string, designation:string) {
        this.id=id
        this.firstName=firstName
        this.lastName=lastName
        this.designation=designation
    }

    showInfo() {
        console.log("Employee Details:"
                    +"\n\tID#: " + this.id
                    +"\n\tFirst Name: " + this.firstName
                    +"\n\tLast Name: " + this.lastName
                    +"\n\tDesignation: " + this.designation)
    }
}

let emp = new Employee(1, "Anudeep", "Gogineni", "Trainee")
emp.showInfo()