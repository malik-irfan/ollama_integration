package com.im.grabber.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.stereotype.Service;

@Service
public class BasicChatService {
    private final Logger logger = LoggerFactory.getLogger(BasicChatService.class);

    private final ChatClient chatClient;

    public BasicChatService(ChatClient chatClient) {
        this.chatClient = chatClient;
    }

    public String chat(String message){
        logger.info("user query: "+message);

        Prompt prompt = new Prompt(message);

        String response = chatClient.prompt(prompt).call().content();
        logger.info("LLM Response: "+response);
        return  response;
    }
}
