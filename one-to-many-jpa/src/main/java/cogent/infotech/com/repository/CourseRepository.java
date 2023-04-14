package cogent.infotech.com.repository;

import cogent.infotech.com.entity.Course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepository extends JpaRepository<Course, Long> {
}
