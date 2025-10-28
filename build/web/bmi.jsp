<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>BMI Calculator</title>
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            }

            body {
                background-color: #f5f5f5;
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 100vh;
                padding: 20px;
            }

            .container {
                background-color: white;
                border-radius: 10px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                width: 100%;
                max-width: 500px;
                padding: 30px;
            }

            h1 {
                text-align: center;
                margin-bottom: 20px;
                color: #333;
            }

            .input-group {
                margin-bottom: 20px;
            }

            label {
                display: block;
                margin-bottom: 8px;
                font-weight: 600;
                color: #555;
            }

            input {
                width: 100%;
                padding: 12px;
                border: 1px solid #ddd;
                border-radius: 5px;
                font-size: 16px;
                transition: border-color 0.3s;
            }

            input:focus {
                outline: none;
                border-color: #4a90e2;
            }

            .radio-group {
                display: flex;
                gap: 20px;
                margin-bottom: 20px;
            }

            .radio-option {
                display: flex;
                align-items: center;
                gap: 5px;
            }

            .radio-option input {
                width: auto;
            }

            button {
                background-color: #4a90e2;
                color: white;
                border: none;
                border-radius: 5px;
                padding: 12px 20px;
                font-size: 16px;
                font-weight: 600;
                cursor: pointer;
                width: 100%;
                transition: background-color 0.3s;
            }

            button:hover {
                background-color: #3a7bc8;
            }

            .result {
                margin-top: 30px;
                text-align: center;
                display: none;
            }

            .result h2 {
                margin-bottom: 10px;
                color: #333;
            }

            .bmi-value {
                font-size: 24px;
                font-weight: bold;
                margin-bottom: 10px;
            }

            .bmi-category {
                font-weight: 600;
                margin-bottom: 20px;
            }

            .bmi-bar-container {
                width: 100%;
                height: 30px;
                background-color: #f0f0f0;
                border-radius: 15px;
                position: relative;
                overflow: hidden;
                margin-bottom: 10px;
            }

            .bmi-bar {
                height: 100%;
                background: linear-gradient(to right,
                    #4a90e2 0%, /* Underweight */
                    #4ae24a 18.5%, /* Normal weight starts */
                    #4ae24a 25%, /* Normal weight */
                    #ffd700 25%, /* Overweight starts */
                    #ffd700 30%, /* Overweight */
                    #ff6347 30%, /* Obese starts */
                    #ff6347 100% /* Obese */
                    );
                border-radius: 15px;
            }

            .bmi-marker {
                position: absolute;
                top: 0;
                width: 4px;
                height: 30px;
                background-color: #333;
                transform: translateX(-50%);
            }

            .bmi-scale {
                display: flex;
                justify-content: space-between;
                margin-top: 5px;
                font-size: 12px;
                color: #777;
            }

            .bmi-info {
                margin-top: 20px;
                padding: 15px;
                background-color: #f9f9f9;
                border-radius: 5px;
                font-size: 14px;
                line-height: 1.5;
                color: #555;
            }

            @media (max-width: 480px) {
                .container {
                    padding: 20px;
                }

                .radio-group {
                    flex-direction: column;
                    gap: 10px;
                }
            }
        </style>
    </head>
    <body>

        <%
            String id = (String) request.getAttribute("id");
            String name = (String) request.getAttribute("name");
            String mail = (String) request.getAttribute("mail");
            String mob = (String) request.getAttribute("mob");
//            String date = (String) request.getAttribute("date");
            String birthDateStr = (String) request.getAttribute("date"); // example: "2003-04-28"
    int age = 0;

    if (birthDateStr != null && !birthDateStr.isEmpty()) {
        try {
            java.time.LocalDate birthDate = java.time.LocalDate.parse(birthDateStr);
            java.time.LocalDate currentDate = java.time.LocalDate.now();
            age = java.time.Period.between(birthDate, currentDate).getYears();
        } catch (Exception e) {
            age = 0; // fallback
        }
    }
            String height = (String) request.getAttribute("height");
            String weight = (String) request.getAttribute("weight");
            String gender = (String) request.getAttribute("gender");
            
            

            request.setAttribute("mail", mail);
        %>


        <div class="container">
            <h1>BMI Calculator</h1>

            <div class="input-group">
                <label for="age">Age (years)</label>
               <input type="number" id="age" name="age" value="<%= age %>" min="2" max="120" readonly required>

            </div>

            <div class="radio-group">
                <label>Gender:</label>
                <div class="radio-option">
                    <input type="radio" id="male" name="gender" value="male" <%= "male".equalsIgnoreCase(gender) ? "checked" : "" %> disabled required>
