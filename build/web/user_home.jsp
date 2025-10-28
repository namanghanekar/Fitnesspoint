<%-- 
    Document   : user_home
    Created on : 11-Apr-2025, 7:54:02 pm
    Author     : Dell
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Profile Page</title>
        <link rel="stylesheet" href="user_home.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    </head>
    <body>
        <% 
            String mail = (String) request.getAttribute("mail");
            
        request.setAttribute("mail", mail);
        %>
        <header>
            <div class="container">
                <div class="logo"></div>
                <nav>
                    <input type="checkbox" id="nav-toggle">
                    <label for="nav-toggle" class="hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                    <ul class="nav-menu">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#class">Training</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="review.html">Review</a></li>
                    </ul>
                </nav>
                <div class="profile-container">
                    <div class="profile-photo" onclick="toggleDropdown()">
                        <img src="images/profilepic.png" alt="Profile Photo">

                    </div>
                    <div class="dropdown-menu" id="profileDropdown">

                        <ul>

                            <li>
                                <a href="Profile?mail=<%= mail %>">
                                    <i class="fa-solid fa-circle-user"></i>
                                    View Profile
                                </a>
                            </li>
                            <li>

                                <a href="PhotoServlet?mail=<%= mail %>">
                                    <i class="fa-solid fa-images"></i>
                                    View Profile Picture
                                </a>
                            </li>
                            <li>

                                <a href="editProfile.jsp?mail=<%= mail %>">
                                    <i class="fa-solid fa-user-pen"></i>
                                    Add Profile Picture
                                </a>
                            </li>

                            <li>
                                <a href="help_and_support.html">
                                    <i class="fas fa-question-circle"></i>
                                    Help & Support
                                </a>
                            </li>
                            <li>
                                <a href="logout.jsp">
                                    <i class="fas fa-sign-out-alt"></i>
                                    Logout
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


            <div class="section__container header__container" id="home">
                <div class="header__content">
                    <h1>DON'T STOP TILL YOUR SUCCESS!</h1>
                    <h2>GET FIT TO HAPPY</h2>
                    <p>
                        Unlock your full potential with our expert training and
                        state-of-the-art facilities. Every step you take brings you closer
                        to a healthier, happier you. Let's make fitness a lifestyle!
                    </p>
                </div>
                <div class="header__image">
                    <img src="images/header.png" alt="header" />
                </div>
            </div>
        </header>



        <section class="popular" id="class">
            <div class="section__container popular__container">
                <h2 class="section__header">What Do You Want To Do Today?</h2>
                <div class="popular__grid">

                    <!--                    <a href="choice.html" class="cardio-link">
                                            <div class="popular__card">
                                                <div>
                                                    <h4>Cardio </h4>
                                                    <p>Benefits heart and blood vessels</p> 
                                                </div>
                                                <span>
                                                    <i class="ri-arrow-right-fill"></i>
                                                </span>
                                            </div>
                                        </a>-->
                    <a href="exercises30days.html" class="cardio-link">
                        <div class="popular__card">
                            <div>
                                <h4>Cardio </h4>
                                <p>Benefits heart and blood vessels</p> 
                            </div>
                            <span>
                                <i class="ri-arrow-right-fill"></i>
                            </span>
                        </div>
                    </a>

                    <!--                    <a href="challenge.html" class="cardio-link">
                                            <div class="popular__card">
                                                <div>
                                                    <h4>Weight Training</h4>
                                                    <p>Build muscle strength</p>
                                                </div>
                                                <span>
                                                    <i class="ri-arrow-right-fill"></i>
                                                </span>
                                            </div>
                                        </a>-->

                    <a href="exercises30days.html" class="cardio-link">
                        <div class="popular__card">
                            <div>
                                <h4>Weight Training</h4>
                                <p>Build muscle strength</p>
                            </div>
                            <span>
                                <i class="ri-arrow-right-fill"></i>
                            </span>
                        </div>
                    </a>

                    <a href="exercises30days.html" class="cardio-link">
                        <div class="popular__card">
                            <div>
                                <h4>Calisthenics</h4>
                                <p>Body weight workout</p>
                            </div>
                            <span>
                                <i class="ri-arrow-right-fill"></i>
                            </span>
                        </div>
                    </a>
                </div>
            </div>
        </section>


        <section class="footer">
            <div class="section__container footer__container">

                <div class="footer__col">
                    <a href="#" class="footer__logo">
                        <img src="images/logo-white.png" alt="logo" />
                    </a>
                    <ul class="footer__links">
                        <li>
                            <a href="#">
                                <span><i class="ri-phone-line"></i></span> +91 9039517103
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span><i class="ri-map-pin-line"></i></span> Indore India
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span><i class="ri-mail-line"></i></span> Myfitness@gmail.com
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="footer__col">
                    <h4>Quick Links</h4>
                    <ul class="footer__links">
                        <li><a href="#">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#class">Classes</a></li>
                        <li><a href="#service">Gallery</a></li>
                        <li><a href="#">Membership</a></li>
                    </ul>
                </div>
                <div class="footer__col">
                    <h4>Gym Hours</h4>
                    <ul class="footer__links">
                        <li>Monday 5am - 10pm</li>
                        <li>Tuseday 5am - 10pm</li>
                        <li>Wednesday 5am - 10pm</li>
                        <li>Thursday 5am - 10pm</li>
                        <li>Friday 5am - 10pm</li>
                        <li>Saturday 5am - 10pm</li>
                        <li>Sunday 5am - 1pm</li>
                    </ul>
                </div>
            </div>
            <div class="footer__bar">
                Copyright © 2025. All rights reserved.
            </div>
        </section>

        <!-- <script src="https://unpkg.com/scrollreveal"></script> -->

        <script src="user_home.js"></script>
    </body>
</html>