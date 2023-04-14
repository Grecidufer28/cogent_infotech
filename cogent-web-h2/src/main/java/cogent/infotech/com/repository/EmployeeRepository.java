package cogent.infotech.com.repository;

import cogent.infotech.com.entity.Employee;
import org.springframework.data.repository.CrudRepository;

public interface EmployeeRepository extends CrudRepository<Employee, Long> {
}
