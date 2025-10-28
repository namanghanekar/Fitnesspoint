
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
public class Premium_User extends HttpServlet {

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();

        try {
//          HttpSession hs=request.getSession(false);
            Class.forName("com.mysql.cj.jdbc.Driver");

            Connection cn = DriverManager.getConnection("jdbc:mysql://localhost:3306/lGYM", "root", "naman");

            PreparedStatement ps = cn.prepareStatement("select * from premiumuser ");

            ResultSet rs = ps.executeQuery();

//            RequestDispatcher rd = request.getRequestDispatcher("logout.html");
//                rd.include(request, response);
            out.println("<h2>Premium Users</h2>");
            out.println("<table border='2' cellpadding='8' cellspacing='0' style='border-collapse: collapse; font-family: Arial;'>");
            out.println("<tr style='background-color:#f2f2f2;'><th>Id</th><th>Name</th><th>Email</th><th>Mobile</th><th>Birth Date</th><th>Gender</th><th>Height</th><th>Weight</th><th>Subscription Date</th><th>Expiry Date</th><th>Delete</th></tr>");

            while (rs.next()) {
                String id = rs.getString(1);
                String name = rs.getString(2);
                String mail = rs.getString(3);
                String mobile = rs.getString(4);
                String date = rs.getString(5);
                String gender = rs.getString(6);
                String height = rs.getString(7);
                String weight = rs.getString(8);
                 String password = rs.getString(9);
                String photo = rs.getString(10);
                String subscription_date = rs.getString(11);
                String expiry_date = rs.getString(12);

                out.println("<tr><td>" + id + "</td><td>" + name + "</td><td>" + mail + "</td><td>" + mobile + "</td><td>" + date + "</td><td>" + gender + "</td><td>" + height + "</td><td>" + weight + "</td><td>" + subscription_date + "</td><td>" + expiry_date + "</td><td><a href='Premiumuser_Delete?maill=" + mail + "'><center> <img src='images/delete.png' width='10%' height='5%' </center></a></td></tr>");

//               RequestDispatcher rd = request.getRequestDispatcher("logout.html");
//                rd.include(request, response);
            }
            out.println("</table>");
            cn.close();

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
