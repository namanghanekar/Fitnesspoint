document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".day-box");
  let completedDays = 0;

  boxes.forEach((box, index) => {
    const day = index + 1;
    const progressFill = box.querySelector(".progress-fill");

    // Get completed exercises for this day
    const completedExercises = JSON.parse(localStorage.getItem(`day-${day}-completed`) || "[]");
    const percent = (completedExercises.length / 15) * 100;
    progressFill.style.width = `${percent}%`;

    // Count this day complete if 15 exercises are done
    if (completedExercises.length === 15) completedDays++;

    // 🔓 Day 1 is always unlocked
    if (day === 1) {
      box.classList.remove("locked");
      box.href = `workout.html?day=${day}`;
      return;
    }

    // 🔒 Lock this day if previous day isn't complete
    const prevCompleted = JSON.parse(localStorage.getItem(`day-${day - 1}-completed`) || "[]");

    if (prevCompleted.length < 15) {
      box.classList.add("locked");
      box.href = "javascript:void(0)";
      box.querySelector("h2").textContent += " 🔒";
    } else {
      box.classList.remove("locked");
      box.href = `workout.html?day=${day}`;
    }
  });

  // Main progress bar
  const mainProgress = document.getElementById("mainProgress");
  const mainProgressText = document.getElementById("mainProgressText");
  const percentMain = (completedDays / 30) * 100;
  mainProgress.style.width = `${percentMain}%`;
  mainProgressText.textContent = `${completedDays} of 30 days completed`;
});

 // new
//  document.addEventListener('DOMContentLoaded', function () {
//   const daysContainer = document.getElementById("daysContainer");

//   for (let i = 1; i <= 30; i++) {
//     const dayCard = document.createElement("div");
//     dayCard.classList.add("day-card");
//     dayCard.innerHTML = `
//       <h3>Day ${i}</h3>
//       <progress value="${getProgress(i)}" max="15"></progress>
//       <button ${i > 1 && !isDayCompleted(i - 1) ? 'disabled' : ''} onclick="openDay(${i})">Start</button>
//     `;
//     daysContainer.appendChild(dayCard);
//   }
// });

// function getProgress(day) {
//   const completed = JSON.parse(localStorage.getItem(`day-${day}-completed`) || "[]");
//   return completed.length;
// }

// function isDayCompleted(day) {
//   const completed = JSON.parse(localStorage.getItem(`day-${day}-completed`) || "[]");
//   return completed.length === 15;
// }

// function openDay(day) {
//   window.location.href = `day${day}.html`;
// }

