const openAnswer = document.querySelectorAll(
  '.card__header h2, .card__header img'
);

openAnswer.forEach((el) => {
  el.addEventListener('click', (event) => {
    event.target.parentElement.parentElement.classList.toggle('active');
  });
});
