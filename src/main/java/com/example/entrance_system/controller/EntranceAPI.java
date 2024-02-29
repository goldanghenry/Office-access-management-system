package com.example.entrance_system.controller;

import com.example.entrance_system.model.Suggestion;
import com.example.entrance_system.model.User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class EntranceAPI {
    @RequestMapping("/")
    public String home() {
        return "entrance"; // View의 이름을 반환합니다.
    }

    @PostMapping("/submit")
    @ResponseBody
    public String submitEntranceData(@RequestBody User userData) {

        // 받은 데이터를 처리하는 로직 작성
        String department = userData.getDepartment();
        String area = userData.getArea();
        String name = userData.getName();
        String uniqueNumber = userData.getUniqueNumber();
        String purpose = userData.getPurpose();

        // 여기서는 간단히 받은 데이터를 출력하도록 하였습니다.
        System.out.println("부서: " + department);
        System.out.println("구역: " + area);
        System.out.println("이름: " + name);
        System.out.println("고유번호: " + uniqueNumber);
        System.out.println("이용목적: " + purpose);

        // 처리 결과 메시지 반환
        return "양식 제출 완료";
    }

    @PostMapping("/sug-submit")
    @ResponseBody
    public String submitEntranceData(@RequestBody Suggestion suggestion) {

        // 받은 데이터를 처리하는 로직 작성
        String department = suggestion.getDepartment();
        String name = suggestion.getName();
        String content = suggestion.getContent();

        // 여기서는 간단히 받은 데이터를 출력하도록 하였습니다.
        System.out.println("부서: " + department);
        System.out.println("이름: " + name);
        System.out.println("건의사항: " + content);

        // 처리 결과 메시지 반환
        return "건의사항 제출 완료";
    }
}
