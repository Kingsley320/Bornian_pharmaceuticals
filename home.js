const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const cards = document.querySelectorAll(".card");

let currentCard = 0;
cards[currentCard].classList.add("active");

prevBtn.addEventListener("click", () => {
  cards[currentCard].classList.remove("active");
  currentCard = (currentCard - 1 + cards.length) % cards.length;
  cards[currentCard].classList.add("active");
});

nextBtn.addEventListener("click", () => {
  cards[currentCard].classList.remove("active");
  currentCard = (currentCard + 1) % cards.length;
  cards[currentCard].classList.add("active");
});
