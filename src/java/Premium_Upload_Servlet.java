import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;
import java.io.*;
import java.sql.*;

@MultipartConfig(maxFileSize = 16177215)  // Upload file size up to 16MB
public class Premium_Upload_Servlet extends HttpServlet {

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();

        try {
            String mail = request.getParameter("mail");  // Use getParameter here
            Part filePart = request.getPart("image");    // Get uploaded file part

            InputStream inputStream = null;
            if (filePart != null) {
                inputStream = filePart.getInputStream();  // Get file content as InputStream
            }

            Class.forName("com.mysql.cj.jdbc.Driver");

            Connection cn = DriverManager.getConnection("jdbc:mysql://localhost:3306/LGYM", "root", "naman");

            PreparedStatement ps = cn.prepareStatement("UPDATE premiumuser SET photo = ? WHERE email = ?");
            
            if (inputStream != null) {
                ps.setBlob(1, inputStream);  // Set the image as BLOB
            }
            ps.setString(2, mail);

            int rowsAffected = ps.executeUpdate();
            if (rowsAffected > 0) {
                out.println("<html>");
                out.println("<head><title>Profile Update</title></head>");
                out.println("<body>");
                out.println("<script type='text/javascript'>");
                out.println("alert('Update Successful!');");
                out.println("window.location.href = 'premium_user_home.jsp';");
                out.println("</script>");
                out.println("</body>");
                out.println("</html>");
            } else {
                out.println("<html>");
                out.println("<head><title>Profile Update</title></head>");
                out.println("<body>");
                out.println("<script type='text/javascript'>");
                out.println("alert('Update Failed!');");
                out.println("window.location.href = 'premium_user_home.jsp';");
                out.println("</script>");
                out.println("</body>");
                out.println("</html>");
            }

            ps.close();
            cn.close();

        } catch (Exception e) {
            out.println("Error: " + e.getMessage());
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }
}
