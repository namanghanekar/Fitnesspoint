# Use Tomcat 9 with Java 21 (compatible with javax.servlet)
FROM tomcat:9.0-jdk21

# Remove the default ROOT webapp to avoid conflicts
RUN rm -rf /usr/local/tomcat/webapps/ROOT

# Copy your WAR file to Tomcat webapps directory
COPY dist/Fitnesspoint.war /usr/local/tomcat/webapps/Fitnesspoint.war

# Expose port 8080 for web access
EXPOSE 8080

# Start Tomcat
CMD ["catalina.sh", "run"]
