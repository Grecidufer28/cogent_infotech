package cogent.infotech.com.service;

import cogent.infotech.com.entity.Employee;

import java.util.List;

public interface EmployeeService {

    Employee saveEmployee(Employee emp);
    List<Employee> fetchEmployees();
}
