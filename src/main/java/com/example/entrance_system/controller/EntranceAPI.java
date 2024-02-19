package com.example.entrance_system.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class EntranceAPI {
    @RequestMapping("/")
    public String home() {
        return "entrance"; // View의 이름을 반환합니다.
    }


}
