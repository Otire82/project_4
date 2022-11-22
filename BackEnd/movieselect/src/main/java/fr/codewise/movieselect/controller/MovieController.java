package fr.codewise.movieselect.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fr.codewise.movieselect.entities.Movie;
import fr.codewise.movieselect.repositories.MovieRepository;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/movies")
public class MovieController {

    @Autowired
    MovieRepository movieRepository;
    
    @GetMapping
    public List<Movie> findAllMoviesByIsBorrow(Boolean isBorrow) {
        return this.movieRepository.findAllMoviesByIsBorrow(isBorrow);

    }
}
