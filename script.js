document.getElementById("startButton").addEventListener("click", () => {
  document.getElementById("startButton").classList.add("hidden");
  document.getElementById("question1").classList.remove("hidden");
});

let rating1 = 0;
let rating2 = 0;

document.querySelectorAll('[data-question="1"] span').forEach((star, idx, arr) => {
  star.addEventListener("click", () => {
    rating1 = idx + 1;
    arr.forEach(s => s.classList.remove("active"));
    for (let i = 0; i <= idx; i++) arr[i].classList.add("active");
  });
});

document.querySelector("#question1 .nextButton").addEventListener("click", () => {
  if (rating1 === 0) return;
  document.getElementById("question1").classList.add("hidden");
  document.getElementById("question2").classList.remove("hidden");
});

document.querySelectorAll('[data-question="2"] span').forEach((star, idx, arr) => {
  star.addEventListener("click", () => {
    rating2 = idx + 1;
    arr.forEach(s => s.classList.remove("active"));
    for (let i = 0; i <= idx; i++) arr[i].classList.add("active");
  });
});

document.querySelector(".validateButton").addEventListener("click", () => {
  if (rating2 < 5) {
    const alertBox = document.querySelector(".alert");
    alertBox.classList.remove("hidden");
    setTimeout(() => {
      alertBox.classList.add("hidden");
    }, 3000);
    return;
  }

  document.getElementById("question2").classList.add("hidden");
  document.querySelector(".final-message").classList.remove("hidden");

  // Ajoute un petit effet grésillement ici
  navigator.vibrate?.(200);
});