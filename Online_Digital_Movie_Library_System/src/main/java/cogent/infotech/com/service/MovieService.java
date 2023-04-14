package cogent.infotech.com.service;

import cogent.infotech.com.entity.Movie;

import java.util.List;
import java.util.Optional;

public interface MovieService {

    public Movie saveMovie(Movie movie);
    public List<Movie> fetchMovies();
    public String delete(Integer id);
    public Optional<Movie> fetchMovie(Integer id);
    public String updateMovie(Integer id, Movie movie);
    public String addFavorite(Integer id);
    public String removeFavorite(Integer id);
//    public List<Movie> getFavorites();
}
