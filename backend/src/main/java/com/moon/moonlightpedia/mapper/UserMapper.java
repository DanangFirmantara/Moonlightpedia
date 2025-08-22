package com.moon.moonlightpedia.mapper;

import com.moon.moonlightpedia.dtos.UserDto;
import com.moon.moonlightpedia.entities.User;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper {
    UserDto toDto(User user);
}
