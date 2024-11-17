FROM openjdk:17-oracle
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} App.jar
ENTRYPOINT ["java", "-jar", "/App.jar"]