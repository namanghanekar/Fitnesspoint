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

            Connection cn = DriverManager.getConnection("jdbc:mysql://localhost:3306/LGYM", "root", "naman");

            PreparedStatement ps = cn.prepareStatement("insert into user(name,email,number,birth_date,gender,height,weight,password) values(?,?,?,?,?,?,?,?)");

            ps.setString(1, name);
            ps.setString(2, mail);
            ps.setString(3, mob);
            ps.setString(4, date);
            ps.setString(5, gender);
            ps.setString(6, height);
            ps.setString(7, weight);
            ps.setString(8, pwd);

            boolean b = ps.execute();
            if (b == false) {
                out.println("<h2>You have successfully Registered</h2>");
                RequestDispatcher rd = request.getRequestDispatcher("index.html");
                rd.include(request, response);
            }
            cn.close();
        } catch (Exception e) {
            out.println(e.getMessage());
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
        return "Short description";
    }// </editor-fold>

}

