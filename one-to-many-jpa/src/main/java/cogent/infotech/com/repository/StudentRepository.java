package cogent.infotech.com.repository;

import cogent.infotech.com.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Long> {
}
