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

public class Admin_checklogin extends HttpServlet {

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();

        try {
            String mail = request.getParameter("mail");
            String pwd = request.getParameter("pwd");

            // ✅ Load MySQL driver
            Class.forName("com.mysql.cj.jdbc.Driver");

            // ✅ Railway database connection
            String url = "jdbc:mysql://metro.proxy.rlwy.net:46756/railway?useSSL=false&allowPublicKeyRetrieval=true&autoReconnect=true&connectTimeout=10000&socketTimeout=10000&serverTimezone=UTC";
            String user = "root";
            String password = "xmNBUNWLgVuGVNqmfqgQnZverxKLlXyY"; // paste your real password here

            Connection cn = DriverManager.getConnection(url, user, password);

            // ✅ Check admin credentials
            PreparedStatement ps = cn.prepareStatement("SELECT * FROM admin WHERE email=? AND BINARY password=?");
            ps.setString(1, mail);
            ps.setString(2, pwd);

            ResultSet rs = ps.executeQuery();

            if (rs.next()) {
                HttpSession hs = request.getSession(true);
                hs.setAttribute("mail", mail);

                // ✅ Redirect after successful login
                out.println("<html>");
                out.println("<head><title>Login Success</title></head>");
                out.println("<body>");
                out.println("<script type='text/javascript'>");
                out.println("alert('Admin Login Successful!');");
                out.println("window.location.href = 'Admin_home';");
                out.println("</script>");
                out.println("</body>");
                out.println("</html>");
            } else {
                // ❌ Invalid credentials
                out.println("<html>");
                out.println("<head><title>Login Failed</title></head>");
                out.println("<body>");
                out.println("<script type='text/javascript'>");
                out.println("alert('Invalid Email or Password! Try again.');");
                out.println("window.location.href = 'admin_login.html';");
                out.println("</script>");
                out.println("</body>");
                out.println("</html>");
            }

            cn.close();

        } catch (Exception e) {
            e.printStackTrace(out); // print full error on the web page
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
        return "Handles Admin login validation";
    }
}
