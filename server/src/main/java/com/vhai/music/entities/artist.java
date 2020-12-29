package com.vhai.music.entities;
import lombok.Setter;
import lombok.Getter;
import javax.persistence.*;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.Date;

@Entity
@Table(name="music")
@Getter
@Setter
public class artist {

    @Id
    @GeneratedValue
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "birthDay")
    private Date birthDay;

}
