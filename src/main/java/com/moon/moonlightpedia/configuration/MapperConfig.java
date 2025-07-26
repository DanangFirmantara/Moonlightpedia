package com.moon.moonlightpedia.configuration;

import com.moon.moonlightpedia.dtos.UserDto;
import com.moon.moonlightpedia.entities.User;
import com.moon.moonlightpedia.mapper.UserMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class MapperConfig {
    @Bean
    public UserMapper userMapper(){
        return new UserMapper() {
            @Override
            public UserDto toDto(User user) {
                return new UserDto(user.getId(), user.getName(), user.getUsername(), user.getEmail());
            }
        };
    }
}