<label for="male">Male</label>
                </div>
                <div class="radio-option">
                   <input type="radio" id="female" name="gender" value="female" <%= "female".equalsIgnoreCase(gender) ? "checked" : "" %> disabled>
<label for="female">Female</label>
                </div>
            </div>

            <div class="input-group">
                <label for="height">Height (cm)</label>
               
                <input type="number" id="height" name="height" value="<%= height %>" min="50" max="250" readonly required>
            </div>

            <div class="input-group">
                <label for="weight">Weight (kg)</label>
               
<input type="number" id="weight" name="weight" value="<%= weight %>" min="10" max="300" readonly required>
            </div>
            

            <button id="calculate">Calculate BMI</button>

            <div class="result" id="result">
                <h2>Your BMI Result</h2>
                <div class="bmi-value" id="bmi-value">25.0</div>
                <div class="bmi-category" id="bmi-category">Normal weight</div>

                <div class="bmi-bar-container">
                    <div class="bmi-bar"></div>
                    <div class="bmi-marker" id="bmi-marker"></div>
                </div>

                <div class="bmi-scale">
                    <span>16</span>
                    <span>18.5</span>
                    <span>25</span>
                    <span>30</span>
                    <span>40</span>
                </div>
                <div class="bmi-info">
                    <h2>Get personalized workout recommendations tailored to your body</h2>
                    <a id="workout-link" href="#" target="_blank" style="display: inline-block; margin-top: 10px; padding: 10px 20px; background-color: #4a90e2; color: white; border-radius: 5px; text-decoration: none;">Start Workout</a>
                </div>

            </div>
        </div>

        <script>
            document.addEventListener('DOMContentLoaded', function () {
                const calculateButton = document.getElementById('calculate');
                const resultDiv = document.getElementById('result');
                const bmiValueDiv = document.getElementById('bmi-value');
                const bmiCategoryDiv = document.getElementById('bmi-category');
                const bmiMarker = document.getElementById('bmi-marker');
                const workoutLink = document.getElementById('workout-link');

                calculateButton.addEventListener('click', function () {
                    // Get input values
                    const age = parseFloat(document.getElementById('age').value);
                    const height = parseFloat(document.getElementById('height').value);
                    const weight = parseFloat(document.getElementById('weight').value);

                    // Validate inputs
                    if (!age || !height || !weight) {
                        alert('Please fill in all fields');
                        return;
                    }

                    if (age < 2 || age > 120) {
                        alert('Please enter a valid age (2-120 years)');
                        return;
                    }

                    if (height < 50 || height > 250) {
                        alert('Please enter a valid height (50-250 cm)');
                        return;
                    }

                    if (weight < 10 || weight > 300) {
                        alert('Please enter a valid weight (10-300 kg)');
                        return;
                    }

                    // Calculate BMI
                    const heightInMeters = height / 100;
                    const bmi = weight / (heightInMeters * heightInMeters);
                    const roundedBmi = Math.round(bmi * 10) / 10;

                    // Determine BMI category
                    let category, color, link;
                    if (bmi < 18.5) {
                        category = 'Underweight';
                        link = 'exercises30days.html';
                        color = '#4a90e2';
                    } else if (bmi < 25) {
                        category = 'Normal weight';
                        link = link = 'musclegainexercises.html';
                        color = '#4ae24a';
                    } else if (bmi < 30) {
                        category = 'Overweight';
                        link = 'https://example.com/overweight-workout';
                        color = '#ffd700';
                    } else {
                        category = 'Obese';
                        link = 'https://example.com/obese-workout';
                        color = '#ff6347';
                    }
                    

                    // Update the UI
                    bmiValueDiv.textContent = roundedBmi.toFixed(1);
                    bmiValueDiv.style.color = color;
                    bmiCategoryDiv.textContent = category;
                    bmiCategoryDiv.style.color = color;
                    workoutLink.href = link;

                    // Position the marker on the BMI bar
                    // Scale the BMI to a percentage of the bar width (16-40 BMI range)
                    const minBmi = 16;
                    const maxBmi = 40;
                    const percentage = ((bmi - minBmi) / (maxBmi - minBmi)) * 100;
                    const clampedPercentage = Math.min(Math.max(percentage, 0), 100);
                    bmiMarker.style.left = `${clampedPercentage}%`;

                    // Show the result
                    resultDiv.style.display = 'block';

                    // Scroll to result
                    resultDiv.scrollIntoView({behavior: 'smooth'});
                });
            });
        </script>
    </body>
</html>