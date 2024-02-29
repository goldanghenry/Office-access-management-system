package com.example.entrance_system.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {
    private String department;
    private String area;
    private String name;
    private String uniqueNumber;
    private String purpose;
}
