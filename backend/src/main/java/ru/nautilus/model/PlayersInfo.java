package ru.nautilus.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;

@AllArgsConstructor
@Getter
@Setter
@Document(collection="players")
public class PlayersInfo {
    String fullName;
    String photo;
    int age;
    int number;
    String role;
    int yellowCards;
    int redCards;
}