package com.moon.moonlightpedia.repositories;

import com.moon.moonlightpedia.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
}
