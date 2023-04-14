package cogent.infotech.com.controller;

import cogent.infotech.com.entity.Movie;
import cogent.infotech.com.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class MovieController {

    @Autowired
    private MovieService service;

    @PostMapping("/movies")
    public Movie addMovie(@Validated @RequestBody Movie movie) {
        return service.saveMovie(movie);
    }

    @GetMapping("/movies")
    public List<Movie> getAllMovies() {
        return service.fetchMovies();
    }

    @DeleteMapping("/movies/{id}")
    public String removeMovie(@PathVariable Integer id) {
        return service.delete(id);
    }

    @GetMapping("/movies/{id}")
    public Optional<Movie> getMovie(@PathVariable Integer id) {
        return service.fetchMovie(id);
    }

    @PutMapping("/movies/{id}")
    public String updateMovie(@PathVariable Integer id, @Validated @RequestBody Movie movie) {
        return service.updateMovie(id, movie);
    }

    @PutMapping("/movies/add_favorite/{id}")
    public String addMovieToFavorites(@PathVariable Integer id) {
        return service.addFavorite(id);
    }

    @PutMapping("movies/remove_favorite/{id}")
    public String removeMovieFromFavorites(@PathVariable Integer id) {
        return service.removeFavorite(id);
    }
}