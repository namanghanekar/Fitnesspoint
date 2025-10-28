<%-- 
    Document   : logout
    Created on : 14-Apr-2025, 12:29:36 am
    Author     : Dell
--%>

<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
    if (session != null) {
        session.invalidate();
    }
%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Logout</title>
    <script>
        alert("Logout successful!");
        window.location.href = "index.html";
    </script>
</head>
<body>
</body>
</html>

