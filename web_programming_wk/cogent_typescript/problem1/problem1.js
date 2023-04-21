var Employee = /** @class */ (function () {
    function Employee(id, firstName, lastName, designation) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.designation = designation;
    }
    Employee.prototype.showInfo = function () {
        console.log("Employee Details:"
            + "\n\tID#: " + this.id
            + "\n\tFirst Name: " + this.firstName
            + "\n\tLast Name: " + this.lastName
            + "\n\tDesignation: " + this.designation);
    };
    return Employee;
}());
var emp = new Employee(1, "Anudeep", "Gogineni", "Trainee");
emp.showInfo();
