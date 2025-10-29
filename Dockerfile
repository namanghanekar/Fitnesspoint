# Use newer Tomcat with Java 21
FROM tomcat:10.1-jdk21

# Copy your WAR file
COPY dist/Fitnesspoint.war /usr/local/tomcat/webapps/Fitnesspoint.war

# Expose port 8080
EXPOSE 8080

# Start Tomcat
CMD ["catalina.sh", "run"]
