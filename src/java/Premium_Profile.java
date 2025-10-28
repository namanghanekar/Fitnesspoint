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
import java.sql.DriverManager;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

/**
 *
 * @author Dell
 */
public class Premium_Profile extends HttpServlet {

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();

        try {
            HttpSession hs = request.getSession(false);
//           String email=(String)hs.getAttribute("mail");
//            String  = (String) request.getAttribute("mail");
            String email = (String) hs.getAttribute("mail");

// You can also re-set it or forward to a JSP
//request.setAttribute("mail", mail);
//            String email ="nilayj30@gmail.com";
            Class.forName("com.mysql.cj.jdbc.Driver");

            Connection cn = DriverManager.getConnection("jdbc:mysql://localhost:3306/LGYM", "root", "naman");

            PreparedStatement ps = cn.prepareStatement("select * from premiumuser where email=?");

            ps.setString(1, email);

            String id = null;
            String name = null;
            String mail = null;
            String mob = null;
            String height = null;
            String weight = null;
            String date = null;
            String gender = null;
            String pwd = null;

//            String photo = null;
            ResultSet rs = ps.executeQuery();
//            while (rs.next()) {
//                id = rs.getString(1);
//                name = rs.getString(2);
//                mail = rs.getString(3);
//                mob = rs.getString(4);
//                date = rs.getString(5);
//                gender = rs.getString(6);
//                height = rs.getString(7);
//                weight = rs.getString(8);
//                pwd = rs.getString(9);
//                System.out.println(id);
//            }
            if (rs.next()) {
                id = rs.getString(1);
                name = rs.getString(2);
                mail = rs.getString(3);
                mob = rs.getString(4);
                date = rs.getString(5);
                gender = rs.getString(6);
                height = rs.getString(7);
                weight = rs.getString(8);
                pwd = rs.getString(9);

//                 photo = rs.getString(10);
                // Set request attributes
                request.setAttribute("id", id);
                request.setAttribute("name", name);
                request.setAttribute("mail", mail);
                request.setAttribute("mob", mob);
                request.setAttribute("date", date);
                request.setAttribute("gender", gender);
                request.setAttribute("height", height);
                request.setAttribute("weight", weight);

//                                request.setAttribute("photo", photo);
            }
//            hs.setAttribute("mail", email);
            RequestDispatcher dispatcher = request.getRequestDispatcher("premium_profile.jsp");
            dispatcher.forward(request, response);

        } catch (Exception e) {
            out.print(e.getMessage());
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
