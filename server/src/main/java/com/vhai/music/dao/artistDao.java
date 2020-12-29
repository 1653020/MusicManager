package com.vhai.music.dao;

import com.vhai.music.entities.artist;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository(value = "artistDao")
public class artistDao {
    @Autowired
    private final SessionFactory sessionFactory;

    public artistDao(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    public void createArtist(artist artist) {
        Session session = this.sessionFactory.openSession();
        Transaction tx = session.beginTransaction();
        session.persist(artist);
        tx.commit();
        session.close();
    }
}
