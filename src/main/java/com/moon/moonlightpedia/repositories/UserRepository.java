package com.moon.moonlightpedia.repositories;

import com.moon.moonlightpedia.entities.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {
}
