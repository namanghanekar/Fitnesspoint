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

public class User_checklogin extends HttpServlet {

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();

        try {
            String mail = request.getParameter("mail");
            String pwd = request.getParameter("pwd");

            Class.forName("com.mysql.cj.jdbc.Driver");

            // ✅ Railway MySQL connection (replace password with your actual one)
            String url = "jdbc:mysql://metro.proxy.rlwy.net:46756/railway?useSSL=false&allowPublicKeyRetrieval=true";
            String user = "root";
            String password = "xmNBUNWLgVuGVNqmfqgQnZverxKLlXyY"; // <— paste the real password from Railway

            Connection cn = DriverManager.getConnection(url, user, password);

            PreparedStatement ps = cn.prepareStatement("SELECT * FROM user WHERE email=? AND BINARY password=?");
            ps.setString(1, mail);
            ps.setString(2, pwd);

            ResultSet rs = ps.executeQuery();

            if (rs.next()) {
                HttpSession hs = request.getSession(true);
                hs.setAttribute("mail", mail);

                out.println("<html>");
                out.println("<head><title>Login Result</title></head>");
                out.println("<body>");
                out.println("<script type='text/javascript'>");
                out.println("alert('Login Successful!');");
                out.println("window.location.href = 'User_home';"); // redirect after popup
                out.println("</script>");
                out.println("</body>");
                out.println("</html>");
            } else {
                out.println("<html>");
                out.println("<head><title>Login Result</title></head>");
                out.println("<body>");
                out.println("<script type='text/javascript'>");
                out.println("alert('Login Failed. Try again.');");
                out.println("window.location.href = 'index.html';");
                out.println("</script>");
                out.println("</body>");
                out.println("</html>");
            }

            cn.close();

        } catch (Exception e) {
            e.printStackTrace(out); // print error on web page for debugging
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
        return "Handles user login validation";
    }
}
