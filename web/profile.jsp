<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>User Profile</title>
        <link rel="stylesheet" href="profile.css">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap">
    </head>
    <body>

        <%
           String id = (String) request.getAttribute("id");
           String name = (String) request.getAttribute("name");
           String mail = (String) request.getAttribute("mail");
           String mob = (String) request.getAttribute("mob");
           String date = (String) request.getAttribute("date");
           String height = (String) request.getAttribute("height");
           String weight = (String) request.getAttribute("weight");
           String gender = (String) request.getAttribute("gender");

        request.setAttribute("mail", mail);
        %>

        <!--        
        <p>ID: ${id}</p>
        <p>Name: ${name}</p>
        <p>Email: ${mail}</p>
        <p>Phone: ${mob}</p>
        <p>DOB: ${date}</p>
        <p>Gender: ${gender}</p>
        <p>Height: ${height}</p>
        <p>Weight: ${weight}</p>
        -->

        <div class="container">
            <div class="profile-card">
                <div class="profile-header">
                    <div class="profile-img-container">
                        <img src="profiledefault/image" alt="Profile Picture" id="profile-img">


                        <div class="edit-overlay">
                            <label for="img-upload">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path><path d="m15 5 4 4"></path></svg>
                            </label>
                            <input type="file" id="img-upload" accept="image/*">
                        </div>

                    </div>
                    <div class="profile-info">
                        <h1 id="profile-name"> <%= name %> </h1>
                        <p id="profile-email"> <%= mail %> </p>

                    </div>
                </div>
                <div class="profile-details">
                    <div class="detail-item">
                        <div class="detail-label">Phone Number</div>
                        <div class="detail-value" id="profile-phone"><%out.println(mob); %></div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">Birth Date</div>
                        <div class="detail-value" id="profile-birthdate"><%out.println(date); %></div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">Gender</div>
                        <div class="detail-value" id="profile-gender"><%out.println(gender); %></div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">Height</div>
                        <div class="detail-value" id="profile-height"><%out.println(height); %></div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">Weight</div>
                        <div class="detail-value" id="profile-weight"><%out.println(weight); %></div>
                    </div>
                </div>
                <div class="profile-actions">
                    <button id="edit-profile-btn">Edit Profile</button>
                </div>
            </div>
        </div>

        <!-- Edit Profile Modal -->
        <div id="edit-modal" class="modal">
            <div class="modal-content">
                <span class="close-btn">&times;</span>
                <h2>Edit Profile</h2>
                <form action="User_profile_update" method="post">
                    <div class="form-group">
                        <label for="edit-name">Name</label>
                        <input type="text" id="edit-name" name="name" required>
                    </div>
                    <div class="form-group">
                        <label for="edit-email">Email</label>
                        <input type="email" id="edit-email" name="mail" readonly required>
                    </div>
                    <div class="form-group">
                        <label for="edit-phone">Phone Number</label>
                        <input type="tel" id="edit-phone" name="mob" required>
                    </div>
                    <div class="form-group">
                        <label for="edit-birthdate">Birth Date</label>
                        <input type="date" id="edit-birthdate" name="date" required>
                    </div>
                    <div class="form-group">
                        <label for="edit-gender">Gender</label>
                        <select id="edit-gender" name="gender" required>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="edit-height">Height</label>
                        <input type="text" id="edit-height" name="height" required>
                    </div>
                    <div class="form-group">
                        <label for="edit-weight">Weight</label>
                        <input type="text" id="edit-weight" name="weight" required>
                    </div>
                    <button type="submit" class="save-btn">Save Changes</button>
                </form>

            </div>
        </div>

        <script src="profile.js"></script>
    </body>
</html>