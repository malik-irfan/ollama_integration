package com.im.grabber;

import com.im.grabber.services.BasicChatService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/grabber/basic/api/v1")
public class GrabberController {

    private final BasicChatService basicChatService;

    public GrabberController(BasicChatService basicChatService) {
        this.basicChatService = basicChatService;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/chat")
    public String chat(@RequestBody String message){

        return basicChatService.chat(message);
    }

  /*  @PostMapping("/chat")
    public String chat(@RequestParam String message){

        return basicChatService.chat(message);
    }*/
}
