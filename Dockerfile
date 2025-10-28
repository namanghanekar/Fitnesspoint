FROM tomcat:10.0-jdk17
COPY dist/Fitnesspoint.war /usr/local/tomcat/webapps/Fitnesspoint.war
EXPOSE 8080
CMD ["catalina.sh", "run"]
