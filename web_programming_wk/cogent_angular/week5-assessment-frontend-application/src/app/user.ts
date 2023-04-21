export class User {
    id:number = 0
    name:string = ""
    age:number = 0
    salary:number = 0.0

    constructor(name:string, age:number, salary:number) {
        this.name = name
        this.age = age
        this.salary = salary
    }
}