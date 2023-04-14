package cogent.infotech.com.service;

import cogent.infotech.com.entity.Employee;
import cogent.infotech.com.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Override
    public Employee saveEmployee(Employee emp) {
        return employeeRepository.save(emp);
    }

    @Override
    public List<Employee> fetchEmployees() {
        return (List<Employee>) employeeRepository.findAll();
    }
}
