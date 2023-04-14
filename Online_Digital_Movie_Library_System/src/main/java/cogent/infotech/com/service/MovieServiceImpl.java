package cogent.infotech.com.service;

import cogent.infotech.com.entity.Movie;
import cogent.infotech.com.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MovieServiceImpl implements MovieService {

    @Autowired
    private MovieRepository repo;

    @Override
    public Movie saveMovie(Movie movie) {
        return repo.save(movie);
    }

    @Override
    public List<Movie> fetchMovies() {
        return repo.findAll();
    }

    @Override
    public String delete(Integer id) {
        repo.deleteById(id);
        return "Movie with ID#"+id+" has been deleted!";
    }

    @Override
    public Optional<Movie> fetchMovie(Integer id) {
        return repo.findById(id);
    }

    @Override
    public String updateMovie(Integer id, Movie movie) {
        Optional<Movie> m = fetchMovie(id);
        if(m.isPresent()) {
            Movie updatedMovie = m.get();
            updatedMovie.setMovieName(movie.getMovieName());
            updatedMovie.setReleaseDate(movie.getReleaseDate());
            repo.save(updatedMovie);
            return "Movie with ID#"+id+" has been updated!";
        }
        return "Movie with ID#"+id+" does not exist in the database.";
    }

    @Override
    public String addFavorite(Integer id) {
        Optional<Movie> m = fetchMovie(id);
        if(m.isPresent()) {
            Movie newFavoriteMovie = m.get();
            newFavoriteMovie.setFavorite(true);
            repo.save(newFavoriteMovie);
            return "Movie with ID#"+id+" has been added to your favorites!";
        }
        return "Movie with ID#"+id+" does not exist in the database.";
    }

    @Override
    public String removeFavorite(Integer id) {
        Optional<Movie> m = fetchMovie(id);
        if(m.isPresent()) {
            Movie formerFavoriteMovie = m.get();
            formerFavoriteMovie.setFavorite(false);
            repo.save(formerFavoriteMovie);
            return "Movie with ID#"+id+" has been removed from your favorites!";
        }
        return "Movie with ID#"+id+" does not exist in the database.";
    }

//    @Override
//    public List<Movie> getFavorites() {
//        return repo.getFavorites();
//    }
}
