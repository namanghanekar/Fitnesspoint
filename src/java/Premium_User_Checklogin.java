/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */

import javax.servlet.RequestDispatcher;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

/**
 *
 * @author Dell
 */
public class Premium_User_Checklogin extends HttpServlet {

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();

        try {
            String mail = request.getParameter("mail");
            String pwd = request.getParameter("pwd");

            Class.forName("com.mysql.cj.jdbc.Driver");

            Connection cn = DriverManager.getConnection("jdbc:mysql://localhost:3306/LGYM", "root", "naman");

            PreparedStatement ps = cn.prepareStatement("select * from premiumuser where email=? and binary password=? ");
            ps.setString(1, mail);
            ps.setString(2, pwd);

            ResultSet rs = ps.executeQuery();
            if (rs.next()) {
                HttpSession hs = request.getSession(true);
                hs.setAttribute("mail", mail);

                out.println("<h1>login successfully</h1>");

                //RequestDispatcher rd=request.getRequestDispatcher("Customer_home");
                //rd.forward(request, response
                request.setAttribute("mail", mail);
                
//                out.println("<html>");
//                out.println("<head><title>Login Result</title></head>");
//                out.println("<body>");
//                out.println("<script type='text/javascript'>");
//                out.println("alert('Login Successful!');");
//                out.println("window.location.href = 'User_home';"); // redirect after popup
//                out.println("</script>");
//                out.println("</body>");
//                out.println("</html>");
                response.sendRedirect("Premium_User_home");



            } else {
//                out.println("<h2>Invalid Email or Password</h2>");

                out.println("<html>");
                out.println("<head><title>Login Result</title></head>");
                out.println("<body>");
                out.println("<script type='text/javascript'>");
                out.println("alert('Login Failed. Try again.');");
                out.println("window.location.href = 'index.html';");
                out.println("</script>");
                out.println("</body>");
                out.println("</html>");

//                RequestDispatcher rd = request.getRequestDispatcher("index.html");
//                rd.include(request, response);
            }

        } catch (Exception e) {
            out.println("value" + e.getMessage());
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
