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

        // 🧠 Railway MySQL credentials
        String user = "root";
        String password = "xmNBUNWLgVuGVNqmfqgQnZverxKLlXyY"; // your real Railway DB password
        String url;

        try {
            String mail = request.getParameter("mail");
            String pwd = request.getParameter("pwd");

            // ✅ Load MySQL Driver
            Class.forName("com.mysql.cj.jdbc.Driver");

            // ✅ Auto switch for local vs Railway environment
            String env = System.getenv("RAILWAY_ENVIRONMENT");
            if ("production".equals(env)) {
                // Inside Railway → use private network
                url = "jdbc:mysql://mysql.railway.internal:3306/railway?useSSL=false&allowPublicKeyRetrieval=true&autoReconnect=true&connectTimeout=10000&socketTimeout=10000&serverTimezone=UTC";
            } else {
                // Local testing → use public proxy
                url = "jdbc:mysql://metro.proxy.rlwy.net:46756/railway?useSSL=false&allowPublicKeyRetrieval=true&autoReconnect=true&connectTimeout=10000&socketTimeout=10000&serverTimezone=UTC";
            }

            // ✅ Connect to DB
            Connection cn = DriverManager.getConnection(url, admin, password);

            // ✅ Check admin credentials
            PreparedStatement ps = cn.prepareStatement(
                    "SELECT * FROM admin WHERE email=? AND BINARY password=?");
            ps.setString(1, mail);
            ps.setString(2, pwd);

            ResultSet rs = ps.executeQuery();

            if (rs.next()) {
                HttpSession hs = request.getSession(true);
                hs.setAttribute("mail", mail);

                // ✅ Success alert and redirect
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
            // 🚨 Print full exception details on browser for debugging
            out.println("<h3 style='color:red;'>Database Connection Error:</h3>");
            out.println("<pre>" + e.getMessage() + "</pre>");
            e.printStackTrace(out);
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
