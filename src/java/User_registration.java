import javax.servlet.RequestDispatcher;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.sql.DriverManager;
import java.sql.Connection;
import java.sql.PreparedStatement;

public class User_registration extends HttpServlet {

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();

        try {
            String name = request.getParameter("name");
            String mail = request.getParameter("mail");
            String mob = request.getParameter("mob");
            String height = request.getParameter("height");
            String weight = request.getParameter("weight");
            String date = request.getParameter("date");
            String gender = request.getParameter("gender");
            String pwd = request.getParameter("pwd");

            Class.forName("com.mysql.cj.jdbc.Driver");

            // ✅ Railway MySQL connection (replace password with your real one)
            String url = "jdbc:mysql://metro.proxy.rlwy.net:46756/railway?useSSL=false&allowPublicKeyRetrieval=true";
            String user = "root";
            String password = "xmNBUNWLgVuGVNqmfqgQnZverxKLlXyY"; // ← paste your real password here

            Connection cn = DriverManager.getConnection(url, user, password);

            // ✅ Create user table if not exists (optional, for first-time setup)
            cn.createStatement().executeUpdate(
                "CREATE TABLE IF NOT EXISTS user (" +
                "id INT AUTO_INCREMENT PRIMARY KEY," +
                "name VARCHAR(100)," +
                "email VARCHAR(100)," +
                "number VARCHAR(20)," +
                "birth_date VARCHAR(50)," +
                "gender VARCHAR(10)," +
                "height VARCHAR(10)," +
                "weight VARCHAR(10)," +
                "password VARCHAR(100))"
            );

            PreparedStatement ps = cn.prepareStatement(
                "INSERT INTO user(name,email,number,birth_date,gender,height,weight,password) VALUES(?,?,?,?,?,?,?,?)"
            );

            ps.setString(1, name);
            ps.setString(2, mail);
            ps.setString(3, mob);
            ps.setString(4, date);
            ps.setString(5, gender);
            ps.setString(6, height);
            ps.setString(7, weight);
            ps.setString(8, pwd);

            int rows = ps.executeUpdate();
            if (rows > 0) {
                out.println("<h2>You have successfully Registered</h2>");
                RequestDispatcher rd = request.getRequestDispatcher("index.html");
                rd.include(request, response);
            } else {
                out.println("<h3>Registration failed. Please try again.</h3>");
            }

            cn.close();

        } catch (Exception e) {
            e.printStackTrace(out); // prints full error trace on screen
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
        return "Handles user registration";
    }
}
