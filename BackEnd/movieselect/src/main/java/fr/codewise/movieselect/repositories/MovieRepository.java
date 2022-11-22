package fr.codewise.movieselect.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import fr.codewise.movieselect.entities.Movie;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Integer> {

    List<Movie> findBorrowMovies(Boolean isBorrow);
}
