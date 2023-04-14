package cogent.infotech.com;

import cogent.infotech.com.entity.Course;
import cogent.infotech.com.entity.Student;
import cogent.infotech.com.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class OneToManyJpaApplication implements CommandLineRunner {

	@Autowired
	private StudentRepository repository;

	public static void main(String[] args) {
		SpringApplication.run(OneToManyJpaApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {Student student = new Student("Anudeep");
		Course c1 = new Course("Math", 500);
		Course c2 = new Course("Science", 600);
		Course c3 = new Course("English", 350);
		student.getCourses().add(c1);
		student.getCourses().add(c2);
		student.getCourses().add(c3);
		repository.save(student);
		System.out.printf("Student '%s' has been saved to the database!\n", student.getName());
	}
}
