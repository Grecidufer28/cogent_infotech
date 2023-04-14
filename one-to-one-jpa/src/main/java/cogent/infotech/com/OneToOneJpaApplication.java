package cogent.infotech.com;

import cogent.infotech.com.entity.Employee;
import cogent.infotech.com.entity.Passport;
import cogent.infotech.com.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class OneToOneJpaApplication implements CommandLineRunner {

	@Autowired
	private EmployeeRepository repository;

	public static void main(String[] args) {
		SpringApplication.run(OneToOneJpaApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		Employee employee = new Employee();
		employee.setName("John");
		employee.setEmail("john23@gmail.com");

		Passport passport = new Passport();
		passport.setExpiry("24-09-24");
		passport.setAddress("New York");

		employee.setPassport(passport);

		repository.save(employee);
		System.out.printf("Employee '%s' has been saved to the database.\n", employee.getName());
	}
}
