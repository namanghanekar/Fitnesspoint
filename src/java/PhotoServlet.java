import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
import java.io.*;
import java.sql.*;

@WebServlet("/PhotoServlet") // Mapping servlet URL
public class PhotoServlet extends HttpServlet {

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        String mail = request.getParameter("mail");  // Get user mail from URL

        Connection cn = null;
        PreparedStatement ps = null;
        ResultSet rs = null;
        InputStream inputStream = null;

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            cn = DriverManager.getConnection("jdbc:mysql://localhost:3306/LGYM", "root", "naman");

            ps = cn.prepareStatement("SELECT photo FROM user WHERE email = ?");
            ps.setString(1, mail);
            rs = ps.executeQuery();

            if (rs.next()) {
                inputStream = rs.getBinaryStream("photo");
                if (inputStream != null) {
                    response.setContentType("image/jpeg"); // You can change to image/png if needed
                    OutputStream out = response.getOutputStream();
                    byte[] buffer = new byte[4096];
                    int bytesRead = -1;
                    while ((bytesRead = inputStream.read(buffer)) != -1) {
                        out.write(buffer, 0, bytesRead);
                    }
                    out.flush();
                }
            } else {
                response.setContentType("text/html");
                response.getWriter().println("No image found for this email.");
            }

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (inputStream != null) inputStream.close();
            if (rs != null) try { rs.close(); } catch (Exception ignored) {}
            if (ps != null) try { ps.close(); } catch (Exception ignored) {}
            if (cn != null) try { cn.close(); } catch (Exception ignored) {}
        }
    }
}
