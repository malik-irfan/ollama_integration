# Getting Started

### Reference Documentation
With Ollama you can run various Large Language Models (LLMs) locally and generate text from them. Spring AI supports the Ollama chat completion capabilities with the OllamaChatModel API.

* [Ollama](https://docs.spring.io/spring-ai/reference/api/chat/ollama-chat.html)

### Guides


### Key-Points
* The Prefix `spring.ai.ollama` property to configure **connection** to ollama
* The prefix `spring.ai.ollama.chat.options` configure the Ollama chat model. Configure **advance parameters**
* All properties prefixed with `spring.ai.ollama.chat.options `can be **overridden** at runtime
* Spring AI Ollama can automatically pull models when they are not available in your Ollama instance


