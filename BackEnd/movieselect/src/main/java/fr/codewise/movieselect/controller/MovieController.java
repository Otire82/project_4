package fr.codewise.movieselect.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
    public List<Movie> findBorrowMovies(Boolean isBorrow) {
        return this.movieRepository.findBorrowMovies(isBorrow);
    }

    @GetMapping("/movies/{id}")
    public Movie show(@PathVariable int id){
        return movieRepository.findById(id).get();
    }

    @PostMapping("/movies")
    public Movie createMovie(@RequestBody Movie movie) {
        return movieRepository.save(movie);
    }

     @PutMapping("/movies/{id}")
    public Movie update(@PathVariable int id, @RequestBody Movie movie) {
        Movie movieToUpdate = movieRepository.findById(id).get();
        movieToUpdate.setTitle(movie.getTitle());
        movieToUpdate.setPicture(movie.getPicture());
        movieToUpdate.setGenre(movie.getGenre());
        movieToUpdate.setDescriptif(movie.getDescriptif());
        return movieRepository.save(movieToUpdate);
    }

    @DeleteMapping("movies/{id}")
    public boolean delete(@PathVariable int id) {
        movieRepository.deleteById(id);
        return true;
    }
}
