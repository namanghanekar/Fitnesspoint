// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // ===== Exercise Database =====
    // This contains all the exercises with their descriptions, video IDs, and images
    const exerciseDatabase = {
        // Cardio exercises
        cardio: [
            {
                name: "Jumping Jacks",
                description: "Stand with feet together, arms at sides. Jump to spread feet and raise arms, then return to start position.",
                videoId: "c4DAnQ6DtF8",
                image: "/placeholder.svg?height=60&width=60&text=Jumping+Jacks"
            },
            {
                name: "High Knees",
                description: "Run in place, bringing knees up to hip level. Pump arms and maintain an upright posture.",
                videoId: "oDdkytliOqE",
                image: "/placeholder.svg?height=60&width=60&text=High+Knees"
            },
            {
                name: "Mountain Climbers",
                description: "Start in plank position. Alternate bringing knees toward chest in a running motion.",
                videoId: "nmwgirgXLYM",
                image: "/placeholder.svg?height=60&width=60&text=Mountain+Climbers"
            },
            {
                name: "Burpees",
                description: "Squat, place hands on floor, jump feet back to plank, do a push-up, jump feet forward, then jump up with arms overhead.",
                videoId: "TU8QYVW0gDU",
                image: "/placeholder.svg?height=60&width=60&text=Burpees"
            },
            {
                name: "Jump Rope",
                description: "Swing rope over head and under feet, jumping slightly to let rope pass. Keep elbows close to body.",
                videoId: "u3zgHI8QnqE",
                image: "/placeholder.svg?height=60&width=60&text=Jump+Rope"
            },
            {
                name: "Squat Jumps",
                description: "Lower into squat position, then explosively jump upward. Land softly and immediately lower into next squat.",
                videoId: "CVaEhXotL7M",
                image: "/placeholder.svg?height=60&width=60&text=Squat+Jumps"
            },
            {
                name: "Jumping Lunges",
                description: "Start in lunge position. Jump up and switch legs in mid-air, landing in lunge with opposite leg forward.",
                videoId: "hTdcOG9muQk",
                image: "/placeholder.svg?height=60&width=60&text=Jumping+Lunges"
            },
            {
                name: "Speed Skaters",
                description: "Jump laterally from one foot to the other, bringing trailing leg behind leading leg. Touch floor with hand if possible.",
                videoId: "qXpy7Xpf_Cg",
                image: "/placeholder.svg?height=60&width=60&text=Speed+Skaters"
            }
        ],
        
        // Strength exercises
        strength: [
            {
                name: "Push-ups",
                description: "Start in plank position with hands shoulder-width apart. Lower chest to floor, then push back up.",
                videoId: "IODxDxX7oi4",
                image: "/placeholder.svg?height=60&width=60&text=Push-ups"
            },
            {
                name: "Squats",
                description: "Stand with feet shoulder-width apart. Lower hips back and down as if sitting in chair, then return to standing.",
                videoId: "aclHkVaku9U",
                image: "/placeholder.svg?height=60&width=60&text=Squats"
            },
            {
                name: "Lunges",
                description: "Step forward with one leg and lower body until both knees are bent at 90 degrees. Push back to start and repeat with other leg.",
                videoId: "QOVaHwm-Q6U",
                image: "/placeholder.svg?height=60&width=60&text=Lunges"
            },
            {
                name: "Plank",
                description: "Hold push-up position with body in straight line from head to heels. Keep core engaged and don't let hips sag.",
                videoId: "pSHjTRCQxIw",
                image: "/placeholder.svg?height=60&width=60&text=Plank"
            },
            {
                name: "Dumbbell Rows",
                description: "Bend at hips with flat back, holding weight in one hand. Pull weight up to side of body, keeping elbow close.",
                videoId: "roCP6wCXPqo",
                image: "/placeholder.svg?height=60&width=60&text=Dumbbell+Rows"
            },
            {
                name: "Glute Bridges",
                description: "Lie on back with knees bent. Push through heels to lift hips toward ceiling, squeezing glutes at top.",
                videoId: "wPM8icPu6H8",
                image: "/placeholder.svg?height=60&width=60&text=Glute+Bridges"
            },
            {
                name: "Tricep Dips",
                description: "Sit on edge of chair with hands beside hips. Slide buttocks off edge and bend elbows to lower body, then push back up.",
                videoId: "jox1rb5krQI",
                image: "/placeholder.svg?height=60&width=60&text=Tricep+Dips"
            },
            {
                name: "Bicycle Crunches",
                description: "Lie on back with hands behind head. Bring opposite elbow to knee while extending other leg, alternating sides.",
                videoId: "Iwyvozckjak",
                image: "/placeholder.svg?height=60&width=60&text=Bicycle+Crunches"
            }
        ],
        
        // Core exercises
        core: [
            {
                name: "Crunches",
                description: "Lie on back with knees bent. Curl upper body toward knees, lifting shoulder blades off floor.",
                videoId: "4hmQD9Ov3ms",
                image: "/placeholder.svg?height=60&width=60&text=Crunches"
            },
            {
                name: "Russian Twists",
                description: "Sit with knees bent and lean back slightly. Rotate torso side to side, touching floor beside hips.",
                videoId: "wkD8rjkodUI",
                image: "/placeholder.svg?height=60&width=60&text=Russian+Twists"
            },
            {
                name: "Leg Raises",
                description: "Lie on back with legs straight. Lift legs toward ceiling while keeping lower back pressed into floor.",
                videoId: "JB2oyawG9KI",
                image: "/placeholder.svg?height=60&width=60&text=Leg+Raises"
            },
            {
                name: "Plank Shoulder Taps",
                description: "Start in plank position. Tap opposite shoulder with hand while maintaining stable hips and core.",
                videoId: "gWHQpMUd7vw",
                image: "/placeholder.svg?height=60&width=60&text=Plank+Shoulder+Taps"
            },
            {
                name: "Side Planks",
                description: "Lie on side with elbow under shoulder. Lift hips to create straight line from head to feet.",
                videoId: "rCxF2nG0MnI",
                image: "/placeholder.svg?height=60&width=60&text=Side+Planks"
            },
            {
                name: "Mountain Climbers",
                description: "Start in plank position. Alternate bringing knees toward chest in a running motion.",
                videoId: "nmwgirgXLYM",
                image: "/placeholder.svg?height=60&width=60&text=Mountain+Climbers"
            },
            {
                name: "Flutter Kicks",
                description: "Lie on back with legs extended and slightly raised. Alternate raising and lowering legs in small, quick movements.",
                videoId: "ANVdMDaYRts",
                image: "/placeholder.svg?height=60&width=60&text=Flutter+Kicks"
            },
            {
                name: "Hollow Hold",
                description: "Lie on back, arms extended overhead. Lift shoulders and legs off floor, creating a curved shape with body.",
                videoId: "63Q9ezNX5Pw",
                image: "/placeholder.svg?height=60&width=60&text=Hollow+Hold"
            }
        ],
        
        // Flexibility exercises
        flexibility: [
            {
                name: "Forward Fold",
                description: "Stand with feet hip-width apart. Hinge at hips and fold forward, reaching toward floor.",
                videoId: "g7Uhp5tphAs",
                image: "/placeholder.svg?height=60&width=60&text=Forward+Fold"
            },
            {
                name: "Downward Dog",
                description: "Start on hands and knees. Lift hips up and back, straightening legs to form an inverted V shape.",
                videoId: "EC7RGJ975iM",
                image: "/placeholder.svg?height=60&width=60&text=Downward+Dog"
            },
            {
                name: "Cat-Cow Stretch",
                description: "Start on hands and knees. Alternate between arching back (cow) and rounding spine (cat).",
                videoId: "kqnua4rHVVA",
                image: "/placeholder.svg?height=60&width=60&text=Cat-Cow"
            },
            {
                name: "Butterfly Stretch",
                description: "Sit with soles of feet together. Hold feet and gently press knees toward floor.",
                videoId: "MkUVKVxrn4c",
                image: "/placeholder.svg?height=60&width=60&text=Butterfly+Stretch"
            },
            {
                name: "Hip Flexor Stretch",
                description: "Kneel on one knee with other foot in front. Push hips forward until you feel stretch in front hip.",
                videoId: "YQmpO9VT2X4",
                image: "/placeholder.svg?height=60&width=60&text=Hip+Flexor"
            },
            {
                name: "Shoulder Stretch",
                description: "Bring one arm across chest and use opposite hand to gently pull elbow closer to body.",
                videoId: "bP4p5LQGIqI",
                image: "/placeholder.svg?height=60&width=60&text=Shoulder+Stretch"
            },
            {
                name: "Child's Pose",
                description: "Kneel with toes together, knees apart. Sit back on heels and extend arms forward, lowering chest toward floor.",
                videoId: "eqVMAPM00DM",
                image: "/placeholder.svg?height=60&width=60&text=Child's+Pose"
            },
            {
                name: "Cobra Stretch",
                description: "Lie face down with hands under shoulders. Press into hands to lift chest off floor while keeping hips down.",
                videoId: "JDcdhTuycOI",
                image: "/placeholder.svg?height=60&width=60&text=Cobra+Stretch"
            }
        ],
        
        // Recovery exercises
        recovery: [
            {
                name: "Foam Rolling",
                description: "Use foam roller on tight muscles, rolling slowly and pausing on tender areas for 20-30 seconds.",
                videoId: "M9zcCPbYIQY",
                image: "/placeholder.svg?height=60&width=60&text=Foam+Rolling"
            },
            {
                name: "Light Walking",
                description: "Walk at comfortable pace with good posture. Focus on deep breathing and relaxation.",
                videoId: "njeZ29umD3w",
                image: "/placeholder.svg?height=60&width=60&text=Light+Walking"
            },
            {
                name: "Gentle Yoga",
                description: "Follow gentle yoga sequence focusing on slow movements and deep stretches.",
                videoId: "BPK9WNtpBgk",
                image: "/placeholder.svg?height=60&width=60&text=Gentle+Yoga"
            },
            {
                name: "Deep Breathing",
                description: "Sit or lie comfortably. Inhale deeply through nose for 4 counts, hold for 2, exhale through mouth for 6.",
                videoId: "acUZdGd_3Gk",
                image: "/placeholder.svg?height=60&width=60&text=Deep+Breathing"
            },
            {
                name: "Leg Elevations",
                description: "Lie on back near wall. Extend legs up wall with buttocks close to wall. Relax and breathe deeply.",
                videoId: "LuKDIUYu3Hk",
                image: "/placeholder.svg?height=60&width=60&text=Leg+Elevations"
            },
            {
                name: "Arm Circles",
                description: "Stand with arms extended to sides. Make small circles, gradually increasing to larger circles.",
                videoId: "bP4p5LQGIqI",
                image: "/placeholder.svg?height=60&width=60&text=Arm+Circles"
            },
            {
                name: "Neck Stretches",
                description: "Gently tilt head to each side, bringing ear toward shoulder. Also look down and up, and turn head side to side.",
                videoId: "XtZ4SPc-SHw",
                image: "/placeholder.svg?height=60&width=60&text=Neck+Stretches"
            },
            {
                name: "Ankle Rotations",
                description: "Sit and lift one foot. Rotate ankle in circles, going both clockwise and counterclockwise.",
                videoId: "V4P36Ukl4_0",
                image: "/placeholder.svg?height=60&width=60&text=Ankle+Rotations"
            }
        ]
    };

    // ===== Day Types Configuration =====
    // Define the focus for each day with images
    const dayTypes = [
        { 
            type: 'cardio', 
            name: 'Cardio Blast',
            image: "images/about.jpg?height=160&width=350&text=Cardio+Blast"
        },
        { 
            type: 'strength', 
            name: 'Strength Training',
            image: "images/image5.jpg?height=160&width=350&text=Strength+Training"
        },
        { 
            type: 'core', 
            name: 'Core Focus',
            image: "images/image4.jpg?height=160&width=350&text=Core+Focus"
        },
        { 
            type: 'cardio', 
            name: 'Cardio Endurance',
            image: "images/about.jpg?height=160&width=350&text=Cardio+Endurance"
        },
        { 
            type: 'strength', 
            name: 'Upper Body Strength',
            image: "images/image5.jpg?height=160&width=350&text=Upper+Body"
        },
        { 
            type: 'flexibility', 
            name: 'Flexibility & Mobility',
            image: "images/image3.jpg?height=160&width=350&text=Flexibility"
        },
        { 
            type: 'recovery', 
            name: 'Active Recovery',
            image: "images/images12.jpeg?height=160&width=350&text=Recovery"
        },
        { 
            type: 'cardio', 
            name: 'HIIT Training',
            image: "images/about.jpg?height=160&width=350&text=HIIT+Training"
        },
        { 
            type: 'strength', 
            name: 'Lower Body Strength',
            image: "images/image5.jpg?height=160&width=350&text=Lower+Body"
        },
        { 
            type: 'core', 
            name: 'Core Stability',
            image: "images/image4.jpg?height=160&width=350&text=Core+Stability"
        },
        { 
            type: 'cardio', 
            name: 'Cardio & Agility',
            image: "images/about.jpg?height=160&width=350&text=Cardio+Agility"
        },
        { 
            type: 'strength', 
            name: 'Full Body Strength',
            image: "images/image5.jpg?height=160&width=350&text=Full+Body"
        },
        { 
            type: 'flexibility', 
            name: 'Deep Stretching',
            image: "images/image3.jpg?height=160&width=350&text=Deep+Stretching"
        },
        { 
            type: 'recovery', 
            name: 'Rest & Recover',
            image: "images/images12.jpeg?height=160&width=350&text=Rest+Recover"
        },
        { 
            type: 'cardio', 
            name: 'Interval Training',
            image: "images/about.jpg?height=160&width=350&text=Interval+Training"
        },
        { 
            type: 'strength', 
            name: 'Push & Pull Focus',
            image: "images/image5.jpg?height=160&width=350&text=Push+Pull"
        },
        { 
            type: 'core', 
            name: 'Core Power',
            image: "images/image4.jpg?height=160&width=350&text=Core+Power"
        },
        { 
            type: 'cardio', 
            name: 'Endurance Challenge',
            image: "images/about.jpg?height=160&width=350&text=Endurance"
        },
        { 
            type: 'strength', 
            name: 'Functional Strength',
            image: "images/image4.jpg?height=160&width=350&text=Functional"
        },
        { 
            type: 'flexibility', 
            name: 'Mobility Work',
            image: "images/image3.jpg?height=160&width=350&text=Mobility"
        },
        { 
            type: 'recovery', 
            name: 'Active Recovery',
            image: "images/images12.jpeg?height=160&width=350&text=Recovery"
        },
        { 
            type: 'cardio', 
            name: 'Speed & Power',
            image: "images/about.jpg?height=160&width=350&text=Speed+Power"
        },
        { 
            type: 'strength', 
            name: 'Compound Movements',
            image: "images/image4.jpg?height=160&width=350&text=Compound"
        },
        { 
            type: 'core', 
            name: 'Core & Balance',
            image: "images/image4.jpg?height=160&width=350&text=Core+Balance"
        },
        { 
            type: 'cardio', 
            name: 'Cardio Finisher',
            image: "images/about.jpg?height=160&width=350&text=Cardio+Finisher"
        },
        { 
            type: 'strength', 
            name: 'Strength Endurance',
            image: "images/image4.jpg?height=160&width=350&text=Strength+Endurance"
        },
        { 
            type: 'flexibility', 
            name: 'Full Body Flexibility',
            image: "images/image3.jpg?height=160&width=350&text=Full+Flexibility"
        },
        { 
            type: 'recovery', 
            name: 'Gentle Movement',
            image: "images/images12.jpeg?height=160&width=350&text=Gentle+Movement"
        },
        { 
            type: 'cardio', 
            name: 'Final Push',
            image: "images/about.jpg?height=160&width=350&text=Final+Push"
        },
        { 
            type: 'strength', 
            name: 'Challenge Finale',
            image: "images/image4.jpg?height=160&width=350&text=Challenge+Finale"
        }
    ];

    // ===== DOM Elements =====
    const daysSlider = document.getElementById('daysSlider');
    const progressBar = document.getElementById('progressBar');
    const daysCompletedElement = document.getElementById('daysCompleted');
    const daysRemainingElement = document.getElementById('daysRemaining');
    const completionPercentageElement = document.getElementById('completionPercentage');
    const videoModal = document.getElementById('videoModal');
    const videoContainer = document.getElementById('videoContainer');
    const modalTitle = document.getElementById('modalTitle');
    const closeModal = document.querySelector('.close-modal');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const prevDayBtn = document.getElementById('prevDay');
    const nextDayBtn = document.getElementById('nextDay');
    const currentDayIndicator = document.getElementById('currentDayIndicator');

    // ===== State Management =====
    // Load completed days from localStorage or initialize empty array
    let completedDays = JSON.parse(localStorage.getItem('fitnessChallengeCompletedDays')) || [];
    let currentSlideIndex = 0;
    const cardsPerView = getCardsPerView();
    const totalDays = 30;

    // ===== Helper Functions =====
    
    /**
     * Get number of cards to show per view based on screen width
     * @returns {Number} - Number of cards to show
     */
    function getCardsPerView() {
        if (window.innerWidth < 768) {
            return 1;
        } else if (window.innerWidth < 1024) {
            return 2;
        } else {
            return 3;
        }
    }
    
    /**
     * Get random exercises from a specific category
     * @param {Array} exerciseList - List of exercises to choose from
     * @param {Number} count - Number of exercises to select
     * @returns {Array} - Array of randomly selected exercises
     */
    function getRandomExercises(exerciseList, count) {
        // Create a copy of the array to avoid modifying the original
        const shuffled = [...exerciseList];
        
        // Fisher-Yates shuffle algorithm
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        
        // Return the first 'count' elements
        return shuffled.slice(0, count);
    }
    
    /**
     * Check if a day is completed
     * @param {Number} dayNumber - The day number to check
     * @returns {Boolean} - True if day is completed, false otherwise
     */
    function isDayCompleted(dayNumber) {
        return completedDays.includes(dayNumber);
    }
    
    /**
     * Update the progress bar and stats
     */
    function updateProgress() {
        const completed = completedDays.length;
        const total = 30;
        const remaining = total - completed;
        const percentage = Math.round((completed / total) * 100);
        
        // Update DOM elements
        progressBar.style.width = `${percentage}%`;
        daysCompletedElement.textContent = completed;
        daysRemainingElement.textContent = remaining;
        completionPercentageElement.textContent = `${percentage}%`;
        
        // Save to localStorage
        localStorage.setItem('fitnessChallengeCompletedDays', JSON.stringify(completedDays));
    }
    
    /**
     * Toggle completion status of a day
     * @param {Number} dayNumber - The day number to toggle
     */
    function toggleDayCompletion(dayNumber) {
        const index = completedDays.indexOf(dayNumber);
        
        if (index === -1) {
            // Day is not completed, add it to completed days
            completedDays.push(dayNumber);
        } else {
            // Day is already completed, remove it
            completedDays.splice(index, 1);
        }
        
        // Update progress and UI
        updateProgress();
        
        // Update the button and card UI
        const dayCard = document.querySelector(`.day-card[data-day="${dayNumber}"]`);
        const completeBtn = dayCard.querySelector('.complete-btn');
        
        if (isDayCompleted(dayNumber)) {
            dayCard.classList.add('completed');
            completeBtn.classList.add('completed');
            completeBtn.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 6L9 17l-5-5"/>
                </svg>
                Completed
            `;
            
            // Add completed badge if it doesn't exist
            if (!dayCard.querySelector('.day-completed-badge')) {
                const badge = document.createElement('div');
                badge.className = 'day-completed-badge';
                badge.innerHTML = '✓';
                dayCard.querySelector('.day-header-overlay').appendChild(badge);
            }
        } else {
            dayCard.classList.remove('completed');
            completeBtn.classList.remove('completed');
            completeBtn.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 8v4M12 16h.01"/>
                </svg>
                Mark Complete
            `;
            
            // Remove completed badge if it exists
            const badge = dayCard.querySelector('.day-completed-badge');
            if (badge) {
                badge.remove();
            }
        }
    }
    
    /**
     * Open video modal with specific exercise video
     * @param {String} videoId - YouTube video ID
     * @param {String} exerciseName - Name of the exercise
     */
    function openVideoModal(videoId, exerciseName) {
        // Set the modal title
        modalTitle.textContent = exerciseName;
        
        // Create the iframe for YouTube video
        videoContainer.innerHTML = `
            <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/${videoId}" 
                title="${exerciseName}" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        `;
        
        // Show the modal
        videoModal.classList.add('active');
        
        // Prevent body scrolling when modal is open
        document.body.style.overflow = 'hidden';
    }
    
    /**
     * Close the video modal
     */
    function closeVideoModal() {
        videoModal.classList.remove('active');
        
        // Clear the video to stop playback
        videoContainer.innerHTML = '';
        
        // Re-enable body scrolling
        document.body.style.overflow = 'auto';
    }
    
    /**
     * Filter days based on completion status
     * @param {String} filter - Filter type ('all', 'completed', or 'incomplete')
     */
    function filterDays(filter) {
        const dayCards = document.querySelectorAll('.day-card');
        
        dayCards.forEach(card => {
            const dayNumber = parseInt(card.dataset.day);
            const isCompleted = isDayCompleted(dayNumber);
            
            switch (filter) {
                case 'all':
                    card.style.display = 'block';
                    break;
                case 'completed':
                    card.style.display = isCompleted ? 'block' : 'none';
                    break;
                case 'incomplete':
                    card.style.display = !isCompleted ? 'block' : 'none';
                    break;
            }
        });
        
        // Reset slider position
        currentSlideIndex = 0;
        updateSliderPosition();
        updateDayIndicator();
    }
    
    /**
     * Update the slider position based on current index
     */
    function updateSliderPosition() {
        const cardWidth = document.querySelector('.day-card').offsetWidth;
        const gap = 20; // Gap between cards in pixels
        const offset = currentSlideIndex * (cardWidth + gap);
        daysSlider.style.transform = `translateX(-${offset}px)`;
    }
    
    /**
     * Update the day indicator text
     */
    function updateDayIndicator() {
        const startDay = currentSlideIndex + 1;
        const endDay = Math.min(startDay + cardsPerView - 1, totalDays);
        currentDayIndicator.textContent = `Day ${startDay}-${endDay}`;
    }
    
    /**
     * Navigate to previous slide
     */
    function goToPrevSlide() {
        if (currentSlideIndex > 0) {
            currentSlideIndex--;
            updateSliderPosition();
            updateDayIndicator();
        }
    }
    
    /**
     * Navigate to next slide
     */
    function goToNextSlide() {
        const maxIndex = totalDays - cardsPerView;
        if (currentSlideIndex < maxIndex) {
            currentSlideIndex++;
            updateSliderPosition();
            updateDayIndicator();
        }
    }

    // ===== Generate Day Cards =====
    function generateDayCards() {
        // Clear existing content
        daysSlider.innerHTML = '';
        
        // Create 30 day cards
        for (let i = 0; i < 30; i++) {
            const dayNumber = i + 1;
            const dayType = dayTypes[i];
            const isCompleted = isDayCompleted(dayNumber);
            
            // Get 5 random exercises for this day
            const exercises = getRandomExercises(exerciseDatabase[dayType.type], 5);
            
            // Create day card element
            const dayCard = document.createElement('div');
            dayCard.className = `day-card ${isCompleted ? 'completed' : ''}`;
            dayCard.dataset.day = dayNumber;
            dayCard.dataset.type = dayType.type;
            
            // Set difficulty level (1-5) based on day number and type
            const difficulty = Math.min(Math.ceil(dayNumber / 6), 5);
            
            // Generate difficulty dots HTML
            let difficultyDots = '';
            for (let j = 1; j <= 5; j++) {
                difficultyDots += `<div class="difficulty-dot ${j <= difficulty ? 'active' : ''}"></div>`;
            }
            
            // Create HTML for the day card
            dayCard.innerHTML = `
                <div class="day-header">
                    <img src="${dayType.image}" alt="${dayType.name}" class="day-header-img">
                    <div class="day-header-overlay">
                        <div class="day-number">${dayNumber}</div>
                        <div class="day-title-container">
                            <div class="day-title">Day ${dayNumber}</div>
                            <div class="day-focus">${dayType.name}</div>
                        </div>
                        ${isCompleted ? '<div class="day-completed-badge">✓</div>' : ''}
                    </div>
                </div>
                <div class="day-content">
                    <ul class="exercise-list">
                        ${exercises.map(exercise => `
                            <li class="exercise-item">
                                <img src="${exercise.image}" alt="${exercise.name}" class="exercise-image">
                                <div class="exercise-details">
                                    <div class="exercise-name">
                                        ${exercise.name}
                                        <button class="video-btn" data-video="${exercise.videoId}" data-name="${exercise.name}">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                            </svg>
                                            Watch
                                        </button>
                                    </div>
                                    <div class="exercise-description">${exercise.description}</div>
                                </div>
                            </li>
                        `).join('')}
                    </ul>
                </div>
                <div class="day-footer">
                    <div class="day-difficulty">
                        ${difficultyDots}
                    </div>
                    <button class="complete-btn ${isCompleted ? 'completed' : ''}">
                        ${isCompleted ? `
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M20 6L9 17l-5-5"/>
                            </svg>
                            Completed
                        ` : `
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="10"/>
                                <path d="M12 8v4M12 16h.01"/>
                            </svg>
                            Mark Complete
                        `}
                    </button>
                </div>
            `;
            
            // Add the card to the slider
            daysSlider.appendChild(dayCard);
        }
    }

    // ===== Event Listeners =====
    
    // Event delegation for day cards
    daysSlider.addEventListener('click', function(e) {
        // Handle complete button clicks
        if (e.target.closest('.complete-btn')) {
            const dayCard = e.target.closest('.day-card');
            const dayNumber = parseInt(dayCard.dataset.day);
            toggleDayCompletion(dayNumber);
        }
        
        // Handle video button clicks
        if (e.target.closest('.video-btn')) {
            const videoBtn = e.target.closest('.video-btn');
            const videoId = videoBtn.dataset.video;
            const exerciseName = videoBtn.dataset.name;
            openVideoModal(videoId, exerciseName);
        }
    });
    
    // Close modal when clicking the close button
    closeModal.addEventListener('click', closeVideoModal);
    
    // Close modal when clicking outside the modal content
    videoModal.addEventListener('click', function(e) {
        if (e.target === videoModal) {
            closeVideoModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && videoModal.classList.contains('active')) {
            closeVideoModal();
        }
    });
    
    // Filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Apply filter
            filterDays(this.dataset.filter);
        });
    });
    
    // Slider navigation buttons
    prevDayBtn.addEventListener('click', goToPrevSlide);
    nextDayBtn.addEventListener('click', goToNextSlide);
    
    // Handle window resize
    window.addEventListener('resize', function() {
        const newCardsPerView = getCardsPerView();
        if (newCardsPerView !== cardsPerView) {
            // Update cards per view and reset position
            let cardsPerView = newCardsPerView;
            currentSlideIndex = 0;
            updateSliderPosition();
            updateDayIndicator();
        }
    });
    
    // Touch events for mobile swiping
    let touchStartX = 0;
    let touchEndX = 0;
    
    daysSlider.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    daysSlider.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const minSwipeDistance = 50;
        if (touchEndX < touchStartX - minSwipeDistance) {
            // Swipe left - go to next slide
            goToNextSlide();
        } else if (touchEndX > touchStartX + minSwipeDistance) {
            // Swipe right - go to previous slide
            goToPrevSlide();
        }
    }

    // ===== Initialize =====
    generateDayCards();
    updateProgress();
    updateDayIndicator();
});
