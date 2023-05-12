package cogent.com.repository;

import cogent.com.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

    @Query(value = "SELECT * FROM users WHERE first_name LIKE %:nameFilter% OR last_name LIKE %:nameFilter%",
            nativeQuery = true)
    public List<User> getUsersByName(String nameFilter);
}
