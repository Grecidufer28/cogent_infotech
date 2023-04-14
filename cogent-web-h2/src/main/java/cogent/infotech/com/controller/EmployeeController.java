package cogent.infotech.com.controller;

import cogent.infotech.com.entity.Employee;
import cogent.infotech.com.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @PostMapping("/employees")
    public Employee saveEmployee(@Validated @RequestBody Employee emp) {
        return employeeService.saveEmployee(emp);
    }

    @GetMapping("/employees")
    public List<Employee> fetchEmployeeList() {
        return employeeService.fetchEmployees();
    }

}
