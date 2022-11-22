package fr.codewise.movieselect.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Movie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String title;
    private String picture;
    private String genre;
    private String descriptif;

    private Boolean isBorrow;

    public Movie(Integer id, String title, String picture, String genre, String descriptif) {
        this.setId(id);
        this.setTitle(title);
        this.setPicture(picture);
        this.setGenre(genre);
        this.setDescriptif(descriptif);
        // this.setIsBorrow(isBorrow);
    }

    public int getId() {return id;}

    public void setId(int id) { this.id = id; }

    public String getTitle() { return title; }

    public void setTitle(String title ) { this.title = title; }

    public String getPicture() { return picture; }

    public void setPicture(String picture) { this.picture = picture; }

    public String getGenre() { return genre; }

    public void setGenre(String genre) { this.genre = genre; }

    public String getDescriptif() { return descriptif; }

    public void setDescriptif(String descriptif) { this.descriptif = descriptif; }

    // public Boolean getIsBorrow() { return isBorrow; }

    // public void setIsBorrow(Boolean isBorrow) { this.isBorrow = isBorrow; }

}
