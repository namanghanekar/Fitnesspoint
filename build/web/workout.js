const urlParams = new URLSearchParams(window.location.search);
const day = parseInt(urlParams.get("day")) || 1;

document.getElementById("dayTitle").textContent = `Day ${day} - Workout`;

const dayExercises = {
  1: [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  2: [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45],
  3: [2, 4, 6, 8, 10, 13, 16, 19, 22, 25, 28, 31, 34, 37, 40],
  // Add more days here
};

const exercises = dayExercises[day] || [];
let exerciseData = [];
let totalCalories = 0;

fetch('exercises.json')
  .then(res => res.json())
  .then(data => {
    exerciseData = data;
    const grid = document.getElementById('exerciseGrid');

    exercises.forEach(id => {
      const ex = data.find(e => e.id === id);
      if (!ex) return;

      const card = document.createElement('div');
      card.className = 'exercise-card';

      const checkbox = document.createElement('div');
      checkbox.className = 'checkbox';
      checkbox.addEventListener('click', e => {
        e.stopPropagation();
        checkbox.classList.toggle('checked');
        updateCalories();
      });

      const name = document.createElement('h3');
      name.textContent = ex.name;

      card.appendChild(checkbox);
      card.appendChild(name);

      card.addEventListener('click', () => openModal(ex));

      grid.appendChild(card);
    });
  });

function updateCalories() {
  const checkboxes = document.querySelectorAll('.checkbox');
  totalCalories = 0;
  checkboxes.forEach((box, index) => {
    if (box.classList.contains('checked')) {
      const ex = exerciseData.find(e => e.id === exercises[index]);
      totalCalories += ex.calories;
    }
  });
  document.getElementById('totalCalories').textContent = `Total Calories Burned: ${totalCalories} kcal`;
}

function openModal(ex) {
    // Set video, name, and other content inside the modal
    document.getElementById('videoFrame').src = ex.videoUrl;
    document.getElementById('exerciseName').textContent = ex.name;
    document.getElementById('calories').textContent = ex.calories;
    document.getElementById('description').textContent = ex.description;
    document.getElementById('mistakes').textContent = ex.commonMistakes;
    document.getElementById('focusArea').textContent = ex.focusArea;
    document.getElementById('focusImage').src = ex.focusImage;
  
    // Populate steps
    const stepsList = document.getElementById('steps');
    stepsList.innerHTML = '';  // Clear previous steps
    ex.steps.forEach(step => {
      const li = document.createElement('li');
      li.textContent = step;
      stepsList.appendChild(li);
    });
  
    // Show the modal by removing the 'hidden' class
    document.getElementById('exerciseModal').classList.remove('hidden');
  }
  
  // Close the modal when the close button is clicked
  document.getElementById('closeModal').addEventListener('click', () => {
    document.getElementById('exerciseModal').classList.add('hidden');
    document.getElementById('videoFrame').src = '';  // Stop video when closed
  });

  exercises.forEach(id => {
    const ex = data.find(e => e.id === id);
    if (!ex) return;
  
    const card = document.createElement('div');
    card.className = 'exercise-card';
  
    const checkbox = document.createElement('div');
    checkbox.className = 'checkbox';
    checkbox.addEventListener('click', (e) => {
      e.stopPropagation();
      checkbox.classList.toggle('checked');
      updateCalories();
    });
  
    const name = document.createElement('h3');
    name.textContent = ex.name;
  
    card.appendChild(checkbox);
    card.appendChild(name);
  
    // Add event listener to the card to open the modal
    card.addEventListener('click', () => openModal(ex));
  
    document.getElementById('exerciseGrid').appendChild(card);
  });
