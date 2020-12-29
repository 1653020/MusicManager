package com.vhai.music.dao;

import com.vhai.music.entities.music;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository(value = "musicDao")
public class musicDao {
    @Autowired
    private SessionFactory sessionFactory;

    public music findMusicById (int id) {
        Session session = this.sessionFactory.openSession();
        music result = session.find(music.class, id);
        session.close();
        return result;
    }

    public List<music> findAllMusic () {
        Session session = this.sessionFactory.openSession();
        List<music> result = session.createQuery("FROM music", music.class).getResultList();
        session.close();
        return result;
    }
}
