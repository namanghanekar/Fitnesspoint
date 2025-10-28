document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById("daysContainer");
  
    for (let day = 1; day <= 30; day++) {
      const completed = getCompletedCount(day);
      const isUnlocked = day === 1 || isDayFullyCompleted(day - 1);
  
      const card = document.createElement("div");
      card.classList.add("day-card");
      if (!isUnlocked) card.classList.add("locked");
  
      card.innerHTML = `
        <h3>Day ${day}</h3>
        <progress max="15" value="${completed}"></progress>
        <button ${!isUnlocked ? 'disabled' : ''} onclick="openDay(${day})">
          ${isUnlocked ? 'Start' : 'Locked'}
        </button>
      `;
  
      container.appendChild(card);
    }
  });
  
  function getCompletedCount(day) {
    const saved = JSON.parse(localStorage.getItem(`day-${day}-completed`) || "[]");
    return saved.length;
  }
  
  function isDayFullyCompleted(day) {
    const saved = JSON.parse(localStorage.getItem(`day-${day}-completed`) || "[]");
    return saved.length === 15;
  }
  
  function openDay(day) {
    window.location.href = `day${day}.html`;
  }