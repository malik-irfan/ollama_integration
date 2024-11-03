package com.im.grabber;

import com.im.grabber.services.BasicChatService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/grabber/basic/api/v1")
public class GrabberController {

    private final BasicChatService basicChatService;

    public GrabberController(BasicChatService basicChatService) {
        this.basicChatService = basicChatService;
    }

    @PostMapping("/chat")
    public String chat(@RequestBody String message){

        return basicChatService.chat(message);
    }
}
