
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;


public class help_and_support_submit_ticket extends HttpServlet {


    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();

        try {
            // Get the email passed as a query parameter (via ?email=value)
            String name = request.getParameter("name");
            String to = request.getParameter("email");
            String subject = request.getParameter("subject");
            String message = request.getParameter("message");

            // Check if email is null or empty
            if (to == null || to.trim().isEmpty()) {
                out.println("Email address is missing.");
                return;
            }

            // Create subject and message
            String sub = "New Support Ticket: " + subject;
            String msg = "You have received a new support request:\n\n"
                    + "Name: " + name + "\n"
                    + "Email: " + to + "\n"
                    + "Subject: " + subject + "\n"
                    + "Message: " + message + "\n";

            // Send email
            Mailer.send(to, sub, msg);

            // Optional: Set a session attribute or request attribute if you want to access it later
            // request.setAttribute("userEmail", to);
            // Redirect to home page or confirmation page
            response.sendRedirect("user_home.jsp");

            // Optionally output success for debugging (won't show if redirected)
            // out.println("Reset link sent successfully to " + to);
        } catch (Exception e) {
            out.println("Error while sending email: " + e.getMessage());
            e.printStackTrace(out);
        } finally {
            out.close();
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

