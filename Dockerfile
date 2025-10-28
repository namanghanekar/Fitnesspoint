FROM tomcat:10.0-jdk17
COPY dist/personalized_training.war /usr/local/tomcat/webapps/personalized_training.war
EXPOSE 8080
CMD ["catalina.sh", "run"]
