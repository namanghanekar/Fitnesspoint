import javax.servlet.RequestDispatcher;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class Expired_Subscription extends HttpServlet {

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");

            Connection cn = DriverManager.getConnection("jdbc:mysql://localhost:3306/LGYM", "root", "naman");

            // ❗ Select only users whose expiry_date is in the past
            PreparedStatement ps = cn.prepareStatement("SELECT * FROM premiumuser WHERE expiry_date < CURDATE()");

            ResultSet rs = ps.executeQuery();

            out.println("<h2>Expired Premium Users</h2>");
            out.println("<table border='2' cellpadding='8' cellspacing='0' style='border-collapse: collapse; font-family: Arial;'>");
            out.println("<tr style='background-color:#f2f2f2;'><th>Id</th><th>Name</th><th>Email</th><th>Mobile</th><th>Birth Date</th><th>Gender</th><th>Height</th><th>Weight</th><th>Subscription Date</th><th>Expiry Date</th><th>Delete</th></tr>");

            while (rs.next()) {
                String id = rs.getString("id");
                String name = rs.getString("name");
                String mail = rs.getString("email");
                String mobile = rs.getString("number");
                String birthDate = rs.getString("birth_date");
                String gender = rs.getString("gender");
                String height = rs.getString("height");
                String weight = rs.getString("weight");
                String subscription_date = rs.getString("subscription_date");
                String expiry_date = rs.getString("expiry_date");

                out.println("<tr><td>" + id + "</td><td>" + name + "</td><td>" + mail + "</td><td>" + mobile +
                        "</td><td>" + birthDate + "</td><td>" + gender + "</td><td>" + height + "</td><td>" + weight +
                        "</td><td>" + subscription_date + "</td><td>" + expiry_date + "</td><td><a href='Premiumuser_Delete?maill=" +
                        mail + "'><img src='images/delete.png' width='20' height='20' alt='Delete'></a></td></tr>");
            }

            out.println("</table>");
            cn.close();

        } catch (Exception e) {
            out.print("<p style='color:red;'>Error: " + e.getMessage() + "</p>");
        }
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    @Override
    public String getServletInfo() {
        return "Displays expired premium users";
    }
}

