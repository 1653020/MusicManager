package com.vhai.music.entities;
import lombok.Setter;
import lombok.Getter;
import javax.persistence.*;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.ArrayList;

@Entity
@Table(name="music")
@Getter
@Setter
public class music {

    @Id
    @GeneratedValue
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "url", nullable = false)
    private String url;

    @Column(name = "artistId", nullable = false)
    private Integer artistId;

    @Column(name = "albumId")
    private Integer albumId;

    @Column(name = "type")
    private ArrayList<String> type;
}
