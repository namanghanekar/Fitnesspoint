import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class VerifyOtpServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String inputOtp = request.getParameter("otp");
        HttpSession session = request.getSession(false);
        String savedOtp = (String) session.getAttribute("otp");
        String email = (String) session.getAttribute("email");

        PrintWriter out = response.getWriter();
        response.setContentType("text/html");

        if (savedOtp != null && savedOtp.equals(inputOtp)) {
            out.println("<html>");
            out.println("<head><title>OTP Verified</title></head>");
            out.println("<body>");
            out.println("<script type='text/javascript'>");
            //out.println("alert('✅ OTP verified successfully!');");
            out.println("window.location.href = 'User_register.html?email=" + email + "';");
            out.println("</script>");
            out.println("</body>");
            out.println("</html>");
        } else {
            out.println("<html>");
            out.println("<head><title>Invalid OTP</title></head>");
            out.println("<body>");
            out.println("<script type='text/javascript'>");
            out.println("alert('❌ Invalid OTP. Please try again.');");
            out.println("window.location.href = 'verify-otp.html';");
            out.println("</script>");
            out.println("</body>");
            out.println("</html>");
        }
    }
}
