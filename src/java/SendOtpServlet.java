import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.util.Random;

public class SendOtpServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String userEmail = request.getParameter("email");
        String otp = generateOtp(6);

        HttpSession session = request.getSession();
        session.setAttribute("otp", otp);
        session.setAttribute("email", userEmail);

        Mailer.send(userEmail, "Your OTP Code", "Your Email verification OTP is: " + otp);

        response.sendRedirect("verify-otp.html");
    }

    private String generateOtp(int length) {
        String numbers = "0123456789";
        StringBuilder otp = new StringBuilder();
        Random random = new Random();
        for (int i = 0; i < length; i++) {
            otp.append(numbers.charAt(random.nextInt(numbers.length())));
        }
        return otp.toString();
    }
}
