package cogent.infotech.com.repository;

import cogent.infotech.com.entity.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MovieRepository extends JpaRepository<Movie, Integer> {

//    public List<Movie> getFavorites();
}
