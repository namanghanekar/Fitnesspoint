
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

/**
 *
 * @author Dell
 */
public class Premium_User_profile_update extends HttpServlet {

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();

        String name = request.getParameter("name");
            String mail = request.getParameter("mail");
            String mob = request.getParameter("mob");
            String date = request.getParameter("date");
            String height = request.getParameter("height");
            String weight = request.getParameter("weight");
            String gender = request.getParameter("gender");
     try {
            Class.forName("com.mysql.cj.jdbc.Driver");

            java.sql.Connection cn = DriverManager.getConnection("jdbc:mysql://localhost:3306/LGYM", "root", "naman");

            PreparedStatement ps = cn.prepareStatement("update premiumuser set name=?,number=?,birth_date=?,gender=?,height=?,weight=? where email=?");

            ps.setString(1, name);
            ps.setString(2, mob);
            ps.setString(3, date);
            ps.setString(4, gender);
            ps.setString(5, height);
            ps.setString(6, weight);
            ps.setString(7, mail);

//            boolean b = ps.execute();
            int rowsUpdated = ps.executeUpdate();

            if (rowsUpdated > 0) {
                // success
                response.sendRedirect("premium_user_home.jsp");
            } else {
                out.println("<h3 style='color:red;'>No records updated. Please check email.</h3>");
            }

        } catch (Exception e) {

            System.out.println(e.getMessage());

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
